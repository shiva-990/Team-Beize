# 🧑‍🤝‍🧑 Team Beize – Student Team Members Management Application

A Full Stack web application developed as part of the **Full Stack Development ** to manage student team members. It allows users to add new members with image uploads, view a list of all team members, and see individual member details.

---

## 📌 Project Overview

This app allows users to:
- Add new team members with details and a profile picture
- View a list of all team members
- View individual member details
- Store data using MongoDB
- Upload and retrieve images from the server

---

## 🚀 Tech Stack

| Layer     | Technology           |
|-----------|----------------------|
| Frontend  | React.js, Axios, CSS |
| Backend   | Node.js, Express.js  |
| Database  | MongoDB (MongoDB Compass for GUI) |
| Tools     | Visual Studio Code, Git, GitHub |

---

## 📂 Folder Structure

```
beize/
├── backend/
│   ├── models/          # MongoDB schema
│   ├── routes/          # Express routes
│   ├── uploads/         # Uploaded profile pictures
│   ├── server.js        # Entry point for backend
│   └── .env             # Environment variables
│
├── frontend/
│   ├── public/
│   └── src/
│       ├── components/  # React components
│       ├── App.js       # Main routing file
│       └── index.js     # React entry point
│
├── .gitignore
└── README.md
```

---

## 📸 Features

✅ Add new team members with:
- Name  
- Role  
- Email  
- Profile image upload  

✅ View members list with:
- Name  
- Role  
- Profile image  

✅ View individual member details with:
- Full name  
- Role  
- Email/contact  
- Profile image  
- Any additional details  

---

## 🔌 API Endpoints

| Method | Endpoint              | Description                 |
|--------|-----------------------|-----------------------------|
| POST   | `/api/members`        | Add a new member            |
| GET    | `/api/members`        | Get all members             |
| GET    | `/api/members/:id`    | Get details of a member     |

---

## 🛠️ Installation Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/shiva-990/Team-Beize.git
cd Team-Beize
```

---

### 2. Backend Setup

```bash
cd backend
npm install
```

- Create a `.env` file:
```
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

- Start the backend server:
```bash
node server.js
```

---

### 3. Frontend Setup

```bash
cd frontend
npm install
npm start
```

---

## 🧪 Testing APIs in Browser/Postman

- `GET http://localhost:5000/api/members` – Get all members
- `GET http://localhost:5000/api/members/:id` – Get a single member
- `POST http://localhost:5000/api/members` – Add a member (use form-data with image upload)

---


> You can upload screenshots for:
- Home Page
- Add Member Page
- View Members Page
- Member Details Page



## 📁 GitHub Submission Instructions

- Repo name: `Team-Beize`
- Make it **public**
- Include this `README.md`
- Add `.gitignore` to exclude:
  ```
  node_modules/
  .env
  backend/uploads/
  *.log
  ```
