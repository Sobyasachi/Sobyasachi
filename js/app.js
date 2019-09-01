$(function () {
  //$('[data-toggle="tooltip"]').tooltip()
  $('.my-tooltip').tooltip({ boundary: 'window',delay: { "show": 200, "hide": 500 }})
});
/* Functions for animated tooltips*/
(function(){
  "use strict";
  var flag=0;
  var about_string='<div class="my-text showMe">' + 'My name is Sobyasachi Chatterjee' + '</div>'+'<div class="my-text showMe-delay7">' + 'Completed High school from Methodist School Dankuni' + '</div>'+
  '<div class="my-text showMe-delay8">' + 'Currently undergoing the B.S.C degree from Ramakrishna Mission Residential College Narendrapur' + '</div>';
  $( "#menu-about" ).click(function() {
    if(flag==0){
    //console.log("gs");
    flag=1;
    $( "#menu-about" ).css({ position: "absolute",left:"20%","border-radius":"0%","background-image":"linear-gradient(135deg,black,yellow)"});

    $( "#menu-about" ).animate({
      width: "80%",
      height:"400px",
      top:"100px",
      left:"0%",
      position:"absolute"
    }, 5000 );
    $(about_string).appendTo('#menu-about');}
  });
  $("#menu-about").blur(function(){
    $("#menu-about").stop();
    $("#menu-about").css({width: "30px",top:"0px",left:"0px",	height: "30px",position:"relative",	"border-radius": "50%"});
    $("div").remove(".my-text");
    flag=0;
  });
})();
(function(){
  "use strict";
  var flag=0;
  $( "#menu-projects" ).click(function() {
    if(flag==0){
    //console.log("gs");
    flag=1;
    $( "#menu-projects" ).css({ position: "absolute",left:"40%","border-radius":"0%","background-image":"linear-gradient(135deg,black,yellow)"});

    $( "#menu-projects" ).animate({
      width: "80%",
      height:"300px",
      top:"100px",
      left:"0px",
      position:"absolute"
    }, 5000 );
    $('<div class="my-text showMe">' + 'Some Dummy Text' + '</div>').appendTo('#menu-projects');}
  });
  $("#menu-projects").blur(function(){
    $("#menu-projects").stop();
    $("#menu-projects").css({width: "30px",top:"0px",left:"0px",	height: "30px",position:"relative",	"border-radius": "50%"});
    $("div").remove(".my-text");
    flag=0;
  });
})();
(function(){
  "use strict";
  var flag=0;
  $( "#menu-certificates" ).click(function() {
    if(flag==0){
    //console.log("gs");
    flag=1;
    $( "#menu-certificates" ).css({ position: "absolute",left:"20%",left:"70%","border-radius":"0%","background-image":"linear-gradient(135deg,black,yellow)"});

    $( "#menu-certificates" ).animate({
      width: "80%",
      height:"300px",
      top:"100px",
      left:"0%",
      position:"absolute"
    }, 5000 );
    $('<div class="my-text showMe">' + 'Some Dummy Text' + '</div>').appendTo('#menu-certificates');}
  });
  $("#menu-certificates").blur(function(){
    $("#menu-certificates").stop();
    $("#menu-certificates").css({width: "30px",top:"0px",left:"0px",	height: "30px",position:"relative",	"border-radius": "50%"});
    $("div").remove(".my-text");
    flag=0;
  });
})();
(function(){
  "use strict";
  var flag=0;
  $( "#menu-links" ).click(function() {
    if(flag==0){
    //console.log("gs");
    flag=1;
    $( "#menu-links" ).css({ position: "absolute",left:"20%",left:"97%","border-radius":"0%","background-image":"linear-gradient(135deg,black,yellow)"});

    $( "#menu-links" ).animate({
      width: "80%",
      height:"300px",
      top:"100px",
      left:"0%",
      position:"absolute"
    }, 5000 );
    $('<div class="my-text showMe">' + 'Some Dummy Text' + '</div>').appendTo('#menu-links');}
  });
  $("#menu-links").blur(function(){
    $("#menu-links").stop();
    $("#menu-links").css({width: "30px",top:"0px",left:"0px",	height: "30px",position:"relative",	"border-radius": "50%"});
    $("div").remove(".my-text");
    flag=0;
  });
})();
/*===========================*/
