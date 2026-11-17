$(function () {
    $("#consume").click(function () {
        var serviceUrl = "http://www.randyconnolly.com/funwebdev/services/travel/cities.php";
        var isLocalOrSecure = window.location.hostname === "127.0.0.1" ||
            window.location.hostname === "localhost" || window.location.protocol === "https:";
        var url = isLocalOrSecure ? "data/cities.json" : serviceUrl;
        $("#results").html("<ul></ul>");

        $.get(url, function (data, status) {
            if (status === "success") {
                $.each(data, function (index, value) {
                    var li = $("<li/>").html(value.name);
                    li.appendTo("div#results ul");
                });
            }
        });
    });
});
