/* bar-chart.js*/

var data = [
  {'name': '홍길', 'value' : 67},
  {'name': '홍순', 'value' : 53},
  {'name': '남순', 'value' : 84},
  {'name': '남돌', 'value' : 33},
  {'name': '돌훈', 'value' : 21},
  {'name': '도한', 'value' : 15},
  {'name': '도순', 'value' : 89},
  {'name': '한길', 'value' : 71}
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
  .domain([0, 100]) /* 0부터 100까지*/
  .range([info.height, 0]); /* 높이지정*/

/* x의 axis 정의*/
var xAxis = d3.svg.axis() /* axis 호출 함수 선언*/
  .scale(x) /* x내 정의된 값으로 초기화*/
  .orient('bottom'); /* 바텀에 위치*/

/* y의 axis 정의*/
var yAxis = d3.svg.axis() /* axis 호출 함수 선언*/
  .scale(y) /* y내 정의된 값으로 초기화*/
  .orient('left'); /* 레프트에 위치*/
  // .ticks(10, "%"); /* 정의된 문자 변환*/

/* 클래스 .chart가 선언된 태그의 너비와 높이를 정의함*/
var chart = d3.select('.chart') /* .char 클래스가 선언된 태그를 찾음*/
  .attr('width', info.width + info.margin.left + info.margin.right) /* width값 정의해줌 일전에 빼둔 margin값 더하여 실제 너비값으로 초기화*/
  .attr('height', info.height + info.margin.top + info.margin.bottom) /* height값 정의해줌 일전에 빼둔 margin값 더하여 실제 높이값으로 초기화*/
  .style('border', '1px solid black') /* css 속성 보더주입*/
  .append('g') /* g 그룹태그를 어펜드해줌*/
  .attr('transform', 'translate(' + info.margin.left + ',' + (info.margin.top) + ')'); /* 선언된 컨테이너의 마진 조정함*/

var axisX = chart.append('g') /* 차트 컨테이너에 g 그룹태그를 어팬드함*/
  .attr('class', 'x axis') /* axis라는 클래스 주입 style.css에서 가져옴*/
  .attr('transform', 'translate(0,' + info.height + ')') /*translate로 부착될 위치조정 화면아래 즉 차트아래*/
  .call(xAxis); /* 정의된 xAxis 호출하여 초기화함*/

var axisY = chart.append('g') /* 차트 컨테이너에 g 그룹태그를 어팬드함*/
    .attr('class', 'y axis') /* axis라는 클래스 주입 style.css에서 가져옴*/
    .call(yAxis); /* 정의된 xAxis 호출하여 초기화함*/

var bar = chart.selectAll('.bar') /* .bar 클래스 찾음*/
      .data(data) /* json으로 정의된 data 객체를 주입함*/
    .enter().append('rect') /* 바인딩하고 사각형 태그를 차트 컨테이너 내부의 그룹안에 어펜드함*/
      .attr('class', 'bar') /* 클래스 주입 style.css내에 정의됨*/
      .attr('x', function(d) { return x(d.name); }) /* 바인딩된 객체의 name값이 적혀짐*/
      .attr('y', function(d) { return y(d.value); }) /* 바인딩된 객체의 value값이 적혀짐*/
      .attr('height', function(d) { return info.height - y(d.value); }) /* 콜백으로 값을 높이를 치수를 가져옴*/
      /* svg 컨테이너의 높이값 - y()로 변형한 바인딩된 객체(data)내 원소값(value) 즉 범위값*/
      .attr('width', x.rangeBand()); /* x의 랭쓰에 알맞게 분할하여 width값을 조정함 */

bar.on('mouseover', function(d){
  console.log('name : '+ d.name + 'value : '+ d.value);

});

bar.on('mouseout', function(d){
  console.log('exit');
});