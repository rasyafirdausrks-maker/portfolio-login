// Tampilkan data lama
window.onload = function () {
    if (document.getElementById("editUser")) {
        document.getElementById("editUser").value =
            localStorage.getItem("username") || "";
    }
};

// Simpan perubahan profile
function saveProfile() {
    let username = document.getElementById("editUser").value;
    let password = document.getElementById("editPass").value;

    localStorage.setItem("username", username);

    if (password !== "") {
        localStorage.setItem("password", password);
    }

    document.getElementById("profileMsg").innerHTML =
        "Profile berhasil diperbarui!";
}

// Tampilkan username di dashboard
window.onload = function () {

    let username = localStorage.getItem("username");

    if (document.getElementById("welcomeUser")) {
        document.getElementById("welcomeUser").innerHTML =
            "Halo, " + username + "!";
    }

    if (document.getElementById("editUser")) {
        document.getElementById("editUser").value =
            username || "";
    }
};

// Logout
function logout() {
    window.location.href = "index.html";
}
