var HomePage = require('../Pages/Home.page.js');
var Careers = require('../Pages/Careers.page.js');
var Base = require('../Utilities/Base.js');



describe('Test Suite for Hobsons', function() { 

    //every it block refers to a Test case
    
    beforeEach(function () {
        browser.ignoreSynchronization = true;
        browser.get(Base.homeUrl);
        browser.sleep(1000);
    })

    
    it('should check the title', function() {
        expect(HomePage.logo.isDisplayed()).toBe(true);
        expect(browser.getTitle()).toBe(HomePage.title);
    });
        

    it('should log the header items and sub-items', function() { 

        HomePage.mainHeader.getText().then(function (items) {
            console.log(`Main header links : ${items.join(', ')}`)
        })
        
        //hovering on Solutions
        browser.actions().mouseMove(HomePage.Solutions).perform();
        HomePage.solutionsLinks.getText().then(function (items) {
            console.log(`Items under Solutions : ${items.join(', ')}`)
        })

        //hovering on Resources
        browser.actions().mouseMove(HomePage.Resources).perform()
        HomePage.resourcesLinks.getText().then(function (items) {
            console.log(`Items under Resources : ${items.join(', ')}`)
        });

        //hovering on About
        browser.actions().mouseMove(HomePage.About).perform();
        HomePage.aboutLinks.getText().then(function (items) {
            console.log(`Items under About : ${items.join(', ')}`)
        });
    });

    // Right scroll under Learn More
    it('should click Top Right arrow and confirm scrolling ', function() { 
        

        browser.executeScript('arguments[0].scrollIntoView();',HomePage.learnMore).then(function(){
            browser.actions().mouseMove(HomePage.rightTopArrow).perform();
            HomePage.rightTopArrow.click();
            expect( (HomePage.rightTopBox).isDisplayed() ).toBe(true);

        });
        
    });

    // Left scroll under Learn More
    it('should click Top Left arrow to confirm scrolling ', function() { 

        browser.executeScript('arguments[0].scrollIntoView();',HomePage.learnMore).then(function(){
            browser.actions().mouseMove(HomePage.leftTopArrow).perform();
            HomePage.leftTopArrow.click();
            expect( (HomePage.leftTopBox).isDisplayed() ).toBe(true);
        })

        
    });

    // Right scroll under Resources
    it('should click Bottom Right arrow to confirm scrolling ', function() { 

        browser.executeScript('arguments[0].scrollIntoView();',HomePage.resourcesBottom).then(function(){
            browser.actions().mouseMove(HomePage.rightBottomArrow).perform();
            HomePage.rightBottomArrow.click();
            expect((HomePage.rightBottomBox).isDisplayed()).toBe(true);
        })

        
    });

     // Left scroll under Resources
    it('should click Bottom Left arrow to confirm scrolling ', function() { 

        browser.executeScript('arguments[0].scrollIntoView();',HomePage.resourcesBottom).then(function(){
            browser.actions().mouseMove(HomePage.leftBottomArrow).perform();
            HomePage.leftBottomArrow.click();
            expect(HomePage.leftBottomBox.isDisplayed()).toBe(true);
        })

        
    });

    it('should click Careers and get compare the locations with expected', function() { 

        browser.executeScript('arguments[0].scrollIntoView();',HomePage.bottomPage).then(function(){
            HomePage.careers.click();
        })
        Careers.locations.getText().then(function (locations) {
            console.log(locations);
        })

    });
    
});
