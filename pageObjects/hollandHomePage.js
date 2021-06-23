const { browser } = require("protractor");



let homePage = function(){
        
    this.get = function(url){
        browser.get(url);
    }
    
    this.validate = function(url){
        //validate page title
        const seabournTitle = element.all(by.className('title'));
        expect(seabournTitle.get(0).getText()).toBe('Holland America Cruises');

        //validate cruise search menu
        const searchBar = element.all(by.className('filter-border'));
        expect(searchBar.get(0).getText()).toBe('DESTINATIONS');
        expect(searchBar.get(1).getText()).toBe('DEPARTURE DATE');
        expect(searchBar.get(2).getText()).toBe('DURATION');
        expect(searchBar.get(3).getText()).toBe('DEPART FROM');
        expect(searchBar.get(4).getText()).toBe('SEARCH');
    }
}


module.exports = new homePage();
