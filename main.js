tomb=[1,2,3,4]

function btn1(){
    document.getElementById("kiiras").innerHTML = tomb[0];

}
function btn2(){
    document.getElementById("kiiras").innerHTML = tomb[1];
}
function btn3(){
    document.getElementById("kiiras").innerHTML = tomb[2];
}
function btn4(){
        var txt=document.getElementById("inp").value;
        tomb.push(txt)
        document.getElementById("kiiras").innerHTML = tomb;
}
function btn5(){
    var hosz = tomb.length
    document.getElementById("kiiras").innerHTML =  "A tömb " +hosz+ " elemet tartalmaz";
}
function btn6(){
    var txt=document.getElementById("inp2").value;
        tomb.splice(txt,1);
        document.getElementById("kiiras").innerHTML = tomb;
}




