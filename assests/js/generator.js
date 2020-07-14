var genButton = document.querySelector("#generate");
var textPart = document.querySelector("#textpart");
var imagePart = document.querySelector("#imagepart");
var num = 0;
var num1 = 0;
var catImg = document.querySelector("#img");
var color = [];
var sum = 0;
var sumcheck = 0;
var time = 0;
var firstDiv = document.querySelector(".firstdiv");




genButton.addEventListener("click", function() {
    while (time > 25) {
        color.splice(0, color.length);
        document.querySelector("#firstdiv").style.display = "inline-block";
        for (var i = 1; i < 26; i++) {
            var name1 = "firstdiv" + i;
            var namemain1 = '#' + name1;
            document.querySelector(namemain1).style.display = "none";
        }
        document.querySelector("#startagain").style.display = "none";
    }
    var sumcheck = 0;
        while (sumcheck !== 1) {
            var num = random();
            var sum = 0;
            console.log(num);
            color.push(num);
            for (var i = 0; i < color.length; i++) {
                if (num === color[i]) {
                    sum += 1;
                }
            }
            sumcheck = sum;
        }
        time++
        document.querySelector("#startagain").style.display = "inline-block";
        var name = "firstdiv" + num;
        var namemain = '#' + name;
        console.log(namemain);
        document.querySelector(namemain).style.display = "inline-block";
        document.querySelector(".firstdiv").style.display = "none";
    
    
});

document.querySelector("#startagain").addEventListener("click", function() {
    color.splice(0, color.length);
    document.querySelector(".firstdiv").style.display = "inline-block";
    for (var i = 1; i < 26; i++) {
        var name1 = "firstdiv" + i;
        var namemain1 = '#' + name1;
        document.querySelector(namemain1).style.display = "none";
    }
    document.querySelector("#startagain").style.display = "none";
});


function random() {
    var ranNum = Math.floor((Math.random()*25)+1);
    return ranNum
};

