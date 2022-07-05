//*  User Name Creation, allows for both condition with or without a name entered.

let userName = prompt("Please enter user name")
userName ? console.log(`Hello ${userName}`) : console.log('Hello')

if (userName === '') {
    userName = 'Hello';
} 

//* User generated question.

userQuestion = prompt("Please ask a the Magic 8 Ball a yes or no question")
console.log(`${userName}, Your question was "${userQuestion}"`);

//* Generate a random number between 0 and 7
let randomNumber = Math.floor(Math.random() * 8);

//* 

let eightBall = ['It is certain', 'It is decidedly so', 'Reply hazy try again', 'Cannot predict now', 'Do not count on it', 'My sources say no', 'Outlook not so good', 'Signs point to yes']

switch (randomNumber) {
    case 0:
        console.log(eightBall[randomNumber])
        break;
    case 1:
        console.log(eightBall[randomNumber])
        break;
    case 2:
        console.log(eightBall[randomNumber])
        break;
    case 3:
        console.log(eightBall[randomNumber])
        break;
    case 4:
        console.log(eightBall[randomNumber])
        break;
    case 5:
        console.log(eightBall[randomNumber])
        break;
    case 6:
        console.log(eightBall[randomNumber])
        break;
    default:
        console.log(eightBall[randomNumber])
        break;
}





