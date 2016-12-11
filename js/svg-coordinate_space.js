/* svg-coordinate_space*/

var spaceCircles = [30, 70, 110];

var svgContainer = d3.select('body').append('svg') /* body안에 svg를 주입함*/
  .attr('width', 200) /*해당 svg의 너비 초기화*/
  .attr('height', 200) /*해당 svg의 높이 초기화*/
  .style('border', '1px solid black'); /* css 속성 보더주입*/

var circles = svgContainer.selectAll('circle')
  .data(spaceCircles) /*데이터 주입*/
  .enter() /* 바인딩*/
  .append('circle'); /* 컨테이너에 어펜드함*/

var circleAttributes = circles
  .attr('cx', function(d){return d;}) /* x축 초기화*/
  .attr('cy', function(d){return d;}) /* y축 초기화*/
  .attr('r', 20) /* 반지름 초기화*/
  .style('fill', setupColor); /* 콜백으로 컬러주입*/

function setupColor(d) {
  if(d == 30) return 'green';
  else if(d == 70) return 'purple';
  else if(d == 110) return 'red';
}