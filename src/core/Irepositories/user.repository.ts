import { User } from "../models/User";

export abstract class UserRepository{
    abstract login(email: string, password: string): Promise<User>;
}