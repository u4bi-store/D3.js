/* pie-chart.js*/

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
  width:500, /* 너비값 초기화*/
  height:300, /* 높이값 초기화*/
  radius: 150, /* 반지름 초기화*/
  color: d3.scale.category20c() /* fill 색상나열함수*/
};

var vis = d3.select('#chart') /* #char 아이디가 선언된 태그를 찾음*/
  .append("svg:svg") /* svg를 어펜드함*/
  .data([data]) /* 데이터를 주입하고*/
  .attr("width", info.width) /* 너비를 지정*/
  .attr("height", info.height) /* 높이를 지정*/
  .append("svg:g") /* g 그룹태그를 어펜드한 후*/
  .attr("transform", "translate(" + info.radius + "," + info.radius + ")"); /* 반지름만큼 translate를 이용해 이동*/

var pie = d3.layout.pie().value(function(d){return d.value;}); /* d3 레이아웃 함수 내 파이값지정 후 리턴*/

var arc = d3.svg.arc().outerRadius(info.radius); /* path내 기입될 반지름의 포인터들 지정*/

var arcs = vis.selectAll("g") /* g를 추적하여 찾음*/
  .data(pie) /* 리턴받은 파이값 주입*/
  .enter().append("svg:g"); /* 바인딩 후 만약 g 추적이 불가능하다면 g그룹태그를 어펜드함*/

var arcsPie = arcs.append("svg:path") /* 어펜드한 그룹에 path를 어펜드*/
  .attr("fill", function(d, i){ return info.color(i); }) /* 배열별 색상을 지정해준 후*/
  .attr("d", function (d) {return arc(d); }) /* path 파이나눈만큼의 반지르 포인터 지정*/
  .attr("class", "pie"); /* 클래스 pie 지정 추후 css hover시 색변경 효과주기위함*/

var arcsText = arcs.append("svg:text") /* arcs 즉 g태그 그룹태그가 박힌안에 text태그를 어펜드함 */
  .attr("transform", function(d){ /* translate를 통해 반지름에 맞게 자리이동*/
    d.innerRadius = 0; d.outerRadius = info.radius;
    return "translate(" + arc.centroid(d) + ")"; /* arc내 중심을 가리키는값으로 반환해주는 함수*/
  })
  .attr("text-anchor", "middle") /* 텍스트 정렬점 미드*/
  .text(function(d, i){ return data[i].name; } /* 텍스트를 지정해준다 데이터내 name*/
);


arcsPie.on('mouseover', function(d, i){ /* arcsPie 반지름 원 조각들에게 마우스 오버 이벤트를 줌*/
  console.log('name : '+ data[i].name + 'value : '+ data[i].value); /* 해당 조각들에 대한 데이터값 콘솔 출력*/

});

arcsPie.on('mouseout', function(d){ /* arcsPie 반지름 원 조각들에게 마우스 아웃 이벤트도 줌*/
  console.log('exit'); /* 조각안을 벗어날 시 exit 콘솔로그 출력*/
});