#!/bin/bash

# Deployment script for DevConnector
echo "🚀 Starting deployment process..."

# Check if .env file exists
if [ ! -f .env ]; then
    echo "❌ Error: .env file not found!"
    echo "Please create .env file with required environment variables."
    echo "You can use .env.example as a template."
    exit 1
fi

# Install dependencies
echo "📦 Installing server dependencies..."
npm install

# Install client dependencies
echo "📦 Installing client dependencies..."
cd client && npm install && cd ..

# Build client for production
echo "🏗️  Building client for production..."
npm run build

# Check if build was successful
if [ -d "client/build" ]; then
    echo "✅ Client build successful!"
else
    echo "❌ Client build failed!"
    exit 1
fi

echo "✅ Deployment preparation complete!"
echo "Your application is ready for production."
echo ""
echo "To start the server:"
echo "  npm start"
echo ""
echo "Make sure to set NODE_ENV=production in your hosting environment!"
