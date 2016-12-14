/* json-bar-chart.js*/

var info = {
  width:550, /* 너비값 초기화*/
  height:500, /* 높이값 초기화*/
  padding:{ /* 패딩 간격*/
    top:70, /* 상단*/
    left:50, /* 좌측*/
    bar:5 /* 바 사이사이 간격*/
  },
  duration:1500 /*지속 효과*/
};
var chart, scaleX;

d3.json('model/json-bar-chart.json', drawChart); /* json으로 가져와 콜백으로 넘김*/

function drawChart(data){ /* 차트를 그림*/
  
  var money = []; /* money란 어레이줌*/
  for(i = 0; i<data.length; i++)money.push(data[i].money); /* json으로 넘어온 데이터의 랭쓰만큼 포문 돌려 money에 담음*/
  scaleX = d3.scale.linear().domain([0, d3.max(money)]) /* 0부터 money의 최대값까지*/.range([0, 450]); /* 너비 지정*/
  /* x의 scale 정의*/
  
  chartInit(); /* 차트 만들기*/
  lineYgraduation(); /* 세로 axis 눈금*/
  lineYMoneyText(); /* 세로 axis 눈금 위 숫자 표시함*/
  barInit(data); /* 바 만들기*/
  barDuration(data); /*바 생성효과*/
  lineXnameText(data); /* 바 좌측 이름 표시*/
  chartTitleInfo(); /* 차트 우측 상단에 표시함*/

}

/* 차트 만들기*/
function chartInit(){
  chart = d3.select('#chart-container') /* id 차트 컨테이너를 가진 태그를 찾음*/
    .append('svg') /* svg를 어펜드함*/
    .attr('class', 'chart') /* 클래스 차트를 씌움*/
    .attr('width', info.width) /* width값 설정*/
    .attr('height', info.height) /* height값 설정*/
    .style('border', '1px solid black') /* 보더를 주고*/
    .append('g') /* g 그룹태그를 어펜드함*/
    .attr('transform', 'translate(0, ' + info.padding.top + ')') /* 트랜스레이트로 탑 간격 이동*/
}

/* 세로 axis 눈금*/
function lineYgraduation(){
  chart.selectAll('g') /* 컨테이너에 입혀진 g 그룹태그를 찾음*/
    .data(scaleX.ticks(10)) /* 변환되어 정의된 데이터를 넘김*/
    .enter().append('line') /*바인딩하고 line을 어펜드함*/
    .attr('x1', function(d){ /* 라인의 x1 값을 지정*/
      return scaleX(d) + info.padding.left; /* 변환값에 + 왼쪽 간격만큼 리턴*/
    })
    .attr('x2', function(d){ /* 라인의 x2 값을 지정*/
      return scaleX(d) + info.padding.left;  /* 변환값에 + 왼쪽 간격만큼 리턴*/
    })
    .attr('y1',info.padding.bar) /* 라인의 y1에 바사이간의 간격을 줌*/
    .attr('y2', info.height - info.padding.top - info.padding.bar) /*라인의 y2 값은 패딩으로 빠지는 값을 제외한 높이값을 줌*/
    .style('stroke', '#ccc'); /* 라인의 색삭정의*/
}

/* 세로 axis 눈금 위 숫자 표시함*/ 
function lineYMoneyText(){
  chart.selectAll('g') /* 컨테이너에 입혀진 g 그룹태그를 찾음*/
    .data(scaleX.ticks(10)) /* 변환되어 정의된 데이터를 넘김*/
    .enter().append('text') /*바인딩하고 text를 어펜드함*/
    .attr('x', function(d){ /* 텍스트의 x 값을 지정*/
      return scaleX(d) + info.padding.left; /* 변환값에 + 왼쪽 간격만큼 리턴*/
    })
    .attr('y', 0) /* y는 0*/
    .attr('dy', -10) /* y축 -10*/
    .attr('text-anchor', 'middle') /* 문자는 중간정렬*/
    .text(function(d){ /*문자 정의*/
      return d; /* 변환된 범위값 넘김*/
    })
}

/* 바 만들기*/
function barInit(data){
  var barHeight = (info.height - info.padding.top) / data.length - info.padding.bar; /*바높이 지정*/
  chart.selectAll('rect') /* 컨테이너 rect 찾음*/
    .data(data) /* 데이터 넘김*/
    .enter().append('rect') /* rect를 어펜드함*/
    .attr('x', info.padding.left) /* 왼쪽 간격을 x값에 주고*/
    .attr('y', function(d, i){ /* y값을 지정함*/
      return i * ((info.height - info.padding.top) / data.length); /* 패딩값이 빠진 높이에 나누기 데이터의 랭쓰만큼*/
    })
    .attr('width', 0) /* 너비는 0*/
    .attr('height', barHeight) /* 바의 높이를 지정*/
    .on('mouseover', function(d, i){ /* 마우스 오버 이벤트 핸들러를 줌*/
      console.log('name : '+ data[i].name + ' money : '+ data[i].money); /* 콘솔테스트*/
    })
    .on('mouseout', function(d){ /* 아웃 이벤트를 줌*/
      console.log('exit'); /* 콘솔 테스트*/
    });
}

/*바 생성효과*/
function barDuration(data){
  chart.selectAll('rect') /* 차트 컨테이너에 정의된 rect를 찾음*/
    .transition().duration(info.duration) /* 그 rect에 듀라데이션 효과를 줌*/
    .attr('width', function(d){ /* width 지정*/
      return scaleX(d.money); /* 변환된 값의 money*/
    })
    .each('end', function(d, i){ /* 듀라데이션을 언제까지 줄지 정함*/
      if(i === data.length - 1) displayMoney(data);
      /*포이치가 도는 i(인덱스)가 데이터의 랭쓰 -1 까지 디스플레이머니 함수 호출함*/
    });
}

/* 바 우측 안쪽 돈 표시*/
function displayMoney(data){
  chart.selectAll('g') /* 차트 컨테이너에 정의된 그룹 태그를 찾음*/
    .data(data) /* 데이터를 넘기고*/
    .enter().append('text') /* 텍스트를 어펜드함*/
    .attr('x', function (d) { /* x값 지정*/
      return scaleX(d.money) + info.padding.left; /* 왼쪽 간격값이 입혀진 변환된 money값*/
    })
    .attr('y', function (d, i) { /*y값 지정*/
      return i * ((info.height - info.padding.top) / data.length) + (info.height / data.length / 2);
      /* i 인덱스값에 간격이 빠진 높이값을 곱한 후 데이터 랭쓰를 나눈 값과 높이값과 데이터랭쓰를 나누고 2를 더 나눈값과 더함
         즉 패딩간격이 빠진 높이 값에 바의 높이를 나눈 실 중앙 크기에 정렬하기 위함*/
    })
    .attr('dx', -5) /* y축 -5 조정함*/
    .attr('text-anchor', 'end') /* 문자는 끝에 정렬*/
    .attr('fill', 'white') /* 문자 색상 지정*/
    .text(function (d) { /* 문자 정의*/
      return d.money; /* 배열내 money란 원소를 넘김*/
    });
}

/* 바 좌측 이름 표시*/
function lineXnameText(data){
  chart.selectAll('g') /* 그룹태그를 찾음*/
    .data(data) /* 데이터 정렬*/
    .enter().append('text') /* 좌측에 입힐 텍스트를 어펜드함*/
    .attr('x', info.padding.left) /* 패딩 간격만큼 줌*/
    .attr('y', function (d, i) { /* y값지정*/
      return i * ((info.height - info.padding.top) / data.length) + (info.height / data.length / 2);
      /* i 인덱스값에 간격이 빠진 높이값을 곱한 후 데이터 랭쓰를 나눈 값과 높이값과 데이터랭쓰를 나누고 2를 더 나눈값과 더함
         즉 패딩간격이 빠진 높이 값에 바의 높이를 나눈 실 중앙 크기에 정렬하기 위함*/
    })
    .attr('dx', -5) /* y축 -5 조정함*/
    .attr('text-anchor', 'end') /* 문자는 끝에 정렬*/
    .text(function (d) { /* 문자 정의*/
      return d.name; /* 배열 내 name란 원소를 넘김*/
    });
}

 /* 차트 우측 상단에 표시함*/
function chartTitleInfo(){
  chart.append('text') /* 텍스트 어펜드함*/
    .text('유저 소지금액 현황') /* 문자 정의*/
    .attr('x', info.width-30) /* x값을 너비값에서 30 제외한 값으로 지정*/
    .attr('y', -50) /* y값 지정*/
    .attr('text-anchor', 'end') /* 문자는 끝에 정렬*/
    .attr('font-size', '1rem') /* 문자 사이즈 1rem으로 줌*/
    .attr('fill', 'black'); /* 문자 색상 지정*/
}