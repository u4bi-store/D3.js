/* svg-element_based_on_data.js*/

var circleRadii = [40,20,10];

var svgContainer = d3.select("body").append("svg")
  .attr("width", 200)
  .attr("height", 200);

var circles = svgContainer.selectAll("circle")
  .data(circleRadii)
  .enter()
  .append("circle");

var circleAttributes = circles
  .attr("cx", 50)
  .attr("cy", 50)
  .attr("r", setupRadius) /* 원의 반지름 정의*/
   .style("fill", setupColor); /* 데이터별 컬러주입*/

function setupColor(d) {
  if(d == 40) return 'green';
  else if(d == 20) return 'purple';
  else if(d == 10) return 'red';
}

function setupRadius(d){
  return d;
}