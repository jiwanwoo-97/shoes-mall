// notice_24페이지로 이동
$('#main2_table_top').click(function () {
    window.location.href = '/notice_24';
})

// 페이지숫자 이동
$('.pagenum1').click(function () {
    $('.pagenum1').removeClass("page_clicked");
    $(this).addClass("page_clicked");
});

// 다음 페이지로 이동
$('.nextpage').click(function () {
    $('.pagination1').hide();
    $('.pagination2').show();
    $('.dropdown_list').hide();
})

// 이전 페이지로 이동
$('.beforepage').click(function () {
    $('.pagination2').hide();
    $('.pagination1').show();
    $('.dropdown_list1').hide();
    $('.dropdown_list').show();
});








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



    // // navigation 열기 / 닫기
    // $("#hb_mo_text").on("click", function () {
    //     $(".navigation_wrap").removeClass("close");
    //     $(".navigation_wrap").addClass("open");
    //
    // });
    // $(".btn_nav_close").on("click", function () {
    //     $(".navigation_wrap").removeClass("open");
    //     $(".navigation_wrap").addClass("close");
    // });
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


