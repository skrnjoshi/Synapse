# DevConnector - Social Network for Developers

A full-stack social network application for developers built with React, Node.js, Express, and MongoDB.

## Features

- User registration and authentication
- Create and customize user profiles
- Add experience and education to profiles
- Create posts and interact with other users
- Like and comment on posts
- GitHub integration to display repositories

## Tech Stack

**Frontend:**

- React
- Redux
- React Router
- Axios

**Backend:**

- Node.js
- Express
- MongoDB with Mongoose
- JSON Web Tokens for authentication
- bcryptjs for password hashing

## Installation & Setup

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or cloud)
- GitHub Developer Account (for GitHub integration)

### Environment Variables

1. Create a `.env` file in the root directory
2. Copy the contents from `.env.example` and fill in your values:

```env
# MongoDB Connection
MONGO_URI=your_mongodb_connection_string

# JWT Secret (use a strong, random string)
JWT_SECRET=your_jwt_secret

# GitHub OAuth
GITHUB_CLIENT_ID=your_github_client_id
GITHUB_SECRET=your_github_secret

# Port
PORT=5001

# Node Environment
NODE_ENV=development
```

### Local Development

1. Install dependencies:

```bash
npm install
cd client && npm install
```

2. Run the application:

```bash
# Run both server and client
npm run dev

# Run server only
npm run server

# Run client only
npm run client
```

## Deployment

### Environment Setup for Production

1. Set `NODE_ENV=production` in your environment variables
2. Update your `.env` file with production values:
   - Use a production MongoDB URI
   - Generate a strong JWT secret
   - Set up GitHub OAuth for your production domain

### Deploy to Heroku

1. Install Heroku CLI
2. Create a new Heroku app:

```bash
heroku create your-app-name
```

3. Set environment variables:

```bash
heroku config:set MONGO_URI=your_production_mongo_uri
heroku config:set JWT_SECRET=your_production_jwt_secret
heroku config:set GITHUB_CLIENT_ID=your_github_client_id
heroku config:set GITHUB_SECRET=your_github_secret
heroku config:set NODE_ENV=production
```

4. Deploy:

```bash
git add .
git commit -m "Prepare for deployment"
git push heroku main
```

### Deploy to Other Platforms

For other platforms (Vercel, Netlify, DigitalOcean, etc.):

1. Build the client:

```bash
npm run build
```

2. Set environment variables in your platform's dashboard
3. Deploy using your platform's deployment method

### Environment Variables for Production

Make sure to set these environment variables in your production environment:

- `MONGO_URI`: Your MongoDB connection string
- `JWT_SECRET`: A strong, random string for JWT signing
- `GITHUB_CLIENT_ID`: Your GitHub OAuth app client ID
- `GITHUB_SECRET`: Your GitHub OAuth app secret
- `NODE_ENV`: Set to "production"
- `PORT`: Will be set automatically by most hosting platforms

### Security Considerations

1. **Never commit `.env` files to version control**
2. **Use strong, unique passwords and secrets**
3. **Enable MongoDB authentication and use a dedicated database user**
4. **Keep dependencies updated**
5. **Use HTTPS in production**

### Build Commands

- `npm start`: Start production server
- `npm run server`: Start development server with nodemon
- `npm run client`: Start React development server
- `npm run dev`: Run both server and client concurrently
- `npm run build`: Build client for production
- `npm run deploy`: Build and start production server

## API Endpoints

### Authentication

- `POST /api/auth` - Authenticate user
- `GET /api/auth` - Get authenticated user

### Users

- `POST /api/users` - Register user

### Profiles

- `GET /api/profile/me` - Get current user's profile
- `POST /api/profile` - Create/update profile
- `GET /api/profile` - Get all profiles
- `GET /api/profile/user/:user_id` - Get profile by user ID
- `DELETE /api/profile` - Delete profile and user
- `PUT /api/profile/experience` - Add experience
- `DELETE /api/profile/experience/:exp_id` - Delete experience
- `PUT /api/profile/education` - Add education
- `DELETE /api/profile/education/:edu_id` - Delete education
- `GET /api/profile/github/:username` - Get user repos from GitHub

### Posts

- `POST /api/posts` - Create post
- `GET /api/posts` - Get all posts
- `GET /api/posts/:id` - Get post by ID
- `DELETE /api/posts/:id` - Delete post
- `PUT /api/posts/like/:id` - Like/unlike post
- `POST /api/posts/comment/:id` - Add comment
- `DELETE /api/posts/comment/:id/:comment_id` - Delete comment

## License

This project is licensed under the MIT License.
