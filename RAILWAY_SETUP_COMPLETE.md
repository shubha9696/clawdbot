# 🚀 COMPLETE RAILWAY SETUP - FOLLOW THESE EXACT STEPS

## YOUR RAILWAY PROJECT IS HERE:
https://railway.com/project/70212439-4e1a-4a0e-926a-5f4df8631bf1?environmentId=045b0382-527b-4405-a0c6-4298381b0011

---

## ✅ STEP-BY-STEP CONFIGURATION (10 minutes)

### STEP 1: Configure Environment Variables (3 minutes)

**In your Railway dashboard:**

1. **Click on your service** (should show "clawdbot" or the GitHub repo name)
   - It's the main card/panel in the center of the page

2. **Click the "Variables" tab** at the top

3. **Click "+ New Variable" button**

4. **Add these THREE variables** (one at a time):

**Variable 1:**
```
Name: SETUP_PASSWORD
Value: ClawdBot2024!Secure
```
Click "Add"

**Variable 2:**
```
Name: NODE_VERSION  
Value: 22
```
Click "Add"

**Variable 3:**
```
Name: PORT
Value: 8080
```
Click "Add"

---

### STEP 2: Configure Build Settings (2 minutes)

1. **Click the "Settings" tab** (next to Variables)

2. **Scroll down to find "Build" or "Deploy" section**

3. **Look for these fields:**

**Build Command:** (if there's a field for it)
```
npm install && npm install -g clawdbot
```

**Start Command:**
```
clawdbot gateway --port $PORT --host 0.0.0.0
```

4. **Click "Save" or it saves automatically**

---

### STEP 3: Generate Public Domain (1 minute)

1. **Still in "Settings" tab**

2. **Scroll to "Networking" or "Public Networking" section**

3. **Look for "Generate Domain" button**
   - If you see a domain already there, skip to step 4
   - If not, click "Generate Domain"

4. **Copy the domain URL** (it will look like):
   - `clawdbot-production-XXXX.up.railway.app`
   - OR `web-production-XXXX.up.railway.app`

5. **SAVE THIS URL** - you'll need it in Step 5!

---

### STEP 4: Wait for Deployment (2-5 minutes)

1. **Click "Deployments" tab** at the top

2. **Watch the build logs** - you'll see:
   - "Building..."
   - "Deploying..."
   - Eventually "Success" or "Active"

3. **Wait until deployment is complete**
   - If it fails, check the logs for errors
   - Most common issue: environment variables not set

---

### STEP 5: Access Clawdbot Setup Page (1 minute)

1. **Take your domain URL from Step 3**

2. **Add `/setup` to the end**

Example:
```
https://clawdbot-production-xxxx.up.railway.app/setup
```

3. **Open this URL in your browser**

4. **You should see the Clawdbot setup wizard!**

If you see "Application not found" or error:
- Wait 2 more minutes (deployment might still be starting)
- Check if deployment shows "Active" in Railway
- Try accessing without `/setup` first

---

### STEP 6: Complete Clawdbot Setup Wizard (3 minutes)

**On the setup page:**

**6.1 Enter Setup Password:**
```
ClawdBot2024!Secure
```
(This is the SETUP_PASSWORD you set in Step 1)

**6.2 Choose AI Provider:**
- Select: **Google Gemini** (recommended - FREE tier)
- Or: **OpenAI** if you prefer

**6.3 Enter API Key:**

**For Google Gemini (FREE):**
1. Open new tab: https://makersuite.google.com/app/apikey
2. Sign in with Google
3. Click "Create API Key"
4. Copy the key
5. Paste it here

**For OpenAI:**
1. Go to: https://platform.openai.com/api-keys
2. Create new key
3. Copy and paste

**6.4 Setup Telegram Bot:**

1. Open Telegram app
2. Search: `@BotFather`
3. Send: `/newbot`
4. Name: `My Clawdbot`
5. Username: `shubha_clawdbot_bot` (must end with _bot, try variations if taken)
6. Copy the token (long string like: `123456789:ABCdef...`)
7. Paste it in the setup wizard

**6.5 Complete Setup:**
- Click "Finish" or "Complete Setup"
- Wait for confirmation

---

### STEP 7: Test Your Bot! (2 minutes)

**7.1 Open Telegram:**
- Search for your bot username (e.g., `@shubha_clawdbot_bot`)
- Click on it to open chat

**7.2 Start Conversation:**
Send: `/start`

**7.3 Test Commands:**
```
Hello! Introduce yourself

What can you do?

Can you help me apply to jobs on LinkedIn?
```

**7.4 Success! 🎉**
If your bot responds intelligently, **YOU'RE DONE!**

---

## 📋 QUICK CHECKLIST

Before you start, make sure you have:
- [ ] Railway dashboard open
- [ ] Google account (for Gemini API)
- [ ] Telegram app installed

During setup:
- [ ] Added 3 environment variables
- [ ] Configured build/start commands
- [ ] Generated public domain
- [ ] Deployment shows "Active"
- [ ] Accessed /setup page

After setup:
- [ ] Got Gemini API key
- [ ] Created Telegram bot
- [ ] Completed setup wizard
- [ ] Bot responds in Telegram

---

## 🎯 IMPORTANT NOTES

### If Deployment Fails:
1. Check Railway logs for error messages
2. Verify all 3 environment variables are set correctly
3. Make sure start command is exactly: `clawdbot gateway --port $PORT --host 0.0.0.0`
4. Try clicking "Redeploy" in Settings

### If Setup Page Shows 404:
1. Wait 3-5 minutes after deployment
2. Try accessing base URL first (without /setup)
3. Check if service is "Active" in Railway
4. Verify the domain is correct

### If Telegram Bot Doesn't Respond:
1. Make sure you sent `/start` first
2. Wait 30 seconds and try again
3. Check Railway logs for connection errors
4. Verify bot token is correct in setup

---

## 🚀 YOUR DOMAIN URL

Once you generate the domain in Step 3, your Clawdbot will be at:

**Setup Page:**
```
https://YOUR-DOMAIN.up.railway.app/setup
```

**Dashboard:**
```
https://YOUR-DOMAIN.up.railway.app/
```

---

## 💰 COST

Railway FREE tier gives you $5 credit monthly.
Clawdbot uses ~$3-5/month running 24/7.

**First month = FREE**
**After that = $0-5/month**

---

## ✅ WHAT HAPPENS AFTER SETUP

Once setup is complete, you can:

1. **Control via Telegram** - Send commands from anywhere
2. **Browser Automation** - Install Browser Relay extension later
3. **Job Applications** - Start automating applications
4. **PC Control** - Run commands remotely

---

## 🆘 NEED HELP?

If you get stuck:

1. **Take a screenshot** of where you're stuck
2. **Tell me** which step number you're on
3. **Copy any error messages** you see
4. **I'll help you** troubleshoot!

---

## 🎉 LET'S DO THIS!

**START NOW with Step 1!**

Open your Railway project and add those 3 environment variables.

**Then come back and tell me:**
- "Variables added" → I'll guide you to next step
- "Got my domain: [URL]" → I'll tell you what to do next
- "Setup complete!" → I'll celebrate with you! 🎉

Let's get Clawdbot online! 🚀
