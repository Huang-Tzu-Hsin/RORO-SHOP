document.querySelector('.newsletter form').addEventListener('submit', function(event) {
    event.preventDefault(); // 防止表單提交刷新頁面

    let email = document.getElementById('email').value;

    if (email) {
        alert('感謝您的訂閱!!');
        // 這裡可以進行其他操作，如將電子信箱提交到伺服器
    }
});