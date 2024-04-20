import React from 'react'
import style from "./Section.module.css"
import Card, { cardType } from '../Card/Card'
import Pie from '../Pie/Pie'
function Section({ varient, children,addBalance,addExpense }) {
  return (
    <div className={style.section}>
      <Card heading={"Wallet Balance"} value={"₹4500"} type={cardType.Balance} handleClick={addBalance} ></Card>
      <Card heading={"Expences"} value={"₹500"} type={cardType.Expences} handleClick={addExpense}></Card>
      <Pie></Pie>
      {children}</div>
  )
}

export default Section