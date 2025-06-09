# BlindZone Roadmap

A clear, sprint-wise plan for building **BlindZone**, an anonymous, location-based dating/chat web app using the MERN stack.

---

## 📋 1. Vision & Objectives

- **Vision:** A simple web app that connects nearby users anonymously via text chat.
- **Objectives:**  
  - Build and launch MVP in 6 weeks.  
  - Implement core features: auth, location discovery, real-time chat.  
  - Use only MERN stack (MongoDB, Express, React, Node.js) and Socket.io.

---

## ⚙️ 2. Technology Stack

| Layer          | Technology                          |
|----------------|--------------------------------------|
| Backend        | Node.js, Express                     |
| Database       | MongoDB, Mongoose                    |
| Real-time      | Socket.io                            |
| Frontend       | React, Tailwind CSS                  |
| Auth & Security| JWT, bcrypt                          |
| Deployment     | Heroku / Netlify / Vercel            |
| CI/CD          | GitHub Actions                       |

---

## 📆 3. Phase Overview

| Phase       | Duration | Deliverables                                        |
|-------------|----------|----------------------------------------------------|
| Phase 0     | 1 week   | Setup repo, CI/CD, env; basic React & Express boilerplate |
| Phase 1     | 2 weeks  | User auth, JWT, hashing, user model, signup/login UI   |
| Phase 2     | 1 week   | Location discovery: geolocation capture & Mongo geospatial query |
| Phase 3     | 2 weeks  | Real-time chat: Socket.io integration, chat UI          |
| Phase 4     | 1 week   | UI polish, responsive design; basic tests              |
| Phase 5     | 1 week   | Beta testing, bug fixes, deploy MVP                   |

---

## 🚀 4. Detailed Sprint Plan

### Phase 0: Setup (Week 1)
- Initialize Git repo and GitHub Actions for CI.
- Configure environment files (`.env` for PORT, MONGO_URI, JWT_SECRET).
- Scaffold Express server and React app (Vite or Create React App).
- Connect frontend and backend via proxy or CORS.

### Phase 1: Authentication (Weeks 2–3)
- **Backend:**  
  - User schema (email unique, password hash).  
  - Auth routes: `/signup`, `/login`.  
  - JWT generation and middleware to protect routes.
- **Frontend:**  
  - Signup and login forms with validation.  
  - Store JWT in memory or secure cookie.

### Phase 2: Location Discovery (Week 4)
- Capture user’s geolocation (HTML5 Geolocation API).
- Save coordinates to user profile.
- Build API endpoint `/discover` that returns nearby users (Mongo geospatial index).
- Frontend: display list or map markers of nearby anonymous users.

### Phase 3: Real-Time Chat (Weeks 5–6)
- **Backend:**  
  - Integrate Socket.io on the Express server.  
  - Handle user join, message events, and leave.

- **Frontend:**  
  - Connect to Socket.io server.  
  - Chat interface: message list, input box, send button.  
  - Assign random anonymous display name per session.

### Phase 4: Polish & Testing (Week 7)
- Responsive design tweaks for mobile and desktop.
- Add basic unit/integration tests for critical routes.
- Input sanitization and error handling.

### Phase 5: Beta Launch (Week 8)
- Internal beta testing with a small group.
- Fix identified bugs and performance bottlenecks.
- Deploy to production (Heroku/Vercel).  
- Share link for feedback.

---

## ✅ 5. Next Steps

1. Kick off Phase 0 with repo setup and environment configuration.  
2. Assign tasks and set up daily stand-ups.  
3. Start building core features in Phase 1.

---

*Prepared by Rajat Singh — Full Stack Web Developer*
