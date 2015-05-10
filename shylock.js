// grabbing elements from the DOM
var prompt = document.querySelector("#prompt");
var log = document.querySelector("#log");


// creating counter of how much money is borrowed and paid
var counterAntonio = 0;
var counterBassanio = 0;


// creating act1
// var act1 = document.createElement('li');
// act1.textContent = "ShylockBot starts off with 10,000 ducats.";
// act1.setAttribute('class', 'shylock')
// log.appendChild(act1);

// function to check for return key & create new element
var newLi = function (event) {
    if (event.keyCode === 13) {
    	// if true, create element 
        var logEntry = document.createElement('li')
        // extract inner text of element
        logEntry.textContent = prompt.value.toLowerCase()
        // set class for later
        logEntry.setAttribute('class', 'prompted')
        // append to ul
        log.appendChild(logEntry)
        // creating scroll for ul
        // reset the value of prompt
        prompt.value = '';
        // call promptReply function
    	promptReply(logEntry);
    	log.scrollTop = 99999999999;
    }    
}
// pseudo coding is basically coding without coding - via comments for ex
// hoisting - vars get defined first, then processes take place
// function to check the entry submitted
var promptReply = function (entry) {
    console.log(entry);
    // if entry is == purse
    if (entry.textContent === "purse" ) {
        // create new li
        var promptedResponse = document.createElement('li');
        // new li will say response
        promptedResponse.innerText = "ShylockBot pulls out his purse containing " + (10000 - counterAntonio - counterBassanio )+  " ducats";
        // all responses by shylock have emote class
        promptedResponse.setAttribute('class', 'emote');
        // appending response to ul log
        log.appendChild(promptedResponse);

		// Same as above happens, with different response
    } if (entry.textContent === "loan antonio 50 ducats") {
    		entry.setAttribute("class", "loan");
        var promptedResponse = document.createElement('li');
        promptedResponse.innerText = "ShylockBot gives Antonio 50 ducats";
        promptedResponse.setAttribute('class', 'emote');
        log.appendChild(promptedResponse);
        // setting antonio's counter so we can add up how much he owes
        counterAntonio += 50;

	
		// Same as above happens, with different response
    } if (entry.textContent === "loan bassanio 25 ducats") {
        var promptedResponse = document.createElement('li');
        promptedResponse.innerText = "ShylockBot gives Bassanio 25 ducats";
        promptedResponse.setAttribute('class', 'emote');
        log.appendChild(promptedResponse);
        // setting bassanio's counter so we can add up how much he owes
        counterBassanio += 25;

      } if (entry.textContent === "ledger" ) {
        var promptedResponse = document.createElement('li');
        promptedResponse.innerText = "ShylockBot pulls out his ledger";
        promptedResponse.setAttribute('class', 'emote');
        log.appendChild(promptedResponse);

        var promptedResponse = document.createElement('li');
        promptedResponse.innerText = "Antonio Owes me " + counterAntonio + " ducats";
        promptedResponse.setAttribute('class', 'emote');
        log.appendChild(promptedResponse);

        var promptedResponse = document.createElement('li');
        promptedResponse.innerText = "Bassanio Owes me " + counterBassanio + " ducats";
        promptedResponse.setAttribute('class', 'emote');
        log.appendChild(promptedResponse);

      } if (entry.textContent === "collect 50 ducats from antonio") {
        var promptedResponse = document.createElement('li');
        promptedResponse.innerText = "Shylock opens his purse" ;
        promptedResponse.setAttribute('class', 'emote');
        log.appendChild(promptedResponse);
        counterAntonio -= 50;

      } if (entry.textContent === "collect 25 ducats from bassanio") {
        var promptedResponse = document.createElement('li');
        promptedResponse.innerText = "Shylock opens his purse";
        promptedResponse.setAttribute('class', 'emote');
        log.appendChild(promptedResponse);
        counterAntonio -= 25;


      } if (entry.textContent === "collect interest") {
        var promptedResponse = document.createElement('li');
        promptedResponse.innerText = "ShylockBot collects interest at 15%";
        promptedResponse.setAttribute('class', 'emote');
        log.appendChild(promptedResponse);

        var promptedResponse = document.createElement('li');
        promptedResponse.innerText = "Antonio now owes me " + (counterAntonio + (counterAntonio*0.15)) + " ducats";
        promptedResponse.setAttribute('class', 'emote');
        log.appendChild(promptedResponse);

        var promptedResponse = document.createElement('li');
        promptedResponse.innerText = "Bassanio Owes me " + (counterBassanio + (counterBassanio*0.15)) + " ducats";
        promptedResponse.setAttribute('class', 'emote');
        log.appendChild(promptedResponse);

      }
}


// setting up listener for keydown
prompt.addEventListener("keydown", newLi)
