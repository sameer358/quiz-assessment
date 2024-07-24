# Quiz Assessment Application

## Overview

This Node.js application is a Quiz Assessment system that includes user registration, login, an admin portal for managing quizzes and questions, and quiz functionalities with result analysis. It uses MongoDB for data storage and provides a simple front-end for user interaction.

## Project Structure

```
quiz-assessment/
├── config/
│   └── db.js
├── controllers/
│   ├── adminController.js
│   ├── authController.js
│   └── quizController.js
├── models/
│   ├── User.js
│   ├── Quiz.js
│   └── Question.js
├── routes/
│   ├── adminRoutes.js
│   ├── authRoutes.js
│   └── quizRoutes.js
├── middleware/
│   └── authMiddleware.js
├── views/
│   ├── login.html
│   ├── signup.html
│   └── admin.html
└── server.js
```

## Prerequisites

- **Node.js**: Make sure you have Node.js installed. You can download it from [nodejs.org](https://nodejs.org/).
- **MongoDB**: Install MongoDB or use a cloud-based service like MongoDB Atlas.

## Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/sameer358/quiz-assessment.git
   cd quiz-assessment
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Configure Environment Variables** (Optional):
   Create a `.env` file in the root directory and add your JWT secret:
   ```env
   JWT_SECRET=your_jwt_secret
   ```

## Running the Application

1. **Start MongoDB**:
   Ensure MongoDB is running. You can start it with:
   ```bash
   mongod
   ```

2. **Start the Server**:
   Run the following command in your project directory:
   ```bash
   node server.js
   ```

   You should see:
   ```
   Server running on port 5000
   ```

## Access the Application

- **Signup Page**: [http://localhost:5000/views/signup.html](http://localhost:5000/views/signup.html)
- **Login Page**: [http://localhost:5000/views/login.html](http://localhost:5000/views/login.html)
- **Admin Portal**: [http://localhost:5000/views/admin.html](http://localhost:5000/views/admin.html)

## Basic Usage

1. **Signup**:
   - Open the Signup page and register a new user. This will create a user with a default `user` role.

2. **Login**:
   - After registering, log in with the user credentials. A JWT token will be provided upon successful login.

3. **Admin Portal**:
   - Access the Admin Portal page using an admin account. Here you can create quizzes, add questions to quizzes, and manage quiz data.

## Admin User Setup

To create an admin user, manually update the user role in MongoDB:

1. Open MongoDB shell or client.
2. Find the user and update their role:
   ```bash
   mongo
   use quiz-assessment
   db.users.updateOne({ email: "user@example.com" }, { $set: { role: "admin" } })
   ```

## Security

- Ensure your `JWT_SECRET` is secure and not hardcoded. Use environment variables for sensitive information.
- Validate and sanitize all inputs to prevent security vulnerabilities.

## Contributing

Feel free to open issues or submit pull requests. For major changes, please open an issue first to discuss what you would like to change.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---
