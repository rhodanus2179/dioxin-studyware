# 過去問を知識マップに対応付けるための規約

## 対象

- R03–R07のダイオキシン類概論（科目14、毎年15問）および特論（科目15、毎年25問）。
- 正解表を年度ごとに参照する。
- 公害総論は後回し。ダイオキシン類関係に重なる論点の参考として扱う場合は区別する。

## 公開データの最小単位

- question_id: `R07-G-Q01`, `R07-A-Q01` のように年度・科目・設問番号。
- choice_id: `R07-G-Q01-C1` のように選択肢1～5。
- knowledge_ids: 知識IDを複数ひも付け可。
- assertion_type: definition / number / law / mechanism / technology / measurement / exception / other。
- reasoning: **自分の言葉**で「この選択肢をどう判断するか」を要約。公式問題本文の転載はしない。
- source_ids: 正誤を検証する一次資料ID。疑問があれば `needs-review` にする。
- result: 正・誤・未判定と、出題形式に合わせた理由。
- mapping_status: unreviewed / mapped / needs-new-knowledge / verified。

## 注意

- 設問が問う主論点1つだけで分類しない。正しい選択肢も誤った選択肢も理由を対応付ける。
- 「すべて」「必ず」「のみ」など、例外で判断が変わる表現を記録する。
- 当時の正答と現在の法令の差を調査する。改正前と改正後のどちらかを必ず記録する。
- 技術的・科学的説明は一次資料や標準資料で裏付ける。推測で誤答理由を補わない。
- 著作権が不明な問題文・図・選択肢は原文のまま公開しない。

## 突合テンプレート

`docs/research/past-exam-mapping-template.csv` の空テンプレートを複製し、年度と科目ごとに埋める。暫定的な紐付けは一律 `mapping_status=unreviewed` から開始する。

## 重要度の付与

現段階では `unrated` とし、過去問コーディング後に頻度・広がり・誤答率・制度的重要度の4軸で決める。直近5年の観察は**将来の出題を保証しない**。

## 第1パス実施後（2026-10-09）

`past-exam-question-index.csv` および `past-exam-choice-index.csv` を作成。**全問の主題仮分類**のみ完了し、選択肢の正誤・個別知識の対応は依然として `unverified`。詳細は `past-exam-analysis-status.md`。
