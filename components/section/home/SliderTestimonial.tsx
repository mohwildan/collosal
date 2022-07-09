import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/hash-navigation";
import "swiper/css/autoplay";
import { Pagination, Navigation, Autoplay } from "swiper";
import { Box } from "@chakra-ui/react";
import SliderTestimonialContent from "./SliderTestimonialContent";
import Avatar1 from "../../../public/avatar/Avatar.png";
import Avatar2 from "../../../public/avatar/Avatar-1.png";
import Avatar3 from "../../../public/avatar/Avatar-2.png";
import { css, Global } from "@emotion/react";

const SliderTestimonial = () => {
  return (
    <Box mt={16}>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          480: {
            slidesPerView: 1,
          },
          500: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        <Global
          styles={css`
            .swiper-pagination {
            }
            .swiper-pagination-bullet {
              width: 8px;
              height: 8px;
              text-align: center;
              line-height: 20px;
              font-size: 12px;
              color: #000;
              opacity: 1;
              background: rgba(0, 0, 0, 0.2);
            }
            .swiper-pagination-bullet-active {
              color: #fff;
              background: #fff;
            }
          `}
        />
        <SwiperSlide>
          <SliderTestimonialContent
            image={Avatar1}
            name="Courtney Henry"
            company="Biffco Enterprises Ltd."
          >
            &quot;Very easy to use. I made back the purchase price in just 48 hours!
            It&apos;s great. It&apos;s is both attractive and highly adaptable.&quot;
          </SliderTestimonialContent>
        </SwiperSlide>
        <SwiperSlide>
          <SliderTestimonialContent
            image={Avatar2}
            name="Esther Howard"
            company="Abstergo Ltd."
          >
            &quot;Your company is truly upstanding and is behind its product 100%.
            It&apos;s the perfect solution for our business. It has really helped our
            business.&quot;
          </SliderTestimonialContent>
        </SwiperSlide>
        <SwiperSlide>
          <SliderTestimonialContent
            image={Avatar3}
            name="Ronald Richards"
            company="Barone LLC."
          >
            &quot;I am really satisfied with it. I&apos;m good to go. It really saves me
            time and effort. It&apos;s is exactly what our business has been lacking.
            &quot;
          </SliderTestimonialContent>
        </SwiperSlide>
        <SwiperSlide>
          <SliderTestimonialContent
            image={Avatar1}
            name="Ronald Richards"
            company="Barone LLC."
          >
            &quot;I am really satisfied with it. I&apos;m good to go. It really saves me
            time and effort. It&apos;s is exactly what our business has been lacking.
            &quot;
          </SliderTestimonialContent>
        </SwiperSlide>
        <SwiperSlide>
          <SliderTestimonialContent
            image={Avatar2}
            name="Ronald Richards"
            company="Barone LLC."
          >
            &quot;I am really satisfied with it. I&apos;m good to go. It really saves me
            time and effort. It&apos;s is exactly what our business has been lacking.
            &quot;
          </SliderTestimonialContent>
        </SwiperSlide>
      </Swiper>
    </Box>
  );
};

export default SliderTestimonial;
