// 기본 카드 idx
let $id;

// 카드정보 데이터 읽어오기
let cardCount = 0;   // data가 없으면 0, 있을 경우 숫자만큼 증가
axios.get('/api/cardInfo_list/'+sessionId,{

}).then(function(response){
    if(response.data.data.length==0){
        document.querySelector('.basic').innerHTML+='<div class="empty_area">' +
            '<p class="desc">카드정보가 없습니다. 새 카드를 추가해주세요.</p>' +
            '</div>';
    }
    let div = $('<div>');
    for(let i in response.data.data){
        cardCount += 1;
        let cardid = response.data.data[i].id; // 카드 id
        let cardFlag = response.data.data[i].cardFlag; // 카드 flag
        let cardCompany = response.data.data[i].cardCompany; // 카드사
        let cardNumber = response.data.data[i].cardNumber; // 카드번호
        let defaultNumber = cardNumber.substring(cardNumber.length-4, cardNumber.length);   // 카드번호 뒤 4자리

        if(cardFlag == 'ON') { // 기본 카드
            $id = cardid;
            let row = $('<div class="my_item" default-mark="기본 결제">').append(
                '<div class="info_bind">' +
                '<div class="card_info">' +
                '<span class="card_name">'+cardCompany+'</span>'+
                '<div class="card_num">' +
                '<span class="num_bind">' +
                '<span class="dot"><span class="dot"></span></span>' +
                '<span class="hyphen"></span>' +
                '<span class="dot"><span class="dot"></span></span>' +
                '<span class="hyphen"></span>' +
                '<span class="dot"><span class="dot"></span></span>' +
                '<span class="hyphen"></span>' +
                '<span class="last_num" id="defaultNumber">'+defaultNumber+'</span>' +
                '</span>' +
                '<span class="mark">기본 결제</span>' +
                '</div></div></div>' +
                '<div class="btn_bind">' +
                '<a type="button" class="btn outlinegrey small" onclick="deleteDefault()"> 삭제 </a>' +
                '</div></div>'
            );
            $('.basic').append(row);
        }else{  // 기본 flag 아닌 카드들
            let row = $('<div class="my_item">').append(
                '<div class="info_bind">' +
                '<div class="card_info">' +
                '<span class="card_name">'+cardCompany+'</span>'+
                '<div class="card_num">' +
                '<span class="num_bind">' +
                '<span class="dot"><span class="dot"></span></span>' +
                '<span class="hyphen"></span>' +
                '<span class="dot"><span class="dot"></span></span>' +
                '<span class="hyphen"></span>' +
                '<span class="dot"><span class="dot"></span></span>' +
                '<span class="hyphen"></span>' +
                '<span class="last_num" id="defaultNumber">'+defaultNumber+'</span>' +
                '</span>' +
                '</div></div></div>' +
                '<div class="btn_bind">' +
                '<a type="button" class="btn outlinegrey small" onclick="setDefalt('+cardid+')">기본 결제</a>' +
                '<a type="button" class="btn outlinegrey small" onclick="deleteOnclick('+cardid+')">삭제</a>' +
                '</div></div>'
            );
            div.append(row);
        }
    }
    div.append('</div>');
    $('#other').append(div);
}).catch(function(err){
    console.log(err);
});




// 기본 배송지 삭제 버튼 클릭
function deleteDefault(){
    alert('다른 카드를 기본 결제로 변경 후, 삭제할 수 있습니다.');
}

// 일반 배송지 삭제 버튼 클릭
function deleteOnclick(id){
    axios.delete('/api/cardInfo_delete/'+parseInt(id))
        .then(function(response){
            location.reload()
        }).catch(function(response){
        console.log('삭제 에러발생!')
    });
}

// 기본 결제 설정 버튼 클릭
function setDefalt(id){
    // 해당 id에 해당하는 주소 기본배송지로 update
    axios.request({
        method: "PUT",
        url: "/api/cardInfo_flag_update",
        headers: {'Content-type': 'application/json'},
        data: {
            data:{
                id: id,
                cardFlag: "ON"
            }
        }
    }).then(
    )

    // 기존 기본 배송지 flag OFF로 update
    axios.request({
        method: "PUT",
        url: "/api/cardInfo_flag_update",
        headers: {'Content-type': 'application/json'},
        data: {
            data:{
                id: $id,
                cardFlag: "OFF"
            }
        }
    }).then(
        location.reload()
    )
}




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