window.onload = function () {

    window.addEventListener('scroll', scrollFunc);
    const header = document.querySelector('#header');
    const title = document.querySelector('.mini_header_container');
    const bars = document.querySelectorAll('.bar');
    const fixed = document.querySelector('#fixed');

    function scrollFunc() {
        let ww = $(window).width();
        if (pageYOffset >= 15) {
            if(ww > 768){
            header.classList.add('on');
            title.style.display = 'flex';
            fixed.style.height = '3rem';
            for (var i = 0; i < bars.length; i++) {
                bars[i].style.display = 'none';
            }
        }else{
            header.classList.add('on');
            fixed.style.height = '3rem'
        }
        } else {
            if(ww > 768){
            header.classList.remove('on');
            title.style.display = 'none';
            fixed.style.height = '';
            for (var i = 0; i < bars.length; i++) {
                bars[i].style.display = 'block';
            }
        }else{
            header.classList.remove('on');
            fixed.style.height = '0rem'
        }
        }

        /*슬라이드*/

    new Swiper('.swiper-container', {
        pagination: { // 페이징 설정
            el: '.swiper-pagination',
            clickable: true, // 페이징을 클릭하면 해당 영역으로 이동, 필요시 지정해 줘야 기능 작동
        },
        navigation: { // 네비게이션 설정
            nextEl: '.swiper-button-next', // 다음 버튼 클래스명
            prevEl: '.swiper-button-prev', // 이번 버튼 클래스명
        },
    });

    /*이미지 슬라이드 버튼 호버*/
    $(document).ready(function () {
        $('.swiper-wrapper,.swiper-button-next, .swiper-button-prev ').hover(function () {
            $('.swiper-button-next, .swiper-button-prev  ').css('display', 'block');
        }, function () {
            $('.swiper-button-next, .swiper-button-prev  ').css('display', 'none');
        });

    });

    // $(document).ready(function (){
    //     if($('.swiper-wrapper .swiper-slide:first')){
    //         $('.swiper-button-next, .swiper-wrapper').hover(function(){
    //             $('.swiper-button-next').css('display', 'block');
    //         }, function () {
    //             $('.swiper-button-next, .swiper-button-prev').css('display', 'none');
    //         });
    //     }else if($('.swiper-wrapper .swiper-slide:last')){
    //         $('.swiper-button-prev, .swiper-wrapper').hover(function(){
    //             $('.swiper-button-prev').css('display', 'block');
    //         }, function () {
    //             $('.swiper-button-prev, .swiper-button-next').css('display', 'none');
    //         });
    //     }else{
    //         $('.swiper-wrapper,.swiper-button-next, .swiper-button-prev').hover(function ()
    //             {
    //             $('.swiper-button-next, .swiper-button-prev').css('display', 'block');
    //         }, function () {
    //             $('.swiper-button-next, .swiper-button-prev').css('display', 'none');
    //         });
    //     }
    // });

    
    }


    
    /* 좋아요 */
    like = [];
    $(document).on('click', '.like', function () {

        let index = $(".like").index(this);

        if (like[index] != 1) {
            like[index] = 1;
            const like_box = document.getElementsByClassName("like")[index];
            like_box.src = "/lib/img/heart.png"


        } else if (like[index] == 1) {
            like[index] = 0;
            const like_box = document.getElementsByClassName("like")[index];
            like_box.src = "/lib/img/smile.png"
        }
    });

    /* 팝업 좋아요 */
    like_1 = [];
    $(document).on('click', '.p_comment_view_smile', function () {

        let index = $(".p_comment_view_smile").index(this);

        if (like_1[index] != 1) {
            like_1[index] = 1;
            const like_box = document.getElementsByClassName("p_comment_view_smile")[index];
            like_box.src = "/lib/img/heart.png"


        } else if (like_1[index] == 1) {
            like_1[index] = 0;
            const like_box = document.getElementsByClassName("p_comment_view_smile")[index];
            like_box.src = "/lib/imgsmile.png"
        }
    });

    like_2 = [];
    $(document).on('click', '.p_sub_comment_view_smile', function () {

        let index = $(".p_sub_comment_view_smile").index(this);

        if (like_2[index] != 1) {
            like_2[index] = 1;
            const like_box = document.getElementsByClassName("p_sub_comment_view_smile")[index];
            like_box.src = "/lib/imgheart.png"


        } else if (like_2[index] == 1) {
            like_2[index] = 0;
            const like_box = document.getElementsByClassName("p_sub_comment_view_smile")[index];
            like_box.src = "/lib/imgsmile.png"
        }
    });

    /* 팔로우 팔로잉*/

    follow = [];
    $(document).on('click', '.symp_btn', function () {

        let index = $(".symp_btn").index(this);

        if (follow[index] != 1) {
            follow[index] = 1;
            const button = document.getElementsByClassName("symp_btn")[index];
            button.innerText = "팔로잉";
            button.style.backgroundColor = "white";
            button.style.color = "black";

        } else if (follow[index] == 1) {
            follow[index] = 0;
            const button = document.getElementsByClassName("symp_btn")[index];
            button.innerText = "팔로우";
            button.style.backgroundColor = "black";
            button.style.color = "white";
        }
    });

    /* 더보기 */
    $(document).ready(function () {

        $('.text_main').each(function () {
            let content = $(this).children('.text_title');
            let content_txt = content.text();
            let content_txt_short = content_txt.substring(0, 5) + "...";
            let btn_more = $('<a style="cursor : pointer;" class="more">더보기</a>');


            $(this).append(btn_more);
            if (content_txt.length >= 5) {
                content.html(content_txt_short)
            } else {
                btn_more.hide()
            }

            $(document).on('click', '.more', function () {
                let index = $(".more").index(this);
                let like_box = document.getElementsByClassName("text_a")[index];
                if (!$(this).hasClass('short')) {
                    content.html(content_txt);
                    like_box.style.display = "unset";
                    btn_more.hide();
                }
            })

        });
    });
}

like_1 = [];
$(document).on('click', '.p_comment_view_smile', function () {

    let index = $(".p_comment_view_smile").index(this);

    if (like_1[index] != 1) {
        like_1[index] = 1;
        const like_box = document.getElementsByClassName("p_comment_view_smile")[index];
        like_box.src = "/lib/imgheart.png"


    } else if (like_1[index] == 1) {
        like_1[index] = 0;
        const like_box = document.getElementsByClassName("p_comment_view_smile")[index];
        like_box.src = "/lib/imgsmile.png"
    }
});

like_2 = [];
$(document).on('click', '.p_sub_comment_view_smile', function () {

    let index = $(".p_sub_comment_view_smile").index(this);

    if (like_2[index] != 1) {
        like_2[index] = 1;
        const like_box = document.getElementsByClassName("p_sub_comment_view_smile")[index];
        like_box.src = "/lib/imgheart.png"


    } else if (like_2[index] == 1) {
        like_2[index] = 0;
        const like_box = document.getElementsByClassName("p_sub_comment_view_smile")[index];
        like_box.src = "/lib/imgsmile.png"
    }
});

/* 팔로우 팔로잉*/

follow = [];
$(document).on('click', '.symp_btn', function () {

    let index = $(".symp_btn").index(this);

    if (follow[index] != 1) {
        follow[index] = 1;
        const button = document.getElementsByClassName("symp_btn")[index];
        button.innerText = "팔로잉";
        button.style.backgroundColor = "white";
        button.style.color = "black";

    } else if (follow[index] == 1) {
        follow[index] = 0;
        const button = document.getElementsByClassName("symp_btn")[index];
        button.innerText = "팔로우";
        button.style.backgroundColor = "black";
        button.style.color = "white";
    }
});

/*  팝업 */

function comment_up(){
    const popup = document.getElementById('background');
    popup.style.display = "block";
    const body = document.querySelector('body');
    body.style.overflow = 'hidden'
    
}

function comment_down(){
    const popdown = document.getElementById('background');
    popdown.style.display = "none"
    const body = document.querySelector('body');
    body.style.overflow = 'unset'
}

function share_up(){
    const popup = document.getElementById('share_background');
    popup.style.display = "block";
    const body = document.querySelector('body');
    body.style.overflow = 'hidden'
}

function share_down(){
    const popdown = document.getElementById('share_background');
    popdown.style.display = "none"
    const body = document.querySelector('body');
    body.style.overflow = 'unset'
}


function symp_up(){
    const popup = document.getElementById('symp_background');
    popup.style.display = "block";
    const body = document.querySelector('body');
    body.style.overflow = 'hidden'
}

function symp_down(){
    const popdown = document.getElementById('symp_background');
    popdown.style.display = "none"
    const body = document.querySelector('body');
    body.style.overflow = 'unset'
}

function edit_up(){
    const popup = document.getElementById('edit_background');
    popup.style.display = "block";
    const body = document.querySelector('body');
    body.style.overflow = 'hidden'
}

function edit_down(){
    const popdown = document.getElementById('edit_background');
    popdown.style.display = "none"
    const body = document.querySelector('body');
    body.style.overflow = 'unset'
}


/* 링크 복사*/
function copy(){
    let dummy = document.createElement("input");
    let text = location.href;

    document.body.append(dummy);
    dummy.value = text;
    dummy.select();
    document.execCommand("copy");
    document.body.removeChild(dummy);
    
    alert('url이 복사되었습니다.')
}


window.onload = function () {
    // 헤더 검색창
    var btn_search1 = document.getElementById("hb_no_text");

    var btn_close = document.getElementsByClassName("btn_close").item(0);
    var layer_search = document.getElementsByClassName("layer_search").item(0);

    // 헤더 최근 검색어 삭제
    var btn_delete = document.getElementsByClassName("btn_delete").item(0);
    var search_list = document.getElementsByClassName("search_list").item(0);
    var recent_box = document.getElementsByClassName("recent_box").item(0);

    // 헤더 검색 창 열고 닫기
    btn_search1.onclick = function () {
        if (layer_search.style.display == 'none') {
            layer_search.style.display = 'block';
        } else {
            layer_search.style.display = 'none';
        }
    }

    btn_close.onclick = function () {
        if (layer_search.style.display == 'none') {
            layer_search.style.display = 'block';
        } else {
            layer_search.style.display = 'none';
        }
    }

    // 헤더 최근 검색어 삭제
    btn_delete.onclick = function () {
        while (search_list.hasChildNodes()) {
            search_list.removeChild(search_list.firstChild);
        }
        recent_box.style.display = 'none';
    }

    // 검색창 텍스트 입력 실시간 감지
    $(".input_search").on("propertychange change keyup paste input", function () {
        $(".btn_search_delete").css('display', 'inline');
        $(".recent_wrap").css('display', 'none');
        $(".suggest_wrap").css('display', 'block');
    });

    // 검색창 텍스트 지우기 버튼 클릭 이벤트
    $(".btn_search_delete").on("click", function () {
        $(".input_search").val('');
        $(".btn_search_delete").css('display', 'none');
        $(".recent_wrap").css('display', 'block');
        $(".suggest_wrap").css('display', 'none');
    });




};
// navigation 열기 / 닫기
$("#hb_mo_text").on("click", function () {
    $(".navigation_wrap").removeClass("close");
    $(".navigation_wrap").addClass("open");

});
$(".btn_nav_close").on("click", function () {
    $(".navigation_wrap").removeClass("open");
    $(".navigation_wrap").addClass("close");
});