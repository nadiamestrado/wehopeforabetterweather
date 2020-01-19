// REFRESH ON TOP //

$(window).on('load', function(){
    $(window).scrollTop(0);
    $('html, body').animate({scrollTop: 0}, 1);
});

//BACKTOTOP BUTTON //

$(document).ready(function() {
  
  var back = $('#back');

  $(window).scroll(function() {
    if ($(window).scrollTop() > 2300) {
      back.addClass('show');
    } else {
      back.removeClass('show');
    }
  });

  back.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop: 0}, 1200);
  });

});


// EXPAND DIVS //

$(document).ready(function() {

$(window).scroll(function() {

  if ($(window).scrollTop() > 1280) { $('#div').slideDown(1600);
  }
  if ($(window).scrollTop() < 1280) { $('#div').slideUp(1600);
  }
});
});

// SLINDING MENU //

// CACHE SELECTORS //
var lastId,
 topMenu = $("#linkss"),
 topMenuHeight = topMenu.outerHeight()+1,
 // All list items
 menuItems = topMenu.find("a"),
 // Anchors corresponding to menu items
 scrollItems = menuItems.map(function(){
   var item = $($(this).attr("href"));
    if (item.length) { return item; }
 });

// MENU ITEMS //
// SCROLL ANNIMATION //
menuItems.click(function(e){
  var href = $(this).attr("href"),
      offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
  $('html, body').stop().animate({ 
      scrollTop: offsetTop
  }, 1200);
e.preventDefault();
});

// SCROLL //
$(window).scroll(function(){
   // SCROLL POSITION
   var fromTop = $(this).scrollTop()+topMenuHeight;
   
   // ID OF CURRENT SCROLL //
   var cur = scrollItems.map(function(){
     if ($(this).offset().top < fromTop)
       return this;
   });
   // CURRENT ELEMENT ID //
   cur = cur[cur.length-1];
   var id = cur && cur.length ? cur[0].id : "";
   
   if (lastId !== id) {
       lastId = id;
       // SET/REMOVE ACTIVE CLASS //
       menuItems
         .parent().removeClass("active")
         .end().filter("[href=#"+id+"]").parent().addClass("active");
   }                   
});