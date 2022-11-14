// 사진 변경 버튼 클릭 이벤트
$("#upImage").on('click',function(e){
    e.preventDefault();
    $('#imageFileInput').click();
});

const fileData = new FormData();
const imageFileInput = document.querySelector("#imageFileInput");
imageFileInput.addEventListener("change", (e) => {
    // 파일경로 + 파일명
    image = '/lib/img/'+imageFileInput.value.replace(/C:\\fakepath\\/i,'');
    update();

    // 서버로 처리
    // for (let i = 0; i < imageFileInput.files.length; i++) {
    //     fileData.append('uploadfile'. imageFileInput.files[i]);
    // }
    // console.log(fileData);
    //
    // var xhr = new XMLHttpRequest();
    // xhr.open('PATCH', '/api/test_upload/', true);
    // xhr.setRequestHeader("Content-Type", "multipart/formed-data");
    // xhr.onreadystatechange = function() { // Call a function when the state changes.
    //     if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
    //         alert('서버로 데이터 전송 완료');
    //     }
    //     else {
    //         alert('Error');
    //     }
    // };
    // xhr.send(fileData);

});

// 사진 삭제 버튼 클릭 이벤트
document.querySelector('#delImage').addEventListener('click',()=>{
    image = '';
    update();
});



// 이메일 변경 버튼 클릭시 modify 출력
$("#openEmailBtn").click(function (event) {
    $("#modify_email").show();
    $("#unit_email").hide();
});

// 취소하기
$("#closeEmailBtn").click(function(event){
    $("#unit_email").show();
    $("#email_input").val("");
    $("#modify_email").hide();
});

// 메일 변경 버튼
$("#sendEmailBtn").click(function(event){
    email = $("#email_input").val();
    update();
});

// 이메일 유효성 검사
document.querySelector('#email_input').addEventListener('input', e=>{
    filterByDebounce(e, strEmail=>{
        let errorMsg='';
        if(!validateEmail(strEmail)){
            errorMsg='이메일 주소를 정확히 입력해주세요.';
            document.querySelector('#email_input_box').className='input_box has_error';
            document.querySelector('#sendEmailBtn').className='btn solid medium disabled';
            document.querySelector('#sendEmailBtn').disabled=true;
        } else {
            document.querySelector('#email_input_box').className='input_box fill';
            document.querySelector('#sendEmailBtn').className='btn solid medium';
            document.querySelector('#sendEmailBtn').disabled=false;
        }
        document.querySelector('#email_input_error').innerHTML=errorMsg;
    })
});



// 비밀번호 변경 버튼 클릭시 modify 출력
$("#openPasswordBtn").click(function(event){
    $("#modify_password").show();
    $("#unit_password").hide();
});

// 취소하기
$("#closePasswordBtn").click(function(event){
    $("#unit_password").show();
    $("#password_input1").val("");
    $("#password_input2").val("");
    $("#modify_password").hide();
});

// 이전 비밀번호 확인 버튼
let isCorrect=false;  // 비밀번호 일치여부 확인 위함
userpw = $("#password_input2").val();

document.getElementById('confirmPasswordBtn').addEventListener('click',()=>{
    axios.get('/api/customer_pwcheck/'+sessionId+'/'+$("#password_input1").val(), {

    }).then(function (response){
        isCorrect = response.data;
        if(isCorrect) {
            $("#password_input2").focus();
            document.querySelector('#confirmPasswordBtn').className='btn solid small confirmed';
        }else{
            $("#password_input1").val("");
            alert('이전 비밀번호와 일치하지 않습니다.');
        }
    }).then(function (err){

    });
})

// 저장하기
document.getElementById('sendPasswordBtn').addEventListener('click',()=>{
    if(isCorrect){
        newuserpw = document.getElementById('password_input2').value;
        update();       // 업데이트 axios 실행
    }else{
        alert('이전 비밀번호 확인버튼을 눌러주세요.');
    }
})

// 이전 비밀번호 유효성 검사
document.querySelector('#password_input1').addEventListener('input', e=>{
    filterByDebounce(e, strPassword=>{
        let errorMsg='';
        if(!validatePassword(strPassword)){
            errorMsg='영문, 숫자, 특수문자를 조합해서 입력해주세요. (8-16자)';
            document.querySelector('#password_input_box1').className='input_box has_error';
            document.querySelector('#sendPasswordBtn').className='btn solid medium disabled';
            document.querySelector('#sendPasswordBtn').disabled=true;
            document.querySelector('#confirmPasswordBtn').className='btn solid small disabled';
            document.querySelector('#confirmPasswordBtn').disabled=true;
        } else {
            document.querySelector('#password_input_box1').className='input_box fill';
            document.querySelector('#confirmPasswordBtn').className='btn solid small';
            document.querySelector('#confirmPasswordBtn').disabled=false;
            // if(document.querySelector('#password_input_box2').classList.contains('fill')){
            //     document.querySelector('#sendPasswordBtn').className='btn solid medium';
            //     document.querySelector('#sendPasswordBtn').disabled=false;
            // } else {
            //     document.querySelector('#sendPasswordBtn').className='btn solid medium disabled';
            //     document.querySelector('#sendPasswordBtn').disabled=true;
            // }
        }
        document.querySelector('#password_input_error1').innerHTML=errorMsg;
    });
});

// 변경 비밀번호 유효성 검사
document.querySelector('#password_input2').addEventListener('input', e=>{
    filterByDebounce(e, strPassword=>{
        let errorMsg='';
        if(!validatePassword(strPassword)){
            errorMsg='영문, 숫자, 특수문자를 조합해서 입력해주세요. (8-16자)';
            document.querySelector('#password_input_box2').className='input_box has_error';
            document.querySelector('#sendPasswordBtn').className='btn solid medium disabled';
            document.querySelector('#sendPasswordBtn').disabled=true;
        } else {
            document.querySelector('#password_input_box2').className='has_button input_box fill';
            if(document.querySelector('#confirmPasswordBtn').classList.contains('confirmed')){
                document.querySelector('#sendPasswordBtn').className='btn solid medium';
                document.querySelector('#sendPasswordBtn').disabled=false;
            } else {
                document.querySelector('#sendPasswordBtn').className='btn solid medium disabled';
                document.querySelector('#sendPasswordBtn').disabled=true;
            }
        }
        document.querySelector('#password_input_error2').innerHTML=errorMsg;
    });
});



// 이름 modify 출력
$("#openNamedBtn").click(function(event){
    $("#modify_name").css("display", "block");
    $("#unit_name").hide();
});

// 취소하기
$("#closeNameBtn").click(function(event){
    $("#unit_name").show();
    $("#name_input").val("");
    $("#modify_name").hide();
});

// 저장하기
document.getElementById('sendNameBtn').addEventListener('click',()=>{
    userid = $("#name_input").val();
    update();
});

// 이름 유효성 검사
document.querySelector('#name_input').addEventListener('input', e=>{
    filterByDebounce(e, strName=>{
        let errorMsg='';
        if(!validateName(strName)){
            errorMsg='올바른 이름을 입력해주세요. (2 - 50자)';
            document.querySelector('#name_input_box').className='input_box has_error';
            document.querySelector('#sendNameBtn').className='btn solid medium disabled';
            document.querySelector('#sendNameBtn').disabled=true;
        } else {
            document.querySelector('#name_input_box').className='input_box fill';
            document.querySelector('#sendNameBtn').className='btn solid medium';
            document.querySelector('#sendNameBtn').disabled=false;
        }
        document.querySelector('#name_input_error').innerHTML=errorMsg;
    });
});



// 휴대폰 번호 modify 출력
$("#openHpBtn").click(function(event){
    $("#modify_hp").css("display", "block");
    $("#unit_hp").hide();
});

// 취소하기
$("#closeHpBtn").click(function(event){
    $("#unit_hp").show();
    $("#hp_input").val("");
    $("#modify_hp").hide();
});

// 저장하기
document.querySelector('#sendHpBtn').addEventListener('click',()=>{
    hp = $("#hp_input").val();
    update();
})

// 전화번호 유효성 검사
document.querySelector('#hp_input').addEventListener('input', e=>{
    filterByDebounce(e, strTell=>{
        let errorMsg='';
        if(!validateTell(strTell)){
            errorMsg="휴대폰 번호를 정확히 입력해주세요.('-'제외 후 입력)";
            document.querySelector('#hp_input_box').className='input_box has_error';
            document.querySelector('#sendHpBtn').className='btn solid medium disabled';
            document.querySelector('#sendHpBtn').disabled=true;
        } else {
            document.querySelector('#hp_input_box').className='input_box fill';
            document.querySelector('#sendHpBtn').className='btn solid medium';
            document.querySelector('#sendHpBtn').disabled=false;
        }
        document.querySelector('#hp_input_error').innerHTML=errorMsg;
    })
});


// 사이즈 팝업창 열기
$("#size_layer_open").on("click", function() {
    $(".size_layer").css('display','block');
    const sheo = $("#show_shoesize").text();
    const layerVal = document.querySelectorAll('.info_txt');
    document.querySelector('#size_submit_btn').className='btn solid medium on';
    layerVal.forEach((element, index)=>{
        if(element.innerText == sheo){
            element.parentElement.className += ' on';
        }
    });
});
// 사이즈 팝업 닫기
$(".btn_layer_close").on("click", function() {
    $(".size_layer").css('display','none');
});

// 사이즈 선택
$(document).on('click', '.size_item', function(){
    // let index = $(".size_item").index(this);
    if($(".size_item").has('.on')){  // on 클래스가 존재하면 length 값은 1이상이 됨. -> true
        $(".size_item").children('a').removeClass("on");
    }
    this.querySelector('a').className+=" on";
});

// text에 선택 사이즈 값 전달
$(document).on('click', '#size_submit_btn', function(){
    $(".size_layer").css('display', 'none');
    $("#show_shoesize").text(document.querySelector('.btn.outlinegrey.medium.on').text.trim());
    console.log(document.querySelector('.btn.outlinegrey.medium.on').text.trim());
    shoesize = document.querySelector('.btn.outlinegrey.medium.on').text.trim();
    update();
});

const smsRadioList = document.getElementsByName('message_radio');
smsRadioList.forEach(e=>{
    e.addEventListener('change', function(){
        smsAllow = $('input[name="message_radio"]:checked').val();
        console.log(smsAllow);
        update();
    });
});

const emailRadioList = document.getElementsByName('email_radio');
emailRadioList.forEach(e=>{
    e.addEventListener('change', function(){
        emailAllow = $('input[name="email_radio"]:checked').val();
        console.log(emailAllow);
        update();
    });
});