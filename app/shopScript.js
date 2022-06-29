$(document).ready(function(){
  $(".toggle").click(function(){
    $(".toggle").toggleClass("open_menu");
    $(".default_navigation").toggleClass("open_navigation");
    $(".not_so_free_now").toggleClass("open_navigation_blur")
  })
})
// $(document).ready(function(){
//   $('.box').hover(function(){
//     $(this).css(
//       "grid-column", "1/3"
//     );
//   })
// })
