// 要素を取得
const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')
 
 
let currentQuiz = 0
let score = 0
 
loadQuiz()
 
// クイズを表示する
function loadQuiz() {
  deselectAnswers()
 
  const currentQuizData = quizData[currentQuiz]
 
  questionEl.innerText = currentQuizData.question
  a_text.innerText = currentQuizData.a
  b_text.innerText = currentQuizData.b
  c_text.innerText = currentQuizData.c
  d_text.innerText = currentQuizData.d
}
 
// 選択を解除
function deselectAnswers() {
  answerEls.forEach(answerEl => answerEl.checked = false)
}
 
// 回答取得
function getSelected() {
  let answer
 
  answerEls.forEach(answerEl => {
      // ラジオボックスのchecked属性をチェック
      if(answerEl.checked) {
          // checked属性がついたinput要素のIDを取得
          answer = answerEl.id
      }
  })
  return answer
}
 
// Submitボタンをクリックした時に発火
submitBtn.addEventListener('click', () => {
  // 回答取得
  const answer = getSelected()
 
  // 未選択の場合は送信できないようにする
  if(answer) {
      // 正誤チェック
      if(answer === quizData[currentQuiz].correct) {
          // 正解の場合はスコアをインクリメント
          score++
      }
 
      currentQuiz++
 
      if(currentQuiz < quizData.length) {
          // クイズの読み込み
          loadQuiz()
      } else {
          // 結果発表
          quiz.innerHTML = `
              <h2>正解数 ${quizData.length}問中${score}問です </h2>
              <button onclick="location.reload()">Reload</button>
          `
      }
  }
})