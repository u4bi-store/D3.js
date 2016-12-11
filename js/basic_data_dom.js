/* basic_data_dom.js*/

var theData = [1, 2, 3];

var p = d3.select('body').selectAll('p')
  .data(theData) /*데이터 주입*/
  .enter() /* 바인딩*/
  .append('p') /*정의한거 붙혀넣음*/
  .text(setupData); /* 텍스트 요소 삽입*/

/* function(d){ return d;} 익명도 가능하나 난 익명이 거북해보임*/

function setupData(v){
  return v+'번 요소';
}