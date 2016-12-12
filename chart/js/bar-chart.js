/* bar-chart.js*/

var data = [
  {'name': '가', 'value' : .8167},
  {'name': '나', 'value' : .4167},
  {'name': '다', 'value' : .3167},
  {'name': '라', 'value' : .6167},
  {'name': '마', 'value' : .3167},
  {'name': '바', 'value' : .5167},
  {'name': '사', 'value' : .3167},
  {'name': '아', 'value' : .1167}
];

var info = {
  width:500, /* svg 너비*/
  height:300, /* svg 높이*/
  margin:{ /* 마진*/
    top:20,
    right:30,
    bottom:30,
    left:40
  }
};

info.width = info.width - info.margin.left - info.margin.right; /* 좌우 마진뺀 후의 너비*/
info.height = info.height - info.margin.top - info.margin.bottom; /* 상하 마진뺀 후의 높이*/

/* x의 scale 정의*/
var x = d3.scale.ordinal()
  .domain(data.map(function(d){return d.name; })) /* 어레이내 name값 나열*/
  .rangeRoundBands([0, info.width], .1); /* 너비 지정 세번째 인자는 좌우간의 간격값*/

/* y의 scale 정의*/
var y = d3.scale.linear()
  .domain([0, d3.max(data, function(d){return d.value; })]) /* d3,max() 어레이내 최대값*/
  .range([info.height, 0]); /* 높이지정*/

/* x의 axis 정의*/
var xAxis = d3.svg.axis() /* axis 호출 함수 선언*/
  .scale(x) /* x내 정의된 값으로 초기화*/
  .orient('bottom'); /* 바텀에 위치*/

/* y의 axis 정의*/
var yAxis = d3.svg.axis() /* axis 호출 함수 선언*/
  .scale(y) /* y내 정의된 값으로 초기화*/
  .orient('left') /* 레프트에 위치*/
  .ticks(10, "%"); /* 정의된 문자 변환*/

/* 클래스 .chart가 선언된 태그의 너비와 높이를 정의함*/
var chart = d3.select('.chart') /* .char 클래스가 선언된 태그를 찾음*/
  .attr('width', info.width + info.margin.left + info.margin.right) /* width값 정의해줌 일전에 빼둔 margin값 더하여 실제 너비값으로 초기화*/
  .attr('height', info.height + info.margin.top + info.margin.bottom) /* height값 정의해줌 일전에 빼둔 margin값 더하여 실제 높이값으로 초기화*/
  .append('g') /* g 그룹태그를 어펜드해줌*/
  .attr('transform', 'translate(' + info.margin.left + ',' + (info.margin.top) + ')'); /* 선언된 컨테이너의 마진 조정함*/

chart.append('g')
    .attr('class', 'x axis')
    .attr('transform', 'translate(0,' + info.height + ')')
    .call(xAxis);

chart.append('g')
    .attr('class', 'y axis')
    .call(yAxis);

chart.selectAll('.bar')
      .data(data)
    .enter().append('rect')
      .attr('class', 'bar')
      .attr('x', function(d) { return x(d.name); })
      .attr('y', function(d) { return y(d.value); })
      .attr('height', function(d) { return info.height - y(d.value); })
      .attr('width', x.rangeBand());