`use strict`

var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!'
    }
});

// 「動くモノ」クラスの定義
var Movable = function (x, y) {
    this.pos = {
        x: x,
        y: y,
    };
    this.move = function (x, y) {
        this.pos.x += x;
        this.pos.y += y;
    };
};

// ボールのインスタンスを生成する
var ball = new Movable(10, 50) // 初期座標の指定
// ボールをx方向に5、y方向に3動かす
ball.move(5, 3);
// 座標をブラウザのコンソールに出力
console.log(ball.pos.x);
console.log(ball.pos.y);
