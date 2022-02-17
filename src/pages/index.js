import * as React from "react";
import Layout from "../components/Layout";
import Hero from "../page-components/index/Hero";
import Features from "../page-components/index/Features";
import Nodestats from "../components/Statusbar/Nodestats";
import CTAdesktop from "../page-components/index/CTAdesktop";
import Badges from "../page-components/index/Badges";
import CTAhugin from "../page-components/index/CTAhugin";
import LatestBlog from "../page-components/index/LatestBlog";
import Seo from "../components/Seo";


const index = () => {
  return (
      <Layout>
          <Seo title="Home"/>
          <Hero/>
          <Features/>
          <Nodestats/>
          <CTAhugin/>
          <Badges/>
          <CTAdesktop/>
          <LatestBlog/>
      </Layout>
  );
};

export default index;
