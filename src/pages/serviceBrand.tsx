import React from 'react';
import Layout from '@/components/layout/Layout';
import ServiceDetailsMain from '@/components/containers/service-details/ServiceDetailsMain';
import ServiceDetailsBanner from '@/components/layout/banner/ServiceDetailsBanner';
import UxProcess from '@/components/containers/service-details/UxProcess';
import CtaTwo from '@/components/containers/service-details/CtaTwo';
import serviceBrandBlog from '@/constant/services/serice-brand';
import brandImage from 'public/images/portfolio/image_9.jpg';
const ServiceDetails = () => {
  
  
  return (
    <Layout header={2} footer={1} video={false}>
      <ServiceDetailsBanner hedaer="Brand & Identity Design" />
      <ServiceDetailsMain blogData={serviceBrandBlog} path={brandImage} />
      <UxProcess stepWorkData={serviceBrandBlog} />
      <CtaTwo />
    </Layout>
  );
};

export default ServiceDetails;
