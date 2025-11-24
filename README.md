# 📈 Quantora

A full-stack stock monitoring & analysis platform built using the **MERN stack**, featuring secure authentication, real-time dashboards, and modern UI components.

---

## 🚀 Features

* Secure user authentication using **JWT**
* Modern UI with **Material UI**
* Stock data visualization with **React Chart**
* Protected routes and session handling
* Optimized API communication using **Axios**
* Fully responsive and modular UI architecture

---

## 🛠 Tech Stack

| Layer                | Technology                                         |
| -------------------- | -------------------------------------------------- |
| Frontend             | React.js, Material UI, React Router, Axios         |
| Dashboard            | React + Charts for analytics and visual stock data |
| Backend              | Node.js, Express.js, JWT, Cookies                  |
| Database             | MongoDB Atlas                                      |

---

## 📂 Project Structure

```
/frontend       → Landing page, Login, Signup, UI components  
/dashboard      → Auth-protected stock dashboard and charts  
/backend        → API, Auth, DB models, JWT, Controllers  
```


## ⚙️ Installation & Setup

Clone the repo:

```sh
git clone https://github.com/satyamkumar052/Stock-trading-platform.git
```

Install dependencies for each module:

```sh
cd backend && npm install
cd ../frontend && npm install
cd ../dashboard && npm install
```

---

## ▶️ Running Locally

Start each service in separate terminals:

```sh
cd backend && npm start
```

```sh
cd frontend && npm start
```

```sh
cd dashboard && npm start
```

Ensure each runs on a unique port (example: frontend `3000`, dashboard `3001`, backend `5000`).

---

## 🔐 Authentication Flow

1. User logs in from `/login`
2. Backend verifies user and returns JWT token
3. Token stored securely and used for protected routes
4. Dashboard content is shown only if token is valid

---

## 📊 Dashboard Preview

* Displays stock metrics retrieved from MongoDB Atlas
* Interactive charts generated via React Chart
* Personalized welcome message based on authenticated session

---

## 📦 Environment Variables

Create a `.env` file in `/backend`:

```
MONGO_URI=<your mongodb atlas url>
JWT_SECRET=<your secret key>
```


## 📌 Future Enhancements

* Live stock market API integration
* Portfolio tracking
* Role-based access
* Single production build + automated deployment

---

## 🧑‍💻 Author

**Satyam**
