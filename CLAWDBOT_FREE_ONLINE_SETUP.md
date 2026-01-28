# 🚀 Clawdbot FREE Online Setup Guide

## Best FREE Option: Render.com

### Why Render?
- ✅ **100% FREE** - No credit card required
- ✅ **Always Online** - 24/7 accessibility
- ✅ **One-Click Deploy** - Easiest setup
- ✅ **Free Public URL** - Access from anywhere
- ✅ **Auto-Updates** - Stays in sync with your code

---

## 🎯 Step-by-Step Setup

### Step 1: Fork Clawdbot Repository
1. Go to: https://github.com/anthropics/clawdbot
2. Click **"Fork"** button (top right)
3. This creates your own copy of Clawdbot

### Step 2: Sign Up for Render (FREE)
1. Go to: https://render.com
2. Click **"Get Started for Free"**
3. Sign up with GitHub (recommended - makes deployment easier)
4. No credit card needed!

### Step 3: Deploy Clawdbot on Render
1. In Render dashboard, click **"New +"** → **"Web Service"**
2. Connect your GitHub account if not already connected
3. Select your forked `clawdbot` repository
4. Configure the service:
   - **Name**: `my-clawdbot` (or any name you like)
   - **Environment**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Plan**: Select **"Free"**

### Step 4: Set Environment Variables
In the Render dashboard, add these environment variables:

**Required:**
- `SETUP_PASSWORD` = `your-secure-password-here` (choose any password)
- `NODE_VERSION` = `22`

**Optional (add later during setup):**
- `ANTHROPIC_API_KEY` = Your Claude API key
- `OPENAI_API_KEY` = Your OpenAI API key
- `TELEGRAM_BOT_TOKEN` = Your Telegram bot token
- `DISCORD_BOT_TOKEN` = Your Discord bot token

### Step 5: Deploy!
1. Click **"Create Web Service"**
2. Wait 2-3 minutes for deployment
3. You'll get a free URL like: `https://my-clawdbot.onrender.com`

### Step 6: Complete Setup
1. Visit your Render URL: `https://my-clawdbot.onrender.com/setup`
2. Enter your `SETUP_PASSWORD`
3. Follow the setup wizard:
   - Choose AI provider (Claude/OpenAI/etc)
   - Add API keys
   - Connect messaging apps (Telegram, Discord, etc)

---

## 🎮 Alternative FREE Options

### Option 2: Railway.app (FREE Tier)
- **Pros**: $5 free credit monthly, very fast deployment
- **Cons**: Requires credit card (but won't charge unless you exceed free tier)
- **URL**: https://railway.app
- **Deploy**: Click "Deploy from GitHub" → Select clawdbot repo

### Option 3: Northflank (FREE Tier)
- **Pros**: One-click Clawdbot template available
- **Cons**: Slightly more complex UI
- **URL**: https://northflank.com
- **Deploy**: Use their Clawdbot template

### Option 4: AWS Free Tier (Advanced)
- **Pros**: 12 months free, very powerful
- **Cons**: Requires credit card, more technical setup
- **Best for**: If you want full control

---

## 🔧 Connecting Messaging Apps (FREE)

### Telegram (Recommended - Easiest)
1. Open Telegram and search for `@BotFather`
2. Send `/newbot` command
3. Follow prompts to create your bot
4. Copy the bot token
5. Paste it in Clawdbot setup wizard
6. **100% FREE forever!**

### Discord (FREE)
1. Go to: https://discord.com/developers/applications
2. Create "New Application"
3. Go to "Bot" section → "Add Bot"
4. Copy bot token
5. Paste in Clawdbot setup
6. **100% FREE forever!**

### WhatsApp (FREE)
- Clawdbot supports WhatsApp via QR code scanning
- Completely free, no API costs

---

## 💰 Cost Breakdown (What's Actually FREE)

### Completely FREE:
- ✅ Render hosting (free tier)
- ✅ Telegram bot (unlimited messages)
- ✅ Discord bot (unlimited messages)
- ✅ WhatsApp connection (no API costs)
- ✅ Public URL access

### Costs Money (Pay-as-you-go):
- ❌ AI API calls (Claude, OpenAI, etc)
  - **Claude**: ~$3-15/month for moderate use
  - **OpenAI GPT-4**: ~$5-20/month for moderate use
  - **Tip**: Start with free tier APIs or use cheaper models

### How to Minimize AI Costs:
1. Use **Claude Sonnet** (cheaper than Opus)
2. Use **GPT-3.5** instead of GPT-4
3. Use **Google Gemini** (has generous free tier)
4. Set usage limits in your API dashboard

---

## 🎯 Recommended FREE Setup

**Best completely free combination:**
1. **Hosting**: Render.com (FREE)
2. **Messaging**: Telegram (FREE)
3. **AI Model**: Google Gemini API (FREE tier - 60 requests/min)
   - Get free API key: https://makersuite.google.com/app/apikey

**Total Monthly Cost**: $0 🎉

---

## 🚨 Important Notes

1. **Render Free Tier Limitations**:
   - Service sleeps after 15 min of inactivity
   - Wakes up automatically when accessed (takes ~30 seconds)
   - 750 hours/month free (enough for 24/7 if only one service)

2. **Keep It Awake** (Optional):
   - Use a free uptime monitor like UptimeRobot.com
   - Pings your URL every 5 minutes to prevent sleep

3. **Security**:
   - Always use a strong `SETUP_PASSWORD`
   - Don't share your API keys
   - Enable sandbox mode for safety

---

## 📞 Next Steps

1. Choose your deployment platform (Render recommended)
2. Get your free AI API key (Gemini recommended for free tier)
3. Create Telegram bot (easiest messaging option)
4. Deploy and enjoy your FREE online Clawdbot! 🎉

**Need help?** Let me know which platform you choose and I'll guide you through it!
