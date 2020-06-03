`use strict`

// var app = new Vue({
//     el: '#app',
//     data: {
//         message: 'Hello Vue!'
//     }
// });

// 「動くモノ」クラスの定義
var Movable = function (x, y) {
    this.pos = {
        x: x,
        y: y
    };
    this.move = function (x, y) {
        this.pos.x += x;
        this.pos.y += y;
    };
};

// ボールオブジェクトを格納する空の配列を用意
var ball = [];
// 100個分の繰り返し
for (var i = 0; i <= 100; i++) {
    // ボールオブジェクトのインスタンスを作成
    ball[i] = new Movable(
        Math.floor(Math.random()*window.innerWidth),
        Math.floor(Math.random()*window.innerHeight)
    );
};

//ボールをブラウザに描画する
for (var i = 0; i <= 100; i++) {
    document.write('<div class="ball" style="top:' + ball[i].pos.y + 'px;left:' + ball[i].pos.x + 'px;")>●</div>');
};

// component
var ball = new Vue({
    el: '#ball',
    data: {
        pos: { x: 0, y: 0 },
        radius: 20
    },
    methods: {
        move: function(x, y) {
            this.pos.x += x;
            this.pos.y += y;
        }
    }
});
// ボールをx方向へ100px、y方向へ100px動かす
ball.move(100, 100);
// ボールの半径を40pxに変更する
ball.radius = 40;
