# アプリ名 
## Typ-Pro

 ## 概要
 タイピングをしながらプログラミングを学べるアプリケーションです。
 タイピングで表示される項目はJacaScriptで使用するメソッドです。
 60秒間での成功数と失敗数を元にスコアが計算されます。
 スコアはユーザー登録をしているとランキングへ登録が可能です。
 また、自分のスコア一覧をマイページで閲覧する事も出来ます。

 ## 制作背景
プログラミングを始める際に、まずタイピングを早く出来るようになりたいと思いました。
その際にタイピングアプリを使っていたのですが、そこでプログラミングで使う用語を学ぶことができれば一石二鳥と考えた為です。

 ## DEMO

 ### DB設計

 #### Usersテーブル
|Column            |Type    |Options                          |
|------------------|--------|---------------------------------|
|name              |string  |null: false                      |
|email             |string  |null: false                      |
#### Association
has_many :scores

#### Scoresテーブル
|Column            |Type    |Options                          |
|------------------|--------|---------------------------------|
|score             |integer |null: false                      |
|user_id           |integer |null: false, foreign_key: true   |
#### Association
belongs_to :user

 ### 今後の実装予定
・タイピングの文字を打つ時に用語の説明も同時に表示させるようにする  
・マイページでグラフ等を用いてより詳細なデータの分析を実装する  
・UI/UXを整える  


url[https://gyazo.com/b31ca858e8321c91bca605cf766ca39f]
