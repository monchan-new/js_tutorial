let assert = require("assert");
let Phrase = require("../index.js");

describe("Phrase", function() {
  describe("#palindrome", function() {
    it("パリンドロームのでない場合にはfalseを返すこと", function() {
      let nonPalindrome = new Phrase("apple");
      assert(!nonPalindrome.palindrome());
      // assert.ok(!nonPalindrome.palindrome());
    });

    it("単純なパリンドロームの場合にはtrueを返すこと", function() {
      let plainPalindrome = new Phrase("racecar");
      assert(plainPalindrome.palindrome());
    });

    it("パリンドロームが大文字小文字混じりでもtrueを返すこと", function() {
      let mixedCase = new Phrase("RaceCar");
      assert(mixedCase.palindrome());
    });

    it("パリンドロームに句読点があってもtrueを返すこと", function() {
      let punctualPalindrome = new Phrase("Madam, I'm Adam.");
      assert(punctualPalindrome.palindrome());
    });

    it("空文字列はfalseを返すこと", function() {
      let emptyPalindrome = new Phrase("");
      assert.ok(!emptyPalindrome.palindrome());
    });
  });

  describe("#letters", function() {
    it("文字だけを返すこと", function() {
      let punctualPalindrome = new Phrase("Madam, I'm Adam.");
      assert.strictEqual(punctualPalindrome.letters(),"MadamImAdam");
    });
    
    it("マッチしない（文字が一つもない）場合は空文字列を返すこと", function() {
      let noLetters = new Phrase("1234.56");
      assert.strictEqual(noLetters.letters(),"");
    });
  });
});