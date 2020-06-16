// `products.json`のJSONP
// 実態は単に関数を呼び出している
// 処理はローカルに渡してJSONPをscriptで読み込めばクロスドメインを回避出来る

function products(json) {
    // 描画する等の処理
}

products([
    { "id": 1, "name": "Michel<br>スマホケース", "price": 1580, "image": "images/01.jpg", "delv": 0, "isSale": true },
    { "id": 2, "name": "Raphael<br>スマホケース", "price": 1580, "image": "images/02.jpg", "delv": 0, "isSale": true },
    { "id": 3, "name": "Gabriel<br>スマホケース", "price": 1580, "image": "images/03.jpg", "delv": 240, "isSale": true },
    { "id": 4, "name": "Uriel<br>スマホケース", "price": 980, "image": "images/04.jpg", "delv": 0, "isSale": true },
    { "id": 5, "name": "Ariel<br>スマホケース", "price": 980, "image": "images/05.jpg", "delv": 0, "isSale": false },
    { "id": 6, "name": "Azrael<br>スマホケース", "price": 1580, "image": "images/06.jpg", "delv": 0, "isSale": false }
]);
