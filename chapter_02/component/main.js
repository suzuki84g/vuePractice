`use strict`

// Vue.filter('number_format', function (val) {
//     return val.toLocaleString();
// });

var app = new Vue({
    el: '#app',
    data: {
        stock: 10
    },
    methods: {
        // 削除ボタンのクリックイベントハンドラ
        onDeleteItem: function () {
            this.stock--;
        }
    }
});
