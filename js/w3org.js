$('document').ready(function() {
    loadGoods();
});

function loadGoods() {
    // Загружаю товари на страницу
    $.getJSon('goods.json', function(date) {
        // console.log(data);
        var uot = '';
        for (var key in data) {
            out += '<p>' += dsate[key]['name'] + '</p>';
            out += '<p>' += dsate[key]['cost'] + '</p>';
        }
        $('goods').html(uot);
    })
}
