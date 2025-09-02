# 📊 React Dashboard Application

A responsive **frontend dashboard application** built with **React.js**, featuring user authentication, a dynamic dashboard, user profile management, and API integration with a mock backend powered by **JSON Server**.

---

## 🚀 Features

- 🔑 **User Authentication** – Login and Signup with form validation.
- 📊 **Dashboard** – Sidebar navigation, top navbar, and data visualization cards.
- 👤 **User Profile** – Fetches and displays user details dynamically from JSON Server.
- 🔗 **API Integration** – Uses a custom `db.json` as a mock backend.
- 🌍 **State Management** – Global user state handled via **React Context API**.
- 🛣 **Routing** – Client-side navigation using `react-router-dom`.
- 📱 **Responsive Design** – Mobile-friendly layout with **Flexbox** and **media queries**.

---

## 🛠️ Setup Instructions

### ✅ Prerequisites
- [Node.js](https://nodejs.org/) and npm installed.
- [JSON Server](https://github.com/typicode/json-server) installed globally:  
  ```bash
  npm install -g json-server
  ```

### ⚙️ Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/react-dashboard-app.git
   cd react-dashboard-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up JSON Server**
   - Create a file named `db.json` in the project root with the following content:
     ```json
     {
       "users": []
     }
     ```
   - Start JSON Server on port **3001**:
     ```bash
     json-server --watch db.json --port 3001
     ```

4. **Run the React app**
   ```bash
   npm start
   ```
   - App runs on: `http://localhost:3000`  
   - Mock backend runs on: `http://localhost:3001`

---

## 📖 Usage

- 📝 **Signup** – Create a new user (with email uniqueness check).
- 🔑 **Login** – Authenticate with email & password.
- 📊 **Dashboard** – View sample dashboard data.
- 👤 **Profile** – Fetch and display user details.
- 📱 **Responsive** – Works seamlessly across devices.

---

## 📂 Project Structure

```
src/
  ├── App.js
  ├── Login.js
  ├── Signup.js
  ├── Dashboard.js
  ├── Profile.js
  ├── UserContext.js
  ├── styles.css
public/
  ├── index.html
db.json
package.json
README.md
```

---

## 📝 Notes

- Backend is simulated by **JSON Server** (local only).
- Replace with a real backend for production use.
- This project is intended for **learning & demo purposes**.

---

## 📦 Dependencies

- [React](https://react.dev/)
- [react-router-dom](https://reactrouter.com/)
- [JSON Server](https://github.com/typicode/json-server)

---

## 📜 License

This project is **open-source** and free to use for educational purposes.

---

## 👨‍💻 Author

**[Chilukuri Mallikhajun Reddy]**  
🔗 Replace with your [GitHub Profile](https://github.com/your-username)  

---

✨ Thank you for exploring this React Dashboard Application! 🚀
