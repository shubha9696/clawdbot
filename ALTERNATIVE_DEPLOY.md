# Alternative: Deploy Without GitHub

## Option: Use Render with Manual Upload

If you don't want to use GitHub, you can deploy directly to Render:

### Step 1: Create Render Account
1. Go to: https://render.com
2. Sign up with email (no GitHub needed)
3. Verify your email

### Step 2: Create Web Service
1. Click "New +" → "Web Service"
2. Choose "Build and deploy from a Git repository"
3. Click "Use a public Git repository"
4. Enter: `https://github.com/anthropics/clawdbot.git`

### Step 3: Configure Service
- Name: `clawdbot-online`
- Environment: `Node`
- Build Command: `npm install -g clawdbot`
- Start Command: `clawdbot gateway --port $PORT --host 0.0.0.0`
- Plan: **Free**

### Step 4: Add Environment Variables
```
SETUP_PASSWORD = YourSecurePassword123
NODE_VERSION = 22
```

### Step 5: Deploy!
Click "Create Web Service" and wait 3-5 minutes.

### Step 6: Access Setup
Visit: `https://clawdbot-online.onrender.com/setup`

---

## Even Simpler: Use Glitch

### Super Easy Deployment:
1. Go to: https://glitch.com
2. Click "New Project" → "Import from GitHub"
3. Enter: `https://github.com/anthropics/clawdbot.git`
4. Wait for import
5. Add environment variables in `.env` file
6. Your bot is live!

---

Tell me which method you prefer!
