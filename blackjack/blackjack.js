let firstcard,secondcard;
let sum=0;

let cards=[];
let player={
    name:"sneha",
    chips:145
};

let isalive=true,hasblackjack=false,message="";

let messageEl=document.getElementById("message-el");
let sumEl=document.getElementById("sum");
let cardsEl=document.getElementById("cards");
let playerEl=document.getElementById("player-el");



playerEl.textContent=player.name+" : $"+player.chips;


  
function getrandomcard()
{
    let number=Math.floor(Math.random()*13)+1 ;
    if(number===1)
    {
        return 11;
    }
    else if(number>10)
    {
        return 10;
    }
    else{
        return number;
    }
}

function startgame()
{
    firstcard=getrandomcard();
    secondcard=getrandomcard(); 
    sum=firstcard+secondcard;
    cards.push(firstcard);cards.push(secondcard);

    isalive=true;
    rendergame();
}

function rendergame()
{
    cardsEl.textContent="cards: "
    for(let i=0;i<cards.length;i++)
    {
        cardsEl.textContent+=cards[i]+" ";
    }

    sumEl.textContent="sum: "+sum;

    if(sum<=20)
    {

        message="wanna continue?";
    }
    else if(sum===21)
    {
        hasblackjack=true;
        message="won";
    }
    else{
        isalive=false;
        message="bye bitch";
    }

    console.log(message);
    console.log(isalive);
    messageEl.textContent=message;
}

function newcard()
{
    if(isalive===true && hasblackjack===false)
    {
        console.log("new card");
    let card=getrandomcard();
    cards.push(card);
    console.log(cards);
    sum+=card;
    rendergame();

    }
    else{
        messageEl.textContent="you have alredy won/lost the game now go take a shit bitch";
    }

}
