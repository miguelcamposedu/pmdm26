$(document).ready(function () {
    // Init
    // Ocultar botón de añadir
    $("#btn-add-table").hide();

    // Evento click eliminar tabla
    $("#btn-delete-table").on("click", function () {
        // Ocultar tabla
        $("#table-dynamic").hide();
        // Ocultar botón de eliminar
        $(this).hide();
        // Mostrar botón añadir
        $("#btn-add-table").show();
        // Eliminar las filas del tbody de la tabla
        $("#table-dynamic tbody tr").not("#tr-add-row").remove();
    });

    // Evento click añadir tabla
    $("#btn-add-table").on("click", function () {
        $("#table-dynamic").show();
        $(this).hide();
        $("#btn-delete-table").show();
    });

    // Evento click añadir fila
    $("#btn-add-row").on("click", function () {
        $("#table-dynamic").append('<tr>< th scope = "row" > 3</th ><td>Fila</td><td>nueva</td><td>@</td><td>@</td></tr > ');
    });

    // Evento click añadir fila
    $(".btn-delete-row").on("click", function () {
        $(this).closest("tr").remove();
    });

    // Añadir columna
    $("#btn-add-col").on("click", function () {
        $("#table-dynamic thead tr").append("<td>Nueva col</td>");
        var trArray = $("#table-dynamic tbody tr").not("#tr-add-row");
        trArray.each(function (index) {
            $(this).append("<td>Nueva celda</td>");
        });
        var currentColspan = parseInt($("#td-add-row").attr("colspan"));
        $("#td-add-row").attr("colspan", currentColspan + 1);
    });
});