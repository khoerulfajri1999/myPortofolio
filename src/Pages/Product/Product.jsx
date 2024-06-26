import React, { useRef } from "react";
import "./Product.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import { EffectCoverflow, Navigation } from "swiper/modules";

export const Product = () => {
  const sliderRef = useRef();

  const handleNext = () => {
    sliderRef.current.swiper.slideNext();
  };
  const handlePrev = () => {
    sliderRef.current.swiper.slidePrev();
  };

  return (
    <>
      <div className="product section-margin mt-28" id="product">
        <div className="container">
          <div className="row text-center">
            <div className="col">
              <h1 className="heading-product text-4xl mb-10">My Project</h1>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col populer d-lg-flex justify-content-lg-between">
              <h3 className="heading-product"></h3>
              <div className="toggle-slider d-lg-block d-flex justify-content-end">
                <i class="bx bxs-chevron-left-circle" onClick={handlePrev}></i>
                <i class="bx bxs-chevron-right-circle" onClick={handleNext}></i>
              </div>
            </div>
          </div>
          <div className="row mt-4 product-populer ">
            <div className="col">
              <Swiper
                grabCursor={true}
                centeredSlides={false}
                spaceBetween={20}
                ref={sliderRef}
                navigation={false}
                slidesPerView={"auto"}
                modules={[EffectCoverflow, Navigation]}
                className="mySwiper"
              >
                <SwiperSlide className="card-productt relative">
                  <div className="img-box  d-flex justify-content-center align-items-center py-4 px-2">
                    <img
                      src="./images/project/kedan.png"
                      alt="product"
                      className="img-fluid"
                    />
                  </div>
                  <div className="bgbottom">
                    <div>
                      <p className="text-center py-4 px-4">
                        Kedan website is a website of an UMKM around Semarang.
                        Serves to see the menus in these UMKMs and can order
                        them by clicking "Beli Sekarang" which will be forwarded
                        to the admin's whatsapp contact.
                      </p>
                    </div>
                    <div className="detail-product  ">
                      <div className="info">
                        <a
                          href="https://github.com/khoerulfajri1999/kedan/"
                          className="label text-center py-2 px-3"
                        >
                          View Github
                        </a>
                        <a
                          href="https://khoerulfajri1999.github.io/kedan/"
                          className="label text-center py-2 px-3"
                        >
                          View Demo
                        </a>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="card-productt">
                  <div className="img-box d-flex justify-content-center align-items-center py-4 px-2">
                    <img
                      src="./images/project/kasirApp.png"
                      alt="product"
                      className="img-fluid"
                    />
                  </div>
                  <div className="bgbottom">
                    <div>
                      <p className="text-center py-4 px-4">
                        KasirApp to make transactions between sellers and buyers
                        (users) digitally. On this "kasirApp" website there are
                        3 display columns, namely the category list column, the
                        product list column and the column for the product you
                        want to buy as well as the total cost.
                      </p>
                    </div>
                    <div className="detail-product">
                      <div className="info">
                        <a
                          href="https://github.com/khoerulfajri1999/kasirApp/"
                          className="label text-center py-2 px-3"
                        >
                          View Github
                        </a>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="card-productt">
                  <div className="img-box  d-flex justify-content-center align-items-center py-4 px-2">
                    <img
                      src="./images/project/furniture.png"
                      alt="product"
                      className="img-fluid"
                    />
                  </div>
                  <div className="bgbottom">
                    <div>
                      <p className="text-center py-4 px-4">
                        This furniture website is a landing page. In the product
                        category session, this website utilizes the swiper js
                        library whose control is transferred to the arrow
                        button. Then in the blog session, it also utilizes the
                        swiper js library, but in this blog session it uses
                        automatic control. Both the product category session and
                        the blog session use responsive design where the initial
                        appearance on the desktop and on the mobile phone will
                        be different.
                      </p>
                    </div>
                    <div className="detail-product">
                      <div className="info">
                        <a
                          href="https://github.com/khoerulfajri1999/furniture/"
                          className="label text-center py-2 px-3"
                        >
                          View Github
                        </a>
                        <a
                          href="https://furniture-amber-omega.vercel.app/"
                          className="label text-center py-2 px-3"
                        >
                          View Demo
                        </a>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="card-productt">
                  <div className="img-box  d-flex justify-content-center align-items-center py-4 px-2">
                    <img
                      src="./images/project/wordl.png"
                      alt="product"
                      className="img-fluid"
                    />
                  </div>
                  <div className="bgbottom">
                    <div>
                      <p className="text-center py-4 px-4">
                        Game Wordl is a vocabulary game where players get six
                        tries to deduce the word of the day. This game is a
                        clone of the wordl game from New York but made in an
                        Indonesian version.
                      </p>
                    </div>
                    <div className="detail-product">
                      <div className="info">
                        <a
                          href="https://github.com/khoerulfajri1999/wordl"
                          className="label text-center py-2 px-3"
                        >
                          View Github
                        </a>
                        <a
                          href="https://wordl-six.vercel.app/"
                          className="label text-center py-2 px-3"
                        >
                          View Demo
                        </a>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="card-productt">
                  <div className="img-box  d-flex justify-content-center align-items-center py-4 px-2">
                    <img
                      src="./images/project/roomChat.png"
                      alt="product"
                      className="img-fluid"
                    />
                  </div>
                  <div className="bgbottom">
                    <div>
                      <p className="text-center py-4 px-4">
                        Room Chat application is a realtime chat application
                        created using react js and firebase, where users are
                        required to log in using their google account and enter
                        a room name that is made arbitrarily, but to be able to
                        chat each user must use the same room name.
                      </p>
                    </div>
                    <div className="detail-product">
                      <div className="info">
                        <a
                          href="https://github.com/khoerulfajri1999/roomchat/"
                          className="label text-center py-2 px-3"
                        >
                          View Github
                        </a>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
