$(function () {
    $(".animLoading").hide();

    $("#consume").click(function () {
        $(".animLoading").show();
        $("#results ul").empty();

        var serviceUrl = "http://www.randyconnolly.com/funwebdev/services/travel/cities.php";
        var isLocalOrSecure = window.location.hostname === "127.0.0.1" ||
            window.location.hostname === "localhost" || window.location.protocol === "https:";
        var url = isLocalOrSecure ? "data/cities.json" : serviceUrl;
        $.get(url)
            .done(function (data) {
                $.each(data, function (index, value) {
                    var li = $("<li/>").html(value.name);
                    li.appendTo("div#results ul");
                });
            })
            .fail(function (xhr, status, error) {
                alert("failed loading data - status=" + status + " error=" + error);
            })
            .always(function () {
                $(".animLoading").fadeOut("slow");
            });
    });
});
