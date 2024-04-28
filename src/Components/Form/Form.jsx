import React from 'react'
import style from './form.module.css'
import { categories } from '../../data';
import Button, { btnVarient } from '../Button/Button';
function Form({ children, data, type, handleSubmit, setData, handleCancel }) {
  const handleInputChange = (e) => {
    setData((prevState) => ({ ...prevState, [e.target.name]: e.target.value }));
  };
  switch (type) {
    case Formtype.AddIncome: {
      return (
        <div>
          <h2 className="formHeader">Add Balance</h2>
          <form className="incomeFrom" onSubmit={handleSubmit}>
            <input
              type="number"
              placeholder="Income amount"
              className={style.input}
              name="income"
              value={data.income}
              onChange={(e) => handleInputChange(e)}
              required
            />
            <div className={style.btns}>
              <div className={style.ybtn}>
              <Button varient={btnVarient.YELLOW} handleClick={handleSubmit} type={"submit"} >Add Balance</Button>
              </div>
              
              <div className={style.gbtn}>
              <Button
                varient={btnVarient.LITEGREY}
                type="reset"
                handleClick={handleCancel}
              >
                Cancel
              </Button>
              </div>
            </div>
          </form>
        </div>
      )
    }
    case Formtype.AddExpence:
      {
        return <div className="">
          <h2 className="formHeader">Add Expense</h2>
          <form className="incomeFrom" onSubmit={handleSubmit}>
            <input
              name="title"
              placeholder="Title"
              value={data.title}
              onChange={handleInputChange}
              requireds
            />

            <input
              name="amount"
              placeholder="Price"
              type="number"
              value={data.amount}
              onChange={handleInputChange}
              required
            />
            <select
              className="select"
              name="category"
              value={data.category}
              onChange={handleInputChange}
              required
            >
              <option value="">Select Category</option>{" "}
              {/* Default empty option */}
              {categories.map((category, index) => (
                <option key={index} value={category}>
                  {category}
                </option>
              ))}
            </select>
            <input
              name="date"
              placeholder="Date"
              type="date"
              value={data.date}
              onChange={handleInputChange}
              required
            />
            <div className={style.btns}>
              <div className={style.ybtn}>
              <Button varient={btnVarient.YELLOW} type={"submit"}>
                Add Expense
              </Button>
              </div>
              <div className={style.gbtn}>
              <Button
                varient={btnVarient.LITEGREY}
                type="button"
                handleClick={handleCancel}
              >
                Cancel
              </Button>
              </div>
            </div>
          </form>
        </div>
      }
    case Formtype.EditExpence:
      {
        return <div className="">
          <h2 className="formHeader">Edit Expense</h2>
          <form className="incomeForm" onSubmit={handleSubmit}>
            <input
              name="title"
              placeholder="Title"
              value={data.title}
              onChange={handleInputChange}
              requireds
            />

            <input
              name="amount"
              placeholder="Price"
              type="number"
              value={data.amount}
              onChange={handleInputChange}
              required
            />
            <select
              className="select"
              name="category"
              value={data.category}
              onChange={handleInputChange}
              required
            >
              <option value=''>Select Category</option>{" "}
              {/* Default empty option */}
              {categories.map((category, index) => (
                <option key={index} value={category}>
                  {category}
                </option>
              ))}
            </select>
            <input
              name="date"
              placeholder="Date"
              type="date"
              value={data.date}
              onChange={handleInputChange}
              required
            />
            <div className={style.btns}>
            <div className={style.ybtn}>
              <Button varient={btnVarient.YELLOW}  type={"submit"}>Save</Button>
              </div>
              <div className={style.gbtn}>
              <Button
                varient={btnVarient.LITEGREY}
                type="button"
                handleClick={handleCancel}
              >
                Cancel
              </Button>
              </div>
            </div>
          </form>
        </div>
      }
    default: {
      return <>Form</>
    }
  }
}
export const Formtype = Object.freeze({
  AddIncome: 'AddIncome',
  AddExpence: 'AddExpence',
  EditExpence: 'EditExpense',
})
export default Form