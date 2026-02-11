/**
 * エントリーポイント
 */
const gameManager = new GameManager();

const screens = {
  top: document.getElementById("top-screen"),
  game: document.getElementById("game-screen"),
  result: document.getElementById("result-screen"),
};

const elements = {
  platformTabs: document.querySelectorAll(".platform-tab"),
  difficultyBtns: document.querySelectorAll(".difficulty-btn"),
  startBtn: document.getElementById("start-btn"),
  taskText: document.getElementById("task-text"),
  commandHint: document.getElementById("command-hint"),
  commandDisplay: document.getElementById("command-display"),
  typed: document.getElementById("typed"),
  hiddenInput: document.getElementById("hidden-input"),
  prompt: document.getElementById("prompt"),
  giveupBtn: document.getElementById("giveup-btn"),
  scoreDisplay: document.getElementById("score-display"),
  comboDisplay: document.getElementById("combo-display"),
  questionCounter: document.getElementById("question-counter"),
  platformBadge: document.getElementById("platform-badge"),
  difficultyBadge: document.getElementById("difficulty-badge"),
  finalScore: document.getElementById("final-score"),
  accuracyDisplay: document.getElementById("accuracy-display"),
  timeDisplay: document.getElementById("time-display"),
  retryBtn: document.getElementById("retry-btn"),
  backBtn: document.getElementById("back-btn"),
  backToTopBtn: document.getElementById("back-to-top-btn"),
};

// 正解文字用のspanを生成（複数正解の場合は入力と最も一致するものを使用）
function renderTypedWithClass(input, target) {
  const q = gameManager.getCurrentQuestion();
  if (!q) return;
  const answers = q.answers;
  const normalizedInput = gameManager.normalizeInput(input);
  // 入力が正解の先頭と一致するもののうち、最も長い（最も specific）ものを選ぶ
  let bestAnswer = answers[0];
  if (normalizedInput) {
    let bestLength = 0;
    for (const ans of answers) {
      const n = gameManager.normalizeInput(ans);
      if (n.startsWith(normalizedInput) && n.length > bestLength) {
        bestAnswer = ans;
        bestLength = n.length;
      } else if (normalizedInput.startsWith(n) && n.length > bestLength) {
        bestAnswer = ans;
        bestLength = n.length;
      }
    }
  }
  let html = "";
  for (let i = 0; i < input.length; i++) {
    const char = input[i];
    const expected = bestAnswer[i];
    const cls = expected === undefined || char !== expected ? "incorrect" : "correct";
    html += `<span class="${cls}">${escapeHtml(char)}</span>`;
  }
  target.innerHTML = html;
}

function escapeHtml(str) {
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}

function showScreen(name) {
  Object.values(screens).forEach((s) => s.classList.remove("active"));
  screens[name].classList.add("active");
}

/** ゲーム画面のUIを初期状態にリセット */
function resetGameUI() {
  elements.hiddenInput.value = "";
  elements.typed.innerHTML = "";
  elements.hiddenInput.disabled = false;
  elements.giveupBtn.disabled = false;
  elements.giveupBtn.textContent = "ギブアップ";
  elements.giveupBtn.onclick = handleGiveUp;
  elements.commandHint.classList.remove("answer-reveal");
  elements.commandHint.querySelector(".command-hint-label").textContent = "入力するコマンド:";
  elements.commandHint.style.display = "none";
}

function startGame() {
  resetGameUI();
  elements.giveupBtn.onclick = handleGiveUp;
  const platform = document.querySelector(".platform-tab.active").dataset.platform;
  const difficulty = document.querySelector(".difficulty-btn.active").dataset.difficulty;
  gameManager.init(platform, difficulty);

  if (gameManager.questions.length === 0) {
    alert("この難易度には問題がありません。");
    return;
  }
  elements.platformBadge.textContent = platform === "mac" ? "Mac" : "Windows";
  elements.difficultyBadge.textContent = { easy: "EASY", normal: "NORMAL", hard: "HARD" }[difficulty];
  showScreen("game");
  updateGameUI();
  elements.hiddenInput.focus();
}

function updateGameUI() {
  const q = gameManager.getCurrentQuestion();
  if (!q) {
    showResult();
    return;
  }

  elements.taskText.textContent = q.task;
  elements.scoreDisplay.textContent = gameManager.score;
  elements.comboDisplay.textContent = `x${gameManager.combo}`;
  elements.questionCounter.textContent = gameManager.getProgress();
  elements.prompt.textContent = gameManager.getPrompt();

  if (gameManager.isEasy() && q.displayCommand) {
    elements.commandHint.style.display = "block";
    elements.commandDisplay.textContent = q.displayCommand;
  } else {
    elements.commandHint.style.display = "none";
  }

  elements.typed.innerHTML = "";
  elements.hiddenInput.value = "";
  elements.hiddenInput.focus();
}

function submitAnswer() {
  const input = elements.hiddenInput.value;
  const q = gameManager.getCurrentQuestion();
  if (!q) return;

  // 空入力は無視（誤ってEnterを押してもコンボをリセットしない）
  if (!input.trim()) return;

  if (gameManager.checkAnswer(input)) {
    gameManager.onCorrect();
    gameManager.nextQuestion();
    updateGameUI();
  } else {
    gameManager.onIncorrect();
    renderTypedWithClass(input, elements.typed);
    elements.hiddenInput.value = "";
  }
}

function doGiveUp() {
  const q = gameManager.getCurrentQuestion();
  if (!q) return;
  gameManager.onGiveUp();
  elements.commandHint.style.display = "block";
  elements.commandHint.querySelector(".command-hint-label").textContent = "正解:";
  elements.commandDisplay.textContent = q.answers[0];
  elements.commandHint.classList.add("answer-reveal");
  elements.hiddenInput.disabled = true;
  elements.giveupBtn.textContent = "次の問題へ";
  elements.giveupBtn.onclick = () => {
    gameManager.nextQuestion();
    elements.commandHint.classList.remove("answer-reveal");
    elements.commandHint.querySelector(".command-hint-label").textContent = "入力するコマンド:";
    elements.hiddenInput.disabled = false;
    elements.giveupBtn.textContent = "ギブアップ";
    elements.giveupBtn.onclick = handleGiveUp;
    updateGameUI();
  };
}

function handleGiveUp() {
  doGiveUp();
}

function showResult() {
  const result = gameManager.getResult();
  elements.finalScore.textContent = result.score;
  elements.accuracyDisplay.textContent = `${result.accuracy}%`;
  elements.timeDisplay.textContent = result.time;
  showScreen("result");
}

function retry() {
  resetGameUI();
  elements.giveupBtn.onclick = handleGiveUp;
  gameManager.init(gameManager.platform, gameManager.difficulty);
  showScreen("game");
  updateGameUI();
  elements.hiddenInput.focus();
}

function goBack() {
  resetGameUI();
  showScreen("top");
}

// イベントリスナー
elements.platformTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    elements.platformTabs.forEach((t) => t.classList.remove("active"));
    tab.classList.add("active");
    elements.platformBadge.textContent = tab.dataset.platform === "mac" ? "Mac" : "Windows";
  });
});

elements.difficultyBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    elements.difficultyBtns.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    const labels = { easy: "EASY", normal: "NORMAL", hard: "HARD" };
    elements.difficultyBadge.textContent = labels[btn.dataset.difficulty];
  });
});

elements.startBtn.addEventListener("click", startGame);

elements.hiddenInput.addEventListener("input", (e) => {
  const val = e.target.value;
  const q = gameManager.getCurrentQuestion();
  if (q && gameManager.isEasy()) {
    renderTypedWithClass(val, elements.typed);
  } else {
    renderTypedWithClass(val, elements.typed);
  }
});

elements.hiddenInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    if (elements.giveupBtn.textContent === "次の問題へ") return;
    submitAnswer();
  }
});

// giveupBtnはresetGameUI/doGiveUpでonclickを切り替えるため、ここでは設定しない

elements.retryBtn.addEventListener("click", retry);
elements.backBtn.addEventListener("click", goBack);
elements.backToTopBtn.addEventListener("click", goBack);

// ゲーム画面表示時にフォーカス
document.addEventListener("visibilitychange", () => {
  if (document.visibilityState === "visible" && screens.game.classList.contains("active")) {
    elements.hiddenInput.focus();
  }
});
