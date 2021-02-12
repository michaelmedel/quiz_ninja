const quiz = [
    ["What is Superman's real name?", "Clark Kent"],
    ["What is Wonder Woman's real name?", "Diana PRince"],
    ["What is Batman's real name?", "Bruce Wayne"]
];

// initialize score
let score = 0;

// loop through the questions
for (const [question, answer] of quiz) {
    
    const response = prompt(question);

    if(response === answer) {
        alert('Correct');
        score++;
    } else {
        alert(`Wrong! The correct answer was ${answer}`);
    }
}

// report the player's score
alert(`Game over, you scored ${score} 
point${score !== 1 ? 's' : ''}`);