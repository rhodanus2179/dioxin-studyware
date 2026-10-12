# PR #3 M07例外承認とM08最終マージ前確認（2026-10-12）

## プロジェクト責任者による方針変更

2026-10-12、ユーザーは「**別アカウントからのapproveができません。スキップして次に進めてください。**」と指示した。これを**PR #3に限り、M07の別アカウントGitHub `APPROVE` 要件を省略する決定**として記録する。

これは**GitHub上の`APPROVED`レビューが存在するとの宣言ではない**。また、この指示は**最終的な`main`マージ操作やPR Ready化を個別に明示したものではない**ため、M08の実操作の承認には読み替えない。

## M07に関する代替的な品質証跡

- 2026-10-12、[レビュー #5486797058](https://github.com/rhodanus2179/dioxin-studyware/pull/3#pullrequestreview-5486797058)で研究基盤統合について**内容GO**と評価され、4件の改善提案を受けた。
- レビューはPR作成者と同一GitHubアカウント `rhodanus2179` の**`COMMENTED`**であり、独立アカウントの公式Approveではない。別個の権限者による保証も意味しない。
- [第44パス対応記録](pr3-third-party-review-response-20261012.md)に、M06スナップショット更新、README改善、公開演習のfail-closed化、保護設定手順を記載。コミット `983d000beef8b9464e84b2c4f877218196516635` のCI [run 38208310544](https://github.com/rhodanus2179/dioxin-studyware/actions/runs/38208310544)は全ジョブ成功。
- 上記とユーザーの明示的な判断により、**M07=`waived-by-owner-after-content-review`**。この例外を今後のすべてのPRに自動適用しない。

## M08プレフライト：手続と対象の分離

| 項目 | 2026-10-12の確認（省略判断前HEAD `983d000beef8`） | 今回の対応 |
|---|---|---|
| 競合 | [PR #3](https://github.com/rhodanus2179/dioxin-studyware/pull/3) `mergeable=true` | マージ操作の直前にも再検査 |
| 最新CI | Actions `38208310544` = `success` | **M07省略記録コミット後のCIを改めて確認** |
| `main` | commit `323a05cc31bb8bde878dd44740c9e5c02382d09c` | マージ直前のターゲットSHA・競合を再確認 |
| 保護ルール | GitHub `branches/main` APIの`protected=false`、`protection.enabled=false`。Rulesets APIは `[]` | **現状、別アカウント承認必須ルールはない**。将来CI必須の保護設定を推奨 |
| 重要な不確実性 | 現行既知P0=0、研究選択肢175件HOLD、科学・出典監査未完成 | `HOLD`は未解除。統合しても教材完成/公開承認ではない |
| GitHub正式Approve | **なし**。既存レビューは `COMMENTED` | **ユーザー判断によりM07だけ省略** |
| Ready / Merge | **Draft / 未マージ** | **M08の人間による統合許可が未取得のため維持** |

## 次に必要な操作

1. M07例外記録を含む**新しいPR HEADのCI成功**を確認し、エラーがあれば修正する。
2. `mergeable=true`、保護ルール、レビュー状態、現在のmain SHAを再確認する。
3. **プロジェクト責任者がPR #3のReady化・mainへの研究基盤マージを明示承認**した場合にのみ実際の操作へ進む。
4. マージ後も、科学的独立検証・JIS正本・未制作の10章・19図・研究選択肢の公開HOLDなど、P01–P05を後続工程として扱う。

M07省略は**管理上の例外**であり、他者の正式なコードレビューを受けたと偽装せず、研究品質や権利面のリスクを消去するものでもない。
