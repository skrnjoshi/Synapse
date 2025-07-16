#!/bin/bash

echo "🚀 DevConnector Render.com Deployment Checklist"
echo "================================================"

echo ""
echo "✅ Pre-deployment Checklist:"
echo "[ ] Code pushed to GitHub"
echo "[ ] MongoDB Atlas database ready"
echo "[ ] GitHub OAuth app configured for production"
echo "[ ] Strong JWT secret generated"
echo "[ ] Environment variables prepared"

echo ""
echo "📦 Build Requirements:"
echo "✅ render-build.sh script created"
echo "✅ package.json updated with engines"
echo "✅ Start command: node server.js"
echo "✅ Build command: ./render-build.sh"

echo ""
echo "🔧 Render.com Configuration:"
echo "1. Create new Web Service"
echo "2. Connect GitHub repository"
echo "3. Set build command: ./render-build.sh"
echo "4. Set start command: node server.js"
echo "5. Add environment variables (see .env.render.example)"

echo ""
echo "🌐 Environment Variables Needed:"
echo "- NODE_ENV=production"
echo "- MONGO_URI=<your_mongodb_atlas_uri>"
echo "- JWT_SECRET=<strong_random_secret>"
echo "- GITHUB_CLIENT_ID=<your_github_client_id>"
echo "- GITHUB_SECRET=<your_github_secret>"

echo ""
echo "🔑 Generate JWT Secret:"
echo "node -e \"console.log(require('crypto').randomBytes(64).toString('hex'))\""

echo ""
echo "📚 Documentation:"
echo "- See RENDER_DEPLOYMENT.md for detailed instructions"
echo "- Use .env.render.example as template for environment variables"

echo ""
echo "🎉 Ready for deployment!"
