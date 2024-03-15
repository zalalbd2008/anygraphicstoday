import React from "react";
import Layout from "@/components/layout/Layout";
import CmnBanner from "@/components/layout/banner/CmnBanner";
import PortfolioMain from "@/components/containers/PortfolioMain";
import TeamMembers from "@/components/containers/TeamMembers";

const OurPortfolio = () => {
  return (
    <Layout header={2} footer={1} video={0}>
      <CmnBanner title="Portfolio " navigation="Portfolio " />
      <PortfolioMain />
{/*       
      <TeamMembers /> */}
    </Layout>
  );
};

export default OurPortfolio;
