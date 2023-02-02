<template>
  <section class="reviewed-items">
    <div class="container">
      <h2 class="reviewed-items__title">Просмотренные товары</h2>

      <div class="reviewed-items__slider-control slider-control">
        <div class="slider-control__prev swiper-button-prev" ref="prev"></div>

        <div class="slider-control__pagination" ref="pagination"></div>
        
        <div class="slider-control__next swiper-button-next" ref="next"></div>
      </div>

      <swiper
        :modules="modules"
        :slides-per-view="4"
        :space-between="20"
        :navigation="{
            prevEl: prev,
            nextEl: next,
          }"
        :pagination="{
          el: pagination,
          type: 'fraction'
          }"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
        class="reviewed__slider slider"
      >
        <swiper-slide class="slider__slide slide">
          <img class="slide__img" src="@/assets/slider/bxc.png" alt="Изображение BXC вытяжного устройства" height="245" width="245">

          <h3 class="slide__title">ВХС</h3>

          <p class="slide__text">Вытяжное устройство для механической системы вентиляции</p>

          <p class="slide__text slide__text_price-rub">6 848 ₽ – 56 584 ₽</p>

          <p class="slide__text slide__text_price-euro">77.60 € – 643.86 €</p>

          <button class="slide__btn">Подробнее</button>
        </swiper-slide>

        <swiper-slide class="slider__slide slide">
          <img class="slide__img" src="@/assets/slider/g2h.png" alt="Изображение G2H вытяжного устройства" height="245" width="245">

          <h3 class="slide__title">G2H</h3>

          <p class="slide__text">Многофункциональное вытяжное устройство для естественной и гибридной вентиляции</p>

          <p class="slide__text slide__text_price-rub">6 848 ₽ – 56 584 ₽</p>

          <p class="slide__text slide__text_price-euro">77.60 € – 643.86 €</p>

          <button class="slide__btn">Подробнее</button>
        </swiper-slide>

        <swiper-slide class="slider__slide slide">
          <img class="slide__img" src="@/assets/slider/ghn.png" alt="Изображение GHN вытяжного устройства" height="245" width="245">

          <h3 class="slide__title">GHN</h3>

          <p class="slide__text">Вытяжное устройство с датчиком присутствия</p>

          <p class="slide__text slide__text_price-rub">6 848 ₽ – 56 584 ₽</p>

          <p class="slide__text slide__text_price-euro">77.60 € – 643.86 €</p>

          <button class="slide__btn">Подробнее</button>
        </swiper-slide>

        <swiper-slide class="slider__slide slide">
          <img class="slide__img" src="@/assets/slider/tda.png" alt="Изображение TDA вытяжного устройства" height="245" width="245">

          <h3 class="slide__title">TDA</h3>

          <p class="slide__text">Вытяжное устройство с датчиком присутствия</p>

          <p class="slide__text slide__text_price-rub">6 848 ₽ – 56 584 ₽</p>

          <p class="slide__text slide__text_price-euro">77.60 € – 643.86 €</p>

          <button class="slide__btn">Подробнее</button>
        </swiper-slide>

        <swiper-slide class="slider__slide slide">
          <img class="slide__img" src="@/assets/slider/bxc.png" alt="Изображение BXC вытяжного устройства" height="245" width="245">

          <h3 class="slide__title">ВХС</h3>

          <p class="slide__text">Вытяжное устройство для механической системы вентиляции</p>

          <p class="slide__text slide__text_price-rub">6 848 ₽ – 56 584 ₽</p>

          <p class="slide__text slide__text_price-euro">77.60 € – 643.86 €</p>

          <button class="slide__btn">Подробнее</button>
        </swiper-slide>

        <swiper-slide class="slider__slide slide">
          <img class="slide__img" src="@/assets/slider/bxc.png" alt="Изображение BXC вытяжного устройства" height="245" width="245">

          <h3 class="slide__title">ВХС</h3>

          <p class="slide__text">Вытяжное устройство для механической системы вентиляции</p>

          <p class="slide__text slide__text_price-rub">6 848 ₽ – 56 584 ₽</p>

          <p class="slide__text slide__text_price-euro">77.60 € – 643.86 €</p>

          <button class="slide__btn">Подробнее</button>
        </swiper-slide>

        <swiper-slide class="slider__slide slide">
          <img class="slide__img" src="@/assets/slider/bxc.png" alt="Изображение BXC вытяжного устройства" height="245" width="245">

          <h3 class="slide__title">ВХС</h3>

          <p class="slide__text">Вытяжное устройство для механической системы вентиляции</p>

          <p class="slide__text slide__text_price-rub">6 848 ₽ – 56 584 ₽</p>

          <p class="slide__text slide__text_price-euro">77.60 € – 643.86 €</p>

          <button class="slide__btn">Подробнее</button>
        </swiper-slide>

        <swiper-slide class="slider__slide slide">
          <img class="slide__img" src="@/assets/slider/bxc.png" alt="Изображение BXC вытяжного устройства" height="245" width="245">

          <h3 class="slide__title">ВХС</h3>

          <p class="slide__text">Вытяжное устройство для механической системы вентиляции</p>

          <p class="slide__text slide__text_price-rub">6 848 ₽ – 56 584 ₽</p>

          <p class="slide__text slide__text_price-euro">77.60 € – 643.86 €</p>

          <button class="slide__btn">Подробнее</button>
        </swiper-slide>

        <swiper-slide class="slider__slide slide">
          <img class="slide__img" src="@/assets/slider/bxc.png" alt="Изображение BXC вытяжного устройства" height="245" width="245">

          <h3 class="slide__title">ВХС</h3>

          <p class="slide__text">Вытяжное устройство для механической системы вентиляции</p>

          <p class="slide__text slide__text_price-rub">6 848 ₽ – 56 584 ₽</p>

          <p class="slide__text slide__text_price-euro">77.60 € – 643.86 €</p>

          <button class="slide__btn">Подробнее</button>
        </swiper-slide>

        <swiper-slide class="slider__slide slide">
          <img class="slide__img" src="@/assets/slider/bxc.png" alt="Изображение BXC вытяжного устройства" height="245" width="245">

          <h3 class="slide__title">ВХС</h3>

          <p class="slide__text">Вытяжное устройство для механической системы вентиляции</p>

          <p class="slide__text slide__text_price-rub">6 848 ₽ – 56 584 ₽</p>

          <p class="slide__text slide__text_price-euro">77.60 € – 643.86 €</p>

          <button class="slide__btn">Подробнее</button>
        </swiper-slide>
      </swiper>
    </div>
  </section>
</template>

<script>
  import SwiperCore, { Navigation, Pagination } from "swiper"
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import 'swiper/scss';
  import 'swiper/scss/navigation';
  import 'swiper/scss/pagination';
  import { ref } from "vue";

  SwiperCore.use([Navigation, Pagination]);

  export default {
    name: 'ReviewedItems',
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      const next = ref(null);
      const prev = ref(null);
      const pagination = ref(null);

      const onSwiper = (swiper) => {
      };
      const onSlideChange = () => {
      };
      return {
        onSwiper,
        onSlideChange,
        modules: [Navigation, Pagination],
        next,
        prev,
        pagination,
      };
    },
  }
</script>

<style lang="scss">
  .reviewed-items {
    position: relative;
    margin-bottom: 116px;

    &__title {
      margin-bottom: 60px;
      font-weight: 600;
      font-size: 30px;
      line-height: 36px;
    }

    &__slider-control {
      position: absolute;
      display: flex;
      width: 179px;
      top: 5px;
      right: 50px;
      column-gap: 20px;
    }
  }

  .slide {
    padding: 25px;
    background-color: $bgCartTotal;
    border-radius: 5px;
    box-sizing: border-box;
    height: 563px;

    &__img {
      margin-bottom: 5px;
    }

    &__title {
      font-weight: 700;
      font-size: 22px;
      line-height: 27px;
      margin-bottom: 10px;
    }

    &__text {
      font-size: 14px;
      line-height: 20px;
    }

    &__text:first-of-type {
      margin-bottom: 39px;
      height: 60px;
    }

    &__text_price-rub {
      font-weight: 500;
      font-size: 22px;
      line-height: 29px;
      letter-spacing: 0.005em;
      margin-bottom: 3px;
    }

    &__text_price-euro {
      font-size: 16px;
      line-height: 23px;
      color: $grayTextColor;
      margin-bottom: 20px;
    }

    &__btn {
      border-radius: 4px;
      width: 255px;
      height: 52px;
      font-weight: 600;
      font-size: 16px;
      line-height: 23px;
      color: $btnTotalBuyTextColor;
      background-color: $totalBtnBorderColor;
      border: none;
    }
  }

  .swiper-pagination-fraction {
    width: unset;
    font-weight: 400;
    font-size: 18px;
    line-height: 150%;
    color: $grayTextColor;
    display: flex;
    align-items: center;
  }

  .swiper-pagination-current {
    font-weight: 500;
    font-size: 24px;
    line-height: 36px;
    color: $mainTextColor;
  }

  .swiper-button-prev {
    position: static;
    margin-top: 0;
  }

  .swiper-button-prev:after {
    content: url(@/assets/slider/arrow-prev.svg);
    color: $sliderNavigationBtnColor;
    height: 50px;
    width: 50px;
  }

  .swiper-button-next {
    position: static;
    margin-top: 0;
  }

  .swiper-button-next:after {
    content: url(@/assets/slider/arrow-next.svg);
    color: $sliderNavigationBtnColor;
    height: 50px;
    width: 50px;
  }
</style>