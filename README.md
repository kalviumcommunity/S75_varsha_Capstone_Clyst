# 🗂️ CLYST: College Discovery Platform

A full-stack platform for exploring and comparing colleges in Tamil Nadu. Built using React, TypeScript, Node.js, Supabase, and modern UI libraries.

---

## 📆 Phase 1: Day 1–10 – Core Setup & Feature Foundation

### ✅ Day 1: Project Architecture & Environment Setup

**Backend**
- Initialized Node.js project with TypeScript
- Created folder structure: `/controllers`, `/routes`, `/models`, etc.
- Configured ESLint, Prettier, Husky, and `.env` for environment variables
- Planned database schema: `colleges`, `users`, `reviews`, `applications`

**Frontend**
- Initialized Vite + React + TypeScript project
- Installed and configured Tailwind CSS and Shadcn UI
- Set up routing using `react-router-dom`

---

### ✅ Day 2: Backend Foundation

**Backend**
- Set up Express server
- Connected to Supabase (auth + PostgreSQL)
- Created Supabase tables: `colleges`, `users`, `categories`
- Scaffolded RESTful routes: `/colleges`, `/users`

**Frontend**
- Created base layout: `Navbar`, `Footer`
- Set up routes: `Home`, `Login`, `Signup`, `404`

---

### ✅ Day 3: Authentication System

**Backend**
- Implemented user registration and login using Supabase
- Generated JWTs and added middleware for protected routes
- Integrated password reset via Supabase Auth

**Frontend**
- Created login and signup forms with validation
- Connected forms to backend API
- Added session management using Context API or state management

---

### ✅ Day 4: College Data API

**Backend**
- Created full CRUD for `colleges` collection
- Added search, filter, and pagination support
- Standardized error/success responses

**Frontend**
- Built college list page with search bar and pagination
- Connected frontend to backend API

---

### ✅ Day 5: Advanced Search Backend

**Backend**
- Implemented full-text search with PostgreSQL `tsvector`
- Added filters: `location`, `fees`, `ratings`
- Added sorting options: `popularity`, `fees`, `reviews`
- Optimized queries with indexing

**Frontend**
- Created filter UI (dropdowns, sliders)
- Connected filters to API via query params

---

## 📆 Week 2: UI Enhancement & User Features

### ✅ Day 6: Search & Filter UI Enhancement

**Frontend**
- Built advanced filter UI with Shadcn components
- Synced filters with URL params
- Implemented loading and empty states
- Added caching using React Query

---

### ✅ Day 7: College Comparison Feature

**Frontend**
- Enabled multi-select for comparing colleges
- Built responsive comparison table (fees, placements, etc.)
- Used `localStorage` to persist selections

---

### ✅ Day 8: User Dashboard

**Frontend**
- Built dashboard layout with tab navigation
- Displayed saved colleges and recently viewed colleges
- Added user preferences section

---

### ✅ Day 9: College Detail Page

**Frontend**
- Designed detail page with tabs: `Overview`, `Courses`, `Reviews`, `Gallery`
- Added breadcrumbs
- Integrated image gallery with Lightbox
- Built course filter UI

---

### ✅ Day 10: Reviews & Ratings System

**Backend**
- Created `reviews` table in Supabase
- Enabled moderation status, helpful/unhelpful votes
- Developed voting logic

**Frontend**
- Built review form with star rating
- Displayed average rating and reviews list
- Added helpful/unhelpful vote buttons

## 🧱 Tech Stack

- **Frontend**: React, TypeScript, Tailwind CSS, Shadcn UI, React Router
- **Backend**: Node.js, Express, Supabase (PostgreSQL + Auth)
- **Tools**: ESLint, Prettier, Husky, React Query, JWT, Vite

---

.
