`use strict`

var app = new Vue({
    el: '#app',
    data: {
        // 表示中の商品数
        count: 0,
        // セール状態絞り込みチェック
        showSaleItem: false,
        // 送料無料絞り込みチェック
        showDelvFree: false,
        // 並び替えフィルタリング（1：標準、2：安い順）
        sortOrder: 1,
        /* 商品情報
        商品名
        商品画像
        価格
        セール対象
        送料
        */
        products: [
            {
                name: hoge,
                price: 1234,
                image: hoge,
                delv: 1234,
                isSale: false
            }
        ]
    }
});
