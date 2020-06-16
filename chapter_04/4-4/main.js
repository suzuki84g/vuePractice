`use strict`

// JSONPのURL（githubのrepositoryに上げたファイル）
var url = 'https://raw.githubusercontent.com/suzuki84g/vuePractice/dev/chapter_04/4-4/jsonp.js';

// 非同期通信でJSONPの読み込み
$.ajax({
    url: url,
    type: 'GET',
    dataType: 'jsonp',          // データタイプ
    jsonp: 'callback',          // クエリパラメータの名前
    jsonpCallback: 'products'   // コールバック関数の名前
    })
    .done(function (data, textStatus, jqXHR) {
        console.log(data);
    })
    .fail(function (jqXHR, textStatus, errorThrown) {
        console.log('通信失敗')
});
