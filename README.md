# PDF Compare Backend

This is the backend component of the PDF comparison tool. It is built using Node.js and Express.js, providing endpoints for file upload and PDF comparison.

## Getting Started

These instructions will help you set up and run the backend component on your local machine.

### Prerequisites

- Node.js installed on your machine.

### Installing

1. Clone the repository:

   ```bash
   git clone https://github.com/vinayakkakkar/PDF-compare-backend.git
   ```

2. Navigate to the project directory:

   ```bash
   cd pdf-compare-backend
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

### Running

Start the server:

```bash
node server.js
```

The server will be running on [http://localhost:3001](http://localhost:3001).

## Endpoints

### POST /compare-pdfs

- **Description:** Compare two uploaded PDF files.
- **Request:**
  - Method: `POST`
  - Endpoint: `/compare-pdfs`
  - Body: Form data with two PDF files (`file1` and `file2`).
- **Response:**
  - Success: JSON response with the comparison result.
  - Error: JSON response with an error message.

## Built With

- Node.js
- Express.js
- Multer
- pdf-parse

## Authors

- Your Name
