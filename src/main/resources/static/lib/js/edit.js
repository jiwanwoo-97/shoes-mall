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



    // navigation 열기 / 닫기
    $("#hb_mo_text").on("click", function () {
        $(".navigation_wrap").removeClass("close");
        $(".navigation_wrap").addClass("open");

    });
    $(".btn_nav_close").on("click", function () {
        $(".navigation_wrap").removeClass("open");
        $(".navigation_wrap").addClass("close");
    });

    // 체크 박스 선택
    const checkboxAll = document.querySelectorAll('.polict_li');
    // 하나만 선택
    for (let i = 0; i < checkboxAll.length; i++) {
        checkboxAll[i].addEventListener('click', function () {
            if (this.querySelector('.pop_policy_body').style.display == 'none') {
                this.querySelector('.pop_policy_body').style.display = 'block';
                this.querySelector('.pp_img').style.background = 'url(/pop/policy_up.png)no-repeat center/cover';
                for (let j = 0; j < checkboxAll.length; j++) {
                    if (checkboxAll[j] != checkboxAll[i]) {
                        checkboxAll[j].querySelector('.pop_policy_body').style.display = 'none';
                        checkboxAll[j].querySelector('.pp_img').style.background = 'url(/pop/policy_down.png)no-repeat center/cover';
                    }
                }
            } else {
                this.querySelector('.pop_policy_body').style.display = 'none';
                this.querySelector('.pp_img').style.background = 'url(/pop/policy_down.png)no-repeat center/cover';
            }

        });
    }
    const categoryList = document.querySelectorAll('.category');

    for (let i = 0; i < categoryList.length; i++) {
        categoryList[0].style.background = 'black';
        inspecionText[0].style.display = 'block';
        categoryList[i].addEventListener('click', function () {
            this.style.background = 'black';
            this.style.color = "rgb(255, 255, 255)";
            this.style.border = "1px solid black";
            inspecionText[i].style.display = 'block';
            for (let j = 0; j < categoryList.length; j++) {
                if (categoryList[i] != categoryList[j]) {
                    categoryList[j].style.background = 'white';
                    categoryList[j].style.color = "rgb(161, 161, 161)";
                    categoryList[j].style.border = "1px solid lightgray";
                    inspecionText[j].style.display = 'none';
                }
            }
        });
    }
};

function pop_down() {
    const pop_inspecion_down = document.getElementsByClassName('inspecion')[0];
    pop_inspecion_down.style.display = "none"
    const pop_policy_down = document.getElementsByClassName('policy')[0];
    pop_policy_down.style.display = "none"
    const pop_commu_down = document.getElementsByClassName('commu')[0];
    pop_commu_down.style.display = "none"
    const pop_penalty_down = document.getElementsByClassName('penalty')[0];
    pop_penalty_down.style.display = "none"
    const body = document.querySelector('body');
    body.style.overflow = 'unset'

}

function pop() {
    const popup = document.getElementsByClassName('down_size')[0];
    popup.style.display = "block";
    const body = document.querySelector('body');
    body.style.overflow = 'hidden'
}

function pop_inspecion() {
    const inspecion = document.getElementsByClassName('inspecion')[0];
    inspecion.style.display = "flex";
    const body = document.querySelector('body');
    body.style.overflow = 'hidden'
}


function pop_penalty() {
    const penalty = document.getElementsByClassName('penalty')[0];
    penalty.style.display = "flex";
    const body = document.querySelector('body');
    body.style.overflow = 'hidden'
}

function pop_commu() {
    const commu = document.getElementsByClassName('commu')[0];
    commu.style.display = "flex";
    const body = document.querySelector('body');
    body.style.overflow = 'hidden'
}

function pop_policy() {
    const commu = document.getElementsByClassName('policy')[0];
    commu.style.display = "flex";
    const body = document.querySelector('body');
    body.style.overflow = 'hidden'
}

const inspecionText = document.querySelectorAll('.inspecion_text');