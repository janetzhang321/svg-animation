//globals
var svg = document.getElementById("vimage");
var circleb = document.getElementById("circle");
var dvdb = document.getElementById("dvd");
var cb = document.getElementById("clear");
var sb = document.getElementById("stop");
var rid;


//clear
var clearSVG = function () {
	while (svg.lastChild) {
		svg.removeChild(svg.lastChild);
	};

};
cb.addEventListener("click", clearSVG);

//stop
var stopIt = function () {
	window.cancelAnimationFrame(rid);
};
sb.addEventListener("click", stopIt);

//circle
var animateCircle = function () {

	var r = 0;
	//so it doesn't accelerate
	window.cancelAnimationFrame(rid);

	var grow = function () {

		console.log("grow");
		console.log("r=" + r);
		var newDot = document.createElementNS("http://www.w3.org/2000/svg", "circle");
		newDot.setAttribute("cx", svg.getAttribute("height") / 2);
		newDot.setAttribute("cy", svg.getAttribute("width") / 2);
		newDot.setAttribute("r", r);
		newDot.setAttribute("fill", "goldenrod");
		r++;
		svg.appendChild(newDot);
		if (r <= svg.getAttribute("width") / 2) {
			rid = window.requestAnimationFrame(grow);
		}
		else {
			rid = window.requestAnimationFrame(shrink);
		};

	};

	var shrink = function () {
		console.log("shrink");
		console.log("r=" + r);
		var newDot = document.createElementNS("http://www.w3.org/2000/svg", "circle");
		newDot.setAttribute("cx", svg.getAttribute("height") / 2);
		newDot.setAttribute("cy", svg.getAttribute("width") / 2);
		newDot.setAttribute("r", r);
		newDot.setAttribute("fill", "goldenrod");
		r--;
		clearSVG();
		svg.appendChild(newDot);
		if (r <= 0) {
			clearSVG();
			rid = window.requestAnimationFrame(grow);
		}
		else {
			rid = window.requestAnimationFrame(shrink);
		};

	};

	rid = window.requestAnimationFrame(grow);

};

circleb.addEventListener("click", animateCircle);

//dvd
var animateDVD = function () {
	window.cancelAnimationFrame(rid);
	
	/*
	var dvd = document.createElementNS("http://www.w3.org/2000/svg", "image");
	dvd.setAttribute("xlink:href","DVD_logo.png");
	dvd.setAttribute("x", x );
	dvd.setAttribute("y", y );
	dvd.setAttribute("width",75);
	dvd.setAttribute("height",41);
	clearSVG();
	svg.appendChild(dvd);
	*/
	x=Math.floor(Math.random() * (svg.getAttribute("width") - 150));
	y=Math.floor(Math.random() * (svg.getAttribute("height") - 75));
	dx=1;
	dy=1;

	var moveRect = function () {
		/*
		var rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
		rect.setAttribute("x", x );
		rect.setAttribute("y", y );
		rect.setAttribute("width", 100);
		rect.setAttribute("height", 50);
		//rect.setAttribute("fill", "goldenrod");
		rect.setAttribute("style", "background-img:'dvd.jpg'");
		clearSVG();
		svg.appendChild(rect);
		*/

		var dvd = document.createElementNS("http://www.w3.org/2000/svg", "image");
		dvd.setAttributeNS("http://www.w3.org/1999/xlink", "href","dvd.jpg");
		dvd.setAttribute("x", x );
		dvd.setAttribute("y", y );
		dvd.setAttribute("width",150);
		dvd.setAttribute("height",75);
		clearSVG();
		svg.appendChild(dvd);

		console.log(x,y);
		console.log(dvd);
		console.log("rid="+rid);

		if (y <= 0 || y >= svg.getAttribute("height") - dvd.getAttribute("height") ){
			console.log("CHANGE");
			dy*=-1;
			x+=dx;
			y+=dy;
			rid=window.requestAnimationFrame(moveRect);
		}
		else if (x <= 0 ||  x >= svg.getAttribute("width") - dvd.getAttribute("width") ) {
			console.log("CHANGE");
			dx*=-1;
			x+=dx;
			y+=dy;
			rid=window.requestAnimationFrame(moveRect);
		}
		else {
			x+=dx;
			y+=dy;
			rid=window.requestAnimationFrame(moveRect);
		};
		

	};
	rid = window.requestAnimationFrame(moveRect);

}
dvdb.addEventListener("click", animateDVD);