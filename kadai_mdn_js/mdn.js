// 今日の日付を取得する
const today = new Date();

// 年月日に分解する
const year = today.getFullYear();
const month = today.getMonth() + 1;
const day = today.getDate();

// 年月日をコンソールに出力する
const formattedDate = `${year}年${month}月${day}日`;
console.log(formattedDate);