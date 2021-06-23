let nextPage = function(){

    this.navigateToExpeditions = function(){
        const navButtons = element.all(by.className('main-nav-item')).get(1);
        browser.sleep(1000);
        navButtons.click();
    }

    this.validate = function(url){
        //validate unique message on page
        const header = element(by.className('home-hero-header'));
        expect(header.getText()).toBe('GET SET FOR AN ULTRA-LUXURY EXPEDITION EXPERIENCE LIKE NO OTHER. AUTHENTIC. PERSONALIZED. MEMORABLE.');
        
        browser.sleep(1000);
        
        //validate 'plan your cruise' button
        const planCruise = element(by.className('bg-sv-orange'));
        expect(planCruise.getText()).toBe('Plan Your Cruise');
    }


}

module.exports = new nextPage();
