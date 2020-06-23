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
            this.$emit('child-click');
        }
    }
});
