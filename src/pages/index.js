import * as React from "react";
import Layout from "../components/Layout";
import Hero from "../page-components/index/Hero";
import Features from "../page-components/index/Features";
import SignupNews from "../components/SignupNews";
import Nodestats from "../components/Statusbar/Nodestats";


const index = () => {
  return (
      <Layout>
        <Hero/>
          <Features/>
          <Nodestats/>
      </Layout>
  );
};

export default index;
