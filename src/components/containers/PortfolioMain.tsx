import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import one from 'public/images/teams/one1.jpg';
import two from 'public/images/teams/two2.jpg';


const PortfolioMain = () => {
  return (
    <section className="section portfolio-m fade-wrapper">
      <div className="container">
        <div className="team-r position-relative">
          <div className="team-s__slider-w">
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              slidesPerGroup={1}
              speed={800}
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
                768: {
                  slidesPerView: 3,
                  centeredSlides: true,
                },
                576: {
                  slidesPerView: 2,
                },
              }}
            >
              <SwiperSlide>
                <div className="team-s__slider-single">
                  <div className="team-wrap">
                    <Image
                      src={one}
                      alt="Image"
                      height={600}
                      width={800}
                      style={{
                        objectFit: 'cover',
                      }}
                    />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="team-s__slider-single">
                  <div className="team-wrap">
                    <Image
                      src={two}
                      alt="Image"
                      height={600}
                      width={800}
                      style={{
                        objectFit: 'cover',
                      }}
                    />
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="slide-group pt-5">
            <button
              aria-label="previous item"
              className="slide-btn prev-team-s"
            >
              <i className="fa-light fa-angle-left"></i>
            </button>
            <button aria-label="next item" className="slide-btn next-team-s">
              <i className="fa-light fa-angle-right"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioMain;
