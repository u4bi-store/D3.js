/* general_update_pattern.js*/

var inputText = '안녕하세요 반갑습니다. 오늘 참 많이 덥죠?'.split(''); /* 문자 초기화 스프릿으로 문자열 나눔*/

var info = {
  width:960, /* 너비값 초기화*/
  height:500, /* 높이값 초기화*/
};



var svg = d3.select('.chart') /* .chart 클래스가 선언된 태그 찾음*/
  .attr({width: info.width, height: info.height}); /* width와 height 속성을 정의*/

var group = svg.append("g").attr('transform', 'translate(32,'+(info.height/2)+')');
/* translate 요소로  x축은 32쯤 이동 svg의 y축을 나누기 2하여 중앙에 배치함*/

update(d3.shuffle(inputText)); /* 나눠진 문자열들을 섞어줌*/


function update(data){ /* 업데이트 렌더*/
  var text = group.selectAll('text').data(data); /* 데이터를 주입함*/
  
  text.enter().append('text') /* 바인딩하고 text 어펜드함*/
    .attr('class', 'enter') /* 클래스 지정*/
    .attr('x', function(d,i){return i * 23; }) /* x축 지정*/
    .attr('dy', '.35em') /* y축 지정*/
    .text(function(d){return d;}); /* 문자열 삽입*/
  
  text.exit().remove(); /* 끝마침*/
}