	$(document).ready(function(){
		$("#hiddenform").hide();
        
        
        
        $("#contact-div").on("click", function (){
           $("#card-text").hide();
	       $("#hiddenform").show();
	           $(this).hide();
        });
        
        
    })