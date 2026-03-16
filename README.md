# Meeting

Meeting is a full-stack real-time video meeting web application that allows users to create and join video meeting rooms directly from the browser. The platform uses modern web technologies such as **Node.js, Express, MongoDB, Socket.IO, React, and WebRTC** to enable peer-to-peer video communication.

The application supports authentication, meeting history tracking, and real-time communication between participants.

---

# Live Demo

The application is deployed and accessible at

http://meet-29j2.onrender.com/

Users can create or join meetings directly from the browser without installing additional software.

---

# Project Overview

Meeting follows a **client-server architecture**.

Frontend (React)

* Handles UI rendering
* Manages authentication state
* Connects to backend APIs
* Establishes WebRTC video streams

Backend (Node.js + Express)

* Handles authentication
* Stores meeting history
* Provides REST APIs
* Manages Socket.IO signaling server

Database (MongoDB)

* Stores users
* Stores meeting activity history

---

# Tech Stack

## Frontend

* React
* React Router
* Context API
* WebRTC
* Socket.IO Client
* HTML
* CSS
* JavaScript

## Backend

* Node.js
* Express.js
* Socket.IO
* MongoDB
* Mongoose

## Security

* bcrypt (password hashing)
* crypto (token generation)
* dotenv (environment configuration)
* cors (cross origin support)

## Deployment

* Render

---

# System Architecture

```
Client Browser (React)
        |
        |
Socket.IO + REST APIs
        |
        |
Node.js + Express Server
        |
        |
MongoDB Database
```

WebRTC enables **peer-to-peer media streaming**, while Socket.IO acts as a **signaling server** for exchanging connection information.

---

# Project Structure

```
Meeting
│
├── backend
│   ├── controllers
│   │    ├── user.controller.js
│   │    └── socketManager.js
│   │
│   ├── models
│   │    ├── user.model.js
│   │    └── meeting.model.js
│   │
│   ├── routes
│   │    └── users.route.js
│   │
│   └── server.js
│
├── frontend
│   ├── pages
│   │    ├── landing
│   │    ├── authentication
│   │    ├── home
│   │    ├── history
│   │    └── VideoMeet
│   │
│   ├── contexts
│   │    └── AuthContext
│   │
│   └── App.js
│
└── README.md
```

---

# Backend API

Base API path

```
/api/v1/users
```

---

# API Endpoints

## Health Check

```
GET /health
```

Purpose

Verify that the backend server is running.

Response

```
{
  "Hello": "world"
}
```

---

# Authentication Endpoints

## Register User

```
POST /api/v1/users/register
```

Creates a new user account.

Request Body

```
{
  "name": "Harsh",
  "username": "harsh123",
  "password": "password123"
}
```

Process

1. Checks if the username already exists
2. Hashes password using bcrypt
3. Saves user to MongoDB
4. Returns success response

Response

```
{
  "message": "User Registered"
}
```

---

# Login User

```
POST /api/v1/users/login
```

Authenticates a user.

Request Body

```
{
  "username": "harsh123",
  "password": "password123"
}
```

Process

1. Finds user in MongoDB
2. Compares hashed password using bcrypt
3. Generates random authentication token
4. Saves token in user document
5. Returns token

Response

```
{
  "token": "random_generated_token"
}
```

The token is later used to authenticate activity requests.

---

# Meeting Activity Endpoints

These endpoints manage **meeting history**.

---

## Add Meeting to History

```
POST /api/v1/users/add_to_activity
```

Adds a meeting code to the user's activity history.

Request Body

```
{
  "token": "user_token",
  "meeting_code": "meeting123"
}
```

Process

1. Finds user by token
2. Creates a meeting entry
3. Saves meeting code to MongoDB

Response

```
{
  "message": "Added code to history"
}
```

---

## Get User Meeting History

```
GET /api/v1/users/get_all_activity
```

Returns the meeting history of a user.

Query Parameter

```
?token=user_token
```

Example

```
GET /api/v1/users/get_all_activity?token=abc123
```

Response

```
[
  {
    "user_id": "harsh123",
    "meetingCode": "meeting123"
  }
]
```

---

# Database Schema

## User Model

```
User
 ├── name
 ├── username
 ├── password (hashed)
 ├── token
 └── createdAt
```

---

## Meeting Model

```
Meeting
 ├── user_id
 ├── meetingCode
 └── createdAt
```

---

# Frontend Routes

The React application defines several client routes.

```
/            → Landing Page
/auth        → Login / Register Page
/home        → Main Dashboard
/history     → User Meeting History
/:url        → Video Meeting Room
```

---

# Video Meeting System

When a user joins a meeting room

1. The URL `/meetingCode` opens the VideoMeet component.
2. The client connects to the Socket.IO server.
3. WebRTC peer connections are created.
4. Media streams are exchanged between peers.
5. The meeting runs directly between browsers.

---

# Authentication Flow

```
User registers
     ↓
User logs in
     ↓
Server generates token
     ↓
Token stored on client
     ↓
Token used for API requests
     ↓
Meeting history stored
```

---

# Meeting History System

Whenever a user joins or creates a meeting

1. Frontend sends meeting code
2. Backend stores meeting code
3. Entry saved in MongoDB
4. User can view history in `/history` page

---

# Real-Time Communication

Meeting uses **Socket.IO** to handle real-time signaling between clients.

Typical socket events include

* connection
* join-room
* user-connected
* user-disconnected
* signal exchange for WebRTC

These events allow browsers to establish peer connections.

---

# Installation

## Clone the repository

```
git clone https://github.com/harshhsharmaa57/Zoon.git
```

```
cd Zoon
```

---

# Install Backend Dependencies

```
cd backend
npm install
```

---

# Install Frontend Dependencies

```
cd ../frontend
npm install
```

---

# Environment Variables

Create a `.env` file in backend.

```
PORT=8000
MONGO_URL=your_mongodb_connection_string
```

---

# Run Backend

```
cd backend
npm start
```

Server runs on

```
http://localhost:8000
```

---

# Run Frontend

```
cd frontend
npm start
```

Frontend runs on

```
http://localhost:3000
```

---

# Deployment

The project is deployed on Render.

Live URL

http://meet-29j2.onrender.com/

---

# Features

* Real time video meeting rooms
* WebRTC peer-to-peer streaming
* User authentication
* Meeting history tracking
* Token based authentication
* MongoDB data persistence
* React based UI
* Socket.IO signaling server

---

# Future Improvements

Possible future improvements

* Screen sharing
* Chat during meetings
* Meeting recording
* User profile management
* TURN server support
* Mobile responsiveness
* Docker containerization

---

# Author

Harsh Kumar Sharma

GitHub
https://github.com/harshhsharmaa57

---

# License

This project is open source and available under the MIT License.
