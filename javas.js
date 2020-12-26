
var myBtn = document.getElementById("ajout-bt");
val=0;
myBtn.onclick = function ajouter() {
console.log (val++);
}
var myBtn2 = document.getElementById("minus-bt");
val="";
myBtn2.onclick = function () {
if(val>0){
console.log(val--)
}
}