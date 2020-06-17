# チートシート

## 実行用コマンド

docker run --name jsonp_test -v `$PWD`/app:/usr/share/nginx/html -p 3030:80 nginx

## 動作確認と削除

[docker](https://qiita.com/wMETAw/items/34ba5c980e2a38e548db)
[docker](https://qiita.com/Yarimizu14/items/52f4859027165a805630)
[nginx](https://qiita.com/morrr/items/7c97f0d2e46f7a8ec967)

docker ps
<http://localhost:3030/>
<http://localhost:3030/jsonp.js>

## 削除

docker rm
docker rmi
