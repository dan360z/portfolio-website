$(document).ready(function() {

   $(".nav1").hide();
   $(".nav2").hide();
   $("#home").hide();
   $("#about").hide();
   $("#projects").hide();
   $("#contact").hide();

   $(".nav-button").on("click", function() {
      if ($(window).width() > 992) {
         $(".nav1").animate({ height: 'toggle' });
         $(".nav2").animate({ height: 'toggle' });
      }
      else {
         $(".nav1").animate({ width: 'toggle' });
         $(".nav2").animate({ width: 'toggle' });
      }
   });
   
   $(".nav-button").on("click", function() {
      setTimeout(function() {
      $('#home').animate({ width: 'toggle', });
      }, 150);
      setTimeout(function() {
      $('#about').animate({ width: 'toggle' });
      }, 200);
      setTimeout(function() {
      $('#projects').animate({ width: 'toggle' });
      }, 250);
      setTimeout(function() {
      $('#contact').animate({ width: 'toggle' });
      }, 300);
   });

});
