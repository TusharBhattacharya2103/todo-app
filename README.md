Todo App 📝
A simple RESTful Todo API built with Node.js, Express, and MongoDB (Mongoose). This project provides endpoints to create, read, update, and delete todo items and is ideal as a starter backend for learning or prototyping.

Table of Contents
📌 Features
🛠️ Tech Stack
⚙️ Requirements
🚀 Getting Started
🔌 Environment Variables
📫 API Endpoints
🧪 Testing & Development
🤝 Contributing
⚠️ Troubleshooting
📄 License
Features
Create, read, update, and delete todos
JSON API with clear success/error responses
Simple Mongoose schema with validation
Quick start with npm run dev (nodemon)
Tech Stack 🔧
Node.js
Express
MongoDB + Mongoose
dotenv
nodemon (dev)
Requirements
Node.js (>= 14)
MongoDB instance or Atlas connection string
npm
Getting Started 🚀
Clone the repo:
Install dependencies:
Create a .env file in the project root (see next section).
Start the server (development):
Or for production:
Open http://localhost:4000 (or your PORT) — default root responds with "Welcome to Todo App".
Environment Variables
Create a .env file with at least:

Note: This project uses the DATA_BASE_URL env var to connect to MongoDB.

API Endpoints 📡
Base URL: /api/v1

Create Todo

POST /api/v1/create-todo
Body (JSON):
Success: 201 with created object
Get All Todos

GET /api/v1/get-todo
Success: 200 with an array of todos
Get Todo By ID

GET /api/v1/get-todo/:id
Success: 200 with todo object
Not found: 404
Update Todo

PUT /api/v1/update-todo/:id
Body (JSON):
Success: 200 with updated object
Delete Todo

DELETE /api/v1/delete-todo/:id
Success: 200 with deleted object
Response format (successful):

Model notes:

title: string, required, maxLength 50
description: string, required, maxLength 50
createdAt, updatedAt: timestamps
Examples (curl)
Create:

Get all:

Testing & Development 🧪
Use Postman or curl to hit endpoints.
Use npm run dev for auto-reload via nodemon.
Contributing 🤝
Fork the repo, create a branch, and open a PR.
Keep changes focused and add tests for non-trivial logic.
Please update this README.md with any new features or changes.
Troubleshooting ⚠️
"Database connection error": verify DATA_BASE_URL and network access.
"Port in use": change PORT in .env or free the port.
Ensure MongoDB user has proper permissions for the database.
