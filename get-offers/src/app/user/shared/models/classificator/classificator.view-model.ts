import { IClassificator } from "./classificator.response-model.interface";

export class ClassificatorViewModel {

    public data: any;

    constructor(response: Array<IClassificator>) {
        return this.createObjectTree(response);
    }

    public createObjectTree(response: Array<IClassificator>): any {
        const classificatorResponse: any = {};
        response.forEach(data => {
            if (data.name) {
                classificatorResponse[`${data.name}`] = {};
                if (data.series) {
                    for (let i = 0; i < data.series.length; i++) {
                        if (data.series[i].models) {
                            classificatorResponse[`${data.name}`][`${data.series[i].name}`] = {};
                            for (let k = 0; k < data.series[i].models.length; k++) {
                                classificatorResponse[`${data.name}`][`${data.series[i].name}`][`${data.series[i].models[k].name}`] = null;
                            }
                        } else {
                            classificatorResponse[`${data.name}`][`${data.series[i].name}`] = null;
                        }
                    }
                }
            }
        });

        return classificatorResponse;
    }
}
