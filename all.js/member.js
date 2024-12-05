const signInBtn = document.getElementById("signIn");
const signUpBtn = document.getElementById("signUp");
const fistForm = document.getElementById("form1");
const secondForm = document.getElementById("form2");
const container = document.querySelector(".container");

signInBtn.addEventListener("click", () => {
    container.classList.remove("right-panel-active");
});

signUpBtn.addEventListener("click", () => {
    container.classList.add("right-panel-active");
});

fistForm.addEventListener("submit", (e) => e.preventDefault());
secondForm.addEventListener("submit", (e) => e.preventDefault());

// 登入部分
document.getElementById('form2').addEventListener('submit', function (event) {
    event.preventDefault(); // 防止表單提交

    let username = document.getElementById('Username').value;
    let password = document.getElementById('Password').value;

    // 假設這裡有一個簡單的驗證邏輯
    if (username === 'admin' && password === 'password123') {
        alert(`${username}歡迎光臨!`);location.reload();
        // 這裡可以進行導向，或其它操作
    } else if (username === 'admin2' && password === 'password456') {
        alert(`${username}歡迎光臨!`);location.reload();
    }
    else {
        alert('使用者名稱或密碼錯誤');
    }
});

