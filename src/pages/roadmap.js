import * as React from "react";
import Layout from "../components/Layout";
import RoadmapSection from "../page-components/roadmap/RoadmapSection";
import Nodestats from "../components/Statusbar/Nodestats";




const RoadmapPage = () => {
  return(
      <Layout pageTitle="Roadmap">
        <RoadmapSection/>
          <Nodestats/>
      </Layout>
  )
}

export default RoadmapPage