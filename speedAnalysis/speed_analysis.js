let testText = "sto cazzo.";
let startTime = 0; 


const startTest = () => {
// Set the test text -- element by DOM
    const inputText = document.getElementById("inputText");
    const userInput = document.getElementById("userInput");
    const output = document.getElementById("output");

    //Show text to write
    inputText.value = testText;

    // Reset user input and output
    userInput.value = "";
    userInput.readOnly = false;
    userInput.focus();
    output.innerHTML = "";

    // Start timer
    startTime = Date.now();
};

const endTest = () => {
    //finish timer
    const endTime = Date.now();

    //Retrieving items from the DOM
    const userInput = document.getElementById("userInput");
    const output = document.getElementById("output");

    // Disable user input
    userInput.readOnly = true;

    // Calculate time elapsed and words per minute (WPM)
    const timeElapsed = (endTime - startTime) / 1000; // in seconds 

    // Calculate the number of words typed
    const typedWords = userInput.value 
        .trim() //removes space at the beginning and end 
        .split(/\s+/) //transform the pharse into an array by removing the spaces in between
        .filter(Boolean).length; //removes empty string
    
    //Calculate the words for minute
    const wpm = timeElapsed > 0 //default value 
        ? Math.round((typedWords / timeElapsed) * 60) 
        : 0;
        
    //count characters including: spaces, periods, commas, etc.
    const totalLength = userInput.value.length; 

    // Display the results
    output.innerHTML = `
        <h2>Typing Test Results:</h2>
        <p>Total Length: ${totalLength}</p>
        <p>Words Typed: ${typedWords}</p>
        <p>Time Elapsed: ${timeElapsed.toFixed(2)} seconds</p>
        <p>Words Per Minute (WPM): ${wpm}</p>

    `;
};



            