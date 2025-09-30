const colors = ["red", "blue", "green", "purple", "orange", "pink"];
let cards = [];
let selectedCards = [];
let score = 0;
let timeLeft = 30;
let gameInterval = null;
let isProcessing = false; //// Prevents clicking additional cards while checking if two cards match (acts as a lock)

//DOM element
const startBtn = document.getElementById("startbtn");
const gameContainer = document.getElementById("game-container");
const scoreElement = document.getElementById("score");
const timerElement = document.getElementById("timer");

const shuffle = (array) => {
	const result = [...array];
	//  It takes an array as an argument
	for (let i = result.length - 1; i > 0; i--) {
		//the loop
		const j = Math.floor(Math.random() * (i + 1)); //'j' is a random index within the array.
		[result[i], result[j]] = [result[j], result[i]]; //swap the position i  and j without requiring a temporary variable.
	}
	return result;
};

const generateCards = () => {
	gameContainer.innerHTML = "";
	cards.forEach((color) => {
		const card = document.createElement("div"); //represents a card in the game
		card.classList.add("card"); //It adds a class 'card' to the newly created 'div'
		card.dataset.color = color;
		card.textContent = "?"; //the color of the card is hidden until it's clicked by the player
		// card.innerHTML = '<i class="fa-regular fa-circle-question"></i>'; //the icon
		gameContainer.appendChild(card); //adds each card element to the game interface within the designated container
	});
};

// Handle card clicks
const handleCardClick = (event) => {
	if (isProcessing) return;

	const card = event.target; // retrieves the element that triggered the event, and assigns it to the 'card' variable.
	if (!card.classList.contains("card") || card.classList.contains("matched")) {
		return;
	}
	card.textContent = card.dataset.color;
	card.style.backgroundColor = card.dataset.color;
	card.classList.add("flipped");
	selectedCards.push(card);

	if (selectedCards.length === 2) {
		isProcessing = true;
		setTimeout(checkMatch, 500);
	}
};

const checkMatch = () => {
	const [card1, card2] = selectedCards; //array destructuring

	if (card1.dataset.color === card2.dataset.color) {
		//checks if the color value 'card1' stored matches the color value of 'card2'
		[card1, card2].forEach((card) => {
			card.classList.add("matched");
			card.classList.remove("flipped");
		});

		score += 2; //Increases the 'score' by 2 points
		scoreElement.textContent = `Score: ${score}`; //display the updated score

		// Check if all cards are matched
		const allMatched = document.querySelectorAll(".card.matched").length === cards.length;
		if (allMatched) {
			setTimeout(() => {
				clearInterval(gameInterval);
				alert(`Congratulations! You win!\nFinal score: ${score}\nRemaining time: ${timeLeft}s`);
				resetStartButton("Play Again");
			}, 500);
		}
	} else {
		// If the colors don't match,  it resets the text content of both cards
		[card1, card2].forEach((card) => {
			card.textContent = "?";
			card.style.backgroundColor = "#ddd";
			card.classList.remove("flipped");
		});
	}
	selectedCards = []; //It clears the 'selectedCards' array to reset it for the next set of card comparison
	isProcessing = false;
};

// Start new game
const startGame = () => {
	// Reset game state
	clearInterval(gameInterval);
	score = 0;
	timeLeft = 30;
	selectedCards = [];
	isProcessing = false;

	// Update UI
	startBtn.disabled = true;
	startBtn.textContent = "Game in Progress...";
	scoreElement.textContent = `Score: ${score}`;

	cards = shuffle(colors.concat(colors));
	generateCards();

	gameContainer.addEventListener("click", handleCardClick);
	startGameTimer();
};

// Game timer
const startGameTimer = () => {
	timerElement.textContent = `Time Left: ${timeLeft}`;
	gameInterval = setInterval(() => {
		timeLeft--;
		timerElement.textContent = `Time Left: ${timeLeft}`;

		if (timeLeft <= 0) {
			clearInterval(gameInterval);
			alert("Game Over!");
			resetStartButton("Start Game");
		}
	}, 1000);
};

// Reset start button
const resetStartButton = (text) => {
	startBtn.disabled = false;
	startBtn.textContent = text;
};

// Init
startBtn.addEventListener("click", startGame);
