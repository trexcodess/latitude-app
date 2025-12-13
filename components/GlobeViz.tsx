import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

interface GlobeVizProps {
  isDarkMode?: boolean;
}

const GlobeViz: React.FC<GlobeVizProps> = ({ isDarkMode = true }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const width = containerRef.current.clientWidth;
    const height = containerRef.current.clientHeight || 500;
    
    // Theme Colors
    const primaryColor = isDarkMode ? '#4ADEDE' : '#0080C6'; // Teal vs Blue
    const wireframeColor = isDarkMode ? '#001a1a' : '#d0e8f2'; // Deep Teal vs Light Sky
    const glowColor = isDarkMode ? '#4ADEDE' : '#0080C6';

    // Clear previous
    d3.select(containerRef.current).selectAll("*").remove();

    const svg = d3.select(containerRef.current)
      .append("svg")
      .attr("width", width)
      .attr("height", height);

    const projection = d3.geoOrthographic()
      .scale(height / 2.5)
      .translate([width / 2, height / 2])
      .clipAngle(90);

    const path = d3.geoPath().projection(projection);

    const graticule = d3.geoGraticule();

    // Glow effect defs
    const defs = svg.append("defs");
    const filter = defs.append("filter")
      .attr("id", "glow");
    filter.append("feGaussianBlur")
      .attr("stdDeviation", "2.5")
      .attr("result", "coloredBlur");
    const feMerge = filter.append("feMerge");
    feMerge.append("feMergeNode").attr("in", "coloredBlur");
    feMerge.append("feMergeNode").attr("in", "SourceGraphic");

    // Draw Globe Background (Wireframe)
    svg.append("path")
      .datum(graticule)
      .attr("class", "graticule")
      .attr("d", path)
      .style("fill", "none")
      .style("stroke", wireframeColor) 
      .style("stroke-width", "1px");

    // Draw Active Latitudes
    const activeLines = svg.append("g");
    
    // Simulate latitude lines
    const latitudes = d3.range(-90, 90, 10).map(lat => {
        return {
            type: "LineString",
            coordinates: d3.range(-180, 181, 5).map(lng => [lng, lat])
        };
    });

    activeLines.selectAll("path")
        .data(latitudes)
        .enter()
        .append("path")
        // @ts-ignore
        .attr("d", path)
        .style("fill", "none")
        .style("stroke", primaryColor)
        .style("stroke-width", "0.5px")
        .style("opacity", 0.6)
        .style("filter", "url(#glow)");

    // Animation
    let rotate = [0, 0];
    const velocity = [0.2, 0]; // Rotation speed

    const timer = d3.timer(() => {
      rotate[0] += velocity[0];
      rotate[1] += velocity[1];
      projection.rotate([rotate[0], -15, 0]);
      
      svg.selectAll(".graticule").attr("d", path);
      // @ts-ignore
      activeLines.selectAll("path").attr("d", path);
    });

    return () => {
      timer.stop();
    };
  }, [isDarkMode]);

  return (
    <div ref={containerRef} className="w-full h-96 md:h-[600px] flex items-center justify-center relative">
       <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
           <h2 className={`text-4xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-b z-10 opacity-80 mix-blend-overlay ${isDarkMode ? 'from-white to-gray-800' : 'from-black to-gray-400'}`}>
               LATITUDE
           </h2>
       </div>
    </div>
  );
};

export default GlobeViz;