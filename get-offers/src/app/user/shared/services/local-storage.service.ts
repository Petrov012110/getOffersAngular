import { Injectable } from "@angular/core";
import { FbAuthResponseModel } from "../models/fire-base/firebase-auth.response-model";

@Injectable()

export class LocalStorageService {

    constructor(){

    }

    public saveTokenLocalStorage(response: FbAuthResponseModel): void {
        
    }

    public getTokenLocalStorage(): string | null {
        const expDate = new Date(localStorage.getItem('fb-token-expdate') as string);

        if (new Date() > expDate) {
            return null;
        }
        return JSON.parse(localStorage.getItem('fb-token') as string);
    }

    public clearLocalStorage(): void {
        localStorage.clear();
    }
    
}