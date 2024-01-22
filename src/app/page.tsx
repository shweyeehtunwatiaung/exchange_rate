import React from "react";
import { Metadata, NextPage } from "next";
import Home from "../components/pageContainers/Home";
import dayjs from "dayjs";

export const metadata: Metadata = {
  title: "Home | Exchange Rate",
  description: "Exchange Rate"
};

const HomePage: NextPage = () => {
  // get the updated date
  const lastUpdated = dayjs().format("ddd, DD MMM YYYY HH:mm:ss [GMT]");
  return <Home lastUpdated={lastUpdated} />;
};

export default HomePage;
