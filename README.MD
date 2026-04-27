# 💬 NexTalk — Real-Time Full Stack Chat Application

![NexTalk Banner](./frontend/public/screenshot-banner_png.svg)

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![Socket.io](https://img.shields.io/badge/Socket.io-010101?style=for-the-badge&logo=socketdotio&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

> A production-ready, full-stack real-time chat application built with the MERN stack and Socket.io.

---

## ✨ Features

- 🔐 **Custom JWT Authentication** — Secure login/signup without third-party auth providers
- ⚡ **Real-Time Messaging** — Instant messaging powered by Socket.io
- 🟢 **Online/Offline Presence** — See who's active in real time
- 🔔 **Notification & Typing Sounds** — With user toggle control
- 📨 **Welcome Emails on Signup** — Automated via Resend API
- 🖼️ **Image Uploads** — Handled through Cloudinary
- 🚦 **API Rate Limiting** — Protected with Arcjet
- 🎨 **Responsive UI** — Built with React, Tailwind CSS & DaisyUI

---

## 🛠️ Tech Stack

| Layer | Technology |
|------------|------------------------------------------|
| Frontend | React.js, Tailwind CSS, DaisyUI, Zustand |
| Backend | Node.js, Express.js |
| Database | MongoDB (Mongoose) |
| Real-Time | Socket.io |
| Auth | JWT (JSON Web Tokens) |
| Email | Resend API |
| Storage | Cloudinary |
| Security | Arcjet Rate Limiting |

---

## 🚀 Getting Started

### Prerequisites
- Node.js v18+
- MongoDB URI (local or Atlas)
- Cloudinary account
- Resend API key
- Arcjet key

### 1. Clone the repository
```bash
git clone https://github.com/YOUR_USERNAME/nextalk.git
cd nextalk
```

### 2. Setup environment variables

Create a `.env` file inside `/backend`:

```env
PORT=3000
MONGO_URI=your_mongo_uri
NODE_ENV=development
JWT_SECRET=your_jwt_secret
RESEND_API_KEY=your_resend_key
EMAIL_FROM=your_email
EMAIL_FROM_NAME=NexTalk
CLIENT_URL=http://localhost:5173
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
ARCJET_KEY=your_arcjet_key
ARCJET_ENV=development
```

### 3. Run the Backend
```bash
cd backend
npm install
npm run dev
```

### 4. Run the Frontend
```bash
cd frontend
npm install
npm run dev
```

### 5. Open in browser

Open your browser and go to:

http://localhost:5173



## 📸 Screenshots

### 🔐 Login Page
![Login](./frontend/public/screenshot-login_png.png)

### 👥 Contacts
![Contacts](./frontend/public/screenshot-contacts_png.png)

### 💬 Chat Page
![Chat](./frontend/public/screenshot-chat_png.png)
