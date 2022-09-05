import React, { FC } from "react";
import Body from "../components/main/Body/Body";
import Footer from "../components/main/Footer/Footer";
import Header from "../components/main/Header/Header";

export const Main: FC = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <Header />
      <Body />
      <Footer />
    </div>
  );
};
