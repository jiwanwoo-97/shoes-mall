
// input string
const bank_select = document.querySelector('#bank_select');
const account_input = document.querySelector('#account_input');
const name_input = document.querySelector('#name_input');
const in_essentialList = [bank_select, account_input, name_input];
const btn_save = document.querySelector('.btn_save')


// acoount 페이지 axios 데이터 읽어오기
let accountId; // data가 있으면 1이상
axios.get('/api/account_detail/'+sessionId,{

}).then(function(response){
    accountId = response.data.data.id;
    document.querySelector('#account_input').value = response.data.data.accountNumber;
    document.querySelector('#bank_select').value = response.data.data.bank;
    document.querySelector('#selected_txt').firstElementChild.innerHTML = response.data.data.bank;
    document.querySelector('#name_input').value = response.data.data.name;

    // 데이터 읽어올 경우 버튼 활성화 & 유효성true
    btn_save.className = 'btn btn_save solid medium';
    btn_save.disabled = false;
    bank_select.setAttribute('validateresult', true);
    account_input.setAttribute('validateresult', true);
    name_input.setAttribute('validateresult', true);
}).catch(function(err){
    console.log(err);
});

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
document.querySelector('#name_input').addEventListener('input', e=>{
    filterByDebounce(e, strName=>{
        let errorMsg='';
        if(!validateName(strName)){
            errorMsg='올바른 이름을 입력해주세요. (2 - 50자)';
            document.querySelector('#name_input_box').className='input_box has_error';
            name_input.setAttribute('validateresult', false);
        } else {
            document.querySelector('#name_input_box').className='input_box fill';
            name_input.setAttribute('validateresult', true);
        }
        document.querySelector('#name_input_error').innerHTML=errorMsg;
    });
});

// 저장하기 제출
in_essentialList.forEach((element, i, array) => {
    element.addEventListener('input', e => {
        btn_save.className = 'btn btn_save solid medium disabled';
        btn_save.disabled = true;
        if (element.getAttribute('validateresult') ?? false) {
            if (result = (array.reduce((before, after) => {
                return before && (after.getAttribute('validateresult') == "true")
            }, true))) {
                //맞음
                btn_save.className = 'btn btn_save solid medium';
                btn_save.disabled = false;
            }
        }
    });
});

// 저장하기 버튼 클릭 regist, update
btn_save.addEventListener('click', ()=>{
    if(accountId>0){ // 졔좌 업데이트
        const bank = bank_select.value;
        const accountNumber = account_input.value;
        const name = name_input.value;

        axios.request({
            method: "PUT",
            url: "/api/account_update",
            headers: {'Content-type': 'application/json'},
            data: {
                data:{
                    id:accountId,
                    bank: bank,
                    accountNumber: accountNumber,
                    name: name
                }
            }
        }).then(
            location.reload()
        )
    }else{  // 새 계좌 등록
        const bank = bank_select.value;
        const accountNumber = account_input.value;
        const name = name_input.value;

        axios.request({
            method: "POST",
            url: "/api/account_register",
            headers: {'Content-type': 'application/json'},
            data: {
                data:{
                    bank: bank,
                    accountNumber: accountNumber,
                    name: name,
                    customerId: sessionId
                }
            }
        }).then(
            location.reload()
        ).catch(function(err){
            console.log(err);
        });
    }
});
