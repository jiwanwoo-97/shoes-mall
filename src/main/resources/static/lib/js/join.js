// 체크 박스 선택
const checkboxAll = document.querySelectorAll('input[type="checkbox"]');

/*input string */
const email_input = document.querySelector('#email_input');
const password_input = document.querySelector('#password_input');
const tell_input = document.querySelector('#tell_input');

/*in_group1*/
const in_group1 = document.querySelector('#in_group1');
const in_agreement = document.querySelector('#in_agreement');
const in_privacy = document.querySelector('#in_privacy');
const in_group1List = [in_agreement, in_privacy];


/*in_group2*/
const in_group2 = document.querySelector('#in_group_2');
const in_allow_app = document.querySelector('#in_allow_app');
const in_allow_sms = document.querySelector('#in_allow_sms');
const in_allow_email = document.querySelector('#in_allow_email');
const in_group2List = [in_allow_app, in_allow_sms, in_allow_email];

/*가입하기 버튼을 위함 */
//클래스 이름 in_essentialValue
const in_essentialValueList = [email_input,password_input,tell_input,in_group1,in_agreement,in_privacy];
const btn_submitSignIn = document.querySelector('#btn_submitSignIn');

/*체크박스 그룹리스트 함수들 */
//리스트를 일제히 체크한다
const chkGroupList=(chkList)=>{
    chkList.forEach(element => {
        element.checked=true;
        element.setAttribute('validateresult',true);
    });
}

//리스트를 일제히 체크 해제한다
const resetGroupList=(chkList, callback)=>{
    chkList.forEach(element => {
        element.checked=false;
        element.setAttribute('validateresult',false);
    });
}

// 그룹 체크박스가 모두 체크되어있다면 헤더박스 체크
// 그룹 체크박스중 하나라도 체크가 해제되면 헤더박스 언체크
const setCheckboxListConfig=(element,groupList,groupHeader)=>{
    if(!(element.checked)){
        groupHeader.checked=false;
        groupHeader.setAttribute('validateresult', false);
    }
    if(groupList.reduce((before, after)=>{return (before&&after.checked);},true)){ //모두 체크되어있다면, in_group1 체크
        groupHeader.checked=true;
        groupHeader.setAttribute('validateresult', true);
    }
}


// 이메일 유효성 검사
document.querySelector('#email_input').addEventListener('input', e=>{
    filterByDebounce(e, strEmail=>{
        let errorMsg='';
        if(!validateEmail(strEmail)){
            errorMsg='이메일 주소를 정확히 입력해주세요.';
            document.querySelector('#email_input_box').className='input_box has_error';
            document.querySelector('#email_input').setAttribute('validateresult',false);
        } else {
            document.querySelector('#email_input_box').className='input_box fill';
            document.querySelector('#email_input').setAttribute('validateresult',true);
        }
        document.querySelector('#email_input_error').innerHTML=errorMsg;
    })
});

// 비밀번호 유효성 검사
document.querySelector('#password_input').addEventListener('input', e=>{
    let strPassword=e.target.value;
    let errorMsg='';
    if(!validatePassword(strPassword)){
        errorMsg='영문, 숫자, 특수문자를 조합해서 입력해주세요. (8-16자)';
        document.querySelector('#password_input_box').className='has_button input_box has_error';
        document.querySelector('#password_input').setAttribute('validateresult',false);
    } else {
        document.querySelector('#password_input_box').className='has_button input_box fill';
        document.querySelector('#password_input').setAttribute('validateresult',true);
    }
    document.querySelector('#password_input_error').innerHTML=errorMsg;
});

// 전화번호 유효성 검사
document.querySelector('#tell_input').addEventListener('input', e=>{
    filterByDebounce(e, strTell=>{
        let errorMsg='';
        if(!validateTell(strTell)){
            errorMsg='휴대폰 번호를 정확히 입력해주세요.';
            document.querySelector('#tell_input_box').className='input_box has_error';
            document.querySelector('#tell_input').setAttribute('validateresult',false);
        } else {
            document.querySelector('#tell_input_box').className='input_box fill';
            document.querySelector('#tell_input').setAttribute('validateresult',true);
        }
        document.querySelector('#tell_input_error').innerHTML=errorMsg;
    })
});

// 사이즈 팝업창
$("#size_layer_open").on("click", function() {
    $(".size_layer").css('display','block');
});
$(".btn_layer_close").on("click", function() {
    $(".size_layer").css('display','none');
});

// 사이즈 선택

$(document).on('click', '.size_item', function () {
    let index = $(".size_item").index(this);
    if ($(".size_item").has('.on')) {  // on 클래스가 존재하면 length 값은 1이상이 됨. -> true
        $(".size_item").children('a').removeClass("on");
    }
    this.querySelector('a').className += " on";
    document.querySelector('#size_submit_btn').className = 'btn solid medium on';
    document.querySelector('#size_submit_btn').disabled = false;
});

// input_area 에 사이즈 value 값으로 전달
$(document).on('click', '#size_submit_btn', function () {
    $(".size_layer").css('display', 'none');
    $("#input_shoesize").val(document.querySelector('.btn.outlinegrey.medium.on').text.trim());
});


//in_group1 헤더 checked -> in_group1List 같이 checked
in_group1.addEventListener('input',e=>{
    in_group1.setAttribute('validateresult', true)
    if(e.target.checked){
        chkGroupList(in_group1List);
    }else{
        resetGroupList(in_group1List);
    }
});
//in_group1List 하나라도 check해제시 헤더도 체크해제
in_group1List.forEach(element=>{
    element.addEventListener('input', element=>{
        setCheckboxListConfig(element,in_group1List,in_group1);
    })}
);
//in_group1List 각 checked 검사 후 validateresult 값 설정
in_group1List.forEach(element=>{
    element.addEventListener('input', ()=>{
        if(element.checked==true){
            element.setAttribute('validateresult', true);
        } else {
            element.setAttribute('validateresult', false);
        }
    })
});

//in_group2 헤더 적용
in_group2.addEventListener('input',e=>{
    if(e.target.checked){
        chkGroupList(in_group2List);
    }else{
        resetGroupList(in_group2List);
    }
});
//in_group2List 리스트 적용
in_group2List.forEach(element=>{
    element.addEventListener('input', element=>{
        setCheckboxListConfig(element,in_group2List,in_group2);
    })}
);

// 약관 체크박스 이미지 변경
checkboxAll.forEach(element=>{
    element.addEventListener('input', function(){
        for (let i = 0; i < checkboxAll.length; i++) {
            if(checkboxAll[i].checked){
                checkboxAll[i].parentNode.querySelector('img').setAttribute('src','/lib/img/checkbox_checked.png');
            } else {
                checkboxAll[i].parentNode.querySelector('img').setAttribute('src','/lib/img/checkbox_unchecked.png');
            }
        }
    })
})

// 회원가입 제출
//모든 아이들에게 이벤트 핸들러 부여
in_essentialValueList.forEach((element, i, array)=>{
    element.addEventListener('input',e=>{
        btn_submitSignIn.className='btn btn_join full solid disabled';//default는 아님
        if(element.getAttribute('validateresult')??false){
            if(result=(array.reduce((before,after)=>{return before&&(after.getAttribute('validateresult')=="true")},true))){
                //맞음
                btn_submitSignIn.className='btn btn_join full solid';
                btn_submitSignIn.disabled=null;
            }
        }
    });
});
