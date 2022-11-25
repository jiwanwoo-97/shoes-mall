
const box = document.querySelector('.is_fixed');

function scrollFunc() {
    let ww = $(window).width();
    if (ww > 768) {
        if (pageYOffset > 800) { //1330
            box.style.position = 'absolute';
            box.style.top = "900px";
        } else if (pageYOffset <= 870) { //1400
            box.style.position = 'fixed';
            box.style.top = "";
        }
    }

}

window.addEventListener('scroll', scrollFunc);


/* 그래프 버튼 */
$('.item').click(function () {
    $('.item').removeClass("active");
    $(this).addClass("active");
});

/* 그래프 */
$(".item1").addClass('item_link_on');

$(document).on('click', '.item', function () {
    let index = $('.item').index(this);
    if (index == 0) {
        $(".item1").removeClass("item_link_on")
        $('.graph_box').not($(this)).css({"display": "none"});
        $('.graph_box').eq(index).css({"display": "flex"});
    } else if (index == 1) {
        $(".item1").removeClass("item_link_on")
        $('.graph_box').not($(this)).css({"display": "none"});
        $('.graph_box').eq(index).css({"display": "flex"});
    } else if (index == 2) {
        $(".item1").removeClass("item_link_on")
        $('.graph_box').not($(this)).css({"display": "none"});
        $('.graph_box').eq(index).css({"display": "flex"});
    } else if (index == 3) {
        $(".item1").removeClass("item_link_on")
        $('.graph_box').not($(this)).css({"display": "none"});
        $('.graph_box').eq(index).css({"display": "flex"});
    } else if (index == 4) {
        $('.graph_box').not($(this)).css({"display": "none"});
        $('.graph_box').eq(index).css({"display": "flex"});
    }
});


/* 더보기 버튼 */
$(function () {
    $('.more_btn').click(function () {
        $('.more_btn').removeClass("active");
        $(this).addClass("active");
        $(this).parent(".more_btn_box").css('display', 'none');
        $(this).parent(".more_btn_box").next(".more_stylepage").fadeIn().css('display', 'block');
        $(this).parent(".more_btn_box").parent(".more_stylepage").next(".more_stylepage").fadeIn().css('display', 'block');
    })

});


$('.items').click(function () {
    $('.items').removeClass("active");
    $(this).addClass("active");
});
$(".items_1").addClass('item_link_on');

$(document).on('click', '.items', function () {
    let index = $('.items').index(this);
    if (index == 0) {
        $(".items_1").removeClass("item_link_on")
        $('.dis').not($(this)).css({"display": "none"});
        $('.dis').eq(index).css({"display": "flex"});
    } else {
        $('.dis').not($(this)).css({"display": "none"});
        $('.dis').eq(index).css({"display": "flex"});
    }
});






//팝업 판매 입찰, 구매입찰 버튼
$(document).on('click', '.item_linkp', function () {
    let index = $(".item_linkp").index(this);
    console.log(index)

    $(this).addClass('on');
    $('.item_linkp').not($(this)).removeClass('on')

    if (index == 0) {

        $('.market_price_table').css({"display": "none"})
        $('.market_price_table').eq(index).css({"display": "block"})

    } else if (index == 1) {
        $('.market_price_table').css({"display": "none"})
        $('.market_price_table').eq(index).css({"display": "block"})
    } else {
        $('.market_price_table').css({"display": "none"})
        $('.market_price_table').eq(index).css({"display": "block"})
    }

});

function comment_up() {
    $('.item_linkp').eq(0).addClass('on')
    $('.market_price_table').eq(0).css({"display": "block"})
    const popup = document.getElementsByClassName('layer_container')[0];
    popup.style.display = "block";
    const body = document.querySelector('body');
    body.style.overflow = 'hidden'
}

function comment_down() {
    $('.item_linkp').removeClass('on')
    $('.market_price_table').css({"display": "none"})
    const popup = document.getElementsByClassName('layer_container')[0];
    popup.style.display = "none";
    const body = document.querySelector('body');
    body.style.overflow = 'unset';
}

function sell_down() {
    $('.sell_class').removeClass('on')
    $('.layer_container').css({"display": "none"})
    $('.item_linkp').removeClass('on')
    $('.market_price_table').css({"display": "none"})
    const popup = document.getElementsByClassName('layer_container')[0];
    popup.style.display = "none";
    const body = document.querySelector('body');
    body.style.overflow = 'unset';
}

function size_popup_delete() {

    $('.ad_popup_size').removeClass('on');
    $('.select_only_size').css({"display": "none"});
    const popup = document.getElementsByClassName('layer_container2')[0];
    popup.style.display = "none";
    const body = document.querySelector('body');
    body.style.overflow = 'unset';
}

function everysizePop() {
    $('.layer2.lg.layer_detail_size_select2.select_only_size').css({"display": "block"})
    const popup = document.getElementsByClassName('layer_container2')[0];
    popup.style.display = "block";
    const body = document.querySelector('body');
    body.style.overflow = 'hidden'
}

function everysizePopdown() {
    $('.layer2').css({"display": "flex"})
    const popup = document.getElementsByClassName('layer_container2')[0];
    popup.style.display = "none";
    const body = document.querySelector('body');
    body.style.overflow = 'unset';
}


/*서영서연*/
mark1 = [];
mark_check = 0;

/*
$(document).on('click', '.sec_marking', function pro_like() {
    if(sessionStorage.getItem('userid')!=null){

        const inspecion = document.getElementsByClassName('layer_container')[1];
        inspecion.style.display = "flex";
        const body = document.querySelector('body');
        body.style.overflow = 'hidden'
        let index = $(".sec_marking").index(this);

        proId = document.querySelectorAll('.sec_marking').item(index).getAttribute('value');
        customer_id = sessionStorage.getItem( "userid");

        console.log(proId + " /////" +customer_id)
        axios.get('/api/pro_userlist_cart/' + proId +'/'+ customer_id, {
        }).then(function (response) {
            console.log(response);
            let popImg = response.data.data.origFileName;
            let name = response.data.data.name;
            let sizeData ='';


            let productData=
                '<div class="sg_img"><img src="/lib/product/'+ popImg+'" class="img_data"></div>'+
                '<div class="sg_info">'+
                '<p class="model_title">'+name+'</p>'+
                '</div>';

            $('.sg_item').append(productData);
            for(let i in response.data.data.productSizeApiResponseList){
                let popSize = response.data.data.productSizeApiResponseList[i].size;
                if(response.data.data.productSizeApiResponseList[i].cnt != 0){
                    sizeData =
                        '<div class="interest_box_btn" style="border: 1px solid black;">'+
                        '<input type="hidden" class="sizeValue" value="'+popSize+'">'+
                        '<a href="#" class="btn_inner">'+
                        '<p class="info_txt">'+popSize+'</p>'+
                        '<img src="/lib/img/h_img/logo/like_logo_b.PNG" alt="" class="sec_marking2">'+
                        '</a>'+
                        '</div>';
                }else{
                    sizeData =
                        '<div class="interest_box_btn">'+
                        '<input type="hidden" class="sizeValue" value="'+popSize+'">'+
                        '<a href="#" class="btn_inner">'+
                        '<p class="info_txt">'+popSize+'</p>'+
                        '<img src="/lib/img/h_img/logo/like_logo.PNG" alt="" class="sec_marking2">'+
                        '</a>'+
                        '</div>';
                }
                $('.interest_list').append(sizeData);
            }


        }).catch(function (err) {
            console.log(err);
        })
    } else {
        location.href='/login';
    }
})
*/


function comment_down() {
    const popdown = document.getElementsByClassName('layer_container')[1];
    popdown.style.display = "none";
    const body = document.querySelector('body');
    body.style.overflowY = 'unset';
    let sizeArr = [];
    let sizeMark = document.getElementsByClassName('sec_marking2');
    let sizeValue = document.getElementsByClassName('sizeValue');
    for (let i = 0; i < sizeMark.length; i++) {
        let sizeImg = sizeMark.item(i).getAttribute('src');
        let sizeVal = sizeValue.item(i).value;
        if (sizeImg == '/lib/img/h_img/logo/like_logo_b.PNG') {
            sizeArr.push(sizeVal);
        }
    }
    /*
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
                        axios.delete(' /api/cart_delete/' + proId + '/' + size).then(function () {
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
                        }else{}
                    }
                }
            }
        });
        $('.interest_list').empty();
        $('.sg_item').empty();
    }
    */


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


//======================================================
// 구매전 꼭 확인해주세요 버튼 클릭변경
    const checkbox = document.querySelectorAll('.delivery_li');

    for (let i = 0; i < checkbox.length; i++) {
        checkbox[i].addEventListener('click', function () {
            if (this.querySelector('.title_content').style.display == 'none') {
                this.querySelector('.title_content').style.display = 'block';
                $('.process_buy_sell').css('margin-top', '40rem');
                for (let j = 0; j < checkbox.length; j++) {
                    if (checkbox[j] != checkbox[i]) {
                        checkbox[j].querySelector('.title_content').style.display = 'none';
                    }
                }
            } else {
                this.querySelector('.title_content').style.display = 'none';
                $('.process_buy_sell').css('margin-top', '5rem');
            }
        });
    }


// 시세 사이즈 선택 값 가져오기
    function checking(e) {
        const text = e.option[e.selectedIndex].text;
        console.log(e.options);

        document.getElementById('selected_size').innerText = text;
    }

// 시세 사이즈 정렬 (동적 테이블 정렬)
// 시세 오름차순& 내림차순 정렬
    direction = [];
    $(document).on('click', '.sort_txt', function () {
        let index = $(".sort_txt").index(this);
        console.log('=========');
        console.log(index);
        console.log('=========');

        if (direction[index] != 1 || direction[index] == 2) {
            direction[index] = 1;
            $(this).children('.sort_img').attr("src", "/lib/img/direction2.png");
            let pop_sort = $('.sort_txt').not($(this)).children('.sort_img').attr("src", "/h_img/logo/direction0.png");
            if (pop_sort == true) {
                $('.list_txt').filter(':first-child').val().sort(pop_sort);
            }

        } else if (direction[index] == 1) {
            direction[index] = 2;
            $(this).children('.sort_img').attr("src", "/lib/img/direction1.png"); // 오름차순
            $('.sort_txt').not($(this)).children('.sort_img').attr("src", "/lib/img/direction2.png");
        }

        const sort = document.getElementsByClassName("sort_txt")[index];


        $('.body_list').children('div').css({"fontWeight": "unset"})
        $('.body_list').children('div:nth-child(' + (index + 1) + ')').css({"fontWeight": "bold"})
    });

}

