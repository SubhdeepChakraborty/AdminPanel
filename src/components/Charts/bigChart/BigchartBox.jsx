import React from "react";
import "./bigchart.scss";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Sun",
    users: 4000,
    movies: 900,
    released: 400,
  },
  {
    name: "Mon",
    users: 3000,
    movies: 1000,
    released: 600,
  },
  {
    name: "Tue",
    users: 5000,
    movies: 1500,
    released: 500,
  },
  {
    name: "Wed",
    users: 2000,
    movies: 2000,
    released: 700,
  },
  {
    name: "Thu",
    users: 5000,
    movies: 3000,
    released: 400,
  },
  {
    name: "Fri",
    users: 2390,
    movies: 1000,
    released: 500,
  },
  {
    name: "Sat",
    users: 3490,
    movies: 4300,
    released: 450,
  },
];

const BigchartBox = () => {
  return (
    <div className="big-Chart">
      <h1>Detail Overview</h1>
      <div className="chart">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <XAxis dataKey="name" />

            <Tooltip contentStyle={{ background: "#2a3447" }} />
            <Area
              type="monotone"
              dataKey="users"
              stackId="1"
              stroke="#8884d8"
              fill="#8884d8"
            />
            <Area
              type="monotone"
              dataKey="movies"
              stackId="1"
              stroke="#82ca9d"
              fill="#82ca9d"
            />
            <Area
              type="monotone"
              dataKey="released"
              stackId="1"
              stroke="#ffc658"
              fill="#ffc658"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BigchartBox;
