import * as React from "react";
import Layout from "../components/Layout";
import RoadmapSection from "../page-components/roadmap/RoadmapSection";
import Nodestats from "../components/Statusbar/Nodestats";
import SEO from "../components/Seo";




const RoadmapPage = () => {
  return(
      <Layout>
          <SEO title="Roadmap"/>
        <RoadmapSection/>
          <Nodestats/>
      </Layout>
  )
}

export default RoadmapPage