/* radius-mouse_chart.js*/

var info = {
  width:500, /* 너비값 초기화*/
  height:250, /* 높이값 초기화*/
  radius:70 /* 반지름 초기화*/
};

var svg = d3.select('.chart') /* .chart 클래스가 선언된 태그 찾음*/
  .attr({width: info.width, height: info.height}) /* width와 height 속성을 정의*/
  .on('mousemove', mouseCtrl); /* 마우스 무브 이벤트를 활성화시키고 콜백으로 호출함*/

var report = svg.append('text') /* svg 컨테이너에 text를 어펜드함*/
  .attr('id', 'reportStyle') /* id에 reportStyle 요소를 줌*/
  .attr({x:80, y:80}) /* x축과 y축을 정의*/
  .text('앵글: 0'); /* 앵글은 0*/

var group = svg.append('g') /* svg 컨테이너에 g 그룹 태그를 어펜드하고*/
  .attr('id', 'group') /* id에 group를 줌*/
  .attr('transform', 'translate('+[info.width/2, info.height/2]+ ')');
  /* translate 요소로 svg 사이즈 나누기 2를하여 중앙에 배치함 */

var spoke = group.append('path').attr('id', 'spokeStyle') /* path 어펜드함*/
  /* 아이디에 spokeStyle를 줌*/
  .attr('d', 'M 0 0 h '+(info.radius-2)+'l -9 3  2 -3 -2 -3 9 3');
  /* path 포인터 정렬시켜줌*/

var circle = group.append('circle').attr('id', 'circleStyle')
  /* 원형태그 어펜드 후 아이디 circleStyle를 줌*/
  .attr('r', info.radius); /* 반지름을 정의해줌*/

function mouseCtrl(){ /* 마우스 무브 이벤트리스너 콜백*/
  var xy = d3.mouse(circle.node()); /* 마우스의 요소를 xy에 정의함*/
  var angle = (180/Math.PI * Math.atan2(xy[1], xy[0])); /* 앵글값 정의 노드 xy[1], [0]*/
  
  /* 마우스 무브가 호출될 때  정의한 요소 업데이트함*/
  d3.select('#spokeStyle').attr('transform', 'rotate('+angle+')'); /* 반지름 앵글 rotate로 변환*/
  d3.select('#reportStyle').text('앵글 : '+angle.toFixed(2)); /* 문자 변경함*/
}