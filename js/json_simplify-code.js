/* json_simplify-code.js*/

var jsonCircles = [
  {"x_axis": 30, "y_axis": 30, "radius": 20, "color" : "green"},
  {"x_axis": 70, "y_axis": 70, "radius": 20, "color" : "purple"},
  {"x_axis": 110, "y_axis": 100, "radius": 20, "color" : "red"}
]; /* json 데이터 초기화*/

var svgContainer = d3.select('body').append('svg') /* body안에 svg를 주입함*/
  .attr('width', 200) /*해당 svg의 너비 초기화*/
  .attr('height', 200) /*해당 svg의 높이 초기화*/
  .style('border', '1px solid black'); /* css 속성 보더주입*/

var circles = svgContainer.selectAll('circle')
  .data(jsonCircles) /* json양식으로 정의된 데이터 주입*/
  .enter() /* 바인딩*/
  .append('circle'); /* 컨테이너에 어펜드함*/

var circleAttributes = circles  /* 객체로 출력 d.x_axis, d.y_axis, d.radius, d.color */
  .attr('cx', function(d){ return d.x_axis; }) /* x축 초기화*/
  .attr('cy', function(d){ return d.y_axis; }) /* y축 초기화*/
  .attr('r', function(d){ return d.radius; }) /* 반지름 초기화*/
  .style('fill', function(d){ return d.color; }); /* 색상 초기화*/