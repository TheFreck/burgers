var burgerMenu = [{
  name: "Big Burger",
  description: "It's bigger than you'll find anywhere else"
},{
  name: "Bigger Burger",
  description: "If you want something biger than the Big Burger this is it"
},{
  name: "Giganto Burger",
  description: "Here we're moving away from reasonable"
},{
  name: "Monstrosity Burger",
  description: "This is just getting disgusting now"
},{
  name: "Obscene Burger",
  description: "Now I'm getting concerned about you!"
},{
  name: "Wheelbarrow Burger",
  description: "Not sure if the wheelbarrow is to bring out your burger or if the wheelbarrow is to get you home afterward"
},{
  name: "Patty Cake Burger",
  description: "This is a burger between two pieces of angel food cake. There's probably some strawberries you could put on it if you're sick enough to order it"
},{
  name: "Button Popper Burger",
  description: "You might want to undo the button now before you dig in because by then it'll be too late"
}];

$(function(){
  $("#menuBtn").on("click",function(){
    console.log("menu button clicked");
    for(let i=0; i<burgerMenu.length; i++){
      var menuItem = $("<div>");
      var menuImg = $("<img>");
      var menuName = $("<h1>");
      var menuDescription = $("<p>");
      var burgerMenuItem = burgerMenu[i];

      menuItem.addClass("menuItem");
      menuImg.addClass("menuImg");
      menuName.addClass("menuName");
      menuDescription.addClass("menuDescription");
      menuImg.attr("src", "/assets/images/sloppyBurgers/" + i + ".jpg");
      menuImg.attr("data-name",burgerMenuItem.name);
      menuName.text(burgerMenuItem.name);
      menuDescription.text(burgerMenuItem.description);

      menuItem.append(menuImg);
      menuItem.append(menuName);
      menuItem.append(menuDescription);

      $("#menu").append(menuItem);

    }
    $("#menu").removeClass("hide");
    $("#menu").addClass("show");
  })

  var burgerOrder = "";

  $(document).on("click",".menuImg",function(event){
    event.preventDefault();
    $("#menu").removeClass("show");
    $("#menu").addClass("hide");
    console.log("this name: ",$(this).attr("data-name"));
    $("#orderName").removeClass("hide");
    $("#orderName").addClass("showOrder");
    $("#burgerOrder").text($(this).attr("data-name"));
    burgerOrder = $(this).attr("data-name");
  })

  $(".change-served").on("click", function() {
    var id = $(this).data("id");
    var newServed = $(this).attr("data-newServed");
    var newServedState = {
      served: newServed
    };

    $.ajax("/api/burgers/" + id, {
      method: "PUT",
      data: newServedState
    }).then(
      function() {
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {
    event.preventDefault();
    var newOrder = {
      name: $("#ca").val().trim(),
      burger: burgerOrder
    };
    
    $.ajax("/api/burgers", {
      method: "POST",
      data: newOrder
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
