export class User{
    public user: string;
    public password: string;

    constructor(user: string, password: string) {
        this.user = user;
        this.password = password;
    }

    getUser(): string {
        return this.user;
    }
    getPassword(): string {
        return this.password;
    }
}