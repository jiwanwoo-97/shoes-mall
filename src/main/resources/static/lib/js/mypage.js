// 랜덤 돌릴 배경 색상 배열
let colorList = [ '#ebf0f5', '#f4f4f4', 'rgb(241, 241, 234)', 'rgb(246, 238, 237)' ];

// 구매내역 전체 입찰중, 진행중, 종료 카운트
let purchaseAllCount = 0;
let purchaseBindCount = 0;
let purchaseContinueCount = 0;
let purchaseEndCount = 0;

// 판매내역 전체 입찰중, 진행중, 종료 카운트
let salesAllCount = 0;
let salesBindCount = 0;
let salesContinueCount = 0;
let salesEndCount = 0;


// axios 사용자 정보 data 읽어오기
axios.get('/api/customer_mypage/'+sessionId, {

}).then(function (response){
    // 사용자 정보
    let email, userid, image, rank, point, type;

    email = response.data.data.email;
    userid = response.data.data.userid;
    image = response.data.data.originFileName;
    rank = response.data.data.rank;
    point = response.data.data.point;

    if(image==null || image==''){
        document.querySelector('#profile_image').setAttribute('src','/lib/img/blank_profile.4347742.png');
    }else{
        document.querySelector('#profile_image').setAttribute("src",image);
    }
    document.querySelector('.name').innerHTML=userid;
    document.querySelector('.email').innerHTML=email;
    document.querySelector('#membership_grade').innerHTML=rank;
    document.querySelector('#point').innerHTML=point;
    document.querySelector('.point').innerHTML=point;

    //구매내역 카운트
    for(let i in response.data.data.customerMypagePurchaseApiResponseList){
        let $status1 = response.data.data.customerMypagePurchaseApiResponseList[i].status1;   // 상태

        purchaseAllCount++; // 전체 구매내역
        if($status1=='구매입찰') {
            purchaseBindCount++;
        }else if($status1=='진행중'){
            purchaseContinueCount++;
        }else{  // 종료
            purchaseEndCount++;
        }
    }
    document.querySelector('#purchaseAllCount').innerHTML=purchaseAllCount;
    document.querySelector('#purchaseBindCount').innerHTML=purchaseBindCount;
    document.querySelector('#purchaseContinueCount').innerHTML=purchaseContinueCount;
    document.querySelector('#purchaseEndCount').innerHTML=purchaseEndCount;

    // 구매내역 정보
    let divPur = $('<div class="purchase_list_wrap">');

    for(let i=0; i<response.data.data.customerMypagePurchaseApiResponseList.length; i++){ // 4개까지만 출력

        let random = Math.floor( Math.random() * 4 );  // 0~3까지 4개 색상 랜덤 돌릴 것^^

        let $id = response.data.data.customerMypagePurchaseApiResponseList[i].id; // 판매 id
        let $size = response.data.data.customerMypagePurchaseApiResponseList[i].size;     // 사이즈
        let $status1 = response.data.data.customerMypagePurchaseApiResponseList[i].status1;   // 상태
        let $status2 = response.data.data.customerMypagePurchaseApiResponseList[i].status2;   // 상태
        let $status3 = response.data.data.customerMypagePurchaseApiResponseList[i].status3;   // 상태
        let $name = response.data.data.customerMypagePurchaseApiResponseList[i].name;   // 상품명
        let $img = response.data.data.customerMypagePurchaseApiResponseList[i].originFileName;   // 상품 사진
        if($size==null){
            $size = ' - ';
        }

        let row = $('<div class="purchase_item" value="'+$id+'" onclick="location.href=\'/my/buying/'+$id+'\';">').append(
            '<div class="history_product">' +
            '<div class="product_box">' +
            '<div class="product" style="background-color: ' + colorList[random] + ';">' +
            '<img src="/lib/product/' + $img + '" alt="' + $name + '" class="product_img">' +
            '</div></div>' +
            '<div class="product_detail">' +
            '<p class="name">' + $name + '</p>' +
            '<span class="size">'+ $size +'</span>' +
            '</div>' +
            '</div></div>' +
            '<div class="history_status">' +
            '<div class="status_box field_status">' +
            '<span class="status_txt text-default">'+$status2+'</span>' +
            '</div></div></div><!----><!----><!----><!----><!---->'
        );
        divPur.append(row);

        if(i==3){
            break;
        }
    }
    divPur.append('</div>');
    $('.purchase_list.all.bid').append(divPur);



    // 판매내역 카운트
    for(let i in response.data.data.customerMypageSalesApiResponseList){
        let $status1 = response.data.data.customerMypageSalesApiResponseList[i].status1;   // 상태

        salesAllCount++; // 전체 구매내역
        if($status1=='판매입찰') {
            salesBindCount++;
        }else if($status1=='진행중'){
            salesContinueCount++;
        }else{  // 종료
            salesEndCount++;
        }
    }
    document.querySelector('#salesAllCount').innerHTML=salesAllCount;
    document.querySelector('#salesBindCount').innerHTML=salesBindCount;
    document.querySelector('#salesContinueCount').innerHTML=salesContinueCount;
    document.querySelector('#salesEndCount').innerHTML=salesEndCount;




    // 판매내역 정보
    let divSell = $('<div class="product_list">');
    for(let i=0; i<response.data.data.customerMypageSalesApiResponseList.length; i++){ // 4개까지만 출력
        let random = Math.floor( Math.random() * 4 );  // 0~3까지 4개 색상 랜덤 돌릴 것^^
        console.log(response.data.data.customerMypageSalesApiResponseList);

        let $id = response.data.data.customerMypageSalesApiResponseList[i].id; // 판매 id
        let $size = response.data.data.customerMypageSalesApiResponseList[i].size;     // 사이즈
        let $status1 = response.data.data.customerMypageSalesApiResponseList[i].status1;   // 상태
        let $status2 = response.data.data.customerMypageSalesApiResponseList[i].status2;   // 상태
        let $status3 = response.data.data.customerMypageSalesApiResponseList[i].status3;   // 상태
        let $name = response.data.data.customerMypageSalesApiResponseList[i].name;     // 상품 이름
        let $img = response.data.data.customerMypageSalesApiResponseList[i].originFileName;   // 상품 사진
        if($size==null){
            $size = ' - ';
        }

        let row = $('<div class="purchase_item" value="'+$id+'" onclick="location.href=\'/my/selling/'+$id+'\';">').append(
            '<div class="history_product">' +
            '<div class="product_box">' +
            '<div class="product" style="background-color: ' + colorList[random] + ';">' +
            '<img src="/lib/product/' + $img + '" alt="' + $name + '" class="product_img">' +
            '</div></div>' +
            '<div class="product_detail">' +
            '<p class="name">' + $name + '</p>' +
            '<span class="size">'+ $size +'</span>' +
            '</div>' +
            '</div></div>' +
            '<div class="history_status">' +
            '<div class="status_box field_status">' +
            '<span class="status_txt text-default">'+$status2+'</span>' +
            '</div></div></div><!----><!----><!----><!----><!---->'
        );
        divSell.append(row);

        if(i==3){
            break;
        }
    }
    divSell.append('</div>');
    $('.purchase_list.all.ask').append(divSell);



    // 관심상품 정보
    let divWish = $('<div class="product_list">');
    for(let i=0; i<response.data.data.customerMypageCartApiResponseList.length; i++){ // 4개까지만 출력
        let random = Math.floor( Math.random() * 4 );  // 0~3까지 4개 색상 랜덤 돌릴 것^^
        console.log(response.data.data.customerMypageCartApiResponseList[i]);

        let $id = response.data.data.customerMypageCartApiResponseList[i].id; // 찜 id
        let $productId = response.data.data.customerMypageCartApiResponseList[i].productId; // 상품 id
        let $brand = response.data.data.customerMypageCartApiResponseList[i].brand;   // 상품 brand
        let $name = response.data.data.customerMypageCartApiResponseList[i].name;     // 상품 이름
        let $img = response.data.data.customerMypageCartApiResponseList[i].originFileName;   // 상품 사진
        let $price = response.data.data.customerMypageCartApiResponseList[i].price+'';   // 상품 가격
        console.log(response.data.data.customerMypageCartApiResponseList[i].price)
        console.log($price);
        console.log(typeof($price));
        if($price == 'null'){
            $price = ' - ';
        }else{
            $price = $price.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }

        let row = $('<div class="product_item">').append(
            '<a href="/product/'+$productId+'" class="item_inner">' +
            '<div class="product" style="background-color: ' + colorList[random] + ';">'+
            '<img src="/lib/product/' + $img + '" alt="' + $name + '" class="product_img">' +
            '</div>' +
            '<div class="info_box">' +
            '<div class="brand">' + '<p class="brand-name">' + $brand + '</p></div>'+
            '<p class="name">' + $name + '</p>' +
            '<div class="price">' +
            ' <div class="amount lg">' +
            '<em class="num">'+ $price +'</em>' +
            '<span class="won lg">원</span>' +
            '</div>' +
            '<div class="desc"><p>즉시 구매가</p></div>' +
            '</div></div>' +
            '</a>' +
            '<a class="btn_wish" onclick="delWish(' + $id + ')"  value="' + $id + '">' +
            '<img src="/lib/img/my_wish_icon.png" class="icon sprite-icons ico-wish-on">' +
            '</a></div><!---->'
        );
        divWish.append(row);

        if(i==3){
            break;
        }
    }
    divWish.append('</div>');
    $('.interest_product').append(divWish);

}).then(function (err){

});


// 관심상품 삭제 함수
function delWish(id){
    axios.delete('/api/cart_delete/'+id)
        .then(function(response){
            location.reload();
        }).catch(function(response){
        console.log('삭제 에러발생!')
    });
    return false;
}

// 날짜 yyyy/mm/dd 형식 변환 함수
function dateStr(date){
    var year = today.getFullYear();
    var month = ('0' + (today.getMonth() + 1)).slice(-2);
    var day = ('0' + today.getDate()).slice(-2);
    var currentDateStr = year + '/' + month  + '/' + day;

    return currentDateStr;
}

// 포인트 팝업창
$("#point_layer_open").on("click", function() {
    $(".layer_point").css('display','block');
});
$(".btn_layer_close").on("click", function() {
    $(".layer_point").css('display','none');
});
