
let buttonplus=Array.from(document.getElementsByClassName("add"))
console.log(buttonplus);
let inputtext=Array.from(document.getElementsByClassName("input-comp"))
for(let i=0; i<buttonplus.length;i++){
    buttonplus[i].addEventListener("click",function(){
    inputtext[i].value++;
sum()
})
}
let buttonminus=Array.from(document.getElementsByClassName("minus"))
console.log(buttonminus);

for(let i=0;i<buttonminus.length;i++){
    buttonminus[i].addEventListener("click",function()
   {

    if(inputtext[i].value>0){
inputtext[i].value--;
sum()
    }

   }  )
}

function sum(){
     
    let qte=Array.from(document.querySelectorAll(".input-comp"))
    let price=Array.from(document.querySelectorAll(".price"))
    let sum=0;
    for(let i=0;i<qte.length;i++){

        sum+=qte[i].value*price[i].innerHTML;
    }
    return document.getElementById('somme-produit').innerHTML = "Le montant totale de vos achat est  : " +sum;
}


let buttonsdelete=document.getElementsByClassName("button-delete")
for (let btndelete of buttonsdelete ){

    btndelete.addEventListener("click",function(){
btndelete.parentNode.remove();
sum()
    })
}

console.log(document.getElementById('somme-produit').innerHTML)

let hearts=document.querySelectorAll(".fa-heart");
for (let heart of hearts){
heart.addEventListener("click",function(){

if(heart.style.color=="grey"){

    heart.style.color="red";
}else{

    heart.style.color="grey";
}

})


}