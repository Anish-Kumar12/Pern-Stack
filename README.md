# Product Management Web Application (PERN Stack)

## Overview
This project is a web application for managing products, built using the PERN stack (PostgreSQL, Express, React, Node.js). Users can perform CRUD (Create, Read, Update, Delete) operations on products efficiently through a user-friendly interface.

## Features
- **Product Management**: Add, update, delete, and view products.
- **Responsive Design**: Optimized for both desktop and mobile devices.
- **Advanced Security with Arcjet**: Protects against bot traffic, rate limiting, and common web vulnerabilities.
- **State Management**: Uses Zustand for efficient state handling.
- **Theming**: Supports multiple themes via DaisyUI.
- **Error Handling**: Provides clear feedback for API request errors.

## Technologies Used
### Backend:
- Node.js
- Express.js
- PostgreSQL
- **Arcjet** (Security & Bot Detection)
- Middleware: Helmet, Morgan, CORS

### Frontend:
- React.js
- Vite
- Zustand (state management)
- React Router (navigation)
- Tailwind CSS & DaisyUI (styling)

## Arcjet Integration
This project utilizes **Arcjet** to enhance security by implementing:
- **Rate Limiting**: Prevents excessive requests from a single source.
- **Bot Detection**: Identifies and blocks bot traffic while allowing search engines.
- **Spoofed Bot Protection**: Detects and denies spoofed bot attempts.
- **Security Shielding**: Blocks common attack patterns.

Arcjet is initialized in `arcjet.js` with:
```javascript
import arcjet, { tokenBucket, shield, detectBot } from "@arcjet/node";
import "dotenv/config";

export const aj = arcjet({
  key: process.env.ARCJET_KEY,
  characteristics: ["ip.src"],
  rules: [
    shield({ mode: "LIVE" }),
    detectBot({
      mode: "LIVE",
      allow: ["CATEGORY:SEARCH_ENGINE"],
    }),
    tokenBucket({
      mode: "LIVE",
      refillRate: 5,
      interval: 10,
      capacity: 10,
    }),
  ],
});
```

## Arcjet in Action
Watch how Arcjet works in this project:

<video width="600" controls>
  <source src="assets\videos\demo.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

## Installation
### Prerequisites
Ensure you have the following installed:
- Node.js
- PostgreSQL
- npm or yarn

### Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/your-repo.git
   cd your-repo
   ```
2. Install dependencies for both frontend and backend:
   ```bash
   cd backend && npm install
   cd ../frontend && npm install
   ```
3. Set up the PostgreSQL database:
   - Create a `.env` file in the `backend` directory and define:
     ```env
     PORT=
     PGHOST=''
     PGDATABASE=''
     PGUSER=''
     PGPASSWORD=''
     ARCJET_KEY=
     ARCJET_ENV=
     ```
   - Run database migrations (if applicable).

4. Start the backend server:
   ```bash
   cd backend
   npm run dev
   ```

5. Start the frontend application:
   ```bash
   cd frontend
   npm run dev
   ```

## API Endpoints
- **GET /api/products** - Fetch all products
- **GET /api/products/:id** - Fetch a product by ID
- **POST /api/products** - Create a new product
- **PUT /api/products/:id** - Update a product
- **DELETE /api/products/:id** - Delete a product

## Deployment
For deployment:
- Use services like **Vercel** or **Netlify** for the frontend.
- Deploy the backend using **Render**, **Heroku**, or **AWS**.

## Contributing
Contributions are welcome! Feel free to fork the repository and submit a pull request.

## License
This project is licensed under the MIT License.

## Contact
For any questions, reach out via [your email] or open an issue on GitHub.

