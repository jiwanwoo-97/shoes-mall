

let orderNumber, status1, status2, status3, price, price_comma, period, cal_period, size, imgPath,  regdate, regdateStr, regdateType;
let devCompany, trackNum;
let addressName, addressHp, addressHpHipen, zipcode, addressDetail1, addressDetail2, addressDetail3;
let cardCompany, cardNumber, cardLastNumber;
let productId, productName;
let salesPrice, purchasePrice;

axios.get('/api/purchase_detail/'+purchaseId,{

}).then(function(response){
    orderNumber = response.data.data.orderNumber;
    status1 = response.data.data.status1;
    status2 = response.data.data.status2;
    period = response.data.data.period;
    productId = response.data.data.productId;
    productName = response.data.data.productName;
    size = response.data.data.size;
    imgPath = response.data.data.originFileName;
    price = response.data.data.price;
    price_comma = price.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");

    regdate = response.data.data.regdate;
    // 2021-09-29T10:37:05(String)
    regdateStr = regdate.substring(0,10);
    regdateType = new Date(regdateStr);

    cal_period = new Date(regdateStr);
    cal_period.setDate(cal_period.getDate() + parseInt(period));

    addressName = response.data.data.name;
    addressHp = response.data.data.hp;
    addressHpHipen = addressHp.replace(/(^02.{0}|^01.{1}|[0-9]{3})([0-9]+)([0-9]{4})/,"$1-$2-$3");

    zipcode = response.data.data.zipcode;
    addressDetail1 = response.data.data.address1;
    addressDetail2 = response.data.data.address2;
    addressDetail3 = '(' + zipcode + ')' + addressDetail1 + ' ' +  addressDetail2;

    cardCompany = response.data.data.cardCompany;
    cardNumber = response.data.data.cardNumber;
    cardLastNumber = cardNumber.substring(cardNumber.length-4,cardNumber.length);

    devCompany = response.data.data.devCompany;
    trackNum = response.data.data.trackNum;
    if(trackNum==0){
        trackNum='';
    }

    salesPrice = response.data.data.salesPrice+''; // 즉시 판매가
    if (salesPrice == 'null'){
        salesPrice = ' - ';
    } else { salesPrice = salesPrice.replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ","); }

    purchasePrice = response.data.data.purchasePrice+'';   // 즉시 구매가
    if(purchasePrice == 'null'){
        purchasePrice = ' - ';
    } else { purchasePrice = purchasePrice.replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ","); }

    if(status1 == '구매입찰'){  // 판매입찰일 경우 title 입찰중으로 출력, 삭제하기버튼 만들기
        let div = $('<div class="btn_box">').append(
            '<a type="button" class="btn selling_delete" onclick="delBtn()">' +
            '<img src="/lib/img/delete_icon_black.png" class="ico-delete icon sprite-icons"></img>' +
            '<span class="btn_txt">삭제하기</span>' +
            '</a></div>'
        );
        $('.content_title').append(div);
        document.querySelector('#title_txt').innerHTML += '입찰 중';
        document.querySelector('.title > h4').innerHTML += '입찰 중';
    }else if(status1 == '진행중'){
        document.querySelector('#title_txt').innerHTML += '진행 중';
        document.querySelector('.title > h4').innerHTML += '진행 중';
    }else { // 종료
        document.querySelector('#title_txt').innerHTML += '종료된 거래';
        document.querySelector('.title > h4').innerHTML += '종료된 거래';
    }

    if(status1 != '구매입찰') {
        // 진행중, 종료 상태일경우
        document.querySelector('.order_price').style.display='none';    // 즉시구매,판매가 지우기
        document.querySelector('#period_addition').style.display='none';
        if (status2 == '발송완료' || status2 == '입고대기') {

        } else if (status2 == '입고완료' || status2 == '검수중' || status2 == '검수보류') {
            document.querySelectorAll('.progress_item').item(0).className += ' past';
        } else if (status2 == '검수합격') {
            for (let i = 0; i < 2; i++) {
                document.querySelectorAll('.progress_item').item(i).className += ' past';
            }
        } else if (status2 == '배송중') {
            for (let i = 0; i < 3; i++) {
                document.querySelectorAll('.progress_item').item(i).className += ' past';
            }
        } else if (status2 == '배송완료') {
            for (let i = 0; i < 4; i++) {
                document.querySelectorAll('.progress_item').item(i).className += ' past';
            }
        } else {    // 입찰중, 미결제, 기한만료, 거래실패
            document.querySelector('.progress_wrap').style.display = 'none';
            document.querySelector('.shipping_info_wrap').style.display = 'none';
        }
    }else{
        // 입찰 중일 경우
        document.querySelector('.progress_wrap').style.display='none';
        document.querySelector('.shipping_info_wrap').style.display = 'none';
        document.querySelector('#detail_title').innerHTML='구매 입찰 내역'
        document.querySelector('#box_title').innerHTML='구매 희망가'
        document.querySelector('#section_price').innerHTML='총 결제금액(예상)';

    }

    // 공통
    document.querySelector('.order_number').innerHTML += orderNumber;
    document.querySelector('.product_img').src = '/lib/product/'+imgPath;
    document.querySelector('#product_name').innerHTML = productName;
    document.querySelector('.size').innerHTML = size;
    document.querySelector('#total_price').innerHTML = price_comma;
    document.querySelector('#pay_price').innerHTML = price_comma+'원';
    document.querySelector('.btn_shipping').innerHTML = devCompany+trackNum;
    document.querySelector('#addressName').innerHTML = addressName;
    document.querySelector('#addressHp').innerHTML = addressHpHipen;
    document.querySelector('#addressDetail').innerHTML = addressDetail3;
    document.querySelector('#cardCompany').innerHTML = cardCompany;
    document.querySelector('#cardLastNumber').innerHTML = cardLastNumber;
    document.querySelector('#regdate_txt').innerHTML = dateFormat(regdateType);
    document.querySelector('#period').innerHTML = period;
    document.querySelector('#cal_period').innerHTML = dateFormat(cal_period);
    document.querySelector('#purchasePrice').innerHTML = purchasePrice;
    document.querySelector('#salesPrice').innerHTML = salesPrice;

}).catch(function(err){
    console.log(err);
});

// 배송지 검색창 팝업 함수
const delivary = function(){
    const url = 'https://m.search.naver.com/search.naver?query='+document.querySelector('.btn_shipping').innerHTML;
    var name = "popup test";
    var option = "width = 500, height = 500, top = 100, left = 200, location = no";
    window.open(url, name, option);
};

// 삭제 버튼 클릭 함수
function delBtn() {
    const layer_alert = document.querySelector('.layer_alert');     // 지우기 팝업
    let layer_alert_button1 = layer_alert.querySelectorAll('button').item(0);  // 취소버튼
    let layer_alert_button2 = layer_alert.querySelectorAll('button').item(1);  // 입찰지우기버튼

    layer_alert.style.display = 'block';

    layer_alert_button1.addEventListener('click', function () {
        layer_alert.style.display = 'none';
    });

    layer_alert_button2.addEventListener('click', function () {
        // DB에서 지워지는 내용
        axios.delete('/api/purchase_delete/' + orderNumber)
            .then(function (response) {
                location.href = '/my/selling'
            }).catch(function (response) {
            console.log('삭제 에러발생!')
        });
        return false;
    });
}