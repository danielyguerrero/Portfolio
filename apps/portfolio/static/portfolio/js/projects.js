function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
} 

$(document).ready(function(){

	$('div').hover(

		function() {
			$(this).css({"box-shadow":"0px 0px 10px 2px white"});
		},
		function() {
			$(this).css({"box-shadow": "0px 0px 26px 2px #988c8c"});
		}


	);

});