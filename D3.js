var width = 1024,
height = 600;
 
var svg = d3.select("body").append("svg")
.attr("width", width)
.attr("height", height);
 
 
var mercator = d3.geo.mercator()
    .center([139.0,37.6])
    .translate([width/2, height/2])
    .scale(12000);
 
var geopath = d3.geo.path()
.projection(mercator);
 
d3.json("kagoshima.json", function(error, kago) {
     
    var geoN = topojson.feature(kago, kago.objects.kagoshima);
     
    svg.selectAll("path")
        .data(geoN.features) 
      .enter().append("path")
        .attr("class", function(d) { return d.id; })
        .attr("d", geopath) 
        .attr("fill", "#333" );
});
