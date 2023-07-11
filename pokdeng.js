const prompt = require("prompt-sync")({sigint:true});
//--------------------------------------------------------------------------------------
let type = ['clubs', 'diamonds', 'hearts', 'spades'];
let number = [0,'Ace',2,3,4,5,6,7,8,9,10,'Jack','Queen','King'];

let stop = false;
let netWorth = 0;
let sumDeal = 0;
let sumPlayer = 0;

function checkVal(idx) {
    if (idx == 10 || idx == 11 || idx == 12 || idx == 13){
        return 0;
    }else {
        return idx;
    }
}

function genCard() {
    let pile = '';
    while (pile.length < 16){
        x = Math.floor(Math.random()*type.length);
        y = Math.floor(Math.random()*(14 - 1) + 1);
        if (!pile.includes(x.toString()+'-'+y.toString())){
            pile += x.toString()+'-'+y.toString()+'/';
        }
    }
    let tmp = pile.split("/");
    let answer = [];
    let m = '';
    for (let i = 0; i != 4;i++){
        m = tmp[i].split('-');
        answer.push(parseInt(m[0]));
        answer.push(parseInt(m[1]));
    }
    return answer;
}

while (!stop){
    console.log('> Please put your bet ');
    let bet = parseInt(prompt('> '));
    let [a,b,c,d,e,f,g,h] = genCard(); // abcd dealer, efgh player
    
    console.log('> You got', type[e]+'-'+number[f], type[g]+'-'+number[h]);
    console.log('> The dealer got', type[a]+'-'+number[b], type[c]+'-'+number[d]);

    sumDeal = (checkVal(b)+checkVal(d))%10;
    sumPlayer = (checkVal(f)+checkVal(h))%10;

    if (sumPlayer > sumDeal){
        console.log("> You won!!!, received", bet, 'chips');
        netWorth += bet;
    }else if (sumPlayer == sumDeal){
        console.log("> Tied!!!, lost nothing");
    }else{
        console.log("> You lost!!!, lost", bet, 'chips');
        netWorth -= bet;
    }
    console.log('> Wanna play more (Yes/No)?');
    ans = prompt('> ');
    if(ans == 'No' || ans == 'no'){
        stop = true
    }
    console.log('networth,', netWorth);
}
console.log('> You got total', netWorth, 'chips');