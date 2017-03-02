//globals
var svg = document.getElementById("vimage");
var circleb = document.getElementById("circle");
var cb = document.getElementById("clear");
var sb = document.getElementById("stop");
var rid;


//clear
var clearSVG = function(){
	while (svg.lastChild) {
		svg.removeChild(svg.lastChild);
	};

};
cb.addEventListener("click",clearSVG);

//stop
var stopIt = function() {
	window.cancelAnimationFrame(rid);
};
sb.addEventListener("click",stopIt);

//circle
var animateCircle = function () {
	console.log("hey");
	
	var r = 0;
	//so it doesn't accelerate
	window.cancelAnimationFrame(rid);
	
	var grow = function(){
	
		console.log("grow");
		console.log(r);
		var newDot = document.createElementNS( "http://www.w3.org/2000/svg", "circle");
		newDot.setAttribute("cx",svg.getAttribute("height"));
		newDot.setAttribute("cy",svg.getAttribute("width"));
		newDot.setAttribute("r",r);
		r++;
		newDot.setAttribute("fill","goldenrod");
		if (r<=svg.getAttribute("width")/2) {
			rid=window.requestAnimationFrame( grow );
		}
		else { rid=window.requestAnimationFrame( shrink ); };

	};

	var shrink = function(){
		var newDot = document.createElementNS( "http://www.w3.org/2000/svg", "circle");
		newDot.setAttribute("cx",svg.getAttribute("height"));
		newDot.setAttribute("cy",svg.getAttribute("width"));
		newDot.setAttribute("r",r);
		newDot.setAttribute("fill","goldenrod");
		r--;
		if (r<=0) {
			rid=window.requestAnimationFrame( grow );
		}
		else { rid=window.requestAnimationFrame( shrink ); };
	
	};

	rid=window.requestAnimationFrame( grow );

};

circleb.addEventListener("click", animateCircle);
