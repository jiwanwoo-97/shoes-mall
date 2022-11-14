
$(function(){
    $('.Btextbox').click(function(){
        $('.Btextbox').removeClass("active");
        $(this).addClass("active");
        $(this).parent(".listmenu").next(".listmenus").slideToggle(100);
        if ($(this).parent(".listmenu").next(".listmenus").css('display')==='none') {
            $(this).children(".up").css('display', 'none');
            $(this).children(".down").css('display', 'inline');
        }
        if($(this).parent(".listmenu").next(".listmenus").css('display')==='block'){
            $(this).children(".up").css('display', 'inline');
            $(this).children(".down").css('display', 'none');
        }
    });

    $('.Stextbox').click(function(){
        $('.Stextbox').removeClass("active2");
        $(this).addClass("active2");
    });

    $('.sec_more').click(function(){
        $('.sec_more').removeClass("active");
        $(this).addClass("active");
        $(this).parent(".sec_more_button").css('display','none'); //버튼 안보이게
        $(this).parent(".sec_more_button").next(".more_page").fadeIn().css('display','block');
        $(this).parent(".sec_more_button").parent(".more_page").next(".more_page").fadeIn().css('display','block');
        // $(this).parent(".sec_more_button").next(".sec_flex_box").css('display','flex'); //버튼 부모의 옆에있는 클래스의 css
    });
});

$(document).ready(function() {
    $('.app_QR_click').click(function(){
        $("#down_app_size").css('display','flex');
    });
    var mySwiper = new Swiper('.swiper-container', {
        effect : 'fade',
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable : true,
        },

        scrollbar: {
            el: '.swiper-scrollbar',
            draggable: true,
        },

        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
    });
    $(".swiper-button-next").css({color:"rgba(0, 0, 0, 0)"});
    $(".swiper-button-prev").css({color:"rgba(0, 0, 0, 0)"});
    $(".swiper-scrollbar").css({width:"80%", margin:"0 auto"});
    $(".swiper-pagination-bullet").css({backgroundColor:"rgb(255, 255, 255)"});
    $(".swiper-pagination-bullet-active").css({backgroundColor:"rgb(255, 255, 255)"});
    var mySwiper2 = new Swiper('.swiper-container2', {
        effect : 'fade',
        scrollbar: {
            el: '.swiper-scrollbar',
            draggable: true,
        },
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
    });
    $(".swiper-scrollbar").css({width:"92%", margin:"0 auto"});
    $(".swiper-scrollbar-drag").css({backgroundColor:"rgb(255, 255, 255)"});
    $(".swiper-scrollbar").css({backgroundColor:"rgba(255, 255, 255, 0.3)"});
    $(".swiper-pagination-bullet").css({backgroundColor:"rgb(255, 255, 255)"});
    $(".swiper-pagination-bullet-active").css({backgroundColor:"rgb(255, 255, 255)"});

    const buttonRight = document.getElementById('slideRight');
    const buttonLeft = document.getElementById('slideLeft');
    buttonRight.onclick = function () {
        document.getElementById('insta_box1').scrollLeft += 203.5;
    };
    buttonLeft.onclick = function () {
        document.getElementById('insta_box1').scrollLeft -= 203;
    };

    const buttonRight2 = document.getElementById('slideRight_2');
    const buttonLeft2 = document.getElementById('slideLeft_2');
    buttonRight2.onclick = function () {
        document.getElementById('insta_box2').scrollLeft += 203.5;
    };
    buttonLeft2.onclick = function () {
        document.getElementById('insta_box2').scrollLeft -= 203;
    };

});


function pop(){
    const popup = document.getElementsByClassName('down_size')[0];
    popup.style.display = "block";
    const body = document.querySelector('body');
    body.style.overflow = 'hidden'
}

function pop_down_main(){
    const pop_interest_down = document.getElementsByClassName('interest_container')[0];
    pop_interest_down.style.display = "none"
    const popdown = document.getElementsByClassName('down_size')[0];
    popdown.style.display = "none"
    const body = document.querySelector('body');
    body.style.overflowY = 'unset'

}
let i=0;
function app_check(){
    const appimg = document.getElementsByClassName('app_img')[0];
    if(i==1){
        appimg.style.background = "url(/lib/img/check_white.png)"
        i=0;
    }else if(i==0){
        appimg.style.background = "url(/lib/img/check_black.png)"
        i=1;
    }
    console.log(i);

}

let b_info=0;
function business_info(){
    const business_img = document.getElementsByClassName('up_down_img')[0];
    const business_info = document.getElementsByClassName('business_info')[0];
    if(b_info==0){
        business_info.style.display ="block";
        business_img.style.background ="url(/lib/img/up_down_up.png)no-repeat center/cover";
        b_info=1;
    }else if(b_info==1){
        business_info.style.display ="none";
        business_img.style.background ="url(/lib/img/up_down_down.png)no-repeat center/cover";
        b_info=0;
    }
    console.log(b_info);

}
mark1 = [];
mark_check = 0;

$(document).on('click', '.sec_markimg', function pro_like() {
    const inspecion = document.getElementsByClassName('interest_container')[0];
    inspecion.style.display = "flex";
    const body = document.querySelector('body');
    body.style.overflow = 'hidden'
    let index = $(".sec_markimg").index(this);
    console.log(index);
    console.log(document.querySelectorAll('.sec_markimg').item(index));
    proId = document.querySelectorAll('.sec_markimg').item(index).getAttribute('value');

    customer_id = sessionStorage.getItem( "userid");
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
    const popdown = document.getElementsByClassName('interest_container')[0];
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




let timer=false;
const filterByDebounce=(e, callback)=> {
    if (timer) {
        clearTimeout(timer);
    }
    timer = setTimeout(function () {
        callback('' + e.target.value);
    }, 200); //200ms 이후 반응(디바운스)
}

//휴대폰번호 유효성 검사
function validateTell(strTell){
    const app_hp = /^01(?:0|1|[6-9])(?:\d{3}|\d{4})\d{4}$/;
    if(!app_hp.test(''+strTell)){
        return false;
    }
    return true;
}


$(document).ready(function() {

    if($( 'body' ).width()>=768){
        $('#insta_box1, #insta_button_box1').hover(function() {
            $("#insta_button_box1").css('display','block');
        }, function() {
            $("#insta_button_box1").css('display','none');
        });

        $('#insta_box2, #insta_button_box2').hover(function() {
            $("#insta_button_box2").css('display','block');
        }, function() {
            $("#insta_button_box2").css('display','none');
        });
        if($(".more_page").css("display")=='none'){
            $(".sec_more_button").css('display','block');
        }
    }else if($( 'body' ).width()<767){
        $(".more_page").css('display','none');
        $('#insta_box1, #insta_button_box1').hover(function() {
            $("#insta_button_box1").css('display','none');
        }, function() {
            $("#insta_button_box1").css('display','none');
        });

        $('#insta_box2, #insta_button_box2').hover(function() {
            $("#insta_button_box2").css('display','none');
        }, function() {
            $("#insta_button_box2").css('display','none');
        });
    }

    if($(window).resize( function() {
        var width2 = $( 'body' ).width();
        if(width2>=768){
            $('#insta_box1, #insta_button_box1').hover(function() {
                $("#insta_button_box1").css('display','block');
            }, function() {
                $("#insta_button_box1").css('display','none');
            });

            $('#insta_box2, #insta_button_box2').hover(function() {
                $("#insta_button_box2").css('display','block');
            }, function() {
                $("#insta_button_box2").css('display','none');
            });
            if($(".more_page").css("display")=='none'){
                $(".sec_more_button").css('display','block');
            }
        }else if(width2<767){
            $(".more_page").css('display','none');
            $('#insta_box1, #insta_button_box1').hover(function() {
                $("#insta_button_box1").css('display','none');
            }, function() {
                $("#insta_button_box1").css('display','none');
            });

            $('#insta_box2, #insta_button_box2').hover(function() {
                $("#insta_button_box2").css('display','none');
            }, function() {
                $("#insta_button_box2").css('display','none');
            });
        }
    }));
});

<!--메인페이지 상품 이미지의 배경 색상을 랜덤으로 지정-->
function MainBackgroundColor() {
    let color = ['rgb(235, 240, 245)','rgb(246, 238, 237)','rgb(244, 244, 244)'];
    let randomColor = Math.floor(Math.random()*color.length);
    let backColor = color[randomColor];
    return backColor;
};

//천단위 콤마 생성
function priceReplace(data) {
    return data.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

window.onload = function () {
    // 전화번호 유효성 검사 실행
    document.querySelector('#app_hp').addEventListener('input', e=>{
        filterByDebounce(e, strTell=>{
            if(!validateTell(strTell)){
                document.querySelector('.app_btn_submit').style.background='lightgray';
                document.querySelector('.app_btn_submit').style.color='gray';
            } else {
                document.querySelector('.app_btn_submit').style.background='black';
                document.querySelector('.app_btn_submit').style.color='white';
            }
        })
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


    // 헤더 검색창
    var btn_search1 = document.getElementById("hb_no_text");

    var btn_close = document.getElementsByClassName("btn_close").item(0);
    var layer_search = document.getElementsByClassName("layer_search").item(0);

    // 헤더 최근 검색어 삭제
    var btn_delete = document.getElementsByClassName("btn_delete").item(0);
    var search_list = document.getElementsByClassName("search_list").item(0);
    var recent_box = document.getElementsByClassName("recent_box").item(0);

    // 헤더 검색 창 열고 닫기
    btn_search1.onclick = function(){
        if(layer_search.style.display=='none'){
            layer_search.style.display = 'block';
        } else {
            layer_search.style.display = 'none';
        }
    }
    btn_close.onclick = function(){
        if(layer_search.style.display=='none'){
            layer_search.style.display = 'block';
        } else {
            layer_search.style.display = 'none';
        }
    }

    // 로컬스토리지 최근 검색어 불러오기
    if(localStorage.getItem("recent_search_keywords")==null || localStorage.getItem("recent_search_keywords")==''){

    }else{
        let recent_search_keywords = localStorage.getItem("recent_search_keywords");
        let recent_search_keywords_List = recent_search_keywords.split(',');
        recent_search_keywords_List.reverse();
        // 헤더 최근 검색어 목록
        for (let keyword of recent_search_keywords_List) {
            $('ul.search_list').append('<li><a href="/search/" class="search_item">' + keyword + '</a></li>');
        }
    }
    btn_delete.onclick = function(){
        if(localStorage.getItem("recent_search_keywords")==null || localStorage.getItem("recent_search_keywords")==''){

        }else{
            localStorage.removeItem('recent_search_keywords');
            $('.search_list').html('');
        }
    }

    // 검색창 텍스트 입력 실시간 감지
    $(".input_search").on("propertychange change keyup paste input", function() {
        let keyword = $(".input_search").val();
        let keywordLower = keyword.toLowerCase();
        $(".btn_search_delete").css('display','inline');
        $(".recent_wrap").css('display','none');
        $(".suggest_wrap").css('display','block');

        axios.request({
            method:"POST",
            url:'/api/pro_searchlist/'+keywordLower,
            headers:{'Content-type':'application/json'}
        }).then(function(response){
            if(response.data.data==null||response.data.data==''){
                $(".suggest_area").html('<div class="result_nodata">' +
                    '<p class="nodata_main">검색하신 결과가 없습니다.</p>' +
                    '<p class="nodata_sub">상품 등록 요청은 앱 <span class="emphasis">1:1 문의하기</span> 로 요청해주세요.</p>' +
                    '</div>');
            }else{
                $(".suggest_area").html('<div class="suggest_title_area"><p class="suggest_title">'+keyword+'</p></div>');
                let divList = $('<div class="suggest_list lg">');
                for (let i=0; i<response.data.data.length; i++){
                    let productId = response.data.data[i].productId;
                    let name = response.data.data[i].name;
                    let korName = response.data.data[i].korName;
                    let file = response.data.data[i].origFileName;

                    let divItem = $('<div class="suggest_item">');
                    divItem.append('<a href="/product/'+productId+'" class="suggest_link">' +
                        '<div class="suggest_thumb">' +
                        '<img src="/lib/product/'+file+'" alt="'+korName+'" class="thumb_img">' +
                        '</div>' +
                        '<div class="suggest_info">' +
                        '<p class="model_title">'+name+'</p>' +
                        '<p class="model_sub_info">'+korName+'</p>' +
                        '</div></a></div>'
                    );
                    divList.append(divItem);
                }
                let cnt = response.data.cnt;
                $(".suggest_area").append(divList);
                $(".suggest_area").append('<!--더보기버튼-->\n' +
                    '<a href="/search/'+keyword+'" class="more_link">' +
                    '<span class="more_text">'+cnt+'</span><img src="/lib/img/size_select_arrow_icon.png" class="ico-arr-right icon sprite-icons">' +
                    '</a>'
                );
            }
        });
    });

    // 검색창 엔터키 입력시 발생 이벤트
    $(".input_search").on("keydown", function(key) {
        if(key.keyCode == 13){//키가 13이면 실행 (엔터는 13)
            if(localStorage.getItem("recent_search_keywords")==null || localStorage.getItem("recent_search_keywords")==''){
                localStorage.setItem("recent_search_keywords",$(".input_search").val());
            }else{
                let recent_search_keywords = localStorage.getItem("recent_search_keywords");
                recent_search_keywords = recent_search_keywords+','+$(".input_search").val();
                localStorage.setItem("recent_search_keywords",recent_search_keywords);
                location.href='/search';
            }
        }
    });

    // 검색창 텍스트 지우기 버튼 클릭 이벤트
    $(".btn_search_delete").on("click",function(){
        $(".input_search").val('');
        $(".btn_search_delete").css('display','none');
        $(".recent_wrap").css('display','block');
        $(".suggest_wrap").css('display','none');
    });

    // 체크 박스 선택
    const checkboxAll = document.querySelectorAll('.polict_li');
    // 하나만 선택
    for (let i = 0; i < checkboxAll.length; i++) {
        checkboxAll[i].addEventListener('click',function(){
            if(this.querySelector('.pop_policy_body').style.display=='none'){
                this.querySelector('.pop_policy_body').style.display='block';
                this.querySelector('.pp_img').style.background='url(/lib/img/pop/policy_up.png)no-repeat center/cover';
                for(let j=0; j<checkboxAll.length; j++){
                    if(checkboxAll[j]!=checkboxAll[i]){
                        checkboxAll[j].querySelector('.pop_policy_body').style.display='none';
                        checkboxAll[j].querySelector('.pp_img').style.background='url(/lib/img/pop/policy_down.png)no-repeat center/cover';
                    }
                }
            } else{
                this.querySelector('.pop_policy_body').style.display='none';
                this.querySelector('.pp_img').style.background='url(/lib/img/pop/policy_down.png)no-repeat center/cover';
            }

        });
    }

    const categoryList = document.querySelectorAll('.category');
    const inspecionText = document.querySelectorAll('.inspecion_text');
    for(let i=0; i<categoryList.length; i++){
        categoryList[0].style.background='black';
        inspecionText[0].style.display='block';
        categoryList[i].addEventListener('click', function(){
            this.style.background='black';
            this.style.color="rgb(255, 255, 255)";
            this.style.border="1px solid black";
            inspecionText[i].style.display='block';
            for(let j=0; j<categoryList.length; j++){
                if(categoryList[i]!=categoryList[j]){
                    categoryList[j].style.background='white';
                    categoryList[j].style.color="rgb(161, 161, 161)";
                    categoryList[j].style.border="1px solid lightgray";
                    inspecionText[j].style.display='none';
                }
            }
        });
    }
}