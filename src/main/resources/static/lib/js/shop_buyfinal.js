
// 주소록 닫기 함수
function pop_address_down(){
    const pop_address_down = document.getElementById('pop_address');
    pop_address_down.style.display = "none"
    const body = document.querySelector('body');
    body.style.overflow = 'unset'
}

// 카드 리스트 확장
function show_other_card(){
    $(".other_card").show();
    // $(".content").css("height", "170rem");
    $(".down_card").hide();
    $(".up_card").show();
}

// 카드 리스트 확장 닫기
function hide_other_card(){
    $(".up_card").hide();
    $(".down_card").show();
    // $(".content").css("height", "152rem");
    $(".other_card").hide();
}

// 결제 버튼 활성화
function getCheck(){
    const query = 'input[name=check]:checked';
    const selectedElements = document.querySelectorAll(query);
    const cnt = selectedElements.length;

    if(cnt == 3){
        $(".btn_confirm").css("background-color", "black");
        $(".btn_confirm").prop("disabled", false);
    }else{
        $(".btn_confirm").css("background-color", "rgb(214,214,214)");
        $(".btn_confirm").prop("disabled", true);
    }
}
