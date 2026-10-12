# 過去問研究データと公開用演習を区別する許可規則 v1

2026-10-12。第三者レビュー指摘「`no-explicit-HOLD`を公開承認に読み替えない」を強制するための**fail-closedルール**。

## 基本判断

- `docs/research/`の過去問1,000選択肢について、`publication_hold="no-explicit-HOLD"`は**保留理由が明示されていない**という内部状態にすぎず、**公開承認ではない**。`final_publication_approval="not-authorized"`の研究記録も公開してはならない。
- **無記載・未定・通常説明草稿・P0解消・HOLD解除はどれも掲載許可の積極的な証拠にならない**。
- `data/questions.json`は**非公式オリジナル演習のプロトタイプ表示用ファイル**。ここに格納された9問のみ、`source_type="original"`と`publication_approval="approved-original-prototype-v1"`を明示的に両方満たし、研究用ステータスの存在しないレコードだけ画面に表示する。これは**試作画面での表示許可**であり、科学的・法的な最終監修済みの宣言ではない。
- 将来、過去問由来の研究情報をアプリに取り込むには、**別ゲートで原題・出典・解説・権利の個別監査を実施し、正式な出版許可を別の明示ステータスとして追加**する。現行のプロトタイプ用許可を過去問データへ付けて回避してはならない。

## 実装とテスト

`js/publication.js` の `isApprovedOriginalPrototypeExercise` / `selectPublicPrototypeExercises` による**陽性許可型フィルタ**を `js/app.js` の読み込み直後に適用し、既定では**全問除外**。 `tests/validate-publication-allowlist.mjs` で9問の現行表示と、`publication_hold`に`no-explicit-HOLD`を持つ行、無承認、`not-authorized`、研究ID、異なる出自の問題等が表示されないことを検証する。

### 安全性の境界

この制御は**アプリの問題表示・出題リストへの取り込み**を禁止するもので、GitHubリポジトリ自体の閲覧や、ルート配置のGitHub Pagesから配信される生CSV・研究ファイルへのアクセスを秘匿するものではない。**非公開資料を守るには、公開リポジトリ内にそもそも置かないことが必要**。`tests/validate-public-source-boundary.mjs`はその補助的な識別子検査であり、機密データの完全発見や著作権判定を保証しない。

将来、教材配信時に研究CSVを隠したいなら、GitHub Pagesの公開対象から`docs/research`を排除できる**ビルド出力先専用ディレクトリ**を設ける。静的ルート全公開の設定では研究資料もURLで閲覧できるため、アプリ画面のフィルタと配信境界は別に設計する。
