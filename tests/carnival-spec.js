const hollandHomePage = require('../pageObjects/hollandHomePage.js');
const hollandNextPage = require('../pageObjects/hollandNextPage.js');
const seabournHomePage = require('../pageObjects/seabournHomePage.js');
const seabournNextPage = require('../pageObjects/seabournNextPage.js');


describe('Holland America Website Navigation', function(){
    //this.timeout(5000);
    browser.waitForAngularEnabled(false);
    it('navigate to Holland America home page', function(){

        hollandHomePage.get('https://www.hollandamerica.com/');
       
        browser.sleep(1000);
    });

    it('validate correct home page', function(){
        //Validate the presence of the Holland America title and the cruise search menu
        hollandHomePage.validate();
    });

    it('navigate to All Destinations page', function(){

        //click "where we go" button
        hollandNextPage.navigateToSecondTab();

        browser.sleep(2000);

        //click "All Destinations"
        hollandNextPage.clickAllDestinations();

        browser.sleep(2000);

        //Validate that "Discover The World With Us" is present
        hollandNextPage.validate();

        browser.sleep(2000);  
    });
});

describe('Seabourn Website Navigation', function(){
    //this.timeout(5000);
    browser.waitForAngularEnabled(false);
    
    it('navigate to Seabourn wbsite', function(){
        seabournHomePage.get('https://www.seabourn.com/');
    
        browser.sleep(1000);
    });
    
    it('validate correct home page', function(){
        //Validate the presence of the Seabourn title and the cruise search menu
        seabournHomePage.validate();
    });
    
    it('navigate to Expeditions page', function(){
        //click "Expeditions" button
        seabournNextPage.navigateToExpeditions();
        browser.sleep(2000);
        
        //Validate that title and "Plan Your Cruise" button is present
        seabournHomePage.validate();
    
        browser.sleep(2000);  
    });
});