
window.onload = function(){
    var blink = document.getElementsByClassName('colon');
    if (blink.innerHTML == ":"){
        console.log("was called");
        blink.innerHTML = "a";
    }else{
        console.log("called");
        blink.innerHTML=":";
    }
}
setInterval(update, 1000);
function update(){
    var a = new Date();
    var ho = document.getElementById('hours');
    ho.innerHTML = String(a.getHours()).padStart(2,'0');

    var mi = document.getElementById('mins');
    mi.innerHTML = String(a.getMinutes()).padStart(2,'0');

    var se = document.getElementById('secs');
    se.innerHTML = String(a.getSeconds()).padStart(2,'0');
}

