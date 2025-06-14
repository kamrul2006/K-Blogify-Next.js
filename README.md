# K-Blogify

A modern full-stack blogging platform built with **Next.js 15**, **Express.js**, and **MongoDB**, designed for seamless content creation and management with full authentication support.
Deployed on **Vercel** for frontend and **Railway/Render** for backend.

---

## 📖 Table of Contents

* [Features](#-features)
* [Tech Stack](#-tech-stack)
* [Live Demo](#-live-demo)
* [Installation](#-installation)
* [Backend Server](#-backend-server)
* [Deployment Guide](#-deployment-guide)
* [Folder Structure](#-folder-structure)
* [Environment Variables](#-environment-variables)
* [Author](#-author)
* [License](#-license)

---

## 🚀 Features

* 🔐 **User Authentication** using NextAuth.js with OAuth providers (Google, GitHub)
* 📝 **Full CRUD** for blog posts (Create, Read, Delete)
* 🎯 **Personal Dashboard** to manage user-specific posts
* 🌐 **Public Posts Page** to explore content from all users
* 🖼 **Beautiful Modals** powered by SweetAlert2
* 🎨 **Responsive UI** built with TailwindCSS
* 🌑 **Dark Mode** support for better reading experience
* 🖥 **Deployment Ready**: Frontend on Vercel, Backend on Railway/Render
* ✨ **Animation and Transitions** with Framer Motion & React Awesome Reveal
* 📩 **Email Support** with Nodemailer (for future extensions)

---

## 🛠 Tech Stack

| Frontend      | Backend    | Database      | Others                    |
| ------------- | ---------- | ------------- | ------------------------- |
| Next.js 15    | Express.js | MongoDB Atlas | TailwindCSS               |
| React 19      | Node.js    | Mongoose      | SweetAlert2               |
| NextAuth.js   | REST API   |               | Nodemailer, Redux Toolkit |
| Framer Motion |            |               | React Awesome Reveal      |

---

## 🌍 Live Demo

Frontend (Vercel): 👉 [https://k-blogify.vercel.app](https://k-blogify.vercel.app)

---

## 🔧 Installation

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/kamrul2006/K-Blogify-Next.js.git
cd K-Blogify-Next.js
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Setup Environment Variables

Create a `.env.local` file in the root directory:

```env
NEXTAUTH_SECRET=your-nextauth-secret
NEXTAUTH_URL=http://localhost:3000
MONGO_URI=your-mongodb-uri
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
GITHUB_ID=your-github-id
GITHUB_SECRET=your-github-secret
```

> ⚠️ Make sure to register your OAuth providers (Google, GitHub) and obtain the necessary credentials.

### 4️⃣ Start Development Server

```bash
npm run dev
```

App will be running locally at: [http://localhost:3000](http://localhost:3000)

---

## 🖥 Backend Server (Express.js)

If you have a separate backend repo:

```bash
git clone https://github.com/your-backend-repo.git
cd your-backend-repo
npm install
```

> ℹ️ Don't forget to set up your environment variables for backend as well.

---

## 🚀 Deployment Guide

### ✅ Frontend Deployment (Vercel)

1. Visit [Vercel](https://vercel.com/)
2. Import your GitHub repository
3. Add environment variables under **Project Settings → Environment Variables**
4. Deploy 🚀

### ✅ Backend Deployment (Railway/Render)

* Follow Railway/Render deployment guides.
* Ensure your database URI and secrets are properly configured.

---

## 📂 Folder Structure

```bash
/app
  /api
  /components
  /dashboard
  /posts
  /create
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
| `NEXTAUTH_URL`         | Deployment URL             |
| `MONGO_URI`            | MongoDB connection string  |
| `GITHUB_ID`            | GitHub OAuth Client ID     |
| `GITHUB_SECRET`        | GitHub OAuth Client Secret |
| `GOOGLE_CLIENT_ID`     | Google OAuth Client ID     |
| `GOOGLE_CLIENT_SECRET` | Google OAuth Client Secret |

---

## 👨‍💻 Author

**Kamrul Islam Apurba**
[GitHub](https://github.com/kamrul2006)

---

## 📝 License

This project is licensed under the MIT License.
Feel free to use, modify, and distribute.

* A professional `CONTRIBUTING.md`
* A sample `LICENSE`
* Example `.env.local` template
* API Routes documentation

👉 Just say the word if you want any of these.
