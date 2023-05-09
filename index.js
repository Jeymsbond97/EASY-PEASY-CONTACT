// start addlistener

function addname(){
    let fNameText = document.getElementById('Name');
    let fName = document.getElementById('fName');
    fNameText.innerHTML="🧑🏻 Name :   " + fName.value;
}
function addage(){
    let ageText = document.getElementById('textage');
    let age = document.getElementById('age');
    ageText.innerHTML = "🎉 Age :   "  + age.value;
}
function addMarried(){
    let isMarried = document.getElementById('IsMarried');
    let isMarriedText= document.getElementById('Married');
    isMarriedText.innerHTML = "💖 IsMarried :   "  + isMarried.value;
}
function myfunction(){
    let fNameText = document.getElementById('Name');
    let isMarriedText= document.getElementById('Married');
    let ageText = document.getElementById('textage');
    let message = document.getElementById('message');
    message.innerHTML = "Unsuccussful, try again..😢";
    message.style.color="red"
    fNameText.innerHTML="";
    isMarriedText.innerHTML="";
    ageText.innerHTML ="";
}
function btnsubmit(){
    let message = document.getElementById('message');
    message.innerHTML = "Succussfully done..👍";
    message.style.color= "blue";
}