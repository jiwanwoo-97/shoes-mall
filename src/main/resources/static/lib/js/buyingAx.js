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



            }).catch(function (err) {
            console.log(err);
        });
    })
}