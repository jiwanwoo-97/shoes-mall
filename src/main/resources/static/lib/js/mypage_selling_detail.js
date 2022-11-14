
// selling detail 페이지 axios 데이터 읽어오기
let orderNumber, price, period, cal_period, sizeType, proimg, productName, status1, status2, regdate, regdateStr, regdateType;
let bank, accountNumber;
let addressName, addressHp, addressHpHipen, zipcode, addressDetail1, addressDetail2, addressDetail3;
let cardCompany, cardNumber;
let salesPrice, purchasePrice;

axios.get('/api/sales_detailInfo/'+salesId,{
}).then(function(response){
    orderNumber = response.data.data.orderNumber;
    productName = response.data.data.productName;
    status1 = response.data.data.status1;
    status2 = response.data.data.status2;
    price = response.data.data.price;
    price_comma = price.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
    productId = response.data.data.productId;
    sizeType = response.data.data.size;
    proimg = response.data.data.originFileName;

    regdate = response.data.data.regdate;
    // 2021-09-29T10:37:05(String)
    regdateStr = regdate.substring(0,10);
    regdateType = new Date(regdateStr);
    period = response.data.data.period;
    cal_period = new Date(regdateStr);
    cal_period.setDate(cal_period.getDate() + parseInt(period));

    bank = response.data.data.bank;
    accountNumber = response.data.data.accountNumber;
    accountNumberStar = '********'+accountNumber.substring(accountNumber.length-3,accountNumber.length);

    addressName = response.data.data.name;
    addressHp = response.data.data.hp;
    addressHpHipen = addressHp.replace(/(^02.{0}|^01.{1}|[0-9]{3})([0-9]+)([0-9]{4})/,"$1-$2-$3");
    zipcode = response.data.data.zipcode;
    addressDetail1 = response.data.data.address1;
    addressDetail2 = response.data.data.address2;
    addressDetail3 = '('+ zipcode +')' + addressDetail1 + ' ' +  addressDetail2;

    salesPrice = response.data.data.salesPrice+''; // 즉시 판매가
    if (salesPrice == 'null'){
        salesPrice = ' - ';
    } else { salesPrice = salesPrice.replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ","); }

    purchasePrice = response.data.data.purchasePrice+'';   // 즉시 구매가
    if(purchasePrice == 'null'){
        purchasePrice = ' - ';
    } else { purchasePrice = purchasePrice.replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ","); }

    if(status1 == '판매입찰'){  // 판매입찰일 경우 title 입찰중으로 출력
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


    if(status1 != '판매입찰') {
        // 진행중, 종료 상태일경우
        document.querySelector('.order_price').style.display = 'none';
        document.querySelector('#period_addition').style.display = 'none';
        document.querySelector('#detail_title').innerHTML='판매 내역'
        document.querySelector('#box_title').innerHTML='판매 희망가'
        document.querySelector('#section_price').style.display='none';

        if (status2 == '발송완료' || status2 == '입고대기' || status2 == '발송요청') {

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
        } else if (status2 == '정산완료') {
            for (let i = 0; i < 4; i++) {
                document.querySelectorAll('.progress_item').item(i).className += ' past';
                document.querySelector('#detail_title').innerHTML='정산 내역'
                document.querySelector('#box_title').innerHTML='판매 희망가'
                document.querySelector('#section_price').style.display='flex';
            }
        } else {    // 입찰중, 기한만료, 취소완료, 거래실패
            document.querySelector('.progress_wrap').style.display = 'none';
            document.querySelector('.shipping_address_wrap').style.display = 'none';
        }
    } else {
        // 입찰 중일 경우
        document.querySelector('.progress_wrap').style.display='none';
        document.querySelector('.shipping_address_wrap').style.display = 'none';
        document.querySelector('#detail_title').innerHTML='판매 입찰 내역'
        document.querySelector('#box_title').innerHTML='판매 희망가'
        document.querySelector('#section_price').style.display='none';

        // $('.purchase_history').append(
        //     '<div class="history_btn" id="bidding_modify">' +
        //     '<a type="button" class="btn outline medium"> 입찰 변경하기 </a>' +
        //     '<a href="#" type="button" class="btn sell outline medium"> 즉시 판매하기 </a>' +
        //     '</div>'
        // );
    }


    // 공통
    document.querySelector('.order_number').innerHTML += orderNumber;
    document.querySelector('.product_img').src = '/lib/product/'+proimg;
    document.querySelector('#product_name').innerHTML = productName;
    document.querySelector('.size').innerHTML = sizeType;
    document.querySelector('#wish_price').innerHTML = price_comma;
    document.querySelector('#total_price').innerHTML = price_comma;
    document.querySelector('#regdate_txt').innerHTML = dateFormat(regdateType);
    document.querySelector('#period').innerHTML = period;
    document.querySelector('#cal_period').innerHTML = dateFormat(cal_period);
    document.querySelector('#bank').innerHTML = bank;
    document.querySelector('#accountNumber').innerHTML = accountNumberStar;
    document.querySelector('#addressName').innerHTML = addressName;
    document.querySelector('#addressHp').innerHTML = addressHpHipen;
    document.querySelector('#addressDetail').innerHTML = addressDetail3;
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
function delBtn(){
    const layer_alert = document.querySelector('.layer_alert');     // 지우기 팝업
    let layer_alert_button1 = layer_alert.querySelectorAll('button').item(0);  // 취소버튼
    let layer_alert_button2 = layer_alert.querySelectorAll('button').item(1);  // 입찰지우기버튼

    layer_alert.style.display='block';

    layer_alert_button1.addEventListener('click', function(){
        layer_alert.style.display='none';
    });

    layer_alert_button2.addEventListener('click', function(){
        // DB에서 지워지는 내용
        axios.delete('/api/sales_delete/'+orderNumber)
            .then(function(response){
                location.href='/my/selling'
            }).catch(function(response){
            console.log('삭제 에러발생!')
        });
        return false;
    });

}
