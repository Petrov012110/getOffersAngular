import { IParseData } from "./parse-data.response-model.interface";

export class ParseDataViewModel {
    public name!: string;
    public price!: string;
    public storeLinkImg!: string;
    public storeName!: string;
    public seller!: string;
    public postLink!: string;
    public date!: string;
    public post!: string;
    public hrefImg?: string;
    public bookmark: string = 'bookmark_border';

    constructor(data: IParseData) {
        if (data) {
            this.name = data.name
            if (data.data) {
                data.data.forEach(j => {
                    this.price = j.price;
                    this.storeLinkImg = j.storeLinkImg;
                    this.storeName = j.storeName;
                    this.seller = j.storeName;
                    this.postLink = j.postLink;
                    this.date = j.date;
                })
            }

        }

    }
}