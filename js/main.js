//carusel
var isCarouselPaused = false;

$(window).on("load resize", function () {
  if (document.documentElement.clientWidth < 480) {
    if (!isCarouselPaused) {
      $("#myCarousel").carousel("pause");
      isCarouselPaused = true;
    }
  } else {
    if (isCarouselPaused) {
      $("#myCarousel").carousel("cycle");
      isCarouselPaused = false;
    }
  }
});

//saidbar
$(window).scroll(function() {
  var sb_m = 10; /* отступ сверху и снизу */
  var mb = 190; /* высота подвала с запасом */
  var st = $(window).scrollTop();
  var sb = $(".sticky-block");
  var sbi = $(".sticky-block .inner");
  var sb_ot = sb.offset().top;
  var sbi_ot = sbi.offset().top;
  var sb_h = sb.height();

  if(sb_h + $(document).scrollTop() + sb_m + mb < $(document).height()) {
      if(st > sb_ot) {
          var h = Math.round(st - sb_ot) + sb_m;
          sb.css({"paddingTop" : h});
      }
      else {
          sb.css({"paddingTop" : 0});
      }
  }
});

$(window).scroll(function() {
  var sb_m = 10; /* отступ сверху и снизу */
  var mb = 190; /* высота подвала с запасом */
  var st = $(window).scrollTop();
  var sb = $(".sticky-block1");
  var sbi = $(".sticky-block1 .inner1");
  var sb_ot = sb.offset().top;
  var sbi_ot = sbi.offset().top;
  var sb_h = sb.height();

  if(sb_h + $(document).scrollTop() + sb_m + mb < $(document).height()) {
      if(st > sb_ot) {
          var h = Math.round(st - sb_ot) + sb_m;
          sb.css({"paddingTop" : h});
      }
      else {
          sb.css({"paddingTop" : 0});
      }
  }
}); 
//img fullpage
$(document).ready(function(){
  $(".image").click(function(){
    var img =$(this);
    var src = img.attr('src');
    $("body").append("<div class='popup'>" + 
    "<div class='popup-bg'></div>" + 
    "<img src='"+src+"' class='popup-img' />" +
    "</div>");
    $(".popup").fadeIn(200);
    $(".popup-bg").click(function(){
      $(".popup").fadeOut(200);
      setTimeout(function(){
        $(".popup").remove();
      },200);
    });
  });
});
//button
$(document).ready(function() {
  var list = $(".content .blog-post-1");
  var numToShow = 4; //сколько показывать элементов
  var button = $(".btn1");
  var numInList = list.length;
  list.hide();
  if (numInList > numToShow) {
    button.show();
  }
  list.slice(0, numToShow).show();
  button.click(function() {
    var showing = list.filter(':visible').length;
    list.slice(showing - 1, showing + numToShow).fadeIn();
    var nowShowing = list.filter(':visible').length;
    if (nowShowing >= numInList) {
      button.hide();
    }
  });
});
