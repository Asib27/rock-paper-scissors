playerPlay = ()=>{
    return prompt("Enter rock, paper or scissors").toLowerCase();
}

computerPlay = ()=>{
    let chooseFrom = ['rock', 'paper', 'scissors'];
    let choice = Math.floor(Math.random() * 3);
    return chooseFrom[choice];
}

console.log(playerPlay())
console.log(computerPlay())