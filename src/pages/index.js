import * as React from "react";
import Layout from "../page-components/components/Layout";
import Hero from "../page-components/index/Hero";
import Features from "../page-components/index/Features";


const index = () => {
  return (
      <Layout>
        <Hero/>
          <Features/>
      </Layout>
  );
};

export default index;
