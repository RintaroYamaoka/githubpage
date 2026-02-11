/**
 * ゲーム全体の進行を管理
 */
const QUESTIONS_PER_GAME = 5;

class GameManager {
  constructor() {
    this.platform = "mac";
    this.difficulty = "easy";
    this.questions = [];
    this.currentIndex = 0;
    this.score = 0;
    this.combo = 0;
    this.correctCount = 0;
    this.totalCount = 0;
    this.startTime = null;
    this.answerHistory = []; // { correct: boolean, giveUp: boolean }
    this.isGiveUp = false;
  }

  init(platform, difficulty) {
    this.platform = platform;
    this.difficulty = difficulty;
    const source = platform === "mac" ? QUESTIONS_MAC : QUESTIONS_WINDOWS;
    const shuffled = this.shuffleArray([...source[difficulty]]);
    this.questions = shuffled.slice(0, QUESTIONS_PER_GAME);
    this.currentIndex = 0;
    this.score = 0;
    this.combo = 0;
    this.correctCount = 0;
    this.totalCount = this.questions.length;
    this.startTime = Date.now();
    this.answerHistory = [];
  }

  /** Fisher-Yatesで配列をシャッフル */
  shuffleArray(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  getCurrentQuestion() {
    return this.questions[this.currentIndex] || null;
  }

  getProgress() {
    return `${this.currentIndex + 1}/${this.totalCount}`;
  }

  getPrompt() {
    return this.platform === "mac" ? "$ " : "PS> ";
  }

  isEasy() {
    return this.difficulty === "easy";
  }

  /**
   * 正解かどうかを判定（スペースの差を吸収）
   */
  checkAnswer(input) {
    const question = this.getCurrentQuestion();
    if (!question) return false;

    const normalized = this.normalizeInput(input);
    const matched = question.answers.some(
      (ans) => this.normalizeInput(ans) === normalized
    );
    return matched;
  }

  normalizeInput(str) {
    return str.trim().replace(/\s+/g, " ");
  }

  onCorrect() {
    this.correctCount++;
    this.combo++;
    const baseScore = 100;
    const comboBonus = Math.min(this.combo * 10, 50);
    this.score += baseScore + comboBonus;
    this.answerHistory.push({ correct: true, giveUp: false });
  }

  onIncorrect() {
    this.combo = 0;
    this.answerHistory.push({ correct: false, giveUp: false });
  }

  onGiveUp() {
    this.combo = 0;
    this.answerHistory.push({ correct: false, giveUp: true });
  }

  nextQuestion() {
    this.currentIndex++;
    this.isGiveUp = false;
  }

  isFinished() {
    return this.currentIndex >= this.questions.length;
  }

  getAccuracy() {
    if (this.totalCount === 0) return 0;
    return Math.round((this.correctCount / this.totalCount) * 100);
  }

  getElapsedTime() {
    if (!this.startTime) return 0;
    return Math.floor((Date.now() - this.startTime) / 1000);
  }

  formatTime(seconds) {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s.toString().padStart(2, "0")}`;
  }

  getResult() {
    return {
      score: this.score,
      accuracy: this.getAccuracy(),
      time: this.formatTime(this.getElapsedTime()),
      correctCount: this.correctCount,
      totalCount: this.totalCount,
    };
  }
}
