# 🎮 After Lunch Game Point  

**After Lunch Game Point** is a fun point-tracking web app designed to record and display game scores for office or community activities.  
Admins can log in and record player scores by tapping ID cards using **Web NFC**, while everyone else can freely view the **Leaderboard** and **Badge Gallery**.

---

## 🚀 Features  

- 🔐 **Admin Login** — Only admins can access the NFC scan feature to record scores.  
- 📱 **Web NFC Integration** — Easily add points by scanning ID cards (mobile supported).  
- 🏆 **Leaderboard** — Displays player rankings and total points across all games.  
- 🎖️ **Badge System** — Each game grants exclusive badges based on player performance tiers.  
- 📚 **Badge Gallery** — Public page showcasing all badge designs and descriptions.  
- 🌐 **Cross-Platform Design** — Responsive layout for both desktop and mobile devices.  
- 🔁 **Auto Refresh** — Leaderboard refreshes automatically every 2 minutes with countdown timer.

---

## 🛠️ Tech Stack  

| Component | Description |
|------------|-------------|
| **Frontend** | HTML, CSS, JavaScript |
| **Backend** | Google Apps Script (linked to Google Sheets) |
| **Database** | Google Spreadsheet |
| **Hosting** | GitHub Pages |

---

## 🔒 Access Control

- 👑 **Admins:**  
  Can log in, scan NFC cards, and record game points.  
  Sessions automatically expire after **6 hours** for security.  

- 👥 **Public Users:**  
  Can view the **Leaderboard** and **Badge Gallery** without logging in.  

---

## 🏅 Games & Badges

Each game features a unique badge progression system based on total points:  
- **UNO**
- **Chess**
- **Jenga**
- **Mosquito Slap**
- **Gaple**

Each has **six tiers** of achievements — from beginner to legendary level.

---

## 🧠 How It Works

1. Admin logs in with valid credentials.  
2. Admin scans a player’s ID card using **NFC** on a mobile device.  
3. The system automatically updates the player’s score in the linked Google Sheet.  
4. Leaderboard updates automatically every 2 minutes.  
5. Players can view their ranks and badges anytime.

---

## 💡 Author

Developed by [**naozuru**](https://github.com/naozuru)  
Created with ❤️ using **HTML**, **JavaScript**, and **Google Apps Script**.
