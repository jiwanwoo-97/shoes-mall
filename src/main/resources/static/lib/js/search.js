

let click_you = null;
let click_you_cancle = null;





/*===사이즈 체크 1===*/
sizebox = [];
let sizeList = [];
$(document).on('click', '.menu_size', function () {


    sizeList=[];

    let index = $(".menu_size").index(this);
    let size=document.querySelectorAll('.menu_size')[index].innerText;
    if (sizebox[index] != 1) {
        sizebox[index] = size;

        $('.menu_size:eq(' + index + ')').children('.menu_link_size')
            .children('.link_txt_size').css("fontWeight", 'bold');
        $('.menu_size:eq(' + index + ')').css({border: "0.1rem solid black"})
        let click_size = $('.menu_size:eq(' + index + ')').children('.menu_link_size')
            .children('.link_txt_size').text();



    } else if (sizebox[index]>0) {
        sizebox[index] = 0;

        $('.menu_size:eq(' + index + ')').children('.menu_link_size')
            .children('.link_txt_size').css("fontWeight", 'unset');
        $('.menu_size:eq(' + index + ')').css({border: "0.1rem solid rgb(202, 202, 202)"})
        let click_size = $('.menu_size:eq(' + index + ')').children('.menu_link_size')
            .children('.link_txt_size').text();


    }
    sizeList = sizebox.filter((val) => val != null);
    send();




})


pricebox = [];
let priceItem;
let checkImg_price = document.querySelectorAll(".menu_price");
let checkImg = document.querySelectorAll(".price_check");
$(document).on('click', '.menu_price', function () {

    checkImg.forEach(function (event){
       event.src= "/lib/img/check_box.png";
       event.checked = false;
    });



    let index = $(".menu_price").index(this);

    if (pricebox[index] != 1) {
        pricebox[index] = 1;
        $('.menu_price:eq(' + index + ')').children('.menu_link')
            .children('.price_check').attr("src", "/lib/img/check_box_b.png");

        let check_for_price = $('.menu_price:eq(' + index + ')').children('.menu_link')
            .children('.link_txt').text();

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
    if(index=="0"){
        priceItem="10";
    }else if (index=="1"){
        priceItem="30";
    }else if(index=="2"){
        priceItem="50";
    }else if(index=="3"){
        priceItem="50+";
    }
    send();
});





/*
    클릭시 해당 클래스 인덱스값 저장 -> 상품 좋아요 카운트 저장 ->
    확인 누르면 레이어 닫음, 카운트 >0 이면 인덱스 값의 클래스의 스타일 변경
*/




/*========= 사이드바 버튼 이미지 변경 ================*/
side_btn = [];
$(document).on('click', '.filter_title', function () {
    let index = $(".filter_title").index(this);
    let filter_menu = document.getElementsByClassName("filter_menu");
    let filter_menu_size = document.getElementsByClassName("filter_menu_size");
    if(index<2) {
        if (filter_menu[index].style.display == 'none' || filter_menu[index].style.display == '') {
            filter_menu[index].style.display = 'block';
        } else {
            filter_menu[index].style.display = 'none';
        }
    }

   if(index == 2){
       if (filter_menu_size[0].style.display == 'none' || filter_menu_size[0].style.display == '') {
           filter_menu_size[0].style.display = 'block';
       } else {
           filter_menu_size[0].style.display = 'none';
       }
    }


    if (side_btn[index] != 1) {
        side_btn[index] = 1;
        $('.filter_title:eq(' + index + ')').children('.ico_box')
            .children('.side_btn').attr("src", '/lib/img/side_btn0.PNG');


    } else if (side_btn[index] == 1) {
        side_btn[index] = 0;
        $('.filter_title:eq(' + index + ')').children('.ico_box')
            .children('.side_btn').attr("src", '/lib/img/side_btn1.PNG');

    }

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

    $(this).children('.desc_check').css({'display': 'block'});

    $('.s_desc').not($(this)).children('.desc_check').css({'display': 'none'});

});

/***************************************************/
/*                                                 */
/***************************************************/

//다지우기
$('.st_clear').on('click', function () {
    location.reload();
})


//브랜드 클릭
let brandCheck = document.querySelectorAll('.brand_img');
$(document).on('click', '.brand_img', function () {

    let index = $(".brand_img").index(this);
    let $brand_click = brandCheck[index]

    let $pick_brand = $brand_click.value;


    click_you = $pick_brand;

    $(".no_input").css('display', 'none');
    $(".has_input").css('display', 'block');
    $('input[name=검색메인]').attr('value', click_you);
})

$(document).on('click', '.stop', function () {
    location.reload();
})


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


// 검색창 텍스트 입력 실시간 감지
$(".in_search").on("propertychange change keyup paste input", function () {

    let keyword = $(".in_search").val();

    let keywordLower = keyword.toLowerCase();


    $(".search_suggests").css('display', 'block');
    axios.request({
        method: "POST",
        url: '/api/pro_searchlist/' + keywordLower,
        headers: {'Content-type': 'application/json'}
    }).then(function (response) {

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

let brandList = [];
$(document).on('click', '.checkMenuLi', function () {
    brandList = [];




    let index = $(".checkMenuLi").index(this);


    if (searchCheck[index].checked == false) {
        searchCheck[index].checked = true;
        checkBoxImg[index].src = "/lib/img/check_box_b.png";


    } else if (searchCheck[index].checked == true) {
        searchCheck[index].checked = false;
        checkBoxImg[index].src = "/lib/img/check_box.png";
    }

    searchCheck.forEach(function (event){
        if(event.checked == true){
            brandList.push(event.value);
        }
    });
    send();
});




let num = 0;
let sortItem;
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
    if(stext == "발매가 순"){
        sortItem = "productLow"
    }else if(stext == "판매가 순"){
        sortItem = "saleLow"
    }else if(stext == "구매가 순"){
        sortItem = "purLow"
    }
    send();

});

function send() {
    let brandStr =  brandList.join();
    let sizeStr = sizeList.join();

    $.ajax({
        type: "post",
        url: "/api/products/search",
        data:
            JSON.stringify({
                "brand": brandStr,
                "size": sizeStr,
                "price": priceItem,
                "sort": sortItem
            }),

        contentType: "application/json",
        dataType: "json"
    }).done(response => {
        $('.default_list').css({"display": "none"});


        let pro_con = $(' <div class="sec_flex_box cate_list">');
        for (let i in response) {
            let $proBrand = response[i].brand;
            let $proName = response[i].name;
            let $proReleasePrice = response[i].releasePrice;
            let $proImg = response[i].image;
            let $pro_id = response[i].id;

            if ($proReleasePrice == null) {
                price = "-"
            } else {
                price = priceToString($proReleasePrice);
            }

            function priceToString($proReleasePrice) {
                return $proReleasePrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
            }

            let con = $('<div  class="sec_img_box" style="cursor: pointer">').append(
                '<div id="reImg"><div class="sec_mark_box"><a href="#" class="a_mark"><div class="sec_marking" value="' + $pro_id + '"></div></a></div></div> ' +
                '<div><img src="/upload/' + $proImg + '" class="sec_img"  onclick="location.href=\'/products/' + $pro_id + '\';" id="sec2_img1" no-repeat center/cover;></div>' +
                '<div class="sec_brand_box"> <div class="sec_brand_line"> </div>' +
                '<div class="sec_brand_text">' + $proBrand + '</div>' +
                '<div class="sec_brand_s_text">' + $proName + '</div>' +
                '<div class="sec_price">' +
                '<div class="sec_num">' + price + '</div><div class="sec_won">원</div></div><div class="sec_price_text">발매가</div>' +
                '</a></div>'
            )
            pro_con.append(con);
        }
        pro_con.append('</div>');

        $('.search_result_list').html(pro_con);

    }).fail(error => {

    });
}




