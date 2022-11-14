
// 이전페이지에서 받아온 product id값, size값
const productId = document.querySelector('#id').value;
const productSize = document.querySelector('#size').value;

let modelNumber, name, korName, img, salesPrice, purchasePrice, checkId;

axios.get('/api/pro_buy_info/'+productId+'/'+productSize ,{

}).then(function(response) {
    console.log(response)
    modelNumber = response.data.data.modelNumber;
    name = response.data.data.name;
    korName = response.data.data.korName;
    checkId = response.data.data.salesId;
    img = '/lib/product/'+response.data.data.origFileName;

    salesPrice = response.data.data.salesPrice + ''; // 즉시 판매가
    if (salesPrice == 'null') {
        document.querySelectorAll('.item_link').item(1).onclick=null;
        salesPrice = ' - ';
    } else {
        salesPrice = salesPrice.replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
    }

    purchasePrice = response.data.data.purchasePrice + '';   // 즉시 구매가
    if (purchasePrice == 'null') {
        purchasePrice = ' - ';
    } else {
        purchasePrice = purchasePrice.replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
    }

    // axios 데이터 입력
    document.querySelector('.model_number').innerHTML += modelNumber;
    document.querySelector('.model_title').innerHTML = name;
    document.querySelector('.model_ko').innerHTML = korName;
    document.querySelector('.size_txt').innerHTML = productSize;
    document.querySelector('#max_sales').innerHTML = purchasePrice;
    document.querySelector('#min_purchase').innerHTML = salesPrice;
    document.querySelector('.product_img').setAttribute('src', img);
    document.querySelector('.product_img').setAttribute('alt', korName);
});



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


/*즉시구매버튼 클릭*/
function buynow() {
    $(".instant_group.part1").hide();
    $(".instant_group.part2").show();
    $(".bid_section.deadline1").hide();
    $("#btn_confirm1").hide();
    $("#btn_confirm2").show();
    $("#total_price2").html(salesPrice + "원");  // total_price 값 최고금액으로 변경
    in_amount2.innerHTML = salesPrice;  // input_amount value 값 최고금액으로 변경
}

// 구매 입찰 버튼 클릭
function buyafter() {
    $(".instant_group.part1").show();
    $(".instant_group.part2").hide();
    $(".bid_section.deadline1").show();
    $("#btn_confirm1").show();
    $("#btn_confirm2").hide();
    in_amount.setAttribute('value', '');  // input_amount value 값 초기화
    in_amount.setAttribute('validateresult', false);
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
const in_amount2 = document.querySelectorAll('.input_amount').item(1);
const price_now = document.querySelector('.price_now');
const price_warning = document.querySelector('.price_warning');

// 총 결제 금액
const total_price = document.querySelector('#total_price');

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

// 즉시구매이동
function movePage(navigator) {
    var pageUrl = $(navigator).attr("url");
    if (pageUrl !== location.pathname) {
        history.pushState({ path: pageUrl }, null, pageUrl);
        var popStateEvent = new PopStateEvent('popstate', { state: null });
        dispatchEvent(popStateEvent); // event 발생시키기
    }
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
        if(parseInt(minusComma(salesPrice)) <= inAmountValue){
            buynow();
        }
        total_price.innerHTML = in_amount.value + '<span class="unit">원</span>';
    }else{
        in_amount.value = '';
        price_now.className += ' has_error has_danger has_warning';
        price_warning.style.display= 'block';
        total_price.innerHTML = '-';
        total_price.className = 'total_price';
        in_amount.setAttribute('validateresult', false);
    }
});

// 구매입찰계속 버튼 활성화
in_amount.addEventListener('focusout', e=>{
    if(e.target.getAttribute('validateresult')=='true'){
        document.querySelector('#btn_confirm1').className = 'btn full solid';
        document.querySelector('#btn_confirm1').disabled=false;
    } else {
        document.querySelector('#btn_confirm1').className = 'btn full solid false disabled';
        document.querySelector('#btn_confirm1').disabled=true;
    }
});


// 구매 입찰 계속 버튼 클릭시 이동 url
document.querySelector('#btn_confirm1').addEventListener('click',()=> {
    let input_amount = minusComma(document.querySelector('.input_amount').value);
    let deadline = document.querySelector('.deadline.is_active').innerHTML;
    location.href = '/kream/buyfinal/' + productId + '/' + productSize + '/' + input_amount +'/' + deadline.substring(0,deadline.length-1) + '/0';
});


// 즉시 구매 계속 버튼 클릭시 이동 url
document.querySelector('#btn_confirm2').addEventListener('click',()=> {
    let input_amount = minusComma(document.querySelectorAll('.input_amount').item(1).innerHTML);
    location.href = '/kream/buyfinal/' + productId + '/' + productSize + '/' + input_amount +'/0/' + checkId ;
});
