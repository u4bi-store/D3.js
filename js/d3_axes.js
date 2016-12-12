/* d3_axes*/

var svgContainer = d3.select('body').append('svg') /* body안에 svg를 주입함*/
  .attr('width', 400) /*해당 svg의 너비 초기화*/
  .attr('height', 100) /*해당 svg의 높이 초기화*/
  .style('border', '1px solid black'); /* css 속성 보더주입*/

var axisScale = d3.scale.linear() /* range 범위 정의*/
  .domain([0, 100]) /* 배열 최소값부터 최대값으로 지정 */
  .range([0, 400]); /* width 범위까지 지정  0~ 100 지정*/

/* axis을 생성함*/
var xAxis = d3.svg.axis()
  .scale(axisScale); /* 범위지정*/

/* svg 컨테이너 내에 g 태그 즉 그룹 태그를 주입하고 g태그내에 axis를 호출함*/
var xAisGroup = svgContainer.append('g')
  .call(xAxis);