Node.js Secure Session Management Application 
by Regina Afu

The web application is built using Node.js and Express.js, known for their efficiency in creating lightweight and performant web applications. Express.js provides a minimal yet powerful framework for handling HTTP requests and responses, making it suitable for small to medium-sized web applications.
Upon the client's first connection to the server, a unique identifier is generated and stored in a cookie. This identifier is created using the `uuid` library and managed with `cookie-parser`, ensuring each client receives a distinct identifier. While the application does not use a persistent database, it simulates client association using an in-memory JavaScript object. This object stores user information, and the session management (handled by `express-session`) implicitly maintains the association between the client's session and the user. The session mechanism ensures that each request can be traced back to the authenticated user. The unique identifier, stored in the client's cookie, is automatically sent to the server with each HTTP request. The server accesses this identifier to recognize and track the client across different requests, allowing for consistent session management.

The application implements authentication and authorization checks:
   - **Authentication**: On attempting to access the main page or perform certain actions, the server verifies if the user is logged in. This check ensures that only authenticated users can proceed.
   - **Authorization**: The server also checks the user's role. The first registered user is assigned an 'admin' role, granting them privileges to perform specific tasks like posting messages. Subsequent users do not receive these privileges, thus differentiating user capabilities based on their roles.

The application supports the registration of multiple users, each with different access levels:
   - **Admin User**: The first user to register is given 'admin' privileges, allowing them to post messages.
   - **Regular User**: Users registered after the first are assigned a regular role, restricting them from posting messages.
   - **Unauthenticated User**: Visitors who have not logged in are considered unauthenticated and cannot access the main page or the message posting feature.


Features

- **User Registration**: Users can register with a username and password.
- **User Login**: Users can log in using their credentials.
- **Session Management**: User sessions are managed for authentication.
- **Unique Client Identifiers**: Each client is assigned a unique identifier using cookies.
- **Role-Based Authorization**: The first registered user gets 'admin' privileges, while others are regular users.
- **Task**: A message posting feature is available only to 'admin' users.

How to Run the Application

Prerequisites

- Node.js installed on your system.

Installation and Setup

1. Clone or Download the Repository
   - If you have `git` installed, you can clone the repository using:
     ```bash
     git clone [repository-url]
     ```
   - Alternatively, download the ZIP file of the repository and extract it.

2. Navigate to the Project Directory
   - Open a terminal and navigate to the project's root directory.

3. Install Dependencies
   - Run the following command to install the required Node.js modules:
     ```bash
     npm install
     ```

4. **Start the Server**
   - Start the application server using:
     ```bash
     npm start
     ```
   - The server will start on `http://localhost:3000`.

### Usage

- **Access the Application**: Open a web browser and go to `http://localhost:3000`.
- **Register a New User**: Click on the 'Register' link and fill out the registration form.
- **Login**: Use your registered credentials to log in.
- **Post Messages (Admin Only)**: If you are the first registered user (admin), you can post messages.

Frameworks and Libraries Used

- **Express.js**: Web framework for Node.js.
- **EJS**: Templating engine to render HTML templates.
- **express-session**: Middleware for session management in Express.
- **body-parser**: Middleware for parsing incoming request bodies.
- **cookie-parser**: Middleware for parsing cookies attached to the client request object.
- **uuid**: Library for generating unique identifiers.

Documentation

- **Express.js**: [Express.js Documentation](https://expressjs.com/)
- **EJS**: [EJS Documentation](https://ejs.co/)
- **express-session**: [express-session GitHub](https://github.com/expressjs/session)
- **body-parser**: [body-parser GitHub](https://github.com/expressjs/body-parser)
- **cookie-parser**: [cookie-parser GitHub](https://github.com/expressjs/cookie-parser)
- **uuid**: [uuid npm package](https://www.npmjs.com/package/uuid)

---

This README provides a comprehensive guide to setting up and using the application. It outlines the features, steps to run the application, and lists the frameworks and libraries used along with links to their documentation.
