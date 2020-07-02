import Vue from 'vue';

// 数値を通過形式「#,###,###」に変換するフィルター
Vue.filter('number_format', function (val) {
    return val.toLocaleString();
});