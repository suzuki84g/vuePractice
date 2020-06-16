`use strict`

// `$`は`jQuery`エイリアス
// eg `$.ajax == jQuery.ajax`

// 読み込みボタンのクリックイベントハンドラを定義
$('#load').on('click', clickHandler);
function clickHandler(event) {
    // TODO:ここにJSONを読み込む処理を記述
    // 非同期通信によるJSON読み込み
    // `$.ajax({オブジェクト表記パラメータ}).done(コールバック関数).fail(コールバック関数)`ここまで繋がっている
    // イベントハンドラ＝＝予め仕込んでおいたら勝手に呼び出される関数＝＝コールバック関数
    // `$.ajax`が特別な戻り値オブジェクト（プロミス）を返すのでメソッドチェーンで記述が可能
    $.ajax({
        url: 'products.json',   // 通信先URL
        type: 'GET',            // 使用するHTTPメソッド
        dataType: 'json'        // responseのデータタイプ
    })
        .done(function (data, textStatus, jqXHR) {
            // ここに通信成功時の処理を記述
            console.log('通信は成功です。');
            console.log(jqXHR);  // プロミス表示
        })
        .fail(function (jqXHR, textStatus, errorThrown) {
            // ここに通信失敗時の処理を記述
            console.log('通信は失敗しました。');
        });
}
