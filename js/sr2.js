	  // alert("clicked.");






RabbitM = setInterval(speedRabbit, 500);
foxM = setInterval(speedFox, 500);

var pR =Number($("#rabbit").offset().left)

//$("#rabbit").click(speedRabbit);
   // $("#fox").click(speedFox);




 //$("#txt").text( $("#rabbit").offset().left );

 if ( $("#rabbit").offset().left =<  1200  ){

function speedRabbit() {

	$("#rabbit").animate({left: '+=30px'}) ;

};

function speedFox() {
	$("#fox").animate({left: '+=34px'}) ;
	};

$("#txt").text( $("#fox").offset().left );

}else {


	  $("#rabbit").fadeOut();

	   //$("#fox").offset().left =$("#txt").text ;

 //$("#fox").fadeOut();
};
 };
 
 //setTimeout($("#fox").stop(), 100);
// $("#fox").fadeIn();
//$("#fox").animate({left: '+=34px'},0).stop();
// $("#fox").velocity('finish', true);

    


	



$("#txt").text( $("#rabbit").position().left  );

    


  

 

