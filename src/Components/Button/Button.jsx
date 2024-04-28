import React from 'react'
import style from "./Button.module.css"
function Button({ varient, handleClick, btnText, children ,type}) {
  console.log(varient)
  switch (varient) {
    case btnVarient.GREEN:
      return (
        <button className={style.GREEN} onClick={handleClick}>{btnText ? btnText : children ? children : "Button"} </button>
      )
    case btnVarient.RED: return (
      <button className={style.RED} onClick={handleClick}>{btnText ? btnText : children ? children : "Button"} </button>
    )
    case btnVarient.YELLOW:
      return (
        <button className={style.YELLOW} onClick={handleClick}>{btnText ? btnText : children ? children : "Button"} </button>
      )
    case btnVarient.LITEGREY:
      return (
        <button type={type} className={style.LITEGREY} onClick={handleClick}>{btnText ? btnText : children ? children : "Button"} </button>
      )
    default: return (
      <button className={style.defaultBtn} onClick={handleClick}>{btnText ? btnText : children ? children : "Button"} </button>
    ) 
  }

}
export const btnVarient = Object.freeze({
  YELLOW: "YELLOW", RED: "RED", GREEN: "GREEN", LITEGREY: "LIGHTGREY",
})
export default Button