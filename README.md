
# K-Blogify

A full-stack blogging platform built using **Next.js 15**, **Express.js**, **MongoDB**, and deployed on **Vercel**.  
This project allows users to create, read, and manage blog posts with full authentication support.

---

## 🚀 Features

- 🔐 User Authentication (NextAuth.js)
- 📝 Create, Read, Delete Blog Posts
- 🎯 Personal Dashboard (View/Delete own posts)
- 🌐 Public Posts Page (Read others' posts)
- 🖼 SweetAlert2 modals for beautiful UI
- 🎨 Fully Responsive UI using TailwindCSS
- 🌑 Dark themed design
- 🖥 Deployment ready (Frontend: Vercel, Backend: Railway/Render)

---

## 🛠 Tech Stack

| Frontend  | Backend  | Database  |
|-----------|----------|-----------|
| Next.js 15 (App Router) | Express.js (Node.js) | MongoDB |
| TailwindCSS | REST API | Mongo Atlas |
| NextAuth.js |  |  |

---

## 🌍 Live Demo

Frontend (Vercel): [https://your-vercel-url.vercel.app](https://your-vercel-url.vercel.app)  
Backend (Railway/Render): [https://your-backend-url.com](https://your-backend-url.com)

---

## 🔧 Installation (Local Development)

### Clone the Repository

```bash
git clone https://github.com/kamrul2006/K-Blogify-Next.js.git
cd K-Blogify-Next.js
````

### Install Frontend Dependencies

```bash
npm install
```

### Setup Environment Variables

Create a `.env.local` file in root:

```env
NEXTAUTH_SECRET=your-nextauth-secret
NEXTAUTH_URL=http://localhost:3000
MONGO_URI=your-mongodb-uri
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
GITHUB_ID=your-github-id
GITHUB_SECRET=your-github-secret
```

> Note: You need to configure your providers (Google, GitHub) from their respective developer consoles.

### Run Frontend Locally

```bash
npm run dev
```

The app will run at: [http://localhost:3000](http://localhost:3000)

---

## 🖥 Backend Server (Express.js)

### Backend Repo (Optional)

If backend is in separate repo:

```bash
git clone https://github.com/your-backend-repo.git
cd your-backend-repo
npm install
```

### Setup Backend Environment

Create `.env` file:

```env
PORT=5000
MONGO_URI=your-mongodb-uri
```

### Run Backend

```bash
npm start
```

Backend will run at: `http://localhost:5000`

---

## 🚀 Deployment Guide

### ✅ Frontend Deployment (Vercel)

1. Go to [Vercel](https://vercel.com/)
2. Import your GitHub repository
3. Add environment variables under **Project Settings → Environment Variables**
4. Deploy 🚀

### ✅ Backend Deployment (Railway or Render)

* Railway: [https://railway.app/](https://railway.app/)
* Render: [https://render.com/](https://render.com/)

1. Create new project → Node.js
2. Connect GitHub repo or upload code manually
3. Set environment variables
4. Deploy backend server

---

## 📝 Folder Structure

```
/app
  /api
  /components
  /dashboard
  /posts
  /create
  ...
/public
/utils
README.md
package.json
next.config.js
```

---

## 🔐 Environment Variables Summary

| Variable               | Description                |
| ---------------------- | -------------------------- |
| `NEXTAUTH_SECRET`      | Secret for NextAuth        |
| `NEXTAUTH_URL`         | Your deployment URL        |
| `MONGO_URI`            | MongoDB connection string  |
| `GITHUB_ID`            | GitHub OAuth Client ID     |
| `GITHUB_SECRET`        | GitHub OAuth Client Secret |
| `GOOGLE_CLIENT_ID`     | Google OAuth Client ID     |
| `GOOGLE_CLIENT_SECRET` | Google OAuth Client Secret |

---

## ❤️ Author

**Kamrul Islam Apurba (K-WEB TEc)**
[GitHub](https://github.com/kamrul2006)

---

```

---

