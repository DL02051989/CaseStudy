/**
 * Created by Deepika Lalwani on 08/02/2017.
 */
var webdriverio = require('webdriverio');
var options = {
    desiredCapabilities: {
        browserName: 'chrome'
    }
};
webdriverio
    .remote(options)
    .init()
    .url('  ')
    .getTitle().then(function(title) {
    console.log('Title was: ' + title);
})
    .end();