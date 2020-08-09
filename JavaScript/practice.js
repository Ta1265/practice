// const circle = {
// 	radius   : 1,
// 	location : {
// 		x : 1,
// 		y : 1,
// 	},
// 	draw     : function() {
// 		console.log('draw');
// 	},
// };

//Factory function
// function createCircle(radius) {
// 	return {
// 		radius : radius,
// 		draw   : function() {
// 			console.log('draw', radius);
// 		},
// 	};
// }

// let circle = createCircle(2);

//Constructor Function ( kind of like a class, but javascript doesnt have classes, notice no return keyword (automaticly returns the circle object))
function Circle(radius) {
	console.log('this', this);
	this.radius = radius;
	this.draw = function() {
		console.log('draw', radius);
	};
}

// 'new' keyword makes 'this.' reference the Circle object, without new this references the global document(global variable)
const another = new Circle(5);

another.draw();
