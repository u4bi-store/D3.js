/* svg-path_d3.js*/

var json = [
  { "x": 1,   "y": 5},  { "x": 20,  "y": 20},
  { "x": 40,  "y": 10}, { "x": 60,  "y": 40},
  { "x": 80,  "y": 5},  { "x": 100, "y": 60}
]; /* json 데이터 초기화*/

/* d3에 정의된 라인 메서드를 초기화시키고 lineFunction에 객체를 주입함*/
var linear = d3.svg.line()
  .x(function(d){ return d.x; }).y(function(d){ return d.y; })
  .interpolate('linear'); /* 유형 첫번째 linear*/

/* d3.svg.line() 함수의 interpolate 속성에선 11가지 유형의 옵션을 제공함
  step-before
  step-after
  basis
  basis-open
  basis-closed
  bundle
  cardinal
  cardinal-open
  cardinal-closed
*/

var svgContainer = d3.select('body').append('svg') /* body안에 svg를 주입함*/
  .attr('width', 200) /*해당 svg의 너비 초기화*/
  .attr('height', 100) /*해당 svg의 높이 초기화*/
  .style('border', '1px solid black'); /* css 속성 보더주입*/


var lineGraph = svgContainer.append('path') /* svg에 path 태그 주입함*/
  .attr('d', linear(json)) /* 포인트 정보 정의함*/
  .attr('stroke', 'black') /* 라인의 태두리면 색상*/
  .attr('stroke-width', 2) /* 라인의 굵기 크기*/
  .attr('fill', 'none'); /* 내부 채워지는 색 */



/*-----------------------------------------------------------------------------------------------*/
var step_before = d3.svg.line().x(setX).y(setY).interpolate('step-before');
var step_after = d3.svg.line().x(setX).y(setY).interpolate('step-after');
var basis = d3.svg.line().x(setX).y(setY).interpolate('basis');
var basis_open = d3.svg.line().x(setX).y(setY).interpolate('basis-open');
var basis_closed = d3.svg.line().x(setX).y(setY).interpolate('basis-closed');
var bundle = d3.svg.line().x(setX).y(setY).interpolate('bundle');
var cardinal = d3.svg.line().x(setX).y(setY).interpolate('cardinal');
var cardinal_open = d3.svg.line().x(setX).y(setY).interpolate('cardinal-open');
var cardinal_closed = d3.svg.line().x(setX).y(setY).interpolate('cardinal-closed');

  line(step_before(json));
  line(step_after(json));
  line(basis(json));
  line(basis_open(json));
  line(basis_closed(json));
  line(bundle(json));
  line(cardinal(json));
  line(cardinal_open(json));
  line(cardinal_closed(json));

function line(obj){
  var svgContainer = d3.select('body').append('svg')
    .attr('width', 200)
    .attr('height', 100)
    .style('border', '1px solid black');
  
  var lineGraph = svgContainer.append('path')
    .attr('stroke', 'black')
    .attr('stroke-width', 2)
    .attr('fill', 'none')
    .attr('d', obj);
}

function setX(d){return d.x;}
function setY(d){return d.y;}