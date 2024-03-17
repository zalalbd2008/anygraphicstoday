// UI/UX Design
import React from 'react';
import Layout from '@/components/layout/Layout';
import ServiceDetailsMain from '@/components/containers/service-details/ServiceDetailsMain';
import ServiceDetailsBanner from '@/components/layout/banner/ServiceDetailsBanner';
import UxProcess from '@/components/containers/service-details/UxProcess';
import CtaTwo from '@/components/containers/service-details/CtaTwo';
import { serviceWebsiteBlog } from '@/constant/inedex';
import webisteImage from 'public/images/portfolio/image_8.jpg';

const ServiceDetails = () => {
  return (
    <Layout header={2} footer={1} video={false}>
      <ServiceDetailsBanner hedaer="Website design" />
      <ServiceDetailsMain blogData={serviceWebsiteBlog} path={webisteImage} />
      <UxProcess stepWorkData={serviceWebsiteBlog} />
      <CtaTwo />
    </Layout>
  );
};

export default ServiceDetails;
