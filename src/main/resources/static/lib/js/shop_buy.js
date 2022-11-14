function pop_down() {
    const pop_inspecion_down = document.getElementsByClassName('inspecion')[0];
    pop_inspecion_down.style.display = "none"
    const pop_policy_down = document.getElementsByClassName('policy')[0];
    pop_policy_down.style.display = "none"
    const pop_commu_down = document.getElementsByClassName('commu')[0];
    pop_commu_down.style.display = "none"
    const pop_penalty_down = document.getElementsByClassName('penalty')[0];
    pop_penalty_down.style.display = "none"
    const body = document.querySelector('body');
    body.style.overflow = 'unset'

}

function pop() {
    const popup = document.getElementsByClassName('down_size')[0];
    popup.style.display = "block";
    const body = document.querySelector('body');
    body.style.overflow = 'hidden'
}

function pop_inspecion() {
    const inspecion = document.getElementsByClassName('inspecion')[0];
    inspecion.style.display = "flex";
    const body = document.querySelector('body');
    body.style.overflow = 'hidden'
}


function pop_penalty() {
    const penalty = document.getElementsByClassName('penalty')[0];
    penalty.style.display = "flex";
    const body = document.querySelector('body');
    body.style.overflow = 'hidden'
}

function pop_commu() {
    const commu = document.getElementsByClassName('commu')[0];
    commu.style.display = "flex";
    const body = document.querySelector('body');
    body.style.overflow = 'hidden'
}

function pop_policy() {
    const commu = document.getElementsByClassName('policy')[0];
    commu.style.display = "flex";
    const body = document.querySelector('body');
    body.style.overflow = 'hidden'
}

const inspecionText = document.querySelectorAll('.inspecion_text');




/*주소 변경*/
function closeAddressPopup() {
    // const popup = document.querySelector('#bid_section.change');
    // popup.classList.add('hide');
    $(document).on('click', '.btn_edit', function pro_like() {
        let index = $(".btn_edit").index(this);
        const popup = document.getElementsByClassName('bid_section')[1];
        popup.style.display = "none";
        const popup2 = document.getElementsByClassName('change_address')[0];
        popup2.style.display = "block";
    });
}

function showleft(){
    $(document).on('click', '.item_link',
        function change_right() {
            let index = $(".item_link").index(this);
            const popup = document.getElementsByClassName('tab_content')[1];
            popup.style.display = "none";
            const popup2 = document.getElementsByClassName('tab_content')[0];
            popup2.style.display = "block";
            $(".tab_list.v1").show();
            $(".tab_list.v2").hide();
        });
}

function showright(){
    $(document).on('click', '.item_link',
        function change_right() {
            let index = $(".item_link").index(this);
            const popup = document.getElementsByClassName('tab_content')[0];
            popup.style.display = "none";
            const popup2 = document.getElementsByClassName('tab_content')[1];
            popup2.style.display = "block";
            $(".tab_list.v1").hide();
            $(".tab_list.v2").show();
            // $('footer').css('margin-top', '10rem');
            $('.container_buy .content').css('height', '150rem');
        });
}

function selectdeadline(){
    document.getElementById("day1").style.border("1px solid black");
}

/*포인트인포*/
function pointinfopop(multipleFilter) {
    const popup = document.querySelector('#pointinfopop');

    if (multipleFilter) {
        popup.classList.add('multiple-filter');
    } else {
        popup.classList.remove('multiple-filter');
    }
    popup.classList.remove('hide');
}

function closeinfoPopup() {
    const popup = document.querySelector('#pointinfopop');
    popup.classList.add('hide');
}


/*포인트유즈*/
function showPopup(multipleFilter) {
    const popup = document.querySelector('#pointusepop');
    if (multipleFilter) {
        popup.classList.add('multiple-filter');
    } else {
        popup.classList.remove('multiple-filter');
    }
    popup.classList.remove('hide');
}

function closePopup() {
    const popup = document.querySelector('#pointusepop');
    popup.classList.add('hide');
}


/*즉시구매버튼 클릭 후 변환*/
function buynow() {
    $(".instant_group.part1").hide();
    $(".instant_group.part2").show();
    $(".bid_section.deadline1").hide();
    in_amount.setAttribute('value', max_amount);  // input_amount value 값 최고금액으로 변경
    in_amount.setAttribute('validateresult', true);  // input_amount value 값 최고금액으로 변경

}

function buyafter() {
    $(".instant_group.part1").show();
    $(".instant_group.part2").hide();
    $(".bid_section.deadline1").show();
    in_amount.setAttribute('value', '');  // input_amount value 값 최고금액으로 변경
    in_amount.setAttribute('validateresult', false);  // input_amount value 값 최고금액으로 변경
}

function usepoint(){
    const popup = document.querySelector('#pointusepop');
    popup.classList.add('hide');
    $('.btn_solid:contains("사용 하기")').text("취소");
    $('.pointshow').toggle();
}


/******** 정수니가 한곳 ㅇ_< ********/

// 변수수선언 부분

// 입찰가격입력 input
const in_amount = document.querySelector('.input_amount');
const price_now = document.querySelector('.price_now');
const price_warning = document.querySelector('.price_warning');

// 총 결제 금액
const total_price = document.querySelector('#total_price');

// 즉시 구매가(나중에 DB에서 불러올 것으로 수정)
let max_amount = document.querySelector('#max_amount').innerHTML;
max_amount = parseInt(minusComma(max_amount.substr(0, max_amount.length-1)));

// 콤마 삭제 후 저장할 변수
let inAmountValue = 0;

// 마감 기한
const deadline = document.getElementsByClassName('deadline');
const deadline_txt = document.querySelector('.deadline_txt');

// 마감기한 버튼 일수
let deadlineValueList = [1, 3, 7, 30, 60];

// 구매 버튼
const submitButton = document.querySelector('.btn_full_solid');



// 함수선언 부분

// 숫자외에 입력받지 못하게
function checkInputNum(){
    if ((event.keyCode < 48) || (event.keyCode > 57)){
        event.returnValue = false;
    }
}

//천단위 콤마 생성
function addComma(data) {
    return data.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

//천단위 콤마 제거
function minusComma(data){
    return data.replace(/[^\d]+/g, "");
}

// 천단위 이하 금액 000으로 변경
function replaceAmount (data){
    if(data.length <= 3){
        data = '';
    } else{
        data = data.substr(0, data.length-3) + "000";
    }
    return data;
}

// 3만원 이하 입력시 에러메세지


// 마감 기한 날짜 계산
function expiredDate(data){
    let today = new Date();
    today.setDate(today.getDate() + data);
    let year = today.getFullYear();
    let month = today.getMonth() + 1;
    let date = today.getDate();
    let todayStr = `${year}/${month >= 10 ? month : '0' + month}/${date >= 10 ? date : '0' + date}`;
    return todayStr;
}

// 마감기한 초기 셋팅(30일)
function setExpire(){
    let is_active = $(".is_active").text();
    let is_active_value = parseInt(is_active.substr(0, is_active.length-1));
    deadline_txt.innerHTML = is_active +' ('+ expiredDate(is_active_value) + ' 마감)';
}

// 에이젝스 즉시구매이동
function movePage(navigator) {
    var pageUrl = $(navigator).attr("url");
    if (pageUrl !== location.pathname) {
        history.pushState({ path: pageUrl }, null, pageUrl);
        var popStateEvent = new PopStateEvent('popstate', { state: null });
        dispatchEvent(popStateEvent); // event 발생시키기
    }
}

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
            document.getElementById('sample6_postcode').value = data.zonecode;
            document.getElementById("sample6_address").value = addr + extraAddr;
            // 커서를 상세주소 필드로 이동한다.
            document.getElementById("sample6_detailAddress").focus();
        }
    }).open();
}


window.onload = function () {
// 헤더 검색창
    var btn_search1 = document.getElementById("hb_no_text");

    var btn_close = document.getElementsByClassName("btn_close").item(0);
    var layer_search = document.getElementsByClassName("layer_search").item(0);

// 헤더 최근 검색어 삭제
    var btn_delete = document.getElementsByClassName("btn_delete").item(0);
    var search_list = document.getElementsByClassName("search_list").item(0);
    var recent_box = document.getElementsByClassName("recent_box").item(0);

// 헤더 검색 창 열고 닫기
    btn_search1.onclick = function () {
        if (layer_search.style.display == 'none') {
            layer_search.style.display = 'block';
        } else {
            layer_search.style.display = 'none';
        }
    }

    btn_close.onclick = function () {
        if (layer_search.style.display == 'none') {
            layer_search.style.display = 'block';
        } else {
            layer_search.style.display = 'none';
        }
    }

// 헤더 최근 검색어 삭제
    btn_delete.onclick = function () {
        while (search_list.hasChildNodes()) {
            search_list.removeChild(search_list.firstChild);
        }
        recent_box.style.display = 'none';
    }

// 검색창 텍스트 입력 실시간 감지
    $(".input_search").on("propertychange change keyup paste input", function () {
        $(".btn_search_delete").css('display', 'inline');
        $(".recent_wrap").css('display', 'none');
        $(".suggest_wrap").css('display', 'block');
    });

// 검색창 텍스트 지우기 버튼 클릭 이벤트
    $(".btn_search_delete").on("click", function () {
        $(".input_search").val('');
        $(".btn_search_delete").css('display', 'none');
        $(".recent_wrap").css('display', 'block');
        $(".suggest_wrap").css('display', 'none');
    });


// navigation 열기 / 닫기
    $("#hb_mo_text").on("click", function () {
        $(".navigation_wrap").removeClass("close");
        $(".navigation_wrap").addClass("open");

    });
    $(".btn_nav_close").on("click", function () {
        $(".navigation_wrap").removeClass("open");
        $(".navigation_wrap").addClass("close");
    });

// 체크 박스 선택
    const checkboxAll = document.querySelectorAll('.polict_li');
// 하나만 선택
    for (let i = 0; i < checkboxAll.length; i++) {
        checkboxAll[i].addEventListener('click', function () {
            if (this.querySelector('.pop_policy_body').style.display == 'none') {
                this.querySelector('.pop_policy_body').style.display = 'block';
                this.querySelector('.pp_img').style.background = 'url(/pop/policy_up.png)no-repeat center/cover';
                for (let j = 0; j < checkboxAll.length; j++) {
                    if (checkboxAll[j] != checkboxAll[i]) {
                        checkboxAll[j].querySelector('.pop_policy_body').style.display = 'none';
                        checkboxAll[j].querySelector('.pp_img').style.background = 'url(/pop/policy_down.png)no-repeat center/cover';
                    }
                }
            } else {
                this.querySelector('.pop_policy_body').style.display = 'none';
                this.querySelector('.pp_img').style.background = 'url(/pop/policy_down.png)no-repeat center/cover';
            }

        });
    }
    const categoryList = document.querySelectorAll('.category');

    for (let i = 0; i < categoryList.length; i++) {
        categoryList[0].style.background = 'black';
        inspecionText[0].style.display = 'block';
        categoryList[i].addEventListener('click', function () {
            this.style.background = 'black';
            this.style.color = "rgb(255, 255, 255)";
            this.style.border = "1px solid black";
            inspecionText[i].style.display = 'block';
            for (let j = 0; j < categoryList.length; j++) {
                if (categoryList[i] != categoryList[j]) {
                    categoryList[j].style.background = 'white';
                    categoryList[j].style.color = "rgb(161, 161, 161)";
                    categoryList[j].style.border = "1px solid lightgray";
                    inspecionText[j].style.display = 'none';
                }
            }
        });
    }

// 마감 기한 버튼세팅 output
    for (const i in deadline) {
        deadline[i].innerHTML = deadlineValueList[i]+'일';
        if(i==4){
            break;
        }
    }

    // 마감기한 초기 셋팅(30일)
    setExpire();

    // 마감기한 버튼 클릭
    $(document).on('click', '.deadline', function(){
        if($(".deadline").has('.is_active')){  // is_active 클래스가 존재하면 length 값은 1이상이 됨. -> true
            $(".deadline").removeClass("is_active");
        }
        this.className+=" is_active";
        setExpire();
    });

    // 천단위 콤마 생성 실행부분
    in_amount.addEventListener('input', function(e) {
        let value = e.target.value;
        value = Number(value.replaceAll(',', ''));
        if(isNaN(value)) {
            in_amount.value = '';
        }else {
            const formatValue = value.toLocaleString('ko-KR');
            in_amount.value = formatValue;
        }
    });

    // 포커스 아웃되면 천원단위 숫자 000으로 치환 후 콤마삭제 후 데이터저장
    in_amount.addEventListener('focusout', function(e) {
        let value = e.target.value;
        let amount_charAt = parseInt(in_amount.value.charAt(0));
        // 30000원 이상 입력받게
        if(in_amount.value.length>=6 && !(amount_charAt<3 && in_amount.value.length==6)){
            total_price.className += ' red';
            price_now.className = 'price_now';
            price_warning.setAttribute('style', 'display: none;');
            in_amount.value = replaceAmount(value);
            in_amount.setAttribute('validateresult', true);
            inAmountValue = parseInt(minusComma(value));
            // 즉시구매가보다 크게 입력시
            if(max_amount <= inAmountValue){
                inAmountValue = max_amount;
                in_amount.value = addComma(inAmountValue);
                buynow();
            }
            total_price.innerHTML = in_amount.value + '<span class="unit">원</span>';
        }else{
            in_amount.value = '';
            price_now.className += ' has_error has_danger has_warning';
            price_warning.setAttribute('style', 'display: block;');
            total_price.innerHTML = '-';
            total_price.className = 'total_price';
            in_amount.setAttribute('validateresult', false);
        }
    });

    // 이름 유효성 검사
    document.querySelector('#name_input').addEventListener('input', e=>{
        filterByDebounce(e, strName=>{
            let errorMsg='';
            if(!validateName(strName)){
                errorMsg='올바른 이름을 입력해주세요. (2 - 50자)';
                document.querySelector('#name_input_box').className='input_box has_error';
                document.querySelector('#name_input').setAttribute('validateresult',false);
            } else {
                document.querySelector('#name_input_box').className='input_box fill';
                document.querySelector('#name_input').setAttribute('validateresult',true);
            }
            document.querySelector('#name_input_error').innerHTML=errorMsg;
        });
    });

    // 전화번호 유효성 검사
    document.querySelector('#tell_input').addEventListener('input', e=>{
        filterByDebounce(e, strTell=>{
            let errorMsg='';
            if(!validateTell(strTell)){
                errorMsg='휴대폰 번호를 정확히 입력해주세요. (\'-\' 제외)';
                document.querySelector('#tell_input_box').className='input_box has_error';
                document.querySelector('#tell_input').setAttribute('validateresult',false);
            } else {
                document.querySelector('#tell_input_box').className='input_box fill';
                document.querySelector('#tell_input').setAttribute('validateresult',true);
            }
            document.querySelector('#tell_input_error').innerHTML=errorMsg;
        })
    });

    // 배송지 선택박스
    const address_list = document.querySelectorAll('.address_list');
    const radio_input = document.querySelectorAll('.radio_input');
    address_list.forEach(element=>{
        element.addEventListener('click', function(){
            this.querySelector('input').checked=true;
            for(let i=0; i<radio_input.length; i++){
                if(radio_input[i].checked){
                    address_list[i].querySelector('img').setAttribute('src', '/lib/img/default_check_icon.png');
                } else{
                    address_list[i].querySelector('img').setAttribute('src', '/lib/img/empty_icon.png');
                }
            }
        })
    });

    // 새 배송지 기본배송지로 설정 체크박스
    document.querySelector('#check2').addEventListener('input',e=>{
        if(e.target.checked){
            e.target.parentNode.querySelector('img').setAttribute('src','/lib/img/checkbox_checked.png');
        } else {
            e.target.parentNode.querySelector('img').setAttribute('src','/lib/img/checkbox_unchecked.png');
        }
    });

    // 구매입찰계속 버튼 활성화
    in_amount.addEventListener('focusout', e=>{
        console.log(e.target.getAttribute('validateresult'));
        console.log(typeof(e.target.getAttribute('validateresult')));
        if(e.target.getAttribute('validateresult')=='true'){
            document.querySelector('#btn_confirm').className = 'btn full solid';
            document.querySelector('#btn_confirm').setAttribute('disabled', false);
        } else {
            document.querySelector('#btn_confirm').className = 'btn full solid false disabled';
            document.querySelector('#btn_confirm').setAttribute('disabled', true);
        }
    })


};