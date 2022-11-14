
// 실행

window.onload = function(){

    //로그인 이메일 유효성 검사
    document.querySelector('#email_input').addEventListener('input', e=>{
        filterByDebounce(e, strEmail=>{
            let errorMsg='';
            if(!validateEmail(strEmail)){
                errorMsg='이메일 주소를 정확히 입력해주세요.';
                document.querySelector('#email_input_box').className='has_button input_box has_error';
                document.querySelector('#login_btn').className='btn full solid disabled';
            } else {
                document.querySelector('#email_input_box').className='has_button input_box fill';
                if(document.querySelector('#password_input_box').classList.contains('fill')){
                    document.querySelector('#login_btn').className='btn full solid';
                    document.querySelector('#login_btn').disabled=false;
                } else {
                    document.querySelector('#login_btn').className='btn full solid disabled';
                }
            }
            document.querySelector('#email_input_error').innerHTML=errorMsg;
        })
    });

    // 로그인 비밀번호 유효성 검사
    document.querySelector('#password_input').addEventListener('input', e=>{
        filterByDebounce(e, strPassword=>{
            let errorMsg='';
            if(!validatePassword(strPassword)){
                errorMsg='영문, 숫자, 특수문자를 조합해서 입력해주세요. (8-16자)';
                document.querySelector('#password_input_box').className='has_button input_box has_error';
                document.querySelector('#login_btn').className='btn full solid disabled';
            } else {
                document.querySelector('#password_input_box').className='has_button input_box fill';
                if(document.querySelector('#email_input_box').classList.contains('fill')){
                    document.querySelector('#login_btn').className='btn full solid';
                    document.querySelector('#login_btn').disabled=false;
                } else {
                    document.querySelector('#login_btn').className='btn full solid disabled';
                }
            }
            document.querySelector('#password_input_error').innerHTML=errorMsg;
        })
    });

    document.querySelector('.btn_login_naver').addEventListener('click',()=>{
        $("#naver_id_login_anchor").click();
    })

}