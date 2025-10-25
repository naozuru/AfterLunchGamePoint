function login() {
  const user = document.getElementById("username").value.trim();
  const pass = document.getElementById("password").value.trim();
  const msg = document.getElementById("message");

  msg.textContent = "";
  msg.className = "text-center mt-3";

  if (!user || !pass) {
    msg.textContent = "⚠️ Harap isi username dan password";
    msg.classList.add("text-danger");
    return;
  }

  msg.textContent = "⏳ Memproses...";
  msg.classList.add("text-secondary");

  fetch(
    "https://script.google.com/macros/s/AKfycbwN7tLWg7cSqJeScydRjpJnyROGm_XLaueVQEkhwfTDwXdG06eYD4pSmtWxXBbaIJKA/exec?login=1&username=" +
      encodeURIComponent(user) +
      "&password=" +
      encodeURIComponent(pass)
  )
    .then(res => res.text())
    .then(result => {
      if (result.trim() === "OK") {
        // ✅ Simpan status login & username
        localStorage.setItem("isLogin", "true");
        localStorage.setItem("username", user);

        // ✅ Arahkan ke dashboard
        window.location.href = "index.html";
      } else {
        msg.textContent = "❌ Username atau Password salah";
        msg.classList.add("text-danger");
      }
    })
    .catch(() => {
      msg.textContent = "⚠️ Gagal terhubung ke server";
      msg.classList.add("text-danger");
    });
}

// 🔹 Tampilkan pesan setelah logout (jika ada)
window.addEventListener("DOMContentLoaded", () => {
  const logoutMsg = localStorage.getItem("logoutMessage");
  if (logoutMsg) {
    const msg = document.getElementById("message");
    msg.textContent = logoutMsg;
    msg.className = "text-success text-center mt-3";
    localStorage.removeItem("logoutMessage");
  }
});
