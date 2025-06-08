
# 📘 BlindZone – Technical Requirements Document

A location-based, anonymous dating app that connects users nearby with privacy-first real-time chat features.

---

## 📱 Platform Support
- Mobile-first (PWA/Responsive Web App)
- Android (via PWA or React Native in future)
- iOS (via PWA or React Native in future)

## 🛠️ Tech Stack

### Frontend
- **React.js** with **Vite**
- **Tailwind CSS** for styling (dark, minimal UI)
- **React Router** for navigation
- **React Query / SWR** (for data fetching & caching)
- **Lucide Icons** or **Heroicons**

### Backend
- **Node.js** + **Express.js**
- **MongoDB** (with Mongoose ORM)
- **Socket.IO** or **Stream Chat** (for real-time messaging)
- **JWT** (for authentication)
- **Rate Limiting** middleware

### DevOps & Infra
- **Vercel** (Frontend Hosting)
- **Render / Railway / Fly.io** (Backend + DB)
- **Cloudinary** or **ImageKit** (Image CDN)
- **GitHub Actions** (CI/CD pipelines)
- **Docker** (optional for containerization)

## 🔐 Security
- Password hashing with bcrypt
- HTTPS enforced via Vercel/SSL certs
- JWT rotation & token expiration
- Helmet.js & CORS configs
- Rate limiting, request validation (Joi/Yup)

## 📡 APIs
- RESTful architecture
- Geo-location APIs for proximity detection (e.g., Google Maps API, IP geolocation fallback)
- OTP/email verification service (Mailgun/SendGrid)
- Optional: Firebase or OTP-less auth

## 🧠 Architecture Overview
- **Monorepo** (optional): `/client` and `/server`
- **Controller-Service-Repo** pattern on backend
- Modular React structure (pages, components, hooks, contexts)
- Secure environment configs with dotenv

## 💾 Database Schema (MongoDB)
Collections:
- **Users**: username, hashedPassword, preferences, currentLocation, etc.
- **Chats**: user1Id, user2Id, messages[], timestamps
- **Messages**: senderId, text, readStatus, createdAt
- **Interests/Swipes**: userId, targetId, isLiked

Indexes:
- 2dsphere index on location for geospatial queries

## 🧪 Testing
- **Frontend**: Jest + React Testing Library
- **Backend**: Jest + Supertest
- Optional: Cypress for end-to-end flows

## 📈 Analytics & Logs
- Privacy-focused analytics (e.g., Plausible, PostHog)
- Server logs with Morgan + Winston or LogRocket for frontend

## 📤 Future Enhancements
- In-app payments / subscriptions (Stripe)
- AI-powered match suggestions
- Moderation tools (report/block system)
- Push Notifications (via FCM or OneSignal)
- Voice/video calls with WebRTC
