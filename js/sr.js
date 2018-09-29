
 


  //    $(#start).css("width", $(window).width());
   //   $(#start).css("height", $(window).height());          
     

 

 

 var wi = $(window).width();
 var hi = $(window).height();
 //$(" #hi").text(wi);
 
$("#rabbit").offset().left = wi - 700
$("#rabbit").offset().top = hi - 500

var sR = "+="+0.00875 * wi+"px" ;
var sF =  "+="+0.01375 * wi+"px" ;
//$(" #width1").text( sR);

  $("#wrong").hover(function(){
        $(this).css("color", "red");
        }, function(){
        $(this).css("color", "white");
    });
 $("#Corect").hover(function(){
        $(this).css("color", "blue");
        }, function(){
        $(this).css("color", "white");
    });


$("#end").css("right", 0.105*wi+"px");
//alert($("#end").offset().left)


//$("#fox").click(function(){
 //$("#fox").animate({left: '+=55px'}) ;
//});




RabbitM = setInterval(speedRabbit, 500);
foxM = setInterval(speedFox, 500);



//$("#rabbit").click(speedRabbit);
   // $("#fox").click(speedFox);

function speedFox() {
  
	$("#fox").animate({left:sF }) ;
    $("#fox2").animate({left: sF }) ;
    $("#fox3").animate({left: sF }) ;
	};


//switch ( l) {
//    case 0:
 //       $("#fox").offset().left=$("#fox").offset().left+10;
 //       break;
//    case 1:
 //       $("#rabbit").offset().left=$("#rabbit").offset().left+10;
  //      break;
 //   };



function speedRabbit() {

	$("#rabbit").animate({left: sR }) ;



if ( $("#rabbit").offset().left >=  0.75 * wi - 80  )
 {
clearInterval(RabbitM);
	  $("#rabbit").fadeOut();
         clearInterval(foxM)
      $("#fox").fadeOut();
      $("#fox2").fadeIn();
//$(" #txtEndR").text(" Thanks for helping me");
    $(" #txtEndR").fadeIn(); 

$("#wrong").fadeOut();
$("#Corect").fadeOut();
$("#txt").fadeOut();
$("#main").fadeOut();



   };


if (    $("#fox").offset().left >= $("#rabbit").offset().left -80)
 {
 	$("#fox").fadeOut();
      clearInterval(RabbitM);
	  $("#rabbit").fadeOut("fast","swing");
      clearInterval(foxM);
      $("#fox3").fadeIn("slow");
      
      $("#end").fadeOut();

      //$("#txtEnd").text("The game is over: I'm still hungry ... try again");
       $("#txtEnd").fadeIn(); 

$("#wrong").fadeOut();
$("#Corect").fadeOut();
$("#txt").fadeOut();
$("#main").fadeOut();

         };

 
};


$.getJSON("https://codepen.io/RABIE-HUNTER/pen/vRBPxP.js",
  function(response) {
 
  
  //   $.each(response, function( index, value ) {
         // alert(value.qu);
        // });
   var qustion = [];
   var answer = [];
   var idlist = [];

      response.forEach(function(val) {
       qustion.push(val.qu);
       answer.push(val.an);
       idlist.push(val.id);
      });

   index = Math.floor(Math.random() * 30 );

   $("#txt").text(qustion[index]);

    //alert(qustion[index]);
   //alert(index);
  
  $("#Corect").click(function(){
    if(answer[index]==1){
    	$("#rabbit").animate({left: '+=55px'})
      //alert("Corect");
         }else{
           
           $("#fox").animate({left: '+=55px'}) ;
           //alert("wrong answer");
         }
     index = Math.floor(Math.random() * 30 );

   $("#txt").text(qustion[index]);
});
    $("#wrong").click(function(){
    if(answer[index]==2){
    	$("#rabbit").animate({left: '+=55px'})
      //alert("Corect");
         }else{
         	$("#fox").animate({left: '+=55px'}) ;
          // alert("wrong answer");
         }
    index = Math.floor(Math.random() * 30 );

   $("#txt").text(qustion[index]);
});
  
    
      })
 


    


  

 

