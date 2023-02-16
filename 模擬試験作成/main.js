
function mogi1() {
    alert('模擬試験1を選択しました');
console.log("開始")
}
function mogi2() {
    alert('模擬試験2を選択しました');
}
function mogi3() {
    alert('模擬試験3を選択しました');
console.log("開始")
}
function mogi4() {
    alert('模擬試験4を選択しました');
console.log("開始")
}

function confirmFunction1() {
    //ret変数に確認ダイアログの結果を代入する。
ret = confirm("開始しても大丈夫でしょうか？");
//確認ダイアログの結果がOKの場合外部リンクを開く
if (ret == true){
    location.href = "./Testpaje/test1.html";
 }
}



