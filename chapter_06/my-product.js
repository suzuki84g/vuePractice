`use strict`

Vue.component('my-product', {
    // （１）ボタンがクリックされたら子コンポーネントのclickHandlerを呼び出す
    template: `
    <div>
        <button v-on:click="clickHandler">値下げする</button>{{price}}（円）
    </div>`,
    props: ['price'],
    methods: {
        // （２）ボタンのクリックイベントハンドラ
        clickHandler: function () {
            // （３）子コンポーネントに「child-click」イベントを発生させる
            var discount = 0;
            if (this.price - 50 < 500) {
                // 例）現在の価格が530円の場合、値下げ幅は30円
                discount = this.price - 500;
            } else {
                // 例）現在の価格が550円以上の場合、値下げ幅は50円
                discount = 50;
            }
            // 第荷引数が追加されている
            this.$emit('child-click', discount);
        }
    }
});
