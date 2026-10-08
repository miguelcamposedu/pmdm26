$(document).ready(function () {
    var elementCount = 1;



    // Mostrar modal
    $("#btn-add-element").on("click", function () {
        $("#elementModal").modal('show');
    });

    // Add email
    $("#btn-element-email").on("click", function () {
        var newElement = `<div class="col-12" id="${elementCount}"><label for="exampleFormControlInput1" class="form-label">Email address</label>
            <input type = "email" class="form-control" id = "exampleFormControlInput1" placeholder = "name@example.com" ></div>`;
        $("#form-elements").append(newElement);
        $("#form-side-list").append(getElement("email"));
        $("#elementModal").modal('hide');
    });

    // Add checkbox
    $("#btn-element-checkbox").on("click", function () {
        var newElement = `<div class="form-check" id="${elementCount}">
  <input class="form-check-input" type="checkbox" value="" id="checkDefault">
  <label class="form-check-label" for="checkDefault">
    Default checkbox
  </label>
</div>`;
        $("#form-elements").append(newElement);
        $("#form-side-list").append(getElement("checkbox"));
        $("#elementModal").modal('hide');
    });



    // Add name
    $("#btn-element-name").on("click", function () {
        var newElement = `<div class="col-12" id="${elementCount}"><label for="exampleFormControlInput1" class="form-label">Name</label>
            <input type = "text" class="form-control" id = "exampleFormControlInput1" placeholder = "name" ></div>`;
        $("#form-elements").append(newElement);
        $("#form-side-list").append(getElement("name"));
        $("#elementModal").modal('hide');
    });

    // Delete item
    $(".delete-item").on("click", function () {
        var id = $(this).attr("elementid");
        $("#" + id).remove();
        $(this).remove();
    });

    function getElement(type) {
        if (type == 'email') {
            return `<div class="col-12">
                        <span class="badge text-bg-primary delete-item" elementid="${elementCount++}"><i class="fa-solid fa-envelope"></i> Email</span>
                    </div>`;
        } else if (type == "checkbox") {
            return `<div class="col-12">
                        <span class="badge text-bg-primary delete-item" elementid="${elementCount++}"><i class="fa-regular fa-square-check"></i> Checkbox</span>
                    </div>`;
        } else {

            return `<div class="col-12">
                        <span class="badge text-bg-primary delete-item" elementid="${elementCount++}"><i class="fa-solid fa-align-left"></i> Name</span>`;
        }
    }
});