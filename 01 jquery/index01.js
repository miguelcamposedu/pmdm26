$(document).ready(function () {
    $("#page-title").html("Hola Mundo");
    $("#page-title").addClass("text-warning");
    $("p").addClass("text-danger");
    $(".info").addClass("text-danger");

    // Eventos
    $(document).on("click", ".btn-edit-user", function () {
        $(this).parent().parent().toggleClass("row-selected");
    });
});


