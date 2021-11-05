$(document).ready(function(){
	$(".btn").click(function(){
		var attr = $(this).attr("data-li");

		$(".btn").removeClass("active");
		$(this).addClass("active");

		$(".item").hide();

		if(attr == "Abaca"){
			$("." + attr).show();
		}
		else if(attr == "Beads"){
			$("." + attr).show();
		}
		else if(attr == "Paracord"){
			$("." + attr).show();
		}
		else if(attr == "Wood"){
			$("." + attr).show();
		}
		else if(attr == "Paper"){
			$("." + attr).show();
		}
		else{
			$(".item").show();
		}
	});
});