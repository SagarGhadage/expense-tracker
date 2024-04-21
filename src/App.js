import logo from './logo.svg';
import './App.css';
import Section, { sectionType } from './Components/Section/Section';
import Card, { cardType } from './Components/Card/Card';
import Graph from './Components/GraphV1/Graph';
import Pagination from './Components/Pagination/Pagination';
import PieC from './Components/Pie/Pie';
import Indicator from './Components/Indicator/Indicator';
import { data } from './data';
function App() {
  return (
    <div className="App">
      <h1 className='App-header'>Expense Tracker</h1>
      <Section varient={sectionType.BG_Grey}>
        <Card heading={"Wallet Balance"} value={"₹4500"} type={cardType.Balance} handleClick={"addBalance"} ></Card>
        <Card heading={"Expences"} value={"₹500"} type={cardType.Expences} handleClick={"addExpense"}></Card>
        <PieC >
          <Indicator data={[{ text: "Food", color: "#A000FF" }, { text: "Inter", color: "#FF9304" }]}></Indicator>
        </PieC>
      </Section>
      <Section>
        <Pagination heading={"Recent Transactions"}>
        </Pagination>
        <Graph heading={"Top Expense"} data={data}>
        </Graph>
      </Section>
    </div>
  );
}

export default App;
