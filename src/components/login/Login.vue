<template>
    <div class="container">
      <form class="" @submit.prevent="submit">
        <div class="form-group">
          <label class="form-label"> Usuario </label>
          <input class="form-control" type="text" v-model="user.user">
        </div>
        <div class="form-group">
          <label class="form-label"> Contraseña </label>
          <input class="form-control" type="password" v-model="user.password">
        </div>
        <div class="mt-4">
          <button type="submit" class="btn btn-success">Ingresar</button>
        </div>
      </form>
    </div>
  </template>
  
  <script>
//import { UserRepository } from '@/core/Irepositories/user.repository';
import { User } from '@/core/models/User';
import { inject } from 'vue';

  export default {
    name: 'LoginComponent',
    data(){
      return {
        user: new User('', '')
      };
    },
    setup() {
      const userRepository = inject('userRepository');
        if (!userRepository) {
          throw new Error('userRepository injection failed');
        }
      return { userRepository };
    
    },
    methods: {
      handleLogin() {
        console.log(this.user.getUser())
        this.userRepository.login()
      },
      async submit() {
        if (this.userRepository) {
          console.log("submit")
          this.loading = true;
          try {
            this.user = await this.userRepository.login(this.user.getUser(),this.user.getPassword());
          } catch (error) {
            this.error = error.message;
          } finally {
            this.loading = false;
          }
        }
      }
    }
  }
  </script>
  
  <style scoped>
 
  </style>
  