function register() {
    let username = document.getElementById("newUser").value;
    let password = document.getElementById("newPass").value;

    localStorage.setItem("username", username);
    localStorage.setItem("password", password);

    alert("Registrasi berhasil!");
    window.location.href = "index.html";
}

function login() {
    let user = document.getElementById("user").value;
    let pass = document.getElementById("pass").value;

    let savedUser = localStorage.getItem("username");
    let savedPass = localStorage.getItem("password");

    if (user === savedUser && pass === savedPass) {
        window.location.href = "dashboard.html";
    } else {
        alert("Login gagal!");
    }
}

function logout() {
    window.location.href = "index.html";
}
