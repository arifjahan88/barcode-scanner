# Barcode-Driven Inventory Management System

## Project Overview

This is a comprehensive Inventory Management System, featuring barcode scanning, Kanban-style product categorization, and robust backend functionality.

## Technologies Used

### Frontend

- Next.js 15
- React 19
- Redux Toolkit
- Ant Design
- Quagga (Barcode Scanning)
- Tailwind CSS
- React Hook Form
- React Toastify

### Backend

- Node.js
- Express
- MongoDB
- Mongoose
- JWT Authentication
- Bcrypt

## Core Features

### 1. Barcode Scanning

- Seamless product information retrieval using external product API
- Automatic saving of scanned product details to MongoDB
- Products initially categorized in 'Uncategorized' section

### 2. Kanban Board

- Fully responsive drag-and-drop interface
- Dynamic category creation
- Intuitive product categorization
- Mobile and desktop compatible

### 3. Backend API

- RESTful API endpoints for:
  - Product addition
  - Product retrieval (with optional category filtering)
  - Product category updates
- Secure MongoDB database integration

### 4. Authentication

- Implemented secure user authentication
- JWT-based token management
- Password hashing with Bcrypt

## Setup and Installation

### Prerequisites

- Node.js (v18+ recommended)
- MongoDB

### Backend Setup

1. Clone the repository
2. Navigate to backend directory
3. Install dependencies:
   ```bash
   npm install
   ```
4. Create a `.env` file with:
   - `MONGO_URL`
   - `JWT_SECRET`
   - `JWT_EXPIRY`
5. Run the server:
   ```bash
   npm run dev
   ```

### Frontend Setup

1. Navigate to frontend directory
2. Install dependencies:
   ```bash
   npm install
   ```
3. Copy `.env.example` to `.env.local` for necessary environment variables
4. Run the development server:
   ```bash
   npm run dev
   ```

## Key Implementation Details

- Responsive design using Tailwind CSS
- State management with Redux Toolkit
- Barcode scanning powered by Quagga
- Drag-and-drop functionality for Kanban board
- Secure authentication workflow

## Limitations

- GraphQL integration is not implemented in this version

## Future Enhancements

- Implement GraphQL API
- Expand analytics dashboard
- Add more advanced search capabilities
