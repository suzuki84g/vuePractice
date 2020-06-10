`use strict`

var app = new Vue({
    el: '#app',
    data: {
        message: '',
        stock: 10
    },
    methods: {
        // 削除ボタンのクリックイベントハンドラ
        onDeleteItem: function () {
            this.stock--;
        }
    },
    computed: {
        // 囲うしたメッセージを返す算出property
        statusMessage: function () {
            if (this.stock == 0) {
                return '売り切れ';
            }
            return '';
        }
    }
});
