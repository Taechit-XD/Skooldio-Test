const prompt = require("prompt-sync")({sigint:true});
//--------------------------------------------------------------------------------------
let type = ['clubs', 'diamonds', 'hearts', 'spades'];
let number = [0,'Ace',2,3,4,5,6,7,8,9,10,'Jack','Queen','King'];

let stop = false;
let bet = 0;
let netWorth = 0;
let ans = 'Yes';
let a = '';
let b = 0;
let c = '';
let d = 0;
let e = '';
let f = 0;
let g = '';
let h = 0;
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
        console.log(55);
        if (!pile.includes(x.toString()+'-'+y.toString())){
            pile += x.toString()+'-'+y.toString()+'/';
        }
    }
    let tmp = pile.split("/");
    console.log(tmp)
    let answer = [];
    let m = '';
    let n = '';
    for (let i = 0; i != 4;i++){
        m,n = tmp[i].split('-');
        console.log(m,n);
        answer.push(m);
        answer.push(n);
    }
    // console.log(answer);
}
genCard();
while (!stop){
    console.log('> Please put your bet ');
    bet = prompt('> ');

    //---------------------------------dealer-----
    a = Math.floor(Math.random()*type.length);
    b = Math.floor(Math.random()*(14 - 1) + 1);
    c = Math.floor(Math.random()*type.length);
    d = Math.floor(Math.random()*(14 - 1) + 1);
    while(b == d){
        d = Math.floor(Math.random()*(14 - 1) + 1);
    }
    //---------------------------------player-----
    e = Math.floor(Math.random()*type.length);
    f = Math.floor(Math.random()*(14 - 1) + 1);
    g = Math.floor(Math.random()*type.length);
    h = Math.floor(Math.random()*(14 - 1) + 1);
    while(f == h){
        h = Math.floor(Math.random()*(14 - 1) + 1);
    }
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
}
console.log('> You got total', netWorth, 'chips');