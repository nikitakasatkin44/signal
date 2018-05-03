<template>
  <div class="text-xs-center">
    <v-flex xs6>
      <v-text-field v-model="plainText"></v-text-field>
      <v-btn @click="saveToSessionStorage">Сохранить</v-btn>
      <v-btn @click="loadFromSessionStorage">Загрузить</v-btn>
    </v-flex>


  </div>
</template>

<script>
  export default {
    components: {},
    data: () => ({
      plainText: '',
      sheet: false,
      tiles: [
        { img: 'keep.png', title: 'Keep' },
        { img: 'inbox.png', title: 'Inbox' },
        { img: 'hangouts.png', title: 'Hangouts' },
        { img: 'messenger.png', title: 'Messenger' },
        { img: 'google.png', title: 'Google+' }
      ]
    }),
    methods: {
      async saveToSessionStorage () {
        let description = this.plainText;
        this.$session.set('vest-description', description)
      },
      async loadFromSessionStorage () {
        let description = this.$session.get('vest-description');
        console.log(description)
      }
    }
  }
</script>
