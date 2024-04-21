import React from 'react'
import style from './Pie.module.css'
import { PieChart, Pie, Cell } from "recharts";

const data = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  // { name: "Group D", value: 200 },
];

const COLORS = ["#FF9304", "#A000FF", "#FDE006"];

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
function PieC({ children }) {

  return (
    <div className={style.pie}>
      <PieChart width={300} height={300}>
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
            <Cell key={`cell-${entry.name}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
      {children}
    </div>
  )
}

export default PieC