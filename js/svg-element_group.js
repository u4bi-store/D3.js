/* svg-element_group*/

/* 원형 json 데이터 */
var circleData = [
  { "cx": 20, "cy": 20, "radius": 20, "color" : "green" },
	{ "cx": 70, "cy": 70, "radius": 20, "color" : "purple" }
];

/* 사각형 json 데이터*/
var rectangleData = [
  { "rx": 110, "ry": 110, "height": 30, "width": 30, "color" : "blue" },
  { "rx": 160, "ry": 160, "height": 30, "width": 30, "color" : "red" }
];

/* 원형과 사각형을 담을 svg 컨테이너 정의 */
var svgContailner = d3.select('body').append('svg')
  .attr('width', 200)
  .attr('height', 200);

var circleGroup = svgContailner.append('g') /* svg내에 g태그 어펜드해줌*/
  .attr('transform', 'translate(80, 0)'); /* 속성 정의 translate 80, 0 이동속성 */

/* 원형 모체*/
var circles = circleGroup.selectAll('circle') /* svg내 어펜드된 g태그 내부에 정의*/
  .data(circleData)
  .enter()
  .append('circle');

/* 원형 svg 속성 정의*/
var circleAttributes = circles
  .attr('cx', function (d) { return d.cx; })
  .attr('cy', function (d) { return d.cy; })
  .attr('r', function (d) { return d.radius; })
  .style('fill', function(d){return d.color; });


/* 사각형 모체*/
var rectangles = svgContailner.selectAll('rect')
  .data(rectangleData)
  .enter()
  .append('rect');
/* 사각형 svg 속성 정의*/
var rectangleAttributes = rectangles
  .attr('x', function (d) { return d.rx; })
  .attr('y', function (d) { return d.ry; })
  .attr('height', function (d) { return d.height; })
  .attr('width', function (d) { return d.width; })
  .style('fill', function (d) { return d.color; });
