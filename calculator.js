document.getElementById("calculate").onclick = function () {
    let arr = [];
    let total = 500;

    let graduate = document.getElementById("Graduate").value;
    arr.push(graduate);

    let netWorth = document.getElementById("NetWorth").value;
    arr.push(netWorth);
    let skill1 = document.getElementById("skill1").checked;
    if (skill1) {
        arr.push(document.getElementById("skill1").value);
    }

    let skill2 = document.getElementById("skill2").checked;
    if (skill2) {
        arr.push(document.getElementById("skill2").value);
    }

    let skill3 = document.getElementById("skill3").checked;
    if (skill3) {
        arr.push(document.getElementById("skill3").value);
    }

    let skill4 = document.getElementById("skill4").checked;
    if (skill4) {
        arr.push(document.getElementById("skill4").value);
    }

    let between18 = document.getElementById("between18").checked;
    if (between18) {
        arr.push(document.getElementById("between18").value);
    }

    let between24 = document.getElementById("between24").checked;
    if (between24) {
        arr.push(document.getElementById("between24").value);
    }

    let moreThan28 = document.getElementById("28+").checked;
    if (moreThan28) {
        arr.push(document.getElementById("28+").value);
    }

    let option1 = document.getElementById("option1").checked;
    if (option1) {
        arr.push(document.getElementById("option1").value);
    }

    let option2 = document.getElementById("option2").checked;
    if (option2) {
        arr.push(document.getElementById("option2").value);
    }

    let option3 = document.getElementById("option3").checked;
    if (option3) {
        arr.push(document.getElementById("option3").value);
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
    alert(total);
}