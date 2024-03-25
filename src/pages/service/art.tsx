import React from 'react';
import Layout from '@/components/layout/Layout';
import ServiceDetailsMain from '@/components/containers/service-details/ServiceDetailsMain';
import ServiceDetailsBanner from '@/components/layout/banner/ServiceDetailsBanner';
import UxProcess from '@/components/containers/service-details/UxProcess';
import CtaTwo from '@/components/containers/service-details/CtaTwo';
import { serviceArtBlog } from '@/constant/inedex';
import HeaderImage from 'public/images/service/art.png';
import MiniHeaderImage from 'public/images/service/artmini.jpg';
import TeamMembers from '@/components/containers/TeamMembers';

//Image Service

import one from 'public/images/logo/one1.jpg';
import two from 'public/images/logo/two2.jpg';
import three from 'public/images/logo/three.jpg';
import four from 'public/images/logo/four.jpg';
import five from 'public/images/logo/five.jpg';
import six from 'public/images/logo/six.jpg';
import seven from 'public/images/logo/seven.jpg';
import eight from 'public/images/logo/eight.jpg';
import nine from 'public/images/logo/nine.jpg';
import ten from 'public/images/logo/ten.jpg';

const ServiceDetails = () => {
  const imageChunk = [
    one,
    two,
    three,
    four,
    five,
    six,
    seven,
    eight,
    nine,
    ten,
  ];
  return (
    <Layout header={2} footer={1} video={false}>
      <ServiceDetailsBanner
        hedaer="Illustration and Art | Any Graphics Today"
        breadcrumb="Illustration and Art"
      />
      <ServiceDetailsMain
        blogData={serviceArtBlog}
        path={HeaderImage}
        miniPath={MiniHeaderImage}
        serviceName={imageChunk}
      />
      <UxProcess stepWorkData={serviceArtBlog} />
      <CtaTwo />
    </Layout>
  );
};

export default ServiceDetails;
