window.onload = function () {

    $(function () {
        const id = $('#id').val();
        console.log(id);


        axios.all([axios.get('/api/proimg_list'), axios.get('/api/prosize_list'), axios.get('/api/pro_list'), axios.get('/api/pro_purchase/' + id)])
            .then(function (response) {
                console.log(response);
                for (let i in response[2].data.data) {
                    if (id == response[2].data.data[i].id) {
                        const name = response[2].data.data[i].name;
                        const modelNumber = response[2].data.data[i].modelNumber;

                        $('#name').text(name);
                        $('#modelNumber').text(modelNumber);

                    }
                }
                for (let i in response[0].data.data) {
                    if (id == response[0].data.data[i].id) {
                        let main_img = $('')
                    }
                }



                let int_list = $('<div class="interest_list">');
                for(let i in response[1].data.data){
                    let $pro_price = "정보없음";
                    if (id == response[1].data.data[i].productId) {//사이즈의 프로덕트 아이디가 같으면
                        let $size = response[1].data.data[i].proSize;
                        let pur_len = response[3].data.data.productApiResponse.purchaseApiResponseList.length; //입찰내역 렝스만큼
                        for (let j = 0; j < pur_len; j++ ) {
                            let $pur_status = response[3].data.data.productApiResponse.purchaseApiResponseList[j].status1;
                            let $purcsize =response[3].data.data.productApiResponse.purchaseApiResponseList[j].sizeType;

                            if(($size == $purcsize)  && ($pur_status == "구매입찰")){

                                console.log("프로사이즈"+ $size + " 입찰사이즈 :"+$purcsize); // 중복 없는애들 걸러짐
                                for(let x = j; x < pur_len; x++) {
                                    //랑 같은 사이즈랑 가격 비교
                                    let $purcsize2 =response[3].data.data.productApiResponse.purchaseApiResponseList[x].sizeType;
                                    // console.log("사이즈 비교문")

                                    if($purcsize == $purcsize2){
                                        console.log("j_price : " + response[3].data.data.productApiResponse.purchaseApiResponseList[j].price );
                                        console.log("x_price : " + response[3].data.data.productApiResponse.purchaseApiResponseList[x].price );
                                        if(response[3].data.data.productApiResponse.purchaseApiResponseList[j].price < response[3].data.data.productApiResponse.purchaseApiResponseList[x].price ){
                                            $pro_price = response[3].data.data.productApiResponse.purchaseApiResponseList[j].price;
                                        }else{
                                            $pro_price = response[3].data.data.productApiResponse.purchaseApiResponseList[x].price;
                                        }
                                    }else{
                                        $pro_price = response[3].data.data.productApiResponse.purchaseApiResponseList[j].price;
                                    }
                                }
                            }
                        }
                    let sg_info = $('<div class="sg_info">').append(
                        '<p class="pro_size">' + $size + '</p>' + //260
                        '<p class="pro_price">'+ $pro_price+'</p>'//
                    );
                    $(int_list).append('</div>');
                    $(int_list).append(sg_info);
                }
                }
                $(int_list).append('</div>');

                $('.suggest_list').append(int_list);



    }).catch(function (err) {
            console.log(err);
        });

})
}