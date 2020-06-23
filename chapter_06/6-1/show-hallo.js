`use strict`

Vue.component('show-hello', {
    // テンプレート
    template: '<div><span>{{name}}</span>:<span>{{price}}円</span></div>',
    // data
    data: function () {
        return {
            name: 'スマホケース',
            price: 980
        }
    },
    // メソッド
    methods: {
    },
    // 算出プロパティ
    computed: {
    },
    // ウォッチャ
    watch: {
    },
    // フィルター
    filter: {
    },
    // ライフサイクルハック
    created: function () {
    }
});
