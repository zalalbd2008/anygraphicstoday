import React from 'react';
import Layout from '@/components/layout/Layout';
import ServiceDetailsMain from '@/components/containers/service-details/ServiceDetailsMain';
import ServiceDetailsBanner from '@/components/layout/banner/ServiceDetailsBanner';
import UxProcess from '@/components/containers/service-details/UxProcess';
import CtaTwo from '@/components/containers/service-details/CtaTwo';

// data source
import {serviceMarketingBlog} from '@/constant/inedex'
const ServiceDetails = () => {
  return (
    <Layout header={2} footer={1} video={false}>
      <ServiceDetailsBanner hedaer="Advertisement And Marketing Design" />
      <ServiceDetailsMain blogData={serviceMarketingBlog} />
      <UxProcess stepWorkData={serviceMarketingBlog} />
      <CtaTwo />
    </Layout>
  );
};

export default ServiceDetails;
