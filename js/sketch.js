var grid = 16;		// Default # of squares

$(document).ready(function() {
	createGrid(grid);

});

var newColor = function() {
	var color = prompt("Please enter a new color or hex code! Ex: black or #XXXXXX");
	$(".square").mouseenter(function() {		//Set color of square when mouse enters
	$(this).css({"background-color":color});
	});
	
}

var clearGrid = function() {
	$(".square").css({
		"background-color":"E8E8E8"});		// Set all squares back to default color
};

var newGrid = function() {
	$(".square").remove();	// Remove existing squares

	var grid = prompt("Please enter a new grid size! 1 - 100");		//Takes user prompt and creates new grid based on input
	createGrid(grid);
}

var createGrid = function(grid, color) {
	for(var i = 0; i < grid * grid; i++) {
		$("#container").append('<div class="square"></div>'); // Create square divs
	};

	var width = ($("#container").width()) / grid - 2; 		//Set width and height of boxes taking into account margins
	$(".square").css({"width":width, "height":width});

	var color = "red";	// Default color of mouseenter on square
	$(".square").mouseenter(function() {		//Set color of square when mouse enters
	$(this).css({"background-color":color});
	});

};
