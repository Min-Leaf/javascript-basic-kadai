// 変数numに1以上の正の数を代入する
let num = 15;

// 3の倍数の場合
let three = num % 3;

// 5の倍数の場合
let five = num % 5;

if (three === 0 && five === 0) {
  console.log('3と5の倍数です');
} else if(three === 0){
  console.log('3の倍数です');
} else if(five === 0){
  console.log('5の倍数です');
} else {
  console.log(num);
}