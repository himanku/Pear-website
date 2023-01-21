import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import style from "./Swiperrr.module.css";

const imageUrls = [
  "https://is1-ssl.mzstatic.com/image/thumb/NuIOgsGJ11I4jRoa7-GbSA/1250x703.jpg",
  "https://is5-ssl.mzstatic.com/image/thumb/lgskq6n1xkUI5DOyA5tWWQ/1250x703.jpg",
  "https://is2-ssl.mzstatic.com/image/thumb/OM7DSB_I6MgAJQDYTEWc5w/1250x703.jpg",
  "https://is3-ssl.mzstatic.com/image/thumb/Jj8T9VNcfHfMQ4fDwp31-Q/1250x703.jpg",
  "https://is2-ssl.mzstatic.com/image/thumb/WTDZpzkQlaatpb1X4w9jZg/1250x703.jpg",
  "https://is3-ssl.mzstatic.com/image/thumb/AWDRdQz0nepFpnsUNiTDuw/1250x703.jpg",
  "https://is5-ssl.mzstatic.com/image/thumb/7SeRlnCzKlgeqrg6-ixkig/1250x703.jpg",
];

function createSlide(imageUrls) {
  return imageUrls.map((url) => {
    return (
      <SwiperSlide>
        <img
          className="img"
          src={url}
          alt=""
          style={{
            height: "700px",
            width: "90%",
            margin: "auto",
            marginTop: "10px",
          }}
        />
      </SwiperSlide>
    );
  });
}

const Swiperrr = () => {
  return (
    <div className={style.Swiper_div}>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={1}
        navigation
        autoplay={{ delay: 4000 }}
        pagination={{ clickable: true }}
      >
        {createSlide(imageUrls)}
      </Swiper>
    </div>
  );
};

export default Swiperrr;
