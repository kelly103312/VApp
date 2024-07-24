import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import UserService from './infraestructure/services/user.service';
import { UserRepositoryImpl } from './infraestructure/repositories/user.repository.impl';

const userService = new UserService();
const userRepository = new UserRepositoryImpl(userService);


const app = createApp(App);
app.provide('userRepository', userRepository);
app.mount('#app');

//createApp(App).mount('#app')
