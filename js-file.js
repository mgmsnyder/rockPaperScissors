function computerPlay() {
	let randChoice = Math.floor(Math.random() * 3) + 1;
	if (randChoice == 1) return "rock";
	else if (randChoice == 2) return "paper";
	else if (randChoice == 3) return "scissors";
	else return "rock";
	// console.log(randChoice);
}
computerPlay();
function playRound(playerSelection, computerSelection) {
	if (playerSelection.toLowerCase() === "rock") {
		if (computerSelection === "rock") return ["tie", "You tie! Rock does not beat rock!"];
		else if (computerSelection === "paper")
			return ["lose", "You lose! Paper covered your rock!"];
		else return ["win", "You win! Rock smashes scissors!"];
	} else if (playerSelection.toLowerCase() === "paper") {
		if (computerSelection === "rock") return ["win", "You win! Paper covered rock!"];
		else if (computerSelection === "paper")
			return ["tie", "You tie! Paper does not beat paper!"];
		else return ["lose", "You lose! Scissors cut paper to shreds!"];
	} else if (playerSelection.toLowerCase() === "scissors") {
		if (computerSelection === "rock") return ["lose", "You lose! Rock smashed scissors!"];
		else if (computerSelection === "paper")
			return ["win", "You win! Scissors cut paper to shreds!"];
		else return ["tie", "You tie! Scissors does not beat scissors!"];
	} else return ["", "You did not play the game."];
}
// const playerSelection = "rock";
// const computerSelection = computerPlay();
// console.log(playRound(playerSelection, computerSelection));

const btnR = document.querySelector("#button-rock");
const btnP = document.querySelector("#button-paper");
const btnS = document.querySelector("#button-scissors");
btnR.addEventListener("click", () => console.log(playRound("rock", computerPlay())));
btnP.addEventListener("click", () => console.log(playRound("paper", computerPlay())));
btnS.addEventListener("click", () => console.log(playRound("scissors", computerPlay())));

//Selector play
// const container = document.querySelector("#container");

// const content = document.createElement("div");
// content.classList.add("content");
// content.textContent = "This is the glorious text-content!";

// container.appendChild(content);

// const para = document.createElement("p");
// para.textContent = "Hey I'm red!";
// para.style.color = "red";
// container.appendChild(para);

// const bluey = document.createElement("h3");
// bluey.textContent = "I'm a blue h3";
// bluey.style.color = "blue";
// container.appendChild(bluey);

// const divey = document.createElement("div");
// divey.style.borderColor = "black";
// divey.style.backgroundColor = "pink";
// container.appendChild(divey);

// const header1 = document.createElement("h1");
// divey.appendChild(header1);
// header1.textContent = "I'm in a div";
// const para2 = document.createElement("p");
// divey.appendChild(para2);
// para2.textContent = "ME TOO!";

// More selector play
// let output = document.querySelector(".output");
// output.innerHTML = "";
// const para = document.createElement("p");
// para.textContent = "Hello?";
// output.appendChild(para);

// for (let i = 10; i > -1; i--) {
// 	const para = document.createElement("p");
// 	if (i > 0 && i < 10) {
// 		para.textContent = `${i}`;
// 	} else if (i == 10) {
// 		para.textContent = `Countdown ${i}`;
// 	} else {
// 		para.textContent = `Blast off!`;
// 	}
// 	output.appendChild(para);
// }

// for (let i = 0; i < people.length; i++) {
// 	if (people[i] === "Phil" || people[i] === "Lola") refused.textContent += people[i];
// 	else admitted.textContent += people[i];
// }
