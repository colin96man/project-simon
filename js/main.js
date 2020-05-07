//Constants:
    //buttons:
        //game start button & the four clickable game buttons
        //each triangle will be assigned a number
    //board:
        //grid square with four colored triangles, not lighting up
    //rounds:
        //there will be 10 rounds

//State variable:    
    //game over prompt with how many correct button pushes the player had
    //round number
    //simonsPattern is an array that will hold which buttons that are selected at random that the layer needs to copy
    //playersPattern is an array that will hold which buttons the player chooses

//Event listeners:
    //create event listener for clicking the triangle divs, which will "light up" the traingle
    //create event listener for clicking the reset button which will call init
    //create event listener for clicking the game start button, calling the function to start the first round

//Initialize:
    //board
    //simonsPattern array is an empty array
    //playersPattern array is an empty array
    //the round will be reset to round 0
    //game over logic will not be showing (null)
    //win logic will not be showing (null)
    //render

//Render:
    //call renderBoard
    //check for game over
    //if game over display game over and correct amount of button pushes
    //after round 10 check for win

//renderBoard:
    //if game has not been started or a round is not running then styling should not change
    //for each triangle chosen change the styling to show it "lighting up"

//create a function that will randomly select triangles using Math

//create function for the asynchronus timing of how long a traingle will be "lit up"

//create functions for the differnet rounds:
    //each round will increment up by one on how many times we choose a random triangle 
    //render

//creat function for the player click event 
