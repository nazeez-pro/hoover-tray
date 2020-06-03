# Tray.io Sales Engineer Assignment

Source Code for the assignment is contained in a single file called: hoover.js

To run:

* download the hoover.js file and input.txt file to a folder on your local computer
* from your node.js terminal navigate to the folder containing the above
* run the following command from your terminal: node hoover.js
* results of the application will be outputted to the terminal
* optional: if you would like to test the application with another input file inlcuded in this project you can update line 36 in the hoover.js file with the filename to be tested by replacing <-filename-> in the line: var finput = fs.readFileSync(<-filename->).toString().split("\n");

The additional txt files are test files to be used as input for the above program. Details on each file below:

* input.txt - original input provided from the assignment
* input-no-dirt.txt - no dirt patches are found in the room
* input-wall.txt - the hoover directions lead the hoover into a wall
* input-wall-option.txt - the hoover directions lead the hoover into a wall but a turn can get it out. Though assignment text states that hoover should skid in place. 
