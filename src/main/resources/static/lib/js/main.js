(function ($) {
 "use strict";

		$(".chosen")[0] && $(".chosen").chosen({
            width: "100%",
            allow_single_deselect: !0
        });
		/*--------------------------
		 auto-size Active Class
		---------------------------- */	
		$(".auto-size")[0] && autosize($(".auto-size"));
		/*--------------------------
		 Collapse Accordion Active Class
		---------------------------- */	
		$(".collapse")[0] && ($(".collapse").on("show.bs.collapse", function(e) {
            $(this).closest(".panel").find(".panel-heading").addClass("active")
        }), $(".collapse").on("hide.bs.collapse", function(e) {
            $(this).closest(".panel").find(".panel-heading").removeClass("active")
        }), $(".collapse.in").each(function() {
            $(this).closest(".panel").find(".panel-heading").addClass("active")
        }));
		/*----------------------------
		 jQuery tooltip
		------------------------------ */
		$('[data-toggle="tooltip"]').tooltip();
		/*--------------------------
		 popover
		---------------------------- */	
		$('[data-toggle="popover"]')[0] && $('[data-toggle="popover"]').popover();
		/*--------------------------
		 File Download
		---------------------------- */	
		$('.btn.dw-al-ft').on('click', function(e) {
			e.preventDefault();
		});
		/*--------------------------
		 Sidebar Left
		---------------------------- */	
		$('#sidebarCollapse').on('click', function () {
			 $('#sidebar').toggleClass('active');
			 
		 });
		$('#sidebarCollapse').on('click', function () {
			$("body").toggleClass("mini-navbar");
			SmoothlyMenu();
		});
		$('.menu-switcher-pro').on('click', function () {
			var button = $(this).find('i.nk-indicator');
			button.toggleClass('notika-menu-befores').toggleClass('notika-menu-after');
			
		});
		$('.menu-switcher-pro.fullscreenbtn').on('click', function () {
			var button = $(this).find('i.nk-indicator');
			button.toggleClass('notika-back').toggleClass('notika-next-pro');
		});
		/*--------------------------
		 Button BTN Left
		---------------------------- */	
		
		$(".nk-int-st")[0] && ($("body").on("focus", ".nk-int-st .form-control", function() {
            $(this).closest(".nk-int-st").addClass("nk-toggled")
        }), $("body").on("blur", ".form-control", function() {
            var p = $(this).closest(".form-group, .input-group"),
                i = p.find(".form-control").val();
            p.hasClass("fg-float") ? 0 == i.length && $(this).closest(".nk-int-st").removeClass("nk-toggled") : $(this).closest(".nk-int-st").removeClass("nk-toggled")
        })), $(".fg-float")[0] && $(".fg-float .form-control").each(function() {
            var i = $(this).val();
            0 == !i.length && $(this).closest(".nk-int-st").addClass("nk-toggled")
        });
		/*--------------------------
		 mCustomScrollbar
		---------------------------- */	
		$(window).on("load",function(){
			$(".widgets-chat-scrollbar").mCustomScrollbar({
				setHeight:460,
				autoHideScrollbar: true,
				scrollbarPosition: "outside",
				theme:"light-1"
			});
			$(".notika-todo-scrollbar").mCustomScrollbar({
				setHeight:445,
				autoHideScrollbar: true,
				scrollbarPosition: "outside",
				theme:"light-1"
			});
			$(".comment-scrollbar").mCustomScrollbar({
				autoHideScrollbar: true,
				scrollbarPosition: "outside",
				theme:"light-1"
			});
		});
	/*----------------------------
	 jQuery MeanMenu
	------------------------------ */
	jQuery('nav#dropdown').meanmenu();
	
	/*----------------------------
	 wow js active
	------------------------------ */
	 new WOW().init();
	 
	/*----------------------------
	 owl active
	------------------------------ */  
	$("#owl-demo").owlCarousel({
      autoPlay: false, 
	  slideSpeed:2000,
	  pagination:false,
	  navigation:true,	  
      items : 4,
	  /* transitionStyle : "fade", */    /* [This code for animation ] */
	  navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
      itemsDesktop : [1199,4],
	  itemsDesktopSmall : [980,3],
	  itemsTablet: [768,2],
	  itemsMobile : [479,1],
	});

	/*----------------------------
	 price-slider active
	------------------------------ */  
	  $( "#slider-range" ).slider({
	   range: true,
	   min: 40,
	   max: 600,
	   values: [ 60, 570 ],
	   slide: function( event, ui ) {
		$( "#amount" ).val( "£" + ui.values[ 0 ] + " - £" + ui.values[ 1 ] );
	   }
	  });
	  $( "#amount" ).val( "£" + $( "#slider-range" ).slider( "values", 0 ) +
	   " - £" + $( "#slider-range" ).slider( "values", 1 ) );  
	   
	/*--------------------------
	 scrollUp
	---------------------------- */	
	$.scrollUp({
        scrollText: '<i class="fa fa-angle-up"></i>',
        easingType: 'linear',
        scrollSpeed: 900,
        animation: 'fade'
    });
	$(document).ready(function(){
		var fileTarget = $('.filebox .upload-hidden');
		fileTarget.on('change', function(){
			if(window.FileReader){
				var filename = $(this)[0].files[0].name;
			} else {
				var filename = $(this).val().split('/').pop().split('\\').pop();
			}
			$(this).siblings('.upload-name').val(filename); }); });


 
})(jQuery);
$(document).ready(function(){
	var sCate1 = ['스니커즈'];
	var sCate2 = ['아우터','상의','하의','기타'];
	var sCate3 = ['모자','가방','지갑및카드홀더'];
	var sCate4 = ['그래픽카드','게임기','기타'];
	var sCate5 = ['라이프'];
	var sCate6 = ['대분류를 선택하세요'];

	$('.BigCate').change(function(){
		var num = $(this).val();
		if(num == "스니커즈"){
			$('.op').remove();
			$.each(sCate1, function (i, item){
				$('.smallCate').append('<option class="op">'+item+'</option>');
			});
		}else if (num=="의류"){
			$('.op').remove();
			$.each(sCate2, function (i, item){
				$('.smallCate').append('<option class="op">'+item+'</option>');
			});
		}else if (num=="패션잡화"){
			$('.op').remove();
			$.each(sCate3, function (i, item){
				$('.smallCate').append('<option class="op">'+item+'</option>');
			});
		}else if (num=="테크"){
			$('.op').remove();
			$.each(sCate4, function (i, item){
				$('.smallCate').append('<option class="op">'+item+'</option>');
			});
		}else if (num=="라이프"){
			$('.op').remove();
			$.each(sCate5, function (i, item){
				$('.smallCate').append('<option class="op">'+item+'</option>');
			});
		}else{
			$('.op').remove();
			$.each(sCate6, function (i, item){
				$('.smallCate').append('<option class="op" disabled>'+item+'</option>');
			});
		}
	})
});
$(document).ready(function(){
	var sCate1 = ['쇼룸','이벤트발표','공지'];
	var sCate2 = ['이용정책','공통','구매','판매'];
	var sCate3 = ['스니커즈','의류','패션잡화','테크','라이프'];
	var sCate4 = ['게시중','게시중지'];
	var sCate5 = [' '];

	$('.BigCate_postm').change(function(){
		var num = $(this).val();
		if(num == 1){
			$('.op').remove();
			$.each(sCate1, function (i, item){
				$('.smallCate_postm').append('<option class="op">'+item+'</option>');
			});
		}else if (num==2){
			$('.op').remove();
			$.each(sCate2, function (i, item){
				$('.smallCate_postm').append('<option class="op">'+item+'</option>');
			});
		}else if (num==3){
			$('.op').remove();
			$.each(sCate3, function (i, item){
				$('.smallCate_postm').append('<option class="op">'+item+'</option>');
			});
		}else if (num==4){
			$('.op').remove();
			$.each(sCate4, function (i, item){
				$('.smallCate_postm').append('<option class="op">'+item+'</option>');
			});
		}else{
			$('.op').remove();
			$.each(sCate5, function (i, item){
				$('.smallCate_postm').append('<option class="op" disabled>'+item+'</option>');
			});
		}
	})
});
$(document).ready(function() {
	$('.textaC').on('keyup', function() {
		$(this).next('.texta_cnt').html($(this).val().length+" / 100");
		if($(this).val().length > 100) {
			$(this).val($(this).val().substring(0, 100));
			$(this).next('.texta_cnt').html("100 / 100");
		}
	});
});

/*=================미정===================*/

/*---글자수----*/
$(document).ready(function() {
	$('.textTitle').on('keyup', function() {
		$(this).next('.text_cnt').html($(this).val().length+" / 50");
		if($(this).val().length > 50) {
			$(this).val($(this).val().substring(0, 50));
			$(this).next('.texta_cnt').html("50 / 50");
		}
	});
});


/*----- 초기화 ----*/
function btnReset(){
	var x = document.createElement("INPUT");
	x.setAttribute("type", "reset");
	document.body.appendChild(x);
}
