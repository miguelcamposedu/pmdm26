$(document).ready(function () {
    var elementCount = 1;

    // Mostrar modal
    $(document).on("click", "#btn-add-element", function () {
        $("#elementModal").modal('show');
    });

    // Add email
    $(document).on("click", "#btn-element-email", function () {
        var newElement = `<div class="col-12" id="${elementCount}"><label class="form-label">Email address</label>
            <input type = "email" class="form-control" placeholder = "name@example.com" ></div>`;
        $("#form-elements").append(newElement);
        $("#form-side-list").append(getElement("email"));
        $("#elementModal").modal('hide');
    });

    // Add checkbox
    $(document).on("click", "#btn-element-checkbox", function () {
        var newElement = `<div class="form-check" id="${elementCount}">
  <input class="form-check-input" type="checkbox" value="">
  <label class="form-check-label">
    Default checkbox
  </label>
</div>`;
        $("#form-elements").append(newElement);
        $("#form-side-list").append(getElement("checkbox"));
        $("#elementModal").modal('hide');
    });

    // Add name
    $(document).on("click", "#btn-element-name", function () {
        var newElement = `<div class="col-12" id="${elementCount}"><label class="form-label">Name</label>
            <input type = "text" class="form-control" placeholder = "name" ></div>`;
        $("#form-elements").append(newElement);
        $("#form-side-list").append(getElement("name"));
        $("#elementModal").modal('hide');
    });

    // Delete item
    $(document).on("click", ".delete-item", function () {
        var id = $(this).attr("elementid");
        $("#" + id).remove();
        $(this).closest(".col-12").remove();
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
                        <span class="badge text-bg-primary delete-item" elementid="${elementCount++}"><i class="fa-solid fa-align-left"></i> Name</span> </div>`;
        }
    }
});