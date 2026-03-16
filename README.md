# Zoon

Zoon is a full-stack web application designed to demonstrate real-time communication and modern web development practices using a JavaScript-centric technology stack. The project is structured with a clear separation between the frontend and backend, enabling scalable development and maintainability.

The application leverages Node.js, Express, MongoDB, and Socket.IO to enable real-time interactions between users while maintaining secure authentication and efficient data management.

---

## Project Overview

Zoon is built with a client-server architecture:

* **Frontend** handles the user interface and client interactions.
* **Backend** manages API requests, authentication, database operations, and real-time communication.

The system enables dynamic communication between users through real-time technologies while maintaining persistent data through a database.

---

## Tech Stack

### Frontend

* JavaScript
* HTML
* CSS
* Modern frontend tooling

### Backend

* Node.js
* Express.js
* Socket.IO

### Database

* MongoDB
* Mongoose ODM

### Security and Utilities

* bcrypt (password hashing)
* dotenv (environment variable management)
* cors (cross-origin resource sharing)
* http-status (standardized HTTP response codes)

---

## Architecture

```
Zoon
│
├── backend
│   ├── controllers
│   ├── models
│   ├── routes
│   ├── socket
│   ├── middleware
│   └── server.js
│
├── frontend
│   ├── public
│   ├── src
│   │   ├── components
│   │   ├── pages
│   │   ├── services
│   │   └── styles
│
└── README.md
```

---

## Features

* Real-time communication using WebSockets
* User authentication and authorization
* Secure password storage using hashing
* RESTful API architecture
* Modular and scalable backend structure
* Separation of frontend and backend services
* Database integration with MongoDB
* Environment-based configuration

---

## Real-Time Communication

The project uses **Socket.IO** to enable real-time interactions between clients.

### Example Socket Events

| Event          | Description                         |
| -------------- | ----------------------------------- |
| connection     | Triggered when a client connects    |
| sendMessage    | Emitted when a user sends a message |
| receiveMessage | Broadcast message to recipients     |
| disconnect     | Triggered when a client disconnects |

---

## API Endpoints

### Authentication

#### Register User

```
POST /api/auth/register
```

Creates a new user account.

Request Body

```
{
  "name": "User Name",
  "email": "user@example.com",
  "password": "password"
}
```

---

#### Login User

```
POST /api/auth/login
```

Authenticates a user and returns a session/token.

Request Body

```
{
  "email": "user@example.com",
  "password": "password"
}
```

---

### User Routes

#### Get All Users

```
GET /api/users
```

Returns a list of all registered users.

---

#### Get User by ID

```
GET /api/users/:id
```

Returns details of a specific user.

---

#### Update User

```
PUT /api/users/:id
```

Updates user profile information.

---

#### Delete User

```
DELETE /api/users/:id
```

Removes a user account from the database.

---

### Messages

#### Send Message

```
POST /api/messages
```

Stores a new message.

Request Body

```
{
  "senderId": "user_id",
  "receiverId": "user_id",
  "message": "Hello"
}
```

---

#### Get Messages

```
GET /api/messages/:conversationId
```

Fetches message history for a conversation.

---

## Installation

### 1. Clone the repository

```
git clone https://github.com/harshhsharmaa57/Zoon.git
```

```
cd Zoon
```

---

### 2. Install Backend Dependencies

```
cd backend
npm install
```

---

### 3. Install Frontend Dependencies

```
cd ../frontend
npm install
```

---

### 4. Setup Environment Variables

Create a `.env` file inside the backend folder.

Example configuration:

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
CLIENT_URL=http://localhost:3000
```

---

### 5. Start the Backend Server

```
cd backend
npm start
```

---

### 6. Start the Frontend

```
cd frontend
npm start
```

---

## Running the Application

Backend runs on:

```
http://localhost:5000
```

Frontend runs on:

```
http://localhost:3000
```

---

## Database Schema

### User Model

```
User
 ├── name
 ├── email
 ├── password
 ├── createdAt
```

---

### Message Model

```
Message
 ├── senderId
 ├── receiverId
 ├── message
 ├── timestamp
```

---

## Security Considerations

* Passwords are hashed using bcrypt before storage.
* Sensitive configuration values are stored using environment variables.
* CORS policies prevent unauthorized cross-origin requests.

---

## Development Principles

The project follows several development practices:

* Modular backend architecture
* Separation of concerns
* Scalable folder structure
* RESTful API conventions
* Environment-based configuration

---

## Future Improvements

Potential enhancements for the project include:

* JWT based authentication
* File sharing support
* Video or voice communication
* Push notifications
* Improved UI and UX
* Docker containerization
* CI/CD deployment pipelines

---

## Contributing

Contributions are welcome.
If you would like to contribute:

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Submit a pull request

---

## License

This project is open source and available under the MIT License.

---

## Author

Harsh Kumar Sharma

GitHub:
https://github.com/harshhsharmaa57

---

## Acknowledgements

This project was developed to explore real-time web technologies and modern full-stack development practices using Node.js and modern JavaScript frameworks.
