/* d3_data_structures*/

var theData = [1, 2, 3]; /* 배열 초기화*/

var jsonData = [
  {
    'name' : 'u4bi',
    'age' : '16',
    'laptop' : 'chromebook pixel'
  },
  {
    'name' : 'dori',
    'age' : '18',
    'laptop' : 'samsung chromebook pro'
  },
  {
    'name' : 'cpu',
    'age' : '12',
    'laptop' : 'toshiba chromebook 2'
  }
]; /* json 데이터 초기화*/


var p = d3.select('body').selectAll('p')
  .data(theData) /* 주입하고*/
  .enter() /* 바인딩*/
  .append('p') /* p태그*/
  .text(function(d, i){ /* 익명으로 확인 i배열번/d원소값 */
    return i+'번째 원소 : '+d;
  });

var p = d3.select('body').selectAll()
  .data(jsonData) /* 주입*/
  .enter() /* 바인딩*/
  .append('p') /* p태그*/
  .text(function(d, i){ /* 객체로 출력 d.name d.age d.laptop */
    return i+'번째 원소 이름 : '+d.name+' 나이 : '+d.age+' 랩탑 : '+d.laptop;
  });


/* exam*/

var jsonCircles = [
  { "x_axis": 30, "y_axis": 30, "radius": 20, "color" : "green"},
  { "x_axis": 70, "y_axis": 70, "radius": 20, "color" : "purple"},
  { "x_axis": 110, "y_axis": 100, "radius": 20, "color" : "red"}
];