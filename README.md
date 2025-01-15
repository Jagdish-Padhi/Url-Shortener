# URL Shortener Web App 🌐

A lightweight and user-friendly web application for shortening long URLs into concise, manageable links. This app is built with simplicity and efficiency in mind, enabling users to create and manage short URLs effortlessly.

## Features ✨

- **URL Shortening** 🔗: Instantly convert long URLs into short, easy-to-share links.
- **Custom Short Links** ✍️: Option to create personalized short URLs.
- **Analytics** 📊: Track the number of clicks and usage statistics for each short link.
- **Responsive Design** 📱: Fully functional on desktops, tablets, and mobile devices.
- **Database Integration** 💾: Stores original and shortened URLs securely in a database.
 
## Tech Stack 🛠️

- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (or SQLite for lightweight implementations)
- **Hosting**: Can be deployed on platforms like Heroku, Vercel, or AWS.

## Prerequisites ✅

Before running this app, ensure you have the following installed:

- Node.js (v14 or higher)
- MongoDB (or an alternative database setup)

## Installation 🚀

1. Clone this repository:
   ```bash
   git clone https://github.com/your-username/url-shortener.git
   ```

2. Navigate to the project directory:
   ```bash
   cd url-shortener
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Set up environment variables:
   - Create a `.env` file in the root directory.
   - Add the following variables:
     ```env
     PORT=3000
     DB_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/url-shortener
     BASE_URL=http://localhost:3000
     ```

5. Start the development server:
   ```bash
   npm start
   ```

6. Open the app in your browser:
   ```
   http://localhost:3000
   ```

## Usage 💡

1. Enter a long URL in the input field on the homepage.
2. Click the "Generate" button to generate the short URL.
3. Copy and share the short URL as needed.
4. View analytics for each short URL via the dashboard.

## Folder Structure 📂

```
url-shortener/
├── public/          # Static files (CSS, JavaScript, images)
├── routes/          # Express route handlers
├── models/          # Database models (URL schema)
├── views/           # EJS templates (or your templating engine of choice)
├── app.js           # Main application file
├── package.json     # Dependency and script configuration
└── README.md        # Project documentation
```

 

## Acknowledgments 🙌
- Inspired by popular URL shortening services.
- Thanks to the open-source community for providing amazing tools and resources!
