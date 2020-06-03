var coord = [];
var room_dim = [];
var hoover_coord = [];
var dirt_coord = [];
var clean_count = 0;

//Function to set coordinates in an array

function storeCoordinate(xVal, yVal, array) {
    array.push({x: xVal, y: yVal});
}

//Function to get last element in array

Array.prototype.last = function(){
	return this[this.length - 1];
}

//Function to check if hoover hits wall

function hitwall(xCoor, yCoor){
	if(xCoor == 0 || yCoor == 0){
		return true;
	}
	else if(xCoor == room_dim[0].x || yCoor == room_dim[0].y){
		return true;
	}
	else{
		return false;
	}
}

//Read input file into an array 

var fs = require('fs');
var finput = fs.readFileSync('input.txt').toString().split("\n");

//Split each read line into individual coordinates

for(i = 0; i < finput.length - 1; i++)
{
	var z = finput[i].split(" ");
	storeCoordinate(z[0], z[1], coord);
}

//Assign Room Dimension and Hoover's Initial Coordinates

storeCoordinate(parseInt(coord[0].x), parseInt(coord[0].y), room_dim);
storeCoordinate(parseInt(coord[1].x), parseInt(coord[1].y), hoover_coord);

//Record coordinates of Dirt Patches

for (i = 2; i < coord.length; i++) 
{
    storeCoordinate(parseInt(coord[i].x), parseInt(coord[i].y), dirt_coord);
} 

//Record Hoover's movement coordintaes

var drive = finput.last();

for(i = 0; i < drive.length; i++)
{
	var direction = drive.charAt(i);

	if(direction == "N"){
		storeCoordinate(hoover_coord[i].x, hoover_coord[i].y + 1, hoover_coord);
	}
	else if(direction == "S"){
		storeCoordinate(hoover_coord[i].x, hoover_coord[i].y - 1, hoover_coord);
	}
	else if(direction == "E"){
		storeCoordinate(hoover_coord[i].x + 1, hoover_coord[i].y, hoover_coord);
	}
	else if(direction == "W"){
		storeCoordinate(hoover_coord[i].x  - 1, hoover_coord[i].y, hoover_coord);
	}

	if(hitwall(hoover_coord.last().x, hoover_coord.last().y)){
		break;
	}

}

//Count patches of dirt cleaned

for (i = 0; i < dirt_coord.length; i++)
{
	var dirt_x = dirt_coord[i].x;
	var dirt_y = dirt_coord[i].y;

	for (z = 0; z < hoover_coord.length; z++)
	{
		var hoover_x = hoover_coord[z].x;
		var hoover_y = hoover_coord[z].y;

		if (hoover_x == dirt_x && hoover_y == dirt_y){
			clean_count++;
			break;
		}

	}
}

//Console output of results

console.log("Final position of Hoover after processing all commands: " + hoover_coord.last().x + " " + hoover_coord.last().y);
console.log("Number of dirt patches cleaned: " + clean_count);

/*
//Function to easily output coordinates

Array.prototype.displayItems = function()
{
	for (i = 0; i < this.length; i++)
	{
		console.log(this[i].x + " " + this[i].y)
	}
}
*/
