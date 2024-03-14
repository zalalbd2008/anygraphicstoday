import React, { Fragment } from 'react';
import Image from 'next/image';

import thumbtwo from 'public/images/service/thumb-two.png';
import HeaderImage from 'public/images/service/thumb-two.png';
import Link from 'next/link';

const ServiceDetailsMain = ({ blogData, path }: any) => {

  return (
    <section className=" mb-5 service-details fade-wrapper">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-xl-10">
            <div className="service-details__slider">
              <div className="service-details__slider-single">
                <div className="poster fade-top">
                  <Image src={path || HeaderImage} alt="Image" />
                </div>

                {blogData.map(
                  (blog: any, index: React.Key | null | undefined) => {
                    return !blog.areaHalfWidth && !blog.workStep ? (
                      <div
                        className="details-group section__cta text-start"
                        key={index}
                      >
                        <h3 className="title-anim">{blog.title}</h3>
                        <p dangerouslySetInnerHTML={{ __html: blog.des }} />
                      </div>
                    ) : null;
                  }
                )}
                <div className="footer__cta text-start pt-4">
                  <Link href="contact-us" className="btn btn--secondary">
                    book a designer now
                  </Link>
                </div>

                {blogData.map(
                  (blog: any, index: React.Key | null | undefined) =>
                    blog.areaHalfWidth &&
                    !blog.workStep && (
                      <div className="section__content-cta" key={index}>
                        <div className="row gaper">
                          <div className="col-12 col-lg-7">
                            <div className="details-group">
                              <h3 className="title-anim">{blog.title}</h3>
                              <p
                                dangerouslySetInnerHTML={{ __html: blog.des }}
                              />
                              <div className="footer__cta text-start py-5">
                                <Link
                                  href="contact-us"
                                  className="btn btn--secondary"
                                >
                                  call a designer now
                                </Link>
                              </div>
                            </div>
                          </div>
                          <div className="col-12 col-lg-5">
                            <div className="poster-small">
                              <Image src={path || thumbtwo} alt="Image" />
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetailsMain;
