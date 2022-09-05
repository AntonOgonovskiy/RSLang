import React, { FC } from "react";
import Footer from "../components/main/Footer/Footer";
import Header from "../components/main/Header/Header";
import StatisticsBody from "../components/StatisticsBody/StatisticsBody";

const Statistics: FC = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <Header linkToMain="/" />
      <StatisticsBody />
      <Footer />
    </div>
  );
};

export default Statistics;
