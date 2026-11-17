
var daysOfWeek = new Array("Mon", "Tues", "Wed", "Thur", "Fri");
daysOfWeek.push("Sat");
daysOfWeek.unshift("Sun");

document.write("<table border='1'>");
document.write("<tr>");
for (var i = 0; i < daysOfWeek.length; i++) {
    var day = daysOfWeek[i].length < 4 ? daysOfWeek[i] : "<em>" + daysOfWeek[i] + "</em>";
    document.write("<th>" + day + "</th>");
}
document.write("</tr>");

var date = 1;
for (var row = 0; row < 5; row++) {
    document.write("<tr>");
    for (var column = 0; column < daysOfWeek.length; column++) {
        if (date <= 30) {
            document.write("<td>" + date + "</td>");
            date++;
        } else {
            document.write("<td></td>");
        }
    }
    document.write("</tr>");
}
document.write("</table>");

