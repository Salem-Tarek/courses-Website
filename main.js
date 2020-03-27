$(document).ready(function(){

// Start NavBar Menu
  $(window).resize(function(){
    if ($(window).innerWidth() > 500  && $(window).innerWidth() <= 991){

      $(".navbar-menu div").first().removeClass()

      $(".navbar-menu div").first().addClass("container-fluid")

      }else{

        $(".navbar-menu div").first().removeClass()

        $(".navbar-menu div").first().addClass("container")

      }

  })


// NavBar DropDown Menu
  $(".dropdown").on("mouseenter",function(){
    $(".dropdown-menu").slideDown()
  })
  $(".dropdown").on("mouseleave",function(){
    $(".dropdown-menu").delay(200).slideUp()
  })


// Show More Button
  $(".show-more").on("click",function(){
    if($(".show-more").hasClass("less-content")){
      $(".animate-more-courses").slideUp(400)
      $(".more-courses").css("display","none")
      $(this).text("Show More").removeClass("less-content")
    }else{
      $(this).text("Show Less").addClass("less-content")
      $(".more-courses").css("display","grid").delay(200)
      $(".animate-more-courses").slideDown(500)
    }
  })


// SideNav
  $(".main-list > li").each(function(){
    $("<i class='fa fa-chevron-right'></i>").prependTo($(this))
    $(this).on("click",function(){
      $(this).next().slideToggle(500).siblings('ul').slideUp(200)
      $(".search-bar input").val($(this).text())
      $($(this).data("courses")).fadeIn(100)
      $(".courses-page").find(".cards").not($(this).data("courses")).fadeOut(200)
    })
  })

});
