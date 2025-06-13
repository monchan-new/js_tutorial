(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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

},{"inada-palindrome":2}],2:[function(require,module,exports){
// Phraseオブジェクトを外のファイルから使えるようにする
module.exports = Phrase;


// 文字列を逆順にして返す
function reverse(string) {
  return Array.from(string).reverse().join("");
}

// すべてのStringでreverse()関数をメソッドとして使えるようにする
String.prototype.reverse = function() {
  return Array.from(this).reverse().join("");
}


// Emailを＠にて分割する
// function emailParts(email) {
//   let processdContent = email.toLowerCase();
//   return processdContent.split("@");
// }
// let emailParts = (email) => {
//   return email.toLowerCase().split("@");
// }
// const emailParts = email => email.toLowerCase().split("@");


// Phraseオブジェクトを定義する
function Phrase(content) {
  this.content = content;

  // コンテンツの文字部分のみを取り出す
  // 利用例:
  //   new Phrase("Hello, world!").letters() === "Helloworld"
  this.letters = function letters() {
    return (this.content.match(/[a-z]/gi) || []).join("");
    // return Array.from(this.content).filter(c => c.match(/[a-z]/i)).join("");
  } 
  
  // 文字列を小文字に変換する（無名関数の定義）
  this.processor = function(string) {
    return string.toLowerCase();
  }

  // パリンドロームのテスト用に変換したcontentを返す
  this.processedContent = function processedContent() {
    return this.processor(this.letters());
  }

  // パリンドロームならtrueを、違うならfalseを返す
  this.palindrome = function palindrome() {
    return this.processedContent() === this.processedContent().reverse();
  }


  // フレーズを全部大文字にする
  this.louder = function louder() {
    let upperContent = this.content.toUpperCase();
    return upperContent;
  }
}


// TraslatedPhraseオブジェクトを定義する。
function TranslatedPhrase(content, translation) {
  this.content = content;
  this.translation = translation;

  // パリンドロームのテスト用に変換した訳文を返す
  this.processedContent = function processedContent() {
    return this.processor(this.translation);
  }
}

// Phraseオブジェクト(のproperty/function)をTranslatedPhraseオブジェクトに継承
// （元になるオブジェクト型のインスタンスを、そこから派生するオブジェクト型の
// インスタンスの「プロトタイプ」（prototype）として設定）
TranslatedPhrase.prototype = new Phrase();


// Stringがホワイトスペースのみであるかを判定してTrue/Falseをかえす
function blank(string) {
  return !!string.match(/^\s+$/);
}
// すべてのStringでblank関数をメソッドとして使えるようにする
String.prototype.blank = function() {
  return blank(this);
}

// Arrayから最後の要素を取り出す
function last(array) {
  return array.slice(-1);
  // 配列ではなく要素のみを取り出したいときは[0]で1番目の要素を指定する
  // return array.slice(-1)[0];
}
// すべてのArrayでlast関数をメソッドとして使えるようにする
Array.prototype.last = function() {
  return last(this);
}
},{}]},{},[1]);
