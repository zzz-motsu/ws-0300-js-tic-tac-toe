# js-tic-tac-toe

このリポジトリ はHTML, CSS(SASS), JavaScriptの練習用リポジトリです。

デモ: https://version-1.github.io/js-tic-tac-toe

デモをみながら同じようなアプリを実装してください。

## Prepare 準備

課題に取り組む前にnode.jsのインストールが必要です。下記記事にしたがってインストールをしてください。


[nvm +  Node.js + npmのインストール - Qiita](https://qiita.com/sansaisoba/items/242a8ba95bf70ba179d3#mac%E3%81%AE%E5%A0%B4%E5%90%88)


## Run

```
git clone https://github.com/version-1/js-tic-tac-toe.git
cd js-tic-tac-toe
yarn install
yarn run compile:css
```

open html

## 留意事項

#### 1. JavaScriptでのイベントの実装はaddEventListenerを利用することhtml内でのイベントの登録は行わない。

英語: [EventTarget.addEventListener() - Web APIs | MDN](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)

日本語: [EventTarget.addEventListener() - Web APIs | MDN](https://developer.mozilla.org/ja/docs/Web/API/EventTarget/addEventListener)

#### 2. htmlのDOMに直接スタイルをあてない、またはjsでDOMのスタイルを書き換えるのではなく、クラスを付与することでスタイルを変化させること。

#### 3. 関数型プログラミングの考え方にのっとって、状態と振る舞いを分離させること

参考リンク:
[関数型プログラミングはまず考え方から理解しよう - Qiita](https://qiita.com/stkdev/items/5c021d4e5d54d56b927c)

[関数型プログラミング入門 | POSTD](https://postd.cc/an-introduction-to-functional-programming/)

#### 4. 成果物はGithub Pagesにて公開する。(gh-pagesブランチをつくってPUSHするだけ）
#### 5. cssのスタイルはSASS記法でSMACCSSの考えに則って実装する
#### 6. 上記ルールに則りながら必要に応じて自分でファイルを追加・編集する
#### 7. 課題を始める前にこちらのリポジトリをクローンして、課題が終わったらプルリクエストを送ること

