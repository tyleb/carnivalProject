const { browser } = require("protractor");

let homePage = function(){
        
    this.get = function(url){
        browser.get(url);
    }
    
    this.validate = function(url){
        const seabournTitle = element.all(by.className('title'));
        expect(seabournTitle.get(3).getText()).toBe('The Seabourn All-Inclusive Difference');

        const searchBar = element.all(by.className('filter-border'));
        expect(searchBar.get(0).getText()).toBe('Destinations');
        expect(searchBar.get(1).getText()).toBe('Departure Date');
        expect(searchBar.get(2).getText()).toBe('Duration');
        expect(searchBar.get(3).getText()).toBe('Depart From');
        expect(searchBar.get(4).getText()).toBe('SEARCH');
    }
}


module.exports = new homePage();
