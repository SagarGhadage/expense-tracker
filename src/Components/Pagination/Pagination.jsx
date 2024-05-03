import React, { useEffect, useState } from 'react'
import style from './Pagination.module.css'
import { ImAirplane, } from "react-icons/im";
import { MdLocalGroceryStore } from "react-icons/md";
import { ReactComponent as Food } from "../../assets/Pizza_light.svg";
import { ReactComponent as Entertainment } from '../../assets/Gift_light.svg'
import { ReactComponent as Arrow_Left } from "../../assets/Arrow_alt_left_alt.svg";
import { ReactComponent as Arrow_R } from "../../assets/Arrow_alt_lright_alt.svg"
import { TiDeleteOutline } from "react-icons/ti";
import { ReactComponent as TravelIcon } from '../../assets/suitcase_light (1).svg'
import { MdOutlineModeEditOutline } from "react-icons/md";
import { FaMoneyBillWave } from "react-icons/fa6";
import { FcDatabase } from "react-icons/fc";
function Pagination({ data, children, heading, onEditClick,onDeleteClick, setExpense }) {
  const [current, setCurr] = useState(1)
  console.log(data)
  const handlePage = (e) => {
    let len = data.length
    if (current + Number(e) < 1) {
      setCurr(1)
    } else if (current + Number(e) > Math.floor(len / 3)) {
      setCurr(Math.floor(len / 3) < len ? Math.ceil(len / 3) : Math.floor(len / 3))
    } else {
      setCurr(current + Number(e))
    }
    // setCurr(current + Number(e))
  }
  const icon = (catagory) => {//debugger
    switch (catagory) {
      case "Entertainment": { return <Entertainment /> }
      case "Travel": { return <ImAirplane /> }
      case "Food": { return <Food></Food> }
      case "Shopping": { return <MdLocalGroceryStore></MdLocalGroceryStore> }
      case "Grocery": { return <MdLocalGroceryStore /> }
      case "Bills": { return <FaMoneyBillWave /> }
      case "Others": { return <FcDatabase /> }
      default: {
        return null
      }
    }
  }
  return (
    <div className={style.container}>
      {heading && <h1 className={style.heading}>
        {heading}
      </h1>}
      <div className={style.pagination}>
        <div className={style.paginationContainer}>
          {data.slice(current * 3 - 3, current * 3).map((ele) => {
            return (<div key={ele.id}>
              <div key={ele.id} className={style.row}>
                <div className={style.title}>
                  <div className={style.icon}>{icon(ele.category)}</div>
                  <div className={style.titleGrp}>
                    <div className={style.titleText}>{ele.title}</div>
                    <div className={style.date}>{ele.date}</div>
                  </div>
                </div>
                <div className={style.expenseEdit}>
                  <div className={style.amount}> ₹{ele.amount}</div>
                  <div className={style.delete} onClick={()=>{onDeleteClick(ele)}}><TiDeleteOutline className={style.deletIcon}></TiDeleteOutline></div>
                  <div id={ele.id} className={style.edit} onClick={() => {
                    onEditClick(); console.log(ele)
                    setExpense(ele)
                  }}><MdOutlineModeEditOutline className={style.editIcon} ></MdOutlineModeEditOutline></div>
                </div>
              </div>
              <hr /></div>
            )
          })}
          <div className={style.btngrp}>
            <button value={-1}
              className={style.xpbtn}
              type="button"
              name="button"
              onClick={(e) => handlePage(e.currentTarget.value)}
            ><Arrow_Left values={-1}/></button>
            <div className={style.PgNo}>{current}</div>
            <button value={1}
              className={style.xpbtn}
              type="button"
              name="button"
              onClick={(e) => handlePage(e.currentTarget.value)}
            ><Arrow_R  value={1}/></button>
          </div>
        </div>
        {children}
      </div>
    </div>
  )
}

export default Pagination