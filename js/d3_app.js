// d3.js는 제이쿼리 사용법과 매우 유사함.
/*
    body 요소 선택후
        div요소 추가한 뒤 새로운 문장이라는 문자열 삽입함

        * 제이쿼리와 유사하게 D3.js는 돔(DOM)을 제어할 수 있고
            함수 체이닝을 사용함.

        가장 많이 사용하는 그래프 중 하나인 막대 그래프를 그려보기

            1. 그래프를 그리기 위해서 먼저 데이터가 있어야함.
            2. 보통은 서버에 데이터를 표현함.
            3. 직곽적인 수업 위해 변수에 데이터를 할당하여 진행할거임.



*/

var data = [
            20,
            40,
            60,
            80,
            100
        ];
        /* 이 데이터를 돔으로 만들기 위해서
            D3.js는
                    selectAll() data() ennter() 함수를 제공함.

        */

        d3.select("body").selectAll("div")
            .data(data)
            .enter()
            .append("div")

            /*
                1. d3.select("body") 로 d3_study.html을 호출함.
                        [!] 그러나 html에는 body만 선언함.
                            div는 어디에도 선언하지 않았음.

                                * 미선언된 문서 요소를 선택하는 거시 불편하게 여겨질 수도 있지만.
                                    D3.js 에서는 이렇게 사용함.
                                        [ 이것을 가상의 문서요소 라고 하겠음. ]

                2. 가상의 문서 요소에 우리가 정의한 데이터를
                    바인딩하는 것이 data(data) 함수임.

                3. enter() 함수는 data 배열의 각 요소를 순회하면서
                    가상의 문서요소 div 10개를 만들 것임.

                4. 마지막으로 append("div") 함수를 통해 가상의 문서요소를
                    body 문서 하위로 추가함.
            */

        .style("height", function(d){ //높이 설정
            return d + "px";
        })
        .style("width", function(d){ // 너비 설정
            return d + "px";
        })
        .attr("class", "bar-chart");
