let assert = require("assert");
let Phrase = require("../index.js");

describe("Phrase", function() {
  describe("#palindrome", function() {
    it("パリンドロームのでない場合にはfalseを返す", function() {
      let nonPalindrome = new Phrase("apple");
      assert(!nonPalindrome.palindrome());
      // assert.ok(!nonPalindrome.palindrome());
    });

    it("単純なパリンドロームの場合にはtrueを返す", function() {
      let plainPalindrome = new Phrase("racecar");
      assert(plainPalindrome.palindrome());
    });

    it("パリンドロームが大文字小文字混じりでもtrueを返す", function() {
      let mixedCase = new Phrase("RaceCar");
      assert(mixedCase.palindrome());
    });

    it("パリンドロームに句読点があってもtrueを返す", function() {
      let punctualPalindrome = new Phrase("Madam, I'm Adam.");
      assert(punctualPalindrome.palindrome());
    });
  });

  describe("#letters", function() {
    it("文字だけを返す", function() {
      let punctualPalindrome = new Phrase("Madam, I'm Adam.");
      assert.strictEqual(punctualPalindrome.letters(),"MadamImAdam");
    });
  });
});