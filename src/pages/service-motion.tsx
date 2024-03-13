// Motion Graphics

import React from 'react';
import Layout from '@/components/layout/Layout';
import ServiceDetailsMain from '@/components/containers/service-details/ServiceDetailsMain';
import ServiceDetailsBanner from '@/components/layout/banner/ServiceDetailsBanner';
import UxProcess from '@/components/containers/service-details/UxProcess';
import CtaTwo from '@/components/containers/service-details/CtaTwo';
import {serviceMotiononBlog} from '@/constant/inedex'
const ServiceDetails = () => {
  return (
    <Layout header={2} footer={1} video={false}>
      <ServiceDetailsBanner hedaer="Motion Graphics" />
      <ServiceDetailsMain blogData={serviceMotiononBlog} />
      <UxProcess stepWorkData={serviceMotiononBlog} />
      <CtaTwo />
    </Layout>
  );
};

export default ServiceDetails;
