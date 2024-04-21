import React from 'react'
import style from './Pagination.module.css'
function Pagination({data,children,heading}) {
  return (
    <div className={style.container}>
        {heading&&<h1 className={style.heading}>
          {heading}
        </h1>}
    <div className={style.pagination}>
    
    </div>
    </div>
  )
}

export default Pagination