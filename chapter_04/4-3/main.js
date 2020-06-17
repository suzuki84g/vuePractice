`use strict`

// `$`は`jQuery`エイリアス
// eg `$.ajax == jQuery.ajax`

// 読み込みボタンのクリックイベントハンドラを定義
$('#load').on('click', clickHandler);
function clickHandler(event) {
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
            // 通信成功時の処理
            updateScreen(data)  // datatypeで指定したものが渡される。ここではjson、全量はjqXHR。
        })
        .fail(function (jqXHR, textStatus, errorThrown) {
            // ここに通信失敗時の処理を記述
            console.log('通信は失敗しました。');
        });
}

// 商品一覧の描画を更新する
function updateScreen(products) {
    // 商品リストの子ノード全削除
    $('#result').empty();
    // 商品の子ノードをDOMに挿入
    var list = '';  // 空のlistを宣言
    for (var i = 0; i < products.length; i++) {
        list += '<div>';
        list += '商品ID:' + products[i].id;
        list += ' 商品名:' + products[i].name;
        list += ' 料金:' + products[i].price;
        list += ' 画像パス:' + products[i].image;
        list += ' 送料:' + products[i].delv;
        list += ' セール対象:' + products[i].isSale;
        list += '</div>';
    }
    $('#result').append(list);
}
