// 변수 선언부

// 현재 시각
var today = new Date();
var year = today.getFullYear();
var month = ('0' + (today.getMonth() + 1)).slice(-2);
var day = ('0' + today.getDate()).slice(-2);
var currentDateStr = year + '-' + month  + '-' + day;


// 함수 선언부

// x달 전 계산 함수 출력 : yyyy-mm-dd
function calcDate(month){
    var today = new Date();
    today.setMonth(today.getMonth() - month);
    var year = today.getFullYear();
    var month = ('0' + (today.getMonth() + 1)).slice(-2);
    var day = ('0' + today.getDate()).slice(-2);
    var currentDateStr = year + '-' + month  + '-' + day;

    return currentDateStr;
}

// x달 계산 함수 출력 : yyyy년 mm월
function calcMonth(month){
    var today = new Date();
    today.setMonth(today.getMonth() - month);
    var year = today.getFullYear();
    var month = ('0' + (today.getMonth() + 1)).slice(-2);
    today.setDate(0);   // 해당 달의 마지막 일자
    var day = ('0' + today.getDate()).slice(-2);
    var currentDateStr = year + '년 ' + month  + '월';

    return currentDateStr;
}

// Date 객체 yyyy/mm/dd 포맷
function dateFormat(date) {
    let month = date.getMonth() + 1;
    let day = date.getDate();
    month = month>=10 ? month : '0'+month;
    day = day>=10 ? day : '0'+day;
    return  date.getFullYear() + '/' + month + '/' + day;
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

//이메일 유효성검사
function validateEmail(strEmail){
    const reg_email =/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;
    if(!reg_email.test(''+strEmail)){
        return false;
    }
    return true;
}

//비밀번호 유효성 검사
function validatePassword(strPassword){
    const reg_password = /^.*(?=^.{8,16}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/;
    if(!reg_password.test(''+strPassword)){
        return false;
    }
    return true;
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
    return true;
}

// 스타일 계정 아이디 유효성검사
function validateId(strId){
    const reg_id = /^(?=.*[a-zA-Z0-9_.]).{5,25}$/;
    if(!reg_id.test(''+strId)){
        return false;
    }
    return true;
}
