// 기본 배송지로 설정되어있는 주소 id값
let $id;
let sessionId = sessionStorage.getItem('userid');
// axios 데이터 읽어오기
let addressCount = 0;   // data가 없으면 0, 있을 경우 숫자만큼 증가
const bank_select = document.querySelector('#bank_select');
const account_input = document.querySelector('#account_input');
const name_input2 = document.querySelector('#name_input2');
const in_essentialList2 = [bank_select, account_input, name_input2];
const btn_save_Acc = document.querySelector('.btn_save_Acc')
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

// 저장하기 제출 활성화
in_essentialList.forEach((element, i, array) => {
    element.addEventListener('input', e => {
        document.querySelector('.btn_save').className = 'btn btn_save solid disabled';
        document.querySelector('.btn_save').disable = true;
        if (element.getAttribute('validateresult') ?? false) {
            if (result = (array.reduce((before, after) => {
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
    $(".btn_save").prop("disabled", false);
    $("#popupDiv").css("display","none");
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
    $(".btn_save").prop("disabled", false);
    $("#popupDiv").css("display","none");
});


//계좌 등록 엑스 버튼 클릭
$("#popCloseAccount").click(function(event){
    $("#name_input2").val("");
    $("#bank_select").val("");
    $("#account_input").val("");
    $(".btn_save_Acc").prop("disabled", false);
    $("#popAccount").css("display","none");
});
//계좌 등록 취소하기 버튼 클릭
$(".btn_delete").click(function(event){
    $("#name_input2").val("");
    $("#bank_select").val("");
    $("#account_input").val("");
    $(".btn_save_Acc").prop("disabled", false);
    $("#popAccount").css("display","none");
});


// 기본배송지 설정하기 버튼 클릭
function setDefalt(id){
    // 해당 id에 해당하는 주소 기본배송지로 update
    axios.request({
        method: "PUT",
        url: "/api/Address_flag_update",
        headers: {'Content-type': 'application/json'},
        data: {
            data:{
                id: id,
                flag: "ON"
            }
        }
    }).then(
        location.reload()
    )

    // 기존 기본 배송지 flag OFF로 update
    updateDefaltOff($id);
}

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
        regist();
    });
}

//휴대폰번호 유효성 검사
function validateTell(strTell){
    const reg_tell = /^01(?:0|1|[6-9])(?:\d{3}|\d{4})\d{4}$/;
    if(!reg_tell.test(''+strTell)){
        return false;
    }
    return true;
}

// 이름 유효성검사
function validateName(strName){
    const reg_name =  /^[가-힣a-zA-Z]+$/;
    if(!reg_name.test(''+strName)){
        return false;
    }
    if(strName.length<2){
        return false;
    }
    return true;
}

//디바운스
let timer=false;//최초 false
const filterByDebounce=(e, callback)=> {
    if (timer) {
        clearTimeout(timer);
    }
    timer = setTimeout(function () {
        callback('' + e.target.value);
    }, 200); //200ms 이후 반응(디바운스)
}

function regist() {
    const name = document.querySelector('#name_input').value;
    const hp = document.querySelector('#hp_input').value;
    const zipcode = document.querySelector('#zipcode_input').value;
    const detail1 = document.querySelector('#address1_input').value;
    const detail2 = document.querySelector('#address2_input').value;
    let input_button_check = document.querySelector('#input_button_check').checked;

    let delivery_flag;
    if(input_button_check){
        delivery_flag = 'ON';
        if($id>0){
            updateDefaltOff($id);
        }
    }else{
        delivery_flag = "OFF";
    }

    axios.request({
        method: "POST",
        url: "/api/Address_register",
        headers: {'Content-type': 'application/json'},
        data: {
            data:{
                name: name,
                hp: hp,
                zipcode: zipcode,
                detail1: detail1,
                detail2: detail2,
                flag: delivery_flag,
                customerId: sessionId
            }
        }
    }).then(
        alert('저장되었습니다.'),
        location.reload()
    )
}

function pop_sell_address_down(){
    const pop_sell_address_down = document.getElementsByClassName('sell_address')[0];
    pop_sell_address_down.style.display = "none"
    const body = document.querySelector('body');
    body.style.overflow = 'unset'
}

function pop_sell_address(){
    const address = document.getElementsByClassName('sell_address')[0];
    address.style.display = "flex";
    const body = document.querySelector('body');
    body.style.overflow = 'hidden'
}

// 새 배송지 추가 버튼 클릭
function addAccount(){
    $("#popAccount").css("display","block"); //팝업창 display block

// 저장하기 버튼
    $(".btn_save_Acc").click(function(event){
        const bank_Acc = bank_select.value;
        const accountNumber_Acc = account_input.value;
        const name_Acc = name_input2.value;

        axios.request({
            method: "POST",
            url: "/api/account_register",
            headers: {'Content-type': 'application/json'},
            data: {
                data:{
                    bank: bank_Acc,
                    accountNumber: accountNumber_Acc,
                    name: name_Acc,
                    customerId: sessionId
                }
            }
        }).then(
            location.reload()
        ).catch(function(err){
            console.log(err);
        });
    });
}


// 은행명 select
const selected_txt = document.querySelector('#selected_txt');
    bank_select.addEventListener('input', function(){
    bank_select.setAttribute('validateresult',true);
    selected_txt.firstElementChild.innerHTML = this.value;
});

// 계좌번호 유효성 검사
document.querySelector('#account_input').addEventListener('input',(e)=>{
    account_input.value = account_input.value.replaceAll(/\D/g, "");
    filterByDebounce(e, strAccount=>{
        let errorMsg='';
        if(6<strAccount.length && strAccount.length<16){
            document.querySelector('#account_input_box').className='input_box fill';
            document.querySelector('#account_input').setAttribute('validateresult', true);
        } else {
            document.querySelector('#account_input_box').className='input_box has_error';
            document.querySelector('#account_input').setAttribute('validateresult', false);
            errorMsg = '올바른 계좌번호를 입력해주세요.(\'-\'제외)';
        }
        document.querySelector('#account_input_error').innerHTML=errorMsg;

    });
});

// 이름 유효성 검사
document.querySelector('#name_input2').addEventListener('input', e=>{
    filterByDebounce(e, strName=>{
        let errorMsg='';
        if(!validateName(strName)){
            errorMsg='올바른 이름을 입력해주세요. (2 - 50자)';
            document.querySelector('#name_input_box2').className='input_box has_error';
            name_input2.setAttribute('validateresult', false);
        } else {
            document.querySelector('#name_input_box2').className='input_box fill';
            name_input2.setAttribute('validateresult', true);
        }
        document.querySelector('#name_input_error2').innerHTML=errorMsg;
    });
});

// 저장하기 제출
in_essentialList2.forEach((element, i, array) => {
    element.addEventListener('input', e => {
        btn_save_Acc.className = 'btn btn_save_Acc solid medium disabled';
        btn_save_Acc.disabled = true;
        if (element.getAttribute('validateresult') ?? false) {
            if (result = (array.reduce((before, after) => {
                return before && (after.getAttribute('validateresult') == "true")
            }, true))) {
                //맞음
                btn_save_Acc.className = 'btn btn_save_Acc solid medium';
                btn_save_Acc.disabled = false;
            }
        }
    });
});
