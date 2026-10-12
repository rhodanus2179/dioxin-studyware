# mainブランチ保護：導入手順と監査記録

作成日：2026-10-12。対象：`rhodanus2179/dioxin-studyware` の `main`。**この文書は設定手順であり、保護を有効化したことの証明ではない。**

## 現状と制約

2026-10-12にGitHub APIで`/repos/rhodanus2179/dioxin-studyware/rulesets`を照会し、**ルールセット0件**を確認。ブランチ保護API（`branches/main/protection`）は連携アプリのアクセス制限で403のため、従来型ブランチ保護の有無はこの方法では判定不能。第三者レビューではmainに保護設定なしと指摘されている。**連携アプリにはルールセット管理APIへの書込権限がないため、設定を代行したとは記録しない。**

## GitHubの管理画面で設定する

1. [リポジトリのSettings](https://github.com/rhodanus2179/dioxin-studyware/settings) → **Rules → Rulesets**（表示が異なる場合は Code and automation → Rulesets）。**New ruleset → New branch ruleset**。
2. Ruleset名 `main-quality-gates`、Enforcement **Active**、Target branchesを**Default branch（main）**に限定。
3. **Require a pull request before merging**をON、**Require approvals = 1**。作者以外の書き込み権限をもつGitHubアカウントによる承認を取得する（自分自身のPRはApproveできない）。
4. **Require status checks to pass**をON。現在のActionsワークフロー `Validate studyware` のジョブ `static-checks` を、GitHubが表示する**実在のチェック名**から選択。必要に応じて**Require branches to be up to date**を選択。
5. **Block force pushes / Restrict deletions**などを有効にする。管理者バイパスの可否を決め、保護の目的に反しないよう安易なバイパスを避ける。
6. Save後、Rulesets画面でActiveになっていることと、**PR #3のChecks / Review requirements欄**に必須承認・CIが出ることを確認し、設定URL・日時・確認者をPRに記録する。

公式参照：[GitHub: Creating rulesets for a repository](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/creating-rulesets-for-a-repository)／[Available rules for rulesets](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/available-rules-for-rulesets)。

## 特に重要な注意

- **同一アカウント `rhodanus2179` が投稿した `COMMENTED` レビュー #5486797058 は必須Approveを満たさない。** 別アカウントの適任者に書込み権限を付与・レビュー依頼する必要がある。匿名のレビュー報告やチャット上の「APPROVE」宣言はGitHub正式承認を代替しない。
- ブランチに新コミットを追加した場合、設定によって既存承認の取り消し・最新コミットへの再承認が必要になる。**必要な文書・テスト修正を先に済ませてから**別アカウントへ承認依頼する。
- `HOLD175` の出版承認や `no-explicit-HOLD` による公開許可をこのブランチ設定だけで認めるものではない。アプリ公開側は[明示的許可ルール](publication-approval-policy.md)を適用する。

## 設定完了記録（未入力）

- [ ] Ruleset `main-quality-gates` をActive化した
- [ ] PR必須と1件以上の他者Approveを設定した
- [ ] `static-checks` を必須ステータスチェックにした
- [ ] PR #3で制約が実際に表示されることを確認した
- 管理画面確認者・日時：**未記入**
- 証跡URL：**未記入**
