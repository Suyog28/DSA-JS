//Indirect Recursion in javascript


const money =100;
let totalBuy = 0;

function buyItem(x){
   if(x>0){

    buymore(x)
   } else {
    console.log("I dont have enough money",totalBuy)
   }
  
}

function buymore(x){
   totalBuy++
    buyItem(x-20)
}

buyItem(money);