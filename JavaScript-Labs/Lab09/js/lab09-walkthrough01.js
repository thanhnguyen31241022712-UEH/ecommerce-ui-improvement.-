var msg = document.getElementById("msgArea");
document.getElementById("pageTitle").innerHTML = "Even newer title";

msg.value = "My class is " + msg.getAttribute("class");

var elem = document.getElementsByTagName("textarea");
elem[0].value = "selected by tag name";

elem = document.getElementsByTagName("span");
for (var i = 0; i < elem.length; i++) {
    msg.value += "\n" + elem[i].innerText;
}

msg.value = "";
var counts = document.getElementsByClassName("count-number");
for (i = 0; i < counts.length; i++) {
    msg.value += "\n" + counts[i].innerText;
}

var ps = document.querySelectorAll("#first p");
for (i = 0; i < ps.length; i++) {
    msg.value += ps[i].innerHTML + "\n";
}

msg.setAttribute("class", "hidden");
document.getElementById("features").style.backgroundColor = "green";
