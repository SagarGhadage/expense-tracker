import React from 'react'
import style from './Indicator.module.css'
function Indicator({ data }) {
    return (
        <div className={style.Container}>
            {data.map((ele) => {
                return (
                    <div key={ele.text}className={style.Indicator}>
                        <div className={style.box} style={{ background: ele.color }} ></div>
                        <span className={style.span}>{ele.text}</span>
                    </div>)
            })}
        </div>
    )
}

export default Indicator