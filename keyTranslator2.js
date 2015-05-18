console.log("linked");

// created variables for input box and for <p> output box
var inputBox = document.querySelector("#input");
var outputBox = document.querySelector("#output");

// translator function will check if any of the icons can be used
var translator = function (event) {
	// get user typed text from input box
	var valueInput = inputBox.value;
	// make this text into an array
	var stringInput = valueInput.split(" ");
	//create a new array
	var newArray = [];

	// loop to check all items in the array 
	for (var i = 0; i < stringInput.length; i++){

		// checking if they use command, if so push icon into new array. used //gi bc it's a global variable and it doesn't matter if it's caps or not
		if (stringInput[i] === "command" ) {
			newArray.push(stringInput[i].replace(/command/gi, "⌘"));
		} 

		else if (stringInput[i] === "tab" ) {
			newArray.push(stringInput[i].replace(/tab/gi, "⇥"));
		} 

		else if (stringInput[i] === "return") {
			newArray.push(stringInput[i].replace(/return/gi, "⏎"));
		} 

		else if (stringInput[i] === "option") {
			newArray.push(stringInput[i].replace(/option/gi, "⌥")); 
		}

		else if (stringInput[i] === "control") {
			newArray.push(stringInput[i].replace(/control/gi, "⌃"));
		}

		else if (stringInput[i] === "esc") {
			newArray.push(stringInput[i].replace(/esc/gi, "⎋"));
		}

		else if (stringInput[i] === "left" ) {
			newArray.push(stringInput[i].replace(/left/gi, "←"));
		}

		else if (stringInput[i] === "down" ) {
			newArray.push(stringInput[i].replace(/down/gi, "↓"));
		}

		else if (stringInput[i] === "right" ) {
			newArray.push(stringInput[i].replace(/right/gi, "→"));
		}

		else if ( stringInput[i] === "up") {
			newArray.push(stringInput[i].replace(/up/gi, "↑"));
		}

		else if (stringInput[i] === "shift") {
			newArray.push(stringInput[i].replace(/shift/gi, "⇧"));
		}

		else if (stringInput[i] === "eject" ) {
			newArray.push(stringInput[i].replace(/eject/gi, "⏏"));
		}

		else if (stringInput[i] === "caps" ) {
			newArray.push(stringInput[i].replace(/caps/gi, "⇪")) ;
		}

		// else if (event.which === 13 ) {
		// 	newArray.push("⏎");
		// 	console.log(stringInput)
		// } 

		// else if (event.which === 18) {
		// 	newArray.push("⌥"); 
		// 	console.log(stringInput + "1")
		// }

		// else if (event.which === 17) {
		// 	newArray.push("⌃");
		// }

		// else if (event.which === 27 ) {
		// 	newArray.push("⎋");
		// }

		// else if (event.which === 37 ) {
		// 	newArray.push("←");
		// }

		// else if (event.which === 40 ) {
		// 	newArray.push("↓");
		// }

		// else if (event.which === 39 ) {
		// 	newArray.push("→");
		// }

		// else if ( event.which === 38) {
		// 	newArray.push("↑");
		// }

		// else if (event.which === 16 ) {
		// 	newArray.push("⇧");
		// }

		// give us back the same array if it doesn't match any of the values above
		else {
			newArray.push(stringInput[i]);
		}
		
	}

	// joining the new array so that it gives me a string back
	var textOutput = newArray.join(" ")

	// showing string ins outputbox <p>
	outputBox.textContent = textOutput
}

// making this run when people press keyup!
inputBox.addEventListener("keyup", translator)






