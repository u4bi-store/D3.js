/* bar-chart.js*/

var data = [2, 5, 40, 30, 28, 21];

d3.select('.chart') /* 데이터를 집어넣을 수 있는 요소를 찾아 정의함*/
  .selectAll('div') /* 요소를 찾음*/
  .data(data) /* 데이터를 주입하고*/
  .enter().append('div') /* 요소에 바인딩하고 div를 집어넣음*/
  .style('width', function(d){return d * 10+'px'; }) /* 주입된 date 배열에 맞게 width값을 정의하고*/
  .text(function(d){return d; }); /* 주입된 data 배열에 맞게 text를 정의함*/

