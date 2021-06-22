let nextPage = function(){

    this.navigateToSecondTab = function(){
        const navButtons = element.all(by.className('main-nav-link')).get(1);
        browser.sleep(1000);
        navButtons.click();
    }

    this.clickAllDestinations = function(){
        const allDestinations = element.all(by.linkText('All Destinations')).get(0);
        browser.sleep(1000);
        allDestinations.click();
    }

    this.validate = function(url){
        const mapTitle = element(by.className('h1'));
        expect(mapTitle.getText()).toBe('Discover The World With Us');
    }

}

module.exports = new nextPage();
