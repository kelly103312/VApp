<template>
    <div class="container">
      <form class="" @submit.prevent="submit">
        <div class="form-group">
          <label class="form-label"> Usuario </label>
          <input class="form-control" type="text">
        </div>
        <div class="form-group">
          <label class="form-label"> Contraseña </label>
          <input class="form-control" type="password">
        </div>
        <div class="mt-4">
          <button type="submit" class="btn btn-success">Ingresar</button>
        </div>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    name: 'LoginComponent',
    methods: {
      submit() {
        console.log("Holi")
      }
    }
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
 
  </style>
  