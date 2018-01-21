const https = require('https');

const getAndPrintHtml = function makeAndPrintHtmlRequest(options) {

  https.get(options, function(response) {
    response.setEncoding('utf8');

    let buffer = '';
    response.on('data', function(data) {
      buffer += data.toString();
    });
    response.on('end', function() {
      console.log(buffer);
    });

    response.on('error', function(err) {
      console.log(err);
    });
  });
};

const requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};

getAndPrintHtml(requestOptions);
