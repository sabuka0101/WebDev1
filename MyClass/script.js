const num = prompt("Enter score between 1 to 100");
const score = num / 10;

if(score > 9){
    alert("you passed successfuly");
}else if(score > 5){
    alert("you passed");
}else{
    alert("you failed");
}