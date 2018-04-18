<template>
  <v-layout row>
    <v-flex xs6 offset-xs3>
      <div class="white elevation-2 px-4 py-4">
        <form name="tab-tracker-form">
          <v-text-field label="Почта" v-model="email"></v-text-field><br>
          <v-text-field label="Пароль" v-model="password" type="password" autocomplete="true"></v-text-field>
        </form>
        <v-alert outline v-if="error" type="error" icon="warning" :value="true" v-html="error"></v-alert>
        <v-btn dark class="green" @click="register">Зарегистрироваться</v-btn>
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
      async register () {
        try {
          const response = await AuthenticationService.register({
            email: this.email,
            password: this.password
          });
          this.$store.dispatch('setToken', response.data.token);
          this.$store.dispatch('setUser', response.data.user);
          this.$router.push({name: 'vests'})
        } catch (err) {
          this.error = err.response.data.error
        }
      }

    }
  }
</script>
