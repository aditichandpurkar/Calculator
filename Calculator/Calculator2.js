const display = document.getElementById("display");

	function appendToDisplay(input){
		display.value += input; 
	}
	function clearDisplay(){
		display.value = "";
	}
	function calculate(){
		try{
			display.value  = eval(display.value);// method evaluates or executes an argument.

		}
		catch(error){
			display.value ="Error";
		}
	}