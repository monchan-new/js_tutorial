// 注意: main.jsを更新した後でbrowserifyの再実行を忘れると、さまざまなエラーの原因になります。変更をファイルに加えた場合は、(browserify main.js -o bundle.js)を必ず実行してください。
// なお(watchify main.js -o bundle.js &)を実行するとこの再実行をbackgroundで自動化できます。(jobs -lで確認可能)

let Phrase = require("inada-palindrome");
let string = prompt("パリンドロームをテストしたい文字列を入力してください：");
let phrase = new Phrase(string);
if(phrase.palindrome()) {
  alert(`"${phrase.content}"はパリンドロームです`);
} else {
  alert(`"${phrase.content}"はパリンドロームではありません`);
}
