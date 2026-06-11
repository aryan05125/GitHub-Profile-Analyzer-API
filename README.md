# GitHub Profile Analyzer API

## Overview
This project analyzes GitHub user profiles using the GitHub Public API and stores useful insights in MySQL.

## Tech Stack
- Node.js
- Express.js
- MySQL
- GitHub API

## Features
- Analyze GitHub profile by username
- Store profile data in MySQL
- Get all analyzed profiles
- Get single profile by ID

## API Endpoints

### Analyze Profile
POST /api/profile/analyze

Request:
{
  "username": "torvalds"
}

### Get All Profiles
GET /api/profile

### Get Single Profile
GET /api/profile/:id

## Setup

npm install

Create .env file:

PORT=5000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=github_analyzer

Run:

npm run dev
