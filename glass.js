var jsdom = require('jsdom');

var data = [];


function servefrom(url){
  jsdom.env(
    url,
    ["http://code.jquery.com/jquery.js"],
    function (errors, window) {
        var data = [];
        window.$('.datosplantel').each(function () {
            var dp = window.$(this).text().replace(/,/g, '%');
            data.push(dp);
        });
        console.log(data.join(','));
    });   
}


servefrom(process.argv[2]);
