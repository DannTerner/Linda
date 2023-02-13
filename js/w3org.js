$('document').ready(function(){
    loadGoods();
});
function loadGoods() {
    // Загружаю товари на страницу
    $.getJSon('goods.json', function(date) {
        console.log(data);
    })
} 