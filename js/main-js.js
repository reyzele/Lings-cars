// Hamburger overlay-menu open
$(document).ready(function (e) {
  $(".hamburger-menu-link").click(function (overlay) {
    overlay.preventDefault();
    $(".overlay-menu").css("display", "flex");
  })

// Hamburger overlay-menu close
  $(".close-link_overlay-menu").click(function (close) {
    close.preventDefault();
    $(".overlay-menu").css("display", "none");
  })
});


