$(document).ready(function(){
	    pltclick();
	}
			);	  
				  
				  
				 
function pltclick(){
		$( ".logo" ).click(function() {
			$(".left").addClass('leftanime');
			$(".right").addClass('rightanime');
		$(".logo").addClass("logoNone");
});
	}
