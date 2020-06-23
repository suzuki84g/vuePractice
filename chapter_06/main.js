var app = new Vue({
    el: '#app',
    data: {
        name: 'スマホケース',
        price: 880
    },
    methods: {
        // （５）子から呼び出されるメソッド
        priceDown: function () {
            this.price -= 100;
        }
    },
    components: {
        'my-component': myComponent
    }
});
