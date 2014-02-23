var jsdom = require('jsdom');

var data = [];

jsdom.env(
  process.argv[2],
  ["http://code.jquery.com/jquery.js"],
  function (errors, window) {
      window.$('.listaplanteles a').each(function (idx, a) {
        console.log(a.href);
      });
  });
