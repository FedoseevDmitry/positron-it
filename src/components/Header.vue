<template>
  <header class="header">
    <div class="container">
      <div class="header__cart cart">
        <img class="cart__img" src="@/assets/cart/cart.svg" alt="Иконка корзины" height="32" width="32">

        <div class="cart__text-wrapper">
          <p class="cart__text cart__text_title">Ваша корзина</p>

          <p class="cart__text cart__text_item-count">{{ cartItemTotalCount }} шт.</p>

          <p class="cart__text">{{ cartTotalPrice }} {{ cartData.currency }}</p>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
  import {mapState, mapMutations, mapGetters} from 'vuex';

  export default {
    name: 'Header',
    computed: {
      ...mapState({
        cartData: state => state.cartData,
      }),
      ...mapGetters([
        'cartItemTotalCount',
        'cartTotalPrice',
      ])
    },
  }
</script>

<style scoped lang="scss">
  .header {
    margin-bottom: 31px;
  }

  .cart {
    display: flex;
    justify-content: flex-end;
    padding-top: 64px;
    column-gap: 10px;
    margin-bottom: 25px;

    &__text {
      font-size: 12px;
      line-height: 17px;
      text-align: end;
    }

    &__text_title {
      font-size: 14px;
      line-height: 21px;
    }

    &__text_item-count {
      color: $grayTextColor;
    }
  }
</style>
