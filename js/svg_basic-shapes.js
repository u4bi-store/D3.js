/* svg_basic-shapes*/

var svgContainer = d3.select('body').append('svg') /* 바디에 svg태그 주입함*/
  .attr('width', 200) /* 컨테이너의 너비*/
  .attr('height', 200); /* 컨테이너의 높이*/

/* 원형 */
var circle = svgContainer.append('circle') /*svg에 원형태그 주입함*/
  .attr('cx', 30) /* 원형의 x축*/
  .attr('cy', 30) /* 원형의 y축*/
  .attr('r', 20); /* 원형의 반지름*/

/* 사각형 */
var rectangle = svgContainer.append('rect') /* svg에 사각형태그 주입함*/
  .attr('x', 10) /* 사각형의 x축*/
  .attr('y', 60) /* 사각형의 y축*/
  .attr('width', 50) /* 사각형의 너비*/
  .attr('height', 50); /* 사각형의 높이*/

/* 타원*/
var ellipse = svgContainer.append('ellipse') /* svg에 타원형태그 주입함*/
  .attr('cx', 40) /* 타원형의 x축*/
  .attr('cy', 130) /* 타원형의 y축*/
  .attr('rx', 25) /* 타원형의 반지름 x값*/
  .attr('ry', 10); /* 타원형의 반지름 y값*/

/* 직선*/
var line = svgContainer.append('line')
  .attr('x1', 0) /* 라인이 시작하는 지점의 x축*/
  .attr('y1', 150) /* 라인이 시작하는 지점의 y축*/
  .attr('x2', 200) /* 라인이 끝이나는 지점의 x축*/
  .attr('y2', 150) /* 라인이 끝이나는 지점의 y축*/
  .attr('stroke-width', 2) /* 라인의 굵기 크기*/
  .attr('stroke', 'black'); /* 라인의 색상값*/
