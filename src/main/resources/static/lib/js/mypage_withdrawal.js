// 취소하기
$('#cal_btn').click(function () {
    window.location.href = '/my/profile';
});

// checkbox 모두 선택 / ㅎㅐ제
let action = true;
$("#input11").click(function () {
    if (action) {
        $("input[name=check]:checkbox").prop("checked", "checked");
    } else {
        $("input[name=check]:checkbox").prop("checked", false);
    }
    action = !action;
});

// 탈퇴하기
$("#ok_btn").click(function () {
    let object = $("#input03:checked");
    let allobject = $("#input11:checked");
    if (object.length < 3 && allobject) {
        alert('회원탈퇴 내용을 모두 동의해 주셔야 탈퇴가 가능합니다.')
    } else {
        ($('input:checkbox[name="check"]').is(":checked") == true)
        $(document).ready(function () {
            $("#popup_mask").css("display", "block"); //팝업 뒷배경 display block
            $("#popupDiv").css("display", "block"); //팝업창 display block
            $("body").css("overflow", "hidden");//body 스크롤바 없애기

            // 엑스 눌렀을때
            $("#popCloseBtn").click(function (event) {
                $("#popup_mask").css("display", "none"); //팝업창 뒷배경 display none
                $("#popupDiv").css("display", "none"); //팝업창 display none
                $("body").css("overflow", "auto");//body 스크롤바 생성
            });

            // 탈퇴안할래요 눌렀을때
            $("#no_btn").click(function (event) {
                $("#popup_mask").css("display", "none"); //팝업창 뒷배경 display none
                $("#popupDiv").css("display", "none"); //팝업창 display none
                $("body").css("overflow", "auto");//body 스크롤바 생성
            });
        });
    }
});

// 레이아웃 탈퇴버튼 클릭
$(".link_withdrawal").on("click", ()=>{
    if($("#undefined").is(":checked")){
        withdreawal();
    }else{
        alert('탈퇴를 정말로 원하십니까? \n정말로 원하신다면 체크박스를 눌러주십시오.');
    }
});