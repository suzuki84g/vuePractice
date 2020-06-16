`use strict`

var btnLoad = document.querySelector('#load');
// 読み込みボタンのクリックイベントハンドラを定義
btnLoad.addEventListener('click', clickHandler);
function clickHandler(event) {
    // TODO:JSON読み込み時の処理を記述
    // 1. XMLHttpRequestオブジェクトのインスタンスを生成
    var xmlHttpRequest = new XMLHttpRequest();
    // 2. 通信状態の変化を関しするイベントハンドラの設定
    xmlHttpRequest.onreadystatechange = function () {
        // 受信が正常に完了した場合をtrue
        if (this.readyState == 4 && this.status == 200) {
            // 受信データをコンソール出力
            console.log(this.readyState, this.response);
        }
    };
    // 3. レスポンス形式の指定
    xmlHttpRequest.responseType = 'JSON';
    // 4. requestメソッドと読み込むファイルのパスを指定
    xmlHttpRequest.open('GET', 'products.json');
    // 5. requestの送信（非同期通信の開始）
    xmlHttpRequest.send();
};
