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


function showleft() {
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

function showright() {
    $(document).on('click', '.item_link',
        function change_right() {
            let index = $(".item_link").index(this);
            const popup = document.getElementsByClassName('tab_content')[0];
            popup.style.display = "none";
            const popup2 = document.getElementsByClassName('tab_content')[1];
            popup2.style.display = "block";
            $(".tab_list.v1").hide();
            $(".tab_list.v2").show();
        });


}

function selectdeadline() {

    document.getElementById("day1").style.border("1px solid black");

}

function usepoint() {
    const popup = document.querySelector('#pointusepop');
    popup.classList.add('hide');

    $('.btn_solid:contains("사용 하기")').text("취소");

    $('.pointshow').toggle();

}


// =====================================================================================
const bank_select = document.querySelector('#bank_select');
const account_input = document.querySelector('#account_input');
const name_input = document.querySelector('#name_input');
const in_essentialList = [bank_select, account_input, name_input];
const btn_save = document.querySelector('.btn_save')

// 정산 계좌 변경 팝업
$(function () {
    // 팝업창 열기
    $('.btn').on('click', function (e) {
        $('.layer_payout_account').css('display', 'unset');
        e.preventDefault();
    });
    // 팝업창 닫기
    $('.pop_close').on('click', function (e) {
        $('.layer_payout_account').css('display', 'none');
        e.preventDefault();
    });
    // 저장하기
    $('.btn_save').on('click', function () {
        let result = confirm('이미 진행 중인 거래를 포함하여 앞으로 모든 거의 대금 정산이 해당 계좌로 변경됩니다.')
        if (result) {
            $('.layer_payout_account').css('display', 'none');
        }
    });
    // 은행명 select
    const selected_txt = document.querySelector('#selected_txt');
    bank_select.addEventListener('input', function () {
        bank_select.setAttribute('validateresult', true);
        selected_txt.firstElementChild.innerHTML = this.value;
    });

    // 계좌번호 유효성 검사
    document.querySelector('#account_input').addEventListener('input', (e) => {
        account_input.value = account_input.value.replaceAll(/\D/g, "");
        filterByDebounce(e, strAccount => {
            let errorMsg = '';
            if (6 < strAccount.length && strAccount.length < 16) {
                document.querySelector('#account_input_box').className = 'input_box fill';
                document.querySelector('#account_input').setAttribute('validateresult', true);
            } else {
                document.querySelector('#account_input_box').className = 'input_box has_error';
                document.querySelector('#account_input').setAttribute('validateresult', false);
                errorMsg = '올바른 계좌번호를 입력해주세요.(\'-\'제외)';
            }
            document.querySelector('#account_input_error').innerHTML = errorMsg;

        });
    });

    // 이름 유효성 검사
    document.querySelector('#name_input').addEventListener('input', e => {
        filterByDebounce(e, strName => {
            let errorMsg = '';
            if (!validateName(strName)) {
                errorMsg = '올바른 이름을 입력해주세요. (2 - 50자)';
                document.querySelector('#name_input_box').className = 'input_box has_error';
                name_input.setAttribute('validateresult', false);
            } else {
                document.querySelector('#name_input_box').className = 'input_box fill';
                name_input.setAttribute('validateresult', true);
            }
            document.querySelector('#name_input_error').innerHTML = errorMsg;
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


});


// =====================================================================================

function noneinfo() {
    $(".layer.lg.layer_alert").hide();
}

function saveinfo() {
    $(".layer_account_registration.layer").hide();
    $(".layer.lg.layer_alert").hide();
}

// 변수수선언 부분

// 입찰가격입력 input
const in_amount = document.querySelector('.input_amount');
const price_now = document.querySelector('.price_now');
const price_warning = document.querySelector('.price_warning');

// 총 결제 금액
const total_price = document.querySelector('#total_price');

// 즉시 구매가(나중에 DB에서 불러올 것으로 수정)
let max_amount = document.querySelector('#max_amount').innerHTML;
max_amount = parseInt(minusComma(max_amount.substr(0, max_amount.length - 1)));

// 콤마 삭제 후 저장할 변수
let inAmountValue = 0;

// 마감 기한
const deadline = document.getElementsByClassName('deadline');
const deadline_txt = document.querySelector('.deadline_txt');

// 마감기한 버튼 일수
let deadlineValueList = [1, 3, 7, 30, 60];

// 구매 버튼
const submitButton = document.querySelector('.btn_full_solid');

// 마감 기한 버튼세팅 output
for (const i in deadline) {
    deadline[i].innerHTML = deadlineValueList[i] + '일';
    if (i == 4) {
        break;
    }
}

// 마감기한 초기 셋팅(30일)
setExpire();

// 마감기한 버튼 클릭
$(document).on('click', '.deadline', function () {
    if ($(".deadline").has('.is_active')) {  // is_active 클래스가 존재하면 length 값은 1이상이 됨. -> true
        $(".deadline").removeClass("is_active");
    }
    this.className += " is_active";
    setExpire();
});

// 천단위 콤마 생성 실행부분
in_amount.addEventListener('input', function (e) {
    let value = e.target.value;
    value = Number(value.replaceAll(',', ''));
    if (isNaN(value)) {
        in_amount.value = '';
    } else {
        const formatValue = value.toLocaleString('ko-KR');
        in_amount.value = formatValue;
    }
});

// 포커스 아웃되면 천원단위 숫자 000으로 치환 후 콤마삭제 후 데이터저장
in_amount.addEventListener('focusout', function (e) {
    let value = e.target.value;
    let amount_charAt = parseInt(in_amount.value.charAt(0));
    // 30000원 이상 입력받게
    if (in_amount.value.length >= 6 && !(amount_charAt < 3 && in_amount.value.length == 6)) {
        total_price.className += ' red';
        price_now.className = 'price_now';
        price_warning.setAttribute('style', 'display: none;');
        in_amount.value = replaceAmount(value);
        in_amount.setAttribute('validateresult', true);
        inAmountValue = parseInt(minusComma(value));
        // 즉시구매가보다 크게 입력시
        if (max_amount <= inAmountValue) {
            inAmountValue = max_amount;
            in_amount.value = addComma(inAmountValue);
            buynow();
        }
        total_price.innerHTML = in_amount.value + '<span class="unit">원</span>';
        const btn_save = document.querySelector('#btn_confirm');
        btn_save.className = 'btn full solid false';
        btn_save.disabled = false;
    } else {
        in_amount.value = '';
        price_now.className += ' has_error has_danger has_warning';
        price_warning.setAttribute('style', 'display: block;');
        total_price.innerHTML = '-';
        total_price.className = 'total_price';
        in_amount.setAttribute('validateresult', false);
        const btn_save = document.querySelector('#btn_confirm');
        btn_save.className = 'btn full solid false disabled';
        btn_save.disabled = true;
    }
});



// 함수선언 부분

// 숫자외에 입력받지 못하게
function checkInputNum() {
    if ((event.keyCode < 48) || (event.keyCode > 57)) {
        event.returnValue = false;
    }
}

//천단위 콤마 생성
function addComma(data) {
    return data.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

//천단위 콤마 제거
function minusComma(data) {
    return data.replace(/[^\d]+/g, "");
}

// 천단위 이하 금액 000으로 변경
function replaceAmount(data) {
    if (data.length <= 3) {
        data = '';
    } else {
        data = data.substr(0, data.length - 3) + "000";
    }
    return data;
}

// 마감 기한 날짜 계산
function expiredDate(data) {
    let today = new Date();
    today.setDate(today.getDate() + data);
    let year = today.getFullYear();
    let month = today.getMonth() + 1;
    let date = today.getDate();
    let todayStr = `${year}/${month >= 10 ? month : '0' + month}/${date >= 10 ? date : '0' + date}`;
    return todayStr;
}

// 마감기한 초기 셋팅(30일)
function setExpire() {
    let is_active = $(".is_active").text();
    let is_active_value = parseInt(is_active.substr(0, is_active.length - 1));
    deadline_txt.innerHTML = is_active + ' (' + expiredDate(is_active_value) + ' 마감)';
}

// 에이젝스 즉시구매이동
function movePage(navigator) {
    var pageUrl = $(navigator).attr("url");
    if (pageUrl !== location.pathname) {
        history.pushState({path: pageUrl}, null, pageUrl);
        var popStateEvent = new PopStateEvent('popstate', {state: null});
        dispatchEvent(popStateEvent); // event 발생시키기
    }
}

