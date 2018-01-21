// print_uppercase.js : Transforms the html string into ALL CAPS and prints it to the console.

const getHtml = require('./https-functions.js').getHtml;

const printUppercase = function consoleLogUpperCaseHtml(html) {
  console.log(html.toUpperCase());
};

const requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/uppercase.html'
};

getHtml(requestOptions, printUppercase);
