const https = require('https');

const printHtmlRequest = function getAndPrintHtmlChunks() {
  const requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };

  https.get(requestOptions, function(response) {
    response.setEncoding('utf8');

    response.on('data', function(data) {
      console.log(data.toString() + '\n');
    });

    response.on('error', function(err) {
      console.log(err);
    });

    response.on('end', function() {
      console.log(' ------------- END ------------- ');
    });
  });
};

printHtmlRequest();
