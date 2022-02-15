import * as React from "react";
import Layout from "../components/Layout";
import RoadmapSection from "../page-components/roadmap/RoadmapSection";
import Nodestats from "../components/Statusbar/Nodestats";
import Seo from "../components/Seo";




const RoadmapPage = () => {
  return(
      <Layout>
          <Seo title="Roadmap"/>
        <RoadmapSection/>
          <Nodestats/>
      </Layout>
  )
}

export default RoadmapPage