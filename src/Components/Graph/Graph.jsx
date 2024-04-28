import React from 'react'
import style from './Graph.module.css'

function Graph({heading,data}) {
  const arr=data.sort((a,b)=>b.value-a.value).slice(0,3)
  console.log(arr)
  let max=0
  for(let i=0;i<arr.length;i++){
    max=Math.max(max,arr[i].value)
  }
  const per=arr.map((ele)=>{
    return {...ele,value:(ele.value/max)*100}
  })
  console.log(max,per,)

 
  return (
    <div className={style.container}>
      <h1 className={style.heading}>{heading}
      </h1>
      <div className={style.Graph}>
        <div className={style.bars}>
          {per.map((ele)=>
          <div key={ele.name}className={style.barContainer}>
            <div className={style.barHeading}>{ele.name}</div>
            <div className={style.barWraper}>
            <div className={style.bar} style={{width:`${ele.value}%`}}></div>
            </div>
          </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Graph






