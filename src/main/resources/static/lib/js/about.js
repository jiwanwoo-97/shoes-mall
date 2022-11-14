// 고정될 메뉴 배경색 바꿔 주기 
// $(function(){
//     $(window).on("scroll", function(){
//         if($(window).scrollTop()){
//             $("header").addClass("nav");
//             $("#header_top").hide();
//             $("#header_dark").show();
//         }else{
//             $("header").removeClass("nav");
//             $("#header_top").show();
//             $("#header_dark").hide();
//         }
//     })
// })


// 페이드인, 페이드아웃





// 새로고침하면 페이지 최상단으로 이동
// window.onload = function(){
//     setTimeout (function(){
//         scrollTo(0,0);
//     }, 100);
// }



// 페이지에 따라 크기 조절
// $(document).ready(function(){
//     let jbWidth = $(".d_second").width();
//     $(".d_second").apppend(jbWidth);
//     $(window).resize(function(){
//         jbWidth = $('.d_second').width();
//         $('.d_second').empty().append(jbWidth);
//     });
// });

$(window).resize(function(){
    if($(window).width() > 1200){
        $(".bg_item.second").css("left", "730px");
    }
});
