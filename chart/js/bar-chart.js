/* bar-chart.js*/

var data = [2, 5, 40, 30, 28, 21];

var scaling = d3.scale.linear() /* range 범위 정의후 변환값을 리턴함*/
  .domain([0, d3.max(data)]) /* 범위 최소값부터 최대값으로 지정 d3.max() 어레이내 최대값 리턴*/
  .range([0, 420]); /* width 범위까지 지정*/


var chart = d3.select('.chart'); /* 데이터를 집어넣을 수 있는 요소를 찾아 정의함*/
var bar = chart.selectAll('div'); /* 요소를 찾음*/
var barUpdate = bar.data(data); /* 데이터를 주입하고*/
var barEnter = barUpdate.enter().append('div'); /* 요소에 바인딩하고 div를 집어넣음*/
barEnter.style('width', function(d){return scaling(d) + 'px'; }); /* 주입된 date 배열에 맞게 width값을 정의하고*/
barEnter.text(function(d){return d;}); /* 주입된 data 배열에 맞게 text를 정의함*/