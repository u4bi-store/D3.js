/* first.js */

d3.select("body")
  .append("svg")
  .attr("width", 50)
  .attr("height", 50)
  .append("circle")
  .attr("cx", 25)
  .attr("cy", 25)
  .attr("r", 25)
  /* style operator*/
  .style("fill", "red");

var bodySelect = d3.select("body");

var svgSelect = bodySelect.append("svg")
  .attr("width", 50)
  .attr("height", 50);

var circleSelect = svgSelect.append("circle")
  .attr("cx", 25)
  .attr("cy", 25)
  .attr("r", 25)
  .style("fill", "green");