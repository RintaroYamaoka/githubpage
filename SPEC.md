# コマンドプロンプト練習ゲーム 仕様書

GitHub Pages で公開するブラウザ完結型のコマンド練習Webアプリ。

---

## 1. ゲームシステム

### 1.1 プラットフォーム選択
| 選択肢 | シェル | プロンプト |
|--------|--------|------------|
| Mac | bash / zsh | `$ ` |
| Windows | PowerShell / CMD | `PS>` |

### 1.2 難易度
| 難易度 | 表示 | プレイ内容 |
|--------|------|------------|
| イージー | 作業内容 + コマンド | 表示されたコマンドをそのままタイピング |
| ノーマル | 作業内容のみ | 自分で考えてコマンドをタイピング |
| ハード | 連立した作業内容 | 複数作業を自分でコマンドをタイピング |

### 1.3 作業内容の表示ルール
- わかりやすい日本語で表示
- 例：「projectフォルダに移動後、testファイルを作成する」
- 技術用語を避け、誰にでも伝わる表現

### 1.4 ギブアップ
- **ギブアップ**ボタンで正解を即表示
- その問題はスコア加算なし（または減点／コンボリセット）
- 次の問題へ進む

### 1.5 ゲームシステム参考
- タイピング練習サイト（寿司打、e-typing等）を参考
- スコア、コンボ、正確率、タイムなど

---

## 2. コマンド一覧

### 2.1 Mac（bash/zsh）
- 基本: `pwd`, `cd`, `ls`, `ls -la`, `mkdir`, `touch`, `rm`, `rm -rf`, `cp`, `mv`, `cat`, `clear`
- Git: `git status`, `git add .`, `git commit -m "msg"`, `git push`, `git pull`, `git checkout -b`, `git branch`
- その他: `npm install`, `npx create-react-app`, `python -m venv venv` 等

### 2.2 Windows（PowerShell）
- 上記と同等のPowerShell/CMDコマンド
- `Get-Location`, `Set-Location`, `Get-ChildItem`, `New-Item`, `Remove-Item` 等

---

## 3. UI・画面構成

### 3.1 画面遷移
```
[トップ] → モード選択（Mac/Windows）× 難易度選択 → [ゲーム画面]
[ゲーム画面] → 全問終了 → [結果画面]
[結果画面] → 続ける / トップに戻る
```

### 3.2 トップ画面
- タイトル
- Mac / Windows タブ
- イージー / ノーマル / ハード 選択
- はじめるボタン

### 3.3 ゲーム画面
- 上部: スコア、コンボ、問題番号（例: 3/10）
- 中央: 作業内容（わかりやすい日本語）
- イージー時: コマンド表示エリア
- 下部: ターミナル風入力エリア（プロンプト + 入力）
- [ギブアップ] ボタン

### 3.4 結果画面
- スコア、正確率、所要時間
- もう一度 / トップに戻る

---

## 4. データ設計

### 4.1 問題データ
```javascript
{
  id: "mac_hard_001",
  platform: "mac",
  difficulty: "hard",
  task: "projectフォルダに移動したあと、testファイルを作成する",
  answers: ["cd project && touch test"],
  hint: "cd で移動、touch でファイル作成",
  displayCommand: "cd project && touch test"  // イージー用
}
```

### 4.2 ゲーム状態
- platform, difficulty
- currentQuestion, score, combo
- startTime, answers（正誤履歴）

---

## 5. 技術設計

### 5.1 ファイル構成（案）
```
/
├── index.html
├── css/
│   ├── reset.css
│   ├── variables.css
│   └── main.css
├── js/
│   ├── data/
│   │   ├── questions-mac.js
│   │   └── questions-windows.js
│   ├── game/
│   ├── ui/
│   └── main.js
└── assets/
```

### 5.2 デザイン
- ダークテーマ（ターミナル風）
- 正解文字=緑、不正解=赤のリアルタイムフィードバック

---

## 6. 進捗記録

| 項目 | 状態 | 備考 |
|------|------|------|
| 仕様策定 | ✅ 完了 | |
| UI・設計 | ✅ 完了 | |
| ファイル構成作成 | ✅ 完了 | |
| トップ画面 | ✅ 完了 | |
| ゲーム画面 | ✅ 完了 | |
| 結果画面 | ✅ 完了 | |
| 問題データ（Mac） | ✅ 完了 | |
| 問題データ（Windows） | ✅ 完了 | |
| 入力・正誤判定 | ✅ 完了 | |
| スコア・コンボ | ✅ 完了 | |
| ギブアップ機能 | ✅ 完了 | |
| デザイン適用 | ✅ 完了 | |
| GitHub Pages 公開 | ⬜ 未着手 | |

---

*最終更新: 2025-02-11*
