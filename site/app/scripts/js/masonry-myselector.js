"use-strict"
$(document).ready(function(){
  $('.grid').masonry({
    // set itemSelector so .grid-sizer is not used in layout
    itemSelector: '.grid-item',
    // use element for option
    columnWidth: '.grid-sizer',
    percentPosition: true,
    gutter: 10,
    isAnimated: true,
    animationOptions: {
      duration: 750,
      easing: 'linear',
      queue: false
    }
  });
});
