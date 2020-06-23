var app = new Vue({
    el: '#app',
    data: {
        name: 'スマホケース',
        price: 880
    },
    methods: {
        // （５）子から呼び出されるメソッド
        priceDown: function (discount) {
            // 下げ幅の指定が無い場合は100円引き（未定義）
            if (discount == undefined) discount = 100;
            // 値下げする
            this.price -= discount;
        }
    },
    components: {
        'my-component': myComponent
    }
});
