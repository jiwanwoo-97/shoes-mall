// 기본 카드 idx
let $id;

// 카드정보 데이터 읽어오기
let cardCount = 0;   // data가 없으면 0, 있을 경우 숫자만큼 증가



// 새 배송지 추가하기 버튼 클릭
$("#card_register").click(function(event){
    $("#popupDiv").css("display","block");

    if(cardCount < 1){
        document.querySelector('#input_button_check').checked = true;
        document.querySelector('#input_button_check').addEventListener('click',()=>{
            alert('동록된 배송지가 없을 경우 기본배송지로 자동 등록됩니다.');
            document.querySelector('#input_button_check').checked = true;
        });
    }

// 저장하기 버튼클릭
    $(".btn_save").click(function(event){
        regist();
    });
});

// 엑스 버튼 클릭
$("#popCloseBtn").click(function(event){
    $("#popupDiv").css("display","none"); //팝업창 display none
});

// 취소 버튼 클릭
$(".btn_delete").click(function(event){
    $("#popupDiv").css("display","none"); //팝업창 display none
    $("body").css("overflow","auto");//body 스크롤바 생성
});

// 카드번호 유효성 검사 (카드번호 4칸, 비밀번호 1칸)
document.querySelectorAll('.input_card_num').forEach((element, i, array)=>{
    element.addEventListener('input', e=>{
        // if(element.getAttribute('value').length==4){
        element.setAttribute('validateresult', true);
        // }else{
        //     element.setAttribute('validateresult', false);
        // }
    });
});

// select 유효성 검사 (카드사, 유효기간 년,월)
document.querySelectorAll('select').forEach((element, i, array)=> {
    element.addEventListener('change', e => {
        element.setAttribute('validateresult', true);
        element.parentNode.parentNode.querySelector('span').innerHTML = element.value;
    });
});


// input string
const card_num1 = document.querySelector('#card_num1');
const card_num2 = document.querySelector('#card_num2');
const card_num3 = document.querySelector('#card_num3');
const card_num4 = document.querySelector('#card_num4');
const card_number = card_num1 + card_num2 + card_num3 + card_num4;
const card_company = document.querySelector('#card_company');
const expiration = document.querySelector('#expiration');
const birthdate = document.querySelector('#birthdate');
const cardpw = document.querySelector('#cardpw');
const in_essentialList = [card_num1, card_num2, card_num3, card_num4, card_company, expiration, birthdate, cardpw];

// 저장하기 버튼 활성화
in_essentialList.forEach((element, i, array)=>{
    element.addEventListener('input', e=>{
        document.querySelector('.btn_save').className = 'btn btn_save solid medium disabled';
        document.querySelector('.btn_save').disable = true;
        if (element.getAttribute('validateresult') ?? false) {
            if (result = (array.reduce((before, after) => {
                return before && (after.getAttribute('validateresult') == "true")
            }, true))) {
                //맞음
                document.querySelector('.btn_save').className = 'btn btn_save medium solid';
                document.querySelector('.btn_save').disabled = false;
            }
        }
    })
})