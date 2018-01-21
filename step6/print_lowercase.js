// print_lowercase.js : The exact opposite of the former - transforms the html string into poetic lowercase and prints it to the console.

const getHtml = require('./https-functions.js').getHtml;

const printLowercase = function consoleLogLowercaseHtml(html) {
  console.log(html.toLowerCase());
};

const requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/lowercase.html'
};

getHtml(requestOptions, printLowercase);
