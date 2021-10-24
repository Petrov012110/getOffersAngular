export class UserModel {

    public email: string;
    public password: string;
    public returnSecureToken!: boolean;

    constructor(email: string, password: string, returnSecureToken?:boolean) {
        this.email = email;
        this.password = password;
        if (returnSecureToken) {
            this.returnSecureToken = returnSecureToken;
        }
    }
}