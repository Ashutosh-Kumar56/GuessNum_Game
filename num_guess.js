let gNum = Math.floor(Math.random() * 100)
console.log(gNum)
let temp = 1
function getValue(){
    do {
    let inputField = document.getElementById('num').value
    console.log(inputField)
    if (inputField < gNum) {
        document.getElementById('msg').innerHTML = "Please enter greater number!!"
        temp = temp + 1
    }
    else if(inputField > gNum){
        document.getElementById('msg').innerHTML = "Please enter smaller number!!"
        temp = temp + 1
    }
    else if(inputField == gNum){
        document.getElementById('msg').innerHTML = "Congrats you did it in " + temp + " Chance(s)"
        document.getElementById("msg").style.color = "green";
        document.getElementById("val").style.margin = '5px';
        document.getElementById('msg2').innerHTML = "Please press Start again"
        document.getElementById("refresh").style.display = "block";
        document.getElementById("Try").style.display = "none";
    }
} while (inputField != gNum);
}

