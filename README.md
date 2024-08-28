# PawfectMatch 🐾

PawfectMatch is a full-stack web application designed to help users find their perfect pet match. This project leverages a MERN stack (MongoDB, Express, React, Node.js) along with AWS S3 for image storage and JWT for secure authentication.

## Live Link
[PawfectMatch](https://weathewise.netlify.apphttps://pawfectmatch-1.onrender.com/)

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Future Enhancements](#future-enhancements)


## Introduction

PawfectMatch is an application that allows users to view, adopt, and learn more about various animals available for adoption. Admins can manage the list of animals, including adding, editing, and deleting animal profiles.

## Features

- **User-Friendly Interface**: Easy-to-use UI for viewing animals and their details.
- **Admin Dashboard**: Admins can add, update, and delete animal profiles.
- **Secure Authentication**: JWT-based authentication for admins.
- **Image Storage**: AWS S3 integration for storing and serving animal images.
- **Responsive Design**: Optimized for desktop and mobile views.

## Technologies Used

- **Frontend**:
  - React.js
  - Tailwind CSS
  - FontAwesome

- **Backend**:
  - Node.js
  - Express.js

- **Database**:
  - MongoDB

- **Storage**:
  - AWS S3

- **Authentication**:
  - JSON Web Tokens (JWT)
 

## Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/yourusername/pawfectmatch.git
   cd pawfectmatch

   ## Environment Variables
   ```plaintext
    # MongoDB connection string
    MONGO_URI=your_mongodb_connection_string

    # JWT Secret for authentication
    JWT_SECRET=your_jwt_secret

    # AWS S3 Configuration
    AWS_ACCESS_KEY=your_aws_access_key
    AWS_SECRET_ACCESS_KEY=your_aws_secret_access_key
    BUCKET_NAME=your_s3_bucket_name
    BUCKET_REGION=your_s3_bucket_region

    # Server Port
    PORT=your_port_number


### 2. Install Dependencies

- **Frontend**:
  
  Navigate to the frontend directory and install the required dependencies:

  ```bash
  cd frontend
  npm install

- **Backend**:
  
  Navigate to the backend directory and install the required dependencies:

  ```bash
  cd backend
  npm install

## Usage

- **Admin Login**: Log in to the admin dashboard using the hardcoded credentials.
- **Manage Animals**: Add, edit, or delete animal profiles.
- **View Animals**: Users can view details of animals and express interest in adopting them.

## Feature Enhancements

- **Admin Registration Form**: Implement a registration form for Admins to create personalized dashboards instead of using hardcoded credentials.
- **Carousel for Multiple Photos**: Create a photo carousel feature to display multiple images of an animal on their profile.
- **Animal Type Filtering**: Add filtering options for users to sort animals by type (e.g., Dog, Cat, Rabbit).




