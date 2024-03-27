// Publication Design
import React from 'react';
import Layout from '@/components/layout/Layout';
import ServiceDetailsMain from '@/components/containers/service-details/ServiceDetailsMain';
import ServiceDetailsBanner from '@/components/layout/banner/ServiceDetailsBanner';
import UxProcess from '@/components/containers/service-details/UxProcess';
import CtaTwo from '@/components/containers/service-details/CtaTwo';

// data source
import { servicePublicationBlog } from '@/constant/inedex';
import HeaderImage from 'public/images/service/publication.jpg';
import HeaderMINIImage from 'public/images/service/miniservice.jpg';
import Head from 'next/head';
import TeamMembers from '@/components/containers/TeamMembers';
const ServiceDetails = () => {
  return (
    <Layout header={2} footer={1} video={false}>
      <Head>
        <title>
          Publication Design by Creative Designers | Any Graphics Today
        </title>
      </Head>
      <ServiceDetailsBanner
        hedaer="Publication Design by Creative Designers | Any Graphics Today"
        breadcrumb="Publication Design"
      />
      <ServiceDetailsMain
        blogData={servicePublicationBlog}
        path={HeaderImage}
        miniPath={HeaderMINIImage}
      />
      <UxProcess stepWorkData={servicePublicationBlog} />
      {/* <TeamMembers /> */}
      <CtaTwo />
    </Layout>
  );
};

export default ServiceDetails;
