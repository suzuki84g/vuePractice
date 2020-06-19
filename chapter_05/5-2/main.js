`use strict`

//-------------------------------
// 変数宣言
//-------------------------------

// コンポーネントのルートノード
var app = document.querySelector('#app');
// 消費税率
var taxRate = 0.08;

//-------------------------------
// イベントハンドラの割り当て
//-------------------------------

// ページの読み込み完了イベント
window.addEventListener('load', onPageLoad, false);
// 入力内容変更イベント（DVD仕上がり予定日）
app.querySelector('#delivery_date').addEventListener('change', onInputChanged, false);
// 入力内容変更イベント（BGM手配）
app.querySelector('#opt1').addEventListener('change', onInputChanged, false);
// 入力内容変更イベント（撮影）
app.querySelector('#opt2').addEventListener('change', onInputChanged, false);
// 入力内容変更イベント（DVD盤面印刷）
app.querySelector('#opt3').addEventListener('change', onInputChanged, false);
// 入力内容変更イベント（写真スキャニング）
app.querySelector('#opt4').addEventListener('change', onInputChanged, false);

//-------------------------------
// イベントハンドラ
//-------------------------------

// ページの読み込みが完了した時に呼び出されるイベントハンドラ
function onPageLoad(event) {
    // 挙式日に2ヶ月後の日付を設定
    // DVD仕上がり予定日に、挙式日の1週間前の日付を設定
    // DVD仕上がり予定日に翌日以降しか入力出来ないようにする
    // フォームの表示を更新する
    updateForm();
}

// 入力内容を変更した時呼び出されるイベントハンドラ
function onInputChanged(event) {
    // フォームの表示を更新する
    updateForm();
}

//-------------------------------
// 関数
//-------------------------------

// 金額の表示を更新する関数
function updateForm() {
    // 金額を再計算
    // 表示を更新
}
