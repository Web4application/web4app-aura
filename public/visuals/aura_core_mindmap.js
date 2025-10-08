import * as d3 from "https://cdn.jsdelivr.net/npm/d3@7/+esm";

const nodes = [
  {id:"AURA Core", fx:600, fy:400},
  {id:"Data Layer"}, {id:"AI Layer"}, {id:"Simulation"}, {id:"Insight Layer"}, {id:"Integration"}
];

const links = [
  {source:"AURA Core", target:"Data Layer"},
  {source:"AURA Core", target:"AI Layer"},
  {source:"AURA Core", target:"Simulation"},
  {source:"AURA Core", target:"Insight Layer"},
  {source:"AURA Core", target:"Integration"}
];

const container = d3.select("#mindmap-container");
const width = container.node().clientWidth;
const height = container.node().clientHeight;

const svg = container.append("svg")
  .attr("width", width)
  .attr("height", height);

const simulation = d3.forceSimulation(nodes)
  .force("link", d3.forceLink(links).id(d=>d.id).distance(200))
  .force("charge", d3.forceManyBody().strength(-500))
  .force("center", d3.forceCenter(width/2, height/2));

const link = svg.selectAll(".link")
  .data(links)
  .enter().append("line")
  .attr("class","link")
  .attr("stroke","#4e2fdd")
  .attr("stroke-width",2);

const node = svg.selectAll(".node")
  .data(nodes)
  .enter().append("g")
  .attr("class","node");

node.append("circle")
  .attr("r", d => d.id === "AURA Core" ? 60 : 30)
  .attr("fill","#7d4aff")
  .attr("stroke","#4e2fdd")
  .attr("stroke-width",2)
  .on("mouseover", function(){ d3.select(this).attr("fill","#c16eff") })
  .on("mouseout", function(){ d3.select(this).attr("fill","#7d4aff") });

node.append("text")
  .text(d => d.id)
  .attr("dy",5)
  .attr("text-anchor","middle")
  .attr("fill","white")
  .style("pointer-events","none");

simulation.on("tick", () => {
  link
    .attr("x1", d=>d.source.x)
    .attr("y1", d=>d.source.y)
    .attr("x2", d=>d.target.x)
    .attr("y2", d=>d.target.y);
  
  node.attr("transform", d=>"translate("+d.x+","+d.y+")");
});
