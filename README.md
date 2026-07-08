# ShopEasy - E-Commerce Web Application

A simple e-commerce web application built with Node.js, Express.js, and PostgreSQL.

## Description

ShopEasy is a full-stack web application where users can browse products, add them to cart, and place orders. It includes user authentication with JWT and role-based access control for admins.

## Tech Stack

- **Backend:** Node.js, Express.js
- **Database:** PostgreSQL
- **Frontend:** HTML, CSS, Vanilla JavaScript
- **Authentication:** JWT (JSON Web Tokens)
- **Password Hashing:** bcryptjs
- **Logging:** Morgan

## Features

- User registration and login
- JWT-based authentication
- Password hashing with bcryptjs
- Role-based authorization (admin/user)
- Browse products
- Add products to cart
- Place orders
- Admin can add, edit and delete products
- Request logging

## Project Structure
ecommerce/
├── controllers/        # Business logic
├── models/             # Database queries
├── routes/             # API endpoints
├── middleware/         # JWT auth and logging
├── client/             # Frontend HTML/CSS/JS
├── db.js               # Database connection
├── server.js           # Entry point
└── .env                # Environment variables

## Setup Instructions

### 1. Clone the repository
git clone https://github.com/ellabellaaa/ecommerce.git
cd ecommerce

### 2. Install dependencies
npm install

### 3. Create a `.env` file in the root folder
PORT=3000
DB_HOST=localhost
DB_PORT=5432
DB_NAME=myapp_db
DB_USER=postgres
DB_PASSWORD=your_password
JWT_SECRET=mysecretkey123

### 4. Set up the database
Create a PostgreSQL database called `myapp_db` and run the DDL script in `database.sql`

### 5. Run the application
npm run dev

### 6. Open in browser
http://localhost:3000

## API Endpoints

### Auth
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /api/auth/register | Register a new user |
| POST | /api/auth/login | Login and get JWT token |

### Products
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /api/products | Get all products |
| GET | /api/products/:id | Get single product |
| POST | /api/products | Add product (admin only) |
| PUT | /api/products/:id | Update product (admin only) |
| DELETE | /api/products/:id | Delete product (admin only) |

### Cart
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /api/cart | Get cart items |
| POST | /api/cart | Add item to cart |
| DELETE | /api/cart/:id | Remove item from cart |

### Orders
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /api/orders | Place an order |
| GET | /api/orders | Get my orders |

## Database Schema

See `database.sql` for the full DDL script.

## Environment Variables

| Variable | Description |
|----------|-------------|
| PORT | Server port (default 3000) |
| DB_HOST | Database host |
| DB_PORT | Database port |
| DB_NAME | Database name |
| DB_USER | Database user |
| DB_PASSWORD | Database password |
| JWT_SECRET | Secret key for JWT tokens |

## Extra Features

- Input validation on registration
- Username duplicate check
- ETB (Ethiopian Birr) currency
- Product images
- Auto-clear cart after order is placed