var app = new Vue({
    el: '#app',
    data: {
        name: 'スマホケース',
        price: 880
    },
    methods: {
        priceDown: function () {
            var discount = 0;
            if (this.price - 50 < 500) {
                // 例）現在の価格が530円の場合、値下げ幅は30円
                discount = this.price - 500;
            } else {
                // 例）現在の価格が550円以上の場合、値下げ幅は50円
                discount = 50;
            }
            // // 第荷引数が追加されている
            // this.$emit('child-click', discount);

            // 値引きする
            this.price -= discount;
        }
    }
});
