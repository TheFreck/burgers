$(function() {
  $(".change-devoured").on("click", function() {
    var id = $(this).data("id");
    var newDevoured = $(this).attr("data-newDevoured");
    var newDevouredState = {
      devoured: newDevoured
    };

    $.ajax("/api/burgers/" + id, {
      method: "PUT",
      data: newDevouredState
    }).then(
      function() {
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {
    event.preventDefault();
    var newBurger = {
      name: $("#ca").val().trim()
    };
    
    $.ajax("/api/burgers", {
      method: "POST",
      data: newBurger
    }).then(
      function() {
        location.reload();
      }
    );
  });

  $(".delete-burger").on("click", function(event) {
    var id = $(this).data("id");

    $.ajax("/api/burgers/" + id, {
      type: "DELETE"
    }).then(
      function() {
        location.reload();
      }
    );
  });
});
