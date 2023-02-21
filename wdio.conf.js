var browserstack = require('browserstack-local');

exports.bs_local = new browserstack.Local();
  
exports.config = {
    user: process.env.BROWSERSTACK_USERNAME || 'dohej_iLvVgE',
    key: process.env.BROWSERSTACK_ACCESS_KEY || '27aQ2PYVcrHxRo9c2giP',

    updateJob: false,
    
    specs: [
        './test/specs/**/*.js'
    ],

    exclude: [],
    
    capabilities: [{
        project: "First Webdriverio Android Project",
        build: 'Webdriverio Android',
        name: 'first_test',
        device: 'Google Pixel 3',
        os_version: "9.0",
        app: process.env.BROWSERSTACK_APP_ID || 'bs://2d21bbf63c36309f5703dce5a7683d1580443b73',
        'browserstack.local': true,
        'browserstack.debug': true
      },
    {
        project: "First Webdriverio Android Project",
        build: 'Webdriverio Android',
        name: 'second_test',
        device: 'Google Pixel 7',
        os_version: "13.0",
        app: process.env.BROWSERSTACK_APP_ID || 'bs://2d21bbf63c36309f5703dce5a7683d1580443b73',
        'browserstack.local': true,
        'browserstack.debug': true
    }],
    
    logLevel: 'info',
    coloredLogs: true,
    screenshotPath: './errorShots/',
    baseUrl: '',
    
    waitforTimeout: 10000,
    
    connectionRetryTimeout: 90000,
    
    connectionRetryCount: 3,
    
    framework: 'mocha',

    mochaOpts: {
        ui: 'bdd',
        timeout: 20000
    },
}
