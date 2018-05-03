<template>
  <div v-if="cart.length > 0">
    <div class="title">
      <h1>Ваш заказ</h1>
    </div>
    <template v-for="product in cart">
      <product-details :product="product"></product-details>
    </template>
  </div>
  <div v-else class="title">
    <h1><i class="fa fa-superpowers"></i> Корзина пуста</h1>
  </div>
</template>

<script>
  import ProductDetails from '../components/product/ProductDetails.vue'
  export default {
    data () {
      return {
        cart: this.$store.state.cart
      }
    },
    components: {
      ProductDetails
    }
  }
</script>
