import { IFbRegistrationResponse } from "./fire-base.response-registration-model.interface";

export class FbRegistrationResponse {
    public idToken!: string;
    public email!: string;
    public refreshToken!: string;
    public expiresIn!: Date;
    public localId!: string;

    constructor(data: IFbRegistrationResponse) {
        if (data) {
            this.idToken = data.idToken;
            this.email = data.email;
            this.refreshToken = data.refreshToken;
            this.expiresIn = new Date(new Date().getTime() + +data.expiresIn * 1000);
            this.localId = data.localId;
        }
    }
}