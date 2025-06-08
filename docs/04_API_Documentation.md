# BlindZone API Documentation

---

## Overview

This document outlines the REST and WebSocket API endpoints for **BlindZone** — an anonymous, location-based dating app. It covers authentication, user discovery, messaging, and expected request/response formats.

---

## Authentication Flow

1. User signs up with email and password.
2. Server returns a JWT token on successful login/signup.
3. Include `Authorization: Bearer <token>` header for protected routes.
4. Tokens must be validated on every request.

---

## API Endpoints

### 1. `POST /signup`

Register a new user.

**Request Body:**

```json
{
  "email": "user@example.com",
  "password": "securePassword123"
}
```

**Success Response:**

```json
{
  "message": "User registered successfully",
  "token": "<jwt_token>"
}
```

**Error Response:**

```json
{
  "error": "Email already exists"
}
```

---

### 2. `POST /login`

Authenticate user and return JWT token.

**Request Body:**

```json
{
  "email": "user@example.com",
  "password": "securePassword123"
}
```

**Success Response:**

```json
{
  "message": "Login successful",
  "token": "<jwt_token>"
}
```

**Error Response:**

```json
{
  "error": "Invalid credentials"
}
```

---

### 3. `GET /nearby-users`

Fetch users near the current location.

**Headers:**

```
Authorization: Bearer <jwt_token>
```

**Query Parameters:**

| Parameter | Type    | Description                 | Required           |
| --------- | ------- | --------------------------- | ------------------ |
| latitude  | float   | User's current latitude     | Yes                |
| longitude | float   | User's current longitude    | Yes                |
| radius    | integer | Search radius in kilometers | No (default: 5 km) |

**Success Response:**

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

### 4. `POST /send-message`

Send a message to a matched user (WebSocket fallback supported).

**Headers:**

```
Authorization: Bearer <jwt_token>
```

**Request Body:**

```json
{
  "toUserId": "user456",
  "message": "Hey, wanna chat?"
}
```

**Success Response:**

```json
{
  "message": "Message sent"
}
```

**Error Response:**

```json
{
  "error": "User not matched"
}
```

---

## Notes

- JWT token required for all endpoints except `/signup` and `/login`.
- WebSocket support is planned for real-time chat.
- Rate limiting applies for API abuse prevention.
- Return proper HTTP status codes: `401 Unauthorized`, `400 Bad Request`, `500 Server Error`, etc.

---

## Recommended Tools

- [Postman](https://www.postman.com/) for manual API testing.
- [Swagger](https://swagger.io/) for interactive API documentation.
- Markdown files (`docs/api.md`) for simple readable documentation.

---

> Keep your tokens secure and refresh them regularly to maintain security.

---

_Happy coding! 🚀_
