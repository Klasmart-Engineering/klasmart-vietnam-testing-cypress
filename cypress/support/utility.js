//utility.js
export class Utility {
    getBaseUrl() {
        let envi = Cypress.env('ENV'); //Get the value of environment variable i.e ENV
        if (envi == 'production') //Check the value
            return "https://hub.kidsloop.live"; //return desired url
        else if (envi == 'staging')
            return "https://hub.stage.kidsloop.live";
        else if (envi == 'alpha')
            return "https://hub.alpha.kidsloop.net";
    }
}