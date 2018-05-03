<template>
  <div class="product-details">
    <div class="container">
      <div class="row">
        <div class="col-lg-4 product-details__image">
          <img class="img-responsive" :src="imageUrl" alt="">
        </div>

        <div class="col-lg-8 product-details__info">
          <div class="product-details__description">
            <h3>{{product.originalname}}</h3>
            <p>{{product.description}}</p>
            <div class="product-details__price-cart">
              <p>{{product.price}} рублей</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
//        product: this.$store.getters.productById(this.$route.params['id']),
        imageUrl: '../static/uploads/' + this.product.path
//        imageUrl: '../static/uploads/123.png'
      }
    },
    props: [ 'product' ]

  }

</script>

<style>
  .product-details {
    border-bottom: 2px solid #F5F5F5;
    padding: 30px 0;
  }

  .product-details__image {

  }

  .product-details__description {
    padding-top: 30px;
  }

  .product-details__description small {
    color: #808080;
  }

  .product-details__description h3 {
    margin: 5px 0 30px 0;
  }

  .product-details__price-cart {
    display: flex;
    padding-top: 30px;
  }

  .product-details__price-cart p {
    flex-grow: 2;
    font-size: 20px;
    font-weight: bold;
  }
</style>
