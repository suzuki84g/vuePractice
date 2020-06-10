`use strict`

var app = new Vue({
    el: '#app',
    data: {
        category: []
    },
    computed: {
        // 選択された分類を返す算出プロパティ
        selectedCategory: function () {
            // 1件以上選択されている場合、選択された値を連結した文字列を返す
            return this.category.length >=1 ? this.category.join() : '';
        }
    }
});
