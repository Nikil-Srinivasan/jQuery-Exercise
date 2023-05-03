$(document).ready(function () {
    $("button").click(function () {
        $.get("demo_test.html", function (data, status) {
            alert("Data: " + data + "\nStatus: " + status);
        });
    });
});