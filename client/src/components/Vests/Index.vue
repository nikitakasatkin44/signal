<template>
  <v-layout>
    <v-flex xs6>
      <vests-list />
    </v-flex>
  </v-layout>
</template>

<script>
  import VestsList from './VestsList'
  import VestsService from '@/services/VestsService'

  export default {
    data () {
      return {
        vests: null,
      }
    },
    components: {
      VestsList

    },
    async mounted () {
      this.vests = (await VestsService.index()).data;
    }
  }
</script>
<style scoped>
</style>
