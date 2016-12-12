/* selecting_element.js*/


var div = document.createElement('div');
div.innerHTML = 'Hello, world';
document.body.appendChild(div);

var body = d3.select('body');
var div = body.append('div');
div.html('hello, world');

var section = d3.selectAll('section');
var div = section.append('div');
div.html('Hello');

var body = d3.select('body');
body.style('color', 'white');
body.style('background-color', 'gray');

d3.select('section')
  .style('color', 'black')
  .style('background-color', 'white');

d3.selectAll('section')
  .attr('class', 'special')
  .append('div')
  .html('hello u4bi');

var sction = d3.selectAll('section');
  section.append('div')
    .html('first');
  section.append('div')
    .html('second');
