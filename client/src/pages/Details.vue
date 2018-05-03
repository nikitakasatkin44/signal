<template>
  <div>
    <product-details :product="product" :isAdding="true"></product-details>
  </div>

</template>

<script>
  import ProductDetails from '../components/product/ProductDetails.vue'

  export default {
    created () {
      console.log(this.product)
      this.$store.dispatch('productById', this.$route.params['id'])

    },
    computed: {
      product () {
        return this.$store.getters.productById(this.$route.params['id'])
      }
    },
    data () {
      return {}

    },
    components: {
      ProductDetails
    }
  }
</script>
