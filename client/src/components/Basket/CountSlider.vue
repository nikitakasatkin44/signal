<template>
  <v-card>
    <v-subheader>Количество жилетов</v-subheader>
    <v-card-text>
      <v-container fluid grid-list-md>
        <v-layout row>
          <v-flex xs-6>
            <v-slider v-model="count" thumb-label :min="1" :max="1000" color="green"></v-slider>
          </v-flex>
        </v-layout>
        <v-layout>
          <v-flex xs-1>
            <v-text-field v-model="count" type="number" class="display-4"></v-text-field>
          </v-flex>
          <v-flex xs-4>
            <span class="total-price">{{totalPrice}}&nbsp;рублей</span>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card-text>
  </v-card>
</template>

<script>
  import { mapActions } from 'vuex'

  export default {
    data () {
      return {
        count: 1,
        vestPrice: this.vest.price,
      }
    },
    props: [
      'vest'
    ],
    computed: {
      totalPrice: function () {
        return (this.count * this.vestPrice).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      }
    },
    methods: mapActions([
      'setVestCount'
    ])
  }
</script>

<style scoped>
    .total-price {
      font-size: 2rem;
    }

    .card__text {
      padding: 5px;
    }

  .number_input {
    width: 60%;
  }

  .number_input input {
    font-size: 100px !important;
  }
</style>
