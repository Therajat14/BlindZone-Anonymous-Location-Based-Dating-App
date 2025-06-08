
# 🛠️ Feature Specification Document - BlindZone

BlindZone is a modern, anonymous, location-based dating app designed with privacy-first principles and a clean mobile-first experience.

---

## 🎯 Core Features

### 1. Anonymous Location Matching
- Uses live location to show potential matches nearby.
- No personal info is revealed until both parties show interest.

### 2. Mutual Interest Unlock
- Chat access opens **only** after both users swipe right / show interest.

### 3. Real-Time Chat
- Powered by Stream or Firebase (optional E2E encryption).
- Supports emojis, typing indicators, message read receipts.

### 4. Temporary Disappearing Chats
- Chats disappear after a time (e.g., 24 hours) unless pinned.

### 5. User Profiles (Optional)
- Avatar (can be anonymous icon or custom).
- Fun prompts (e.g., “My weekend vibe: 🍕📺🚲”).

---

## 🧩 Supporting Features

| Feature             | Description                                                                 |
|---------------------|-----------------------------------------------------------------------------|
| **Location Radius** | Users can set preferred search radius (1–20km).                             |
| **Swipe UI**        | Card-style UI for quick decisions (left = skip, right = like).              |
| **Notification**    | Push notifications for matches, messages, and activity.                     |
| **Dark Mode UI**    | Fully minimal, dark-first design tailored for mobile view.                  |
| **Security Filters**| Prevents spam, blocks flagged users, and enforces rate limits.              |

---

## 🧪 Future Ideas (v1.1+)
- **BlindVoice:** Send a short voice intro that disappears after being heard once.
- **Incognito Mode:** Browse without appearing in someone else's queue.
- **BlindDrop:** Anonymous message drops based on physical location (like a geo-message).

---

## 🗂️ API & Backend Highlights
- Authentication: JWT + Refresh Tokens
- Location: Geohashing + MongoDB Geospatial Index
- Realtime Chat: WebSocket or Stream API
- Rate Limiting: Redis or similar store

---

📌 This document will evolve as we iterate over MVP feedback. Contributions welcome.
