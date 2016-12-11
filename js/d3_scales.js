/* d3_scales */

var jsonRectangles = [
  { "x_axis": 10, "y_axis": 10, "height": 20, "width":20, "color" : "green" },
  { "x_axis": 16000000000, "y_axis": 40, "height": 20, "width":20, "color" : "purple" },
  { "x_axis": 70, "y_axis": 70000000000000, "height": 20, "width":20, "color" : "red" }
];

/* 초기 데이터 즉 domain이 담겨진 배열 */
var initialScaleData = [0, 1000, 3000, 2000, 5000, 4000, 7000, 6000, 9000, 8000, 10000];

/* 변환 범위가 담겨질 데이터 즉 range가 담겨질 배열 */
var newScaledData = []; /* 배열 선언*/

var minInitData = d3.min(initialScaleData); /* d3.min() 함수를 통해 init배열내 최대 원소값을 구함*/
var maxInitData = d3.max(initialScaleData); /* d3.max() 함수를 통해 init배열내 최대 원소값을 구함*/
 
var linearScale = d3.scale.linear() /* domain내 정의된 최소인자 최대인자값에 따른 range 범위 정의*/
  .domain([minInitData, maxInitData]) /* 배열 최소값부터 최대값으로 지정 */
  .range([0, 100]); /* 0부터 100까지 범위를 지정함 */

for (var i = 0; i < initialScaleData.length; i++) { /* 랭쓰까지 포문*/
  newScaledData[i] = linearScale(initialScaleData[i]); /* scale.linear에 정의된 변환값으로 초기화*/
  /* 들어갈 값 [0, 10, 30, 20, 50, 40, 70, 60, 90, 80, 100] */
  console.log(newScaledData[i]); /* 원소 출력*/
}