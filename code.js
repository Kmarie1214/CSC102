function updatetext(){
    document.getElementById("heading").innerHTML = "Welcome to Wheel of Luck!";
}
        //create function to run our game
        function playGame(){
            //we are going to narrate what is going on in this function in the console
            console.log("playGame function was called");

            //roll a die by calling the RollChance function
            var die1 = RollChance();
            console.log("the first die roll is: " + die1)

            //roll a die by calling the RollChance function
            var die2 = RollChance();
            console.log("the second die roll is: " + die2)

            //add the dice roll together
            var sum = die1 + die2;
            console.log("the sum is: " + sum);

            //output the dice rolls to the page
            document.getElementById("die1Result").textContent = "Die 1 is: " + die1;
            document.getElementById("die2Result").textContent = "Die 2 is: " + die2;
            document.getElementById("sumResult").textContent = "Die 1 is: " + sum;


            //game logic
            if (sum == 3 || sum == 9){
                //if you get a 3 or 9 you lose
                document.getElementById("gameResult").textContent = "You suck"
            }
            else if(die1 == die2 && die1 % 2 == 0){
                //if the numbers are the same, you are him, you win
                document.getElementById("gameResult").textContent = "You Win"
            }
            else{
                document.getElementById("gameResult").textContent = "You Tied (wow, you got lucky!)"
            }

        }

        //create a function to generate a die roll - a random number between 1 and 6
        function RollChance(){
            //generate a random number between 1 and 6
            var die = Math.random() * 6;
            //return the random number to the code that called this function
            return Math.ceil(die); //return a whole number
        }