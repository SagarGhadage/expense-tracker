import './App.css';
import Section, { sectionType } from './Components/Section/Section';
import Card, { cardType } from './Components/Card/Card';
import Graph from './Components/Graph/Graph';
import Pagination from './Components/Pagination/Pagination';
import PieC from './Components/Pie/Pie';
import Modals from './Components/Modal/Modal';
import Form, { Formtype } from './Components/Form/Form';
import { useEffect, useRef, useState } from 'react';
// import { categories } from './data';
function App() {

  const [expense, setExpense] = useState({
    id: 0,
    title: "",
    amount: 0,
    category: "",
    date: "",
  });
  const expId = useRef(0);
  const [expenses, setExpenses] = useState(
    localStorage.getItem("expenses")?.length > 0
      ? JSON.parse(localStorage.getItem("expenses"))
      : []
  );
  const [income, setIncome] = useState({
    income: 0
  });
  const [balance, setBalance] = useState(0);
  const [isIncomeModalOpen, setIsIncomeModalOpen] = useState(false)
  const [isAddExpenseModalOpen, setIsAddExpenseModalOpen] = useState(false)
  const [isEditExpenseM, setIsEditExpenseM] = useState(false)
  const [data,setData]=useState([]);
  //handles 
  const totalExp = (expenses) => {
    return expenses.reduce((acc, ele) => acc + Number(ele.amount), 0)
  }

  const addExpense = (e) => {
    e.preventDefault();
    // expenses.push(expense)
    // localStorage.setItem("expenses",JSON.stringify([...expenses, expense]));
    if (balance-totalExp(expenses) < expense.amount) {
      return alert("Insufficient Balance!");
    }
    expense.id = expId.current++;
    // const updatedBalance = balance - expense.amount
    // setBalance(updatedBalance);
    // localStorage.setItem("balance", JSON.stringify(updatedBalance));
    localStorage.setItem("expenses", JSON.stringify([...expenses, expense]));

    setExpenses((prevExpenses) => [...prevExpenses, expense]);
    setIsAddExpenseModalOpen(false);
    setExpense({
      id: null,
      title: "",
      amount: null,
      category: "",
      date: "",
    });
  }
  //submit
  const handleBalanceSubmit = (e) => {//
    e.preventDefault();
    let prevBal = localStorage.getItem('balance')
    if(prevBal){
      localStorage.setItem('balance',Number(prevBal)+Number(income.income))
      setBalance(localStorage.getItem('balance'))
    }else{
      localStorage.setItem('balance',income.income)
      setBalance(localStorage.getItem('balance'))
    }
    setIsIncomeModalOpen(false)
    setIncome({income:0})
    
  }

  const handleDel=(ele)=>{
    let newExps=expenses.filter((e)=>e.id!==ele.id)
    // let bal=Number(balance)+Number(ele?.amount?ele.amount:0)
    setExpenses(newExps)
    // setBalance(bal)
    localStorage.setItem("expenses", JSON.stringify([...newExps]));
    // localStorage.setItem("balance", JSON.stringify(balance));
  }

  const handleEdit =()=>{
    let newExps=expenses.filter((e)=>e.id!==expense.id)
    let bal=Number(balance)+Number(expense?.amount?expense.amount:0)
    setExpenses([...newExps,expense])
    setBalance(bal)
    localStorage.setItem("expenses", JSON.stringify([...newExps, expense]));
    setExpense({
      id: 0,
      title: "",
      amount: null,
      category: "",
      date: "",
    })  
  }
  //sideEffects
  useEffect(() => {
    if (!localStorage.getItem('balance')) {
      setBalance(5000);
      localStorage.setItem('balance', 5000)
    } else {
      setBalance(JSON.parse(localStorage.getItem('balance')))
    }
    if (localStorage.getItem('expenses')) {
      setExpenses(JSON.parse(localStorage.getItem('expenses')))
      let max = 0
      for (let i = 0; i < expenses.length; i++) {
        max = Math.max(max, expenses[i].id)
      }
      expId.current = max + 1
      console.log(expId)
    } else {
      expId.current = 1
      console.log(expenses)
    }
  }, [])

  useEffect(() => {
    let tempdata=[]
    let map=new Map()

    expenses.forEach(element => {
      if(map.has(element.category)){
        map.set(element.category,Number(map.get(element.category))+Number(element.amount))
      }else{
        map.set(element.category,Number(element.amount))
      }
    });

    for(let [key,val] of map){
      tempdata.push({name:key,value:val})
    }

    setData([...tempdata])
   console.log(data,expenses,map)
  }, [expenses])
  
  return (
    <div className="App">
      <h1 className='App-header'>Expense Tracker</h1>

      <Section varient={sectionType.BG_Grey}>
        <Card heading={"Wallet Balance"} value={`₹${balance-totalExp(expenses)}`} type={cardType.Balance} handleClick={setIsIncomeModalOpen} ></Card>
        <Card heading={"Expences"} value={`₹${totalExp(expenses)}`} type={cardType.Expences} handleClick={setIsAddExpenseModalOpen}></Card>
        <Modals className='modal' isOpen={isAddExpenseModalOpen} setIsOpen={setIsAddExpenseModalOpen}>
          <Form type={Formtype.AddExpence} data={expense} setData={setExpense} handleCancel={() => {
            setIsAddExpenseModalOpen(false); setExpense({
              id: null,
              title: "",
              amount: null,
              category: "",
              date: "",
            })
          }}
            handleSubmit={addExpense} >
          </Form>
        </Modals>
        <Modals className='modal' isOpen={isIncomeModalOpen} setIsOpen={setIsIncomeModalOpen}>
          <Form type={Formtype.AddIncome} data={income} setData={setIncome} handleCancel={() => {
            setIncome({ income: 0 })
            setIsIncomeModalOpen(false)
          }} handleSubmit={handleBalanceSubmit} >
          </Form>
        </Modals>
        <PieC data={data}>
        </PieC>
      </Section>

      <Section>
        <Pagination
          heading={"Recent Transactions"} setExpense={setExpense}
          data={expenses}onDeleteClick={handleDel} onEditClick={(prev) => { setIsEditExpenseM(true) }} >
          <Modals isOpen={isEditExpenseM} setIsOpen={setIsEditExpenseM}>
            <Form type={Formtype.EditExpence} data={expense}
              setData={setExpense}
              handleCancel={() => {
                setIsEditExpenseM(false); setExpense({
                  id: null,
                  title: "",
                  amount: null,
                  category: "",
                  date: "",
                })
              }} handleSubmit={handleEdit} >
            </Form>
          </Modals>
        </Pagination>
        <Graph heading={"Top Expense"} data={data}>
        </Graph>
      </Section>
      <Form type={Formtype.AddExpence} data={expense} setData={setExpense} handleCancel={() => {
            setIsAddExpenseModalOpen(false); setExpense({
              id: null,
              title: "",
              amount: null,
              category: "",
              date: "",
            })
          }}
            handleSubmit={addExpense} >
          </Form>
    </div>
  );
}

export default App;
