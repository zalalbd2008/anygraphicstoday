import React from 'react';
import Layout from '@/components/layout/Layout';
import ServiceDetailsMain from '@/components/containers/service-details/ServiceDetailsMain';
import ServiceDetailsBanner from '@/components/layout/banner/ServiceDetailsBanner';
import UxProcess from '@/components/containers/service-details/UxProcess';
import CtaTwo from '@/components/containers/service-details/CtaTwo';
import serviceBrandBlog from '@/constant/services/serice-brand';
import brandImage from 'public/images/portfolio/image_9.jpg';
import MiniBrandImage from 'public/images/service/brands.jpg';
import Head from 'next/head';
import TeamMembers from '@/components/containers/TeamMembers';
const ServiceDetails = () => {
  return (
    <Layout header={2} footer={1} video={false}>
      <Head>
        <title>
          Graphic Design for Brand & Design Identity | Any Graphics Today
        </title>
        <meta
          name="title"
          content="Graphic Design for Brand & Design Identity | Any Graphics Today"
        />
        <meta
          name="description"
          content="Brand & Design Identity Graphics at No Upfront Charge. Get Custom Visuals Today. Elevate Your Brand with Expert Graphic Design Services."
        />
      </Head>
      <ServiceDetailsBanner
        hedaer="Graphic Design for Brand & Design Identity | Any Graphics Today"
        breadcrumb="Branding  Design "
      />
      <ServiceDetailsMain
        blogData={serviceBrandBlog}
        path={brandImage}
        miniPath={MiniBrandImage}
      />
      <UxProcess stepWorkData={serviceBrandBlog} />
      <TeamMembers />
      <CtaTwo />
    </Layout>
  );
};

export default ServiceDetails;
