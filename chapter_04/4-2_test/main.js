`use strict`

var btnLoad = document.querySelector('#load');
// 読み込みボタンのクリックイベントハンドラを定義
btnLoad.addEventListener('click', clickHandler);
function clickHandler(event) {
    // 1. XMLHttpRequestオブジェクトのインスタンスを生成
    var xmlHttpRequest = new XMLHttpRequest();
    // 2. 通信状態の変化を関しするイベントハンドラの設定
    xmlHttpRequest.onreadystatechange = function () {
        // 受信が正常に完了した場合をtrue（ローカルのfileプロトコル使用時はステータス確認をオフ）
        if (this.readyState == 4 /*&& this.status == 200*/) {
            // jsonを変数に格納
            var products = this.response;
            // 商品リストの子ノードを全て削除する
            var result = document.querySelector('#result')
            result.textContent = '';
            // 商品の子ノードをDOMに挿入する
            for (var i = 0; i < products.length; i++) {
                var text = '商品ID:' + products[i].id;
                text += ' 商品名:' + products[i].name;
                text += ' 料金:' + products[i].price;
                text += ' 画像パス:' + products[i].image;
                text += ' 送料:' + products[i].delv;
                text += ' セール対象:' + products[i].isSale;
                var div = document.createElement('div');
                div.textContent = text;
                result.appendChild(div);
            }
        }
    };
    // 3. レスポンス形式の指定
    xmlHttpRequest.responseType = 'json';
    // 4. requestメソッドと読み込むファイルのパスを指定
    xmlHttpRequest.open('GET', 'products.json');
    // 5. requestの送信（非同期通信の開始）
    xmlHttpRequest.send();
};
