let category_click_js = null;
let subcategory_click_js = null;

let brand_click_js = null;
let brand_click_js2 = null;
let brand_click_js3 = null;
let brand_click_js4 = null;
let brand_click_js5 = null;
let brand_click_js6 = null;
let brand_click_js7 = null;
let brand_click_js8 = null;
let brand_click_js9 = null;
let brand_click_js10 = null;
let brand_click_js11 = null;
let brand_click_js12 = null;
let brand_click_js13 = null;
let brand_click_js14 = null;
let brand_click_js15 = null;
let brand_click_js16 = null;
let brand_click_js17 = null;
let brand_click_js18 = null;
let brand_click_js19 = null;
let brand_click_js20 = null;


let gender_click_js = null;
let collecttion_click_js = null;
let collecttion_click_js2 = null;
let collecttion_click_js3 = null;
let collecttion_click_js4 = null;
let collecttion_click_js5 = null;
let collecttion_click_js6 = null;
let collecttion_click_js7 = null;
let collecttion_click_js8 = null;
let collecttion_click_js9= null;
let collecttion_click_js10 = null;

let price_click_js = null;
let order_flag_js = null;

let shoe_size_js = null;
let shoe_size_js2 = null;
let shoe_size_js3 = null;
let shoe_size_js4 = null;
let shoe_size_js5 = null;
let shoe_size_js6 = null;
let shoe_size_js7 = null;
let shoe_size_js8 = null;
let shoe_size_js9 = null;
let shoe_size_js10 = null;
let shoe_size_js11 = null;

let price_js1 = null;
let price_js2 = null;
let price_js3 = null;
let price_js4 = null;
let price_js5 = null;
let price_js6 = null;

let click_you = null;
let click_you_cancle = null;


function sendit(){
    console.log("센드잇 선택!////" + click_you) //nike
    console.log("센드잇 삭제!////" + click_you_cancle)

    /*신발사이즈*/
    if(click_you == "240"){shoe_size_js = click_you}
    else if(click_you == "245"){shoe_size_js1 = click_you}
    else if(click_you == "250"){shoe_size_js2 = click_you}
    else if(click_you == "255"){shoe_size_js3 = click_you}
    else if(click_you == "260"){shoe_size_js4 = click_you}
    else if(click_you == "265"){shoe_size_js5 = click_you}
    else if(click_you_cancle == "240"){shoe_size_js = null}
    else if(click_you_cancle == "245"){shoe_size_js1 = null}
    else if(click_you_cancle == "250"){shoe_size_js2 = null}
    else if(click_you_cancle == "255"){shoe_size_js3 = null}
    else if(click_you_cancle == "260"){shoe_size_js4 = null}
    else if(click_you_cancle == "265"){shoe_size_js5 = null}


    //의류사이즈
    else if(click_you == "XS"){shoe_size_js6 = click_you}
    else if(click_you == "S"){shoe_size_js7 = click_you}
    else if(click_you == "M"){shoe_size_js8 = click_you}
    else if(click_you == "L"){shoe_size_js9 = click_you}
    else if(click_you == "XL"){shoe_size_js10 = click_you}
    else if(click_you_cancle == "XS"){shoe_size_js6 = null}
    else if(click_you_cancle == "S"){shoe_size_js7 = null}
    else if(click_you_cancle == "M"){shoe_size_js8 = null}
    else if(click_you_cancle == "L"){shoe_size_js9 = null}
    else if(click_you_cancle == "XL"){shoe_size_js10 = null}

    //가격정렬
    else if(click_you == "10만원 이하"){
        price_js1 = 100000;
        price_js2 = null;
        price_js3 = null;
        price_js4 = null;
        price_js5 = null;

    }
    else if(click_you == "10만원 ~ 30만원 이하"){
        price_js1 = null;
        price_js2 = 100000;
        price_js3 = 300000;
        price_js4 = null;
        price_js5 = null;
    }
    else if(click_you == "30만원 ~ 50만원 이하"){
        price_js1 = null;
        price_js2 = null;
        price_js3 = null;
        price_js4 = 300000;
        price_js5 = 500000;
    }
    else if(click_you == "50만원 이상"){
        price_js1 = null;
        price_js2 = null;
        price_js3 = null;
        price_js4 = null;
        price_js5 = 500000;
    }

    //가격정렬 취소
    else if(click_you_cancle == "10만원 이하"){
        price_js1 = null;
        price_js2 = null;
        price_js3 = null;
        price_js4 = null;
        price_js5 = null;

    }
    else if(click_you_cancle == "10만원 ~ 30만원 이하"){
        price_js1 = null;
        price_js2 = null;
        price_js3 = null;
        price_js4 = null;
        price_js5 = null;
    }
    else if(click_you_cancle == "30만원 ~ 50만원 이하"){
        price_js1 = null;
        price_js2 = null;
        price_js3 = null;
        price_js4 = null;
        price_js5 = null;
    }
    else if(click_you_cancle == "50만원 이상"){
        price_js1 = null;
        price_js2 = null;
        price_js3 = null;
        price_js4 = null;
        price_js5 = null;
    }




    //럭셔리 컬렉션
    else if(click_you == "Luxury Collection"){collecttion_click_js = click_you}
    //카테고리_체크박스
    else if(click_you == "스니커즈"){category_click_js = click_you}
    else if(click_you == "의류"){category_click_js = click_you}
    else if(click_you == "패션잡화"){category_click_js = click_you}
    else if(click_you == "패션 잡화"){category_click_js = click_you}

    else if(click_you == "테크"){category_click_js = click_you}
    else if(click_you == "라이프"){category_click_js = click_you}
        //TOP이미지 클릭






        //사이드카테고리(성별,브랜드,컬렉션)
    //성별
    else if(click_you == "남성"){gender_click_js = click_you}
    else if(click_you == "여성"){gender_click_js = click_you}
    else if(click_you == "키즈"){gender_click_js = click_you}
    else if(click_you_cancle == "남성"){gender_click_js = null}
    else if(click_you_cancle == "여성"){gender_click_js = null}
    else if(click_you_cancle == "키즈"){gender_click_js = null}
    //브랜드 1~10
    else if(click_you == "Adidas"){brand_click_js = click_you}
    else if(click_you == "Asics"){brand_click_js2 = click_you}
    else if(click_you == "Balenciaga"){brand_click_js3 = click_you}
    else if(click_you == "Canada Goose"){brand_click_js4 = click_you}
    else if(click_you == "Casetify"){brand_click_js5 = click_you}
    else if(click_you == "Dr. Martens"){brand_click_js6 = click_you}
    else if(click_you == "IKEA"){brand_click_js7 = click_you}
    else if(click_you == "jodans"){brand_click_js8 = click_you}
    else if(click_you == "Maison Kitsune"){brand_click_js9 = click_you}

    else if(click_you_cancle == "Adidas"){brand_click_js = null}
    else if(click_you_cancle == "Asics"){brand_click_js2 = null}
    else if(click_you_cancle == "Balenciaga"){brand_click_js3 = null}
    else if(click_you_cancle == "Canada Goose"){brand_click_js4 = null}
    else if(click_you_cancle == "Casetify"){brand_click_js5 = null}
    else if(click_you_cancle == "Dr. Martens"){brand_click_js6 = null}
    else if(click_you_cancle == "IKEA"){brand_click_js7 = null}
    else if(click_you_cancle == "jodans"){brand_click_js8 = null}
    else if(click_you_cancle == "Maison Kitsune"){brand_click_js9 = null}
    //브랜드11~20
    else if(click_you == "Microsoft"){brand_click_js10 = click_you}
    else if(click_you == "new balance"){brand_click_js11 = click_you}
    else if(click_you == "Nike"){brand_click_js12 = click_you}
    else if(click_you == "Nintendo"){brand_click_js13 = click_you}
    else if(click_you == "Nvidia"){brand_click_js14 = click_you}
    else if(click_you == "Samsung"){brand_click_js15 = click_you}
    else if(click_you == "Sony"){brand_click_js16 = click_you}
    else if(click_you == "Stone Island"){brand_click_js17 = click_you}
    else if(click_you == "Supreme"){brand_click_js18 = click_you}
    else if(click_you == "The North Face"){brand_click_js19 = click_you}
    else if(click_you == "Thom Browne"){brand_click_js20 = click_you}

    else if(click_you_cancle == "Microsoft"){brand_click_js10 = null}
    else if(click_you_cancle == "new balance"){brand_click_js11 = null}
    else if(click_you_cancle == "Nike"){brand_click_js12 = null}
    else if(click_you_cancle == "Nintendo"){brand_click_js13 = null}
    else if(click_you_cancle == "Nvidia"){brand_click_js14 = null}
    else if(click_you_cancle == "Samsung"){brand_click_js15 = null}
    else if(click_you_cancle == "Sony"){brand_click_js16 = null}
    else if(click_you_cancle == "Stone Island"){brand_click_js17 = null}
    else if(click_you_cancle == "Supreme"){brand_click_js18 = null}
    else if(click_you_cancle == "The North Face"){brand_click_js19 = null}
    else if(click_you_cancle == "Thom Browne"){brand_click_js20 = null}

    //컬렉션
    else if(click_you == "Adidas Yeezy"){collecttion_click_js = click_you}
    else if(click_you == "Converse Run Star"){collecttion_click_js2 = click_you}
    else if(click_you == "Jordan1"){collecttion_click_js3 = click_you}
    else if(click_you == "Jordan3"){collecttion_click_js4 = click_you}
    else if(click_you == "New Balance 327"){collecttion_click_js5 = click_you}
    else if(click_you == "New Balance 993"){collecttion_click_js6 = click_you}
    else if(click_you == "X Supreme"){collecttion_click_js7 = click_you}
    else if(click_you == "Nike Air Force"){collecttion_click_js8 = click_you}
    else if(click_you == "NIKE Dunk"){collecttion_click_js9 = click_you}
    else if(click_you == "Luxury Collection"){collecttion_click_js10 = click_you}

    else if(click_you_cancle == "Adidas Yeezy"){collecttion_click_js = null}
    else if(click_you_cancle == "Converse Run Star"){collecttion_click_js2 = null}
    else if(click_you_cancle == "Jordan1"){collecttion_click_js3 = null}
    else if(click_you_cancle == "Jordan3"){collecttion_click_js4 = null}
    else if(click_you_cancle == "New Balance 327"){collecttion_click_js5 = null}
    else if(click_you_cancle == "New Balance 993"){collecttion_click_js6 = null}
    else if(click_you_cancle == "X Supreme"){collecttion_click_js7 = null}
    else if(click_you_cancle == "Nike Air Force"){collecttion_click_js8 = null}
    else if(click_you_cancle == "NIKE Dunk"){collecttion_click_js9 = null}
    else if(click_you_cancle == "Luxury Collection"){collecttion_click_js10 = null}



    //
    else if(click_you == "인기순"){order_flag_js = "popular"}
    else if(click_you == "프리미엄순"){order_flag_js = "pricepremium"}
    else if(click_you == "즉시 구매가순"){order_flag_js = "lowest"}
    else if(click_you == "즉시 판매가순"){order_flag_js = "highest"}
    else if(click_you == "판매일순"){order_flag_js = "date_released"}

    //취소
    else if(click_you == "카테취소"){category_click_js = null}
    else if(click_you == "섭카테취소"){subcategory_click_js = null}
    else if(click_you == "가격취소"){price_click_js = null}
    else if(click_you == "정렬취소"){order_flag_js = null}
    else if(click_you == "럭셔리취소"){collecttion_click_js10 = null}

    else if(click_you == "가격별취소"){
            price_js1 = null;
            price_js2 = null;
            price_js3 = null;
            price_js4 = null;
            price_js5 = null;
        }




    /*엑시오스실행문*/
    let axios4 = '/api/pro_userlist';
    axios.request({
        method:"POST",
        url:axios4,
        headers:{'Content-type':'application/json'},
        data:{
            "data":{
                "category" : category_click_js ,
                "subcategory" : subcategory_click_js ,
                "gender" : gender_click_js ,
                "brand" : brand_click_js,
                "brand2" : brand_click_js2,
                "brand3" : brand_click_js3,
                "brand4" : brand_click_js4,
                "brand5" : brand_click_js5,
                "brand6" : brand_click_js6,
                "brand7" : brand_click_js7,
                "brand8" : brand_click_js8,
                "brand9" : brand_click_js9,
                "brand10" : brand_click_js10,
                "brand11" : brand_click_js11,
                "brand12" : brand_click_js12,
                "brand13" : brand_click_js13,
                "brand14" : brand_click_js14,
                "brand15" : brand_click_js15,
                "brand16" : brand_click_js16,
                "brand17" : brand_click_js17,
                "brand18" : brand_click_js18,
                "brand19" : brand_click_js19,
                "brand20" : brand_click_js20,
                "collection" : collecttion_click_js ,
                "collection2" : collecttion_click_js2 ,
                "collection3" : collecttion_click_js3 ,
                "collection4" : collecttion_click_js4 ,
                "collection5" : collecttion_click_js5 ,
                "collection6" : collecttion_click_js6 ,
                "collection7" : collecttion_click_js7 ,
                "collection8" : collecttion_click_js8 ,
                "collection9" : collecttion_click_js9 ,
                "collection10" : collecttion_click_js10 ,
                "price" : price_click_js,
                "orderFlag":order_flag_js,
                "sizeType":shoe_size_js,
                "sizeType2":shoe_size_js2,
                "sizeType3":shoe_size_js3,
                "sizeType4":shoe_size_js4,
                "sizeType5":shoe_size_js5,
                "sizeType6":shoe_size_js6,
                "sizeType7":shoe_size_js7,
                "sizeType8":shoe_size_js8,
                "sizeType9":shoe_size_js9,
                "sizeType10":shoe_size_js10,
                "sizeType11":shoe_size_js11,
                "price1":price_js1,
                "price2":price_js2,
                "price3":price_js3,
                "price4":price_js4,
                "price5":price_js5,
                "price6":price_js6,
            }
        }
    }).then(function (response2){
        $('.default_list').css({"display":"none"});
        console.log(response2);
        console.log("카테고리 :" + category_click_js)
        console.log("서브카테고리 :" + subcategory_click_js)
        console.log("성별 :" + gender_click_js)
        console.log("브랜드 :" + brand_click_js)
        console.log("컬렉션 :" + collecttion_click_js)
        console.log("가격 :" + price_click_js)
        console.log("사이즈 :" + shoe_size_js)
        console.log("분류 :"+order_flag_js )
        console.log("12 :"+brand_click_js12)
        console.log("20 :"+brand_click_js20)






        let pro_con = $(' <div class="sec_flex_box cate_list">');
        for (let i in response2.data.data) {
            let $proBrand = response2.data.data[i].brand;
            let $proName = response2.data.data[i].name;
            let $proReleasePrice = response2.data.data[i].price;
            let $proImg = response2.data.data[i].origFileName;
            let $pro_id = response2.data.data[i].id;
            let $premium_per = response2.data.data[i].premium;
            if($premium_per="null%"){
                $premium_per = '0%';
            }
            if($proReleasePrice == null){
                $price = "-"
            }else{
                $price = priceToString($proReleasePrice);
            }
            function priceToString($proReleasePrice){
                return $proReleasePrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
            }
            // <a th:href="@{'/user/edit/' + ${id}}"> <button>수정</button> </a>
            //             '<th class="th1" onclick="location.href=\'/notice_24/'+ $category +';"</th>' +
            if(order_flag_js != "pricepremium"){
                let con = $('<div  class="sec_img_box" style="cursor: pointer">').append(
                    '<div id="reImg"><div class="sec_mark_box"><a href="#" class="a_mark"><div class="sec_marking" value="'+$pro_id+'"></div></a></div></div> '+
                    '<div><img src="/lib/product/'+$proImg +'" class="sec_img"  onclick="location.href=\'/product/'+ $pro_id+'\';" id="sec2_img1" no-repeat center/cover;></div>' +
                    '<div class="sec_brand_box"> <div class="sec_brand_line"> </div>' +
                    '<div class="sec_brand_text">' + $proBrand + '</div>' +
                    '<div class="sec_brand_s_text">' + $proName + '</div>' +
                    '<div class="sec_price">' +
                    '<div class="sec_num">' + $price + '</div><div class="sec_won">원</div></div><div class="sec_price_text">즉시 구매가</div>' +
                    '</a></div>'

                )
                pro_con.append(con);
            }else{
                let con = $('<div  class="sec_img_box" style="cursor: pointer">').append(
                    '<div id="reImg"><div class="sec_mark_box"><a href="#" class="a_mark"><div class="sec_marking" value="'+$pro_id+'"></div></a></div></div> '+
                    '<div><img src="/lib/product/'+$proImg +'" class="sec_img"  onclick="location.href=\'/product/'+ $pro_id+'\';" id="sec2_img1" no-repeat center/cover;>' +
                    '<div class="status_value premium_up">'+$premium_per+'</div></div> '+
                    '<div class="sec_brand_box"> <div class="sec_brand_line"> </div>' +
                    '<div class="sec_brand_text">' + $proBrand + '</div>' +
                    '<div class="sec_brand_s_text">' + $proName + '</div>' +
                    '<div class="sec_price">' +
                    '<div class="sec_num">' + $price + '</div><div class="sec_won">원</div></div><div class="sec_price_text">즉시 구매가</div>' +
                    '</a></div>'

                )
                pro_con.append(con);
            }

        }
        pro_con.append('</div>');

        $('.search_result_list').html(pro_con);


    }).catch(function (err) {
        console.log(err);
    })
}

/*===사이즈 체크 1===*/
sizebox = [];
$(document).on('click', '.menu_size', function () {

    let index = $(".menu_size").index(this);

    if (sizebox[index] != 1) {
        sizebox[index] = 1;

        $('.menu_size:eq(' + index + ')').children('.menu_link_size')
            .children('.link_txt_size').css("fontWeight", 'bold');
        $('.menu_size:eq(' + index + ')').css({border: "0.1rem solid black"})
        let click_size = $('.menu_size:eq(' + index + ')').children('.menu_link_size')
            .children('.link_txt_size').text();
        console.log(typeof (click_size))
        click_you = click_size;
        click_you_cancle = null;

    } else if (sizebox[index] == 1) {
        sizebox[index] = 0;

        $('.menu_size:eq(' + index + ')').children('.menu_link_size')
            .children('.link_txt_size').css("fontWeight", 'unset');
        $('.menu_size:eq(' + index + ')').css({border: "0.1rem solid rgb(202, 202, 202)"})
        let click_size = $('.menu_size:eq(' + index + ')').children('.menu_link_size')
            .children('.link_txt_size').text();
        click_you_cancle= click_size;
        click_you = null;

    }

    sendit()
})


/*===사이즈 체크 1 (의류)===*/

sizebox_cloth = [];
$(document).on('click', '.menu_cloth_size', function () {

    let index = $(".menu_cloth_size").index(this);

    if (sizebox_cloth[index] != 1) {
        sizebox_cloth[index] = 1;

        $('.menu_cloth_size:eq(' + index + ')').children('.menu_link_size')
            .children('.link_txt_size').css("fontWeight", 'bold');
        $('.menu_cloth_size:eq(' + index + ')').css({border: "0.1rem solid black"})

        let click_size = $('.menu_cloth_size:eq(' + index + ')').children('.menu_link_size')
            .children('.link_txt_size').text();
        click_you = click_size;
        click_you_cancle = null;

    } else if (sizebox_cloth[index] == 1) {
        sizebox_cloth[index] = 0;
        let click_size = $('.menu_cloth_size:eq(' + index + ')').children('.menu_link_size')
            .children('.link_txt_size').text();
        $('.menu_cloth_size:eq(' + index + ')').css({border: "0.1rem solid rgb(202, 202, 202)"})

        click_you_cancle= click_size;
        click_you = null;

    }
    sendit()

})





pricebox = [];
let checkImg_price = document.querySelectorAll(".menu_price");
$(document).on('click', '.menu_price', function () {

    let index = $(".menu_price").index(this);

    if (pricebox[index] != 1) {
        pricebox[index] = 1;
        $('.menu_price:eq(' + index + ')').children('.menu_link')
            .children('.price_check').attr("src", "/lib/img/check_box_b.png");

        let check_for_price = $('.menu_price:eq(' + index + ')').children('.menu_link')
            .children('.link_txt').text();
        console.log(checkImg_price)
        for(let i in checkImg_price){
            if(index !=  i ){
                $('.menu_price:eq(' + index + ')').children('.menu_link')
                    .children('.price_check').attr("src", "/lib/img/check_box.png");
                console.log(index +"번째 체크박스 !=" + i)
            }
        }

        click_you = check_for_price;
        click_you_cancle = null;

    } else if (pricebox[index] == 1) {
        pricebox[index] = 0;
        $('.menu_price:eq(' + index + ')').children('.menu_link')
            .children('.price_check').attr("src", "/lib/img/check_box.png");
        let check_for_price = $('.menu_price:eq(' + index + ')').children('.menu_link')
            .children('.link_txt').text();
        click_you= null;
        click_you_cancle = check_for_price;

    }
    sendit()

});




/*=====상품 좋아요 체크 기능 =====*/
mark1 = [];
mark_check = 0;


$(function () {
    $('.filter_title').click(function () {
        // $(this).parent(".filter_title").parent(".filter_list").children(".filter_menu").slideToggle('fast');
        $(this).next(".filter_menu").slideToggle('fast');

        // $(this).parent(".filter_title").next(".filter_menu").slideToggle('fast');

        $(this).next(".filter_menu_size").slideToggle('fast');
    });
});

// $(document).on('click', '.sec_marking', function pro_like() {
//     console.log(sessionStorage.getItem("userid"));
//     if (sessionStorage.getItem("userid") == null) {
//         alert("로그인을 해주세용 >3<")
//         location.href = '/login';
//     } else {
//         let index = $(".sec_marking").index(this);
//         proId = document.querySelectorAll('.sec_marking').item(index).getAttribute('value');
//         const popup = document.getElementsByClassName('layer_container')[0];
//         // const customer_id = sessionStorage.getItem( "userid")
//         popup.style.display = "flex";
//         console.log(proId);
//         const body = document.querySelector('body');
//         body.style.overflow = 'hidden'
//     }
// });


/*
    클릭시 해당 클래스 인덱스값 저장 -> 상품 좋아요 카운트 저장 ->
    확인 누르면 레이어 닫음, 카운트 >0 이면 인덱스 값의 클래스의 스타일 변경
*/


/*========= 사이드바 버튼 이미지 변경 ================*/
side_btn = [];
$(document).on('click', '.filter_title', function () {
    let index = $(".filter_title").index(this);
    if (side_btn[index] != 1) {
        side_btn[index] = 1;
        $('.filter_title:eq(' + index + ')').children('.ico_box')
            .children('.side_btn').attr("src", '/lib/img/side_btn0.PNG');

    } else if (side_btn[index] == 1) {
        side_btn[index] = 0;
        $('.filter_title:eq(' + index + ')').children('.ico_box')
            .children('.side_btn').attr("src", '/lib/img/side_btn1.PNG');
    }
    console.log(side_btn[index])
});


$('html').click(function (e) {
    if ($(e.target).parents('.className').length < 1) {
        const desc = document.getElementsByClassName("select_desc")[0];
        desc.style.display = "none";

    }
});


// p:eq(0)

/*======== 여러 클래스중 클릭한 것만 변경 ===========*/

$(document).on('click', '.s_desc', function (e) {
    // e.preventDefault();
    $(this).children('.desc_check').css({'display': 'block'});

    //   $(this).children('.desc_box').css({'font-weight':'bold'});

    $('.s_desc').not($(this)).children('.desc_check').css({'display': 'none'});
    //   $('.s_desc').not($(this)).children('desc_box').css({'font-weight':'unset'});
});

/***************************************************/
/*                                                 */
/***************************************************/
/*=====럭셔리 체크 기능 =====*/
//럭셔리 탑 버튼 (O)
let LuxuryCollection = document.querySelectorAll('#LuxuryCollection');
let checkLuxImg = document.querySelectorAll('.checkLuxImg');
$(document).on('click', '.btn_quick_filter_js_2', function (e) {
    e.preventDefault();
    if (LuxuryCollection[0].checked == false) {
        LuxuryCollection[0].checked = true;
        checkLuxImg[0].src = "/lib/img/check_box_b.png";
        $('.btn_quick_filter_js_2').css({
            "background-color": "rgb(250, 221, 221)",
            "color": "rgb(252, 121, 121)"
        });
        click_you= "Luxury Collection";
        sendit();


    }else if(LuxuryCollection[0].checked == true){
        LuxuryCollection[0].checked = false;
        checkLuxImg[0].src = "/lib/img/check_box.png";
        $('.btn_quick_filter_js_2').css({"background-color":"rgb(240, 240, 240)","color":"black"});
        click_you= "럭셔리취소";
        sendit();
    }
})
//사이드 카테고리 체크박스_ 럭셔리 (O)
$('.checkMenuLux').on('click', function () {

    if (LuxuryCollection[0].checked == false) {
        LuxuryCollection[0].checked = true;
        checkLuxImg[0].src = "/lib/img/check_box_b.png";
        $('.btn_quick_filter_js_2').css({
            "background-color": "rgb(250, 221, 221)",
            "color": "rgb(252, 121, 121)"
        });

        click_you= "Luxury Collection";
        sendit();
    } else if (LuxuryCollection[0].checked == true) {
        LuxuryCollection[0].checked = false;
        checkLuxImg[0].src = "/lib/img/check_box.png";
        $('.btn_quick_filter_js_2').css({"background-color": "rgb(240, 240, 240)", "color": "black"});
        click_you= "럭셔리취소";

        sendit();
    }
});
//다지우기
$('.st_clear').on('click', function () {
    location.reload();
})

//탑 버튼 럭셔리 ~ 테크 (O)
let catecheck2 = document.querySelectorAll('.checkInput');
let checkImg = document.querySelectorAll(".checkImg");
$(document).on('click', '.btn_quick_filter_js', function (e) {
    e.preventDefault();
    let index = $(".btn_quick_filter_js").index(this);
    if (catecheck2[index].checked == false) {
        catecheck2[index].checked = true;
        $('.top_box').eq(index + 1).css({"display": "block"});
        $('.top_box').not($('.top_box').eq(index + 1)).css({"display": "none"});
        checkImg[index].src = "/lib/img/check_box_b.png";
        for (let i in checkImg) {
            if (i != index) {
                checkImg[i].src = "/lib/img/check_box.png";
                catecheck2[i].checked = false;
            }
        }
        $(this).css({"background-color": "rgb(250, 221, 221)", "color": "rgb(252, 121, 121)"});

        $('.btn_quick_filter_js').not($(this)).css({
            "background-color": "rgb(240, 240, 240)",
            "color": "black"
        });

        console.log(catecheck2[index])
        let $save_check = catecheck2[index]
        let $cate_sell = $save_check.value;
        click_you = $cate_sell;


    } else if (catecheck2[index].checked == true) {
        catecheck2[index].checked = false;
        $('.top_box').eq(0).css({"display": "block"});
        $('.top_box').not($('.top_box').eq(0)).css({"display": "none"});
        checkImg[index].src = "/lib/img/check_box.png";
        $(this).css({"background-color": "rgb(240, 240, 240)", "color": "black"});
        click_you= "카테취소";

    }



    sendit()
});

//카티고리 체크박스 (O)
let checkButton = document.querySelectorAll(".btn_quick_filter_js");
$(document).on('click', '.checkMenu', function () {
    let index = $(".checkMenu").index(this);
    if (catecheck2[index].checked == false) {
        $('.top_box').eq(index + 1).css({"display": "block"});
        $('.top_box').not($('.top_box').eq(index + 1)).css({"display": "none"});

        catecheck2[index].checked = true;
        checkImg[index].src = "/lib/img/check_box_b.png";
        for (let i in checkImg) {
            if (i != index) {
                checkImg[i].src = "/lib/img/check_box.png";
                catecheck2[i].checked = false;
            }
        }
        $(checkButton[index]).css({"background-color": "rgb(250, 221, 221)", "color": "rgb(252, 121, 121)"});
        $(checkButton).not($(checkButton[index])).css({
            "background-color": "rgb(240, 240, 240)",
            "color": "black"
        });

        console.log(catecheck2[index])
        let $save_check = catecheck2[index]
        let $cate_sell = $save_check.value;
        click_you = $cate_sell;
        click_you_cancle = null;


    } else if (catecheck2[index].checked == true) {

        $('.brandclick').css({"display": "none"});
        catecheck2[index].checked = false;
        $('.top_box').eq(0).css({"display": "block"});
        $('.top_box').not($('.top_box').eq(0)).css({"display": "none"});
        checkImg[index].src = "/lib/img/check_box.png";
        $(checkButton[index]).css({"background-color": "rgb(240, 240, 240)", "color": "black"});
        click_you= "카테취소";

    }


    sendit()
});




//브랜드 클릭
let brandCheck = document.querySelectorAll('.brand_img');
$(document).on('click', '.brand_img', function () {
    let index = $(".brand_img").index(this);
    let $brand_click = brandCheck[index]
    console.log(brandCheck)
    console.log($brand_click);
    let $pick_brand = $brand_click.value;
    console.log($pick_brand);

    click_you = $pick_brand;
    sendit()
    $(".no_input").css('display', 'none');
    $(".has_input").css('display', 'block');
    $('input[name=검색메인]').attr('value', click_you);
})

$(document).on('click', '.stop', function () {
    location.reload();
})

// 로컬스토리지 최근 검색어 불러오기
if (localStorage.getItem("recent_search_keywords") == null || localStorage.getItem("recent_search_keywords") == '') {
} else {
    let recent_search_keywords = localStorage.getItem("recent_search_keywords");
    let recent_search_keywords_List = recent_search_keywords.split(',');
    recent_search_keywords_List.reverse();
    // 헤더 최근 검색어 목록
    for (let keyword of recent_search_keywords_List) {
        $('ul.search_list').append('<li><a href="/search/" class="search_item">' + keyword + '</a></li>');
    }
}

// 헤더 검색창
var btn_search1 = document.getElementById("hb_no_text");

var btn_close = document.getElementsByClassName("btn_close").item(0);
var layer_search = document.getElementsByClassName("layer_search").item(0);

// 헤더 최근 검색어 삭제
var btn_delete = document.getElementsByClassName("btn_delete").item(0);
var search_list = document.getElementsByClassName("search_list").item(0);
var recent_box = document.getElementsByClassName("recent_box").item(0);

var pop_button = document.getElementsByClassName("pop_button_img").item(0);

// 헤더 검색 창 열고 닫기
btn_search1.onclick = function () {
    if (layer_search.style.display == 'none') {
        layer_search.style.display = 'block';
    } else {
        layer_search.style.display = 'none';
    }
}


// 검색창 텍스트 입력 실시간 감지
$(".in_search").on("propertychange change keyup paste input", function () {
    console.log("감지중")
    let keyword = $(".in_search").val();
    console.log("실시간확인값 = " + keyword)
    let keywordLower = keyword.toLowerCase();
    console.log(keywordLower)

    $(".search_suggests").css('display', 'block');
    axios.request({
        method: "POST",
        url: '/api/pro_searchlist/' + keywordLower,
        headers: {'Content-type': 'application/json'}
    }).then(function (response) {
        console.log(response)
        if (response.data.data == null || response.data.data == '') {
            $(".suggest_area").html('<div class="result_nodataa">' +
                '<p class="nodata_main">검색하신 결과가 없습니다.</p>' +
                '<p class="nodata_sub">상품 등록 요청은 앱 <span class="emphasis">1:1 문의하기</span> 로 요청해주세요.</p>' +
                '</div>');
        } else {
            $(".search_suggests").html("");
            $(".suggest_area").html('<div class="suggest_title_area"><p class="suggest_title">' + keyword + '</p></div>');

            let divList = $('<div class="suggest_listt lg">');
            for (let i = 0; i < response.data.data.length; i++) {
                let productId = response.data.data[i].productId;
                let name = response.data.data[i].name;
                let korName = response.data.data[i].korName;
                let file = response.data.data[i].origFileName;

                let divItem = $('<div class="suggest_item">');
                divItem.append('<a href="/product/' + productId + '" class="suggest_linkk">' +
                    '<div class="suggest_thumb">' +
                    '<img src="/lib/product/' + file + '" alt="' + korName + '" class="thumb_img">' +
                    '</div>' +
                    '<div class="suggest_info">' +
                    '<p class="model_title">' + name + '</p>' +
                    '<p class="model_sub_info">' + korName + '</p>' +
                    '</div></a></div>'
                );
                divList.append(divItem);
            }
            $(".search_suggests").append(divList);
        }
    });
});

// 검색창 엔터키 입력시 발생 이벤트
$(".in_search").on("keydown", function (key) {
    if (key.keyCode == 13) {//키가 13이면 실행 (엔터는 13)
        if (localStorage.getItem("recent_search_keywords") == null || localStorage.getItem("recent_search_keywords") == '') {
            localStorage.setItem("recent_search_keywords", $(".in_search").val());
        } else {
            let recent_search_keywords = localStorage.getItem("recent_search_keywords");
            recent_search_keywords = recent_search_keywords + ',' + $(".in_search").val();
            localStorage.setItem("recent_search_keywords", recent_search_keywords);
            location.href = '/search';
        }
    }
});

// 검색창 텍스트 지우기 버튼 클릭 이벤트
$(".btn_search_delete").on("click", function () {
    $(".in_search").val('');
    $(".btn_search_delete").css('display', 'none');
    $(".recent_wrap").css('display', 'block');
    $(".search_suggests").css('display', 'none');
});


/*=====사이드바 체크 기능 =====*/
let searchCheck = document.querySelectorAll('.searchCheck');
let checkBoxImg = document.querySelectorAll(".checkBoxImg");
$(document).on('click', '.checkMenuLi', function () {
    let index = $(".checkMenuLi").index(this);
    console.log(index) //13
    if (searchCheck[index].checked == false) {

        searchCheck[index].checked = true;
        checkBoxImg[index].src = "/lib/img/check_box_b.png";

        console.log(searchCheck[index])
        let $save_brand = searchCheck[index]

        click_you = $save_brand.value //nike
        click_you_cancle = null


    } else if (searchCheck[index].checked == true) {
        searchCheck[index].checked = false;
        checkBoxImg[index].src = "/lib/img/check_box.png";
        console.log(searchCheck[index])
        let $save_brand = searchCheck[index]
        click_you_cancle = $save_brand.value
        click_you = null
    }
    sendit();
})

let num = 0;
$(document).on('click', '.filter_sorting', function () {
    const desc = document.getElementsByClassName("select_desc")[0];
    desc.style.display = "block";
    if (num == 1) {
        desc.style.display = "none";
        num = 0;
    }
});

const change = document.getElementsByClassName("changeText")[0];
$('.s_desc').click(function (e) {
    let stext = $(this).find(".select_s_text").text();
    change.textContent = '';
    change.textContent = stext;
    num = 1;
    click_you = stext;
    if(click_you_cancle != null){
        click_you_cancle = null;
    }
    sendit();


});



$(document).on('click', '.sec_marking', function pro_like() {
    const inspecion = document.getElementsByClassName('layer_container')[0];
    inspecion.style.display = "flex";
    const body = document.querySelector('body');
    body.style.overflow = 'hidden';
    let index = $(".sec_marking").index(this);
    console.log(document.querySelectorAll('.sec_marking').item(index));
    proId = document.querySelectorAll('.sec_marking').item(index).getAttribute('value');
    console.log(proId);
    console.log(proId + " /////" +customer_id)
    axios.get('/api/pro_userlist_cart/' + proId +'/'+ customer_id, {
    }).then(function (response) {
        console.log(response);
        let popImg = response.data.data.origFileName;
        let name = response.data.data.name;
        let korName = response.data.data.korName;
        let sizeData ='';
        let productData=
            '<div class="interest_img"><img src="/lib/product/'+popImg+'" alt="" class="interest_img_data"></div>'+
            '<div class="interest_info">'+
            '<p class="interest_model_title">'+name+'</p>'+
            '<p class="interest_sub_info">'+korName+'</p>'+
            '</div>';
        $('.interest_item').append(productData);
        for(let i in response.data.data.productSizeApiResponseList){
            let popSize = response.data.data.productSizeApiResponseList[i].size;
            if(response.data.data.productSizeApiResponseList[i].cnt != 0){
                sizeData =
                    '<div class="interest_box_btn" style="border: 1px solid black;">'+
                    '<input type="hidden" class="sizeValue" value="'+popSize+'">'+
                    '<a href="#" class="interest_btn_inner">'+
                    '<p class="interest_info_txt">'+popSize+'</p>'+
                    '<img src="/lib/img/h_img/logo/like_logo_b.PNG" alt="" class="sec_marking2">'+
                    '</a>'+
                    '</div>';
            }else{
                sizeData =
                    '<div class="interest_box_btn">'+
                    '<input type="hidden" class="sizeValue" value="'+popSize+'">'+
                    '<a href="#" class="interest_btn_inner">'+
                    '<p class="interest_info_txt">'+popSize+'</p>'+
                    '<img src="/lib/img/h_img/logo/like_logo.PNG" alt="" class="sec_marking2">'+
                    '</a>'+
                    '</div>';
            }
            $('.interest_un_list').append(sizeData);
        }

        /*=====상품 좋아요 체크 기능 =====*/
        mark1 = [];
        mark_check = 0;
        let sizeBtn = document.getElementsByClassName('interest_box_btn');
        let sizeMark = document.getElementsByClassName('sec_marking2');
        $('.interest_box_btn').on('click', function (){
            console.log(proId);
            let index = $(".interest_box_btn").index(this);
            let sizeSrc = sizeMark.item(index).getAttribute('src');
            if(sizeSrc=='/lib/img/h_img/logo/like_logo.PNG'){
                sizeMark.item(index).setAttribute('src', '/lib/img/h_img/logo/like_logo_b.PNG');
                sizeBtn.item(index).setAttribute('style', 'border: 1px solid black');
            }else if(sizeSrc=='/lib/img/h_img/logo/like_logo_b.PNG'){
                sizeMark.item(index).setAttribute('src', '/lib/img/h_img/logo/like_logo.PNG');
                sizeBtn.item(index).setAttribute('style', 'border: 1px rgb(223, 223, 223) solid');
            }
        });
    }).catch(function (err) {
        console.log(err);
    })

})

function comment_down() {
    const popdown = document.getElementsByClassName('layer_container')[0];
    popdown.style.display = "none";
    const body = document.querySelector('body');
    body.style.overflowY = 'unset';
    let sizeArr = [];
    let sizeMark = document.getElementsByClassName('sec_marking2');
    let sizeValue = document.getElementsByClassName('sizeValue');
    for(let i=0; i<sizeMark.length;i++){
        let sizeImg = sizeMark.item(i).getAttribute('src');
        let sizeVal = sizeValue.item(i).value;
        if(sizeImg=='/lib/img/h_img/logo/like_logo_b.PNG'){
            sizeArr.push(sizeVal);
        }
    }
    console.log(sizeArr)
    axios.get('/api/pro_userlist_cart/' + proId + '/' + customer_id, {
    }).then(function (response) {
        for(let i=0; i<response.data.data.productSizeApiResponseList.length; i++){
            let size = response.data.data.productSizeApiResponseList[i].size;
            let cnt = response.data.data.productSizeApiResponseList[i].cnt;
            if(cnt>0){
                let sizeCheck = 0;
                for(let j=0;j<sizeArr.length;j++){
                    if(size==sizeArr[j]){
                        sizeCheck = 1;
                    }
                }
                if(sizeCheck==0){
                    axios.delete(' /api/cart_delete/' + proId + '/' + size).then(function (response2) {
                        console.log('관심상품 취소');
                    });
                }
            }else if(cnt==0){
                for(let j=0;j<sizeArr.length;j++){
                    if(size==sizeArr[j]){
                        axios.request({
                            method: 'POST',
                            url: '/api/cart_register',
                            headers: {'Content-type': 'application/json'},
                            data: {
                                data: {
                                    sizeType: sizeArr[j],
                                    customerId: customer_id,
                                    productId: proId
                                }
                            }
                        }).then(
                            console.log("관심상품등록"),
                        )
                    }else{
                    }
                }
            }
        }
    });
    $('.interest_item').empty();
    $('.interest_un_list').empty();
}