# 全書品質監査台帳 v0.1（P0・初回機械走査と原典突合）

- 監査日：2026-10-14（JST）。対象：`rhodanus2179/dioxin-studyware` / `main`。
- 対象原稿：`books/dioxin-guide/manuscript/chapter-00.md` ～ `chapter-12.md` と `appendix.md`。比較対象：`outline/detailed-writing-spec-v0.3.md`、`outline/contents-v0.1.md`、`docs/research/knowledge-normalization.csv`、`reviews/chapter-01-review-v0.1.md` ～ `chapter-12-review-v0.1.md`、`reviews/appendix-review-v0.1.md`、引継ぎ2026-10-13。
- **全体判定：drafting / `publication_approval: false` / 出版NO-GO。** 既存の構造・計算一次PASSは独立科学・法令・JIS審査を意味しない。P0の原典照合は限定した一次事実に限る。
- 検証ラベル：**M**＝現行mainの本文を機械抽出した事実（内容真偽とは無関係）、**P**＝この監査で公的原典・規格出版元の公開ページと部分突合した事実、**H**＝原稿・旧レビューから引き継いだだけ又は原典全文未照合のHOLD、**R**＝内容独立監査済み（本台帳には原則なし）。
- **禁止**：HをP/Rへ一括昇格させること、本文を224頁に合わせるため先に削ること、図版指示を完成図と数えること、未検証演習を正答保証とすること。

## 1. 機械検査結果（原稿現行mainより再取得）

| 項目 | 実測 | 引継ぎ目標 | 判定の限界 |
|---|---:|---:|---|
| 節 | 44 | 44 | M：件数一致、内容HOLD |
| 項 | 119 | 119 | M：件数一致、内容HOLD |
| 目 | 238 | 238 | M：件数一致、内容HOLD |
| 登録知識ID（CSV） | 227 | 227 | M：件数一致、内容HOLD |
| 知識IDの原稿登場漏れ | 0 | 0 | M：件数一致、内容HOLD |
| 本文独自五択 | 71 | 71 | M：件数一致、内容HOLD |
| 番号付き計算例 | 52 | 52 | M：件数一致、内容HOLD |
| 番号付き図の制作指示 | 124 | 124 | M：件数一致、内容HOLD |
| 付録直前チェック | 51 | 51 | M：件数一致、内容HOLD |
| 付録○×設問（D-5第一表） | 10 | 10 | M：件数一致、内容HOLD |

- 知識ID：登録ID重複=0、本文13章で未登場=0（なし）、本文でCSV未登録の形式一致ID=0（なし）。**ID出現は知識説明の充足を証明しない**。付録中の再参照は登録数の評価対象外。
- 全13章＋付録のfrontmatterは`status: drafting`、`publication_approval: false`（M：14/14一致）。
- 章別の図124件は**文字列として存在する制作指示**。清書・校閲された完成図の数ではない。序章の「ミニ計算例」等、番号付き「計算例」以外の数値演習は上記52件に含まない。
- **選択肢の構造検査**：①～⑤が各独立行にある60/71問に加え、残り11問では選択肢5肢が**同じ1行内に横並び**で記載されていることを再取得・確認した（対象：8-2、8-5、9-8、10-2、10-4、10-7、11-7、12-3、12-5、12-7、12-8）。したがって**五肢表示の欠落は0/71問**。正答表記抽出=71/71。横並び11問は組版時の可読性を別途検査する。この検査では正答唯一性・誤肢の論理・説明十分性を保証しない（複数肢をまとめて論じる表現もあり得る）。
- 原稿Markdown文字数（見出し・表・参照・注記を含む）=326252文字。組版実字数とは異なる。**字数の多寡をP0の不合格理由としない**。


**P0再検査による表示上の発見（S2、誤答は未確定）**：選択肢のレイアウトが縦積み60問、横並び11問で不統一。11問は五肢自体が欠けているわけではなく、単純な「行頭①～⑤」正規表現の検出漏れだった。組版時は改行・折返し・可読性の統一が必要（該当IDは上記）。法令や答えの正しさの評価ではない。

### 1.1 章別検査一覧

| 章 | 節 | 項 | 目 | 五択 | 計算 | 図指示 | 原稿文字数 | 未承認内容 | 対応ファイル |
|---|---:|---:|---:|---:|---:|---:|---:|---|---|
| 第0章 | 3 | 6 | 12 | 3 | 0 | 5 | 9601 | 法令・科学・教材・権利：HOLD | `books/dioxin-guide/manuscript/chapter-00.md` |
| 第1章 | 4 | 12 | 24 | 5 | 0 | 6 | 22733 | 法令・科学・教材・権利：HOLD | `books/dioxin-guide/manuscript/chapter-01.md` |
| 第2章 | 2 | 4 | 8 | 2 | 0 | 3 | 10937 | 法令・科学・教材・権利：HOLD | `books/dioxin-guide/manuscript/chapter-02.md` |
| 第3章 | 3 | 7 | 14 | 3 | 1 | 4 | 16576 | 法令・科学・教材・権利：HOLD | `books/dioxin-guide/manuscript/chapter-03.md` |
| 第4章 | 4 | 10 | 20 | 5 | 3 | 9 | 27847 | 法令・科学・教材・権利：HOLD | `books/dioxin-guide/manuscript/chapter-04.md` |
| 第5章 | 3 | 8 | 16 | 4 | 1 | 9 | 24179 | 法令・科学・教材・権利：HOLD | `books/dioxin-guide/manuscript/chapter-05.md` |
| 第6章 | 3 | 7 | 14 | 4 | 3 | 9 | 24997 | 法令・科学・教材・権利：HOLD | `books/dioxin-guide/manuscript/chapter-06.md` |
| 第7章 | 2 | 4 | 8 | 3 | 1 | 5 | 18312 | 法令・科学・教材・権利：HOLD | `books/dioxin-guide/manuscript/chapter-07.md` |
| 第8章 | 5 | 16 | 32 | 9 | 10 | 15 | 34370 | 法令・科学・教材・権利：HOLD | `books/dioxin-guide/manuscript/chapter-08.md` |
| 第9章 | 3 | 9 | 18 | 8 | 7 | 12 | 27993 | 法令・科学・教材・権利：HOLD | `books/dioxin-guide/manuscript/chapter-09.md` |
| 第10章 | 3 | 7 | 14 | 7 | 9 | 13 | 27084 | 法令・科学・教材・権利：HOLD | `books/dioxin-guide/manuscript/chapter-10.md` |
| 第11章 | 3 | 9 | 18 | 7 | 2 | 14 | 30040 | 法令・科学・教材・権利：HOLD | `books/dioxin-guide/manuscript/chapter-11.md` |
| 第12章 | 6 | 20 | 40 | 11 | 15 | 20 | 27159 | 法令・科学・教材・権利：HOLD | `books/dioxin-guide/manuscript/chapter-12.md` |
| 付録A～E | — | — | — | ○×10 | 本文52件に含まず | 図A-1別枠 | 24424 | 法令・索引：HOLD | `books/dioxin-guide/manuscript/appendix.md` |


## 2. 優先度付き問題・HOLD台帳

重大度：**S0**＝法定適用・正答・基準値に直結（未解消なら出版不可）、**S1**＝重要な科学・測定・統計・教材の誤解リスク、**S2**＝参照・編集・図版上の未完。判定は「誤り確定」の意味ではない。

各行は「章節／問題・懸念／原典URL／施行版・資料改訂日／検証状況／要対応／GitHubファイル」。現段階で誤記と断定できないものは**問題点＝未確認リスク**と明示する。

| ID・重大度 | 章節 | 問題点・リスク | 原典・URL | 施行版・発行／改訂日 | 検証状況 | 必要な修正・検査 | 対象ファイル |
|---|---|---|---|---|---|---|---|
| **L-001 S0** | 1.1・1.4、11.3、付録A | 特措法は2026年9月16日施行改正あり。旧条文や2026年度試験基準日の版と混同の恐れ。 | e-Gov https://laws.e-gov.go.jp/law/411AC0100000105/20260916_508AC0000000043 | 令和8年9月16日施行版（法律43号）；試験適用基準日は未確認 | P：e-Gov改正履歴の日付を確認／改正影響条文はHOLD | 旧版との差分・改正附則・届出等への影響・試験実施要領の基準日を条単位で照合 | chapter-01.md、chapter-11.md、appendix.md |
| **L-002 S0** | 1、9、11、12、付録A | 施行規則に2026年7月1日施行改正あり。改正内容・附則が本文条項へ影響するか未判定。 | e-Gov https://laws.e-gov.go.jp/law/411M50000002067 | 令和8年7月1日施行・環境省令19号（改正箇所全文は未照合） | P：改正履歴表示／H：変更箇所・附則 | 第1条の2・第2/3条・別表1～3・附則と2026年基準日で差分検査 | chapter-01.md、chapter-09.md、chapter-11.md、chapter-12.md、appendix.md |
| **L-003 S0** | 9.1～9.3、付録A-2 | 大気5号の入口は火床面積又は焼却能力のOR、複数炉の合算と規模別基準を混同するリスク。 | e-Gov https://laws.e-gov.go.jp/law/411CO0000000433 | 政令433号、2019年1月1日施行版を参照可／2026年の改正有無は要最終確認 | H：現行別表第一全文の号・例外・合算条文の独立検証待ち | 0.5 m² OR 50 kg/h、合算、複数炉・共通煙突、適用除外を原文からケース別に再判定 | chapter-09.md、appendix.md |
| **L-004 S0** | 9.3、付録A-3 | 新設/既設：2000年施行時点・1997年12月2日特例・工事着手と附則を混同すると正答が変わる。 | e-Gov https://laws.e-gov.go.jp/law/411M50000002067 | 原始附則・附則別表第二、既存施設経過措置。2026-10-14時点の体系全文未精査 | H：既存レビューの論点を引継ぎ | 炉種・着工日・移設・増設・設置者変更を場合分けし法令専門校閲 | chapter-09.md、chapter-01.md、appendix.md |
| **L-005 S0** | 9.3、12.5、付録A-3 | O₂補正対象施設と乾き標準状態換算を混同するリスク。 | e-Gov施行規則第2条 https://laws.e-gov.go.jp/law/411M50000002067 | 条文：焼結炉On=15%、廃棄物焼却炉On=12%。原則4時間採取（規定の例外を要照合） | P：公開条文に15%・12%の区別を確認／H：測定条件の実務細則 | 第2～4号へ一律適用しない；補正前後の排出負荷例と温圧換算を再検算 | chapter-09.md、chapter-12.md、appendix.md |
| **L-006 S0** | 9.1～9.3、付録A-3 | 大気5区分の新設0.1/0.5/1/1・焼却規模別と既設1/5/10/5の数値は見かけ上合致しても特例条件未検証。 | e-Gov施行規則別表第一/附則別表第二 https://laws.e-gov.go.jp/law/411M50000002067 | 新設側・既存施設側、2002年12月1日から当分の間の附則あり | P：公開条文の表値・区分を部分照合／H：適用例外・附則の全文 | 表9-5・9-9・付録A-3を全セル、施設区分、境界2/4 t/hと突合 | chapter-09.md、appendix.md |
| **L-007 S0** | 11.1～11.3、付録A-4 | 水質19号の設備名だけを抜き出すと原料・製法・用途・工程限定を落とす恐れ。 | e-Gov施行令別表第二 https://laws.e-gov.go.jp/law/411CO0000000433 | 最新施行版・各別法令の参照版：未確定 | H：指定条件の全19号全文照合未完 | 19号×指定工程×規模/除外×上流受入条件のマトリクスを作成し第1/14/15/18/19号を先行 | chapter-11.md、appendix.md |
| **L-008 S0** | 11.3、付録A-4、1.3 | 水質第18号（下水道終末処理施設）と第19号（指定汚水等を処理する所定施設）で受入条件を誤認するリスク。 | e-Gov施行令 https://laws.e-gov.go.jp/law/411CO0000000433 | 別表第二第18・19号／適用版全文HOLD | H：既存レビューの指摘を引継ぎ | 係り受けを法文で確認し、下水道への排除と公共用水域への排出を事例で区別 | chapter-11.md、appendix.md |
| **L-009 S0** | 1.2、10.1、11.3、付録A-4 | 一般環境の水質環境基準1 pg-TEQ/Lと特定事業場排出水10 pg-TEQ/Lの混同リスク。 | e-Gov施行規則 https://laws.e-gov.go.jp/law/411M50000002067 ・環境省告示 https://www.env.go.jp/kijun/dioxin.html | 環境基準告示：平成11年環境庁告示68号・後日改正（最終改正日HOLD） | P：施行規則別表第二の参照先を確認／H：告示最新全文・適用媒体 | 基準値・単位・評価方法・対象水域・放流先・排出口を同じ表で条件付き比較 | chapter-01.md、chapter-10.md、chapter-11.md、appendix.md |
| **L-010 S0** | 12.5、付録B-2・D-4 | 法定異性体別TEQ算定の定量下限未満0処理を、環境監視やPRTRへ無条件に広げるリスク。 | e-Gov施行規則第3条 https://laws.e-gov.go.jp/law/411M50000002067 ・経産省Q&A https://www.meti.go.jp/policy/chemical_management/law/qa/manual_faq.html | 規則：令和8年7月1日施行版は改正内容要確認、METI問6-2-5等：公表改訂日未確認 | P：規則第3条のQL未満0を公開本文で確認／H：測定法例外・PRTR選択条件 | 法定計算例と環境調査例を別表・異性体別数値例で記載；媒体育別・目的別規則表を作る | chapter-12.md、appendix.md、chapter-04.md |
| **L-011 S0** | 12.5、3.3、付録D-4 | 常時監視でDL/2、汚染範囲確定でQL未満0など目的に依存。旧通知を現行法の一律ルールとして転載する危険。 | 環境省2002年通知 https://www.env.go.jp/hourei/05/000168.html | 底質環境基準の施行通知・2002年（改訂の有無はHOLD） | P：通知に常時監視・汚染範囲確定の差を確認／H：現行媒体別マニュアル | 大気・水・底質・土壌について目的ごとのND方式、参考値有無、施行版を確定 | chapter-12.md、chapter-03.md、appendix.md |
| **L-012 S0** | 4.2、12.5、付録A-6 | 法定TEF（規則別表第三）とWHO 1998/2005/2022の科学評価の版の混同リスク。 | e-Gov施行規則別表第三 https://laws.e-gov.go.jp/law/411M50000002067 ・環境省2007改正 https://www.env.go.jp/press/8458.html | 2008年4月1日TEF改正施行を環境省資料に明記／2026年国内法定係数の全行は未照合 | P：2008年改正施行日確認／H：現在版の全29異性体係数と例外 | 29異性体を独立転記して照合しWHO版との比較表に差異を明示。旧2000年通知は1998年TEFである | chapter-04.md、chapter-12.md、appendix.md |
| **L-013 S0** | 1.2、6.3、付録A-1 | 日本TDI 4 pg-TEQ/(kg日)と海外EFSA TWIを制度・単位・TEF版ごとに分離。 | e-Gov施行令第2条 https://laws.e-gov.go.jp/law/411CO0000000433 ・EFSA https://www.efsa.europa.eu/en/news/efsa-confirms-health-concern-dietary-exposure-dioxins-and-dioxin-pcbs-europe | 日本政令適用版・EFSA2026年資料の本文改訂日：未確認 | H：本文の数値は旧稿由来、両出典本文の独立全照合なし | TDI・TWI数値、WHO-TEF版、対象食品調査と評価前提を原典で突合 | chapter-01.md、chapter-06.md、appendix.md |
| **L-014 S0** | 12.1～12.6、付録D-4 | JIS K 0311:2020は出版元の表紙・目次プレビューで存在確認。全文手順・訂正票は照合未了。 | 日本規格協会（プレビュー） https://webdesk.jsa.or.jp/preview/pre_jis_k_00311_000_000_2020_j_ed10_ch.pdf | 2020年3月23日改正／2021年5月の正誤票の適用要照合／直近確認年HOLD | P：プレビュー書誌情報のみ／H：全文・正誤票 | 購入・適法閲覧した規格票と正誤票を用い採取・回収・添加位置・酸素補正の説明を校閲 | chapter-12.md、appendix.md |
| **L-015 S0** | 12.1～12.6、付録D-4 | JIS K 0312:2020は出版元プレビューで版の存在確認。最新版・正誤票・全文細目を未照合。 | 日本規格協会（プレビュー） https://webdesk.jsa.or.jp/preview/pre_jis_k_00312_000_000_2020_j_ed10_ch.pdf | 2020年版（改正年確認）／2026年10月現在の最新確認日はHOLD | P：プレビュー書誌情報のみ／H：全文 | 規格登録情報（確認/改正/廃止）と正誤票、工場排水の採水・SS・分析工程を専門校閲 | chapter-12.md、chapter-10.md、appendix.md |
| **L-016 S0** | 12.6 | JISの公開プレビューや引用先ページが存在するだけでは現行性・正誤票反映の保証にならない。 | 日本規格協会正誤票一覧 https://webdesk.jsa.or.jp/common/W10K0010/?page_id=JIS_errata&post_type=book_common | K0311 2021年5月正誤票との原稿記載は引継ぎ、一次正誤票全文未照合 | H：正誤票・確認年未照合 | JIS最新版の番号・適用日・正誤内容を全数照合して数値・手順・図を更新 | chapter-12.md |
| **T-017 S0** | 3.1～3.3、7.2、付録A-6 | 全国排出量の2024暦年対象と2026年公表日を取り違えると年度別傾向が変わる。 | 環境省 https://www.env.go.jp/press/press_03321.html | 対象2024年／発表2026年3月24日 | P：環境省報道発表で対象年と公表日確認／H：原表各値再集計 | 図3-1～3-4の脚注に対象暦年、推計法、TEF・丸め、出典版を追記 | chapter-03.md、chapter-07.md、appendix.md |
| **T-018 S0** | 3.3、7.2、付録A-6 | 2024年度環境調査資料は2026年7月15日に表・本文が差替え。初回報道発表値との混在危険。 | 環境省 https://www.env.go.jp/air/dioxin/kankyocyosakeka.html | 対象2024年度／初回2026年3月24日／改訂2026年7月15日 | P：環境省資料一覧の差替日を確認／H：訂正PDFの全セル比較 | 地点数・検体数・媒体別達成率・分母を差替後資料に再照合、旧報道発表値は採用しない | chapter-03.md、chapter-07.md |
| **T-019 S0** | 3.3、7.2、11.3 | 法施行状況2024年度資料は2026年10月9日差替え。施設数・測定値を旧版から引用する可能性。 | 環境省 https://www.env.go.jp/air/dioxin/post_88.html | 対象2024年度／初回2026年3月24日／差替2026年10月9日 | P：環境省一覧の差替告知を検索確認／H：改訂後各表数値と訂正理由 | 本書の施設数・監視値と最新版Excel/PDFの表番号・分母・注記を照合 | chapter-03.md、chapter-07.md、chapter-11.md |
| **C-020 S1** | 4～6・8・10章 | 生成機構・毒性・集じん・分離を一般化し過ぎるリスク。モデルの仮定や捕集と分解の区別の独立原著点検未済。 | 各章レビュー／一次技術文献（個別特定HOLD） | 科学文献改訂日：未確認 | H：既存レビュー指摘の引継ぎ | 特定の化合物・実験温度・触媒・媒体・装置別の根拠を査読原著へ逐次紐づけ | chapter-04.md、chapter-05.md、chapter-06.md、chapter-08.md、chapter-10.md |
| **E-021 S0** | 全44節（本文71問＋付録10問） | 五択に①～⑤と正答表示があることと、唯一解・全肢の科学的根拠が正しいことは別。 | 各章の演習／章別レビュー（教材原典の個別照合未実施） | 演習初稿2026年10月13日まで | M：選択肢・正答キーを検出／H：独立した全肢・著作権監査 | 81問の正答を解き直し、誤肢1肢ずつ根拠と適用条件・法令基準日を照合 | chapter-00.md～chapter-12.md、appendix.md |
| **N-022 S1** | 3～12章の52計算 | 計算例は既存一次PASSのみ。乾湿、濃度×流量、体積、等速吸引、O₂、回収・ND、丸めなどの前提が未評価。 | 章別レビュー／JIS・法令・物理定義（個別原典照合HOLD） | 文献・規格版：個々の例題ごとに要登録 | M：52例の番号一覧化／H：ほぼ全件の独立検算 | 全52例の入力・中間・結果と単位を別計算手順で検算、例中の実測/架空も確認 | chapter-03.md～chapter-12.md |
| **F-023 S1** | 全編図0-1～12-20、付録図A-1 | 図124件は完成図ではなく制作指示。文字図案が法令・分子構造・装置原理に忠実か要監修。 | 本文の図制作指示（一次図案図面なし） | 全図最終改訂：未着手 | M：124件＋付録図A-1指示確認／H：制作・版管理 | 図台帳を作り、出典、独自性、単位・矢印・注釈・原図との非類似性をチェック | chapter-00.md～chapter-12.md、appendix.md |
| **S-024 S1** | 9.1～9.2・出典S08 | 第9章S08『AIST等の技術資料』は個別の文献タイトル・URL・日付を特定していない（具体的な出典欠落）。 | 第9章末尾S08：個別URL未登録 | 刊行年・資料番号：未確認 | M：本文のS08に『未特定（HOLD）』と記載あり | 亜鉛回収（ウェルツ等）の工学的原理ごとに査読論文や事業者一次資料を特定・根拠行へ紐づけ | chapter-09.md |
| **W-025 S0** | 1.4、9.3、11.3、付録A-5 | 3 ng-TEQ/g、100 pg-TEQ/Lの廃棄物区分と検定方法、灰と汚泥の適用境界は未独立確認。 | 環境省 https://www.env.go.jp/recycle/waste/sp_contr/01_table.html | 基準・検定告示の現行改訂日：未確認 | H：本文の出典案を引継ぎ／原典表未照合 | 特管一般/産廃・含有物の種類・試験法・基準値を区分別に明記 | chapter-01.md、chapter-09.md、chapter-11.md、appendix.md |
| **X-026 S2** | 全書・出典・索引 | 旧Studyware項番号と書籍の項番号は独立体系。227件出現だけで原稿の内容密度や参照整合を保証できない。 | docs/research/knowledge-normalization.csv・執筆仕様v0.3 | 台帳の改訂日・執筆仕様：2026年10月13日以前（正確な更新履歴HOLD） | M：全登録IDの文字列出現確認／H：意味対応 | 知識ID毎に学習者が新肢を解ける説明・図・例題・出典が揃うか判定 | 全chapter・outline・knowledge-normalization.csv |
| **R-027 S1** | 全原稿・図・演習 | 他書・過去問との権利/表現類似性は未独立監査。 | editorial-policy.md・各章レビュー | 比較資料・権利情報の改訂日：未確認 | H：出版社・権利者の具体資料に未照合 | 著作権保護表現の非転載確認、引用部分の出典と必要許諾管理 | 全chapter・appendix.md |

### 2.1 このP0時点の原典照合による確定範囲（P）のみ

- **e-Govの改正履歴表示**：法律に2026年9月16日施行、施行規則に2026年7月1日施行の版が表示される。ただし、*その改正が本書の各法定数値・義務を変更した*ことまで立証したのではない。
- **施行規則公開本文**：第2条の酸素補正の指定（焼結炉On=15%、廃棄物焼却炉On=12%）、第3条の通常の異性体別TEQ計算における定量下限未満0の取扱い、別表第一・附則別表第二の基準帯を部分確認した。**簡易法、第45条に基づく特例、附則、条例の全ケースはHOLD**。
- **環境省の公表索引**：2024年対象の排出インベントリーは2026年3月24日公表、2024年度環境調査は2026年7月15日差替え、2024年度施行状況は2026年10月9日差替えが告知される。**訂正後の数表と本文の再計算はHOLD**。
- **JISの出版元プレビュー**：K 0311:2020／K 0312:2020の書誌的存在を確認したにとどまり、規格全文・正誤票、2026年現在の最終確認状態、法令が要求する操作を完全照合したことを意味しない。

## 3. 章節・項・目の完全列挙（機械抽出、全件M・内容HOLD）

章節に対応する項、さらにその直下の目を併記する。以下119行で44節・119項・238目の所在を追跡する。旧Studyware節番号とは別体系。

| 章節 | 項 | 目（2件／項） | 原稿ファイル | 状態 |
|---|---|---|---|---|
| 0.1 | 0.1.1 ダイオキシン類は単一物質ではない | 0.1.1.1 「ダイオキシン」という呼び名；0.1.1.2 三種類の位置づけ | `books/dioxin-guide/manuscript/chapter-00.md` | M所在／内容HOLD |
| 0.1 | 0.1.2 「危険な物質」を一括りにしない | 0.1.2.1 異性体で性質が異なる；0.1.2.2 法律・健康影響・測定のつながり | `books/dioxin-guide/manuscript/chapter-00.md` | M所在／内容HOLD |
| 0.2 | 0.2.1 TEFとTEQはなぜ必要か | 0.2.1.1 毒性等価係数（TEF）；0.2.1.2 毒性等量（TEQ）の入口 | `books/dioxin-guide/manuscript/chapter-00.md` | M所在／内容HOLD |
| 0.2 | 0.2.2 発生から人の曝露まで | 0.2.2.1 発生・排出・環境残留；0.2.2.2 食物連鎖と摂取 | `books/dioxin-guide/manuscript/chapter-00.md` | M所在／内容HOLD |
| 0.3 | 0.3.1 なぜ規制が整備されたか | 0.3.1.1 焼却問題から制度化へ；0.3.1.2 POPsと国際的対応 | `books/dioxin-guide/manuscript/chapter-00.md` | M所在／内容HOLD |
| 0.3 | 0.3.2 この本で何を学ぶか | 0.3.2.1 指標と基準の読み分け；0.3.2.2 概論から特論への学習順 | `books/dioxin-guide/manuscript/chapter-00.md` | M所在／内容HOLD |
| 1.1 | 1.1.1 法体系と法の目的 | 1.1.1.1 法律の目的・基本指針；1.1.1.2 法令の階層 | `books/dioxin-guide/manuscript/chapter-01.md` | M所在／内容HOLD |
| 1.1 | 1.1.2 国の規制と自治体の規制 | 1.1.2.1 全国一律基準と条例；1.1.2.2 施行日・経過措置の読み方 | `books/dioxin-guide/manuscript/chapter-01.md` | M所在／内容HOLD |
| 1.1 | 1.1.3 関連する政策と法制度 | 1.1.3.1 臭素系ダイオキシンの調査研究；1.1.3.2 公害防止組織との関係 | `books/dioxin-guide/manuscript/chapter-01.md` | M所在／内容HOLD |
| 1.2 | 1.2.1 ダイオキシン類の法的定義と評価単位 | 1.2.1.1 規制対象の物質群；1.2.1.2 TEQと規制値 | `books/dioxin-guide/manuscript/chapter-01.md` | M所在／内容HOLD |
| 1.2 | 1.2.2 耐容一日摂取量と環境基準 | 1.2.2.1 TDIの意味と単位；1.2.2.2 環境基準の目的と主体 | `books/dioxin-guide/manuscript/chapter-01.md` | M所在／内容HOLD |
| 1.2 | 1.2.3 媒体別環境基準の使い分け | 1.2.3.1 大気・水質・地下水・底質；1.2.3.2 土壌の環境基準と調査指標 | `books/dioxin-guide/manuscript/chapter-01.md` | M所在／内容HOLD |
| 1.3 | 1.3.1 大気と水質の特定施設 | 1.3.1.1 大気基準適用施設の考え方；1.3.1.2 水質特定施設の考え方 | `books/dioxin-guide/manuscript/chapter-01.md` | M所在／内容HOLD |
| 1.3 | 1.3.2 排出基準の適用 | 1.3.2.1 大気排出基準；1.3.2.2 水質排出基準 | `books/dioxin-guide/manuscript/chapter-01.md` | M所在／内容HOLD |
| 1.3 | 1.3.3 施設規制を誤らず判定する | 1.3.3.1 ダイ特法の指定と管理者選任；1.3.3.2 施設から排出に至る規制単位 | `books/dioxin-guide/manuscript/chapter-01.md` | M所在／内容HOLD |
| 1.4 | 1.4.1 届出・監督と事故時の対応 | 1.4.1.1 設置・変更等の届出；1.4.1.2 計画変更・改善命令等 | `books/dioxin-guide/manuscript/chapter-01.md` | M所在／内容HOLD |
| 1.4 | 1.4.2 測定・報告と公害防止組織 | 1.4.2.1 事業者の測定義務と公表；1.4.2.2 管理者が行う技術的事項 | `books/dioxin-guide/manuscript/chapter-01.md` | M所在／内容HOLD |
| 1.4 | 1.4.3 土壌・廃棄物等の関連規制 | 1.4.3.1 土壌汚染対策地域と計画；1.4.3.2 ばいじん・燃え殻と他法令 | `books/dioxin-guide/manuscript/chapter-01.md` | M所在／内容HOLD |
| 2.1 | 2.1.1 国内外の事故・事件と問題の認識 | 2.1.1.1 化学物質事故から得た知見；2.1.1.2 国内での社会的関心 | `books/dioxin-guide/manuscript/chapter-02.md` | M所在／内容HOLD |
| 2.1 | 2.1.2 日本で廃棄物焼却が注目された理由 | 2.1.2.1 焼却施設とダイオキシン類；2.1.2.2 初期のガイドラインと技術対応 | `books/dioxin-guide/manuscript/chapter-02.md` | M所在／内容HOLD |
| 2.2 | 2.2.1 国内の制度化と排出削減 | 2.2.1.1 基本指針から特別措置法へ；2.2.1.2 制度導入後の改善と残課題 | `books/dioxin-guide/manuscript/chapter-02.md` | M所在／内容HOLD |
| 2.2 | 2.2.2 国際的な取組 | 2.2.2.1 POPsの特徴とストックホルム条約；2.2.2.2 附属書CとBAT・BEP | `books/dioxin-guide/manuscript/chapter-02.md` | M所在／内容HOLD |
| 3.1 | 3.1.1 インベントリーとは何か | 3.1.1.1 排出量の単位；3.1.1.2 排出源別・媒体別の集計 | `books/dioxin-guide/manuscript/chapter-03.md` | M所在／内容HOLD |
| 3.1 | 3.1.2 排出量の推計 | 3.1.2.1 活動量と排出係数；3.1.2.2 実測値との違い | `books/dioxin-guide/manuscript/chapter-03.md` | M所在／内容HOLD |
| 3.2 | 3.2.1 主要排出源の種類 | 3.2.1.1 廃棄物焼却由来；3.2.1.2 鉄鋼・非鉄金属工程由来 | `books/dioxin-guide/manuscript/chapter-03.md` | M所在／内容HOLD |
| 3.2 | 3.2.2 排出先の違い | 3.2.2.1 化学製造・その他の発生源；3.2.2.2 大気と水への排出 | `books/dioxin-guide/manuscript/chapter-03.md` | M所在／内容HOLD |
| 3.3 | 3.3.1 排出量の経年変化 | 3.3.1.1 長期的な排出削減；3.3.1.2 構成比の変化 | `books/dioxin-guide/manuscript/chapter-03.md` | M所在／内容HOLD |
| 3.3 | 3.3.2 環境中の濃度と基準達成 | 3.3.2.1 媒体別モニタリング；3.3.2.2 基準達成率・超過地点 | `books/dioxin-guide/manuscript/chapter-03.md` | M所在／内容HOLD |
| 3.3 | 3.3.3 統計資料を読む作法 | 3.3.3.1 年度・暦年・公表年；3.3.3.2 設置基数と排出量の違い | `books/dioxin-guide/manuscript/chapter-03.md` | M所在／内容HOLD |
| 4.1 | 4.1.1 PCDDとPCDFの分子構造 | 4.1.1.1 PCDDの骨格と置換位置；4.1.1.2 PCDFの骨格と置換位置 | `books/dioxin-guide/manuscript/chapter-04.md` | M所在／内容HOLD |
| 4.1 | 4.1.2 PCBの構造とDL-PCB | 4.1.2.1 PCBの基本骨格；4.1.2.2 ダイオキシン様PCB | `books/dioxin-guide/manuscript/chapter-04.md` | M所在／内容HOLD |
| 4.2 | 4.2.1 同族体・異性体と塩素置換 | 4.2.1.1 同族体と異性体の違い；4.2.1.2 2,3,7,8位の意味 | `books/dioxin-guide/manuscript/chapter-04.md` | M所在／内容HOLD |
| 4.2 | 4.2.2 ダイオキシン様PCBの分類 | 4.2.2.1 非オルト・モノオルト；4.2.2.2 毒性等価係数の対象数 | `books/dioxin-guide/manuscript/chapter-04.md` | M所在／内容HOLD |
| 4.2 | 4.2.3 TEFとTEQの計算 | 4.2.3.1 TEFの定義と適用版；4.2.3.2 TEQの計算手順 | `books/dioxin-guide/manuscript/chapter-04.md` | M所在／内容HOLD |
| 4.3 | 4.3.1 脂溶性・水溶性と分配 | 4.3.1.1 水への溶けにくさ；4.3.1.2 分配係数の意味 | `books/dioxin-guide/manuscript/chapter-04.md` | M所在／内容HOLD |
| 4.3 | 4.3.2 蒸気圧と気粒分配 | 4.3.2.1 塩素化数と蒸気圧；4.3.2.2 気相と粒子相 | `books/dioxin-guide/manuscript/chapter-04.md` | M所在／内容HOLD |
| 4.3 | 4.3.3 残留性と分解 | 4.3.3.1 光・熱・微生物などによる変化；4.3.3.2 数値表の条件確認 | `books/dioxin-guide/manuscript/chapter-04.md` | M所在／内容HOLD |
| 4.4 | 4.4.1 環境媒体間の移動 | 4.4.1.1 大気からの沈着；4.4.1.2 土壌・水系での分配 | `books/dioxin-guide/manuscript/chapter-04.md` | M所在／内容HOLD |
| 4.4 | 4.4.2 食物網での蓄積 | 4.4.2.1 生物濃縮と生物蓄積；4.4.2.2 発生源推定の限界 | `books/dioxin-guide/manuscript/chapter-04.md` | M所在／内容HOLD |
| 5.1 | 5.1.1 非意図的生成が起こる工程 | 5.1.1.1 燃焼由来の生成；5.1.1.2 工業工程での副生 | `books/dioxin-guide/manuscript/chapter-05.md` | M所在／内容HOLD |
| 5.1 | 5.1.2 発生源を整理する | 5.1.2.1 意図的製造と副生の区別；5.1.2.2 人為起源と自然起源 | `books/dioxin-guide/manuscript/chapter-05.md` | M所在／内容HOLD |
| 5.2 | 5.2.1 前駆体経路 | 5.2.1.1 前駆体からの生成；5.2.1.2 炉内から後段までの位置づけ | `books/dioxin-guide/manuscript/chapter-05.md` | M所在／内容HOLD |
| 5.2 | 5.2.2 de novo合成 | 5.2.2.1 飛灰・未燃炭素からの生成；5.2.2.2 温度域と接触時間 | `books/dioxin-guide/manuscript/chapter-05.md` | M所在／内容HOLD |
| 5.2 | 5.2.3 両経路の比較と限界 | 5.2.3.1 前駆体経路との共通点・相違点；5.2.3.2 反応経路の併存 | `books/dioxin-guide/manuscript/chapter-05.md` | M所在／内容HOLD |
| 5.3 | 5.3.1 生成に影響する条件 | 5.3.1.1 温度・滞留・冷却履歴；5.3.1.2 未燃炭素・塩素・金属触媒 | `books/dioxin-guide/manuscript/chapter-05.md` | M所在／内容HOLD |
| 5.3 | 5.3.2 排ガス・灰・排水への移行 | 5.3.2.1 気相・粒子相と飛灰；5.3.2.2 湿式処理排水への移行 | `books/dioxin-guide/manuscript/chapter-05.md` | M所在／内容HOLD |
| 5.3 | 5.3.3 発生抑制と除去のつながり | 5.3.3.1 完全燃焼だけでは十分でない理由；5.3.3.2 急冷・集じん・吸着への接続 | `books/dioxin-guide/manuscript/chapter-05.md` | M所在／内容HOLD |
| 6.1 | 6.1.1 毒性作用の基礎 | 6.1.1.1 毒性を代表する物質；6.1.1.2 Ah受容体による作用 | `books/dioxin-guide/manuscript/chapter-06.md` | M所在／内容HOLD |
| 6.1 | 6.1.2 毒性の比較と評価 | 6.1.2.1 TEFの生物学的前提；6.1.2.2 TEF・TEQの限界 | `books/dioxin-guide/manuscript/chapter-06.md` | M所在／内容HOLD |
| 6.2 | 6.2.1 人の健康影響 | 6.2.1.1 急性・高濃度曝露時の所見；6.2.1.2 慢性・発達・生殖・免疫影響 | `books/dioxin-guide/manuscript/chapter-06.md` | M所在／内容HOLD |
| 6.2 | 6.2.2 発がん性と生態影響 | 6.2.2.1 発がん性の評価；6.2.2.2 野生生物の蓄積・影響 | `books/dioxin-guide/manuscript/chapter-06.md` | M所在／内容HOLD |
| 6.3 | 6.3.1 人の曝露と体内動態 | 6.3.1.1 食品由来の曝露；6.3.1.2 吸収・蓄積・排泄 | `books/dioxin-guide/manuscript/chapter-06.md` | M所在／内容HOLD |
| 6.3 | 6.3.2 TDIとリスク評価 | 6.3.2.1 耐容一日摂取量の理解；6.3.2.2 ハザードとリスクの区別 | `books/dioxin-guide/manuscript/chapter-06.md` | M所在／内容HOLD |
| 6.3 | 6.3.3 不確かさの扱い | 6.3.3.1 摂取量推計の前提；6.3.3.2 結果の解釈 | `books/dioxin-guide/manuscript/chapter-06.md` | M所在／内容HOLD |
| 7.1 | 7.1.1 国の削減計画と実施状況 | 7.1.1.1 目標と基本指針；7.1.1.2 分野別の防止対策 | `books/dioxin-guide/manuscript/chapter-07.md` | M所在／内容HOLD |
| 7.1 | 7.1.2 政策効果の評価 | 7.1.2.1 インベントリーによる追跡；7.1.2.2 実施状況・改善の見方 | `books/dioxin-guide/manuscript/chapter-07.md` | M所在／内容HOLD |
| 7.2 | 7.2.1 地方公共団体の規制運用 | 7.2.1.1 指導・立入検査・命令；7.2.1.2 条例と地域対策 | `books/dioxin-guide/manuscript/chapter-07.md` | M所在／内容HOLD |
| 7.2 | 7.2.2 監視と情報公開 | 7.2.2.1 媒体別の環境監視；7.2.2.2 汚染発見後の対応 | `books/dioxin-guide/manuscript/chapter-07.md` | M所在／内容HOLD |
| 8.1 | 8.1.1 燃焼工程とダイオキシン類 | 8.1.1.1 主な炉形式；8.1.1.2 発生機会の整理 | `books/dioxin-guide/manuscript/chapter-08.md` | M所在／内容HOLD |
| 8.1 | 8.1.2 安定燃焼の基本 | 8.1.2.1 温度・滞留・混合；8.1.2.2 空気比・酸素・負荷変動 | `books/dioxin-guide/manuscript/chapter-08.md` | M所在／内容HOLD |
| 8.1 | 8.1.3 連続監視と燃焼不良 | 8.1.3.1 CO等の運転指標；8.1.3.2 運転改善の対応 | `books/dioxin-guide/manuscript/chapter-08.md` | M所在／内容HOLD |
| 8.2 | 8.2.1 排ガス冷却が必要な理由 | 8.2.1.1 冷却域の再生成；8.2.1.2 滞留時間と温度履歴 | `books/dioxin-guide/manuscript/chapter-08.md` | M所在／内容HOLD |
| 8.2 | 8.2.2 再生成を抑える運転 | 8.2.2.1 急冷の仕組み；8.2.2.2 集じん温度との関係 | `books/dioxin-guide/manuscript/chapter-08.md` | M所在／内容HOLD |
| 8.2 | 8.2.3 他技術との連携 | 8.2.3.1 再生成抑制と粒子捕集；8.2.3.2 設備と運転の評価 | `books/dioxin-guide/manuscript/chapter-08.md` | M所在／内容HOLD |
| 8.3 | 8.3.1 集じんの原理を比較する | 8.3.1.1 捕集機構の分類；8.3.1.2 部分捕集効率と粒径 | `books/dioxin-guide/manuscript/chapter-08.md` | M所在／内容HOLD |
| 8.3 | 8.3.2 バグフィルター | 8.3.2.1 ろ布とダスト層；8.3.2.2 ダイオキシン類の除去 | `books/dioxin-guide/manuscript/chapter-08.md` | M所在／内容HOLD |
| 8.3 | 8.3.3 電気集じん装置 | 8.3.3.1 帯電と集じん；8.3.3.2 比抵抗・逆電離 | `books/dioxin-guide/manuscript/chapter-08.md` | M所在／内容HOLD |
| 8.3 | 8.3.4 湿式・遠心等の集じん | 8.3.4.1 湿式洗浄；8.3.4.2 サイクロン等との比較 | `books/dioxin-guide/manuscript/chapter-08.md` | M所在／内容HOLD |
| 8.4 | 8.4.1 活性炭による吸着 | 8.4.1.1 吸着の基本；8.4.1.2 粉末吹込みと固定床 | `books/dioxin-guide/manuscript/chapter-08.md` | M所在／内容HOLD |
| 8.4 | 8.4.2 吸着の運転条件 | 8.4.2.1 接触時間と破過；8.4.2.2 安全・運転管理 | `books/dioxin-guide/manuscript/chapter-08.md` | M所在／内容HOLD |
| 8.4 | 8.4.3 触媒による分解 | 8.4.3.1 触媒酸化・分解の原理；8.4.3.2 SVと分解率 | `books/dioxin-guide/manuscript/chapter-08.md` | M所在／内容HOLD |
| 8.4 | 8.4.4 技術選定の比較 | 8.4.4.1 吸着と触媒の長所短所；8.4.4.2 集じんとの組合せ | `books/dioxin-guide/manuscript/chapter-08.md` | M所在／内容HOLD |
| 8.5 | 8.5.1 灰・残渣への分配と処理 | 8.5.1.1 主灰・飛灰への移行；8.5.1.2 飛灰処理と分解技術 | `books/dioxin-guide/manuscript/chapter-08.md` | M所在／内容HOLD |
| 8.5 | 8.5.2 運転・保全の管理 | 8.5.2.1 連続監視と定期測定；8.5.2.2 異常時・起動停止時 | `books/dioxin-guide/manuscript/chapter-08.md` | M所在／内容HOLD |
| 9.1 | 9.1.1 銑鉄製造の焼結炉 | 9.1.1.1 焼結工程の流れ；9.1.1.2 生成要因と対策 | `books/dioxin-guide/manuscript/chapter-09.md` | M所在／内容HOLD |
| 9.1 | 9.1.2 製鋼用電気炉 | 9.1.2.1 電炉操業と排ガス；9.1.2.2 発生抑制・捕集 | `books/dioxin-guide/manuscript/chapter-09.md` | M所在／内容HOLD |
| 9.1 | 9.1.3 電炉ダストからの亜鉛回収 | 9.1.3.1 亜鉛回収工程；9.1.3.2 対象施設と発生特性 | `books/dioxin-guide/manuscript/chapter-09.md` | M所在／内容HOLD |
| 9.2 | 9.2.1 アルミニウム合金製造 | 9.2.1.1 アルミくずからの製造工程；9.2.1.2 ダイオキシン類生成と対策 | `books/dioxin-guide/manuscript/chapter-09.md` | M所在／内容HOLD |
| 9.2 | 9.2.2 廃棄物焼却炉 | 9.2.2.1 炉形式・燃焼工程；9.2.2.2 排ガス処理と灰管理 | `books/dioxin-guide/manuscript/chapter-09.md` | M所在／内容HOLD |
| 9.2 | 9.2.3 施設相互の比較 | 9.2.3.1 共通する発生機構；9.2.3.2 施設固有の留意点 | `books/dioxin-guide/manuscript/chapter-09.md` | M所在／内容HOLD |
| 9.3 | 9.3.1 大気特定施設の指定 | 9.3.1.1 別表第一5類型の一覧；9.3.1.2 規模要件と判定順 | `books/dioxin-guide/manuscript/chapter-09.md` | M所在／内容HOLD |
| 9.3 | 9.3.2 焼却施設の適用判断 | 9.3.2.1 複数炉の能力合算；9.3.2.2 境界事例での判定 | `books/dioxin-guide/manuscript/chapter-09.md` | M所在／内容HOLD |
| 9.3 | 9.3.3 排出基準の読み方 | 9.3.3.1 新設・既設と適用時点；9.3.3.2 施設別濃度基準と酸素補正 | `books/dioxin-guide/manuscript/chapter-09.md` | M所在／内容HOLD |
| 10.1 | 10.1.1 ダイオキシン類を含む排水の発生 | 10.1.1.1 湿式排ガス処理排水；10.1.1.2 化学製造工程排水 | `books/dioxin-guide/manuscript/chapter-10.md` | M所在／内容HOLD |
| 10.1 | 10.1.2 水中での存在形態 | 10.1.2.1 懸濁態・粒子吸着態；10.1.2.2 溶存態・微細粒子態 | `books/dioxin-guide/manuscript/chapter-10.md` | M所在／内容HOLD |
| 10.2 | 10.2.1 凝集沈殿・固液分離 | 10.2.1.1 凝集剤とフロック形成；10.2.1.2 主要な管理条件 | `books/dioxin-guide/manuscript/chapter-10.md` | M所在／内容HOLD |
| 10.2 | 10.2.2 ろ過・膜分離 | 10.2.2.1 砂ろ過・精密ろ過等の原理；10.2.2.2 汚濁負荷と処理効果 | `books/dioxin-guide/manuscript/chapter-10.md` | M所在／内容HOLD |
| 10.2 | 10.2.3 吸着等による仕上げ | 10.2.3.1 活性炭吸着；10.2.3.2 処理方式の組合せ | `books/dioxin-guide/manuscript/chapter-10.md` | M所在／内容HOLD |
| 10.3 | 10.3.1 汚泥・残渣への移行 | 10.3.1.1 汚泥中への移行；10.3.1.2 汚泥の処理・処分 | `books/dioxin-guide/manuscript/chapter-10.md` | M所在／内容HOLD |
| 10.3 | 10.3.2 放流水と運転管理 | 10.3.2.1 変動負荷・採水の代表性；10.3.2.2 異常時の原因調査 | `books/dioxin-guide/manuscript/chapter-10.md` | M所在／内容HOLD |
| 11.1 | 11.1.1 パルプ・紙関連の対象施設 | 11.1.1.1 塩素系漂白工程；11.1.1.2 工程変更と副生の抑制 | `books/dioxin-guide/manuscript/chapter-11.md` | M所在／内容HOLD |
| 11.1 | 11.1.2 塩素系化学品の製造・洗浄 | 11.1.2.1 塩化ビニル・クロロベンゼン等；11.1.2.2 アセチレン・塩素化中間体等 | `books/dioxin-guide/manuscript/chapter-11.md` | M所在／内容HOLD |
| 11.1 | 11.1.3 その他の指定化学製造施設 | 11.1.3.1 施行令別表第二第2～11号；11.1.3.2 施設名と工程の関連づけ | `books/dioxin-guide/manuscript/chapter-11.md` | M所在／内容HOLD |
| 11.2 | 11.2.1 金属製造・回収の対象施設 | 11.2.1.1 アルミ製造・電炉ダスト亜鉛回収；11.2.1.2 使用済み触媒からの金属回収 | `books/dioxin-guide/manuscript/chapter-11.md` | M所在／内容HOLD |
| 11.2 | 11.2.2 廃棄物焼却関連施設 | 11.2.2.1 湿式排ガス洗浄施設；11.2.2.2 灰貯留・排水経路 | `books/dioxin-guide/manuscript/chapter-11.md` | M所在／内容HOLD |
| 11.2 | 11.2.3 PCB・フロン関連施設 | 11.2.3.1 PCB分解・洗浄・分離；11.2.3.2 特定フロン破壊施設 | `books/dioxin-guide/manuscript/chapter-11.md` | M所在／内容HOLD |
| 11.3 | 11.3.1 下水道・二次処理に係る指定 | 11.3.1.1 第18号の下水道終末処理施設；11.3.1.2 第19号の排水処理施設 | `books/dioxin-guide/manuscript/chapter-11.md` | M所在／内容HOLD |
| 11.3 | 11.3.2 水質対象施設と排出水の違い | 11.3.2.1 施設と事業場の区別；11.3.2.2 排出先と基準の適用 | `books/dioxin-guide/manuscript/chapter-11.md` | M所在／内容HOLD |
| 11.3 | 11.3.3 水質特定施設の判定演習 | 11.3.3.1 別表第二19類型の確認；11.3.3.2 排出基準・届出・測定の総合判断 | `books/dioxin-guide/manuscript/chapter-11.md` | M所在／内容HOLD |
| 12.1 | 12.1.1 測定の対象と全工程 | 12.1.1.1 排出ガス・排水・環境媒体；12.1.1.2 採取からTEQまでの流れ | `books/dioxin-guide/manuscript/chapter-12.md` | M所在／内容HOLD |
| 12.1 | 12.1.2 測定値を読むための基礎 | 12.1.2.1 異性体別定量の必要性；12.1.2.2 単位・採取量・標準状態 | `books/dioxin-guide/manuscript/chapter-12.md` | M所在／内容HOLD |
| 12.2 | 12.2.1 排ガス試料の代表性 | 12.2.1.1 採取位置・採取点；12.2.1.2 等速吸引の原理 | `books/dioxin-guide/manuscript/chapter-12.md` | M所在／内容HOLD |
| 12.2 | 12.2.2 排ガス捕集装置 | 12.2.2.1 ろ紙・吸収液・吸着材；12.2.2.2 採取ガス量・漏れ確認 | `books/dioxin-guide/manuscript/chapter-12.md` | M所在／内容HOLD |
| 12.2 | 12.2.3 水・土壌・底質の採取 | 12.2.3.1 水試料の採取と保存；12.2.3.2 土壌・底質の試料調製 | `books/dioxin-guide/manuscript/chapter-12.md` | M所在／内容HOLD |
| 12.2 | 12.2.4 計算・判断との接続 | 12.2.4.1 乾き／湿りガスと標準状態；12.2.4.2 採取誤差の影響 | `books/dioxin-guide/manuscript/chapter-12.md` | M所在／内容HOLD |
| 12.3 | 12.3.1 試料からの抽出 | 12.3.1.1 前処理の目的と順序；12.3.1.2 回収損失の防止 | `books/dioxin-guide/manuscript/chapter-12.md` | M所在／内容HOLD |
| 12.3 | 12.3.2 クリーンアップの原理 | 12.3.2.1 妨害成分の除去；12.3.2.2 画分分取・濃縮 | `books/dioxin-guide/manuscript/chapter-12.md` | M所在／内容HOLD |
| 12.3 | 12.3.3 内標準物質の添加 | 12.3.3.1 サンプリング／クリーンアップスパイク；12.3.3.2 シリンジスパイク等の役割 | `books/dioxin-guide/manuscript/chapter-12.md` | M所在／内容HOLD |
| 12.4 | 12.4.1 ガスクロマトグラフィー | 12.4.1.1 分離カラムと保持時間；12.4.1.2 異性体の識別 | `books/dioxin-guide/manuscript/chapter-12.md` | M所在／内容HOLD |
| 12.4 | 12.4.2 高分解能質量分析 | 12.4.2.1 質量電荷比と選択性；12.4.2.2 ロックマス・同位体比 | `books/dioxin-guide/manuscript/chapter-12.md` | M所在／内容HOLD |
| 12.4 | 12.4.3 同位体希釈定量 | 12.4.3.1 標識内標準と応答比；12.4.3.2 相対感度係数・検量線 | `books/dioxin-guide/manuscript/chapter-12.md` | M所在／内容HOLD |
| 12.4 | 12.4.4 分析法の読み方 | 12.4.4.1 HRGC/HRMSと他方式；12.4.4.2 誤同定・妨害・回収率 | `books/dioxin-guide/manuscript/chapter-12.md` | M所在／内容HOLD |
| 12.5 | 12.5.1 濃度とTEQの計算 | 12.5.1.1 試料中量から媒体濃度；12.5.1.2 TEFを用いた総TEQ | `books/dioxin-guide/manuscript/chapter-12.md` | M所在／内容HOLD |
| 12.5 | 12.5.2 排ガス濃度の補正 | 12.5.2.1 標準状態・乾きガス換算；12.5.2.2 酸素濃度補正 | `books/dioxin-guide/manuscript/chapter-12.md` | M所在／内容HOLD |
| 12.5 | 12.5.3 検出下限・定量下限 | 12.5.3.1 装置の下限と試料の下限；12.5.3.2 検出下限と定量下限の区別 | `books/dioxin-guide/manuscript/chapter-12.md` | M所在／内容HOLD |
| 12.5 | 12.5.4 未検出値と判定 | 12.5.4.1 NDの取扱い；12.5.4.2 計算結果の検算 | `books/dioxin-guide/manuscript/chapter-12.md` | M所在／内容HOLD |
| 12.6 | 12.6.1 精度管理の基本 | 12.6.1.1 空試験・操作ブランク；12.6.1.2 添加回収率・再現性 | `books/dioxin-guide/manuscript/chapter-12.md` | M所在／内容HOLD |
| 12.6 | 12.6.2 公定法と簡易測定法 | 12.6.2.1 目的と適用範囲；12.6.2.2 分析結果の信頼性 | `books/dioxin-guide/manuscript/chapter-12.md` | M所在／内容HOLD |
| 12.6 | 12.6.3 JISとマニュアルの版管理 | 12.6.3.1 排ガス・排水のJIS；12.6.3.2 環境媒体別マニュアル | `books/dioxin-guide/manuscript/chapter-12.md` | M所在／内容HOLD |

## 4. 知識ID 227件の全件所在（文字列照合M・説明充足HOLD）

CSVの別名／重複統合関係は原台帳の`role`と`canonical_knowledge_id`を保持。書籍側の章へ厳密な意味的対応を与えたものではない。下表の「検出章」は本文全章を検索して得られた文字列出現先（複数なら列記）。

| 登録ID | 正規ID | 役割 | 原台帳論点 | 本文検出章 | 判定 |
|---|---|---|---|---|---|
| DX-I-001 | DX-I-001 | distinct-cross-reference | 物質群と単一物質 | 0 | M出現・H内容 |
| DX-I-002 | DX-I-002 | distinct-cross-reference | PCDDとPCDFの構造差 | 0 | M出現・H内容 |
| DX-I-003 | DX-I-003 | distinct-cross-reference | ダイオキシン様PCB | 0 | M出現・H内容 |
| DX-I-004 | DX-I-004 | canonical | 毒性の異なる異性体 | 0 | M出現・H内容 |
| DX-I-005 | DX-I-005 | distinct-cross-reference | TEFとTEQという共通指標 | 0 | M出現・H内容 |
| DX-I-006 | DX-I-006 | canonical | 非意図的生成と排出 | 0 | M出現・H内容 |
| DX-I-007 | DX-I-007 | canonical | 環境残留と食物連鎖 | 0 | M出現・H内容 |
| DX-I-008 | DX-I-008 | canonical | 人の曝露経路 | 0 | M出現・H内容 |
| DX-I-009 | DX-I-009 | canonical | 日本の焼却問題と制度化 | 0 | M出現・H内容 |
| DX-I-010 | DX-I-010 | canonical | ストックホルム条約と国際協調 | 0 | M出現・H内容 |
| DX-I-011 | DX-I-011 | canonical | TDIと環境基準と排出基準の役割 | 0 | M出現・H内容 |
| DX-I-012 | DX-I-012 | canonical | 概論と特論の接続 | 0 | M出現・H内容 |
| DX-G01-001 | DX-G01-001 | canonical | 基本指針と特措法 | 1 | M出現・H内容 |
| DX-G01-002 | DX-G01-002 | canonical | 法律・政令・省令・告示 | 1 | M出現・H内容 |
| DX-G01-003 | DX-G01-003 | canonical | 地方条例と上乗せ | 1 | M出現・H内容 |
| DX-G01-004 | DX-G01-004 | canonical | 法のダイオキシン類の定義 | 1 | M出現・H内容 |
| DX-G01-005 | DX-G01-005 | distinct-cross-reference | TDIの意味と値 | 1 | M出現・H内容 |
| DX-G01-006 | DX-G01-006 | canonical | TEQの法規への利用 | 1 | M出現・H内容 |
| DX-G01-007 | DX-G01-007 | canonical | 大気環境基準 | 1 | M出現・H内容 |
| DX-G01-008 | DX-G01-008 | canonical | 水質環境基準と地下水 | 1 | M出現・H内容 |
| DX-G01-009 | DX-G01-009 | canonical | 底質環境基準 | 1 | M出現・H内容 |
| DX-G01-010 | DX-G01-010 | canonical | 土壌環境基準と調査指標 | 1 | M出現・H内容 |
| DX-G01-011 | DX-G01-011 | canonical | 大気基準適用施設 | 1 | M出現・H内容 |
| DX-G01-012 | DX-G01-012 | canonical | 水質基準対象施設 | 1 | M出現・H内容 |
| DX-G01-013 | DX-G01-013 | canonical | 大気排出基準 | 1 | M出現・H内容 |
| DX-G01-014 | DX-G01-014 | distinct-cross-reference | 水質排出基準 | 1 | M出現・H内容 |
| DX-G01-015 | DX-G01-015 | canonical | 設置・変更等の届出 | 1 | M出現・H内容 |
| DX-G01-016 | DX-G01-016 | canonical | 計画変更命令等 | 1 | M出現・H内容 |
| DX-G01-017 | DX-G01-017 | canonical | 事業者測定・報告公表 | 1 | M出現・H内容 |
| DX-G01-018 | DX-G01-018 | canonical | 行政の報告徴収と立入検査 | 1 | M出現・H内容 |
| DX-G01-019 | DX-G01-019 | distinct-cross-reference | 土壌汚染対策地域・計画 | 1 | M出現・H内容 |
| DX-G01-020 | DX-G01-020 | canonical | ばいじん・燃え殻規制 | 1 | M出現・H内容 |
| DX-G01-021 | DX-G01-021 | canonical | 廃棄物処理法との関係 | 1 | M出現・H内容 |
| DX-G02-001 | DX-G02-001 | canonical | 化学物質事故と知見の蓄積 | 2 | M出現・H内容 |
| DX-G02-002 | DX-G02-002 | canonical | 日本の社会的関心 | 2 | M出現・H内容 |
| DX-G02-003 | DX-G02-003 | canonical | 国内の廃棄物焼却と発生源 | 2 | M出現・H内容 |
| DX-G02-004 | DX-G02-004 | canonical | 旧ガイドラインからの対策 | 2 | M出現・H内容 |
| DX-G02-005 | DX-G02-005 | distinct-cross-reference | 基本指針と立法の経緯 | 2 | M出現・H内容 |
| DX-G02-006 | DX-G02-006 | canonical | 制度導入後の排出削減 | 2 | M出現・H内容 |
| DX-G02-007 | DX-G02-007 | canonical | POPsの性質 | 2 | M出現・H内容 |
| DX-G02-008 | DX-G02-008 | canonical | 附属書Cの非意図的生成 | 2 | M出現・H内容 |
| DX-G02-009 | DX-G02-009 | canonical | BATとBEP | 2 | M出現・H内容 |
| DX-G03-001 | DX-G03-001 | canonical | 排出量の単位g-TEQ | 3 | M出現・H内容 |
| DX-G03-002 | DX-G03-002 | distinct-cross-reference | 排出インベントリーの構成 | 3 | M出現・H内容 |
| DX-G03-003 | DX-G03-003 | canonical | インベントリーと測定値の違い | 3 | M出現・H内容 |
| DX-G03-004 | DX-G03-004 | canonical | 廃棄物焼却 | 3 | M出現・H内容 |
| DX-G03-005 | DX-G03-005 | canonical | 製鉄・非鉄金属 | 3 | M出現・H内容 |
| DX-G03-006 | DX-G03-006 | canonical | その他の発生源 | 3 | M出現・H内容 |
| DX-G03-007 | DX-G03-007 | canonical | 長期的な排出量削減 | 3 | M出現・H内容 |
| DX-G03-008 | DX-G03-008 | canonical | 排出源構成の変化 | 3 | M出現・H内容 |
| DX-G03-009 | DX-G03-009 | canonical | 媒体別の環境モニタリング | 3 | M出現・H内容 |
| DX-G03-010 | DX-G03-010 | canonical | 環境基準超過の読み方 | 3 | M出現・H内容 |
| DX-G03-011 | DX-G03-011 | canonical | 年度と暦年の違い | 3 | M出現・H内容 |
| DX-G03-012 | DX-G03-012 | canonical | 公表日と差替日 | 3 | M出現・H内容 |
| DX-G03-013 | DX-G03-013 | canonical | 最新統計の更新ルール | 3 | M出現・H内容 |
| DX-G04-001 | DX-G04-001 | canonical | PCDDの基本骨格 | 4 | M出現・H内容 |
| DX-G04-002 | DX-G04-002 | canonical | PCDFの基本骨格 | 4 | M出現・H内容 |
| DX-G04-003 | DX-G04-003 | canonical | DL-PCBの構造 | 4 | M出現・H内容 |
| DX-G04-004 | DX-G04-004 | canonical | 異性体・同族体の違い | 4 | M出現・H内容 |
| DX-G04-005 | DX-G04-005 | canonical | 2-3-7-8位置の重要性 | 4 | M出現・H内容 |
| DX-G04-006 | DX-G04-006 | canonical | 非オルト・モノオルトPCB | 4 | M出現・H内容 |
| DX-G04-007 | DX-G04-007 | canonical | TEFの意味 | 4 | M出現・H内容 |
| DX-G04-008 | DX-G04-008 | distinct-cross-reference | TEQ算定の演習 | 4 | M出現・H内容 |
| DX-G04-009 | DX-G04-009 | canonical | WHO-TEFの版と行政適用版 | 4 | M出現・H内容 |
| DX-G04-010 | DX-G04-010 | canonical | 脂溶性と水への溶けにくさ | 4 | M出現・H内容 |
| DX-G04-011 | DX-G04-011 | canonical | 蒸気圧と粒子吸着 | 4 | M出現・H内容 |
| DX-G04-012 | DX-G04-012 | canonical | 残留性・分解性 | 4 | M出現・H内容 |
| DX-G04-013 | DX-G04-013 | canonical | 大気と土壌・水域間の移動 | 4 | M出現・H内容 |
| DX-G04-014 | DX-G04-014 | canonical | 生物蓄積・生物濃縮 | 4 | M出現・H内容 |
| DX-G04-015 | DX-G04-015 | canonical | 異性体組成と発生源の示唆 | 4 | M出現・H内容 |
| DX-G05-001 | DX-G05-001 | canonical | 燃焼過程での非意図的生成 | 5 | M出現・H内容 |
| DX-G05-002 | DX-G05-002 | canonical | 工業プロセスと不純物 | 5 | M出現・H内容 |
| DX-G05-003 | DX-G05-003 | canonical | 自然由来との区別 | 5 | M出現・H内容 |
| DX-G05-004 | DX-G05-004 | canonical | 前駆体経由の生成 | 5 | M出現・H内容 |
| DX-G05-005 | DX-G05-005 | canonical | de novo合成の概要 | 5 | M出現・H内容 |
| DX-G05-006 | DX-G05-006 | canonical | 冷却温度域と滞留 | 5 | M出現・H内容 |
| DX-G05-007 | DX-G05-007 | canonical | 飛灰上の未燃炭素 | 5 | M出現・H内容 |
| DX-G05-008 | DX-G05-008 | distinct-cross-reference | 塩素と金属触媒 | 5 | M出現・H内容 |
| DX-G05-009 | DX-G05-009 | canonical | 燃焼状態と未燃物 | 5 | M出現・H内容 |
| DX-G05-010 | DX-G05-010 | canonical | 排ガス経由 | 5 | M出現・H内容 |
| DX-G05-011 | DX-G05-011 | canonical | 飛灰・焼却灰経由 | 5 | M出現・H内容 |
| DX-G05-012 | DX-G05-012 | canonical | 湿式処理排水への移行 | 5 | M出現・H内容 |
| DX-G05-013 | DX-G05-013 | canonical | 十分な燃焼と再生成の違い | 5 | M出現・H内容 |
| DX-G05-014 | DX-G05-014 | distinct-cross-reference | 冷却・集じん条件と抑制策 | 5 | M出現・H内容 |
| DX-G06-001 | DX-G06-001 | canonical | 毒性の種類とTCDD | 6 | M出現・H内容 |
| DX-G06-002 | DX-G06-002 | canonical | Ah受容体を介した作用 | 6 | M出現・H内容 |
| DX-G06-003 | DX-G06-003 | canonical | 毒性等価の前提と限界 | 6 | M出現・H内容 |
| DX-G06-004 | DX-G06-004 | canonical | 高濃度曝露と皮膚症状 | 6 | M出現・H内容 |
| DX-G06-005 | DX-G06-005 | canonical | 生殖・発達・免疫等への影響 | 6 | M出現・H内容 |
| DX-G06-006 | DX-G06-006 | canonical | 発がん性の評価 | 6 | M出現・H内容 |
| DX-G06-007 | DX-G06-007 | canonical | 食品由来の主な曝露 | 6 | M出現・H内容 |
| DX-G06-008 | DX-G06-008 | canonical | 体内での蓄積と半減期 | 6 | M出現・H内容 |
| DX-G06-009 | DX-G06-009 | canonical | 摂取量と体内負荷 | 6 | M出現・H内容 |
| DX-G06-010 | DX-G06-010 | canonical | TDIと慢性曝露 | 6 | M出現・H内容 |
| DX-G06-011 | DX-G06-011 | canonical | 曝露評価とリスク管理 | 6 | M出現・H内容 |
| DX-G06-012 | DX-G06-012 | canonical | 定量の不確かさ | 6 | M出現・H内容 |
| DX-G06-013 | DX-G06-013 | canonical | 野生生物への蓄積 | 6 | M出現・H内容 |
| DX-G06-014 | DX-G06-014 | canonical | 生態毒性の見方 | 6 | M出現・H内容 |
| DX-G07-001 | DX-G07-001 | canonical | 国の削減計画 | 7 | M出現・H内容 |
| DX-G07-002 | DX-G07-002 | canonical | 排出インベントリーの作成 | 7 | M出現・H内容 |
| DX-G07-003 | DX-G07-003 | canonical | 対策の進捗評価 | 7 | M出現・H内容 |
| DX-G07-004 | DX-G07-004 | canonical | 自治体の立入検査 | 7 | M出現・H内容 |
| DX-G07-005 | DX-G07-005 | canonical | 施設指導と命令 | 7 | M出現・H内容 |
| DX-G07-006 | DX-G07-006 | canonical | 上乗せ条例 | 7 | M出現・H内容 |
| DX-G07-007 | DX-G07-007 | canonical | 大気・水・土壌の監視 | 7 | M出現・H内容 |
| DX-G07-008 | DX-G07-008 | canonical | 測定結果公表 | 7 | M出現・H内容 |
| DX-G07-009 | DX-G07-009 | canonical | 施行状況の集計 | 7 | M出現・H内容 |
| DX-G07-010 | DX-G07-010 | canonical | 土壌対策地域 | 7 | M出現・H内容 |
| DX-G07-011 | DX-G07-011 | canonical | 底質等への対策 | 7 | M出現・H内容 |
| DX-G07-012 | DX-G07-012 | canonical | 周辺住民への説明 | 7 | M出現・H内容 |
| DX-A01-001 | DX-A01-001 | canonical | 燃焼温度と安定化 | 8 | M出現・H内容 |
| DX-A01-002 | DX-A01-002 | canonical | 混合・空気比・滞留 | 8 | M出現・H内容 |
| DX-A01-003 | DX-A01-003 | canonical | COと燃焼管理の関係 | 8 | M出現・H内容 |
| DX-A01-004 | DX-A01-004 | canonical | 排ガス急冷 | 8 | M出現・H内容 |
| DX-A01-005 | DX-A01-005 | canonical | 集じん温度とde novo反応 | 8 | M出現・H内容 |
| DX-A01-006 | DX-A01-006 | canonical | バグフィルターと粒子除去 | 8 | M出現・H内容 |
| DX-A01-007 | DX-A01-007 | canonical | 活性炭吸着 | 8 | M出現・H内容 |
| DX-A01-008 | DX-A01-008 | canonical | 触媒分解 | 8 | M出現・H内容 |
| DX-A01-009 | DX-A01-009 | canonical | 湿式洗浄の特性 | 8 | M出現・H内容 |
| DX-A01-010 | DX-A01-010 | canonical | 焼却灰・飛灰への分配 | 8 | M出現・H内容 |
| DX-A01-011 | DX-A01-011 | canonical | 飛灰の安定化・分解技術 | 8 | M出現・H内容 |
| DX-A01-012 | DX-A01-012 | canonical | 連続的な燃焼監視 | 8 | M出現・H内容 |
| DX-A01-013 | DX-A01-013 | canonical | 定期測定と原因調査 | 8 | M出現・H内容 |
| DX-A01-014 | DX-A01-014 | canonical | 起動停止や異常時対応 | 8 | M出現・H内容 |
| DX-A02-001 | DX-A02-014 | alias-preserved | 焼結炉 | 9 | M出現・H内容 |
| DX-A02-002 | DX-A02-015 | alias-preserved | 製鋼用電気炉 | 9 | M出現・H内容 |
| DX-A02-003 | DX-A02-003 | distinct-cross-reference | 非鉄金属系炉 | 9 | M出現・H内容 |
| DX-A02-004 | DX-A02-018 | alias-preserved | 廃棄物焼却炉 | 9 | M出現・H内容 |
| DX-A02-005 | DX-A02-005 | distinct-cross-reference | 焼却炉の火床面積と焼却能力 | 9 | M出現・H内容 |
| DX-A02-006 | DX-A02-006 | canonical | 複数炉の合算 | 9 | M出現・H内容 |
| DX-A02-007 | DX-A02-007 | canonical | 工程別規模要件 | 9 | M出現・H内容 |
| DX-A02-008 | DX-A02-008 | distinct-cross-reference | 新設施設と既設施設 | 9 | M出現・H内容 |
| DX-A02-009 | DX-A02-009 | distinct-cross-reference | 規模別排出基準 | 9 | M出現・H内容 |
| DX-A02-010 | DX-A02-010 | canonical | 条件換算とTEQ単位 | 9 | M出現・H内容 |
| DX-A02-011 | DX-A02-011 | canonical | 設置届出と対象判定 | 9 | M出現・H内容 |
| DX-A02-012 | DX-A02-012 | canonical | 排出ガス測定点・排出口 | 9 | M出現・H内容 |
| DX-A02-013 | DX-A02-013 | canonical | 関連する一般廃棄物焼却の規制 | 9 | M出現・H内容 |
| DX-A03-001 | DX-A03-001 | canonical | 湿式排ガス処理排水 | 10 | M出現・H内容 |
| DX-A03-002 | DX-A03-002 | canonical | 化学製造工程排水 | 10 | M出現・H内容 |
| DX-A03-003 | DX-A03-003 | canonical | 粒子・有機物への吸着 | 10 | M出現・H内容 |
| DX-A03-004 | DX-A03-004 | canonical | 沈殿・凝集 | 10 | M出現・H内容 |
| DX-A03-005 | DX-A03-005 | canonical | ろ過・膜分離 | 10 | M出現・H内容 |
| DX-A03-006 | DX-A03-006 | canonical | 吸着・活性炭 | 10 | M出現・H内容 |
| DX-A03-007 | DX-A03-007 | canonical | SS除去と負荷低減 | 10 | M出現・H内容 |
| DX-A03-008 | DX-A03-008 | canonical | 汚泥への移行と管理 | 10 | M出現・H内容 |
| DX-A03-009 | DX-A03-009 | canonical | 複数工程の組合せ | 10 | M出現・H内容 |
| DX-A03-010 | DX-A03-010 | canonical | 採水・変動への対応 | 10 | M出現・H内容 |
| DX-A03-011 | DX-A03-011 | canonical | 水質基準への適合管理 | 10 | M出現・H内容 |
| DX-A03-012 | DX-A03-012 | canonical | 異常時の追跡 | 10 | M出現・H内容 |
| DX-A04-001 | DX-A04-001 | distinct-cross-reference | パルプの塩素系漂白 | 11 | M出現・H内容 |
| DX-A04-002 | DX-A04-002 | canonical | 化学製造・洗浄 | 11 | M出現・H内容 |
| DX-A04-003 | DX-A04-003 | distinct-cross-reference | 非鉄金属・排ガス洗浄 | 11 | M出現・H内容 |
| DX-A04-004 | DX-A04-026 | alias-preserved | 廃棄物焼却の湿式排ガス処理・灰ピット | 11 | M出現・H内容 |
| DX-A04-005 | DX-A04-027 | alias-preserved | PCB関連処理施設 | 11 | M出現・H内容 |
| DX-A04-006 | DX-A04-029 | alias-preserved | 下水道終末処理施設 | 11 | M出現・H内容 |
| DX-A04-007 | DX-A04-030 | alias-preserved | 対象排水の処理施設 | 11 | M出現・H内容 |
| DX-A04-008 | DX-A04-008 | distinct-cross-reference | 対象施設と事業場排水の違い | 11 | M出現・H内容 |
| DX-A04-009 | DX-A04-032 | alias-preserved | 水質排出基準の適用単位 | 11 | M出現・H内容 |
| DX-A04-010 | DX-A04-010 | canonical | 公共用水域・下水道への排出 | 11 | M出現・H内容 |
| DX-A04-011 | DX-A04-011 | distinct-cross-reference | 対象判定と届出 | 11 | M出現・H内容 |
| DX-A05-001 | DX-A05-001 | canonical | 排出ガス・排出水・灰・環境媒体 | 12 | M出現・H内容 |
| DX-A05-002 | DX-A05-002 | canonical | 異性体別測定 | 12 | M出現・H内容 |
| DX-A05-003 | DX-A05-003 | canonical | 単位と試料の換算 | 12 | M出現・H内容 |
| DX-A05-004 | DX-A05-004 | canonical | 排ガス採取の原理 | 12 | M出現・H内容 |
| DX-A05-005 | DX-A05-005 | canonical | 粒子とガスの捕集 | 12 | M出現・H内容 |
| DX-A05-006 | DX-A05-006 | canonical | 排水・底質・土壌の採取 | 12 | M出現・H内容 |
| DX-A05-007 | DX-A05-007 | canonical | 試料の前処理と抽出 | 12 | M出現・H内容 |
| DX-A05-008 | DX-A05-008 | canonical | 精製・クリーンアップ | 12 | M出現・H内容 |
| DX-A05-009 | DX-A05-009 | canonical | 内標準物質の添加 | 12 | M出現・H内容 |
| DX-A05-010 | DX-A05-010 | canonical | GCでの異性体分離 | 12 | M出現・H内容 |
| DX-A05-011 | DX-A05-011 | canonical | HRGC/HRMS | 12 | M出現・H内容 |
| DX-A05-012 | DX-A05-012 | canonical | 同位体希釈定量 | 12 | M出現・H内容 |
| DX-A05-013 | DX-A05-013 | canonical | 濃度からTEQへの計算 | 12 | M出現・H内容 |
| DX-A05-014 | DX-A05-014 | canonical | 検出下限・定量下限 | 12 | M出現・H内容 |
| DX-A05-015 | DX-A05-015 | canonical | 未検出値の扱い | 12 | M出現・H内容 |
| DX-A05-016 | DX-A05-016 | canonical | ブランク・回収率 | 12 | M出現・H内容 |
| DX-A05-017 | DX-A05-017 | canonical | 検量線と精度管理 | 12 | M出現・H内容 |
| DX-A05-018 | DX-A05-018 | canonical | 簡易測定法と公定法 | 12 | M出現・H内容 |
| DX-A05-019 | DX-A05-019 | canonical | JIS K 0311:2020 | 12 | M出現・H内容 |
| DX-A05-020 | DX-A05-020 | canonical | JIS K 0312:2020 | 12 | M出現・H内容 |
| DX-A05-021 | DX-A05-021 | canonical | 環境省の大気・土壌・底質マニュアル | 12 | M出現・H内容 |
| DX-A02-014 | DX-A02-014 | canonical | 銑鉄製造用の焼結鉱をつくる焼結炉（令別表第一第1号） | 9 | M出現・H内容 |
| DX-A02-015 | DX-A02-015 | canonical | 製鋼用電気炉（令別表第一第2号） | 9 | M出現・H内容 |
| DX-A02-016 | DX-A02-016 | canonical | 製鋼用電気炉の集じんダストからの亜鉛回収（令別表第一第3号） | 9 | M出現・H内容 |
| DX-A02-017 | DX-A02-017 | canonical | アルミニウムくずを原料とするアルミ合金製造（令別表第一第4号） | 9 | M出現・H内容 |
| DX-A02-018 | DX-A02-018 | canonical | 廃棄物焼却炉（令別表第一第5号） | 9 | M出現・H内容 |
| DX-A02-019 | DX-A02-019 | canonical | 新設・既設の基準適用と1997年12月2日の例外 | 9 | M出現・H内容 |
| DX-A02-020 | DX-A02-020 | canonical | 焼却炉の複数炉合算と二段階の能力判定 | 9 | M出現・H内容 |
| DX-A02-021 | DX-A02-021 | canonical | 施設ごとの大気排出基準と酸素補正 | 9 | M出現・H内容 |
| DX-A04-012 | DX-A04-012 | canonical | クラフトパルプまたはサルファイトパルプの塩素系漂白（令別表第二第1号） | 11 | M出現・H内容 |
| DX-A04-013 | DX-A04-013 | canonical | カーバイド法アセチレン製造に伴う洗浄（令別表第二第2号） | 11 | M出現・H内容 |
| DX-A04-014 | DX-A04-014 | canonical | 硫酸カリウム製造の排ガス処理（令別表第二第3号） | 11 | M出現・H内容 |
| DX-A04-015 | DX-A04-015 | canonical | アルミナ繊維製造の排ガス処理（令別表第二第4号） | 11 | M出現・H内容 |
| DX-A04-016 | DX-A04-016 | canonical | 塩素系原料を使う担体付き触媒製造炉の排ガス処理（令別表第二第5号） | 11 | M出現・H内容 |
| DX-A04-017 | DX-A04-017 | canonical | 塩化ビニルモノマー製造の二塩化エチレン洗浄（令別表第二第6号） | 11 | M出現・H内容 |
| DX-A04-018 | DX-A04-018 | canonical | 塩化ニトロシルを使うカプロラクタム製造（令別表第二第7号） | 11 | M出現・H内容 |
| DX-A04-019 | DX-A04-019 | canonical | クロロベンゼンまたはジクロロベンゼン製造（令別表第二第8号） | 11 | M出現・H内容 |
| DX-A04-020 | DX-A04-020 | canonical | 4-クロロフタル酸水素ナトリウム製造（令別表第二第9号） | 11 | M出現・H内容 |
| DX-A04-021 | DX-A04-021 | canonical | 2,3-ジクロロ-1,4-ナフトキノン製造（令別表第二第10号） | 11 | M出現・H内容 |
| DX-A04-022 | DX-A04-022 | canonical | ジオキサジンバイオレット製造（令別表第二第11号） | 11 | M出現・H内容 |
| DX-A04-023 | DX-A04-023 | canonical | アルミニウムまたはその合金の炉の排ガス処理（令別表第二第12号） | 11 | M出現・H内容 |
| DX-A04-024 | DX-A04-024 | canonical | 製鋼用電気炉ばいじんからの亜鉛回収（令別表第二第13号） | 11 | M出現・H内容 |
| DX-A04-025 | DX-A04-025 | canonical | 使用済み担体付き触媒からの金属回収（令別表第二第14号） | 11 | M出現・H内容 |
| DX-A04-026 | DX-A04-026 | canonical | 特定廃棄物焼却炉の湿式ガス処理・灰貯留（令別表第二第15号） | 11 | M出現・H内容 |
| DX-A04-027 | DX-A04-027 | canonical | 廃PCB等の分解およびPCB汚染物等の洗浄・分離（令別表第二第16号） | 11 | M出現・H内容 |
| DX-A04-028 | DX-A04-028 | canonical | 特定フロン類を一定の方法で破壊（令別表第二第17号） | 11 | M出現・H内容 |
| DX-A04-029 | DX-A04-029 | canonical | 指定対象排水を受け入れる下水道終末処理（令別表第二第18号） | 11 | M出現・H内容 |
| DX-A04-030 | DX-A04-030 | canonical | 指定施設を持つ事業場からの水の処理（令別表第二第19号） | 11 | M出現・H内容 |
| DX-A04-031 | DX-A04-031 | canonical | 水質排出基準10 pg-TEQ/Lと環境基準の区別 | 11 | M出現・H内容 |
| DX-A04-032 | DX-A04-032 | canonical | 水質排出の対象は施設からではなく事業場排出水 | 11 | M出現・H内容 |
| DX-A04-033 | DX-A04-033 | canonical | 水質第18号・第19号の汚水由来と除外条件 | 11 | M出現・H内容 |
| DX-A04-034 | DX-A04-034 | canonical | 排出水基準と水質対象施設の条件付き指定 | 11 | M出現・H内容 |
| DX-G05-015 | DX-G05-015 | distinct-cross-reference | 前駆体経路とde novo合成の併存・判別上の限界 | 5 | M出現・H内容 |
| DX-A01-015 | DX-A01-015 | distinct-cross-reference | 電気集じんの放電・粒子比抵抗・逆電離 | 8 | M出現・H内容 |
| DX-A02-022 | DX-A02-022 | distinct-cross-reference | 大気5号の工程別分類と生成・対策の比較 | 9 | M出現・H内容 |
| DX-A04-035 | DX-A04-035 | distinct-cross-reference | 水質特定施設19号の用途・工程別分類 | 11 | M出現・H内容 |
| DX-A04-036 | DX-A04-036 | distinct-cross-reference | 水質特定施設と事業場排出水の法的区別（導入） | 11 | M出現・H内容 |
| DX-A04-037 | DX-A04-037 | distinct-cross-reference | 水質対象施設の届出・測定と適用条件の総合判断 | 11 | M出現・H内容 |
| DX-G01-022 | DX-G01-022 | distinct-cross-reference | 公害防止組織法とダイ特法の施設指定の違い | 1 | M出現・H内容 |
| DX-G01-023 | DX-G01-023 | distinct-cross-reference | 特措法附則第2条の臭素系ダイオキシン調査研究 | 1 | M出現・H内容 |
| DX-G03-014 | DX-G03-014 | distinct-cross-reference | 特定施設の設置基数・構成比と排出量の違い | 3 | M出現・H内容 |
| DX-G04-016 | DX-G04-016 | distinct-cross-reference | TEF付与異性体数の同族体別集計 | 4 | M出現・H内容 |
| DX-G04-017 | DX-G04-017 | distinct-cross-reference | PCBの塩素数別融点・蒸気圧の物性表 | 4 | M出現・H内容 |
| DX-G04-018 | DX-G04-018 | distinct-cross-reference | 臭素系ダイオキシン類の暫定TEF援用と正式係数 | 4 | M出現・H内容 |
| DX-A01-016 | DX-A01-016 | distinct-cross-reference | 触媒分解率・SV・処理流量の算定 | 8 | M出現・H内容 |
| DX-G01-024 | DX-G01-024 | distinct-cross-reference | 公害防止管理者の管理する技術的事項（発生施設の点検と処理施設の補修） | 1 | M出現・H内容 |
| DX-A01-017 | DX-A01-017 | distinct-cross-reference | 集じん方式別の部分捕集効率曲線（電気・遠心・慣性・重力・ろ過） | 8 | M出現・H内容 |

## 5. 独自五者択一71問の出題・答え表示の機械台帳（M）

「五肢」は①～⑤の検出（独立行60問・横並び1行11問のいずれも5肢の記載を確認）、「正解表示」は本文の文字列から抽出。正解の唯一性・全肢の科学的/法的正誤はすべてHOLD。全肢に説明を与えているかは意味上の独立レビューが必要。

| 問題ID | 節 | 5肢 | 正答表示 | 独立正答・全肢監査 | ファイル |
|---|---|---|---|---|---|
| 0-1 | 0.1 | M有 | ③（M抽出のみ） | **HOLD** | `books/dioxin-guide/manuscript/chapter-00.md` |
| 0-2 | 0.2 | M有 | ④（M抽出のみ） | **HOLD** | `books/dioxin-guide/manuscript/chapter-00.md` |
| 0-3 | 0.3 | M有 | ④（M抽出のみ） | **HOLD** | `books/dioxin-guide/manuscript/chapter-00.md` |
| 1-1 | 1.1 | M有 | ④（M抽出のみ） | **HOLD** | `books/dioxin-guide/manuscript/chapter-01.md` |
| 1-2 | 1.2 | M有 | ③（M抽出のみ） | **HOLD** | `books/dioxin-guide/manuscript/chapter-01.md` |
| 1-3 | 1.2 | M有 | ④（M抽出のみ） | **HOLD** | `books/dioxin-guide/manuscript/chapter-01.md` |
| 1-4 | 1.3 | M有 | ④（M抽出のみ） | **HOLD** | `books/dioxin-guide/manuscript/chapter-01.md` |
| 1-5 | 1.4 | M有 | ④（M抽出のみ） | **HOLD** | `books/dioxin-guide/manuscript/chapter-01.md` |
| 2-1 | 2.1 | M有 | ③（M抽出のみ） | **HOLD** | `books/dioxin-guide/manuscript/chapter-02.md` |
| 2-2 | 2.2 | M有 | ②（M抽出のみ） | **HOLD** | `books/dioxin-guide/manuscript/chapter-02.md` |
| 3-1 | 3.1 | M有 | ②（M抽出のみ） | **HOLD** | `books/dioxin-guide/manuscript/chapter-03.md` |
| 3-2 | 3.2 | M有 | ④（M抽出のみ） | **HOLD** | `books/dioxin-guide/manuscript/chapter-03.md` |
| 3-3 | 3.3 | M有 | ②（M抽出のみ） | **HOLD** | `books/dioxin-guide/manuscript/chapter-03.md` |
| 4-1 | 4.1 | M有 | ③（M抽出のみ） | **HOLD** | `books/dioxin-guide/manuscript/chapter-04.md` |
| 4-2 | 4.2 | M有 | ③（M抽出のみ） | **HOLD** | `books/dioxin-guide/manuscript/chapter-04.md` |
| 4-3 | 4.2 | M有 | ③（M抽出のみ） | **HOLD** | `books/dioxin-guide/manuscript/chapter-04.md` |
| 4-4 | 4.3 | M有 | ②（M抽出のみ） | **HOLD** | `books/dioxin-guide/manuscript/chapter-04.md` |
| 4-5 | 4.4 | M有 | ④（M抽出のみ） | **HOLD** | `books/dioxin-guide/manuscript/chapter-04.md` |
| 5-1 | 5.1 | M有 | ②（M抽出のみ） | **HOLD** | `books/dioxin-guide/manuscript/chapter-05.md` |
| 5-2 | 5.2 | M有 | ④（M抽出のみ） | **HOLD** | `books/dioxin-guide/manuscript/chapter-05.md` |
| 5-3 | 5.2 | M有 | ③（M抽出のみ） | **HOLD** | `books/dioxin-guide/manuscript/chapter-05.md` |
| 5-4 | 5.3 | M有 | ④（M抽出のみ） | **HOLD** | `books/dioxin-guide/manuscript/chapter-05.md` |
| 6-1 | 6.1 | M有 | ②（M抽出のみ） | **HOLD** | `books/dioxin-guide/manuscript/chapter-06.md` |
| 6-2 | 6.2 | M有 | ③（M抽出のみ） | **HOLD** | `books/dioxin-guide/manuscript/chapter-06.md` |
| 6-3 | 6.3 | M有 | ①（M抽出のみ） | **HOLD** | `books/dioxin-guide/manuscript/chapter-06.md` |
| 6-4 | 6.3 | M有 | ③（M抽出のみ） | **HOLD** | `books/dioxin-guide/manuscript/chapter-06.md` |
| 7-1 | 7.1 | M有 | ②（M抽出のみ） | **HOLD** | `books/dioxin-guide/manuscript/chapter-07.md` |
| 7-2 | 7.2 | M有 | ④（M抽出のみ） | **HOLD** | `books/dioxin-guide/manuscript/chapter-07.md` |
| 7-3 | 7.2 | M有 | ②（M抽出のみ） | **HOLD** | `books/dioxin-guide/manuscript/chapter-07.md` |
| 8-1 | 8.1 | M有 | ④（M抽出のみ） | **HOLD** | `books/dioxin-guide/manuscript/chapter-08.md` |
| 8-2 | 8.1 | M有（横並び） | ③（M抽出のみ） | **HOLD** | `books/dioxin-guide/manuscript/chapter-08.md` |
| 8-3 | 8.2 | M有 | ⑤（M抽出のみ） | **HOLD** | `books/dioxin-guide/manuscript/chapter-08.md` |
| 8-4 | 8.3 | M有 | ②（M抽出のみ） | **HOLD** | `books/dioxin-guide/manuscript/chapter-08.md` |
| 8-5 | 8.3 | M有（横並び） | ③（M抽出のみ） | **HOLD** | `books/dioxin-guide/manuscript/chapter-08.md` |
| 8-6 | 8.3 | M有 | ④（M抽出のみ） | **HOLD** | `books/dioxin-guide/manuscript/chapter-08.md` |
| 8-7 | 8.4 | M有 | ⑤（M抽出のみ） | **HOLD** | `books/dioxin-guide/manuscript/chapter-08.md` |
| 8-8 | 8.4 | M有 | ②（M抽出のみ） | **HOLD** | `books/dioxin-guide/manuscript/chapter-08.md` |
| 8-9 | 8.5 | M有 | ④（M抽出のみ） | **HOLD** | `books/dioxin-guide/manuscript/chapter-08.md` |
| 9-1 | 9.1 | M有 | ③（M抽出のみ） | **HOLD** | `books/dioxin-guide/manuscript/chapter-09.md` |
| 9-2 | 9.1 | M有 | ④（M抽出のみ） | **HOLD** | `books/dioxin-guide/manuscript/chapter-09.md` |
| 9-3 | 9.2 | M有 | ②（M抽出のみ） | **HOLD** | `books/dioxin-guide/manuscript/chapter-09.md` |
| 9-4 | 9.2 | M有 | ⑤（M抽出のみ） | **HOLD** | `books/dioxin-guide/manuscript/chapter-09.md` |
| 9-5 | 9.3 | M有 | ②（M抽出のみ） | **HOLD** | `books/dioxin-guide/manuscript/chapter-09.md` |
| 9-6 | 9.3 | M有 | ④（M抽出のみ） | **HOLD** | `books/dioxin-guide/manuscript/chapter-09.md` |
| 9-7 | 9.3 | M有 | ②（M抽出のみ） | **HOLD** | `books/dioxin-guide/manuscript/chapter-09.md` |
| 9-8 | 9.3 | M有（横並び） | ②（M抽出のみ） | **HOLD** | `books/dioxin-guide/manuscript/chapter-09.md` |
| 10-1 | 10.1 | M有 | ③（M抽出のみ） | **HOLD** | `books/dioxin-guide/manuscript/chapter-10.md` |
| 10-2 | 10.1 | M有（横並び） | ③（M抽出のみ） | **HOLD** | `books/dioxin-guide/manuscript/chapter-10.md` |
| 10-3 | 10.2 | M有 | ②（M抽出のみ） | **HOLD** | `books/dioxin-guide/manuscript/chapter-10.md` |
| 10-4 | 10.2 | M有（横並び） | ④（M抽出のみ） | **HOLD** | `books/dioxin-guide/manuscript/chapter-10.md` |
| 10-5 | 10.2 | M有 | ③（M抽出のみ） | **HOLD** | `books/dioxin-guide/manuscript/chapter-10.md` |
| 10-6 | 10.3 | M有 | ②（M抽出のみ） | **HOLD** | `books/dioxin-guide/manuscript/chapter-10.md` |
| 10-7 | 10.3 | M有（横並び） | ③（M抽出のみ） | **HOLD** | `books/dioxin-guide/manuscript/chapter-10.md` |
| 11-1 | 11.1 | M有 | ③（M抽出のみ） | **HOLD** | `books/dioxin-guide/manuscript/chapter-11.md` |
| 11-2 | 11.1 | M有 | ④（M抽出のみ） | **HOLD** | `books/dioxin-guide/manuscript/chapter-11.md` |
| 11-3 | 11.2 | M有 | ②（M抽出のみ） | **HOLD** | `books/dioxin-guide/manuscript/chapter-11.md` |
| 11-4 | 11.2 | M有 | ④（M抽出のみ） | **HOLD** | `books/dioxin-guide/manuscript/chapter-11.md` |
| 11-5 | 11.3 | M有 | ③（M抽出のみ） | **HOLD** | `books/dioxin-guide/manuscript/chapter-11.md` |
| 11-6 | 11.3 | M有 | ④（M抽出のみ） | **HOLD** | `books/dioxin-guide/manuscript/chapter-11.md` |
| 11-7 | 11.3 | M有（横並び） | ③（M抽出のみ） | **HOLD** | `books/dioxin-guide/manuscript/chapter-11.md` |
| 12-1 | 12.1 | M有 | ③（M抽出のみ） | **HOLD** | `books/dioxin-guide/manuscript/chapter-12.md` |
| 12-2 | 12.2 | M有 | ①（M抽出のみ） | **HOLD** | `books/dioxin-guide/manuscript/chapter-12.md` |
| 12-3 | 12.2 | M有（横並び） | ③（M抽出のみ） | **HOLD** | `books/dioxin-guide/manuscript/chapter-12.md` |
| 12-4 | 12.3 | M有 | ②（M抽出のみ） | **HOLD** | `books/dioxin-guide/manuscript/chapter-12.md` |
| 12-5 | 12.3 | M有（横並び） | ④（M抽出のみ） | **HOLD** | `books/dioxin-guide/manuscript/chapter-12.md` |
| 12-6 | 12.4 | M有 | ③（M抽出のみ） | **HOLD** | `books/dioxin-guide/manuscript/chapter-12.md` |
| 12-7 | 12.4 | M有（横並び） | ②（M抽出のみ） | **HOLD** | `books/dioxin-guide/manuscript/chapter-12.md` |
| 12-8 | 12.5 | M有（横並び） | ④（M抽出のみ） | **HOLD** | `books/dioxin-guide/manuscript/chapter-12.md` |
| 12-9 | 12.5 | M有 | ④（M抽出のみ） | **HOLD** | `books/dioxin-guide/manuscript/chapter-12.md` |
| 12-10 | 12.6 | M有 | ③（M抽出のみ） | **HOLD** | `books/dioxin-guide/manuscript/chapter-12.md` |
| 12-11 | 12.6 | M有 | ⑤（M抽出のみ） | **HOLD** | `books/dioxin-guide/manuscript/chapter-12.md` |

### 5.1 付録D-5正誤10問

第一表1～10に対し解答表1～10を置く構造を確認（原稿内）。全10問の正誤・理由・例外は**独立内容監査未完**。対応先：`books/dioxin-guide/manuscript/appendix.md`、`books/dioxin-guide/reviews/appendix-review-v0.1.md`。

## 6. 計算例52件の監査対象全数（M・独立再計算HOLD）

| 番号 | 本文見出し・前提（先頭抜粋） | 状態 | ファイル |
|---|---|---|---|
| 3-1 | 理解用の仮定値であり実施設の代表値ではない）** | M存在／**HOLD：独立再計算・単位・条件** | `books/dioxin-guide/manuscript/chapter-03.md` |
| 4-1 | 法令別表第三の係数を使った独自例題）**：ある水の試料で、次の四つの異性体の濃度が得られたものとする。説明を簡単にするため、ここに挙げない対象異性体のTEQへの寄与は0と仮定し、表中の濃度は全て定量下 | M存在／**HOLD：独立再計算・単位・条件** | `books/dioxin-guide/manuscript/chapter-04.md` |
| 4-2 | 逆算する）**：ある異性体のTEFが0.01で、TEQへの寄与が0.5 pg-TEQ/gであるとき、その異性体の濃度は**0.5÷0.01＝50 pg/g**である。TEFが小さいほど同じ寄与を生むた | M存在／**HOLD：独立再計算・単位・条件** | `books/dioxin-guide/manuscript/chapter-04.md` |
| 4-3 | 分配の概念）**：水相中の濃度が0.02 μg/L、同じ単位で表した平衡オクタノール相濃度が200 μg/Lなら、**Kₒw＝200/0.02＝10,000、log Kₒw＝4**である。濃度比を計算 | M存在／**HOLD：独立再計算・単位・条件** | `books/dioxin-guide/manuscript/chapter-04.md` |
| 5-1 | 架空の定常測定、濃度とガス流量のみの例）**：ある装置の入口・出口で標準乾き排ガス流量がともに**12,000 m³N/h**、条件をそろえて測定したTEQ濃度が入口**1.5 ng-TEQ/m³N* | M存在／**HOLD：独立再計算・単位・条件** | `books/dioxin-guide/manuscript/chapter-05.md` |
| 6-1 | 半減期の模式例）**：ある物質が**体内への新たな取り込みがない**、かつ単純な一次消失に従い、半減期を**8年と仮定**する。初期量を100とすれば8年後に50、16年後に25となる。数式は**残存 | M存在／**HOLD：独立再計算・単位・条件** | `books/dioxin-guide/manuscript/chapter-06.md` |
| 6-2 | 実公表値と計算の区別）**：2024年度の食品経由の平均摂取推計値**0.41 pg-TEQ/(kg体重・日)**［S08］と、日本のTDI**4 pg-TEQ/(kg体重・日)**［S01・S02］ | M存在／**HOLD：独立再計算・単位・条件** | `books/dioxin-guide/manuscript/chapter-06.md` |
| 6-3 | 架空の食品摂取量推計）**：食品Aの濃度が**0.10 pg-TEQ/g**で、一日**100 g**食べると**10 pg-TEQ/日**。食品Bが**0.020 pg-TEQ/g**で一日**20 | M存在／**HOLD：独立再計算・単位・条件** | `books/dioxin-guide/manuscript/chapter-06.md` |
| 7-1 | 政策評価の数値）**：2024年の目標評価対象排出量を**92 g-TEQ/年**、目標を**176 g-TEQ/年**とすると、目標に対する比率は**92÷176×100＝約52.3％**である。目 | M存在／**HOLD：独立再計算・単位・条件** | `books/dioxin-guide/manuscript/chapter-07.md` |
| 8-1 | 反応域の名目滞留時間、架空条件）**：高温域の有効容積V＝120 m³、同温度・圧力で換算した実ガス流量Q＝216,000 m³/hなら、t＝V/(Q/3600)＝120/60＝**2.0秒**。流量 | M存在／**HOLD：独立再計算・単位・条件** | `books/dioxin-guide/manuscript/chapter-08.md` |
| 8-2 | 酸素濃度換算の算術、仮想データ）**：乾き排ガスにおけるCO測定値が50 ppm、測定O₂が10%、換算基準O₂が12%の場合、C₁₂＝C測定×(21−12)/(21−10)＝50×9/11≒**40 | M存在／**HOLD：独立再計算・単位・条件** | `books/dioxin-guide/manuscript/chapter-08.md` |
| 8-3 | 平均通過時間の比較、完全混合を仮定しない算術）**：ある温度区間のダクト容積V＝300 m³、当該区間の実ガス体積流量Q＝30,000 m³/hとすれば、V/(Q/3600)＝300/8.333…＝* | M存在／**HOLD：独立再計算・単位・条件** | `books/dioxin-guide/manuscript/chapter-08.md` |
| 8-4 | 質量基準の部分捕集率から総合率、完全な架空条件）**：入口質量の30%、50%、20%を占める粒径群の部分捕集効率をそれぞれ90%、70%、20%とすると、ηₜ＝0.30×0.90＋0.50×0.70 | M存在／**HOLD：独立再計算・単位・条件** | `books/dioxin-guide/manuscript/chapter-08.md` |
| 8-5 | ろ過速度、架空条件）**：実ガス流量18,000 m³/h、有効ろ布面積1,500 m²なら、v＝(18,000/60)/1,500＝**0.20 m/min**。この値は計算練習用の仮定であり、全バ | M存在／**HOLD：独立再計算・単位・条件** | `books/dioxin-guide/manuscript/chapter-08.md` |
| 8-6 | モデル計算、架空条件）**：w＝0.07 m/s、A＝2,000 m²、Q＝70 m³/sなら、wA/Q＝2.0、η＝1−e⁻²≒**86.5%**。これは仮想の一様な有効移動速度での理想化式の値であ | M存在／**HOLD：独立再計算・単位・条件** | `books/dioxin-guide/manuscript/chapter-08.md` |
| 8-7 | 空塔接触時間、架空条件）**：固定床の層容積6 m³、実ガス流量1,800 m³/hなら、EBCT＝6/(1800/3600)＝**12秒**。同じ床容積で流量が倍の3,600 m³/hになればEBC | M存在／**HOLD：独立再計算・単位・条件** | `books/dioxin-guide/manuscript/chapter-08.md` |
| 8-8 | SV、架空条件）**：触媒見掛け容積V＝3.0 m³、**運転状態での**ガス体積流量Q＝4,500 m³/hなら、SV＝4500/3＝**1,500 h⁻¹**、名目時間τ＝3600/1500＝** | M存在／**HOLD：独立再計算・単位・条件** | `books/dioxin-guide/manuscript/chapter-08.md` |
| 8-9 | 見かけの排ガス低減率、架空条件）**：触媒前後で同一条件に換算した流量が同じで、入口濃度20 ng-TEQ/m³、出口1 ng-TEQ/m³なら、ガス流中のTEQの**見かけの低減率**は(20−1) | M存在／**HOLD：独立再計算・単位・条件** | `books/dioxin-guide/manuscript/chapter-08.md` |
| 8-10 | ガス→飛灰への移行のモデル、架空条件）**：ある工程に入口ガス30,000 m³/h、ダイオキシン類濃度2.0 ng-TEQ/m³が入り、同じ換算基準の出口ガス流量30,000 m³/h、濃度0.20 | M存在／**HOLD：独立再計算・単位・条件** | `books/dioxin-guide/manuscript/chapter-08.md` |
| 9-1 | 捕集を含めた系統評価、架空条件）**：ある工程で発生した粉じんを含むガスの**質量基準**で、総発生粉じん100 kg/hのうち90%が排ガス処理系に捕集され、処理系内部の集じん装置の粉じん捕集率が9 | M存在／**HOLD：独立再計算・単位・条件** | `books/dioxin-guide/manuscript/chapter-09.md` |
| 9-2 | 焼却能力の単位、架空条件）**：焼却能力**1.8 t/h**は**1,800 kg/h**である。火床面積が条件を満たし、同施設内の合算による別の扱いがない場合、特措法の規制対象であって、排出基準の | M存在／**HOLD：独立再計算・単位・条件** | `books/dioxin-guide/manuscript/chapter-09.md` |
| 9-3 | 小型複数炉、架空条件）**：同一焼却施設内に、炉A（火床0.20 m²・能力30 kg/h）と炉B（0.15 m²・25 kg/h）がある。合計火床**0.35 m²**で0.5未満だが、合計能力** | M存在／**HOLD：独立再計算・単位・条件** | `books/dioxin-guide/manuscript/chapter-09.md` |
| 9-4 | 等号・排出基準区分、架空条件）**：同一施設内に能力1,100 kg/hと900 kg/hの2炉があり、両炉とも法定の「新設側」の基準を適用するという設定なら、合計**2,000 kg/h**。合計能 | M存在／**HOLD：独立再計算・単位・条件** | `books/dioxin-guide/manuscript/chapter-09.md` |
| 9-5 | 火床面積の境界、架空条件）**：1炉の火床面積0.50 m²、能力45 kg/hなら、面積で**0.5 m²以上**だから第5号に該当する。同じ能力でも火床が0.49 m²なら入口条件は両方未達で非該 | M存在／**HOLD：独立再計算・単位・条件** | `books/dioxin-guide/manuscript/chapter-09.md` |
| 9-6 | 廃棄物焼却炉の12%O₂換算、架空条件）**：同じ乾き・標準条件で測った排ガス濃度\(C=0.80\) ng-TEQ/m³、O₂＝**9%**なら、12%補正は\(0.80×(21−12)/(21−9 | M存在／**HOLD：独立再計算・単位・条件** | `books/dioxin-guide/manuscript/chapter-09.md` |
| 9-7 | 焼結炉の15%O₂換算、架空条件）**：濃度**0.40 ng-TEQ/m³**、O₂実測**12%**なら、15%換算は\(0.40×(21−15)/(21−12)=0.40×6/9≒\mathbf | M存在／**HOLD：独立再計算・単位・条件** | `books/dioxin-guide/manuscript/chapter-09.md` |
| 10-1 | 懸濁態と溶存態の分配、架空例）**：SSが20 mg/L＝0.000020 kg/L、SS中のPCDD/PCDFのTEQ含有濃度が100 ng-TEQ/kgと仮定すると、SSに随伴するTEQ濃度は | M存在／**HOLD：独立再計算・単位・条件** | `books/dioxin-guide/manuscript/chapter-10.md` |
| 10-2 | 沈殿槽の水面積負荷、架空条件）**：平均流量Q＝60 m³/h、沈殿槽の実効水面積A＝30 m²とすると \(v_0=60/30=\mathbf{2.0\ m/h}\)。同じ槽で一時的に120 m³/ | M存在／**HOLD：独立再計算・単位・条件** | `books/dioxin-guide/manuscript/chapter-10.md` |
| 10-3 | SS側・ろ液側の概念収支、架空条件）**：流入の全TEQ濃度20 pg-TEQ/Lのうち、SS随伴が16、ろ液側が4と仮定する。凝集沈殿でSS随伴TEQの90%を分離し、ろ液側には作用しないとすると、 | M存在／**HOLD：独立再計算・単位・条件** | `books/dioxin-guide/manuscript/chapter-10.md` |
| 10-4 | 膜分離の水量・TEQ収支、架空条件）**：原水Q_f＝100 m³/h、C_f＝10 pg-TEQ/Lを膜処理し、透過水Q_p＝80 m³/h、C_p＝1 pg-TEQ/Lを得た。水量差から濃縮水Q_ | M存在／**HOLD：独立再計算・単位・条件** | `books/dioxin-guide/manuscript/chapter-10.md` |
| 10-5 | GAC空塔接触時間、架空条件）**：粒状活性炭の充填層容積V_b＝15 m³、処理水量Q＝45 m³/hなら | M存在／**HOLD：独立再計算・単位・条件** | `books/dioxin-guide/manuscript/chapter-10.md` |
| 10-6 | 各段の除去率を掛ける場合、架空条件）**：流入TEQ濃度20 pg-TEQ/L、凝集沈殿で**見かけの水側低減率70%**、次のろ過で**その入口TEQの50%**、次の活性炭で**さらにその入口TE | M存在／**HOLD：独立再計算・単位・条件** | `books/dioxin-guide/manuscript/chapter-10.md` |
| 10-7 | 排水と汚泥への移行、すべて架空の定常物質収支）**：原水100 m³/日、全濃度20 pg-TEQ/L、放流水100 m³/日、全濃度2 pg-TEQ/Lと仮定する。水流量が同じという簡略化の下で、入 | M存在／**HOLD：独立再計算・単位・条件** | `books/dioxin-guide/manuscript/chapter-10.md` |
| 10-8 | 水分除去と含有濃度、仮想モデル）**：湿汚泥100 kg（水分95%）には乾燥固形物5 kgが含まれるとする。汚泥が保持するTEQ総量が**50,000 pg-TEQ**で変わらないと仮定し、脱水後の | M存在／**HOLD：独立再計算・単位・条件** | `books/dioxin-guide/manuscript/chapter-10.md` |
| 10-9 | 濃度と排出負荷量、架空条件）**：A系統は放流水量50 m³/日、TEQ濃度8 pg-TEQ/L、B系統は20 m³/日、TEQ濃度12 pg-TEQ/Lとする。それぞれの負荷はA＝50,000 L/ | M存在／**HOLD：独立再計算・単位・条件** | `books/dioxin-guide/manuscript/chapter-10.md` |
| 11-1 | 濃度比較と負荷量は別）**：上の事例で、流量が**600 m³/日**に倍増しても、濃度が同じ8.0 pg-TEQ/Lなら日負荷は**4.8 µg-TEQ/日**に増える。一方、**10 pg-TEQ | M存在／**HOLD：独立再計算・単位・条件** | `books/dioxin-guide/manuscript/chapter-11.md` |
| 11-2 | 放流水の異なる濃度・流量を平均する、架空条件）**：同じ日に排水量50 m³・濃度4 pg-TEQ/Lの水と、150 m³・濃度12 pg-TEQ/Lの水を**反応・吸着・損失がなく完全に混合**した | M存在／**HOLD：独立再計算・単位・条件** | `books/dioxin-guide/manuscript/chapter-11.md` |
| 12-1 | 架空の3成分）**：A・B・Cの濃度を20・10・5 pg/L、仮定TEFを0.1・0.01・0.001とすると、実測質量濃度の和は**35 pg/L**、TEQは \(20×0.1+10×0.01+ | M存在／**HOLD：独立再計算・単位・条件** | `books/dioxin-guide/manuscript/chapter-12.md` |
| 12-2 | 単位換算、架空条件）**：標準乾きガス1.20 m³に対して総TEQが240 pgなら、\(240/1.20=200\ {\rm pg\!-\!TEQ/m³}=\mathbf{0.200\ ng\!- | M存在／**HOLD：独立再計算・単位・条件** | `books/dioxin-guide/manuscript/chapter-12.md` |
| 12-3 | 理想等速吸引、架空条件）**：採取点のガス流速12 m/s、ノズル直径8.0 mmのとき、\(A_n=\pi(0.008)^2/4\simeq5.027×10^{-5}\,{\rm m²}\)。等速時 | M存在／**HOLD：独立再計算・単位・条件** | `books/dioxin-guide/manuscript/chapter-12.md` |
| 12-4 | 乾きガスの標準体積、架空条件）**：乾きガス採取量1.50 m³、温度27℃（300.15 K）、絶対圧100.0 kPaなら、\(V_{0,d}=1.50×100/101.325×273.15/30 | M存在／**HOLD：独立再計算・単位・条件** | `books/dioxin-guide/manuscript/chapter-12.md` |
| 12-5 | 底質の乾燥質量、架空条件）**：湿試料10.0 g、湿重量基準で水分60%、TEQ総量1,200 pgなら、乾燥質量4.0 g、乾重量濃度は**300 pg-TEQ/g-dry**。10 gで割った1 | M存在／**HOLD：独立再計算・単位・条件** | `books/dioxin-guide/manuscript/chapter-12.md` |
| 12-6 | 湿り・乾きの比較、架空条件）**：標準湿り体積1.25 m³、乾き分の体積比率80%、捕集量0.30 ng-TEQと仮定する。乾き標準体積は**1.00 m³**、湿り濃度0.30/1.25＝**0. | M存在／**HOLD：独立再計算・単位・条件** | `books/dioxin-guide/manuscript/chapter-12.md` |
| 12-7 | スパイク回収率、架空条件）**：標識標準を50 pg添加し、回収量40 pgなら \(R=40/50×100=\mathbf{80\%}\)。規格に定めた種類・許容範囲を確認し、**80%だから必ず合 | M存在／**HOLD：独立再計算・単位・条件** | `books/dioxin-guide/manuscript/chapter-12.md` |
| 12-8 | 質量分解能、架空条件）**：m/z 320付近のイオンについて、仮にΔm=0.032なら、R=320/0.032=**10,000**。これは計算練習であり公定法の設定値を示さない。 | M存在／**HOLD：独立再計算・単位・条件** | `books/dioxin-guide/manuscript/chapter-12.md` |
| 12-9 | 架空条件）**：面積比0.50、標識内標準量100 pg、RRF 1.25なら **40 pg**。全試料の4分の1を分析したのであれば、既補正でないとき元試料相当 **160 pg**。 | M存在／**HOLD：独立再計算・単位・条件** | `books/dioxin-guide/manuscript/chapter-12.md` |
| 12-10 | 液の注入量から元試料へ、架空条件）**：水試料4.0 Lを抽出し、最終液2.0 mLとした。2.0 µL注入分の対象量が（内標準補正等の結果として）0.040 pgだったとする。全最終液量は注入量の* | M存在／**HOLD：独立再計算・単位・条件** | `books/dioxin-guide/manuscript/chapter-12.md` |
| 12-11 | 仮想3成分のTEQ）**：成分A・B・Cの濃度10、4、2 pg/L、仮定TEF0.1、0.01、0.001なら、**1.0＋0.04＋0.002＝1.042 pg-TEQ/L**。実測質量濃度の和1 | M存在／**HOLD：独立再計算・単位・条件** | `books/dioxin-guide/manuscript/chapter-12.md` |
| 12-12 | 排ガスO₂補正、架空条件）**：12%O₂換算が必要な廃焼炉で標準乾き濃度0.80 ng-TEQ/m³、実測酸素9%なら、0.80×(21−12)/(21−9)＝**0.60 ng-TEQ/m³**。 | M存在／**HOLD：独立再計算・単位・条件** | `books/dioxin-guide/manuscript/chapter-12.md` |
| 12-13 | 試料換算検出下限、架空条件）**：装置の検出下限を0.020 pg/注入、注入量2.0 µL、最終液100 µL、元水試料2.0 Lと仮定する。最終液全量への係数は100/2＝50。元水相当の下限は0 | M存在／**HOLD：独立再計算・単位・条件** | `books/dioxin-guide/manuscript/chapter-12.md` |
| 12-14 | 目的による算入差、仮想異性体）**：Aは4.0 pg/L、TEF0.1でQL以上、Bは0.4 pg/L、TEF0.01でDL0.2～QL0.5の間、CはDL0.2 pg/L未満、TEF0.1とする。排 | M存在／**HOLD：独立再計算・単位・条件** | `books/dioxin-guide/manuscript/chapter-12.md` |
| 12-15 | 相対差、架空条件）**：二重測定の濃度が2.0と2.4 pg/Lなら、平均2.2 pg/L、二測定値の絶対差0.4 pg/L。平均に対する相対差を (／2.0-2.4／/[(2.0+2.4)/2]×1 | M存在／**HOLD：独立再計算・単位・条件** | `books/dioxin-guide/manuscript/chapter-12.md` |

#### 限定的な別式によるスポット算術点検（内容監修ではない）

- 第12章・計算例12-1の架空の3成分：`20×0.1 + 10×0.01 + 5×0.001 = 2.105` pg-TEQ/L。**算術値のみ独立一致**。仮定TEFの現実適用は評価対象外。
- 第8章・計算例8-2の酸素補正例：`50×(21−12)/(21−10) = 40.9` ppm（小数1位）。**算術値のみ一致**。この公式の施設区分・基準O₂への適用はHOLD。

## 7. 図版指示全124件＋付録1件（M・作画HOLD）

各図の独自制作指示の存在だけを示す。**完成図=0を前提とする（個別成果物の確認は未実施）**。

| 原稿 | 指示個数 | 指示番号 | 状態 |
|---|---:|---|---|
| `books/dioxin-guide/manuscript/chapter-00.md` | 5 | 0-1、0-2、0-3、0-4、0-5 | M指示のみ／HOLD清書・出典・正確性 |
| `books/dioxin-guide/manuscript/chapter-01.md` | 6 | 1-1、1-2、1-3、1-4、1-5、1-6 | M指示のみ／HOLD清書・出典・正確性 |
| `books/dioxin-guide/manuscript/chapter-02.md` | 3 | 2-1、2-2、2-3 | M指示のみ／HOLD清書・出典・正確性 |
| `books/dioxin-guide/manuscript/chapter-03.md` | 4 | 3-1、3-2、3-3、3-4 | M指示のみ／HOLD清書・出典・正確性 |
| `books/dioxin-guide/manuscript/chapter-04.md` | 9 | 4-1、4-2、4-3、4-4、4-5、4-6、4-7、4-8、4-9 | M指示のみ／HOLD清書・出典・正確性 |
| `books/dioxin-guide/manuscript/chapter-05.md` | 9 | 5-1、5-2、5-3、5-4、5-5、5-6、5-7、5-8、5-9 | M指示のみ／HOLD清書・出典・正確性 |
| `books/dioxin-guide/manuscript/chapter-06.md` | 9 | 6-1、6-2、6-3、6-4、6-5、6-6、6-7、6-8、6-9 | M指示のみ／HOLD清書・出典・正確性 |
| `books/dioxin-guide/manuscript/chapter-07.md` | 5 | 7-1、7-2、7-3、7-4、7-5 | M指示のみ／HOLD清書・出典・正確性 |
| `books/dioxin-guide/manuscript/chapter-08.md` | 15 | 8-1、8-2、8-3、8-4、8-5、8-6、8-7、8-8、8-9、8-10、8-11、8-12、8-13、8-14、8-15 | M指示のみ／HOLD清書・出典・正確性 |
| `books/dioxin-guide/manuscript/chapter-09.md` | 12 | 9-1、9-2、9-3、9-4、9-5、9-6、9-7、9-8、9-9、9-10、9-11、9-12 | M指示のみ／HOLD清書・出典・正確性 |
| `books/dioxin-guide/manuscript/chapter-10.md` | 13 | 10-1、10-2、10-3、10-4、10-5、10-6、10-7、10-8、10-9、10-10、10-11、10-12、10-13 | M指示のみ／HOLD清書・出典・正確性 |
| `books/dioxin-guide/manuscript/chapter-11.md` | 14 | 11-1、11-2、11-3、11-4、11-5、11-6、11-7、11-8、11-9、11-10、11-11、11-12、11-13、11-14 | M指示のみ／HOLD清書・出典・正確性 |
| `books/dioxin-guide/manuscript/chapter-12.md` | 20 | 12-1、12-2、12-3、12-4、12-5、12-6、12-7、12-8、12-9、12-10、12-11、12-12、12-13、12-14、12-15、12-16、12-17、12-18、12-19、12-20 | M指示のみ／HOLD清書・出典・正確性 |
| `books/dioxin-guide/manuscript/appendix.md` | 1 | A-1 | M指示のみ／HOLD |

## 8. 出典・既存レビューと監査責任範囲

- 章末`Sxx`出典は編集用ローカルラベルであり、章をまたぐ`S01`は同一文献を必ずしも意味しない。個別URLがないものはHOLD。既存レビューの部分PASSは新しいPに自動昇格しない。
- **出典の原典照合**：第2節・2.1に記載した一次事実のみ。章末の参照URLすべての全文や改正履歴を検証したわけではない。
- **章別レビュー**：0章は章末校閲注記、1～12章は`reviews/chapter-XX-review-v0.1.md`、付録は`reviews/appendix-review-v0.1.md`。それぞれの未解決事項をL/T/C/E/N/F/W/R群に集約した。特にレビューが明記するHOLDは元ファイルから消さない。

| 章・付録 | 章末出典ラベル（機械抽出） | レビュー参照 | 次に独立監査する論点 |
|---|---|---|---|
| 0 | 原稿末尾を直接確認 | `原稿第0章の章末注記` | TEF/TEQと法令の定義：HOLD |
| 1 | 原稿末尾を直接確認 | `books/dioxin-guide/reviews/chapter-01-review-v0.1.md` | 法令・届出・TDI・環境基準：HOLD |
| 2 | S01、S02、S03、S04、S05、S06、S07、S08、S09、S10 | `books/dioxin-guide/reviews/chapter-02-review-v0.1.md` | 経緯・古い指針の扱い：HOLD |
| 3 | S01、S02、S03、S04、S05、S06、S07 | `books/dioxin-guide/reviews/chapter-03-review-v0.1.md` | 2024統計と差替え：HOLD |
| 4 | S01、S02、S03、S04、S05、S06、S07、S08、S09、S10、S11、S12、S13、S14、S15、S16 | `books/dioxin-guide/reviews/chapter-04-review-v0.1.md` | 化学構造と法定TEF：HOLD |
| 5 | S01、S02、S03、S04、S05、S06、S07、S08、S09、S10、S11、S12、S13、S14、S15 | `books/dioxin-guide/reviews/chapter-05-review-v0.1.md` | 前駆体/de novoと反応条件：HOLD |
| 6 | S01、S02、S03、S04、S05、S06、S07、S08、S09、S10、S11、S12、S13、S14、S15 | `books/dioxin-guide/reviews/chapter-06-review-v0.1.md` | TDI/TWIと疫学：HOLD |
| 7 | S01、S02、S03、S04、S05、S06、S07、S08、S09、S10、S11、S12、S13 | `books/dioxin-guide/reviews/chapter-07-review-v0.1.md` | 施行状況、自治体と差替統計：HOLD |
| 8 | S01、S02、S03、S04、S05、S06、S07、S08、S09、S10、S11、S12、S13、S14 | `books/dioxin-guide/reviews/chapter-08-review-v0.1.md` | 燃焼・集じん・吸着・分解：HOLD |
| 9 | S01、S02、S03、S04、S05、S06、S07、S08、S09、S10 | `books/dioxin-guide/reviews/chapter-09-review-v0.1.md` | 5施設・新旧・排出基準とO₂：HOLD |
| 10 | S01、S02、S03、S04、S05、S06、S07、S08、S09、S10、S11 | `books/dioxin-guide/reviews/chapter-10-review-v0.1.md` | 水相/SSと残渣への負荷移行：HOLD |
| 11 | S01、S02、S03、S04、S05、S06、S07、S08、S09、S10 | `books/dioxin-guide/reviews/chapter-11-review-v0.1.md` | 水質19号と下水道：HOLD |
| 12 | S01、S02、S03、S04、S05、S06、S07、S08、S09、S10、S11 | `books/dioxin-guide/reviews/chapter-12-review-v0.1.md` | JIS・ND・分析QA/QC：HOLD |
| 付録 | S01～S08（原稿の記述による） | `books/dioxin-guide/reviews/appendix-review-v0.1.md` | 数値表・公式・付録D-5・索引：HOLD |

## 9. P0以降の対応順と更新ルール

1. **P1-A（S0）**：L-001～006の施行版・附則・適用区分をe-Gov原文でマトリクス化し、9章の表・問題・付録Aに対応付ける。法令の「施行日」と「試験年度の適用基準日」は別欄。
2. **P1-B（S0）**：L-007～011の令別表第二19号、排出水・排除水、ND処理を第11・12章で照合。該当する個別装置・処理方法・除外を全号で記載。
3. **P1-C（S0）**：L-012～016の法定TEF29行、TDI、JIS K0311/0312全文と正誤票を照合。出版社プレビューだけで「完了」にしない。
4. **P1-D（S0）**：T-017～019の2024年暦年／2024年度、公表日と差替後の表数値を照合し、対応する図・本文数値に確定版を記す。
5. **P2（S0/S1）**：E-021、N-022、C-020の81問/全肢、52計算（さらに番号外計算・付録）、科学記述の独立検算・原著照合を進める。
6. **P3～P4**：F-023の図125指示、章間参照、索引ロケータを改善し、必要説明は削らずに組版・ページ数を検証。独立承認を全分野で記録するまで出版NO-GO。

**各台帳行の解消条件**：①原典の特定URL・条/表/頁、②施行日/改訂日/対象年度、③採否の結論と例外、④修正したGitHubファイル・コミット、⑤再計算／全肢レビューの責任者・日付を追加する。根拠が不十分ならHのままとし、MだけでRへ進めない。


## 10. P1-第1段階（2026-10-14）の追補：対象条文の原典確認と原稿修正

- 本台帳（P0）の27件の問題登録を維持し、**P1初回の限定的原典突合**の経過を別ファイル`reviews/cross-chapter-legal-standards-audit-v0.1.md`に記録した。**全S0・S1の出版HOLDは維持**。今回の対応を「法令独立監査が全件完了」と解釈しない。
- **L-003～006**：施行令別表第一と施行規則別表第一、附則第2条・別表第二の指定規模・新旧区分・表値を部分照合（P）。同一廃棄物焼却施設の合算後の排出口別適用、新旧混合炉はHOLD。第9章9.3に**1999年着工で50kg/h以上／200kg/h未満の境界例**を補った（コミット`d7b334e`）。
- **L-007～009**：令別表第二の第1・14・15・18・19号の要件、排水10 pg-TEQ/Lと一般水質1 pg-TEQ/Lの区別を部分照合（P）。**残る14類型と引用別法令・個別受入先はHOLD**。第11章の現行説明をこの回では書き換えていない。
- **L-010／E-021**：規則第3条の通常QL未満0と例外方法を部分照合。経済産業省PRTR Q&A問6-2-5・7-9に基づき、**特措法指定施設等に係るダイオキシン類は一般物質向けQL/2で機械的に再計算しない**旨を第12章12.5と付録B・Dに追記（コミット`a6d59b5`・`4e03777`）。すべてのPRTR用途の検証完了ではない。
- **L-014～016**：環境省のK0311:2020・K0312:2020の規格案内、日本規格協会のK0311:2020正誤票（2021年5月）を公的公開情報から確認（P）。**JIS全文・正誤票中身・2026年の規格最新状態はHOLD**。
- **L-001／L-002**：e-Gov履歴に2026年法律43号と環境省令19号の施行日表示を確認。ただし法律43号には公的検索表示上**2026年9月16日**と法令版ID**20260918**の経路差が見られるため、**最終正本・改正施行期日・試験適用版の差分はHOLD**。推測で確定しない。
- 修正は説明の**追加・明確化のみ**。章の五択、計算例、知識IDを削除していない。原稿・付録は引き続き`drafting`/`publication_approval: false`。
- 次の最重要ゲートは**法令施行日差異・第9章附則適用**、次いで**第11章19号全類型の原文判定、別表第三全TEF・JIS全文**。P1監査対象全範囲の終了時に本台帳の該当行を確定させる。
- **L-012（追加）**：施行規則別表第三の **PCDD 7＋PCDF 10＋DL-PCB 12＝29係数**をe-Gov公開係数欄および規則様式第6の数値欄からP1横断台帳に採録。第4章表4-4の**9抜粋行は9/9数値一致**（原稿照合M）。しかし、**2026年7月1日改正の影響、対象試験年度の施行版、略記と正式異性体名・構造の照合はHOLD**。監査記録の3.4節、コミット`ef13195e`を参照。


## 11. P1-B 2026-10-14：水質19号の全件クロスウォークと原稿更新

- 新規根拠台帳：`reviews/water-facility-19-crosswalk-v0.1.md`（[GitHub](https://github.com/rhodanus2179/dioxin-studyware/blob/main/books/dioxin-guide/reviews/water-facility-19-crosswalk-v0.1.md)）。**現行e-Gov施行令別表第二19号**と**神奈川県2025年10月9日更新一覧**を逐号照合し、用途・製法・設備・例外・関連原稿・検証状態を記載。現行e-Govの政令施行履歴は**2019年1月1日施行版**が表示される。
- **L-007 / L-008（部分照合P／残余HOLD）**：全19号の施設区分と主な工程・除外を原典と対照。第11章表11-12は号番号**1～19すべて存在・重複0**。付録A-4の結合行「3・4」を展開して**19/19**。**重大な号番号・指定操作の明白な不一致は今回の対比では検出しなかった**。号番号以外の現場適用・排水経路や条例・改正附則は未解消。
- **L-007追加W19-01（S0）**：水質16号は廃棄物処理法施行令**第7条12号の2・13号**の指定であり、同条**12号の焼却施設はこの引用に含まれない**。第12号の2のPCB汚染物付着等の括弧書きを追記。引用政令の2026年4月1日施行版の改正差分はHOLD。
- **L-007追加W19-02（S0）**：水質17号の対象はオゾン層保護法施行令**別表第一1・3・6項**、方法はプラズマ又はダイ特法施行規則1条の廃棄物混焼・液中燃焼・過熱蒸気反応。第11章・付録に反映。個別の物質名・混合物の法令適用はHOLD。
- **L-007追加W19-03（S1）**：2001～2002年の古い環境省改正通知には、追加された施設による旧番号体系がある。過去問を旧号番号で照合するときは対象試験年度の**基準日**に戻る。原稿・付録へ注意書きを追加。
- **L-008（18・19号）**：1～17号と19号由来の下水（18号）、1～17号由来の水に条件があり公共用水域へ排出されるものを除く非終末水処理施設（19号）の係り受けを公開別表と再対照。実施設の行政判断はHOLD。
- **E-021（第11章限定）**：原稿の五択7問の答え表示・五肢存在を全件検出。主要法定施設番号のスポット点検で**明白な答え矛盾0/7問**、11-7の単位・算術1.6 µg/日も別式一致。**全35肢の独立内容査読・著作権類似性はHOLD**。
- 対応コミット：第11章`569cd0dc`、付録`2a3f0d52`、19号監査台帳初回`602bd6d3`、設問チェック追記`1a1ee0d0`。**P1-Bは部分照合の記録であり「出版法令監修PASS」ではない**。全書は`drafting`・`publication_approval: false`・**出版NO-GO**維持。


## 12. P1-C（2026-10-14）：法令組織改編・JIS D.3正誤票の原典確認と修正

- **独立資料**：`reviews/legal-amendment-jis-errata-audit-v0.1.md`（[GitHub](https://github.com/rhodanus2179/dioxin-studyware/blob/main/books/dioxin-guide/reviews/legal-amendment-jis-errata-audit-v0.1.md)）。原典URL、公布・施行・確認・正誤票作成日、確認範囲とHOLDを区分。
- **L-001 S0＝HOLD継続**：e-Gov現行履歴は法律43号**2026-09-16施行**、二次配信で**20260918版ID**の齟齬あり。施行期日政令／法律43号の改正条項ごとの新旧対照、試験適用日が未解消。**修正は実施したが解決済み扱いにしない**。
- **L-002 S0＝P部分確認・残余HOLD**：2026-06-30環境省令19号（2026-07-01施行）の公式概要は、環境省の**地方環境事務所／所長を地方環境局／局長に整理**する行政組織名称改正（e-Gov公示195260028）。従来の「改正内容全く未確認」から一段前進。**別表第一～第三を変更していないことの全条新旧対照は未実施**。第1・9章と付録に制度説明を補記した（`b6266082`、`bf8abef7`、`52ae1f57`）。
- **L-014／L-016 S0＝P部分確認・残余HOLD**：JSAが配布する**K0311:2020の2021-05-15作成正誤票**をWeb PDF文字情報で取得。**附属書D.3のC_DL→S_DL、設定濃度に関する説明の修正**が対象。従来「正誤票の存在だけ確認」から「具体的な訂正位置と内容を確認」に更新（第12章`c231d456`）。PDF画像のスクリーンショット取得に失敗したため視覚校正と全文本文での影響はHOLD。
- **L-015 S0＝HOLD継続**：環境省一覧からK0312:2020の書誌情報を確認。JSA正誤票一覧には**K0312:2005の2009/11**があるが**2020版へそのまま継承させない**。K0312:2020の現行状態・全文実務方法の確認は未終了。
- 改訂した第12章の**11問・計算15例・図制作指示20件**、付録の51チェックは削減なし。**P1監査のS0全面解除や`publication_approval: true`への格上げは禁止**。次は法律43号の完全新旧対照、JIS正誤票反映後のD.3全文、2026年度試験出題基準日、T-018/019の差替統計。


## 13. P1-E：JIS K0311公開本文の条項別監査（2026-10-14）

- 追加した監査記録：`reviews/jis-k0311-public-text-clause-audit-v0.1.md`（[GitHub](https://github.com/rhodanus2179/dioxin-studyware/blob/main/books/dioxin-guide/reviews/jis-k0311-public-text-clause-audit-v0.1.md)）。民間サイトのK0311:2020公開本文を、11の条項群に分けて確認。ただし**JISC公式規格票の内容を完全検証したものではない**。
- L-014：第12章を補強。5.5の採取計画用検出下限1/30以下、5.6の等速吸引相対誤差−5～＋10％と低ダスト等の例外、6.1のクリーンアップスパイクの抽出前添加、7.1のGC-MS分解能10,000以上（場合により12,000）、7.5の5回以上・3σ/10σ、7.6の回収率サンプリング70～130％・クリーンアップ50～120％と逸脱時の対応を編集。**非公式サイトの条項照合（W）であり、公式全文照合（R）ではない**。
- L-016：公式JSA正誤票（2021年5月、附属書D.3）のC_DL→S_DLは、**酸素濃度補正した評価値を使う場合の必要採取量**の文脈で、**計画で設定する検出下限S_DL（5.5）**を示す訂正。7.5.3の**実試料条件から求めるC_DL**まで置換しない。非公式公開本文のD.3は訂正前の表記のため採用しない。PDF正誤票のテキスト確認は済んだが画像の直接校正はHOLD。
- L-015：**JIS K0312:2020は引き続き全文未閲覧**。K0311の許容値・操作を水質へ無条件転用しない。
- GitHub：第12章`d849bf7a`、第9章`2216f059`、付録`c96d413f`、監査記録初版`56726677`。**全書出版NO-GO、原稿の`publication_approval: false`を維持**。


## 14. P1-F（2026-10-14）：非公開閲覧資料を用いた第12章55肢・15計算例の点検

- **追加した独立成果物**：`reviews/ch12-questions-calculations-primary-review-v0.1.md`（[GitHub](https://github.com/rhodanus2179/dioxin-studyware/blob/main/books/dioxin-guide/reviews/ch12-questions-calculations-primary-review-v0.1.md)、commit `89e85646`）。**五択11問×5肢＝55肢**の個別判定理由を、引用可能なJIS K0311節・原稿内の算術・法令やK0312など別資料のHOLDに分類。原稿の正答キー11/11件、今回照合範囲で**二重正答・明白な誤採点0件**（最終版・法令専門監修はHOLD）。
- **C-012～C-026（第12章全15計算例）**：全例を独立再計算し**15/15算術一致**。とくに12-3理想等速2.1715 m³/h、12-4乾き標準体積1.3472m³、12-9 40pg→160pg、12-12 O₂補正0.60 ng/m³、12-14目的別TEQ0.400／0.414、12-15自作相対差18.18％を検算。媒体・法令条件は算術PASSと区別。
- **L-014／L-016（重点目視進捗）**：閲覧用K0311資料で5.6／6.1／7.5／7.6／9.2／附属書D/Eの節番号と内容を確認。**附属書D.3の表示は訂正後`S_DL`**であること、附属書E.3（参考）は個別TEQを中間丸めせず**合計TEQ2桁**で整理することを確認。**JSA正誤票の公開PDF画像そのものの校正とJISC公式オンライン表示の同一性確認はHOLD**。閲覧資料本文・ページ画像・ウォーターマーク等はGitHubに保存していない。
- **原稿改善**：第12章`204aa0ec`にて**TEQ数式Markdown表示修復**、教材の途中計算と排ガスTEQ報告の有効数字を区別、RRF簡略演習をJIS公定式と誤認しない注記を追加。K0312水、環境測定、法定ND区分は別法令・規格HOLD。
- **管理上の残論点**：問題Q12-1／12-8／12-9／12-11の水・環境調査・簡易法・JSA規格書誌などはK0311だけで独立完結しない。これらを`R（最終PASS）`へ格上げしない。第12章11問・15計算は件数維持、`publication_approval: false`、**出版NO-GO**維持。


## 15. P1-G（2026-10-14）：JIS K0312:2020（水）・法定TEQ・環境水質NDの横断照合

- **新規原典監査**：[K0312水質・TEQ横断監査v0.1](jis-k0312-water-teq-crosswalk-v0.1.md)（初回commit `9fe58527`）。公開掲載されるK0312:2020の**採取・前処理・同定・検出下限・品質管理・表示（11条項群）**、e-Gov施行規則第2/3条、環境省環境水質通知を**別の証拠区分で整理**。JISC/JSA正規全文との同一性はHOLD。
- **L-015 S0（W+P+M部分進展、Rには非昇格）**：JSA書誌・環境省掲載でK0312:2020の存在を確認済み。非公式公開本文の5.2.3では**採水容器の試料水による共洗いをしない**、5.4は遮光／遅延時0～10℃、6.1はろ液・ろ過残さ又は固相捕集、7.6・9.2.1は**クリーンアップスパイク50～120％**、9.2.4は**平均に対する各二重測定値±30％**を照合。K0311のサンプリングスパイク条件を水へ自動移植しない。
- **L-010～011 S0（P部分確認／現行マニュアルHOLD）**：特措法**施行規則第2条第1項第2号は排出水の測定にK0312**、同**第3条第1項は通常のTEQ換算でQL未満の異性体を0**とする。これに対し、環境省2000年施行通知の**水質環境調査**ではDL以上QL未満の数値をそのまま、DL未満をDL/2とする歴史的な取扱い。2026年の媒体別告示・調査マニュアルは最終照合HOLD。
- **E-021 / C-024～026（部分進展）**：第12章Q12-1・12-8・12-9・12-10・12-11、計算例12-10・12-13・12-14・12-15を横断点検。**正答変更なし**。計算12-15の自作2値相対差**18.2％**に対し、水規格の9.2.4は個々の値の平均からの偏差を比較し**2.0/2.4の例は±9.1％**と区別するよう原稿を補足。既存算術PASSを維持し、公定分析の全面適用判断はHOLD。
- **原稿反映**：第12章`59c74e9b`、付録`f181f5df`。採水・残留塩素・遮光・冷却、採水計画1/30以下、抽出法、クリーンアップ回収、二重測定を追加。**11問55肢・計算15・図制作指示20、付録51チェックは維持**。
- **機密資料の取扱い**：以前受け取った閲覧専用JIS K0311資料本体・ページ画像・識別情報は**外部へ送信せず、GitHubにも記録していない**。本更新は公開K0312資料の条項番号・URLと本書独自の監査所見のみ。
- **未解決**：①JISC/JSA公式K0312の最新全文（版・正誤票含む）、②現行環境水質測定・NDの行政規定、③参考附属書JDと法定TEFの全異性体・報告桁の照合、④簡易法の法令適用、⑤水測定実務の妥当性・図版完成監査。**出版NO-GO、`publication_approval: false`維持**。

## 16. P3-A 第12章20図の仕様台帳・初回5図SVG試作（2026-10-14）

- [P3-A全20図の仕様・QA台帳](ch12-figure-spec-and-qa-v0.1.md)に、現行第12章の作図指示**20/20**を抽出し、目的・必要情報・媒体・出典・HOLD・独自性・個別QA状態を登録した。
- **優先5図を編集可能SVGとして新規作成**：`assets/figures/ch12/figure-12-02.svg`（測定フロー）、`figure-12-04.svg`（等速吸引）、`figure-12-10.svg`（スパイク）、`figure-12-17.svg`（DL/QL、S_DL/C_DL）、`figure-12-20.svg`（JIS・マニュアル・法令・媒体）。**残15件は仕様のみ、未作図**。図面は原図コピーではなく独自の幾何図形と説明で構成した。
- **検証区分**：作図指示所在（M）・SVGテキストや座標の概算重なり検査（M、暫定PASS）。**SVG実レンダリング・モノクロ印刷の人手目視、公式JIS正文・媒体別法的適用・著作権最終監修はHOLD**。五図を一括して出版品質完成と判定しない。
- 第12章原稿と付録の`drafting`／`publication_approval:false`は変更せず、**NO-GO**を維持。

## 17. P1-D 2024統計3系統・公式原典と差替日の特定（2026-10-14）

- [統計差替監査v0.1（原典特定段階）](official-statistics-2024-replacement-audit-v0.1.md)を新規保存。
- **T-017**：2024**暦年**排出インベントリー、環境省**2026-03-24**公表ページを特定。**T-018**：2024**年度**環境調査の**2026-07-15差替**を公式一覧で特定。**T-019**：2024**年度**法施行状況の**2026-10-09差替**を公式一覧で特定。
- 初回の取得・確認は**公表ページの所在・日付・差替対象に限るP**。**差替後Excel原表を使った母数・内訳の再集計、各図表との独立突合は未実施でHOLD（S0維持）**。古い報道発表の見出し数値を差替後の原表値として確定しない。
- 次段：差替の訂正通知・訂正後Excelを入手→発生源/媒体/施設の分母・合算・年度を独立検算→第3・7・11章と付録の数値に反映。全書は**出版NO-GO**。

## 18. P1-D統計PDFの限定再検算（2026-10-15）

- [P1-D統計監査v0.2](official-statistics-2024-replacement-audit-v0.2.md)に公式PDFの表値と独立計算結果を登録。[媒体別CSV](data/official-env-survey-2024-summary-v0.1.csv)、[当初発表・差替差分CSV](data/official-env-survey-2024-correction-crosswalk-v0.1.csv)、[独立算術CSV](data/official-statistics-2024-arithmetic-checks-v0.1.csv)を追加した。
- **T-018 S0部分P＋算術PASS／原表HOLD**：差替後総括表の大気512、水質1273、底質1011、地下水445、土壌659地点を確認。4種類の内訳×3指標＝**12件の独立加算一致**。原稿第3章表3-5はすでに差替後PDFと一致し、数値修正不要。
- **T-017 S0部分P＋代表推計算術PASS／全表HOLD**：法規制対象外小型炉9.6、火葬場1.7～4.0、電炉14.9、焼結3.8の推計原単位算術を独立再現。全国総量94～97と目標対象92の対象範囲を再確認。全発生源上下限の検算・原数値・TEF条件は未了。
- **T-019 S0部分P＋算術PASS／訂正表HOLD**：年度末大気施設7740、水質施設3174、水質事業場1355、測定報告対象大気7760・水質560の異なる母数を区別。2026-10-09差替の訂正箇所別・Excel全表照合はHOLD。
- 個人識別情報のあるJIS資料は使用・GitHub保存せず、全書`status: drafting`／`publication_approval:false`、出版NO-GOを継続。
