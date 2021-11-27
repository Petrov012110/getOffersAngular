export interface IClassificator {
    id: string;
    name: string;
    series: Array<ISeries>
}

export interface ISeries {
    name: string;
    models: Array<IModel>
}

export interface IModel {
    name: string
}