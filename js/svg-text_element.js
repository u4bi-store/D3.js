/* svg-text_element*/

var circleData = [
  { "cx": 20, "cy": 20, "radius": 20, "color" : "green" },
  { "cx": 70, "cy": 70, "radius": 20, "color" : "purple" }
]; /* json 데이처 초기화*/

var svgContainer = d3.select('body').append('svg') /* body안에 svg를 주입함*/
  .attr('width', 200) /*해당 svg의 너비 초기화*/
  .attr('height', 200) /*해당 svg의 높이 초기화*/
  .style('border', '1px solid black'); /* css 속성 보더주입*/

var circles = svgContainer.selectAll('circle')
  .data(circleData) /* json양식으로 정의된 데이터 주입*/
  .enter() /* 바인딩*/
  .append('circle'); /* svg 컨테이너에 circle 태그 어팬드함*/

var circleAttributes = circles /* 받아온 json 객체로 속성 정의해줌*/
  .attr('cx', function(d){ return d.cx; }) /* x축 초기화*/
  .attr('cy', function(d){ return d.cy; }) /* y축 초기화*/
  .attr('r', function(d){ return d.radius; }) /* 반지름 초기화*/
  .style('fill', function(d){ return d.color; }); /* 색상 초기화*/


var text = svgContainer.selectAll('text')
  .data(circleData) /* json양식으로 정의된 데이터 주입*/
  .enter() /* 바인딩*/
  .append('text'); /* svg 컨테이너에 text 태그 어팬드함*/

var textLabels = text
  .attr('x', function(d){return d.cy;}) /* x축 */
  .attr('y', function(d){return d.cy;}) /* y축 */
  .text(function(d){return '('+d.cx+ ' , '+d.cy+')'; }) /* text 표기*/
  .attr('font-family' , 'sans-serif') /* 폰트체*/
  .attr('font-size', '1.3rem') /* 폰트사이즈*/
  .attr('fill', 'red'); /* 내부 색배경*/
