// const readline = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout
// })

// let ans1 = readline.question(`Rock, Paper or Scissors \n`, (ans) => {
//     console.log(ans)
//     readline.close()
// })

const readline = require('readline');

const AskQuestion = (rl, question) => {
    return new Promise(resolve => {
        rl.stdoutMuted = true;
        rl.question(question, (answer) => {
            resolve(answer);
        });
    });
}

const Ask = function(questions) {
    return new Promise(async resolve => {
        let rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });

        let results = [];
        for(let i=0;i < questions.length;i++) {
            const result = await AskQuestion(rl, questions[i]);
            results.push(result);
        }
        rl.close();
        resolve(results);
    })
}

module.exports = {
    askQuestions: Ask 
}