
// // 전체 페이지 이동
$('#category_on').click(function(){
    window.location.href='/faq';
});

// 이용정책 페이지 이동
$('#policy').click(function(){
    window.location.href='/faq/policy';
});


// 공통 페이지 이동
$('#common').click(function () {
    window.location.href = '/faq/common';
});

// 구매 페이지 이동
$('#buying').click(function(){
    window.location.href='/faq/buying';
});

// 판매 페이지 이동
$('#selling').click(function () {
    window.location.href = '/faq/selling';
});



// 페이지숫자 이동
$('.pagenum1').click(function () {
    $('.pagenum1').removeClass("page_clicked");
    $(this).addClass("page_clicked");
});

// 다음 페이지로 이동
$('.nextpage').click(function(){
    $('.pagination1').hide();
    $('.pagination2').show();
    $('.dropdown_list').hide();
})

// 이전 페이지로 이동
$('.beforepage').click(function(){
    $('.pagination2').hide();
    $('.pagination1').show();
    $('.dropdown_list1').hide();
    $('.dropdown_list').show();
});

