`use strict`

var app = new Vue({
    el: '#app',
    data: {
        color: '#000000',
        red: 0,
        blue: 0,
        green: 0
    },
    computed: {
        // 赤・緑・青を配列で返す算出プロパティ
        colorElement: function () {
            return [this.red, this.green, this.blue];
        }
    },
    watch: {
        // 3色の変更を監視する
        colorElement: function (newRGB, oldRGB) {
            // 三色を2桁の16進数表記に変換する
            var r = ('00' + newRGB[0].toString(16).toUpperCase()).slice(-2);
            var g = ('00' + newRGB[1].toString(16).toUpperCase()).slice(-2);
            var b = ('00' + newRGB[2].toString(16).toUpperCase()).slice(-2);
            // #RRGGBB 形式の文字列に変換
            this.color = '#' + r + g + b;
        },
        // カラーパレットの選択変更を監視する
        color: function (newColor, oldColor) {
            this.red = parseInt(newColor.substr(1, 2), 16);  // substr(文字列の位置, 何文字か)
            this.green = parseInt(newColor.substr(3, 2), 16);
            this.blue = parseInt(newColor.substr(5, 2), 16);
        }
    }
});