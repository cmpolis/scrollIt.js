(function($) {

  var defaults = {
    upKey: 38,
    downKey: 40,
    easing: 'linear',
    scrollTime: 600,
    activeClass: 'active',
    onPageChange: null
  };

  $.scrollIt = function(options) {
    var settings = $.extend(defaults, options);
    var active = 0;
    var lastIndex = $('[data-scroll-index]:last').attr('data-scroll-index');

    var navigate = function(ndx) {
      if(ndx < 0 || ndx > lastIndex)
        return;

      var targetTop = $('[data-scroll-index=' + ndx + ']').offset().top;
      $('html,body').animate({
        scrollTop: targetTop,
        easing: settings.easing
      }, settings.scrollTime);
    };

    var updateActive = function(ndx) {
      if(settings.onPageChange && ndx && (active != ndx))
        settings.onPageChange(ndx);
      active = ndx;
      $('[data-scroll-nav]').removeClass(settings.activeClass);
      $('[data-scroll-nav=' + ndx + ']').addClass(settings.activeClass);
    };

    var watchActive = function() {
      var winTop = $(window).scrollTop();
      var visible = $('[data-scroll-index]').filter(function(ndx, div) {
        return winTop >= $(div).offset().top &&
               winTop < $(div).offset().top + $(div).outerHeight()
      });
      var newActive = visible.first().attr('data-scroll-index');
      updateActive(newActive);
    };
    $(window).on('scroll',watchActive).on('scroll');

    $(window).on('keydown', function(evt) {
      var key = evt.which;
      if(key == settings.upKey && active > 0) {
        navigate(parseInt(active) - 1);
        return false;
      } else if(key == settings.downKey && active < lastIndex) {
        navigate(parseInt(active) + 1);
        return false;
      }
      return true;
    });

     $('body').on('click',function(evt) {
      var target = $(evt.target).attr('data-scroll-nav') || 
                   $(evt.target).attr('data-scroll-goto');
      navigate(target);
    },'[data-scroll-nav], [data-scroll-goto]');
  };
}(jQuery));
