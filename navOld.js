
   window.onload = function(){
       kiss();

   }

       function kiss(){ (function(){
           var wasScrol = false;
	   document.addEventListener('scroll', function() {
	   var navHeight = document.getElementsByTagName("nav")[0].offsetTop;

			 if (window.scrollY > navHeight) {
                 document.getElementById("navPanel").setAttribute("class", "fixed");
                 //navPanel
				 //$('nav').addClass('fixed');
                 wasScrol = true;

                 var child = document.getElementsByClassName("button")[0];
                 if(child){
                 child.setAttribute("class", "buttonDelete");
                 }

                 console.log(wasScrol);
			 }
			 else {
                 document.getElementsByTagName("nav")[0].removeAttribute("class", "fixed");
				 //$('nav').removeClass('fixed');
                 console.log("not good");
                 wasScrol = false;

                 var child = document.getElementsByClassName("buttonDelete")[0];
                 if(child){
                 child.setAttribute("class", "button");
                 }
			 }

                /*while(wasScrol){
                document.getElementById("button").setAttribute("class","buttonDelete");
            console.log("yes");
                                    }*/

		});
	})();

                      }

$("window").ready(){


}














