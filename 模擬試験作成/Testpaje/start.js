// 要素を取得
const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')
 
 let miss = 0
 let miss1 = []
 let currentQuiz = 0
let score = 0
let i = 0
 
loadQuiz()
 
// クイズを表示する
function loadQuiz() {
  deselectAnswers()
 
  const currentQuizData = quizData[currentQuiz]
  
  toi.innerHTML = i + 1 + "問目"

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
  let gouhi = ""
 
  // 未選択の場合は送信できないようにする
  if(answer) {
      // 正誤チェック
      if(answer === quizData[currentQuiz].correct) {
          miss1[i] = 100
          score++
      }else {
           miss++
           miss1[i] = currentQuiz
      }
 
      currentQuiz++
      i++
 
      if(currentQuiz < quizData.length) {
          // クイズの読み込み
          loadQuiz()
      } else {
        if(score >= 8){
          gouhi = '合格'
        } else{
          gouhi = '不合格'
        }

          quiz.innerHTML = `
              <h2>正解数 ${quizData.length}問中${score}問です </h2>
              <h2>あなたは${gouhi}です。</h2>
              <h2>不正解は${miss}問です。</h2>
              <button id="button1" onclick="matigai()">不正解問表示</button>
          `
      }
  }
})

function matigai(){
  document.write("------------------------------------------------")
  for(let l = 0; l < miss1.length; l++){
    if(miss1[l] != 100){
      document.write("<p><h3>" + quizData[l].question + "</h3></p>")
      document.write("<p>答えは" + quizData[l].correct + "です</p>")
      document.write("<p>" + quizData[l].kaisetu + "</p>")
      document.write("------------------------------------------------")
    }
  }
  document.write("お疲れ様でした。")
}