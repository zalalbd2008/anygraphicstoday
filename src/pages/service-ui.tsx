// UI/UX Design
import React from 'react';
import Layout from '@/components/layout/Layout';
import ServiceDetailsMain from '@/components/containers/service-details/ServiceDetailsMain';
import ServiceDetailsBanner from '@/components/layout/banner/ServiceDetailsBanner';
import UxProcess from '@/components/containers/service-details/UxProcess';
import CtaTwo from '@/components/containers/service-details/CtaTwo';
import { serviceUiBlog } from '@/constant/inedex';
import HeaderImage from 'public/images/service/ui.jpg';
const ServiceDetails = () => {
  return (
    <Layout header={2} footer={1} video={false}>
      <ServiceDetailsBanner hedaer="UI/UX Design" />
      <ServiceDetailsMain blogData={serviceUiBlog} path={HeaderImage} />
      <UxProcess stepWorkData={serviceUiBlog} />
      <CtaTwo />
    </Layout>
  );
};

export default ServiceDetails;
