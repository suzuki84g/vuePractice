`use strict`

var app = new Vue({
    el: '#app',
    data: {
        // 回答内容（選択された値）
        answer: '',
        // 選択肢に表示する配列データ
        options: [
            { code: 'ans1', label: '初めて' },
            { code: 'ans2', label: '週1回以上' },
            { code: 'ans3', label: '月2回以上' },
            { code: 'ans4', label: '半年に1回' }
        ]
    }
});
