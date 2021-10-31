// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { IEnviroment } from "./interface";

export const environment: IEnviroment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyADbSh9grAOB39WLFbLokf5mX35l5RzkH8",
        authDomain: "get-offers-1c791.firebaseapp.com",
        projectId: "get-offers-1c791",
        storageBucket: "get-offers-1c791.appspot.com",
        messagingSenderId: "236882893333",
        appId: "1:236882893333:web:8354b0e0628cc531dbcc1c",
        measurementId: "G-51V3CS4XW0"
    }
  };

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
