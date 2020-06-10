`use strict`

// Vue.filter('number_format', function (val) {
//     return val.toLocaleString();
// });

var app = new Vue({
    el: '#app',
    data: {
        price: 1000
    },
    filters: {
        number_format: function (val) {
            return val.toLocaleString();
        },
        // priceの後ろに単位をつける
        unit: function (val) {
            return val + '円';
        }
    }
});
