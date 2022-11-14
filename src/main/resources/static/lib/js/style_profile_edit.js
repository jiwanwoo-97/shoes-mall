window.onload = function () {
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
}



///////////////////파일 업로드//////////////////////

// 사진 변경 버튼 클릭 이벤트
$("#upImage").on('click',function(e){
    e.preventDefault();
    $('#imageFileInput').click();
});

const imageFileInput = document.querySelector("#imageFileInput");
const fileData = new FormData();
imageFileInput.addEventListener("change", (e) => {
    // 이제 서버로 처리
    image = '/lib/img/'+imageFileInput.value.replace(/C:\\fakepath\\/i,'');
    console.log(image);
    updateImage();
    // var xhr = new XMLHttpRequest();
    // xhr.open('PATCH', '/api/test_upload/', true);   // 서버에서 처리할 api 주소 입력
    // xhr.setRequestHeader("Content-Type", "multipart/formed-data");
    // xhr.onreadystatechange = function() { // Call a function when the state changes.
    //     if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
    //         alert('서버로 데이터 전송 완료');
    //     }
    //     else {
    //         alert('Error');
    //     }
    // };
    // xhr.send(fileData);
});

///////////프로필 수정 부분///////////////
// 이름 유효성 검사
document.querySelector('#id_input').addEventListener('input', e=>{
    e.target.value = e.target.value.replace(/[^a-zA-Z0-9_.]/gi,'');
});

document.querySelector('#id_input').addEventListener('input', e=>{
    filterByDebounce(e, strId=>{
        let errorMsg='';
        if(!validateId(strId)){
            errorMsg='영문, 숫자, 특수문자(_ .)만 사용가능 합니다.(5 - 25자)';
            document.querySelector('#id_input_box').className='unit has_error';
        } else {
            document.querySelector('#id_input_box').className='unit fill';
        }
        document.querySelector('#id_input_error').innerHTML=errorMsg;
    });
});


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

const inspecionText = document.querySelectorAll('.inspecion_text');