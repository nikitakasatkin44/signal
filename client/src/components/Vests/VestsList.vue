<template>
  <div>
    <div
      v-for="vest in vests"
      :key="vest.id">
      <v-layout>
        <v-flex xs6>
          <div>{{vest.originalname}}</div>
          <div>{{vest.price}}</div>
          <div>{{vest.description}}</div>
        </v-flex>
        <v-flex xs6>
          <img style="width: 300px;" :src="getImage(vest.path)" >
        </v-flex>
      </v-layout>
    </div>
  </div>
</template>

<script>
  import VestsService from '@/services/VestsService'

  export default {
    data () {
      return {
        vests: [],
      }
    },
    async mounted () {
      this.vests = (await VestsService.index()).data;
    },
    methods: {
      getImage: function (path) {
        return require('./../../uploads/' + path)
      }
    }
  }
</script>

<style scoped>

</style>
