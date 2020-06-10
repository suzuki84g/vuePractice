`use strict`

var app = new Vue({
    el: '#app',
    data: {
        arrival_date: null,
        min_date: null
    },
    created: function () {
        /* // 初期値を設定する
        this.arrival_date = this.formatDate(new Date()); */
        // 翌日の日付を初期値とする
        var dt = new Date();
        dt.setDate(dt.getDate() + 1);
        this.arrival_date = this.formatDate(dt);
        // 翌日の日付を最小値とする
        this.min_date = this.arrival_date;
    },
    methods: {
        // 日付を整形
        formatDate: function (dt) {
            var y = dt.getFullYear();
            var m = ('00' + (dt.getMonth() + 1)).slice(-2);
            var d = ('00' + dt.getDate()).slice(-2);
            var result = y + '-' + m + '-' + d;
            return result;
        }
    }
});
