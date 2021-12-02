import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { FbAuthResponseModel } from "../models/fire-base/firebase-auth.response-model";
import { ParseDataViewModel } from "../models/parse-data/parse-data.view-model";

@Injectable()

export class LocalStorageService {

    constructor(){
    }

    public saveItem(item: ParseDataViewModel) {
        const maxFavoritesLength = 30;
        const history = JSON.parse(localStorage.getItem('favorites-items') || '[]');
        const isFavoritesMax = history.length === maxFavoritesLength;
        const workingHistory = isFavoritesMax ? history.slice(1) : history;
        const updatedFavorites = workingHistory.concat(item);
        localStorage.setItem('favorites-items', JSON.stringify(updatedFavorites));
    }

    public getItems(): Observable<ParseDataViewModel[]> {
        return of(JSON.parse(localStorage.getItem('favorites-items') || '[]'));
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