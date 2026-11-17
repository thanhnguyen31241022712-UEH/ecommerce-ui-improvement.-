function outputList(items, activeItem) {
    var html = "";
    for (var i = 0; i < items.length; i++) {
        var activeClass = items[i] === activeItem ? " class='list-group-item active'" : " class='list-group-item'";
        var content = items[i] === activeItem ? items[i] : "<a href='#'>" + items[i] + "</a>";
        html += "<li" + activeClass + ">" + content + "</li>";
    }
    return html;
}

function outputPost(post) {
    var html = "<div class='row'>";
    html += "<div class='col-md-2'><a href='post.php?id=" + post.id + "'><img src='images/travel/" + post.thumb + "' alt='" + post.title + "' class='img-thumbnail'></a></div>";
    html += "<div class='col-md-10'><h2>" + post.title + "</h2>";
    html += "<div class='details'>Posted by " + post.user + "<span class='pull-right'>" + post.postdate + "</span></div>";
    html += "<p class='excerpt'>" + post.excerpt + "</p>";
    html += "<p><a href='post.php?id=" + post.id + "' class='btn btn-primary btn-sm'>Read more</a></p></div></div>";
    return html;
}

function outputPosts(items) {
    var html = "";
    for (var i = 0; i < items.length; i++) {
        html += outputPost(items[i]);
        if (i < items.length - 1) {
            html += "<hr>";
        }
    }
    return html;
}

function outputPagination(totalPages, currentPage) {
    var html = "<ul class='pagination'><li><a href='#'>&laquo;</a></li>";
    for (var i = 1; i <= totalPages; i++) {
        html += "<li" + (i === currentPage ? " class='active'" : "") + "><a href='#'>" + i + "</a></li>";
    }
    return html + "<li><a href='#'>&raquo;</a></li></ul>";
}
