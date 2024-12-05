document.addEventListener('DOMContentLoaded', function() {
    const images = [
        '../img/盆栽/輪播30.JPG',
        '../img/盆栽/輪播20.jpg',
        '../img/盆栽/輪播10.jpg'
    ];

    let currentIndex = 0;

    function changeBackground() {
        const newsSection = document.querySelector('.news');
        newsSection.style.backgroundImage = `url(${images[currentIndex]})`;
        currentIndex = (currentIndex + 1) % images.length;
    }

    changeBackground();
    setInterval(changeBackground, 2000); //每2秒切換一次圖片
});

// newsletter
document.querySelector('.newsletter form').addEventListener('submit', function(event) {
    event.preventDefault(); // 防止表單提交刷新頁面

    let email = document.getElementById('email').value;

    if (email) {
        alert('感謝您的訂閱!!');
        // 這裡可以進行其他操作，如將電子信箱提交到伺服器
        
         // 刷新頁面
         location.reload();
    }
});