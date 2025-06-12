let states = ["Kansas", "Nebraska", "North Dakota", "South Dakota"]

// URLに適した文字列を返す
function urlify (string) {
  return string.toLowerCase().split(/\s+/).join("-");
}

// URL生成：命令型バージョン
function imperativUrls(elements) {
  let urls = [];
  elements.forEach(element => {
    urls.push(urlify(element));
  });
  return urls;
}
console.log(imperativUrls(states));

// URL生成：関数バージョン
function functionalUrls(elements) {
  return elements.map(element => urlify(element));
}
console.log(functionalUrls(states));
// console.log( states.map(n => urlify(n)));

// 演習6.1.1 https://example.com/<URLに適した形式>を要素に持つ配列を返す関数
function functionalUrls2(elements) {
  return elements.map(element => `https://example.com/${urlify(element)}`);
}
console.log(functionalUrls2(states));


// 1単語の文字列抽出: 命令型バージョン
function  imperativeSingles(elements) {
  let singles = [];
  elements.forEach(function(element) {
    if (element.split(/\s+/).length === 1) {
      singles.push(element);
    }
  });
  return singles;
}
console.log(imperativeSingles(states));

// 1単語の文字列抽出：  関数型バージョン
function funcionalSingles(elements) {
  return elements.filter(element => element.split(/\s+/).length === 1);
}
console.log(funcionalSingles(states));

// 6.2.1 演習問題　Dakota州を返す関数
function dakotaSelect(elements) {
  return elements.filter(element => element.split(/\s+/).length === 2);
}
console.log(dakotaSelect(states));

function dakotaSelect2(elements) {
  return elements.filter(element => element.includes("Dakota"));
}
console.log(dakotaSelect2(states));
  // filter/map/reduce等の場合は関数の戻り値を期待しているが、
  // アロー関数でない場合はReturnで関数の戻り値を明示する必要がある。
  // return elements.filter(function(element) {
  //   return element.includes("Dakota");
  // });
  // アロー関数でも複数行ある場合は、{}で囲って該当行をreturnを明示する必要である。
  // return elements.filter(element => {
  //   return element.sincludes("Dakota");
  // });

let numbers = [1,2,3,4,5,6,7,8,9,10]
// sum: 命令型バージョン
function imperativeSum(elements) {
  let total = 0;
  elements.forEach(function(n) {
    total += n;
  });
  return total;
}
console.log(imperativeSum(numbers));

// sum:　関数型バージョン
function functionalSum(elements) {
  return elements.reduce((total, n) => {
    // total +=0;
    return total += n;
  // }, 0 );
  });
}
// function functionalSum(elements) {
//   return elements.reduce((accumulater, currentValue) => {
//     return accumulater + currentValue;
//   }, initialValue);
// }
console.log(functionalSum(numbers));


// lengths: 命令型バージョン
function imperativeLengths(elements) {
  let lengths = {};
  elements.forEach(function(element) {
    lengths[element] = element.length;
  });
  return lengths;
}
console.log(imperativeLengths(states));

// length:　関数型バージョン
function functionalLengths(elements) {
  return elements.reduce((lengths, element) => {
    lengths[element] = element.length;
    return lengths;
  }, {});
}
console.log(functionalLengths(states));

// 6.3.4演習問題

// multiply:　関数型バージョン

function functionalSum(elements) {
  return elements.reduce((total, n) => {
    // total +=0;
    return total *= n;
  // }, 1 );
  });
}
console.log(functionalSum(numbers));

// 配列生成の方法
function functionalArray(elements) {
  return elements.reduce((total, n, index) => {
    total[index] = n;
    return total;
  },[] );
}
console.log(functionalArray(numbers));

// length:　関数型バージョン（短縮表示）
function functionalLengths(elements) {
  return elements.reduce((lengths, element) => {lengths[element] = element.length; return lengths;}, {});
}
console.log(functionalLengths(states));