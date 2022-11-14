// 세션아이디 가져오기
const sessionId = sessionStorage.getItem('userid');
// 페이지 스크롤 이동
let param = location.search;
param = '#'+param.substring(1,param.length);
console.log(param);


// 주소창 파라미터 숨기기
history.replaceState({}, null, location.pathname);

function timeForToday(value) {
    const today = new Date();
    const timeValue = new Date(value);

    const betweenTime = Math.floor((today.getTime() - timeValue.getTime()) / 1000 / 60);
    if (betweenTime < 1) return '방금전';
    if (betweenTime < 60) {
        return `${betweenTime}분전`;
    }

    const betweenTimeHour = Math.floor(betweenTime / 60);
    if (betweenTimeHour < 24) {
        return `${betweenTimeHour}시간전`;
    }

    const betweenTimeDay = Math.floor(betweenTime / 60 / 24);
    if (betweenTimeDay < 365) {
        return `${betweenTimeDay}일전`;
    }

    return `${Math.floor(betweenTimeDay / 365)}년전`;
}

// axios 데이터 읽어오기
let socialCount = 0;   // list 갯수 카운트


if(sessionId==null){
    $('#social_container').append(
        '<div class="content">' +
        '   <div class="social_feeds_empty">' +
        '        <div class="empty_box">' +
        '            <img src="/lib/img/kream_empty_img.png" class="empty_img">' +
        '            <strong class="empty_title">팔로잉</strong>' +
        '            <p class="empty_txt">다른 사용자를 팔로우 하면 해당 사용자의 게시물이 여기에 표시됩니다.</p>' +
        '            <button type="button" class="btn outline small"><a href="/social/trending">인기글 보기</a></button>' +
        '        </div>' +
        '    </div>' +
        '</div>'
    )
}else if(sessionId!=null){
    let axiosUrl2 = '/api/style_detail_following_List/'+sessionId;
    axios.get(axiosUrl2, {
    }).then(function(response){
        console.log(response);
        if(response.data.data==''||response.data.data==undefined||response.data.data==null){
            $('#social_container').append(
                '<div class="content">' +
                '   <div class="social_feeds_empty">' +
                '        <div class="empty_box">' +
                '            <img src="/lib/img/kream_empty_img.png" class="empty_img">' +
                '            <strong class="empty_title">팔로잉</strong>' +
                '            <p class="empty_txt">다른 사용자를 팔로우 하면 해당 사용자의 게시물이 여기에 표시됩니다.</p>' +
                '            <button type="button" class="btn outline small"><a href="/social/trending">인기글 보기</a></button>' +
                '        </div>' +
                '    </div>' +
                '</div>'
            )
        }else{
            let content = $('<div class="content">');
            for(let i in response.data.data){
                socialCount += 1;
                let styleId = response.data.data[i].styleId; // 게시물 idx
                let customerId = response.data.data[i].customerId; // 게시물 사용자 idx
                let cutomerUserId = response.data.data[i].customerUserId; // 사용자의 userid
                let customerImg = response.data.data[i].customerOriginFile;     // 사용자 프로필 img
                if(customerImg == null){
                    customerImg = '/lib/img/blank_profile.4347742.png';
                }
                let styleHit = response.data.data[i].hit;   // 게시물 좋아요 갯수
                let styleLike = response.data.data[i].hitBoolean; //게시물 좋아요 체크 여부
                let followCheck = response.data.data[i].followBoolean; // 팔로우 체크 여부
                let styleContent = response.data.data[i].content;   // 게시물 내용
                let regdate = response.data.data[i].regdate;   // 게시물 날짜
                let regdate2 = timeForToday(regdate);   // 몇분전, 시간전, 일전으로 나타내기

                let styleImgList = response.data.data[i].styleImgListApiResponseList;    // 스타일 이미지 리스트
                let styleHashTagList = response.data.data[i].styleDetailHashTagApiResponseList; // 스타일 해시태그 리스트
                let styleHashTagCount = styleHashTagList.length;
                let productTagList = response.data.data[i].styleDetailProductTagApiResponseList;   // 상품 태그 리스트
                let productTagCount = productTagList.length;
                let replyDetailList = response.data.data[i].styleReplyDetailApiResponseList; // 댓글 리스트
                let replyCount = replyDetailList.length;

                let row = $('<div class="detail_list" name="'+styleId+'">');

                let userText = '<div class="social_user_state">' +
                    '<a href="/social/profile/'+customerId+'" class="user_state_box">' +
                    '<div class="profile_img_box">' +
                    '<img src="'+customerImg+'" alt="크림 프로필 이미지" class="profile_img">' +
                    '</div>' +
                    '<div class="profile_info">' +
                    '<a href="/social/profile/'+customerId+'" class="user_name">'+cutomerUserId+'</a>' +
                    '<a href="/social/profile/'+customerId+'" class="upload_time">'+regdate2+'</a>' +
                    '</div><div class="following_Btn" style="margin-left: auto"><button type="button" class="btn_follow following" onclick="sendFollow('+customerId+')">팔로잉</button></div>';

                userText += '</a></div>';
                row.append(userText);

                /* 이미지 삽입 Text */
                let ImgText = '<!--이미지 롤링-->' +
                    '<div class="swiper-container swiper'+i+'">' +
                    '<div class="swiper-wrapper">';
                for (let i=0; i<styleImgList.length; i++) {   // 이미지 갯수만큼 출력
                    ImgText += '<div class="swiper-slide">' +
                        '<img src="/lib/styleImg/'+styleImgList[i].origFileName+'" alt="소셜 이미지'+i+'" class="social_img">' +
                        '</div>'
                    ;
                }

                ImgText += '<!-- 네비게이션 화살표 버튼 -->' +
                    '</div><div class="swiper-btnBox"><div class="swiper-button-next nextB'+i+'"></div><!-- 다음 버튼 (오른쪽에 있는 버튼) -->' +
                    '<div class="swiper-button-prev prevB'+i+'"></div><!-- 이전 버튼 -->' +
                    '</div></div>' +
                    '<!-- 페이징 버튼-->' +
                    '<div class="swiper-pagination swiper-pagination'+i+'"></div>' +
                    '<!--이미지 롤링 끝-->'
                ;
                //이미지 삽입 Text Element 안에 삽입
                row.append(ImgText);
                if(productTagCount != 0) {  // 게시글에 상품 태그 있을 경우
                    let productTagText = '<div class="social_product">' +
                        '<div class="product_title">' +
                        '<span class="title_txt">상품태그</span>' +
                        '<strong class="num">'+productTagCount+'</strong><span class="num_count">개</span>' +
                        '</div>' +
                        '<div class="product_list_area">' +
                        '<ul class="product_list">';

                    for (let i in productTagList) {     // 상품태그 개수만큼 출력
                        let productId = productTagList[i].id;
                        let productImg = productTagList[i].origFileName;
                        let productName = productTagList[i].name;
                        let price = productTagList[i].price;
                        let productPrice = price;
                        if(price==null){
                            productPrice = '-';
                        };
                        productTagText += '<a class="product_link" href="/product/'+productId+'">' +
                            '<div class="product">' +
                            '<img src="/lib/product/'+productImg+'" alt="'+productName+'" class="product_img">' +
                            '</div>' +
                            '<div class="product_desc">' +
                            '<p class="product_name">'+productName+'</p>' +
                            '<div class="price_box">' +
                            '<span class="amount">'+productPrice+'</span>' +
                            '<span class="unit">원</span>' +
                            '</div>' +
                            '</div>' +
                            '</a>'
                        ;
                    }
                    productTagText += '</ul></div></div>';
                    row.append(productTagText);
                }

                let social_content = '<div class="social_content">' +
                    '<div class="social_content_btn">' +
                    '<div class="btn_bind">' +
                    '<a class="btn_like">'
                ;

                // style 공감버튼 표시
                let styleLikeIcon = "/lib/img/smile.png";
                if(styleLike==true){   // true
                    styleLikeIcon = "/lib/img/heart.png";
                }

                social_content += '<img src="'+styleLikeIcon+'" alt="좋아요 버튼" class="like" onclick="likeToggle1('+styleId+')">' +
                    '</a>' +
                    '<a class="btn_comment">' +
                    '<img src="/lib/img/reply.png" alt="댓글 버튼" class="comment" onclick="comment_up('+styleId+')">' +
                    '</a>' +
                    '<button type="button" class="btn_share">' +
                    '<img src="/lib/img/share.png" alt="공유 버튼" class="share" onclick="share_up()">' +
                    '</button>' +
                    '</div></div>' +
                    '<div class="like_reply_layer">'
                ;

                // if(styleHit!=0){     // 좋아요 갯수가 있을 경우
                social_content += '<div class="social_count">' +
                    '<a class="like_count" onclick="symp_up()">공감<strong class="count" id="'+styleId+'">'+styleHit+'</strong>개</a>' +
                    '</div>'
                ;
                // }
                // if(replyCount!=0){  // 댓글 개수 있을 경우
                social_content += '<div class="media_reply_count">' +
                    '<span onclick="comment_up('+styleId+')">댓글 <span>'+replyCount+'</span>개</span>' +
                    '</div>'
                ;
                // }
                social_content += '</div>';

                /* 해시태그 삽입 Text Element 안에 입력 */
                social_content += '<div class="social_text">' +
                    '<div class="text_link">' +
                    '<div class="text">' +
                    '<div class="text_main">' +
                    '<span class="text_title">'+styleContent+'</span>' +
                    '</div>' +
                    '<div class="text_a">';
                if(styleHashTagCount!=0){   // 상품 해시태그 있을 경우
                    for (let i in styleHashTagList) {   // 갯수만큼 출력
                        let tagName = styleHashTagList[i].tagName;
                        social_content += '<a class="hashtag" href="/social/tags/'+tagName+'">#'+tagName+'</a>';
                    }
                }
                social_content += '</div></div></div></div>';

                if(replyCount!=0){      // 댓글 있을 경우
                    social_content += '<div class="social_comment">' +
                        '<div class="comment_area">' +
                        '<a class="comment_count" onclick="comment_up('+styleId+') ">댓글<strong>'+replyCount+'</strong>개</a>' +
                        '<div class="comment_list">'
                    ;
                    let j = 0;
                    for (let i = replyCount-1; i >= 0; i--) {
                        if(j==2){ break }
                        let replyId = replyDetailList[i].id;
                        let replyCustomerId = replyDetailList[i].customerId;
                        let replyUserName = replyDetailList[i].customerUserid;
                        let replyCustomerImg = replyDetailList[i].customerOriginFile;
                        if(replyCustomerImg == null){
                            replyCustomerImg = '/lib/img/blank_profile.4347742.png';
                        }
                        let replyContent = replyDetailList[i].content;
                        let depth = replyDetailList[i].depth;
                        let hit = parseInt(replyDetailList[i].hit);
                        let regdate = replyDetailList[i].regdate;
                        let replyLike = replyDetailList[i].replyBoolean;

                        // style 공감버튼 표시
                        let replyLikeIcon = "/lib/img/smile.png";
                        if(replyLike==true){   // true
                            replyLikeIcon = "/lib/img/heart.png";
                        }

                        social_content += '<div class="comment_unit">' +
                            '<div class="comment_box">' +
                            '<a class="profile_link" href="/social/profile/'+replyCustomerId+'">' +
                            '<img src="'+replyCustomerImg+'" alt="프로필 이미지" class="profile_img">' +
                            '</a>' +
                            '<div class="comment_detail">' +
                            '<div class="main">' +
                            '<span class="user_name user_name_loc">'+replyUserName+'</span>' +
                            '<span class="comment_txt">'+replyContent+'</span>' +
                            '</div>' +
                            '<div class="sub">' +
                            '<span class="upload_time">'+timeForToday(regdate)+'</span>'
                        ;

                        social_content += '<span class="dot"> • </span>' +
                            '<a class="like_count"> 공감 <strong id="0'+replyId+'">'+hit+'</strong>개 </a>'
                        ;

                        social_content += '</div></div>' +
                            '<a class="btn_like1">' +
                            '<img src="'+replyLikeIcon+'" alt="좋아요 버튼" class="like" onclick="reLikeToggle1('+replyId+')">' +
                            '</a>' +
                            '</div>' +
                            '</div>'
                        ;
                        j=j+1;
                    }
                    social_content += '<div class="comment_plus" onclick="comment_up('+styleId+')"><p>댓글 더보기...</p></div>' +
                        '</div></div></div>'
                    ;
                }
                row.append(social_content);
                row.append('</div></div>');
                content.append(row);

            }
            content.append('</div>');
            $('#social_container').append(content);
            console.log(socialCount);
            for(let i in response.data.data){
                let dd =new Swiper('.swiper'+i+'', {
                    loop: false,
                    loopAdditionalSlides: 1,
                    pagination: { // 페이징 설정
                        el: '.swiper-pagination'+i+'',
                        clickable: true, // 페이징을 클릭하면 해당 영역으로 이동, 필요시 지정해 줘야 기능 작동
                    },
                    navigation: { // 네비게이션 설정
                        nextEl: '.nextB'+i+'', // 다음 버튼 클래스명
                        prevEl: '.prevB'+i+'', // 이번 버튼 클래스명
                    },
                });
            }
        }


    }).catch(function(err){
        console.log(err);
    });
}



/*스타일 헤더*/
window.addEventListener('scroll', scrollFunc);
const header = document.querySelector('#header');
const miniheader = document.querySelector('.style_tab_list');
const fixed = document.querySelector('#fixed');
var hide = document.querySelectorAll('.hide');

function scrollFunc() {
    let ww = $(window).width();
    if (pageYOffset >= 5) {
        if(ww > 768){
            header.classList.add('on');
            miniheader.style.display = 'flex';
            fixed.style.height = '3rem';
            // for (var i = 0; i < hide.length; i++) {
            //     bars[i].style.display = 'none';
            // }
        }else{
            header.classList.add('on');
        }
    } else {
        if(ww > 768){
            header.classList.remove('on');
            miniheader.style.display = 'none';
            fixed.style.height = '';
            // for (var i = 0; i < hide.length; i++) {
            //     bars[i].style.display = 'block';
            // }
        }else{
            header.classList.remove('on');
        }
    }
}
window.addEventListener('scroll', scrollFunc);

/*공유 팝업창*/
$(document).ready(function () {
    $(".btn_share").click(function (event) {
        $(".share_popup_container").css({
            "top": (($(window).height() - $(".share_popup_container").outerHeight()) / 2 + $(window).scrollTop()) + "px",
            "left": (($(window).width() - $(".share_popup_container").outerWidth()) / 2 + $(window).scrollLeft()) + "px"
        });

        $("#popup_mask").css("display", "block");
        $(".share_popup_container").css("display", "block");
        $("body").css("overflow", "hidden");
    });
    $(".x_image").click(function (event) {
        $("#popup_mask").css("display", "none");
        $(".share_popup_container").css("display", "none");
        $("body").css("overflow", "auto");
    });
});

// 스타일 좋아요 버튼 클릭 함수
function likeToggle1(styleId){
    let id = document.getElementById(styleId);
    console.log(id);
    if(sessionId!=null){
        axios.get('/api/styleLike_like/'+sessionId+'/'+styleId,{
        }).then(function(response){
            let like = response.data;
            id.innerText = like;
        });
    } else {
        location.href = '/login';
    }
}

// 댓글 좋아요 버튼 클릭 함수
function reLikeToggle1(replyId){
    let id = document.getElementById('0'+replyId);

    if(sessionId!=null){
        axios.get('/api/replyLike_like/'+sessionId+'/'+replyId,{

        }).then(function(response){
            console.log(response);
            let like = response.data;
            console.log(like);
            id.innerText = like;
        });
    } else {
        location.href = '/login';
    }
}

// 대댓글 좋아요 버튼 클릭 함수
function reReLikeToggle1(replyId){
    let id = document.getElementById('00'+replyId);

    if(sessionId!=null){
        axios.get('/api/replyLike_like/'+sessionId+'/'+replyId,{

        }).then(function(response){
            console.log(response);
            let like = response.data;
            console.log(like);
            id.innerText = like;
        });
    } else {
        location.href = '/login';
    }
}

/* 스타일 게시글,댓글 좋아요 아이콘 바꾸기 */
like_ch = [];
$(document).on('click', '.like', function () {
    let index = $(".like").index(this);
    let like = document.getElementsByClassName('like');
    let likeCheck = like.item(index).getAttribute('src');
    if(sessionId!=null){    // 로그인 되어있을 경우에만 바꿔줌
        if(likeCheck=='/lib/img/smile.png'){
            like.item(index).setAttribute('src', '/lib/img/heart.png');
        }else if(likeCheck=='/lib/img/heart.png'){
            like.item(index).setAttribute('src', '/lib/img/smile.png');
        }
    }else{
        location.href='/login';
    }
});

/* 팝업 댓글 좋아요 아이콘 바꾸기 */
like_1 = [];
$(document).on('click', '.p_comment_view_smile', function () {
    let index = $(".p_comment_view_smile").index(this);
    let like = document.getElementsByClassName('p_comment_view_smile');
    let likeCheck = like.item(index).getAttribute('src');
    if(sessionId != null){
        if(likeCheck=='/lib/img/smile.png'){
            like.item(index).setAttribute('src', '/lib/img/heart.png');
        }else if(likeCheck=='/lib/img/heart.png'){
            like.item(index).setAttribute('src', '/lib/img/smile.png');
        }
    }else{
        location.href='/login';
    }
});

/* 대댓글 팝업 좋아요 */
like_2 = [];
$(document).on('click', '.p_sub_comment_view_smile', function () {
    let index = $(".p_sub_comment_view_smile").index(this);
    let like = document.getElementsByClassName('p_sub_comment_view_smile');
    let likeCheck = like.item(index).getAttribute('src');
    if(sessionId != null){
        if(likeCheck=='/lib/img/smile.png'){
            like.item(index).setAttribute('src', '/lib/img/heart.png');
        }else if(likeCheck=='/lib/img/heart.png'){
            like.item(index).setAttribute('src', '/lib/img/smile.png');
        }
    }else{
        location.href='/login';
    }
});

/* 팔로우 팔로잉 클릭 함수 */
function sendFollow(customerId){
    if(sessionId!=null){
        axios.get('/api/follow_link/'+customerId+'/'+sessionId,{
        }).then(function(){
        });
        location.reload();
    } else {
        location.href = '/login';
    }
}

// 공감 팔로우 팔로잉
$(document).on('click', '.symp_btn', function () {

    let index = $(".symp_btn").index(this);

    if (follow[index] != 1) {
        follow[index] = 1;
        const button = document.getElementsByClassName("symp_btn")[index];
        button.innerText = "팔로잉";
        button.style.backgroundColor = "white";
        button.style.color = "black";

    } else if (follow[index] == 1) {
        follow[index] = 0;
        const button = document.getElementsByClassName("symp_btn")[index];
        button.innerText = "팔로우";
        button.style.backgroundColor = "black";
        button.style.color = "white";
    }
});

/* 더보기 */
$('.text_main').each(function () {
    let content = $(this).children('.text_title');
    let content_txt = content.text();
    let content_txt_short = content_txt.substring(0, 5) + "...";
    let btn_more = $('<a style="cursor : pointer;" class="more">더보기</a>');

    $(this).append(btn_more);
    if (content_txt.length >= 5) {
        content.html(content_txt_short)
    } else {
        btn_more.hide()
    }

    $(document).on('click', '.more', function () {
        let index = $(".more").index(this);
        let like_box = document.getElementsByClassName("text_a")[index];
        if (!$(this).hasClass('short')) {
            content.html(content_txt);
            like_box.style.display = "unset";
            btn_more.hide();
        }
    })
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

// 체크 박스 선택
const checkboxAll = document.querySelectorAll('.polict_li');
// 하나만 선택
for (let i = 0; i < checkboxAll.length; i++) {
    checkboxAll[i].addEventListener('click', function () {
        if (this.querySelector('.pop_policy_body').style.display == 'none') {
            this.querySelector('.pop_policy_body').style.display = 'block';
            this.querySelector('.pp_img').style.background = 'url(/pop/policy_up.png)no-repeat center/cover';
            for (let j = 0; j < checkboxAll.length; j++) {
                if (checkboxAll[j] != checkboxAll[i]) {
                    checkboxAll[j].querySelector('.pop_policy_body').style.display = 'none';
                    checkboxAll[j].querySelector('.pp_img').style.background = 'url(/pop/policy_down.png)no-repeat center/cover';
                }
            }
        } else {
            this.querySelector('.pop_policy_body').style.display = 'none';
            this.querySelector('.pp_img').style.background = 'url(/pop/policy_down.png)no-repeat center/cover';
        }
    });
}
const categoryList = document.querySelectorAll('.category');

const inspecionText = document.querySelectorAll('.inspecion_text');

for (let i = 0; i < categoryList.length; i++) {
    categoryList[0].style.background = 'black';
    inspecionText[0].style.display = 'block';
    categoryList[i].addEventListener('click', function () {
        this.style.background = 'black';
        this.style.color = "rgb(255, 255, 255)";
        this.style.border = "1px solid black";
        inspecionText[i].style.display = 'block';
        for (let j = 0; j < categoryList.length; j++) {
            if (categoryList[i] != categoryList[j]) {
                categoryList[j].style.background = 'white';
                categoryList[j].style.color = "rgb(161, 161, 161)";
                categoryList[j].style.border = "1px solid lightgray";
                inspecionText[j].style.display = 'none';
            }
        }
    });
}

/*댓글 팝업 열기*/
function comment_up(styleId) {
    const popup = document.getElementById('background');
    popup.style.display = "block";
    const body = document.querySelector('body');
    body.style.overflow = 'hidden'
    $('#comment_list_box').text('');

    axios.get('/api/st_reply_pop/'+styleId+'/'+sessionId,{

    }).then(function(response){
        console.log(response);
        let styleCustomerId = response.data.data.styleCustomerId;
        let styleContent = response.data.data.content;
        let styleRegdate = response.data.data.regdate;
        let styleRegdate2 = timeForToday(styleRegdate);
        let styleCustomerImg = response.data.data.customerImg;
        if(styleCustomerImg==null){
            styleCustomerImg = '/lib/img/blank_profile.4347742.png'
        }
        let styleHit = response.data.data.hit;
        let styleHashTagList = response.data.data.styleHashTagNameApiResponseList;
        let styleHashCount = styleHashTagList.length;
        let hashListText='';
        if(styleHashCount!=0){  // 해시태그 있을 때
            for (let i in styleHashTagList) {
                let tagName = styleHashTagList[i].tagName;
                hashListText += '<a class="hashtag" href="/social/tags/'+tagName+'">#'+tagName+'</a>';
            }
        }

        // 게시물 데이터 입력
        document.querySelector('#p_main_user_img').setAttribute('src',styleCustomerImg);
        document.querySelector('#p_main_user_img').setAttribute('alt',styleCustomerImg);
        document.querySelector('#p_userid').innerHTML=styleCustomerId;
        document.querySelector('#p_user_title').innerHTML=styleContent;
        document.querySelector('#p_user_tag').innerHTML=hashListText;
        document.querySelectorAll('#p_user_time span')[0].innerHTML=styleRegdate2;
        document.querySelectorAll('#p_user_time span')[1].innerHTML=styleHit;

        let styleReplyList = response.data.data.styleReplyDetailApiResponseList;
        let styleReplyCount = styleReplyList.length;

        if(styleReplyCount!=0){
            for (let i in styleReplyList) {
                let id = styleReplyList[i].id;
                let customerId = styleReplyList[i].customerId;
                let customerUserid = styleReplyList[i].customerUserid;
                let customerOriginFile = styleReplyList[i].customerOriginFile;
                if(customerOriginFile == null){
                    customerOriginFile = '/lib/img/blank_profile.4347742.png';
                }
                let content = styleReplyList[i].content;
                let depth = styleReplyList[i].depth;
                let hit = styleReplyList[i].hit;

                let replyBoolean = styleReplyList[i].replyBoolean;
                // 공감버튼 이미지 설정
                let styleLikeIcon = "/lib/img/smile.png";
                if(replyBoolean==true){   // true
                    styleLikeIcon = "/lib/img/heart.png";
                }

                let reRegdate = styleReplyList[i].regdate;
                let reRegdate2 = timeForToday(reRegdate);

                if(depth==0){
                    let commentList1 = $('<div id="p_comment_view_textbox">');
                    let commentList1_1 = '<div id="p_commnet_view_box">' +
                        '<div id="p_comment_view_imgbox">' +
                        '<img src="'+customerOriginFile+'" alt="사용자 프로필 이미지" id="p_comment_view_img" onclick="location.href=\'/social/profile/'+customerId+'\'">' +
                        '</div>' +
                        '<div id="p_comment_view_textbox">' +
                        '<div id="p_comment_view_userbox">' +
                        '<span id="p_comment_view_userid" class="customerUserid">'+customerUserid+'</span>' +
                        '<span id="p_comment_view_text">'+content+'</span>' +
                        '<div id="p_bottoms">' +
                        '<span id="p_bottoms_text1">'+reRegdate2+'</span>' +
                        '<span class="dot"> • </span>' +
                        '<a class="like_count"> 공감 <strong id="00'+id+'">'+hit+'</strong>개 </a>' +
                        '<span id="p_bottoms_text3" class="reReRegister">댓글 쓰기</span>';
                    if(sessionId==customerId){
                        commentList1_1 += '<span style="margin-left: 10px" onclick="replyDel('+id+')">삭제</span>';
                    }
                    commentList1_1 += '<input type="hidden" class="reReId" value="'+id+'"><input type="hidden" class="reReCustomerId" value="'+customerId+'"></div>' +
                        '</div>' +
                        '<div class="pop_like">' +
                        '<img src="'+styleLikeIcon+'" alt="" class="p_comment_view_smile" onclick="reReLikeToggle1('+id+')">' +
                        '</div>' +
                        '</div>' +
                        '</div>';
                    commentList1.append(commentList1_1);
                    $('#comment_list_box').append(commentList1);
                }else if(depth>0){
                    let commentList2 = $('<div id="p_sub_comment_view_box">');
                    let commentList2_1 = '<div id="p_commnet_view_box">' +
                        '<div id="p_comment_view_imgbox">' +
                        '<img src="'+customerOriginFile+'" alt="사용자 프로필 이미지" id="p_comment_view_img" onclick="location.href=\'/social/profile/'+customerId+'\'">' +
                        '</div>' +
                        '<div id="p_sub_comment_view_textbox">' +
                        '<div id="p_sub_comment_view_userbox">' +
                        '<span id="p_sub_comment_view_userid" class="customerUserid">'+customerUserid+'</span>' +
                        '<span id="p_sub_comment_view_text">'+content+'</span>' +
                        '<div id="p_sub_bottoms">' +
                        '<span id="p_sub_bottoms_text1">'+reRegdate2+'</span>' +
                        '<span class="dot"> • </span>' +
                        '<a class="like_count"> 공감 <strong id="00'+id+'">'+hit+'</strong>개 </a>' +
                        '<span id="p_sub_bottoms_text3" class="reReRegister">댓글 쓰기</span>';
                    if(sessionId==customerId){
                        commentList2_1 += '<span style="margin-left: 10px" onclick="replyDel('+id+')">삭제</span>';
                    }
                    commentList2_1 += '<input type="hidden" class="reReId" value="'+id+'"><input type="hidden" class="reReCustomerId" value="'+customerId+'"></div>' +
                        '</div>' +
                        '<div class="pop_like">' +
                        '<img src="'+styleLikeIcon+'" alt="" class="p_sub_comment_view_smile" onclick="reReLikeToggle1('+id+')">' +
                        '</div>' +
                        '</div>' +
                        '</div>';
                    commentList2.append(commentList2_1);
                    $('#comment_list_box').append(commentList2);
                }
            }
        }
        /* 댓글 팝업 대댓글 누르는중 */
        $('.reReRegister').on('click', function(){
            let index = $('.reReRegister').index(this);
            let customerUseridClass = document.getElementsByClassName('customerUserid');
            let reReIdClass = document.getElementsByClassName('reReId');
            let reReCustomerIdClass = document.getElementsByClassName('reReCustomerId');
            let customerUserid = customerUseridClass.item(index).innerHTML;
            let reReId = reReIdClass.item(index).value;
            let reReCustomerId = reReCustomerIdClass.item(index).value;

            $('#reReRegistId').val(reReId);
            $('#reReRegistCustomerId').val(reReCustomerId);
            $('#reReRegistCustomerName').val(customerUserid);
            $('#p_comment_user_text').val('@'+customerUserid+':re-');

        })
    });

    /* 댓글 팝업 댓글 등록 */
    document.querySelector('.btn_regist').addEventListener('click',()=>{
        let content = document.querySelector('#p_comment_user_text').value;
        let contentSplit = content.split(':re-');
        if(sessionId != null){
            if(contentSplit[1]==null){
                axios.request({
                    method: "POST",
                    url: "/api/st_reply_register",
                    headers: {'Content-type': 'application/json'},
                    data: {
                        data:{
                            styleId: styleId,
                            customerId: sessionId,
                            content: content
                        }
                    }
                }).then(location.reload());
            }else if(contentSplit[1]!=null){
                if(contentSplit[0]=='@'+$('#reReRegistCustomerName').val()){
                    axios.request({
                        method: "POST",
                        url: "/api/st_reply_register",
                        headers: {'Content-type': 'application/json'},
                        data: {
                            data:{
                                id: $('#reReRegistId').val(),
                                styleId: styleId,
                                customerId: sessionId,
                                content: contentSplit[1]
                            }
                        }
                    }).then(location.reload());
                }else{
                    alert('잘못된 접근입니다.')
                }

            }

        } else {
            location.href = '/login';
        }
    })
}

/*댓글 삭제*/
function replyDel(id){
    axios.delete('/api/st_reply_delete/'+id).then(function (response){
        location.reload();
    }).catch(function (response){
        console.log('삭제 에러발생');
    })
}
/*댓글 팝업닫기*/
function comment_down() {
    const popdown = document.getElementById('background');
    popdown.style.display = "none"
    const body = document.querySelector('body');
    body.style.overflow = 'unset'
    document.querySelector('#p_comment_user_text').value='';
}

/*공유하기 팝업 열기*/
function share_up() {
    const popup = document.getElementById('share_background');
    popup.style.display = "block";
    const body = document.querySelector('body');
    body.style.overflow = 'hidden'
}

/*공유하기 팝업 닫기*/
function share_down() {
    const popdown = document.getElementById('share_background');
    popdown.style.display = "none"
    const body = document.querySelector('body');
    body.style.overflow = 'unset'
}


/* 공감 팝업 열기 */
function symp_up() {
    const popup = document.getElementById('symp_background');
    // popup.style.display = "block";
    // const body = document.querySelector('body');
    // body.style.overflow = 'hidden'
}

/* 공감 팝업 닫기 */
function symp_down() {
    const popdown = document.getElementById('symp_background');
    popdown.style.display = "none"
    const body = document.querySelector('body');
    body.style.overflow = 'unset'
}

/* 링크 복사*/
function copy() {
    let dummy = document.createElement("input");
    let text = location.href;

    document.body.append(dummy);
    dummy.value = text;
    dummy.select();
    document.execCommand("copy");
    document.body.removeChild(dummy);
    alert("url이 복사되었습니다.");
}

function pop_down() {
    const pop_inspecion_down = document.getElementsByClassName('inspecion')[0];
    pop_inspecion_down.style.display = "none"
    const pop_policy_down = document.getElementsByClassName('policy')[0];
    pop_policy_down.style.display = "none"
    const pop_commu_down = document.getElementsByClassName('commu')[0];
    pop_commu_down.style.display = "none"
    const pop_penalty_down = document.getElementsByClassName('penalty')[0];
    pop_penalty_down.style.display = "none"
    const body = document.querySelector('body');
    body.style.overflow = 'unset'

}

function pop() {
    const popup = document.getElementsByClassName('down_size')[0];
    popup.style.display = "block";
    const body = document.querySelector('body');
    body.style.overflow = 'hidden'
}

function pop_inspecion() {
    const inspecion = document.getElementsByClassName('inspecion')[0];
    inspecion.style.display = "flex";
    const body = document.querySelector('body');
    body.style.overflow = 'hidden'
}


function pop_penalty() {
    const penalty = document.getElementsByClassName('penalty')[0];
    penalty.style.display = "flex";
    const body = document.querySelector('body');
    body.style.overflow = 'hidden'
}

function pop_commu() {
    const commu = document.getElementsByClassName('commu')[0];
    commu.style.display = "flex";
    const body = document.querySelector('body');
    body.style.overflow = 'hidden'
}

function pop_policy() {
    const commu = document.getElementsByClassName('policy')[0];
    commu.style.display = "flex";
    const body = document.querySelector('body');
    body.style.overflow = 'hidden'
}
// navigation 열기 / 닫기
$("#hb_mo_text").on("click", function () {
    $(".navigation_wrap").removeClass("close");
    $(".navigation_wrap").addClass("open");
});
$(".btn_nav_close").on("click", function () {
    $(".navigation_wrap").removeClass("open");
    $(".navigation_wrap").addClass("close");
});
