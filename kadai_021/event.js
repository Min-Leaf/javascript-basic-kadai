// 非同期処理を使用して、2秒後に文章を書き換えよう
// 画面から取得したHTML要素が定数に代入されている
const btn = document.getElementById('btn');
const text = document.getElementById('text');

// ボタンをクリックした2秒後に正しく文字変更がされている
btn.addEventListener('click', () => {
  setTimeout(() => {
    text.textContent = 'ボタンをクリックしました';
  }, 2000);
});