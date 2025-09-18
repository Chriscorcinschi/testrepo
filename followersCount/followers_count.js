let count = 0; // Initialize count to 0

// Main Function 
function increaseCount() {
    count++; // Increment the count by 1
    displayCount(); // Display the count
    checkCountValue(); // Check count value and display messages
}

function displayCount() {
    document.getElementById('countDisplay').innerHTML=count; // Display the count in the HTML
}

// function to check the value of count and trigger specific alerts  
function checkCountValue() {
    if (count === 10) {
        alert('Your post gained 10 followers! Congratulations!');
    } else if (count === 20) {
        alert('Your post gained 20 followers! Keep it up!');
    }
}

// Main Function 
function resetCount() {
    count = 0;
    displayCount(); //reset the display count 
    checkResetValue();
}

function checkResetValue() {
    if (count === 0) {
        // delay of the popup box 
        setTimeout(() => {
            alert('The Followers count has been reset');
        }, 300)
    } 
}