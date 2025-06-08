# 📦 05. Database Schema Documentation

This document outlines the database schema used in the **BlindZone** anonymous, location-based dating app.

## 🧠 Overview

The app uses **MongoDB** as a NoSQL database for its scalability and flexibility in managing user data, chat history, and geolocation-based queries.

---

## 👤 Users Collection

| Field       | Type     | Description                             |
| ----------- | -------- | --------------------------------------- |
| `_id`       | ObjectId | Unique identifier                       |
| `username`  | String   | Unique anonymous display name           |
| `email`     | String   | (Optional) For password recovery        |
| `password`  | String   | Hashed user password                    |
| `location`  | Object   | { latitude: Number, longitude: Number } |
| `interests` | Array    | Tags used for match filtering           |
| `createdAt` | Date     | Registration timestamp                  |

---

## 🗺️ Location Index (GeoJSON)

```json
{
  "location": {
    "type": "Point",
    "coordinates": [longitude, latitude]
  }
}
```

MongoDB uses [2dsphere index](https://docs.mongodb.com/manual/core/2dsphere/) to query nearby users.

---

## 💬 Messages Collection

| Field        | Type     | Description                      |
| ------------ | -------- | -------------------------------- |
| `_id`        | ObjectId | Unique identifier                |
| `fromUserId` | ObjectId | Sender user ID                   |
| `toUserId`   | ObjectId | Receiver user ID                 |
| `message`    | String   | Chat message content             |
| `timestamp`  | Date     | When the message was sent        |
| `seen`       | Boolean  | Whether the receiver has seen it |

---

## ❤️ Matches Collection

| Field       | Type     | Description              |
| ----------- | -------- | ------------------------ |
| `_id`       | ObjectId | Unique identifier        |
| `userA`     | ObjectId | First user in the match  |
| `userB`     | ObjectId | Second user in the match |
| `createdAt` | Date     | When the match was made  |

---

## 🔒 Sessions (Optional for JWT Blacklisting)

| Field       | Type     | Description        |
| ----------- | -------- | ------------------ |
| `_id`       | ObjectId | Unique identifier  |
| `userId`    | ObjectId | Associated user ID |
| `token`     | String   | JWT token          |
| `expiresAt` | Date     | Expiry timestamp   |

---

## 📌 Indexing Strategy

- `location`: 2dsphere index
- `username`: unique index
- `email`: unique index
- `fromUserId`, `toUserId`: indexed for message retrieval
- `createdAt`: descending index for sorting

---

## 🔐 Security Notes

- Passwords are hashed using `bcrypt`
- Messages are not end-to-end encrypted (can be upgraded)
- JWT tokens are stored securely on client (e.g. HTTP-only cookies)

---

## 🧪 Future Tables

- `Reports`: to block/report toxic users
- `Preferences`: customizable visibility and interest settings
- `Notifications`: push updates
