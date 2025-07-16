# DevConnector - Render.com Deployment Guide

## Render.com Deployment Setup

### 1. Repository Preparation

Make sure your code is pushed to GitHub:

```bash
git add .
git commit -m "Prepare for Render deployment"
git push origin main
```

### 2. Create Web Service on Render

1. Go to [Render.com](https://render.com) and sign up/login
2. Click "New +" and select "Web Service"
3. Connect your GitHub repository
4. Configure the service:

   **Basic Settings:**

   - Name: `devconnector` (or your preferred name)
   - Root Directory: `.` (leave empty)
   - Environment: `Node`
   - Region: Choose closest to your users
   - Branch: `main`

   **Build & Deploy:**

   - Build Command: `./render-build.sh`
   - Start Command: `node server.js`

### 3. Environment Variables

In Render dashboard, go to Environment tab and add:

```
NODE_ENV=production
MONGO_URI=your_mongodb_atlas_connection_string
JWT_SECRET=your_strong_jwt_secret_here
GITHUB_CLIENT_ID=your_github_oauth_client_id
GITHUB_SECRET=your_github_oauth_secret
PORT=10000
```

**Important Notes:**

- Use MongoDB Atlas for production database
- Generate a strong JWT_SECRET (use: `node -e "console.log(require('crypto').randomBytes(64).toString('hex'))"`)
- Create GitHub OAuth app with your Render domain
- PORT=10000 is Render's default (can be omitted)

### 4. GitHub OAuth Setup

1. Go to GitHub Settings > Developer settings > OAuth Apps
2. Create new OAuth app or update existing:
   - Application name: `DevConnector Production`
   - Homepage URL: `https://your-app-name.onrender.com`
   - Authorization callback URL: `https://your-app-name.onrender.com/api/auth/github/callback`

### 5. MongoDB Atlas Setup

1. Create MongoDB Atlas account (if not already)
2. Create a new cluster or use existing
3. Add your Render IP to whitelist (or use 0.0.0.0/0 for all IPs)
4. Create database user with read/write permissions
5. Get connection string and add to MONGO_URI

### 6. Deploy

1. Click "Create Web Service" in Render
2. Render will automatically build and deploy
3. Monitor the deployment logs
4. Once deployed, test your application

### 7. Custom Domain (Optional)

1. In Render dashboard, go to Settings
2. Add your custom domain
3. Update GitHub OAuth app URLs
4. Configure DNS records as instructed

## Troubleshooting

### Common Issues:

1. **Build Fails:**

   - Check build logs for missing dependencies
   - Ensure `render-build.sh` is executable
   - Verify Node.js version compatibility

2. **Database Connection:**

   - Verify MONGO_URI is correct
   - Check MongoDB Atlas IP whitelist
   - Ensure database user has proper permissions

3. **Environment Variables:**

   - Double-check all required env vars are set
   - JWT_SECRET should be strong and unique
   - GitHub OAuth URLs should match your domain

4. **GitHub OAuth:**
   - Callback URL must match exactly
   - Client ID and secret must be from production app

### Render-Specific Notes:

- Free tier apps sleep after 15 minutes of inactivity
- First request after sleep may take 30+ seconds
- Paid plans offer always-on services
- Automatic SSL certificates provided
- Automatic deployments on git push

## Post-Deployment Checklist

- [ ] App loads successfully
- [ ] User registration works
- [ ] User login works
- [ ] GitHub OAuth works (if implemented)
- [ ] All features function correctly
- [ ] Database operations work
- [ ] Environment variables are secure

## Monitoring

- Use Render dashboard for logs and metrics
- Set up monitoring for uptime
- Monitor database performance in MongoDB Atlas
- Set up error tracking (Sentry, LogRocket, etc.)

---

**Your app will be available at:** `https://your-app-name.onrender.com`
