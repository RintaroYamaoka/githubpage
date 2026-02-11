/**
 * Mac（bash/zsh）用の問題データ
 */
const QUESTIONS_MAC = {
  easy: [
    {
      id: "mac_easy_001",
      task: "今いるフォルダの場所を表示する",
      displayCommand: "pwd",
      answers: ["pwd"],
    },
    {
      id: "mac_easy_002",
      task: "フォルダの中身を一覧で表示する",
      displayCommand: "ls",
      answers: ["ls"],
    },
    {
      id: "mac_easy_003",
      task: "隠しファイルも含めてフォルダの中身を表示する",
      displayCommand: "ls -la",
      answers: ["ls -la", "ls -l -a", "ls -al"],
    },
    {
      id: "mac_easy_004",
      task: "projectというフォルダに移動する",
      displayCommand: "cd project",
      answers: ["cd project"],
    },
    {
      id: "mac_easy_005",
      task: "一つ上のフォルダに戻る",
      displayCommand: "cd ..",
      answers: ["cd .."],
    },
    {
      id: "mac_easy_006",
      task: "srcというフォルダを作成する",
      displayCommand: "mkdir src",
      answers: ["mkdir src"],
    },
    {
      id: "mac_easy_007",
      task: "README.mdというファイルを作成する",
      displayCommand: "touch README.md",
      answers: ["touch README.md"],
    },
    {
      id: "mac_easy_008",
      task: "ファイルの変更状態を確認する（git）",
      displayCommand: "git status",
      answers: ["git status"],
    },
    {
      id: "mac_easy_009",
      task: "変更をすべてコミットの対象に追加する",
      displayCommand: "git add .",
      answers: ["git add .", "git add . "],
    },
    {
      id: "mac_easy_010",
      task: "ターミナルの表示を消す",
      displayCommand: "clear",
      answers: ["clear"],
    },
    {
      id: "mac_easy_011",
      task: "現在のブランチ一覧を表示する",
      displayCommand: "git branch",
      answers: ["git branch"],
    },
    {
      id: "mac_easy_012",
      task: "docsというフォルダに移動する",
      displayCommand: "cd docs",
      answers: ["cd docs"],
    },
    {
      id: "mac_easy_013",
      task: "package.jsonというファイルを作成する",
      displayCommand: "touch package.json",
      answers: ["touch package.json"],
    },
    {
      id: "mac_easy_014",
      task: "test.txtというファイルを削除する",
      displayCommand: "rm test.txt",
      answers: ["rm test.txt"],
    },
    {
      id: "mac_easy_015",
      task: "assetsというフォルダを作成する",
      displayCommand: "mkdir assets",
      answers: ["mkdir assets"],
    },
    {
      id: "mac_easy_016",
      task: "gitの差分を確認する",
      displayCommand: "git diff",
      answers: ["git diff"],
    },
    {
      id: "mac_easy_017",
      task: "mainブランチに切り替える",
      displayCommand: "git checkout main",
      answers: ["git checkout main"],
    },
    {
      id: "mac_easy_018",
      task: "フォルダの中身を詳細表示する",
      displayCommand: "ls -l",
      answers: ["ls -l"],
    },
    {
      id: "mac_easy_019",
      task: ".envというファイルを作成する",
      displayCommand: "touch .env",
      answers: ["touch .env"],
    },
    {
      id: "mac_easy_020",
      task: "リモートにプッシュする",
      displayCommand: "git push",
      answers: ["git push"],
    },
  ],

  normal: [
    {
      id: "mac_normal_001",
      task: "今いるフォルダの場所を表示する",
      answers: ["pwd"],
    },
    {
      id: "mac_normal_002",
      task: "隠しファイルも含めてフォルダの中身を表示する",
      answers: ["ls -la", "ls -l -a", "ls -al"],
    },
    {
      id: "mac_normal_003",
      task: "ホームフォルダに移動する",
      answers: ["cd ~", "cd", "cd $HOME"],
    },
    {
      id: "mac_normal_004",
      task: "my-appというフォルダを作成する",
      answers: ["mkdir my-app"],
    },
    {
      id: "mac_normal_005",
      task: "config.jsonというファイルを作成する",
      answers: ["touch config.json"],
    },
    {
      id: "mac_normal_006",
      task: "index.htmlの内容を表示する",
      answers: ["cat index.html"],
    },
    {
      id: "mac_normal_007",
      task: "「初期コミット」というメッセージでコミットする",
      answers: ['git commit -m "初期コミット"', 'git commit -m \'初期コミット\''],
    },
    {
      id: "mac_normal_008",
      task: "feature/loginというブランチを作成して切り替える",
      answers: ["git checkout -b feature/login"],
    },
    {
      id: "mac_normal_009",
      task: "リモートリポジトリから最新を取得する",
      answers: ["git pull"],
    },
    {
      id: "mac_normal_010",
      task: "package.jsonがあるフォルダでパッケージをインストールする",
      answers: ["npm install"],
    },
    {
      id: "mac_normal_011",
      task: "utilsというフォルダを作成する",
      answers: ["mkdir utils"],
    },
    {
      id: "mac_normal_012",
      task: "old.txtファイルを削除する",
      answers: ["rm old.txt"],
    },
    {
      id: "mac_normal_013",
      task: "README.mdの内容を表示する",
      answers: ["cat README.md"],
    },
    {
      id: "mac_normal_014",
      task: "developブランチに切り替える",
      answers: ["git checkout develop"],
    },
    {
      id: "mac_normal_015",
      task: "「feat: 新機能追加」というメッセージでコミットする",
      answers: ['git commit -m "feat: 新機能追加"', 'git commit -m \'feat: 新機能追加\''],
    },
    {
      id: "mac_normal_016",
      task: "tempフォルダとその中身をすべて削除する",
      answers: ["rm -rf temp"],
    },
    {
      id: "mac_normal_017",
      task: "src/index.jsをdist/index.jsにコピーする",
      answers: ["cp src/index.js dist/index.js"],
    },
    {
      id: "mac_normal_018",
      task: "buildフォルダをbackupフォルダに名前変更する",
      answers: ["mv build backup"],
    },
    {
      id: "mac_normal_019",
      task: "npmで開発用パッケージをインストールする",
      answers: ["npm install --save-dev"],
    },
    {
      id: "mac_normal_020",
      task: "gitのログを確認する",
      answers: ["git log"],
    },
    {
      id: "mac_normal_021",
      task: "modelsフォルダを作成する",
      answers: ["mkdir models"],
    },
    {
      id: "mac_normal_022",
      task: "app.jsの内容を表示する",
      answers: ["cat app.js"],
    },
  ],

  hard: [
    {
      id: "mac_hard_001",
      task: "projectフォルダに移動したあと、testファイルを作成する",
      answers: ["cd project && touch test"],
    },
    {
      id: "mac_hard_002",
      task: "srcフォルダを作成し、その中に移動する",
      answers: ["mkdir src && cd src"],
    },
    {
      id: "mac_hard_003",
      task: "my-appフォルダを作成し、その中でgitの管理を開始する",
      answers: ["mkdir my-app && cd my-app && git init"],
    },
    {
      id: "mac_hard_004",
      task: "変更をすべてステージングし、「fix: バグ修正」というメッセージでコミットする",
      answers: ['git add . && git commit -m "fix: バグ修正"'],
    },
    {
      id: "mac_hard_005",
      task: "componentsフォルダを作成し、その中にButton.jsファイルを作成する",
      answers: ["mkdir components && touch components/Button.js"],
    },
    {
      id: "mac_hard_006",
      task: "projectフォルダに移動し、npmでプロジェクトを初期化する",
      answers: ["cd project && npm init -y"],
    },
    {
      id: "mac_hard_007",
      task: "feature/add-loginブランチを作成して切り替える",
      answers: ["git checkout -b feature/add-login"],
    },
    {
      id: "mac_hard_008",
      task: "pythonでvenvという仮想環境を作成し、有効化する",
      answers: ["python -m venv venv && source venv/bin/activate"],
    },
    {
      id: "mac_hard_009",
      task: "backupフォルダを作成し、config.jsonをその中にコピーする",
      answers: ["mkdir backup && cp config.json backup/"],
    },
    {
      id: "mac_hard_010",
      task: "distフォルダを削除し、再度ビルド用に作成する",
      answers: ["rm -rf dist && mkdir dist"],
    },
    {
      id: "mac_hard_011",
      task: "appフォルダを作成し、その中にindex.jsとstyle.cssを作成する",
      answers: ["mkdir app && touch app/index.js && touch app/style.css"],
    },
    {
      id: "mac_hard_012",
      task: "developブランチを作成して切り替え、リモートにプッシュする",
      answers: ["git checkout -b develop && git push -u origin develop"],
    },
    {
      id: "mac_hard_013",
      task: "backupフォルダを作成し、config.jsonをその中にコピーして、コピー先の内容を確認する",
      answers: ["mkdir backup && cp config.json backup/ && cat backup/config.json"],
    },
    {
      id: "mac_hard_014",
      task: "publicフォルダを作成し、その中にimagesフォルダを作成する",
      answers: ["mkdir -p public/images"],
    },
    {
      id: "mac_hard_015",
      task: "変更をステージングし、amendで直前のコミットに追加する",
      answers: ["git add . && git commit --amend --no-edit"],
    },
    {
      id: "mac_hard_016",
      task: "frontendフォルダに移動し、Reactプロジェクトをmy-appという名前で作成する",
      answers: ["cd frontend && npx create-react-app my-app"],
    },
    {
      id: "mac_hard_017",
      task: "logフォルダを削除し、新規にlogフォルダを作成する",
      answers: ["rm -rf log && mkdir log"],
    },
    {
      id: "mac_hard_018",
      task: "apiフォルダを作成して移動し、git管理を開始する",
      answers: ["mkdir api && cd api && git init"],
    },
    {
      id: "mac_hard_019",
      task: "dataをdata_backupに名前変更し、新しくdataフォルダを作成する",
      answers: ["mv data data_backup && mkdir data"],
    },
    {
      id: "mac_hard_020",
      task: "srcフォルダ内の全ファイルをdistフォルダにコピーする",
      answers: ["cp -r src/* dist/", "cp -r src/ dist/"],
    },
  ],
};
