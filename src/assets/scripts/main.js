'use strict';

window.a = {
  //-----------------------------------------------------
  init: function() {

    if (a.utils.breakpoint() >= 2) {

      // Add the body class required for animsition
      $('body > .wrapper-page').addClass('animsition');

      $(".animsition").animsition({
        inClass               :   'fade-in',
        outClass              :   'fade-out',
        inDuration            :    1500,
        outDuration           :    800,
        linkElement           :   '.animsition-link',
        // e.g. linkElement   :   'a:not([target="_blank"]):not([href^=#])'
        loading               :    true,
        loadingParentElement  :   'body', //animsition wrapper element
        loadingClass          :   'animsition-loading',
        unSupportCss          :   [],
        //"unSupportCss" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
        //The default setting is to disable the "animsition" in a browser that does not support "animation-duration".

        overlay               :   false,

        overlayClass          :   'animsition-overlay-slide',
        overlayParentElement  :   'body'
      });
    }

    // Initiate Things On A Per Page Basis
    if ( $('.wrapper-page.project').length ) {

      this.project.stickyDescriptions()

    } else if ( $('.wrapper-page.index').length ) {

      this.index.resizeHeader()

    }

    this.utils.scrollToContent()

  },
  utils: {
    breakpoint: function () {

      // Double check that the div doesn't already exist..
      if ( $('body > .js-bp-check').length <= 0 ) {
        $('body').append('<div class="js-bp-check"></div>');
      }

      var bp = $('.js-bp-check').css('z-index');
      // console.log('breakpoint:',bp);
      return bp;

    },
    scrollToContent: function () {

      $('.js-scroll-to').on('click', function (e) {
        var target = $(this).attr('href')
        // console.log(target)
        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 500);
        return false;
      });

    },
  },
  /////////--------------------- INDEX
  index: {
    resizeHeader: function() {

      var $header = $('header');
      $header.height( $(window).height() );

      $('.wrapper-scrollable').css('margin-top', $header.height());

    },
  },
  /////////--------------------- PROJECT
  project: {
    stickyDescriptions: function () {

      $(window).load(function() {

        $("section.feature .description").stick_in_parent({
          offset_top:80,
        })
        .on('sticky_kit:bottom', function(e) {
          $(this).parent().css('position', 'static');
        })
        .on('sticky_kit:unbottom', function(e) {
          $(this).parent().css('position', 'relative');
        });

      });

    },
  },
//-----------------------------------------------------

};


$(document).ready(function () {
  console.log('Its alive!');
});

