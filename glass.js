var jsdom = require('jsdom');

var data = [];


function servefrom(url){
  jsdom.env(
    url,
    ["http://code.jquery.com/jquery.js"],
    function (errors, window) {
        var data = [];
        window.$('.datosplantel').each(function () {
            data.push(window.$(this).text());
        });
        console.log(data.join(','));
    });   
}


servefrom(process.argv[2]);
