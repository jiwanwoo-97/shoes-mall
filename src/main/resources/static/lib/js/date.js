$(function() {
    $("#datepicker1,#datepicker2").datepicker({
        dateFormat: 'yy-mm-dd'
        ,showOtherMonths: true
        ,showMonthAfterYear:true
        ,changeYear: true
        ,changeMonth: true
        ,showOn: "both"
        ,buttonImage: "http://jqueryui.com/resources/demos/datepicker/lib/imgs/calendar.gif"
        ,buttonImageOnly: true
        ,buttonText: "선택"
        ,yearSuffix: "년"
        ,monthNamesShort: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월']
        ,monthNames: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월']
        ,dayNamesMin: ['일','월','화','수','목','금','토']
        ,dayNames: ['일요일','월요일','화요일','수요일','목요일','금요일','토요일']
        ,minDate: "-5Y"
        ,maxDate: "+5y"
    });

    $("#datepicker1,#datepicker2").datepicker('setDate', 'today'); //(-1D:하루전, -1M:한달전, -1Y:일년전), (+1D:하루후, -1M:한달후, -1Y:일년후)


});
function LoadImg(value){
    if(value.files && value.files[0]){
        var reader = new FileReader();
        reader.onload = function (e){
            $('#img_list').attr('src', e.target.result);
        }
        reader.readAsDataURL(value.files[0]);
    }
}
window.onload = function () {


    const radioBox = document.querySelectorAll('.inquire_label');

    for (let i = 0; i < radioBox.length; i++) {
        radioBox[i].addEventListener('click',function(){
                this.querySelector('.inquire_img').style.background='url("/lib/img/check_black.png")no-repeat center/cover';
                for(let j=0; j<radioBox.length; j++){
                    if(radioBox[j]!=radioBox[i]){
                        radioBox[j].querySelector('.inquire_img').style.background='url("/lib/img/check_white.png")no-repeat center/cover';
                    }
                }

        });
    }

    function handleFileSelect(evt) {
        var files = evt.target.files;
        console.log(23);
        for (var i = 0, f; f = files[i]; i++) {
            if (!f.type.match('image.*')) {
                continue;
            }

            var reader = new FileReader();

            reader.onload = (function (theFile) {
                return function (e) {
                    var span = document.createElement('span');
                    span.innerHTML =
                        [
                            '<div class="muti_div" style="display: block;"><img class="muti_img_class" style="height: 100px; border: 1px solid #000; margin: 5px" src="',
                            e.target.result,
                            '" title="', escape(theFile.name),
                            '"/><br><button class="img_del" style="border: none; background: none;">삭제</button></div>'
                        ].join('');

                    document.getElementById('muti_list').insertBefore(span, null);
                    const muti_img_list = document.querySelectorAll(".img_del");
                    for (let i = 0; i < muti_img_list.length; i++) {
                        muti_img_list[i].addEventListener('click', function () {
                            this.parentNode.remove();
                            console.log(i);
                        });
                    }
                };
            })(f);
            reader.readAsDataURL(f);
        }
    }
    document.getElementById('files').addEventListener('change', handleFileSelect, false);



}