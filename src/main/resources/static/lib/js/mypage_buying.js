
// layer status
const layer = document.querySelectorAll('.layer.lg');


// 달력 value 현재시각세팅
$("#datepicker1").datepicker({
    changeMonth: true,
    changeYear: true,
    minDate: '-50y',
    nextText: '다음 달',
    prevText: '이전 달',
    yearRange: 'c-50:c+20',
    showButtonPanel: true,
    currentText: '오늘 날짜',
    closeText: '닫기',
    dateFormat: "yy-mm-dd",
    showAnim: "slide",
    showMonthAfterYear: true,
    dayNamesMin: ['월', '화', '수', '목', '금', '토', '일'],
    monthNamesShort: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월']
});

$("#datepicker2").datepicker({
    changeMonth: true,
    changeYear: true,
    minDate: '-50y',
    nextText: '다음 달',
    prevText: '이전 달',
    yearRange: 'c-50:c+20',
    showButtonPanel: true,
    currentText: '오늘 날짜',
    closeText: '닫기',
    dateFormat: "yy-mm-dd",
    showAnim: "slide",
    showMonthAfterYear: true,
    dayNamesMin: ['월', '화', '수', '목', '금', '토', '일'],
    monthNamesShort: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월']
});


// 상단 입찰, 진행중, 종료 카테고리
const tab_item_list = document.querySelectorAll('.tab_item');    // 0: 전체(none) 1:입찰 2:진행중 3:종료
tab_item_list.forEach(element=>{
    element.addEventListener('click', ()=>{
        // 상단 구매입찰 설정
        tab_item_list.forEach(element=>{element.className='tab_item';});
        element.className='tab_item tab_on';

        // status2 layer 팝업 전체로 초기화
        $(".btn_filter").find("span").text('전체');
        if($('.status_item').hasClass('item_on')){
            $('.status_item').removeClass('item_on');
        }
        layer.forEach(element=>{
            element.querySelectorAll('.status_item').item(0).className += ' item_on';
        });

        // 기간 조회 최근 2개월으로 초기화
        $(".month_link")[0].click();

    });
});



// 2개월, 4개월, 6개월 버튼 기간 조회
const month_link_list = document.querySelectorAll('.month_link');    // index :0~2, 3은 기간조회 버튼
let month_link = $('.month_link').on('click', function(){
    let idx = $('.month_link').index(this)
    cal_input[0].value=calcDate((idx+1)*2);
    bindAxios();
});

// 개월선택버튼
$(document).on('click', '.month_link', function(){
    if($(".month_item").hasClass("is_active")){  // on 클래스가 존재하면 length 값은 1이상이 됨. -> true
        $(".month_item").removeClass("is_active");
    }
    this.parentNode.className += " is_active";
    $(".period_option").removeClass("open");
    $('.period_select').val()
});

// 모바일 기간 조회 select 변경
const period_select_option_list = document.querySelectorAll('option'); // index : 0~5
for (let i = 0; i < period_select_option_list.length; i++) {
    period_select_option_list[i].value=calcMonth(i);
    period_select_option_list[i].innerHTML=calcMonth(i);
}

// 기간조회버튼(모바일)
$(document).on("click",".month_item.hide_item", function(){
    $(".period_option").addClass("open");
});

const periodSelect = document.querySelector('#period_select');

periodSelect.addEventListener('change', function(){
    this.parentNode.parentNode.querySelector('span').innerHTML = this.value;
});



// status 필터 레이어 open
document.querySelector('.btn_filter').addEventListener('click', function(){
    if(document.querySelector('.tab_on .title').innerHTML == '구매입찰'){
        layer[0].style.display='block';
    }else if(document.querySelector('.tab_on .title').innerHTML == '진행중'){
        layer[1].style.display='block';
    }else{
        layer[2].style.display='block';
    }
});

// layer status 클릭
$(document).on('click', '.status_item', function(){
    if($(".status_item").has('.item_on')){  // on 클래스가 존재하면 length 값은 1이상이 됨. -> true
        $(".status_item").removeClass("item_on");
    }
    this.className+=" item_on";
    $(".btn_filter").find("span").text($(this).children().text());
    layer.forEach(element=>{
        element.style.display = 'none';
    });
    bindAxios();
});


// status 필터 레이어 닫기버튼
document.querySelectorAll('.btn_layer_close').forEach(element=>{
    element.addEventListener('click',()=>{
        layer.forEach(element=>{
            element.style.display = 'none';
        });
    });
});