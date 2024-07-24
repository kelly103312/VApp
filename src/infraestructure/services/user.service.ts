import { User } from '@/core/models/User';
import axios from 'axios';

const userAxios = axios.create({
  baseURL: 'http://localhost:8001/',
  withCredentials: true, 
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
});

export default class UserService {
  async loginUser(credentials: { email: string; password: string }): Promise<User> {
    const response = await userAxios.post('/login', credentials);
    const { user, password } = response.data;
    return new User(user, password);
  }
}
