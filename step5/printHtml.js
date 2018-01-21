const getHtml = require('./http-functions.js').getHtml;

const printHtml = function consoleLogHtml(html) {
  console.log(html);
};

const requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step5.html'
};

getHtml(requestOptions, printHtml);
