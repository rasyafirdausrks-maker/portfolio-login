function changeProfile() {

    let file =
        document.getElementById("profileInput").files[0];

    if (!file) return;

    let reader = new FileReader();

    reader.onload = function(e) {

        let image = e.target.result;

        document.getElementById("profileImage").src =
            image;

        localStorage.setItem("profileImage", image);
    };

    reader.readAsDataURL(file);
}

window.addEventListener("load", function() {

    let savedImage =
        localStorage.getItem("profileImage");

    if (savedImage) {

        document.getElementById("profileImage").src =
            savedImage;
    }
});
