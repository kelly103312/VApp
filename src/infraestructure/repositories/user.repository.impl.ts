import { UserRepository } from "@/core/Irepositories/user.repository";
import { User } from "@/core/models/User";
import  UserService  from "@/infraestructure/services/user.service";

export class UserRepositoryImpl implements UserRepository{

    constructor(private userService: UserService) {}

    async login(email : string, password:string) {
        try {
            const response = await this.userService.loginUser({email, password});
            return new User(response.getUser(), response.getPassword());
        } catch (error) {
            throw new Error('Login failed');
        }
    }

}