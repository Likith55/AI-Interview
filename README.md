# AI Interview Preparation Platform

Live Demo: https://ai-interview-2f7t.vercel.app/

## Overview

AI Interview Preparation Platform is a full-stack AI-powered web application designed to help users prepare for technical and behavioral interviews through real-time voice-based AI interaction, resume analysis, ATS scoring, and performance tracking.

The platform uses modern web technologies, AI APIs, cloud deployment infrastructure, and secure authentication to deliver a production-ready interview preparation experience.

---

# Features

## AI Voice Interview

* Real-time AI-powered mock interviews using Vapi AI
* Interactive voice-based communication
* Technical and behavioral interview simulation
* Resume-based personalized interview questions

## Resume Analysis & ATS Scoring

* AI-powered resume evaluation using OpenRouter APIs
* ATS compatibility scoring
* Resume strengths and weaknesses analysis
* Missing keyword detection
* Improvement suggestions

## Authentication & Security

* Secure authentication using Clerk
* Protected routes and user sessions
* Sign-in and sign-up flow integration

## Dashboard & Analytics

* Interview performance tracking
* Technical score analysis
* Communication score evaluation
* Confidence score tracking
* Personalized interview feedback

## Leaderboard System

* Ranking users based on interview performance
* Score-based leaderboard display
* Competitive interview preparation environment

## Cloud Deployment

* Frontend deployed on Vercel
* Backend deployed on Render
* PostgreSQL database hosted on Neon

---

# Tech Stack

## Frontend

* Next.js 14
* TypeScript
* Tailwind CSS
* React.js

## Backend

* Node.js
* Express.js
* Prisma ORM

## Database

* PostgreSQL
* Neon Database

## AI & APIs

* Vapi AI
* OpenRouter API
* Gemini AI

## Authentication

* Clerk Authentication

## Deployment

* Vercel
* Render

---

# Project Architecture

```bash
client/
 ├── src/
 │    ├── app/
 │    ├── components/
 │    └── styles/
 │
server/
 ├── src/
 │    ├── controllers/
 │    ├── routes/
 │    ├── services/
 │    ├── middleware/
 │    └── lib/
 │
 ├── prisma/
 └── uploads/
```

---

# Environment Variables

## Frontend (.env)

```env
NEXT_PUBLIC_API_URL=
NEXT_PUBLIC_VAPI_PUBLIC_KEY=
NEXT_PUBLIC_VAPI_ASSISTANT_ID=
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
```

## Backend (.env)

```env
DATABASE_URL=
OPENROUTER_API_KEY=
PORT=5000
```

---

# Installation & Setup

## Clone Repository

```bash
git clone <your-repository-url>
```

---

## Frontend Setup

```bash
cd client
npm install
npm run dev
```

---

## Backend Setup

```bash
cd server
npm install
npx prisma generate
npx prisma db push
npm run dev
```

---

# Deployment

## Frontend Deployment

* Platform: Vercel
* URL: [https://ai-interview-2f7t.vercel.app/](https://ai-interview-2f7t.vercel.app/)

## Backend Deployment

* Platform: Render

## Database Hosting

* Platform: Neon PostgreSQL

---

# Key Highlights

* Full-stack production-ready application
* Real-time AI voice interaction
* ATS resume analysis system
* Cloud deployment architecture
* Authentication and protected routing
* PostgreSQL + Prisma integration
* AI-driven feedback generation
* Modern responsive UI design

---

# Future Enhancements

* Multi-language interview support
* AI coding interview rounds
* Video interview integration
* Advanced analytics dashboard
* Interview recording and playback
* Personalized learning recommendations

---

# Author

Likith M Gowda

GitHub: [https://github.com/Likith55](https://github.com/Likith55)
