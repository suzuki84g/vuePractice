# チートシート

## 実行用コマンド

<!-- イメージ作成 -->
docker build . -t original_alpine_nginx

<!-- コンテナ立ち上げ -->
docker run -d -p 80:80 --name jsonp_container original_alpine_nginx

## 動作確認と削除

docker images
docker ps
<http://127.0.0.1/>

## 削除

docker rm -f jsonp_container
docker rmi original_alpine_nginx
