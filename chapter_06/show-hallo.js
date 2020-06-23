`use strict`

Vue.component('show-hello', {
    // テンプレート
    template: '<p>{{message}}</p>',
    // data
    data: function () {
        return {
            message: 'Hello.'
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
