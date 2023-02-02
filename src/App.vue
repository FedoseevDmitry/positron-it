<template>
  <Header/>
  <main class="main">
    <Navigation/>
    <Cart/>
    <ReviewedItems/>
  </main>
</template>

<script>
import Header from './components/Header.vue'
import Navigation from './components/Navigation.vue'
import Cart from './components/Cart.vue'
import ReviewedItems from './components/ReviewedItems.vue'

export default {
  name: 'App',
  components: {
    Header,
    Navigation,
    Cart,
    ReviewedItems,
  }
}
</script>

<style lang="scss">

</style>
