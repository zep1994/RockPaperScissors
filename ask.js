const { askQuestions } = require('./index');

askQuestions([
    'Rock Paper or Scissors \n',
    'Rock Paper or Scissors \n'
])
    .then(answers => {
        let game = answers.join('')
        switch (game) {
            case "RockRock": 
            case "ScissorsScissors":
            case "PaperPaper": 
                console.log("TIE")
                break 
            case "RockScissors":
            case "ScissorsPaper":
            case "PaperRock":
                console.log("Player 1 Wins")
                break 
            case "RockPaper":
            case "ScissorsRock":
            case "PaperScissors":
                console.log("Player 2 Wins")
                break 
        }
    });