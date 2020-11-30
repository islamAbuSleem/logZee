$(document).ready(function() {
  $(".comment--slider").slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1
  });
  $(".customer-say .comment--slider .slick-arrow").text("");
  $(".customer-say .comment--slider .slick-prev").addClass(
    "fa fa-chevron-left"
  );
  $(".customer-say .comment--slider .slick-next").addClass(
    "fa fa-chevron-right"
  );
});

$(".dropdown-menu").addClass("invisible"); //FIRST TIME INVISIBLE

// ADD SLIDEDOWN ANIMATION TO DROPDOWN-MENU
$(".dropdown").on("show.bs.dropdown", function(e) {
  $(".dropdown-menu").removeClass("invisible");
  $(this)
    .find(".dropdown-menu")
    .first()
    .stop(true, true)
    .slideDown();
});

// ADD SLIDEUP ANIMATION TO DROPDOWN-MENU
$(".dropdown").on("hide.bs.dropdown", function(e) {
  $(this)
    .find(".dropdown-menu")
    .first()
    .stop(true, true)
    .slideUp();
});

// comment slider
