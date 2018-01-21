const https = require('https');

const getHtml = function returnStringFromHtmlRequest(options, callback) {

  https.get(options, function(response) {
    response.setEncoding('utf8');

    let buffer = '';
    response.on('data', function(data) {
      buffer += data;
    });

    response.on('end', function() {
      callback(buffer);
    });

    response.on('error', function(err) {
      console.log(err);
    });
  });
};

const printHtml = function consoleLogHtml(html) {
  console.log(html);
};

const requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

getHtml(requestOptions, printHtml);
