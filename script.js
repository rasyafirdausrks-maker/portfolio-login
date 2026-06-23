// Login
function login() {

    let user =
        document.getElementById("username").value;

    let pass =
        document.getElementById("password").value;

    if (user === "admin" && pass === "12345") {

        localStorage.setItem("login", "true");

        window.location.href = "dashboard.html";

    } else {

        document.getElementById("msg").innerText =
            "Username atau password salah!";
    }
}

// Cek Login
if (window.location.pathname.includes("dashboard")) {

    if (localStorage.getItem("login") !== "true") {

        window.location.href = "index.html";
    }
}

// Upload File
function uploadFile() {

    let file =
        document.getElementById("fileInput").files[0];

    if (!file) return;

    let li = document.createElement("li");

    li.textContent = file.name;

    document.getElementById("fileList")
        .appendChild(li);
}

// Logout
function logout() {

    localStorage.removeItem("login");

    window.location.href = "index.html";
}

// Dark Mode
function toggleDarkMode() {

    document.body.classList.toggle("dark-mode");
}

// Jam Digital
setInterval(() => {

    let now = new Date();

    let time =
        now.getHours().toString().padStart(2, "0")
        + ":" +
        now.getMinutes().toString().padStart(2, "0")
        + ":" +
        now.getSeconds().toString().padStart(2, "0");

    let clock = document.getElementById("clock");

    if (clock) {

        clock.innerHTML = time;
    }

}, 1000);

// Catatan
function addNote() {

    let input =
        document.getElementById("noteInput");

    if (input.value === "") return;

    let li = document.createElement("li");

    li.innerHTML =
        input.value +
        ' <button onclick="this.parentElement.remove()">Hapus</button>';

    document.getElementById("noteList")
        .appendChild(li);

    input.value = "";
}

// Galeri Foto
function showImage() {

    let file =
        document.getElementById("imageInput").files[0];

    if (!file) return;

    let reader = new FileReader();

    reader.onload = function(e) {

        document.getElementById("previewImage").src =
            e.target.result;
    }

    reader.readAsDataURL(file);
}
