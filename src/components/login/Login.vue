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
import { User } from '@/core/models/User';

  export default {
    name: 'LoginComponent',
    data(){
      let user = new User("","");
      return user;
    },
    methods: {
      submit() {
        console.log(this.user)
      }
    }
  }
  </script>
  
  <style scoped>
 
  </style>
  