import React from 'react';
import Layout from '@/components/layout/Layout';
import ServiceDetailsMain from '@/components/containers/service-details/ServiceDetailsMain';
import ServiceDetailsBanner from '@/components/layout/banner/ServiceDetailsBanner';
import UxProcess from '@/components/containers/service-details/UxProcess';
import CtaTwo from '@/components/containers/service-details/CtaTwo';

// data source
import { serviceMarketingBlog } from '@/constant/inedex'
import HeaderImage from 'public/images/service/advertisment.jpg';
import MiniMarkettingImage from 'public/images/service/minimarketing.jpg';
import Head from 'next/head';
import TeamMembers from '@/components/containers/TeamMembers';


const ServiceDetails = () => {
  return (
    <Layout header={2} footer={1} video={false}>
      <Head>
        <title>
          Graphic Design for Advertisement & Marketing | Any Graphics Today
        </title>
        <meta
          name="description"
          content="Get Advertisement & Marketing Designs at No Upfront Charge. Get Custom Visuals Today. Elevate Your Brand with Expert Graphic Design Services."
        />
      </Head>
      <ServiceDetailsBanner
        hedaer="Advertisement & Marketing Design | Any Graphics Today"
        breadcrumb="Advertisement & Marketing Design"
      />
      <ServiceDetailsMain
        blogData={serviceMarketingBlog}
        path={HeaderImage}
        miniPath={MiniMarkettingImage}
      />
      <UxProcess stepWorkData={serviceMarketingBlog} />
      {/* <TeamMembers /> */}
      <CtaTwo />
    </Layout>
  );
};

export default ServiceDetails;
