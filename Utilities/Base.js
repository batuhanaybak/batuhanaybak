var Base = function () {
    
    this.homeUrl='https://www.hobsons.com/'
    
    this.navigateToHome = function () {
        browser.get(this.homeUrl)
    }
}
module.exports = new Base();