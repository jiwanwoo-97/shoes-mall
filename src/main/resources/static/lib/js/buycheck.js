

window.onload = function () {


    checkbox = [];
    $(document).on('click', '.chbtn', function () {

        let index = $(".chbtn").index(this);

        if (checkbox[index] != 1) {
            checkbox[index] = 1;
            const check_box = document.getElementsByClassName("chbtn")[index];
            check_box.src = "/lib/img/h_img/logo/check_btn2.png"

        } else if (checkbox[index] == 1) {
            checkbox[index] = 0;
            const check_box = document.getElementsByClassName("chbtn")[index];
            check_box.src = "/lib/img/h_img/logo/check_btn.png"

        }
        console.log(checkbox[index]);
    });




    $(".sg_info").click(function size() {
        let index = $(".sg_info").index(this);
        // border
        $(this).css('border','1px solid black');
        $(this).siblings().css('border','1px solid rgb(201, 201, 201)');
        // 사이즈 선택값 반환
        const val = $(this).find('.pro_size').text();
        $('.size').text(val);
        // 팝업닫기
        const popdown = document.getElementsByClassName('layer_container')[0];
        popdown.style.display = "none";
    });


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



    // navigation 열기 / 닫기
    $("#hb_mo_text").on("click", function () {
        $(".navigation_wrap").removeClass("close");
        $(".navigation_wrap").addClass("open");

    });
    $(".btn_nav_close").on("click", function () {
        $(".navigation_wrap").removeClass("open");
        $(".navigation_wrap").addClass("close");
    });


}
// ㅊㅔ크 개수 따라 구매계속 버튼 색 바뀌기
function getCheck(){
    const query = 'input[name=check]:checked';
    const selectedElements = document.querySelectorAll(query);
    const cnt = selectedElements.length;

    if(cnt == 4){
        $(".btn").css("background-color", "black");
    }else{
        $(".btn").css("background-color", "rgb(214,214,214)");
    }
}

