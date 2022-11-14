// 버튼 내리면 나오는 카드 종류
function show_other_card(){
    $(".other_card").show();
    $(".content").css("height", "170rem");
    $(".down_card").hide();
    $(".up_card").show();
}

// 버튼 올리기
function hide_other_card(){
    $(".up_card").hide();
    $(".down_card").show();
    $(".content").css("height", "152rem");
    $(".other_card").hide();
}

// BC카드 설정
function bc_check() {
    $("#bc_check").prop("src", "/lib/img/check_black.png");
    $("#sam_check").prop("src", "/lib/img/check_white.png");
    $("#pre_card").text("BC");
    $("#pre_num").text("8604");
    $("#sam_mark").hide();
    $("#bc_mark").show();
}

// 삼성카드 설정
function sam_check(){
    $("#bc_check").prop("src", "/lib/img/check_white.png");
    $("#sam_check").prop("src", "/lib/img/check_black.png");
    $("#pre_card").text("삼성");
    $("#pre_num").text("7669");
    $("#sam_mark").show();
    $("#bc_mark").hide();
}
function getCheck(){
    const query = 'input[name=check]:checked';
    const selectedElements = document.querySelectorAll(query);
    const cnt = selectedElements.length;

    if(cnt == 3){
        $(".btn_confirm").css("background-color", "black");
    }else{
        $(".btn_confirm").css("background-color", "rgb(214,214,214)");
    }
}

// getCheckSell넣지마세여



