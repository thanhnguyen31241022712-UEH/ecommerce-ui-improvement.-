var stories = document.getElementById("stories");

for (var i = 0; i < stories.childNodes.length; i++) {
    var child = stories.childNodes[i];
    console.log("child " + i + " =" + child + " nodeType=" + child.nodeType);

    // Text nodes contain only indentation; element nodes receive the highlight.
    if (child.nodeType !== 3) {
        child.style.backgroundColor = "#fcf8e3";
    }
}
