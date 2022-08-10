$('.contents-two a').fancybox({
    caption: function (instance, item) {}
});


$('.main-container-five .tabber li:first-child').addClass('active');
$('.main-container-five .tabber-right .tabber_deta').hide();
$('.main-container-five .tabber-right .tabber_deta:first-child').show();

$('.main-container-five .tabber li').click(function () {
    $('.main-container-five .tabber li').removeClass('active');
    $(this).addClass('active');
    $('.tabber_deta').hide();

    var activeTab = $(this).find('b').attr('href');
    $(activeTab).fadeIn();
    return false;
});

$('.main-container-five').addClass("load")



var a = 0;
$(window).scroll(function () {
    var oTop = $(".three-col").offset().top - window.innerHeight;
    if (a == 0 && $(window).scrollTop() > oTop) {
        $(".counter").each(function () {
            var $this = $(this),
                countTo = $this.attr("data-number");
            $({
                countNum: $this.text()
            }).animate({
                countNum: countTo
            }, {
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
            });
        });
        a = 1;
    }
});

let drpdown = function () {
    if($(window).width() < 768){
      // jquery for dropdown
      $(function() {
        var list = $('.tabber');
        var link = $('.mobile-view');
        link.click(function(e) {
          e.preventDefault();
          list.slideToggle(200);
        });
        list.find('li').click(function() {
          var text = $(this).html();
          var icon = '<i class="fa fa-chevron-down"></i>';
          link.html(text);
          list.slideToggle(200);
        });
      });
    }
  }
  $(window).resize(function() {
    if($(window).width() < 768){
      drpdown();
      location.reload()
    }
  });
  
  drpdown();
