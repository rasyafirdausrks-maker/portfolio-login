function register() {
    let username = document.getElementById("newUser").value;
    let password = document.getElementById("newPass").value;

    if (username === "" || password === "") {
        alert("Isi semua data!");
        return;
    }

    localStorage.setItem("username", username);
    localStorage.setItem("password", password);

    alert("Register berhasil!");
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
        document.getElementById("loginMsg").innerText =
            "Login gagal! Username atau password salah";
    }
}

function logout() {
    window.location.href = "index.html";
}
