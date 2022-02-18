const fs = require('fs');

const superHerois = require('./superHerois');

let dados = fs.readFileSync(__dirname + '/dados.txt', 'utf8');

console.log(superHerois);