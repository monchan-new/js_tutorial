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