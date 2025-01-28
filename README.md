# 📚 Course Manager (Frontend)

## 📋 Overview

**Course Manager** is a web application designed to help instructors manage lesson plans for training institutes. The primary objective of this application is to provide a platform for instructors to create, manage, and share lesson plans with students. The application is designed to be user-friendly and intuitive, with a focus on enhancing the learning experience for students.

This repository contains the Angular frontend for the **Course Manager** application. The [backend](https://github.com/impradp/CourseManager) is hosted in a separate repository.

## ✨ Features

- **Course Management**: Create, update, and manage lesson plans.
- **User Authentication**: Secure login, signup, and password reset functionality.
- **Dashboard**: Overview of courses and lesson plans.
- **Profile Management**: Update user profile information.
- **Responsive Design**: Built with Angular Material and Tailwind CSS for a seamless experience across devices.

## 🛠️ Technologies Used

- **Angular** (v19.0.0)
- **Angular Material** (v19.0.1)
- **Tailwind CSS** (v3.4.16)
- **RxJS** (v7.8.0)
- **ngx-toastr** (v19.0.0) for notifications
- **TypeScript** (v5.6.2)

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or later)
- Angular CLI (v19.0.2 or later)

### Installation

1. Clone the repository:

   ```bash
   git clone git@github.com:impradp/course-manager-frontend.git
   ```

2. Navigate to the project directory::

   ```bash
   cd course-manager-frontend
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

### Running the Application

1. Start the development server:
   ```bash
   npm start
   ```
2. Open your browser and navigate to `http://localhost:4200`

### Building the Application

To build the project for production, run:

```bash
npm run build
```

## 📁 Project Structure

The project is structured as follows:

- **`src/app`**: Contains the main application code.

  - **`core`**: Core services and utilities.
  - **`features`**: Feature modules for different parts of the application.
    - **`courses`**: Course management functionality.
    - **`dashboard`**: Dashboard overview.
    - **`forgot-password`**: Password reset functionality.
    - **`login`**: User login functionality.
    - **`profile`**: User profile management.
    - **`reset-password`**: Password reset functionality.
    - **`signup`**: User registration functionality.
    - **`shared`**: Shared components and services.
  - **`apiservices.ts`**: API service for handling HTTP requests.
  - **`app.component.*`**: Root component of the application.
  - **`app.config.ts`**: Application configuration.
  - **`app.routes.ts`**: Application routing configuration.

- **`public`**: Static assets like images and fonts.
- **`tailwind.config.js`**: Tailwind CSS configuration.

## 📚 Documentation

For a detailed understanding of the project, refer to the 50-day series of chapters documenting both the frontend and backend development:

- [Documentation Folder](https://drive.google.com/drive/folders/1VDg5F9LVjIvLnlqLTl9jBjQScUSCLHlh?usp=sharing)

## 👥 Contributors

- **Pradip Puri**
  - Website: [impradp.vercel.app](https://impradp.vercel.app)
  - LinkedIn: [linkedin.com/in/impradp](https://linkedin.com/in/impradp)
  - Email: [impradp@gmail.com](mailto:impradp@gmail.com)

## 📄 License

This project is proprietary and confidential. Unauthorized copying, modification, distribution, or use of this software, via any medium, is strictly prohibited.
