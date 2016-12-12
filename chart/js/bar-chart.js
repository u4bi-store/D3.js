/* bar-chart.js*/

var data = [2, 5, 40, 30, 28, 21];

var width = 420,
    barHeight = 20;

var scaling = d3.scale.linear() /* range 범위 정의후 변환값을 리턴함*/
  .domain([0, d3.max(data)]) /* 범위 최소값부터 최대값으로 지정 d3.max() 어레이내 최대값 리턴*/
  .range([0, width]); /* width 범위까지 지정*/


var chart = d3.select('.chart') /* 데이터를 집어넣을 수 있는 요소를 찾아 정의함 */
  .attr('width', width) /* chart가 선언된 태그의 width값을 정의*/
  .attr('height', barHeight * data.length) /* chart가 선언된 태그의 height값을 정의 barHeight 곱하기 데이터 랭쓰만큼 늘림*/
  .style('border', '1px solid black'); /* css 속성 보더주입*/

var bar = chart.selectAll('g') /* 요소를 찾음 */
  .data(data) /* 데이터를 주입하고 */
  .enter().append('g') /* 요소에 바인딩하고 g태그 그룹태그를 어펜트함 */
  .attr('transform', function(d, i) { return 'translate(0 , ' + i * barHeight + ')'; }); /*trans 이동 요소 정의 */

bar.append('rect') /* g태그 그룹안에 rect태그 어펜드함 */
  .attr('width', scaling) /*width값줌 */
  .attr('height', barHeight -1); /*컨테이너 높이 곱하기 배열의 랭쓰만큼 */

bar.append('text') /* g태그 그룹안에 text태그 어펜드함 */
  .attr('x', function(d){return scaling(d)-3; }) /* 주입된 date 배열에 맞게 width값을 정의하고 */
  .attr('y', barHeight /2 ) /* svg 컨테이너의 높이값 나누기2에 맞게 정의 */
  .attr('dy', '.35em') /* y축 정의 */
  .text(function(d){return d; }); /* 주입된 data 배열에 맞게 text를 정의함 */
