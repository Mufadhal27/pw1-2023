function authenticate() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username === "your-name" & password === "student-nf23") {
        alert("Login berhasil!");
        window.location.href = "success.html";
    } else {
        alert("Login gagal. Coba lagi.");
    }
}