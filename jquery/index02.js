$(document).ready(function () {

    $("#lista-alumnos").prepend("<li>Manuel</li>");
    $("#lista-alumnos").append("<li>María</li>");

    $("li").on("click", function () {
        $(this).remove();
    });
});