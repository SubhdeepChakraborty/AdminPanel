import React from "react";
import "./homepage.scss";
import TopBox from "../topbox/TopBox";
import { motion } from "framer-motion";
import {
  chartBoxUser,
  chartBoxRevenue,
  chartBoxProduct,
  chartBoxConversion,
  barChartBoxRevenue,
  barChartBoxVisit,
} from "../../data";
import { Chart, ChartBox, PieChartBox, BigchartBox } from "../Charts";

const Homepage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        ease: "easeIn",
      }}
      className="home"
    >
      <div className="box box1">
        <TopBox />
      </div>
      <div className="box box2">
        <ChartBox props={chartBoxUser} />
      </div>
      <div className="box box3">
        <ChartBox props={chartBoxProduct} />
      </div>
      <div className="box box4">
        <PieChartBox />
      </div>
      <div className="box box5">
        <ChartBox props={chartBoxRevenue} />
      </div>
      <div className="box box6">
        <ChartBox props={chartBoxConversion} />
      </div>
      <div className="box box7">
        <BigchartBox />
      </div>
      <div className="box box8">
        <Chart props={barChartBoxVisit} />
      </div>
      <div className="box box9">
        <Chart props={barChartBoxRevenue} />
      </div>
    </motion.div>
  );
};

export default Homepage;
