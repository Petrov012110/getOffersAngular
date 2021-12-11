import { IFbAuthResponse } from "./fire-base.response-model.interface";

export class FbAuthResponseModel {

    public displayName!: string;
    public email!: string;
    public idToken!: string;
    public kind!: string;
    public localId!: string;
    public registered!: string;
    public expiresIn!: Date;

    constructor(data: IFbAuthResponse) {
        if (data) {
            this.displayName = data.displayName;
            this.email = data.email;
            this.idToken = data.idToken;
            this.kind = data.kind;
            this.localId = data.localId;
            this.registered = data.registered;
            this.expiresIn = new Date(new Date().getTime() + +data.expiresIn * 1000);
        }
    }
}