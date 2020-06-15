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
            { name: 'Michel<br>スマホケース', price: 1580, image: 'images/01.jpg', delv: 0, isSale: true },
            { name: 'Raphaelf<br>スマホケース', price: 1580, image: 'images/02.jpg', delv: 0, isSale: true },
            { name: 'Gabriel<br>スマホケース', price: 1580, image: 'images/03.jpg', delv: 240, isSale: true },
            { name: 'Uriel<br>スマホケース', price: 980, image: 'images/04.jpg', delv: 0, isSale: true },
            { name: 'Ariel<br>スマホケース', price: 980, image: 'images/05.jpg', delv: 0, isSale: false },
            { name: 'Azrael<br>スマホケース', price: 1580, image: 'images/06.jpg', delv: 0, isSale: false },
        ]
    }
});
