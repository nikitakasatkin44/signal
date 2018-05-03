<template>
  <div>
    <div class="title">
      <h1>Жилеты</h1>
    </div>
    <div>
      <product-list></product-list>
    </div>

  </div>

</template>

<script>
  import ProductList from '../components/product/ProductList'

  export default {
    data () {
      return {

      }
    },
    components: {
      ProductList
    }
  }
</script>

<style scoped>

</style>
