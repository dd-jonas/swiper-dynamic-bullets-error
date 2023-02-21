import * as React from 'react';
import './style.css';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

SwiperCore.use([Pagination, Navigation]);

export default function App() {
  const slidesPerView = 3;
  const [slides, setSlides] = React.useState([
    {
      id: 0,
      title: 'One',
    },
    {
      id: 1,
      title: 'Two',
    },
    {
      id: 3,
      title: 'Delete me',
    },
  ]);

  return (
    <Swiper pagination={{ dynamicBullets: true }} navigation>
      {slides.map((slide) => (
        <SwiperSlide key={slide.id}>
          <div style={{ padding: '1rem 3rem', border: '1px solid black' }}>
            <h2 >{slide.title}</h2>
            <button
              onClick={() =>
                setSlides((prev) => prev.filter((s) => s.id !== slide.id))
              }
            >
              Remove
            </button>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
