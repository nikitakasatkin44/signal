<template>
  <div>
    <div v-for="vest in vests" :key="vest.id">
    <v-layout row fluid>
      <v-flex xs3>
        <div>{{vest.originalname}}</div>
        <div><count-slider :vest="vest"/></div>
        <div>
          <v-btn @click="openBasket()" class="green" dark block>Заказать!</v-btn>
        </div>
      </v-flex>

      <v-flex xs6>
        <div><img :src="getImage(vest.path)" class="vest-image"></div>
      </v-flex>

      <v-flex xs3>
        <div class="vest-description">{{vest.description}}</div>
      </v-flex>
    </v-layout>
      <v-divider></v-divider>
    </div>

    <div class="text-xs-center">
      <v-bottom-sheet v-model="sheet">
        <v-toolbar dark color="green">
          <v-btn icon @click.stop="sheet=false">
            <v-icon>close</v-icon>
          </v-btn>
        </v-toolbar>
        <v-list>
          <v-subheader>Корзина</v-subheader>
          <v-list-tile v-for="vest in vests" :key="vest.originalname">
            <v-list-tile-avatar>
              <v-avatar size="48px" tile>
                <img :src="getImage(vest.path)" :alt="vest.originalname">
              </v-avatar>
            </v-list-tile-avatar>
            <v-list-tile-title>{{ vest.originalname }}</v-list-tile-title>
          </v-list-tile>

        </v-list>
      </v-bottom-sheet>
    </div>
  </div>


</template>

<script>
  import VestsService from '@/services/VestsService'
  import CountSlider from '../Basket/CountSlider.vue'
  import { mapGetters, mapActions } from 'vuex'

  export default {
     data () {
      return {
        vest: null,
        vests: [],
        sheet: false,
        tiles: [
          { img: 'keep.png', title: 'Keep' },
          { img: 'inbox.png', title: 'Inbox' },
          { img: 'hangouts.png', title: 'Hangouts' },
          { img: 'messenger.png', title: 'Messenger' },
          { img: 'google.png', title: 'Google+' }
        ],
        orderList: []
      }
    },
    async mounted () {
      this.vests = (await VestsService.index()).data;
    },
    methods: {
      getImage: function (path) {
        return require('./../../uploads/' + path)
      },
      openBasket: function () {
        this.sheet = !this.sheet
        this.$store.dispatch('setVestCount', 5)
      }
    },
    components: {
      CountSlider,
    }
  }
</script>

<style scoped>
  .vest-image {
    width: 60%;
  }

  .vest-description {
    font-size: 1.5rem;
  }

</style>
