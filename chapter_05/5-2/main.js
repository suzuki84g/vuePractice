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
app.querySelector('#opt4').addEventListener('input', onInputChanged, false);

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

// 日付をYYYY-MM-DDの書式で返すメソッド
function formatDate(dt) {
    var y = dt.getFullYear();
    var m = ('00' + (dt.getMonth()+1)).slice(-2);
    var d = ('00' + dt.getDate()).slice(-2);
    return (y + '-' + m + '-' + d);
}

// 明日の日付をYYYY-MM-DDの書式で返す関数
function tomorrow() {
    var dt = new Date();
    dt.setDate(dt.getDate() + 1);
    return formatDate(dt);
}

// 税抜金額を税込み金額に変換する関数
function incTax(untaxed) {
    return Math.floor(untaxed * (1 + taxRate));
}

// 数値を通過書式「#,###,###」に変換する関数
function number_format(val) {
    return val.toLocaleString();
}

// 再計算した基本料金（税込み）を返す関数
function taxedBasePrice() {
    // 基本料金（税込み）を返す
}

// 再計算したオプション料金（税込み）を返す関数
function taxedOptPrice() {
    // オプション料金（税込み）を返す
}

// 金額の表示を更新する関数
function updateForm() {
    // フォームコントロールを取得
    var sum_base = app.querySelector('#sum_base')  // 基本料金
    var sum_opt = app.querySelector('#sum_opt')  // オプション料金
    var sum_total = app.querySelector('#sum_total')  // 合計

    // 金額を再計算
    var basePrice = taxedBasePrice();  // 基本料金（税込み）
    var optPrice = taxedOptPrice();  // オプション料金（税込み）
    var totalPrice = basePrice + optPrice;  // 合計（税込み）

    // 表示を更新（HTMLのvalueの値に再計算した金額を変数更新）
    sum_base.value = number_format(basePrice);  // 基本料金
    sum_opt.value = number_format(optPrice);  // オプション料金
    sum_total.value = number_format(totalPrice);  // 合計
}
