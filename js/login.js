function login() {
  const user = document.getElementById("username").value.trim();
  const pass = document.getElementById("password").value.trim();
  const msg = document.getElementById("message");

  msg.textContent = "";
  msg.className = "text-center mt-3";

  if (!user || !pass) {
    msg.textContent = "⚠️ Please enter username and password";
    msg.classList.add("text-danger");
    return;
  }

  msg.textContent = "⏳ Processing...";
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
        // ✅ Simpan status login & waktu login
        localStorage.setItem("isLogin", "true");
        localStorage.setItem("username", user);
        localStorage.setItem("loginTime", Date.now()); // waktu login saat ini

        // ✅ Arahkan ke dashboard
        window.location.href = "index.html";
      } else {
        msg.textContent = "❌ Invalid username or password";
        msg.classList.add("text-danger");
      }
    })
    .catch(() => {
      msg.textContent = "⚠️ Failed to connect to server";
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
