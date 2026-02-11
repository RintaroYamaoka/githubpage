/**
 * Windows（PowerShell）用の問題データ
 */
const QUESTIONS_WINDOWS = {
  easy: [
    {
      id: "win_easy_001",
      task: "今いるフォルダの場所を表示する",
      displayCommand: "Get-Location",
      answers: ["Get-Location", "pwd"],
    },
    {
      id: "win_easy_002",
      task: "フォルダの中身を一覧で表示する",
      displayCommand: "Get-ChildItem",
      answers: ["Get-ChildItem", "dir", "ls"],
    },
    {
      id: "win_easy_003",
      task: "projectというフォルダに移動する",
      displayCommand: "Set-Location project",
      answers: ["Set-Location project", "cd project"],
    },
    {
      id: "win_easy_004",
      task: "一つ上のフォルダに戻る",
      displayCommand: "cd ..",
      answers: ["cd ..", "Set-Location .."],
    },
    {
      id: "win_easy_005",
      task: "srcというフォルダを作成する",
      displayCommand: "New-Item -ItemType Directory -Name src",
      answers: ["New-Item -ItemType Directory -Name src", "mkdir src"],
    },
    {
      id: "win_easy_006",
      task: "README.mdというファイルを作成する",
      displayCommand: "New-Item README.md",
      answers: ["New-Item README.md"],
    },
    {
      id: "win_easy_007",
      task: "ファイルの変更状態を確認する（git）",
      displayCommand: "git status",
      answers: ["git status"],
    },
    {
      id: "win_easy_008",
      task: "変更をすべてコミットの対象に追加する",
      displayCommand: "git add .",
      answers: ["git add ."],
    },
    {
      id: "win_easy_009",
      task: "画面をクリアする",
      displayCommand: "Clear-Host",
      answers: ["Clear-Host", "cls", "clear"],
    },
    {
      id: "win_easy_010",
      task: "config.jsonの内容を表示する",
      displayCommand: "Get-Content config.json",
      answers: ["Get-Content config.json", "type config.json"],
    },
    {
      id: "win_easy_011",
      task: "現在のブランチ一覧を表示する",
      displayCommand: "git branch",
      answers: ["git branch"],
    },
    {
      id: "win_easy_012",
      task: "docsというフォルダに移動する",
      displayCommand: "cd docs",
      answers: ["cd docs", "Set-Location docs"],
    },
    {
      id: "win_easy_013",
      task: "package.jsonというファイルを作成する",
      displayCommand: "New-Item package.json",
      answers: ["New-Item package.json"],
    },
    {
      id: "win_easy_014",
      task: "test.txtというファイルを削除する",
      displayCommand: "Remove-Item test.txt",
      answers: ["Remove-Item test.txt", "del test.txt"],
    },
    {
      id: "win_easy_015",
      task: "assetsというフォルダを作成する",
      displayCommand: "mkdir assets",
      answers: ["mkdir assets", "New-Item -ItemType Directory -Name assets"],
    },
    {
      id: "win_easy_016",
      task: "gitの差分を確認する",
      displayCommand: "git diff",
      answers: ["git diff"],
    },
    {
      id: "win_easy_017",
      task: "mainブランチに切り替える",
      displayCommand: "git checkout main",
      answers: ["git checkout main"],
    },
    {
      id: "win_easy_018",
      task: "フォルダの中身を詳細表示する",
      displayCommand: "Get-ChildItem | Format-List",
      answers: ["Get-ChildItem | Format-List", "dir"],
    },
    {
      id: "win_easy_019",
      task: ".envというファイルを作成する",
      displayCommand: "New-Item .env",
      answers: ["New-Item .env"],
    },
    {
      id: "win_easy_020",
      task: "リモートにプッシュする",
      displayCommand: "git push",
      answers: ["git push"],
    },
  ],

  normal: [
    {
      id: "win_normal_001",
      task: "今いるフォルダの場所を表示する",
      answers: ["Get-Location", "pwd"],
    },
    {
      id: "win_normal_002",
      task: "隠しファイルも含めてフォルダの中身を表示する",
      answers: ["Get-ChildItem -Force", "dir -Force"],
    },
    {
      id: "win_normal_003",
      task: "ユーザーのホームフォルダに移動する",
      answers: ["cd $env:USERPROFILE", "Set-Location $env:USERPROFILE"],
    },
    {
      id: "win_normal_004",
      task: "my-appというフォルダを作成する",
      answers: ["New-Item -ItemType Directory -Name my-app", "mkdir my-app"],
    },
    {
      id: "win_normal_005",
      task: "config.jsonというファイルを作成する",
      answers: ["New-Item config.json"],
    },
    {
      id: "win_normal_006",
      task: "index.htmlの内容を表示する",
      answers: ["Get-Content index.html", "type index.html"],
    },
    {
      id: "win_normal_007",
      task: "「初期コミット」というメッセージでコミットする",
      answers: ['git commit -m "初期コミット"'],
    },
    {
      id: "win_normal_008",
      task: "feature/loginというブランチを作成して切り替える",
      answers: ["git checkout -b feature/login"],
    },
    {
      id: "win_normal_009",
      task: "リモートリポジトリから最新を取得する",
      answers: ["git pull"],
    },
    {
      id: "win_normal_010",
      task: "package.jsonがあるフォルダでパッケージをインストールする",
      answers: ["npm install"],
    },
    {
      id: "win_normal_011",
      task: "utilsというフォルダを作成する",
      answers: ["mkdir utils", "New-Item -ItemType Directory -Name utils"],
    },
    {
      id: "win_normal_012",
      task: "old.txtファイルを削除する",
      answers: ["Remove-Item old.txt", "del old.txt"],
    },
    {
      id: "win_normal_013",
      task: "README.mdの内容を表示する",
      answers: ["Get-Content README.md", "type README.md"],
    },
    {
      id: "win_normal_014",
      task: "developブランチに切り替える",
      answers: ["git checkout develop"],
    },
    {
      id: "win_normal_015",
      task: "「feat: 新機能追加」というメッセージでコミットする",
      answers: ['git commit -m "feat: 新機能追加"'],
    },
    {
      id: "win_normal_016",
      task: "tempフォルダとその中身をすべて削除する",
      answers: ["Remove-Item -Recurse -Force temp"],
    },
    {
      id: "win_normal_017",
      task: "src/index.jsをdist/index.jsにコピーする",
      answers: ["Copy-Item src/index.js dist/index.js"],
    },
    {
      id: "win_normal_018",
      task: "buildフォルダをbackupフォルダに名前変更する",
      answers: ["Rename-Item build backup", "Move-Item build backup"],
    },
    {
      id: "win_normal_019",
      task: "npmで開発用パッケージをインストールする",
      answers: ["npm install --save-dev"],
    },
    {
      id: "win_normal_020",
      task: "gitのログを確認する",
      answers: ["git log"],
    },
    {
      id: "win_normal_021",
      task: "modelsフォルダを作成する",
      answers: ["mkdir models", "New-Item -ItemType Directory -Name models"],
    },
    {
      id: "win_normal_022",
      task: "app.jsの内容を表示する",
      answers: ["Get-Content app.js", "type app.js"],
    },
  ],

  hard: [
    {
      id: "win_hard_001",
      task: "projectフォルダに移動したあと、testファイルを作成する",
      answers: ["cd project; New-Item test", "Set-Location project; New-Item test"],
    },
    {
      id: "win_hard_002",
      task: "srcフォルダを作成し、その中に移動する",
      answers: ["mkdir src; cd src"],
    },
    {
      id: "win_hard_003",
      task: "my-appフォルダを作成し、その中でgitの管理を開始する",
      answers: ["mkdir my-app; cd my-app; git init"],
    },
    {
      id: "win_hard_004",
      task: "変更をすべてステージングし、「fix: バグ修正」というメッセージでコミットする",
      answers: ['git add .; git commit -m "fix: バグ修正"'],
    },
    {
      id: "win_hard_005",
      task: "componentsフォルダを作成し、その中にButton.jsファイルを作成する",
      answers: ["mkdir components; New-Item components/Button.js"],
    },
    {
      id: "win_hard_006",
      task: "projectフォルダに移動し、npmでプロジェクトを初期化する",
      answers: ["cd project; npm init -y"],
    },
    {
      id: "win_hard_007",
      task: "feature/add-loginブランチを作成して切り替える",
      answers: ["git checkout -b feature/add-login"],
    },
    {
      id: "win_hard_008",
      task: "pythonでvenvという仮想環境を作成し、有効化する",
      answers: ["python -m venv venv; .\\venv\\Scripts\\Activate.ps1"],
    },
    {
      id: "win_hard_009",
      task: "backupフォルダを作成し、config.jsonをその中にコピーする",
      answers: ["mkdir backup; Copy-Item config.json backup/"],
    },
    {
      id: "win_hard_010",
      task: "distフォルダを削除し、再度作成する",
      answers: ["Remove-Item -Recurse -Force dist; mkdir dist"],
    },
    {
      id: "win_hard_011",
      task: "appフォルダを作成し、その中にindex.jsとstyle.cssを作成する",
      answers: ["mkdir app; New-Item app/index.js; New-Item app/style.css"],
    },
    {
      id: "win_hard_012",
      task: "developブランチを作成して切り替え、リモートにプッシュする",
      answers: ["git checkout -b develop; git push -u origin develop"],
    },
    {
      id: "win_hard_013",
      task: "backupフォルダを作成し、config.jsonをその中にコピーして、コピー先の内容を確認する",
      answers: ["mkdir backup; Copy-Item config.json backup/; Get-Content backup/config.json"],
    },
    {
      id: "win_hard_014",
      task: "publicフォルダを作成し、その中にimagesフォルダを作成する",
      answers: ["mkdir public; mkdir public/images", "New-Item -ItemType Directory -Path public/images -Force"],
    },
    {
      id: "win_hard_015",
      task: "変更をステージングし、amendで直前のコミットに追加する",
      answers: ["git add .; git commit --amend --no-edit"],
    },
    {
      id: "win_hard_016",
      task: "frontendフォルダに移動し、Reactプロジェクトをmy-appという名前で作成する",
      answers: ["cd frontend; npx create-react-app my-app"],
    },
    {
      id: "win_hard_017",
      task: "logフォルダを削除し、新規にlogフォルダを作成する",
      answers: ["Remove-Item -Recurse -Force log; mkdir log"],
    },
    {
      id: "win_hard_018",
      task: "apiフォルダを作成して移動し、git管理を開始する",
      answers: ["mkdir api; cd api; git init"],
    },
    {
      id: "win_hard_019",
      task: "dataをdata_backupに名前変更し、新しくdataフォルダを作成する",
      answers: ["Rename-Item data data_backup; mkdir data", "Move-Item data data_backup; mkdir data"],
    },
    {
      id: "win_hard_020",
      task: "srcフォルダ内の全ファイルをdistフォルダにコピーする",
      answers: ["Copy-Item -Recurse src/* dist/", "xcopy src dist /E /I"],
    },
  ],
};
