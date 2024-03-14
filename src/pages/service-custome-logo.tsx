// Custome Logo Design

import React from 'react';
import Layout from '@/components/layout/Layout';
import ServiceDetailsMain from '@/components/containers/service-details/ServiceDetailsMain';
import ServiceDetailsBanner from '@/components/layout/banner/ServiceDetailsBanner';
import UxProcess from '@/components/containers/service-details/UxProcess';
import CtaTwo from '@/components/containers/service-details/CtaTwo';
import { serviceCustomeLogoBlog } from '@/constant/inedex';
import HeaderImage from 'public/images/service/logo.jpg';
const ServiceDetails = () => {
  return (
    <Layout header={2} footer={1} video={false}>
      <ServiceDetailsBanner hedaer="Custome Logo Design" />
      <ServiceDetailsMain
        blogData={serviceCustomeLogoBlog}
        path={HeaderImage}
      />
      <UxProcess stepWorkData={serviceCustomeLogoBlog} />
      <CtaTwo />
    </Layout>
  );
};

export default ServiceDetails;
