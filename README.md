# 🎮 After Lunch Game Point  

A web-based point tracking system for fun, competitive games played after lunch!  
This project allows participants to log in, play different games, and automatically record their scores into a connected Google Spreadsheet using Google Apps Script.

---

## 🚀 Features  

- 🔐 **Login System** — Simple local login using `localStorage`.  
- 🧩 **Game Selection** — Supports multiple games like Uno, Chess, and Uno Balok.  
- 🏆 **Automatic Scoring** — Points are added and total scores are calculated dynamically.  
- 📊 **Google Sheet Integration** — All data is stored and updated in real time via Apps Script.  
- 💬 **Responsive UI** — Works on desktop, Android, and iOS browsers.  

---

## 🛠️ Tech Stack  

| Component | Description |
|------------|-------------|
| **Frontend** | HTML, CSS, JavaScript |
| **Backend** | Google Apps Script (linked to Google Sheets) |
| **Database** | Google Spreadsheet |
| **Hosting** | GitHub Pages |

---

## 🔧 How It Works  

1. **Login**  
   - Users log in via `login.html`.  
   - Login state is stored in `localStorage`.  

2. **Point Submission**  
   - Players select a game and add points.  
   - The system sends data to the Google Sheet using `doPost(e)` in Apps Script.  

3. **Scoreboard**  
   - The total points are displayed on the web interface.  
   - Updated automatically after each submission.  

---

## 🧠 Example Workflow  

1. Open the website and log in.  
2. Choose a game (e.g., Uno, Chess, Uno Balok).  
3. Add player scores.  
4. The system updates total points in the linked Google Sheet.  

---

## 🗂️ Google Apps Script Setup  

1. Create a Google Spreadsheet.  
2. Go to **Extensions → Apps Script**.  
3. Paste your `appscript.gs` code there.  
4. Deploy as a **Web App** and set access to “Anyone with the link.”  
5. Copy the deployment URL and connect it to your frontend JavaScript.  

---

## 💡 Future Improvements  

- Add leaderboard page.  
- Enable player profiles.  
- Include game history tracking.  
- Add admin dashboard for event management.  

---

## 👤 Author  

**Muhammad Rayhan**  
🕹️ Developer & Designer  
📍 Indonesia  

GitHub: [naozuru](https://github.com/naozuru)
