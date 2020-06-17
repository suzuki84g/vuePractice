`use strict`

// 数値を通過形式「#,###,###」に変換するフィルター
Vue.filter('number_format', function (val) {
    return val.toLocaleString();
});

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
        // 商品リストは外部に持たせる
        products: []
    },
    // ライフサイクルハック
    created: function () {
        // JSONPのURL
        var urlLocal = 'http://localhost:3030/jsonp.js'
        // 非同期通信で読み込む
        $.ajax({
            url: urlLocal,
            type: 'GET',
            dataType: 'jsonp',
            jsonp: 'callback',          // クエリ名
            jsonpCallback: 'products'   // 関数名
        })
            .done(function (data, textStatus, jqXHR) {
                this.products = data;
            }.bind(this))
            .fail(function (jqXHRm, textStatus, errorThrown) {
                console.log('通信が失敗しました');
            });
    },
    watch: {
        // 「セール対象」チェックボックスの状態を関しするウォッチャ
        showSaleItem: function (newVal, oldVal) {
            // ここでproductsの配列を書き換える
            console.log("showSaleItemウォッチャが呼び出されたよ")
        },
        // 「送料無料」チェックボックスの状態を監視するウォッチャ
        showDelvFree: function (newVal, oldVal) {
            // ここでproductの配列を書き換える
            console.log("showDelvFreeウォッチャが呼び出されたよ")
        }
    },
    computed: {
        // 絞り込み後の商品リストを返す算出プロパティ
        filteredList: function () {
            // 絞り込み後の商品リストを格納する新しい配列
            var newList = [];
            for (var i = 0; i < this.products.length; i++) {
                // 表示対象かどうかを判定するフラグ
                var isShow = true;
                // i番目の商品が表示対象日どうかを判定する
                if (this.showSaleItem && !this.products[i].isSale) {
                    // 「セール対象」チェック有りで、セール対象商品ではない場合
                    isShow = false;  // この商品は表示しない
                }
                if (this.showDelvFree && this.products[i].delv > 0) {
                    // 「送料無料」チェック有りで、送料ありの商品の場合
                    isShow = false;  // この商品は表示しない
                }
                    // 表示対象の商品だけを新しい配列に追加する（isShowのboolean型が判別）
                if (isShow) {
                    newList.push(this.products[i]);
                }
            }
            // 新しい配列を並び替える
            if (this.sortOrder == 1) {
                // 標準側なのでそのまま変更無し
            } else if (this.sortOrder == 2){
                // 価格が安い順
                newList.sort(function (a, b) {
                    return a.price - b.price;
                });
            }
            // 絞り込み後の商品リストを返す
            return newList;
        },
        count: function () {
            return this.filteredList.length;
        }
    }
});
