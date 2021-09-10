ymaps.ready(init);

function init() {
    var myMap = new ymaps.Map("map", {
            center: [53.191847, 50.134580],
            zoom: 10
        }, {
            searchControlProvider: 'yandex#search'
        });

   
}
