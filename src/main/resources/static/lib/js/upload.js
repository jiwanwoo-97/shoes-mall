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




// 팝업창
$(".upload_plus_box").click(function () {  //팝업 Open 버튼 클릭 시

    let upload_length = document.getElementsByClassName("upload_productbox");
    console.log(upload_length.length);
    if(upload_length.length<4){
        $("#popupDiv").css({
            "top": (($(window).height() - $("#popupDiv").outerHeight()) / 2 + $(window).scrollTop()) + "px",
            "left": (($(window).width() - $("#popupDiv").outerWidth()) / 2 + $(window).scrollLeft()) + "px"
            //팝업창을 가운데로 띄우기 위해 현재 화면의 가운데 값과 스크롤 값을 계산하여 팝업창 CSS 설정

        });

        $("#popupDiv").css("display", "block"); //팝업창 display block
        $("body").css("overflow", "hidden");//body 스크롤바 없애기

        // 엑스버튼 누를시
        $("#popCloseBtn").click(function () {
            $("#popupDiv").css("display", "none"); //팝업창 display none
            $("body").css("overflow", "auto");//body 스크롤바 생성
            $(".in_search").val('');//태그상품 검색창 비우기
            $(".product_plus").css('display', 'none');//태그상품 검색목록 감추기
        });

        // 취소하기
        $('.btn_delete').click(function (){
            $("#popupDiv").css("display", "none"); //팝업창 display none
            $("body").css("overflow", "auto");//body 스크롤바 생성
            $(".in_search").val('');//태그상품 검색창 비우기
            $(".product_plus").css('display', 'none');//태그상품 검색목록 감추기
        });

    }else{
        alert("더이상 추가할 수 없습니다")
    }


});


// 검색창 텍스트 입력 실시간 감지
$(".in_search").on("propertychange change keyup paste input", function() {
    let keyword = $(".in_search").val();
    console.log(keyword);
    let keywordLower = keyword.toLowerCase();
    $(".product_plus").css('display','block');
    axios.request({
        method:"POST",
        url:'/api/pro_style_searchlist/'+keywordLower,
        headers:{'Content-type':'application/json'}
    }).then(function(response){
        console.log(response)
        if(response.data.data==null||response.data.data==''){
            $(".plus_search").html('<div class="result_nodata">' +
                '<p class="nodata_main">검색하신 결과가 없습니다.</p>' +
                '<p class="nodata_sub">상품 등록 요청은 앱 <span class="emphasis">1:1 문의하기</span> 로 요청해주세요.</p>' +
                '</div>');
        }else{
            $(".plus_search").html('<div class="suggest_title_area"></div>');
            let divList = $('<div class="suggest_list lg">');
            for (let i=0; i<response.data.data.length; i++){
                let productId = response.data.data[i].productId;
                let name = response.data.data[i].name;
                let korName = response.data.data[i].korName;
                let file = response.data.data[i].origFileName;

                let divItem = $('<div class="suggest_item">');
                divItem.append('<div id='+productId+' class="suggest_link2">' +
                    '<div class="suggest_thumb">' +
                    '<img src="/lib/product/'+file+'" alt="'+korName+'" class="thumb_img"></div>' +
                    '<div class="suggest_info">' +
                    '<p class="model_title">'+name+'</p>' +
                    '<p class="model_sub_info">'+korName+'</p>' +
                    '</div></div></div>'
                );
                divList.append(divItem);
            }
            $(".plus_search").append(divList);


            // 검색목록 클릭시
            $(".suggest_link2").on("click", function () {
                let product_id = document.querySelectorAll(".product_id");
                let index = $(".suggest_link2").index(this);
                let id = $(this).attr('id');
                for(let i=0; i<product_id.length; i++){
                    if(id == product_id.item(i).value){
                        alert("같은 상품 태그가 존재합니다.");
                        return false;
                    }
                }
                let origFileName = response.data.data[index].origFileName;
                let name = response.data.data[index].name;
                $('#search_product').before(
                    '<span class="product_box_span"><div class="upload_productbox"><input type="hidden" class="product_id" value="'+id+'">' +
                    '<img src="/lib/product/'+origFileName+'" alt="상품태그 이미지" class="upload_product_img">' +
                    '<p>'+name+'</p></div><br><button class="product_del">삭제</button></span>'
                );
                $("#popupDiv").css("display", "none"); //팝업창 display none
                $("body").css("overflow", "auto");//body 스크롤바 생성
                $(".in_search").val('');//태그상품 검색창 비우기
                $(".product_plus").css('display', 'none');//태그상품 검색목록 감추기
            });
            const product_box_span = document.querySelectorAll(".product_del");
            for (let i = 0; i < product_box_span.length; i++) {
                product_box_span[i].addEventListener('click', function () {
                    this.parentNode.remove();
                });
            }
        }
    });
});

// 검색창 텍스트 지우기 버튼 클릭 이벤트
$(".search_delet").on("click", function () {
    $(".in_search").val('');//태그상품 검색창 비우기
    $(".product_plus").css('display', 'none');//태그상품 검색목록 감추기
});

$('.hashtag_input_submit').on('click', function (){
    let hashtag_input = $('#hashtag_input').val();
    let inputReplace = hashtag_input.replace(/\s/gi, "");
    let hashtag_replace = document.querySelectorAll(".hashtag_replace");
    for(let i=0;i<hashtag_replace.length;i++){
        if(inputReplace==hashtag_replace.item(i).innerHTML){
            alert("같은 태그가 존재합니다.");
            $('#hashtag_input').val('');
            return false;
        }
    }
    if(hashtag_input==null||hashtag_input==''||hashtag_input==' '||hashtag_input==undefined){
    }else{
        // let hashtag_replace = document.querySelectorAll(".hashtag_replace");
        if(hashtag_replace.length<10){
            $('#hashtag_list').append(
                '<span style="position: relative; margin:0 3px;"><div class="hashtag_replace">'+inputReplace+'</div><img src="/lib/img/off.png" class="hash_del"></span>'
            );
        }else{
            alert('해시태그는 최대 10개까지 입력할 수 있습니다')
       }
        $('#hashtag_input').val('');
    }
    const hash_del = document.querySelectorAll(".hash_del");
    for (let i = 0; i < hash_del.length; i++) {
        hash_del[i].addEventListener('click', function () {
            this.parentNode.remove();
        });
    }
})

