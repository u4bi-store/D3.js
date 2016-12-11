/* dynamic-svg_coordinate-space.js*/

var jsonRectangles =
[
  { "x_axis": 10, "y_axis": 10, "height": 20, "width":20, "color" : "green" },
  { "x_axis": 160, "y_axis": 40, "height": 20, "width":20, "color" : "purple" },
	{ "x_axis": 70, "y_axis": 70, "height": 20, "width":20, "color" : "red" }
]; /* json 데이터 초기화*/

var max_x=0;
var max_y=0;

for(var i=0; i<jsonRectangles.length; i++){
  var temp_x, temp_y;
  var temp_x = jsonRectangles[i].x_axis + jsonRectangles[i].width;
  var temp_y = jsonRectangles[i].y_axis + jsonRectangles[i].height;
  /* json 객체내의 최대너비와 높이의 원소를 가려내어 max_x와 max_y에 주입함 */
  
  if(temp_x >= max_x)max_x = temp_x;
  if(temp_y >= max_y) max_y = temp_y;
}

var svgContainer = d3.select('body').append('svg') /* body안에 svg를 주입함*/
  .attr('width', max_x+20) /*해당 svg의 너비 초기화*/
  .attr('height', max_y+20) /*해당 svg의 높이 초기화*/
  .style('border', '1px solid black'); /* css 속성 보더주입*/

var rectangles = svgContainer.selectAll('rect')
  .data(jsonRectangles) /* json양식으로 정의된 데이터 주입*/
  .enter() /* 바인딩*/
  .append('rect'); /* 컨테이너에 어펜드함*/

var rectangleAttributes = rectangles /* 속성 정의함*/
  .attr('x',function(d){return d.x_axis; }) /* x축 */
  .attr('y',function(d){return d.y_axis; }) /* y축 */
  .attr('height',function(d){return d.height; }) /* 높이 */
  .attr('width',function(d){return d.width; }) /* 너비 */
  .attr('stroke-width', 5) /* 테투리선의 굵기 크기*/
  .attr('stroke', 'black') /* 테투리선의 색상값*/
  .style('fill',function(d){return d.color; }); /* 내부에 채워지는 색상값*/
