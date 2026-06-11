# GitHub Profile Analyzer API

## Tech Stack
- Node.js
- Express.js
- MySQL
- GitHub API

## Features
- Analyze GitHub profile by username
- Store profile insights in MySQL
- Fetch all analyzed profiles
- Fetch single profile by ID

## API Endpoints

### Analyze Profile
POST /api/profile/analyze

Body:
{
  "username": "torvalds"
}

### Get All Profiles
GET /api/profile

### Get Single Profile
GET /api/profile/:id

## Installation

npm install

Create .env file:

PORT=5000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=github_analyzer

Run:

npm run dev
