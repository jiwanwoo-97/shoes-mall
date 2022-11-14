// 스니커즈 , 의류, 패션 잡화, 테크, 라이프
$('.category1').click(function () {
    // $("#auth").css("css", "none");
    $('.category').removeClass("clicked");
    $(this).addClass("clicked");
});

$('.category').click(function () {
    // $("#auth").css("css", "none");
    $('.category').removeClass("clicked");
    $(this).addClass("clicked");
});



// 스니커즈
$(function(){
    $('#auth_polic1').click(function(){
        location.href = '/auth_polic';
    })
});

// 의류
$(function(){
    $('#streetwear1').click(function(){
        location.href = '/auth_polic/str';
    })
});

// 패션잡화
$(function(){
    $('#accessories1').click(function(){
        location.href = '/auth_polic/acc';
    })
});
// 테크
$(function(){
    $('#electronics1').click(function(){
        location.href = '/auth_polic/ele';
    })
});
// 라이프
$(function(){
    $('#life1').click(function(){
        location.href = '/auth_polic/life';
    })
});






