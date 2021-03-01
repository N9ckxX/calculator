let bridesName = prompt('Enter your Brides Name?', "Panda");
alert(`Your Brides : ${bridesName}!`);
let startBid = prompt('Enter Starting Bid', 500);
alert(`Starting Bid : ${startBid} !`);

function clickButton() {
    let arr = new Array();
    let total = `${startBid}`;    

    let edu = document.getElementById("Edu").value;
    arr.push(edu);

    let familynet = document.getElementById("familyNet").value;
    arr.push(familynet);

    let mastery1 = document.getElementById("mastery1").checked;
    if (mastery1) {
        arr.push(document.getElementById("mastery1").value);
    }

    let mastery2 = document.getElementById("mastery2").checked;
    if (mastery2) {
        arr.push(document.getElementById("mastery2").value);
    }

    let mastery3 = document.getElementById("mastery3").checked;
    if (mastery3) {
        arr.push(document.getElementById("mastery3").value);
    }

    let mastery4 = document.getElementById("mastery4").checked;
    if (mastery4) {
        arr.push(document.getElementById("mastery4").value);
    }

    let x18years = document.getElementById("x18years").checked;
    if (x18years) {
        arr.push(document.getElementById("x18years").value);
    }

    let x24years = document.getElementById("x24years").checked;
    if (x24years) {
        arr.push(document.getElementById("x24years").value);
    }

    let x28 = document.getElementById("x28").checked;
    if (x28) {
        arr.push(document.getElementById("x28").value);
    }

    let var1 = document.getElementById("var1").checked;
    if (var1) {
        arr.push(document.getElementById("var1").value);
    }

    let var2 = document.getElementById("var2").checked;
    if (var2) {
        arr.push(document.getElementById("var2").value);
    }

    let var3 = document.getElementById("var3").checked;
    if (var3) {
        arr.push(document.getElementById("var3").value);
    }
    arr.forEach(function(i) {
        i = parseFloat(i);
        console.log(i);
        if (i < 5 && i > 0) {
            total *= i;
        }
        else{
            total+=i;
        }
    });
    alert(` You need for ${bridesName} : ${total}$`);
}