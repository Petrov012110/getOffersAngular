export interface IEnviroment {
    production: boolean;
    firebase: IFirebase;
}

interface IFirebase {
    "apiKey": string;
    "authDomain": string,
    "projectId": string,
    "storageBucket": string,
    "messagingSenderId": string,
    "appId": string,
    "measurementId": string
}