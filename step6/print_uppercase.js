// print_uppercase.js : Transforms the html string into ALL CAPS and prints it to the console.

const getHtml = require('./http-functions.js').getHtml;

const printUppercase = function consoleLogUpperCaseHtml(html) {
  // TODO
};

const requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/uppercase.html'
};

getHtml(requestOptions, printHtml);
