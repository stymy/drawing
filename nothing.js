"use strict"; //scoping

function fallback(param, dfault){
    return typeof param === undefined ? dfault : param
}

class Node {
    constructor (name,cx,cy){
	this.name = name;
	this.cx = cx;
	this.cy = cy;
    }
    draw(svg){
	svg.append('circle')
	    .attr('cx', this.cx)
	    .attr('cy', this.cy)
    }
};

class Edge {
    constructor (name,startNode,endNode){
	try{if(startNode instanceof Node == false) throw new Error("startNode must be an instance of Node")} catch(error){console.log(error,startNode)};

	this.name = name;
	this.startNode = startNode;
	this.endNode = endNode;
	
	this.x1 = startNode.cx;
	this.y1 = startNode.cy;
	this.x2 = endNode.cx;
	this.y2 = endNode.cy;
    }

    draw(svg){
	svg.append('line')
	    .attr('x1',this.x1)
	    .attr('y1',this.y1)
	    .attr('x2',this.x2)
	    .attr('y2',this.y2)
    }
}

class Gate extends Node {
    constructor (name, x, y, state) {
	super(name, x, y);
	this.state = fallback(state, "closed");
    }
}
