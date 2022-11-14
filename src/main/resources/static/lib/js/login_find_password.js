
//이메일 유효성 검사
document.querySelector('#email_input').addEventListener('input', e=>{
    filterByDebounce(e, strEmail=>{
        let errorMsg='';
        if(!validateEmail(strEmail)){
            errorMsg='이메일 주소를 정확히 입력해주세요.';
            document.querySelector('#email_input_box').className='input_box has_error';
            document.querySelector('#find_btn').className='btn full solid disabled';
        } else {
            document.querySelector('#email_input_box').className='input_box fill';
            if(document.querySelector('#tell_input_box').classList.contains('fill')){
                document.querySelector('#find_btn').className='btn full solid';
                document.querySelector('#find_btn').disabled=false;
            } else {
                document.querySelector('#find_btn').className='btn full solid disabled';
            }
        }
        document.querySelector('#email_input_error').innerHTML=errorMsg;
    })
});

//전화번호 유효성 검사
document.querySelector('#tell_input').addEventListener('input', e=>{
    filterByDebounce(e, strTell=>{
        let errorMsg='';
        if(!validateTell(strTell)){
            errorMsg='휴대폰 번호를 정확히 입력해주세요.';
            document.querySelector('#tell_input_box').className='input_box has_error';
            document.querySelector('#find_btn').className='btn full solid disabled';
        } else {
            document.querySelector('#tell_input_box').className='input_box fill';
            if(document.querySelector('#email_input_box').classList.contains('fill')){
                document.querySelector('#find_btn').className='btn full solid';
                document.querySelector('#find_btn').disabled=false;
            } else {
                document.querySelector('#find_btn').className='btn full solid disabled';
            }
        }
        document.querySelector('#tell_input_error').innerHTML=errorMsg;
    })
});

// 임시 비밀번호 문자로 보내기
$("#find_btn").on("click", function() {
    let hp = $("#tell_input").val();
    let email = $("#email_input").val();

    axios.request({
        method:"GET",
        url:"/api/customer_searchpw/"+email+"/"+hp
    }).then(
        alert('메일로 임시비밀번호를 발송했습니다.'),
            window.location = "/login"
    )
});
