

# 📚 Book Notes

**Book Notes** is a web application that allows users to view and manage book details and notes. Built with **Node.js**, **Express.js**, and **PostgreSQL**, the app dynamically renders book information on the homepage using **EJS** templating.

## Features

- Fetches book data from a PostgreSQL database.
- Displays book titles, authors, and notes dynamically on the homepage.
- Built with modern technologies like Node.js and Express.
- Utilizes EJS for templating and rendering views.

## Technologies Used

- **Node.js**: Backend JavaScript runtime.
- **Express.js**: Web framework for Node.js.
- **PostgreSQL**: Relational database used to store book data.
- **EJS**: Templating engine to dynamically render HTML.
  
## Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/RealHarshGupta/Book-Notes.git
   ```

2. **Navigate to the project directory**:

   ```bash
   cd Book-Notes
   ```

3. **Install dependencies**:

   ```bash
   npm install
   ```

4. **Set up PostgreSQL database**:

   Make sure you have PostgreSQL installed and running. Create a database named `users` and a table named `books`.

   ```sql
   CREATE TABLE books (
     id SERIAL PRIMARY KEY,
     title VARCHAR(255),
     author VARCHAR(255),
     notes TEXT
   );
   ```

5. **Set up environment variables**:

   Create a `.env` file and add your PostgreSQL credentials:

   ```bash
   DB_USER=your_username
   DB_HOST=localhost
   DB_NAME=users
   DB_PASSWORD=your_password
   DB_PORT=5432
   ```

6. **Run the app**:

   ```bash
   npm start
   ```

   Your app should now be running at [http://localhost:3000](http://localhost:3000).

## Usage

- Open the app in your browser, and the homepage will display the list of books along with their details and notes.
- Add your own books and notes through the database directly for now (future updates might include a UI for adding books).

## License

This project is licensed under the MIT License.

