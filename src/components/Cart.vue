<template>
  <section class="cart">
    <div class="container">
      <div class="cart__header-wrapper">
        <div class="cart__header-title-wrapper">
          <h1 class="cart__title">Ваша корзина</h1>

          <span class="cart__item-count" v-if="cartItemTotalCount > 0">{{ cartItemTotalCount }} шт.</span>
        </div>

        <button class="cart__btn" @click="clearCart()">Очистить корзину</button>
      </div>

      <div class="cart__wrapper">
        <div class="cart__content">
          <ul class="cart__list">
            <li class="cart__item item" v-for="item in cartData.items">
              <img class="item__img" :src="getImgUrl(item.photoId)" alt="Вытяжное устройство G2H" height="100" width="100">

              <div class="item__text-wrapper">
                <h2 class="item__title">{{ item.title }}</h2>

                <p class="item__text item__text_description">{{ item.description }}</p>

                <p class="item__text item__text_article-number">Артикул: {{ item.article }}</p>
              </div>

              <div class="item__count-wrapper">
                <button class="item__btn" @click="decreaseCartItemCount(item.id)">−</button>

                <span class="item__text item__text_count">{{ item.count }}</span>

                <button class="item__btn" @click="increaseCartItemCount(item.id)">+</button>

                <span class="item__text item__text_sum-count" v-if="item.count > 1">{{ item.price }} {{ cartData.currency }}/шт</span>
              </div>

              <p class="item__text item__text_price">{{ item.count * item.price }} {{ cartData.currency }}</p>

              <button class="item__close-btn close-btn">
                <img class="close-btn__img" src="@/assets/cart/cross.svg" alt="Иконка крестика" height="12" width="12" @click="deleteItemCart(item.id)">
              </button>
            </li>

            <li class="cart__item item" v-if="cartData.items.length == 0">Ваша корзина пуста</li>
          </ul>

          <div class="cart__install-wrapper install">
            
            <input class="install__checkbox" type="checkbox" id="install" name="install" v-model="cartData.isInstallRequired">
            <label class="install__label" for="install"></label>

            <img class="install__img" src="@/assets/cart/install.svg" alt="Изображение гаечного ключа и отвертки" height="30" width="30">

            <div class="install__text-wrapper">
              <h2 class="install__title">Установка</h2>

              <p class="install__text">Отметьте, если Вам необходима консультация профессионала по монтажу выбранных товаров.</p>
            </div>
          </div>
        </div>

        <div class="cart__info info">
          <div class="info__main-wrapper">
            <h2 class="info__title">Итого</h2>

            <div class="info__wrapper">
              <p class="info__text">Сумма заказа</p>
              <p class="info__text info__text_value">{{ cartTotalPrice }} {{ cartData.currency }}</p>
            </div>

            <div class="info__wrapper">
              <p class="info__text">Количество</p>
              <p class="info__text info__text_value">{{ cartItemTotalCount }} шт</p>
            </div>

            <div class="info__wrapper">
              <p class="info__text">Установка</p>
              <p class="info__text info__text_value">{{ cartData.isInstallRequired ? 'Да' : 'Нет' }}</p>
            </div>
          </div>

          <div class="info__total-wrapper">
            <p class="info__text info__text_total">Стоимость товаров</p>
            <p class="info__text info__text_price">{{ cartTotalPrice }} {{ cartData.currency }}</p>
          </div>

          <button class="info__btn info__btn_buy" type="submit" @click="sendDataToServer()">Оформить заказ</button>

          <button class="info__btn" type="submit" @click="sendDataToServer()">Купить в 1 клик</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import {mapState, mapMutations, mapGetters, mapActions} from 'vuex';

  export default {
    name: 'Cart',
    computed: {
      ...mapState({
        cartData: state => state.cartData,
      }),
      ...mapGetters([
        'cartItemTotalCount',
        'cartTotalPrice',
      ])
    },
    methods: {
      ...mapMutations([
        'increaseCartItemCount',
        'decreaseCartItemCount',
        'deleteItemCart',
        'clearCart',
      ]),
      ...mapActions([
        'sendDataToServer',
      ]),
      getImgUrl(imageId) {
        return require('../assets/items/' + imageId + '.png');
      },
    }
  }
</script>

<style scoped lang="scss">
    .cart {
      &__header-wrapper {
        display: flex;
        align-items: flex-end;
        justify-content: space-between;
        width: 800px;
        margin-bottom: 95px;
      }

      &__header-title-wrapper {
        display: flex;
      }

      &__title {
        font-size: 44px;
        line-height: 53px;
        font-weight: 700;
        color: $secondTextColor;
        text-transform: unset;
        margin-right: 22px;
      }

      &__item-count {
        font-size: 18px;
        line-height: 26px;
        margin-bottom: 3px;
        color: $grayTextColor;
        align-self: flex-end;
      }

      &__btn {
        text-decoration: underline;
        text-underline-offset: 4px;
        border: none;
        background-color: transparent;
        padding: 0;
        font-family: 'Lato', sans-serif;
        color: $grayTextColor;
        font-size: 14px;
        line-height: 21px;
      }

      &__wrapper {
        display: flex;
        justify-content: space-between;
        column-gap: 55px;
      }

      &__content {
        padding-top: 15px;
        width: 800px;
      }

      &__list {
        margin-bottom: 44px;
      }
    }

    .item {
      position: relative;
      display: flex;
      justify-content: space-between;
      padding-left: 15px;
      padding-right: 53px;
      padding-bottom: 21px;
      margin-bottom: 25px;

      &__title {
        font-weight: 600;
        font-size: 16px;
        line-height: 23px;
        margin-bottom: 6px;
      }

      &__text {
        max-width: 263px;
        font-size: 12px;
        line-height: 18px;
        margin-bottom: 7px;
        color: $cartDescriptionTextColor;
      }

      &__text_article-number {
        color: $grayTextColor;
        font-size: 14px;
        line-height: 21px;
      }

      &__count-wrapper {
        align-self: center;
        display: flex;
        position: relative;
      }

      &__btn {
        font-size: 14px;
        line-height: 21px;
        border: none;
        background-color: $bgCartBtn;
        border-radius: 4px;
        height: 34px;
        width: 38px;
      }

      &__text_count {
        display: flex;
        font-size: 14px;
        line-height: 21px;
        border: none;
        background-color: $bgCartBtn;
        border-radius: 4px;
        height: 34px;
        width: 38px;
        justify-content: center;
        align-items: center;
        margin-left: 2px;
        margin-right: 2px;
      }

      &__text_sum-count {
        margin-bottom: 0;
        text-align: center;
        position: absolute;
        top: 90%;
        left: 50%;
        transform: translate(-50%, 0);
        width: 100%;
      }

      &__text_price {
        font-weight: 500;
        font-size: 18px;
        line-height: 26px;
        align-self: center;
      }
    }

    .close-btn {
      position: absolute;
      right: 0;
      top: 0;
      padding: 0;
      border: none;
      background-color: transparent;
    }

    .item:not(:last-of-type) {
      border-bottom: 1px solid $borderColor;
    }

    .install {
      display: flex;
      background-color: $bgCartTotal;
      padding: 26px 0 26px 25px;
      border-radius: 5px;

      &__label {
        margin-right: 20px;
        align-self: center;
        display: flex;
        position: relative;
      }

      &__label:before {
        content: '';
        display: inline-block;
        height: 20px;
        width: 20px;
        border: 1px solid #797B86;
        box-shadow: inset 2px 2px 1px rgba(0, 0, 0, 0.08);
        border-radius: 2px;
      }

      &__checkbox {
        position: absolute;
        z-index: -1;
        border-radius: 2px;
        opacity: 0;
      }

      &__checkbox:checked + &__label:before  {
        background-color: $bgTotalBuyBtn;
      }

      &__img {
        margin-right: 20px;
        padding: 10px;
        background-color: #fff;
        box-sizing: content-box;
        border-radius: 4px;
      }

      &__title {
        margin-bottom: 2px;
        font-weight: 600;
        font-size: 16px;
        line-height: 23px;
      }

      &__text {
        font-weight: 400;
        font-size: 14px;
        line-height: 21px;
        color: $grayTextColor;
      }
    }

    .info {
      padding: 35px 30px;
      display: flex;
      flex-direction: column;
      background-color: $bgCartTotal;
      border-radius: 5px;

      &__main-wrapper {
        padding-bottom: 28px;
        border-bottom: 1px solid $totalBorderColor;
      }

      &__title {
        font-weight: 600;
        font-size: 24px;
        line-height: 29px;
        margin-bottom: 31px;
      }

      &__wrapper {
        display: flex;
        justify-content: space-between;
      }

      &__wrapper:not(:last-child) {
        margin-bottom: 17px;
      }

      &__text {
        font-weight: 500;
        font-size: 16px;
        line-height: 23px;
      }

      &__text_value {
        font-weight: 400;
      }

      &__total-wrapper {
        margin-bottom: 30px;
        display: flex;
        justify-content: space-between;
        padding-top: 10px;
      }

      &__text_total {
        font-size: 18px;
        line-height: 26px;
        font-weight: 600;
        align-self: center;
      }

      &__text_price {
        font-weight: 700;
        font-size: 26px;
        line-height: 34px;
        letter-spacing: 0.005em;
      }

      &__btn {
        padding: 0;
        border: 0;
        width: 365px;
        height: 54px;
        background-color: $bgTotalBtn;
        font-weight: 600;
        font-size: 18px;
        line-height: 26px;
        color: $btnTotalTextColor;
        border: 1px solid $totalBtnBorderColor;
        border-radius: 4px;
      }

      &__btn:first-of-type {
        margin-bottom: 12px;
      }

      &__btn_buy {
        background-color: $bgTotalBuyBtn;
        color: $btnTotalBuyTextColor;
        border-color: transparent;
      }
    }
</style>