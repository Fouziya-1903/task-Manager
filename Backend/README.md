# Task Manager API

A REST API for task management with role-based access control (Admin/User), built with Node.js, Express, and MongoDB.

## Overview

Backend service for assigning, tracking, and managing tasks across a team. Admins can manage users and assign tasks; users can view and update the status of tasks assigned to them. Authentication is JWT-based with bcrypt password hashing, and API endpoints are documented via Swagger.

## Features

Auth
- Register / login with hashed passwords (bcrypt)
- JWT-based session authentication
- `GET /api/auth/me` — fetch current authenticated user

**Admin Capabilities** (role-protected)
- Full user CRUD (create, list, update, delete)
- Full task CRUD, including assigning tasks to users
- `GET /api/admin/stats` — task/user statistics overview

**User Capabilities** (role-protected)
- View tasks assigned to them
- Update the status of their own tasks

**Cross-cutting Architechture**
- Role-based route protection via reusable `protect` + `authorize` middleware
- Centralized error-handling middleware
- Interactive API docs via Swagger UI at `/docs`

## Tech Stack
* **Runtime:** Node.js
* **Framework:** Express.js
* **Database & ODM:** MongoDB, Mongoose
* **Security & Auth:** JWT, bcrypt.js
* **Documentation:** Swagger (`swagger-jsdoc`, `swagger-ui-express`)

> Note: this repo currently contains the backend only. A frontend is not yet included.

Project Structure
``` text
Backend/
├── server.js # app entry point
├── src/
│ ├── config/
│ │ ├── db.js # MongoDB connection
│ │ └── swagger.js # Swagger config
│ ├── controllers/
│ │ ├── authController.js
│ │ ├── adminController.js
│ │ └── userController.js
│ ├── middleware/
│ │ ├── auth.js # JWT verification
│ │ └── roleCheck.js # role-based authorization
│ ├── models/
│ │ ├── User.js
│ │ └── Task.js
│ ├── routes/
│ │ ├── auth.js
│ │ ├── admin.js
│ │ └── user.js
│ └── docs/ # Swagger endpoint definitions
```

## Getting Started

**Prerequisites**

1. Make sure you have Node.js and MongoDB installed locally or have a connection URI ready.
```bash
git clone https://github.com/Fouziya-1903/task-Manager.git
cd task-Manager/Backend
```

2. Install dependencies
```
npm install
```

3. Create a `.env` file in the root directory and configure your environment variables:
```
PORT=5000
NODE_ENV=development
MONGODB_URI=mongodb://localhost:27017/task_management
JWT_SECRET=your_secret_key
```

Run the application:
```bash
npm run dev
```

**API docs available at** `http://localhost:5000/docs` once running.

## API Endpoints (summary)

| Method | Endpoint | Access |
|---|---|---|
| POST | `/api/auth/register` | Public |
| POST | `/api/auth/login` | Public |
| GET | `/api/auth/me` | Authenticated |
| GET/POST/PUT/DELETE | `/api/admin/users` | Admin |
| GET/POST/PUT/DELETE | `/api/admin/tasks` | Admin |
| GET | `/api/admin/stats` | Admin |
| GET | `/api/user/tasks` | User |
| GET/PUT | `/api/user/tasks/:id` | User |

Full request/response schemas available via Swagger UI documentation.

## Live Deployment & Testing
* **Live API & Swagger Docs:** https://task-manager-lw2b.onrender.com/docs

## What's Next

- [ ] Implement automated testing (Jest & Supertest)
- [ ] Build a responsive React frontend dashboard

## Author

**Fouziya Shaik**
- GitHub: [@Fouziya-1903](https://github.com/Fouziya-1903)
- LinkedIn: [fouziya-shaik](https://www.linkedin.com/in/fouziya-shaik/)
