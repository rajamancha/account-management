# 1. Memoizer

```
https://github.com/rajamancha/account-management/blob/main/src/utils/memoization.ts
```

# 2. Number Conversion

```
https://github.com/rajamancha/account-management/blob/main/src/utils/convertToRoman.ts
```

# 3. Account management

REST API project for account management.

## Features

- Create a new account
- Retrieve account details
- Update account information
- Delete an account

## Installation

### 1. Clone the repository:

```
git clone https://github.com/rajamancha/account-management.git
```

### 2. Install the dependencies:

```
cd account-management
npm install
```

### 3. Set up environment variables:

- Create a .env file in the root directory of the project.
- Define the necessary environment variables in the .env file. For example:

```
PORT=5000
DATABASE_NAME=management
DATABASE_USERNAME=<mongodb username>
DATABASE_PASSWORD=<password>
DATABASE_CLUSTER=<cluster name>
```

### 4. Start the server:

```
npm run dev
```

The server will start running on the specified port (default: 8080).

## API Endpoints

- GET /get-accounts - Get all accounts
- POST /add-account - Create a new account
- GET /get-account/:id - Get account details by ID
- PUT /edit-account/:id - Update account information by ID
- DELETE /remove-account/:id - Delete an account by ID

## Technologies Used

- Express.js: Fast, unopinionated, minimalist web framework for Node.js
- MongoDB: NoSQL document database
- Mongoose: MongoDB object modeling for Node.js
- Other dependencies
