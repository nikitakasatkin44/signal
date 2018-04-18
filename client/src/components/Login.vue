<template>
  <v-layout row>
    <v-flex xs6 offset-xs3>
      <div class="white elevation-2 px-4 py-4">
      <v-text-field label="Почта" v-model="email"></v-text-field><br>
      <v-text-field label="Пароль" type="password" v-model="password"></v-text-field><br>
      <v-alert v-if="error" type="error" icon="warning" :value="true">
        {{error}}
      </v-alert>
      <v-btn dark class="green" @click="login">Войти</v-btn>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
  import AuthenticationService from '@/services/AuthenticationService'

  export default {
    data () {
      return {
        email: '',
        password: '',
        error: null
      }
    },
    methods: {
      async login () {
        try {
          const response = await AuthenticationService.login({
            email: this.email,
            password: this.password
          });
          this.$store.dispatch('setToken', response.data.token);
          this.$store.dispatch('setUser', response.data.user);
          this.$router.push({name: 'vests'})
        } catch (error) {
          this.error = error.response.data.error
        }
      }
    }
  }
</script>
