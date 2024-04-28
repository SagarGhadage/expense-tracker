import React from 'react'
import style from './Pie.module.css'
import { PieChart, Pie, Cell, Legend, Tooltip } from "recharts";
import Indicator from '../Indicator/Indicator';

const COLORS = ["#FF9304", "#A000FF", "#FDE006","RED"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
}

function PieC({ children,data }) {
  
  return (
    <div className={style.pie}>
      <PieChart width={300} height={300} margin={100}>
        <Pie
          data={data}
          cx={145}
          cy={145}
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={132}
          fill="#8884d8"
          dataKey="value"
          stroke='none'
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      <Tooltip />
        <Legend className="chart-legend" />
      </PieChart> 
          {/* <Indicator data={[{ text: "Food", color: "#A000FF" }, { text: "Inter", color: "#FF9304" }]}></Indicator> */}
      {children}
    </div>
  )
}

export default PieC