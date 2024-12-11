// 画面から取得したHTML要素が定数に代入されている
const button = document.getElementById('btn');
const textElement = document.getElementById('text');

button.addEventListener('click', function() {
    // ボタンをクリックした際に正しく文字変更がされている
    textElement.textContent = 'ボタンをクリックしました';
});