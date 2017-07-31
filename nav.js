
   $(document).ready(function(){
	    setTimeout("explore()", 500);

	   navFixed();
	   //pltclick();
	   pltclick1();
	}
					);

function navFixed(){
	$(window).scroll( function() {
			 if ($(window).scrollTop() >70) {
			 $('#navPanel').addClass('fixed');
				 $("h1").fadeOut("slow");
				 //sunShine();
			 }

			else {
			$('#navPanel').removeClass('fixed');
				$("h1").fadeIn("slow");
			 }
			});
}

function explore(){
		$("h1").fadeIn();
}
function sunShine(){
	$("#sonne").animate({
		width:"610px"
	},1000, function(){});
}
/*function pltclick(){
$( "#merkur" ).click(function() {
   window.open('/planets/merkur.html');
	
	$("img").each(function(i)
				 {

		window.open("/planets/"+$(this).attr("id")+".html")
	}
				 
				 );
});
	}
*/
function pltclick1(){
	$( "img" ).click(function(e) {

		window.open("/planets/"+$(e.currentTarget).attr("id")+".html")
				 
	
	});
}