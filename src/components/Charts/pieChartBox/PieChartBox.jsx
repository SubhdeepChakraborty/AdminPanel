import React from "react";
import "./pie.scss";
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

const data = [
  { name: "Mobile", value: 400, color: "#0088FE" },
  { name: "Tablet", value: 300, color: "#00C49F" },
  { name: "Laptop", value: 600, color: "#FFBB28" },
];

const PieChartBox = () => {
  return (
    <div className="PieChartBox">
      <h1 className="title mt-[1rem]">Leads by Source</h1>
      <div className="chart">
        <ResponsiveContainer width="99%" height={300}>
          <PieChart>
            <Tooltip
              contentStyle={{
                background: "white",
                borderRadius: "5px",
              }}
            />
            <Pie
              data={data}
              innerRadius={60}
              outerRadius={80}
              paddingAngle={5}
              fill="#ffffff"
              dataKey="value"
            >
              {data.map((item) => (
                <Cell key={item.name} fill={item.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="options">
        {data.map((item) => (
          <div className="option" key={item.name}>
            <div className="titleText">
              <div className="dot" style={{ backgroundColor: item.color }} />
              <div className="name-value">
                <span className="name">{item.name}</span>
              </div>
            </div>
            <span className="num font-[Merriweather]">{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PieChartBox;
