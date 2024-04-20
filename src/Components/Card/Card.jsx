import React from 'react'
import style from "./Card.module.css"
import Button, { btnVarient } from '../Button/Button'
function Card({ heading, value, handleClick, type }) {
  return (
    <div className={style.card}>
      {heading && <h2 className={style.heading}>{heading}:<span className={type===cardType.Balance?style.balance:type===cardType.Expences?style.expenses:""}> {value}</span></h2>}
      <div className={style.btn}>
        {type===cardType.Expences&&<Button varient={btnVarient.RED} onClick={handleClick}>+ Add Expense</Button> }
        {type===cardType.Balance&&<Button varient={btnVarient.GREEN} onClick={handleClick}>+ Add Income</Button> }
      </div>
    </div>
  )
}
export const cardType = Object.freeze({
  Expences: "expences", Balance: "balance"
})
export default Card