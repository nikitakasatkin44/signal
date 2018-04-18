<template style="margin-top: 150px;">
  <div class="white elevation-2">
    <v-toolbar fixed dense dark class="green">
      <v-toolbar-title>{{title}}</v-toolbar-title>
      <slot name="action" />
    </v-toolbar>

    <div class="px-4 py-2">
      <slot>
        No slot content defined.
      </slot>
    </div>
  </div>
</template>

<script>
  export default {
    props: [
      'title'
    ]
  }
</script>

<style scoped>
</style>
