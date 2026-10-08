# ダイオキシン類 Studyware

**暗記する前に、つながりを理解する。**

公害防止管理者等国家試験の「ダイオキシン類概論」「ダイオキシン類特論」を対象に、意味・因果関係・論点間のつながりを語りかけるように解説する、非公式のオープンStudywareです。

> **開発初期段階**：序章・法規制・発生機構の解説は下書きです。現状の問題はオリジナル6問のみで、全出題範囲をカバーしていません。

## 学習サイト

GitHub Pagesで公開すると、通常は次のURLになります。

https://rhodanus2179.github.io/dioxin-studyware/

Pages設定を有効にするまでは公開ページが表示されません。

## 特徴

- **理解重視のテキスト**：定義や数字を羅列せず、なぜ必要な知識なのかを説明。
- **概論7分野＋特論5分野**：公式の試験科目の範囲に対応する章立て。
- **序章**：「ダイオキシン類とは何か」「問題・規制の経緯」から導入。
- **確認問題**：選択式・解説付きのオリジナル問題。
- **弱点復習**：直近の誤答を端末内に記録（localStorage）。

## ローカルでの起動

静的サイトです。ビルドは必要ありませんが、JSON/Markdownの読み込みにHTTPサーバーが必要です。

```bash
python3 -m http.server 8000
```

http://localhost:8000/ にアクセスしてください。

## ファイル構成

```text
index.html             画面の入口
css/style.css          スタイル
js/app.js              画面・演習ロジック
js/storage.js          ブラウザ内の学習履歴
content/               Markdown形式の解説原稿
data/chapters.json     公式出題範囲と章の対応
data/questions.json    自作の確認問題と解説
data/references.json   参照元
docs/editorial-policy.md  執筆方針
```

## 公開方法

Repository Settings → Pages → Build and deployment → **Deploy from a branch** → Branch **main** → Folder **/(root)** を選び、Saveしてください。初期Pull Requestがマージされるまではコンテンツがありません。

## 注意事項・権利

本サイトは国家試験実施機関・行政機関と無関係の非公式教材です。公表資料・最新法令と照合して学習してください。学習履歴は端末ごとに保存され、端末間同期はされません。

公式問題文の無断転載は行わず、年度・設問番号・論点・オリジナル解説と公式公開ページへのリンクを中心に整理します。ライセンスの最終決定・表示は別途行います。

## 主要資料

- [JEMAI：試験科目・範囲](https://www.jemai.or.jp/polconman/examination/dd4ht300000005eq-att/pol_subjects1.pdf)
- [JEMAI：過去の国家試験問題・正解](https://www.jemai.or.jp/polconman/examination/past.html)
- [環境省：ダイオキシン類対策](https://www.env.go.jp/air/dioxin/dioxin.html)
