# Deployment Checklist for DevConnector

## Pre-Deployment Setup

### 1. Environment Variables

- [ ] Created `.env` file with all required variables
- [ ] Set strong, unique `JWT_SECRET` (different from development)
- [ ] Configured production MongoDB URI
- [ ] Set up GitHub OAuth app for production domain
- [ ] Set `NODE_ENV=production`

### 2. Dependencies & Build

- [ ] All npm dependencies installed (`npm install`)
- [ ] Client dependencies installed (`cd client && npm install`)
- [ ] Client built for production (`npm run build`)
- [ ] No security vulnerabilities (`npm audit`)

### 3. Security

- [ ] `.env` file is in `.gitignore`
- [ ] Strong passwords and secrets used
- [ ] MongoDB authentication enabled
- [ ] HTTPS configured for production

## Heroku Deployment

### Prerequisites

- [ ] Heroku CLI installed
- [ ] Git repository initialized
- [ ] GitHub OAuth app configured for Heroku domain

### Steps

1. Create Heroku app:

   ```bash
   heroku create your-app-name
   ```

2. Set environment variables:

   ```bash
   heroku config:set MONGO_URI="your_production_mongo_uri"
   heroku config:set JWT_SECRET="your_strong_jwt_secret"
   heroku config:set GITHUB_CLIENT_ID="your_github_client_id"
   heroku config:set GITHUB_SECRET="your_github_secret"
   heroku config:set NODE_ENV="production"
   ```

3. Deploy:
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push heroku main
   ```

## Other Platform Deployment

### For Vercel/Netlify/DigitalOcean

1. Set environment variables in platform dashboard
2. Configure build settings:
   - Build command: `npm run build`
   - Start command: `npm start`
   - Node version: 18.x or higher

### For VPS/Self-hosted

1. Install Node.js and MongoDB
2. Clone repository
3. Set environment variables
4. Run deployment script: `./deploy.sh`
5. Use PM2 or similar for process management

## Post-Deployment Verification

- [ ] Server starts without errors
- [ ] Database connection successful
- [ ] Authentication works
- [ ] API endpoints respond correctly
- [ ] Client loads and functions properly
- [ ] GitHub integration works

## Environment Variables Reference

```env
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/database
JWT_SECRET=your_very_strong_and_random_secret_key_here
GITHUB_CLIENT_ID=your_github_oauth_client_id
GITHUB_SECRET=your_github_oauth_secret
NODE_ENV=production
PORT=5001
```

## Troubleshooting

### Common Issues

1. **MongoDB connection fails**: Check URI and credentials
2. **JWT errors**: Verify JWT_SECRET is set correctly
3. **Build fails**: Check for dependency issues
4. **GitHub integration broken**: Verify OAuth app settings

### Logs

- Heroku: `heroku logs --tail`
- Local: Check console output
- MongoDB: Check Atlas logs if using MongoDB Atlas

## Maintenance

### Regular Tasks

- [ ] Update dependencies monthly
- [ ] Monitor logs for errors
- [ ] Backup database regularly
- [ ] Rotate secrets periodically
- [ ] Monitor performance metrics
