import React from "react";
import { Link } from "react-router-dom";
import { Line, LineChart, ResponsiveContainer, Tooltip } from "recharts";
import "./chartbox.scss";

const ChartBox = ({ props }) => {
  return (
    <div className="chartBox">
      <div className="boxInfo">
        <div className="title">
          <img src={props.icon} alt="" />
          <span className="text">{props.title}</span>
        </div>
        <h1 className="text-2xl">{props.number}</h1>
        <Link style={{ color: props.color }}>View all</Link>
      </div>
      <div className="chartInfo">
        <div className="chart">
          <ResponsiveContainer width="99%" height="100%">
            <LineChart data={props.chartData}>
              <Tooltip
                contentStyle={{ background: "transparent", border: "none" }}
                labelStyle={{ display: "none" }}
                position={{ x: -10, y: 80 }}
                animationEasing="ease-in"
              />
              <Line
                type="monotone"
                dataKey={props.dataKey}
                stroke={props.color}
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="texts">
          <div
            className="percentage font-[Merriweather]"
            style={{ color: props.percentage < 0 ? "tomato" : "limegreen" }}
          >
            {props.percentage}%
          </div>
          <div className="duration">this month</div>
        </div>
      </div>
    </div>
  );
};

export default ChartBox;
