import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import one from 'public/images/logo/one1.jpg';
import two from 'public/images/teams/two2.jpg';
import three from 'public/images/teams/three.jpg';
import four from 'public/images/teams/four.jpg';
import five from 'public/images/teams/five.jpg';
import six from 'public/images/teams/six.jpg';
import seven from 'public/images/teams/seven.jpg';
import eight from 'public/images/teams/eight.jpg';
import nine from 'public/images/teams/nine.jpg';
import ten from 'public/images/teams/ten.jpg';

const TeamMembersTwo = ({ serviceName = [] }: any) => {
  const [thunkImage, setThunkImage] = useState([one]);

  return (
    <section className="section team-slider-s">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section__header--secondary">
              <div className="row gaper align-items-center">
                <div className="col-12 col-lg-8">
                  <div className="section__header text-center text-lg-start mb-0">
                    <span className="sub-title">
                      Book A Designer Now
                      <i className="fa-solid fa-arrow-right"></i>
                    </span>
                    <h2 className="title title-anim">Our Expert Coverage</h2>
                  </div>
                </div>
                <div className="col-12 col-lg-4">
                  <div className="text-center text-lg-end">
                    <Link
                      href="contact-us"
                      className="btn btn--primary text-capitalize"
                    >
                      24hrs Services
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="team-r position-relative">
        <div className="team-s__slider-w">
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            slidesPerGroup={1}
            speed={500}
            loop={true}
            centeredSlides={false}
            modules={[Autoplay, Navigation]}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            navigation={{
              nextEl: '.next-team-s',
              prevEl: '.prev-team-s',
            }}
            className="team-s__slider"
            breakpoints={{
              1500: {
                slidesPerView: 6,
                centeredSlides: true,
              },
              768: {
                slidesPerView: 3,
                centeredSlides: true,
              },
              576: {
                slidesPerView: 2,
              },
            }}
          >
            {serviceName.map((image: any) => (
              <SwiperSlide>
                <div className="team-s__slider-single">
                  <div className="team-wrap">
                    <div className="thumb">
                      <Image
                        src={two}
                        alt="Image"
                       
                      />
                      <div
                        className="thumb__content"
                        style={{
                          backgroundImage: "url('/images/teams/bg.png')",
                        }}
                      >
                        <div className="intro">
                          <h5>Same Day Custom Made Graphics</h5>
                          <p> High Skilled Designers</p>
                        </div>
                        <hr />
                        <div className="inner">
                          <p>
                            From Logo and Branding/Identity Design to Web and
                            UI/UX Design, plus Print, Packaging, Advertising,
                            and Publication, we cover a wide spectrum of graphic
                            design services.
                          </p>
                          <div className="skill-wrap">
                            <div className="skill-bar-single">
                              <div className="skill-bar-title">
                                <p>Wireframe</p>
                              </div>
                              <div
                                className="skill-bar-wrapper"
                                data-percent="75%"
                              >
                                <div className="skill-bar">
                                  <div className="skill-bar-percent">
                                    <span className="percent-value"></span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="skill-bar-single">
                              <div className="skill-bar-title">
                                <p>Visual Design</p>
                              </div>
                              <div
                                className="skill-bar-wrapper"
                                data-percent="90%"
                              >
                                <div className="skill-bar">
                                  <div className="skill-bar-percent">
                                    <span className="percent-value"></span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <p>
                            Get your logo and small graphic designs in just 5 to
                            7 hours with Any Graphics Today.
                          </p>
                        </div>
                        <div className="social-alt">
                          <Link
                            href="https://www.facebook.com/"
                            target="_blank"
                            aria-label="share us on facebook"
                          >
                            <i className="fa-brands fa-facebook-f"></i>
                          </Link>
                          <Link
                            href="https://www.twitter.com/"
                            target="_blank"
                            aria-label="share us on twitter"
                          >
                            <i className="fa-brands fa-twitter"></i>
                          </Link>
                          <Link
                            href="https://www.pinterest.com/"
                            target="_blank"
                            aria-label="share us on pinterest"
                          >
                            <i className="fa-brands fa-linkedin-in"></i>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="content">
                      <div className="intro">
                        <h5>Same Day Custom Made Graphics</h5>
                        <p> High Skilled Designers</p>
                      </div>
                      <hr />
                      <div className="inner">
                        <p>
                          From Logo and Branding/Identity Design to Web and
                          UI/UX Design, plus Print, Packaging, Advertising, and
                          Publication, we cover a wide spectrum of graphic
                          design services.
                        </p>
                        <div className="skill-wrap">
                          <div className="skill-bar-single">
                            <div className="skill-bar-title">
                              <p>Wireframe</p>
                            </div>
                            <div
                              className="skill-bar-wrapper"
                              data-percent="75%"
                            >
                              <div className="skill-bar">
                                <div className="skill-bar-percent">
                                  <span className="percent-value"></span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="skill-bar-single">
                            <div className="skill-bar-title">
                              <p>Visual Design</p>
                            </div>
                            <div
                              className="skill-bar-wrapper"
                              data-percent="90%"
                            >
                              <div className="skill-bar">
                                <div className="skill-bar-percent">
                                  <span className="percent-value"></span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <p>
                          Get your logo and small graphic designs in just 5 to 7
                          hours with Any Graphics Today.
                        </p>
                      </div>
                      <div className="social">
                        <Link
                          href="https://www.facebook.com/"
                          target="_blank"
                          aria-label="share us on facebook"
                        >
                          <i className="fa-brands fa-facebook-f"></i>
                        </Link>
                        <Link
                          href="https://www.twitter.com/"
                          target="_blank"
                          aria-label="share us on twitter"
                        >
                          <i className="fa-brands fa-twitter"></i>
                        </Link>
                        <Link
                          href="https://www.pinterest.com/"
                          target="_blank"
                          aria-label="share us on pinterest"
                        >
                          <i className="fa-brands fa-linkedin-in"></i>
                        </Link>
                        <Link
                          href="https://www.instagram.com/"
                          target="_blank"
                          aria-label="share us on instagram"
                        >
                          <i className="fa-brands fa-instagram"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="slide-group">
          <button aria-label="previous item" className="slide-btn prev-team-s">
            <i className="fa-light fa-angle-left"></i>
          </button>
          <button aria-label="next item" className="slide-btn next-team-s">
            <i className="fa-light fa-angle-right"></i>
          </button>
        </div>
      </div>
    </section>
  );
};

export default TeamMembersTwo;
