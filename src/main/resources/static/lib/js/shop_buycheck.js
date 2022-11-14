
// ㅊㅔ크 개수 따라 구매계속 버튼 색 바뀌기
function getCheck(){
    const query = 'input[name=check]:checked';
    const selectedElements = document.querySelectorAll(query);
    const cnt = selectedElements.length;

    if(cnt == 4){
        $(".btn").css("background-color", "black");
        $(".btn").prop("disabled", false);
    }else{
        $(".btn").css("background-color", "rgb(214,214,214)");
        $(".btn").prop("disabled", true);
    }
}


// 사이즈 체크 버튼 클릭
// document.querySelector('.sg_info').addEventListener('click', function() {
//     console.log('안냥');
//     // border
//     $(this).css('border','1px solid black');
//     $(this).siblings().css('border','1px solid rgb(201, 201, 201)');
//
//     // 사이즈 선택값 반환
//     size = $(this).find('.pro_size').text();
//     $('#size_txt').text(size);
//     console.log(size);
//
//     // 팝업닫기
//     const pop_down = document.getElementsByClassName('p_size')[0];
//     pop_down.style.display = "none";
//     const body = document.querySelector('body');
//     body.style.overflow = 'unset';
//
//     // 구매계속 버튼 href 설정
//     document.querySelector('btn').href='/kream/buying/'+id+'/'+'/'+size;
// });
