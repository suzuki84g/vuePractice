# チートシート

## 実行用コマンド

<!-- イメージ作成 -->
docker build . -t original_alpine_nginx

<!-- コンテナ立ち上げ -->
<!-- TODO:`-v`オプションでマウントの設定を入れる -->
docker run -d -p 3000:80 --name jsonp_container original_alpine_nginx

## 動作確認と削除

[docker](https://qiita.com/wMETAw/items/34ba5c980e2a38e548db)
[docker](https://qiita.com/Yarimizu14/items/52f4859027165a805630)
[nginx](https://qiita.com/morrr/items/7c97f0d2e46f7a8ec967)

docker images
docker ps
<http://127.0.0.1/>

## 削除

docker rm -f jsonp_container
docker rmi original_alpine_nginx
