// ㅊㅔ크 개수 따라 구매계속 버튼 색 바뀌기
function getCheck2(){
    const query = 'input[name=check]:checked';
    const selectedElements = document.querySelectorAll(query);
    const cnt = selectedElements.length;
    const btn = document.querySelector('.btn')
    if(cnt == 5){
        $(".btn").css("background-color", "black");
        btn.disabled = false;
    }else{
        $(".btn").css("background-color", "rgb(214,214,214)");
        btn.disabled = true;
    }
}