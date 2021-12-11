import { IUser } from "./user.model.interface";

export class UserModel {

    public email: string;
    public password?: string;
    public returnSecureToken?: boolean;
    public uid!: string;
    public emailVerified!: boolean;

    constructor(user: IUser) {
        this.email = user.email;
        this.password = user.password;
        if (user.returnSecureToken) {
            this.returnSecureToken = user.returnSecureToken;
        }
    }
}