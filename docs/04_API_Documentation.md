# BlindZone API Documentation 🚀

A production-ready specification of the REST and WebSocket APIs for **BlindZone** — the anonymous, location-based dating app.

---

## 🔐 Authentication Flow

1. Users sign up or log in with email and password.
2. Backend returns a JWT token on success.
3. Token is passed in `Authorization: Bearer <token>` for all secured routes.
4. Token is validated on each request. Refresh token system is recommended.

---

## 📌 API Versioning

All routes are versioned as `/api/v1/` to support long-term compatibility.

---

## 📬 Endpoints

### 1. `POST /api/v1/signup`

Register a new user.

**Request Body:**

```json
{
  "email": "user@example.com",
  "password": "securePassword123"
}
```

**Success:**

```json
{
  "message": "User registered successfully",
  "token": "<jwt_token>"
}
```

**Failure:**

```json
{
  "error": "Email already exists"
}
```

---

### 2. `POST /api/v1/login`

Authenticate a user and return token.

**Request Body:**

```json
{
  "email": "user@example.com",
  "password": "securePassword123"
}
```

**Success:**

```json
{
  "message": "Login successful",
  "token": "<jwt_token>"
}
```

**Failure:**

```json
{
  "error": "Invalid credentials"
}
```

---

### 3. `GET /api/v1/nearby-users`

Fetch users based on location.

**Headers:**

```
Authorization: Bearer <jwt_token>
```

**Query Params:**

| Param     | Type  | Description                 | Required       |
| --------- | ----- | --------------------------- | -------------- |
| latitude  | float | Current latitude            | ✅             |
| longitude | float | Current longitude           | ✅             |
| radius    | int   | Search radius in kilometers | ❌ (default 5) |

**Success:**

```json
{
  "users": [
    {
      "id": "user123",
      "distance": 1.2,
      "interests": ["music", "travel"],
      "anonymousProfile": true
    }
  ]
}
```

---

### 4. `POST /api/v1/send-message`

Send a message to a user you’ve matched with.

**Headers:**

```
Authorization: Bearer <jwt_token>
```

**Request Body:**

```json
{
  "toUserId": "user456",
  "message": "Hey there 👋"
}
```

**Success:**

```json
{
  "message": "Message sent"
}
```

**Failure:**

```json
{
  "error": "User not matched"
}
```

---

## 📡 WebSocket (Upcoming)

**Connection URL:** `wss://blindzone.app/ws`

**Events:**

| Event            | Payload Example                          |
| ---------------- | ---------------------------------------- |
| `joinRoom`       | `{ "room": "123" }`                      |
| `sendMessage`    | `{ "to": "userId", "message": "Hello" }` |
| `receiveMessage` | `{ "from": "userId", "message": "Hi" }`  |

---

## 🧪 HTTP Status Codes

| Code | Meaning        |
| ---- | -------------- |
| 200  | OK             |
| 201  | Created        |
| 400  | Bad Request    |
| 401  | Unauthorized   |
| 403  | Forbidden      |
| 404  | Not Found      |
| 500  | Internal Error |

---

## 🛡️ Security Considerations

- Passwords hashed with bcrypt.
- JWT with expiry and refresh support.
- HTTPS enforced.
- Rate limiting enabled.
- XSS/SQL Injection sanitized.

---

## 🛠 Recommended Tools

- [Postman](https://www.postman.com/)
- [Swagger UI](https://swagger.io/)
- Markdown: `docs/api.md`

---

## 📌 Changelog

- v1.0.0 — Basic signup/login/match/chat APIs
- v1.1.0 — WebSocket messaging coming soon

---

> BlindZone is built for privacy, minimalism, and meaningful anonymous interactions.
