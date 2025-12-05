# GTMarket Setup Guide

Complete guide to set up and run GTMarket locally and deploy to Netlify.

## Prerequisites

- Node.js v18 or higher
- npm or yarn
- Google Cloud account (for speech services)
- Gemini API key
- Netlify account (for deployment)

## Local Development Setup

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Environment Variables

Copy the example environment file:

```bash
cp .env.example .env
```

Edit `.env` and add your credentials:

```env
# Server Configuration
PORT=3000
NODE_ENV=development

# Gemini AI Configuration
GEMINI_API_KEY=your_gemini_api_key_here
GEMINI_TEXT_MODEL=gemini-2.0-flash-lite
GEMINI_CHART_MODEL=gemini-2.0-flash-lite

# Google Cloud Configuration (for Speech Services)
GOOGLE_APPLICATION_CREDENTIALS=path/to/your/credentials.json
GOOGLE_CLOUD_PROJECT_ID=your_project_id

# Authentication
JWT_SECRET=your_jwt_secret_here
JWT_EXPIRES_IN=24h

# Speech Services
SPEECH_PROVIDER=google
TTS_PROVIDER=google

# API Configuration
API_RATE_LIMIT=100
API_TIMEOUT=30000
```

### 3. Run Locally

Start the development server:

```bash
npm run dev
```

The application will be available at: `http://localhost:3000`

### 4. Test the Application

Open your browser and navigate to:
- Main app: `http://localhost:3000`
- API Dashboard: `http://localhost:3000/api-dashboard.html`
- Diagnostics: `http://localhost:3000/diagnostic.html`

## Netlify Deployment

### Option 1: Quick Setup (Automated)

Run the setup script:

**macOS/Linux:**
```bash
chmod +x setup-netlify.sh
./setup-netlify.sh
```

**Windows:**
```bash
setup-netlify.bat
```

### Option 2: Manual Setup

#### 1. Install Netlify CLI

```bash
npm install -g netlify-cli
```

#### 2. Login to Netlify

```bash
netlify login
```

#### 3. Initialize Netlify Site

```bash
netlify init
```

Follow the prompts:
- Create & configure a new site
- Choose your team
- Site name: `gtmarket` (or your preferred name)
- Build command: `npm run build`
- Publish directory: `public`

#### 4. Configure Environment Variables

Add your environment variables in Netlify:

```bash
netlify env:set GEMINI_API_KEY "your_api_key"
netlify env:set JWT_SECRET "your_jwt_secret"
netlify env:set GOOGLE_CLOUD_PROJECT_ID "your_project_id"
```

Or set them in the Netlify dashboard:
1. Go to Site settings → Environment variables
2. Add all required variables from your `.env` file

#### 5. Test Locally with Netlify Dev

```bash
npm run netlify:dev
```

This runs the app with Netlify Functions locally at `http://localhost:8888`

#### 6. Deploy to Production

```bash
npm run netlify:deploy
```

Or use the Netlify CLI directly:

```bash
netlify deploy --prod
```

## API Keys Setup

### Gemini API Key

1. Go to [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Create a new API key
3. Add it to your `.env` file as `GEMINI_API_KEY`

### Google Cloud Setup (Speech Services)

1. Go to [Google Cloud Console](https://console.cloud.google.com)
2. Create a new project or select existing
3. Enable APIs:
   - Cloud Speech-to-Text API
   - Cloud Text-to-Speech API
4. Create service account credentials
5. Download JSON key file
6. Set path in `.env` as `GOOGLE_APPLICATION_CREDENTIALS`

## Verification

### Test Local Server

```bash
# Start the server
npm run dev

# In another terminal, test the API
curl http://localhost:3000/api/health
```

### Test Netlify Functions

```bash
# Start Netlify dev server
npm run netlify:dev

# Test a function
curl http://localhost:8888/.netlify/functions/auth-guest
```

## Troubleshooting

See [TROUBLESHOOTING.md](TROUBLESHOOTING.md) for common issues and solutions.

## Additional Documentation

- [API Setup](API_SETUP.md) - Detailed API configuration
- [Authentication](AUTHENTICATION.md) - Authentication setup
- [Deployment Guide](DEPLOYMENT_GUIDE.md) - Complete deployment instructions
- [Netlify Quick Start](NETLIFY_QUICK_START.md) - Quick Netlify setup
- [Testing Guide](TESTING_GUIDE.md) - Testing guidelines

## Project Structure

```
GTMarket/
├── src/              # TypeScript source code
│   ├── api/          # API routes and middleware
│   ├── services/     # Business logic
│   ├── models/       # Data models
│   └── utils/        # Utilities
├── public/           # Static frontend files
├── netlify/          # Netlify serverless functions
│   └── functions/    # Function handlers
├── dist/             # Compiled output
└── exports/          # Generated exports
```

## Support

For issues or questions:
- Check [TROUBLESHOOTING.md](TROUBLESHOOTING.md)
- Review [TESTING_GUIDE.md](TESTING_GUIDE.md)
- Open an issue on GitHub

## License

MIT License - see [LICENSE](LICENSE) file for details.
