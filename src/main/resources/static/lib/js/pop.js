
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
        console.log(response)
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


const addressList = document.querySelectorAll('.address_li');

for(let i=0; i<addressList.length; i++){
    addressList[i].addEventListener('click', function(){
        const imgA = this.querySelector('.pp_img_A')
        imgA.style.display='block';
        for(let j=0; j<addressList.length; j++){
            if(addressList[i]!=addressList[j]){
                const imgB = addressList[j].querySelector('.pp_img_A');
                imgB.style.display='none';
            }
        }
    });
}


function pop_down(){
    const pop_inspecion_down = document.getElementsByClassName('inspecion')[0];
    pop_inspecion_down.style.display = "none"
    const pop_policy_down = document.getElementsByClassName('policy')[0];
    pop_policy_down.style.display = "none"
    const pop_commu_down = document.getElementsByClassName('commu')[0];
    pop_commu_down.style.display = "none"
    const pop_penalty_down = document.getElementsByClassName('penalty')[0];
    pop_penalty_down.style.display = "none"
    const pop_address_down = document.getElementsByClassName('Paddress')[0];
    pop_address_down.style.display = "none"
    const pop_size_down = document.getElementsByClassName('p_size')[0];
    pop_size_down.style.display = "none"
    const pop_size2_down = document.getElementsByClassName('p_size2')[0];
    pop_size2_down.style.display = "none"
    const body = document.querySelector('body');
    body.style.overflow = 'unset'

}

function pop(){
    const popup = document.getElementsByClassName('down_size')[0];
    popup.style.display = "block";
    const body = document.querySelector('body');
    body.style.overflow = 'hidden'
}
function pop_inspecion(){
    const inspecion = document.getElementsByClassName('inspecion')[0];
    inspecion.style.display = "flex";
    const body = document.querySelector('body');
    body.style.overflow = 'hidden'
}
function pop_penalty(){
    const penalty = document.getElementsByClassName('penalty')[0];
    penalty.style.display = "flex";
    const body = document.querySelector('body');
    body.style.overflow = 'hidden'
}
function pop_commu(){
    const commu = document.getElementsByClassName('commu')[0];
    commu.style.display = "flex";
    const body = document.querySelector('body');
    body.style.overflow = 'hidden'
}
function pop_policy(){
    const commu = document.getElementsByClassName('policy')[0];
    commu.style.display = "flex";
    const body = document.querySelector('body');
    body.style.overflow = 'hidden'
}
function pop_address(){
    const address = document.getElementsByClassName('Paddress')[0];
    address.style.display = "flex";
    const body = document.querySelector('body');
    body.style.overflow = 'hidden'
}
function pop_size() {
    const pop_size =document.getElementsByClassName('p_size')[0];
    pop_size.style.display = "flex";
    const body = document.querySelector('body');
    body.style.overflow = 'hidden'
}
function pop_size2() {
    const pop_size =document.getElementsByClassName('p_size2')[0];
    pop_size.style.display = "flex";
    const body = document.querySelector('body');
    body.style.overflow = 'hidden'
}
