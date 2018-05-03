<template>
  <v-toolbar dense fixed dark class="green">
    <v-toolbar-title class="mr-4">
      <router-link class="home" tag="span" :to="{name: 'home'}">
        Signalvest-Kostroma
      </router-link>

    </v-toolbar-title>

    <v-toolbar-items>
      <v-btn flat dark :to="{name: 'vests'}">
        Жилеты
      </v-btn>
    </v-toolbar-items>

    <v-toolbar-items>
      <v-btn flat dark :to="{name: 'cloaks'}">
        Плащи
      </v-btn>
      <v-btn flat dark :to="{name: 'basket'}">
        Корзина
      </v-btn>
      <v-btn flat dark :to="{name: 'test'}">
        Тестирование
      </v-btn>
    </v-toolbar-items>

    <v-spacer></v-spacer>

    <v-toolbar-items>
      <v-btn flat dark :to="{name: 'cart'}">В корзине: {{cartItemsCount}}</v-btn>
      <v-btn v-if="!$store.state.isUserLoggedIn" flat dark :to="{name: 'login'}">Войти</v-btn>
      <v-btn v-if="!$store.state.isUserLoggedIn" flat dark :to="{name: 'register'}">Регистрация</v-btn>
      <v-btn v-if="$store.state.isUserLoggedIn" flat dark :to="{name: 'profile'}">{{$store.state.user.email}}</v-btn>
      <v-btn v-if="$store.state.isUserLoggedIn" flat dark @click="logout">Выход</v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
  export default {
    methods: {
      logout () {
        this.$store.dispatch('setToken', null);
        this.$store.dispatch('setUser', null);
        this.$router.push({
          name: 'vests'
        })
      }
    },
    computed: {
      cartItemsCount () {
        return this.cartItems.length
      }
    },

    components: {},
    data () {
      return {
        cartItems: this.$store.state.cart
      }
    },

  }
</script>

<style scoped>
</style>
