let SpecReporter = require('jasmine-spec-reporter').SpecReporter;
exports.config = {

    seleniumAddress: 'http://localhost:4444/wd/hub',
    //directConnect = true,
    
    capabilities:{'browserName': 'chrome'},
                    
    specs: ['/Users/batuhanaybak/Desktop/Sample/spec.js'],
    
    framework: 'jasmine2',
    
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 30000
    
    },

    onPrepare: function(){
        browser.manage().window().maximize();
        jasmine.getEnv().addReporter(new SpecReporter({
          displayFailuresSummary: true,
          displayFailuredSpec: true,
          displaySuiteNumber: true,
          displaySpecDuration: true
        }));
        
        var HtmlReporter = require('protractor-beautiful-reporter');
        jasmine.getEnv().addReporter(new HtmlReporter({
            baseDirectory: 'report/screenshots',
            preserveDirectory:false,
            screenshotSubfolder:'images',
            jsonSubfolder:'jsons',
            docName:'Report.html'
         }).getJasmine2Reporter());

    }



    


};
  
