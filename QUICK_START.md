# 🚀 QUICK START: Deploy Clawdbot Online NOW (FREE)

## ✅ Clawdbot is Installed Locally!
Version: 2026.1.24-3

---

## 🎯 Choose Your Setup Path

### Path A: **Online Gateway (Recommended for Remote Access)**
Deploy Clawdbot to Render.com so you can control it from anywhere via Telegram/WhatsApp

### Path B: **Local Setup (Quick Test)**
Run Clawdbot on your PC right now to test it out

---

## 🚀 PATH A: Deploy Online (FREE - 10 minutes)

### Step 1: Create Render Account
1. Go to: https://render.com
2. Click "Get Started for Free"
3. Sign up with GitHub (no credit card needed!)

### Step 2: Deploy Clawdbot
Since Clawdbot doesn't have an official Docker image yet, we'll use an alternative approach:

**Option 1: Deploy via GitHub (Best)**
1. Fork this repo: https://github.com/anthropics/clawdbot
2. In Render dashboard: New → Web Service
3. Connect your forked repo
4. Set build command: `npm install -g clawdbot`
5. Set start command: `clawdbot gateway --port $PORT`
6. Add environment variable: `SETUP_PASSWORD=YourSecurePassword123`
7. Deploy!

**Option 2: Use Railway (Easier)**
1. Go to: https://railway.app
2. Sign up with GitHub
3. New Project → Deploy from GitHub
4. Select clawdbot repo
5. Add environment variables
6. Deploy!

### Step 3: Access Setup Wizard
1. Wait 2-3 minutes for deployment
2. Visit: `https://your-app-name.onrender.com/setup`
3. Enter your SETUP_PASSWORD
4. Follow the wizard!

---

## 🏠 PATH B: Run Locally NOW (5 minutes)

### Step 1: Start Setup Wizard
Open PowerShell and run:
```powershell
clawdbot onboard
```

This will guide you through:
- Choosing AI provider (Google Gemini recommended - FREE tier)
- Setting up messaging (Telegram recommended - easiest)
- Configuring gateway settings

### Step 2: Get FREE AI API Key (Google Gemini)
1. Go to: https://makersuite.google.com/app/apikey
2. Click "Create API Key"
3. Copy the key
4. Paste it when Clawdbot asks

### Step 3: Create Telegram Bot (FREE)
1. Open Telegram
2. Search for: `@BotFather`
3. Send: `/newbot`
4. Follow prompts:
   - Bot name: "My Clawdbot"
   - Username: "myawesomeclawdbot" (must be unique)
5. Copy the bot token
6. Paste it when Clawdbot asks

### Step 4: Start Gateway
```powershell
clawdbot gateway --port 18789 --verbose
```

### Step 5: Test It!
1. Open Telegram
2. Find your bot (search for the username you created)
3. Send: `/start`
4. Try: "Hello! Can you help me search for jobs?"

---

## 🌐 Install Browser Relay Extension

### For Job Application Automation:

1. **Download Extension**
   - Visit: https://clawd.bot/relay
   - Or check Chrome Web Store / Firefox Add-ons

2. **Install in Brave/Chrome**
   - Download the extension file
   - Open: `brave://extensions/` or `chrome://extensions/`
   - Enable "Developer mode"
   - Click "Load unpacked" or drag extension file
   - Install!

3. **Connect to Gateway**
   - Click extension icon
   - Enter gateway URL:
     - Local: `http://localhost:18789`
     - Online: `https://your-app.onrender.com`
   - Click "Connect"

4. **Test Browser Control**
   - Go to LinkedIn or any job site
   - Tell Clawdbot via Telegram: "Fill out this application form"
   - Watch it work! 🎉

---

## 🎯 Recommended FREE Setup

### For Job Applications:

```
┌─────────────────────────────────────┐
│  1. AI Provider: Google Gemini      │
│     - FREE tier: 60 requests/min    │
│     - Get key: makersuite.google.com│
├─────────────────────────────────────┤
│  2. Messaging: Telegram             │
│     - FREE forever                  │
│     - Create bot: @BotFather        │
├─────────────────────────────────────┤
│  3. Gateway: Local (for now)        │
│     - Run: clawdbot gateway         │
│     - Later deploy to Render (FREE) │
├─────────────────────────────────────┤
│  4. Browser: Brave + Relay Extension│
│     - Install extension             │
│     - Connect to gateway            │
└─────────────────────────────────────┘

Total Cost: $0/month 🎉
```

---

## 📋 Commands to Run NOW

### 1. Start Setup Wizard:
```powershell
cd "c:\Users\shubh\Desktop\New folder (4)"
clawdbot onboard
```

### 2. After Setup, Start Gateway:
```powershell
clawdbot gateway --port 18789 --verbose
```

### 3. Check Health:
```powershell
clawdbot health
```

### 4. View Dashboard:
Open browser: `http://localhost:18789/`

---

## 🎮 What to Do After Setup

### Test Basic Commands:
1. Send to your Telegram bot:
   - "Hello, introduce yourself"
   - "What can you do?"
   - "Help me search for software engineer jobs"

### Test Browser Automation:
1. Open a job posting in Brave
2. Tell bot: "Fill out this application form"
3. Watch it analyze and fill the form!

### Test PC Control:
1. Tell bot: "Create a folder called 'job_applications'"
2. Tell bot: "List files in my Desktop"
3. Tell bot: "Take a screenshot"

---

## 🔧 Troubleshooting

### If Gateway Won't Start:
```powershell
# Check if port is already in use
netstat -ano | findstr :18789

# Try different port
clawdbot gateway --port 18790
```

### If Telegram Bot Not Responding:
1. Check gateway is running
2. Verify bot token is correct
3. Send `/start` to bot first
4. Check gateway logs for errors

### If Browser Relay Won't Connect:
1. Verify gateway URL is correct
2. Check if gateway is running
3. Try localhost instead of 127.0.0.1
4. Disable any VPN/firewall temporarily

---

## 🎯 Next Steps

### Immediate (Do Now):
1. ✅ Run `clawdbot onboard` to start setup
2. ✅ Get Google Gemini API key (FREE)
3. ✅ Create Telegram bot
4. ✅ Start gateway
5. ✅ Test basic commands

### Soon (Within 1 hour):
1. Install Browser Relay extension
2. Test job application automation
3. Configure your resume/profile data
4. Try applying to a test job

### Later (When Ready):
1. Deploy gateway to Render for 24/7 access
2. Set up advanced automation workflows
3. Configure job search criteria
4. Enable auto-apply features

---

## 💡 Pro Tips

### For Job Applications:
- Start with "Easy Apply" jobs on LinkedIn
- Test on 1-2 applications first
- Review what Clawdbot fills in
- Gradually increase automation level

### For Best Performance:
- Use Google Gemini (free tier is generous)
- Keep gateway running in background
- Use Telegram for fastest responses
- Enable verbose logging to see what's happening

### For Privacy:
- Run gateway locally (not online) for sensitive tasks
- Use sandbox mode for testing
- Review permissions before granting
- Keep API keys secure

---

## 🚀 Ready to Start?

Run this command now:
```powershell
clawdbot onboard
```

Then follow the interactive wizard! 🎉

**Need help?** Just ask me and I'll guide you through each step!
