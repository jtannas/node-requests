// print_lowercase.js : The exact opposite of the former - transforms the html string into poetic lowercase and prints it to the console.

const getHtml = require('./http-functions.js').getHtml;

const printLowercase = function consoleLogLowercaseHtml(html) {
  // TODO
};

const requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/lowercase.html'
};

getHtml(requestOptions, printHtml);
