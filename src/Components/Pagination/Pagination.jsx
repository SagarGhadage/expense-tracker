import React, { useEffect, useState } from 'react'
import style from './Pagination.module.css'
function Pagination({data,children,heading}) {
  const [employees, setEmps] = useState([])
  const [current, setCurr] = useState(1)
  const [empPaged, setempPaged] = useState([])
  const handlePage = (e) => {
    // let len = employees.length
    // if (current + Number(e.target.value) < 1) {
    //   setCurr(1)
    // } else if (current + Number(e.target.value) > Math.floor(len / 10)) {
    //   setCurr(Math.floor(len / 10) < len ? Math.ceil(len / 10) : Math.floor(len / 10))
    // } else {
    //   setCurr(current + Number(e.target.value))
    // }
    setCurr(current+Number(e.target.value))
  }
  // useEffect(() => {
  //   axios.get('https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json')
  //     .then((res) => { setEmps(res.data); setempPaged(res.data.slice(0, 10)) })
  //     .catch((e) => { console.error("failed to fetch data: ", e); alert("failed to fetch data") })
  // }, [])
  return (
    <div className={style.container}>
        {heading&&<h1 className={style.heading}>
          {heading}
        </h1>}
    <div className={style.pagination}>
    <div className="xpcontainer">
      {data.slice(current*10-10,current*10).map((ele) => {
            return (
              <div className={style.row}>
                <hr></hr>
              </div>
            )
          })}
        
      <div className="btngrp">
        <button value={-1} 
        className="xpbtn"
          type="button"
          name="button"
          onClick={(e) => handlePage(e)}
        >Previous</button>
        <div className="PgNo">{current}</div>
        <button value={1} 
        className="xpbtn"
          type="button"
          name="button"
          onClick={(e) => handlePage(e)}
        >Next</button>
      </div>
    </div>
    </div>
    </div>
  )
}

export default Pagination