
$('.hero-link a').fancybox({
    caption : function( instance, item ) {}
  });
var a = 0;
$(window).scroll(function () {
    var oTop = $(".multi-card").offset().top - window.innerHeight;
    if (a == 0 && $(window).scrollTop() > oTop) {
        $(".counter").each(function () {
            var $this = $(this),
                countTo = $this.attr("data-number");
            $({
                countNum: $this.text()
            }).animate(
                {
                    countNum: countTo
                },
                {
                    duration: 850,
                    easing: "swing",
                    step: function () {
                        $this.text(
                            Math.ceil(this.countNum).toLocaleString("en")
                        );
                    },
                    complete: function () {
                        $this.text(
                            Math.ceil(this.countNum).toLocaleString("en")
                        );
                    }
                }
            );
        });
        a = 1;
    }
});
$(document).ready(function(){
    $('ul.tabs li').click(function(){
        var tab_id = $(this).attr('data-tab');
        $('ul.tabs li').removeClass('current');
        $('.tabber-content').removeClass('current');
        $(this).addClass('current');
        $("#"+tab_id).addClass('current');
    })
    $(window).on('load resize orientationchange', function() {
        if ($(window).width() > 767) {
        }
        else{
          $(function() {
            var list = $('.tabs');
            var link = $('.mobile-view');
            link.click(function(e) {
              e.preventDefault();
              list.slideDown(200);
            });
            list.find('li').click(function() {
              var text = $(this).html();
              link.html(text);
              list.slideUp(200);
            });
          });
        }
      });
})



$('.slider-block').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false
  });

