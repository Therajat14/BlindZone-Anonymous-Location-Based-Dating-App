# 📝 Product Requirements Document (PRD) - BlindZone

## 1. 🎯 Purpose

**BlindZone** is an anonymous, location-based dating/chat app that helps users discover nearby potential matches while keeping their identity private. Inspired by Snapchat-style interaction and real-time engagement, BlindZone prioritizes privacy and spontaneity.

## 2. 👥 Target Users

- Young adults (18–30) looking for spontaneous connections nearby
- Users who value **anonymity** in their early interaction stages
- People seeking an alternative to conventional dating apps

## 3. 🧩 Key Features (MVP)

- 🔒 Anonymous onboarding (no full name/photo required)
- 📍 Location-based matchmaking (with privacy zones)
- 💬 Real-time chat (enabled only on mutual interest)
- 👻 Disappearing messages and temporary visibility
- 📱 Mobile-first UI (React + Tailwind)

## 4. ✍️ User Stories

### As a user...

- I want to create an anonymous profile so I can use the app without revealing my identity.
- I want to discover people near me based on my current location.
- I want to chat only with people I’m interested in.
- I want to control when and what I reveal in a chat.

## 5. 📦 Versioning Roadmap

### ✅ MVP (v0.1)

- Anonymous registration and login (Firebase Auth or custom JWT)
- Geolocation permission and radius-based user discovery
- Match only if both users like each other

### 🚀 v1.0

- Media messages (images, audio snippets)
- User reputation/feedback system
- In-app notifications and match reminders

### 💰 v1.1 (Monetization)

- Premium visibility boosts
- “Reveal now” credits (to see unblurred profile)
- Ads (location-aware and contextual)
- Invite-to-unlock features

## 6. ⚠️ Constraints & Assumptions

- Users must allow location access for the core experience
- App is optimized for mobile devices only (PWA or native wrapper)
- All chats will be encrypted and disappear after 24 hours by default

## 7. 📐 Success Metrics

- Daily active users (DAU)
- Match conversion rate (views ➜ chats)
- Retention rate (Day 1, Day 7)
- Feedback ratings (from early users)
