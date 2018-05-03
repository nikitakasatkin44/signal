<template>
  <v-layout>
    <v-flex xs12 offset-xs1>
      <vests-list />
    </v-flex>
    <!--<v-flex xs2>-->
      <!--<basket />-->
    <!--</v-flex>-->
  </v-layout>
</template>

<script>
  import Basket from '../Basket/Index.vue'
  import VestsList from './VestsList'
  import VestsService from '@/services/VestsService'

  export default {
    data () {
      return {
        vests: null,
      }
    },
    components: {
      Basket,
      VestsList
    },
    async mounted () {
      this.vests = (await VestsService.index()).data;
    }
  }
</script>
<style scoped>
</style>
