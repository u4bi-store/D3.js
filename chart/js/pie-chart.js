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
  color: d3.scale.category20c()
};

var vis = d3.select('#chart')
  .append("svg:svg")
  .data([data])
  .attr("width", info.width)
  .attr("height", info.height)
  .append("svg:g")
  .attr("transform", "translate(" + info.radius + "," + info.radius + ")");

var pie = d3.layout.pie().value(function(d){return d.value;});

var arc = d3.svg.arc().outerRadius(info.radius);

var arcs = vis.selectAll("g.slice")
  .data(pie)
  .enter().append("svg:g");

var arcsPie = arcs.append("svg:path")
  .attr("fill", function(d, i){ return info.color(i); })
  .attr("d", function (d) {return arc(d); })
  .attr("class", "pie");

var arcsText = arcs.append("svg:text")
  .attr("transform", function(d){
    d.innerRadius = 0; d.outerRadius = info.radius;
    return "translate(" + arc.centroid(d) + ")";
  })
  .attr("text-anchor", "middle")
  .text(function(d, i){ return data[i].name; }
);


arcsPie.on('mouseover', function(d, i){
  console.log('name : '+ data[i].name + 'value : '+ data[i].value);

});

arcsPie.on('mouseout', function(d){
  console.log('exit');
});