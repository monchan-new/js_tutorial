// 注意: main.jsを更新した後でbrowserifyの再実行を忘れると、さまざまなエラーの原因になります。変更をファイルに加えた場合は、(browserify main.js -o bundle.js)を必ず実行してください。
// なお(watchify main.js -o bundle.js &)を実行するとこの再実行をbackgroundで自動化できます。(jobs -lで確認可能)

// ライブラリーの更新に注意！
// 下記コマンドでは最新にならず(npm update inada-palindrome)
// こちらを使うこと
// (npm install inada-palindrome@latest)


let Phrase = require("inada-palindrome");

function palindromeTester(event) {
  event.preventDefault();

  let phrase = new Phrase(event.target.phrase.value);
  let palindromeResult = document.querySelector("#palindromeResult");

  if(phrase.palindrome()) {
    palindromeResult.innerHTML = `<strong>"${phrase.content}"はパリンドロームです！</strong>`;
  } else {
    palindromeResult.innerHTML = `<strong>"${phrase.content}"はパリンドロームではありません</strong>`;
  }
}

document.addEventListener("DOMContentLoaded", function() {
  let tester = document.querySelector("#palindromeTester");
  tester.addEventListener("submit", event => palindromeTester(event));
});
// palindromeTester()とすると即関数が実行されてしまう。括弧なしにより関数の参照として渡せる。
// 他に下記の表記も可能（関数の定義を渡しているため？）
// button.addEventListener("click", () =>
// palindromeTester());
// button.addEventListener("click", function() {
//   palindromeTester();
// });
