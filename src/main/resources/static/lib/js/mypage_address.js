

// 다음포스트 서비스
function sample6_execDaumPostcode() {
    new daum.Postcode({
        oncomplete: function(data) {

            // 각 주소의 노출 규칙에 따라 주소를 조합한다.
            // 내려오는 변수가 값이 없는 경우엔 공백('')값을 가지므로, 이를 참고하여 분기 한다.
            var addr = ''; // 주소 변수
            var extraAddr = ''; // 참고항목 변수

            //사용자가 선택한 주소 타입에 따라 해당 주소 값을 가져온다.
            if (data.userSelectedType === 'R') { // 사용자가 도로명 주소를 선택했을 경우
                addr = data.roadAddress;
            } else { // 사용자가 지번 주소를 선택했을 경우(J)
                addr = data.jibunAddress;
            }

            // 사용자가 선택한 주소가 도로명 타입일때 참고항목을 조합한다.
            if(data.userSelectedType === 'R'){
                // 법정동명이 있을 경우 추가한다. (법정리는 제외)
                // 법정동의 경우 마지막 문자가 "동/로/가"로 끝난다.
                if(data.bname !== '' && /[동|로|가]$/g.test(data.bname)){
                    extraAddr += data.bname;
                }
                // 건물명이 있고, 공동주택일 경우 추가한다.
                if(data.buildingName !== '' && data.apartment === 'Y'){
                    extraAddr += (extraAddr !== '' ? ', ' + data.buildingName : data.buildingName);
                }
                // 표시할 참고항목이 있을 경우, 괄호까지 추가한 최종 문자열을 만든다.
                if(extraAddr !== ''){
                    extraAddr = ' (' + extraAddr + ')';
                }
            } else { extraAddr = ''; }

            // 우편번호와 주소 정보를 해당 필드에 넣는다.
            document.getElementById('zipcode_input').value = data.zonecode;
            document.getElementById("address1_input").value = addr + extraAddr;
            document.getElementById("address1_input").setAttribute('validateresult','true');
            // 커서를 상세주소 필드로 이동한다.
            document.getElementById("address2_input").focus();
        }
    }).open();
}


// 유효성검사
// 이름 유효성 검사
document.querySelector('#name_input').addEventListener('input', e=>{
    filterByDebounce(e, strName=>{
        let errorMsg='';
        if(!validateName(strName)){
            errorMsg='올바른 이름을 입력해주세요. (2 - 50자)';
            document.querySelector('#name_input_box').className='input_box has_error';
            document.querySelector('#name_input').setAttribute('validateresult', false);
        } else {
            document.querySelector('#name_input_box').className='input_box fill';
            document.querySelector('#name_input').setAttribute('validateresult', true);
        }
        document.querySelector('#name_input_error').innerHTML=errorMsg;
    });
});

// 전화번호 유효성 검사
document.querySelector('#hp_input').addEventListener('input', e=>{
    filterByDebounce(e, strTell=>{
        let errorMsg='';
        if(!validateTell(strTell)){
            errorMsg="휴대폰 정확히 입력해주세요. ('-'제외 후 입력)";
            document.querySelector('#hp_input_box').className='input_box has_error';
            document.querySelector('#hp_input').setAttribute('validateresult', false);
        } else {
            document.querySelector('#hp_input_box').className='input_box fill';
            document.querySelector('#hp_input').setAttribute('validateresult', true);
        }
        document.querySelector('#hp_input_error').innerHTML=errorMsg;
    })
});

// 상세주소 유효성 검사
document.querySelector('#address2_input').addEventListener('input',function(e){
    if(!(this.value == '' || this.value == null)){
        this.setAttribute('validateresult',true);
    }
})


// input string
const name_input = document.querySelector('#name_input');
const hp_input = document.querySelector('#hp_input');
const address2_input = document.querySelector('#address2_input');
const in_essentialList = [name_input, hp_input, address2_input];

// 저장하기 제출
in_essentialList.forEach((element, i, array) => {
    element.addEventListener('input', e => {
        document.querySelector('.btn_save').className = 'btn btn_save solid disabled';
        document.querySelector('.btn_save').disable = true;
        if (element.getAttribute('validateresult') ?? false) {
            if ((array.reduce((before, after) => {
                return before && (after.getAttribute('validateresult') == "true")
            }, true))) {
                //맞음
                document.querySelector('.btn_save').className = 'btn btn_save solid';
                document.querySelector('.btn_save').disabled = false;
            }
        }
    });
});





// 엑스 버튼 클릭
$("#popCloseBtn").click(function(event){
    $("#name_input").val("");
    $("#hp_input").val("");
    $("#zipcode_input").val("");
    $("#address1_input").val("");
    $("#address2_input").val("");
    $("#input_button_check").prop("checked", false);
    $("#input_button_check").prop("disabled", false);
    $("#popupDiv").css("display","none");
    console.log('엑스버튼 클릭')
});

// 취소하기 버튼 클릭
$(".btn_delete").click(function(event){
    $("#name_input").val("");
    $("#hp_input").val("");
    $("#zipcode_input").val("");
    $("#address1_input").val("");
    $("#address2_input").val("");
    $("#input_button_check").prop("checked", false);
    $("#input_button_check").prop("disabled", false);
    $("#popupDiv").css("display","none");
    console.log('취소버튼 클릭')
});


// 새 배송지 추가 버튼 클릭
function addDelivary(){
    $("#popupDiv").css("display","block"); //팝업창 display block
    $("#edit_address_title").hide();
    $("#new_address_title").show();

    if(addressCount < 1){
        document.querySelector('#input_button_check').checked = true;
        document.querySelector('#input_button_check').addEventListener('click',()=>{
            alert('동록된 배송지가 없을 경우 기본배송지로 자동 등록됩니다.');
            document.querySelector('#input_button_check').checked = true;
        });
    }
// 저장하기 버튼
    $(".btn_save").click(function(event){
        registAddress();
    });
}

// 기본 배송지 수정 버튼 클릭
document.querySelector('#getAddress').addEventListener('click',()=>{
    console.log(document.querySelector('#getAddress').getAttribute('value'));
    getAddress(document.querySelector('#getAddress').getAttribute('value'));
})

document.querySelector('#deleteDefalt').addEventListener('click',()=>{
    console.log(document.querySelector('#deleteDefalt').getAttribute('value'));
    deleteAddress(document.querySelector('#deleteDefalt').getAttribute('value'));
})

// 수정하기 버튼 클릭 레이어 세팅
function modifyInfo(id) {
    $("#popupDiv").css("display", "block"); //팝업창 display block
    $("#edit_address_title").show();
    $("#new_address_title").hide();

    let hp, name, zipcode, detail1, detail2, customerId, flag;
    axios.get('/api/Address_detail/'+id, {

    }).then(function (response) {
        name = response.data.data.name;     // 수령자 이름
        hp = response.data.data.hp; // 수령자 전화번호
        zipcode = response.data.data.zipcode;   // 배송지 우편번호
        detail1 = response.data.data.detail1;    // 배송지 주소
        detail2 = response.data.data.detail2;   // 배송지 상세주소
        customerId = response.data.data.customerId;   // 고객 idx
        flag = response.data.data.flag; // 기본 배송지 flag

        document.querySelector('#name_input').value = name;
        document.querySelector('#hp_input').value = hp;
        document.querySelector('#zipcode_input').value = zipcode;
        document.querySelector('#address1_input').value = detail1;
        document.querySelector('#address2_input').value = detail2;
        if (flag == "ON") {
            document.querySelector('#input_button_check').checked = true;
        } else {
            document.querySelector('#input_button_check').checked = false;
        }

        in_essentialList.forEach((element, i, array) => {
            element.addEventListener('input', e => {
                document.querySelector('.btn_save').className = 'btn btn_save solid';
                document.querySelector('.btn_save').disabled = false;
                this.removeEventListener("click",arguments.callee);
            });
        });

        // 저장하기 버튼 클릭(업데이트 실행)
        $(".btn_save").click(function(event){
            registAddress();
        });
    });
}