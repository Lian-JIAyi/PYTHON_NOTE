$(function(){
  $("#btnLogin").click(function(){
    $(".login").css("display","none");
    $(".desktop").delay(1000).show("slow");
    $(".bottom-bar").slideDown("slow");
    $(".icons").delay(3000).show("fast");
  });
   $("#logout").click(function(){
    $(".login").delay(1000).show("slow");
    $(".desktop").hide("slow");
    $(".icons").hide("slow");
     $(".panel").css("display","none");
  });
  
     $("#shutdown").click(function(){
       $(".desktop").hide();
       $(".icons").hide();
       $(".panel").css("display","none");
       $('body').css("background-image","none");
       $('html').css("background-color","black");

  });

  $("#dskIcnChrome").click(function(){
    $(".panel").slideUp("fast");

  });
  $("#dskIcnChrome").dblclick(function(){
    $(".window").fadeIn("slow").css("display","block");
    $(".bottom-bar .chrome").css("display","block");
    $(".panel").slideUp("fast");

  });
  $(".bottom-bar #mnuIcnChrome").click(function(){
    $(".panel").slideUp("fast");
    $(".window").fadeIn("slow").css("display","block");
    $(".bottom-bar .chrome").css("display","block"); 
  });

  $(".bottom-bar .chrome").click(function(){
     $(".window").fadeToggle();
  });

  $(".window #minimize").click(function(){
    $(".window").fadeOut();
  }); 
  
  $(".window #close").click(function(){
    $(".window").fadeOut("slow");
    $(".bottom-bar .chrome").fadeOut("slow").css("display","none"); 
  });
  

  $(".bottom-bar a#menu").click(function(){
    $(this).css("background-color", "rgba(255,255,255, 0.2)");
    $(".panel").slideToggle("fast");    
  });
});