<template>
  <article class="navigation">
    <div class="container">
      <div class="navigation__wrapper nav">
        <a class="nav__text" href="#">Главная</a>
        <img class="nav__img" src="@/assets/navigation/arrow.png" alt="Стрелочка" height="8" width="5">
        <p class="nav__text nav__text_active">Корзина</p>
      </div>
    </div>
  </article>
</template>

<script>
  export default {
    name: 'Navigation',
  }
</script>

<style scoped lang="scss">
  .navigation {
    margin-bottom: 60px;
  }

  .nav {
    display: flex;

    &__text {
      font-size: 14px;
      line-height: 21px;
      color: #33374E;
    }

    &__text:not(:last-child) {
      margin-right: 10px;
    }

    &__text_active {
      color: $grayTextColor;
    }

    &__img {
      height: 8px;
      width: 5px;
      align-self: center;
      margin-right: 10px;
    }
  }
</style>