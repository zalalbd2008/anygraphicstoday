// Packaging Design

import React from 'react';
import Layout from '@/components/layout/Layout';
import ServiceDetailsMain from '@/components/containers/service-details/ServiceDetailsMain';
import ServiceDetailsBanner from '@/components/layout/banner/ServiceDetailsBanner';
import UxProcess from '@/components/containers/service-details/UxProcess';
import CtaTwo from '@/components/containers/service-details/CtaTwo';
import { servicePackageingBlog } from '@/constant/inedex';

const ServiceDetails = () => {
  return (
    <Layout header={2} footer={1} video={false}>
      <ServiceDetailsBanner hedaer="Packaging Design" />
      <ServiceDetailsMain blogData={servicePackageingBlog} />
      <UxProcess stepWorkData={servicePackageingBlog} />
      <CtaTwo />
    </Layout>
  );
};

export default ServiceDetails;
