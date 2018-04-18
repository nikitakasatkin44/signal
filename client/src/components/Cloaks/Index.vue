<template>
  <v-layout>
    <v-flex xs6>
      <cloaks-list />
    </v-flex>
  </v-layout>
</template>

<script>
  import CloaksList from './CloaksList'
  import VestsService from '@/services/VestsService'

  export default {
    data () {
      return {
        vests: null,
      }
    },
    components: {
      CloaksList
    },
    async mounted () {
      this.vests = (await VestsService.index()).data;
    }
  }
</script>
<style scoped>
</style>
