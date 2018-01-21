// print_reverse.js : Reverses the html string and then prints it to the console.

const getHtml = require('./https-functions.js').getHtml;

const printReverse = function consoleLogReverseHtml(html) {
  console.log(html.split('').reverse().join(''));
};

const requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/reverse.html'
};

getHtml(requestOptions, printReverse);
