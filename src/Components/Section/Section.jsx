import React from 'react'
import style from "./Section.module.css"
import Card, { cardType } from '../Card/Card'
import Pie from '../Pie/Pie'
function Section({ varient, children, addBalance, addExpense }) {

  if (varient === sectionType.BG_Grey) {
    return (
      <div className={style.section}>
        {children}</div>
    )
  }
  else {
    return (
      <div className={style.default}>
        {children}</div>
    )
  }
}
export const sectionType = Object.freeze({
  BG_Grey: "grey", Default: "default",
})
export default Section