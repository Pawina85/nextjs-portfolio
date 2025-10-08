# 🚨 URGENT: Fix Email Configuration

## The Problem
Your `.env.local` file has placeholder values instead of real Gmail credentials.

**Current Error:** `EMAIL_PASS: App password must be exactly 16 characters, got 17`

## ✅ SOLUTION (5 minutes):

### Step 1: Generate Gmail App Password
1. 🔗 Go to: https://myaccount.google.com/security
2. ✅ Enable **2-Step Verification** (if not already enabled)
3. 📱 Click **"App passwords"** 
4. 📧 Select **"Mail"** and click **Generate**
5. 📋 Copy the 16-character password (looks like: `abcd efgh ijkl mnop`)

### Step 2: Update Your .env.local File
Open `/Users/pawinachanthachon/Documents/nextjs-portfolio/.env.local` and replace:

```env
# REPLACE THESE LINES:
EMAIL_USER=replace-with-your-gmail@gmail.com
EMAIL_PASS=replace-with-app-pass
EMAIL_RECEIVER=pawinachanthachon@gmail.com

# WITH YOUR ACTUAL VALUES:
EMAIL_USER=pawinachanthachon@gmail.com
EMAIL_PASS=abcd efgh ijkl mnop  # ← Your actual 16-char app password
EMAIL_RECEIVER=pawinachanthachon@gmail.com
```

### Step 3: Restart Server
```bash
# Stop current server (Ctrl+C) then:
npm run dev
```

### Step 4: Test Email Form
- Visit: http://localhost:3000/#contact  
- Fill out and submit the form
- Check your inbox! 📬

## 🔍 Current Status Check:
- ✅ Nodemailer installed
- ✅ Helper functions working  
- ✅ API route configured
- ❌ **Environment variables need your real credentials**

## ⚡ Quick Fix:
The validation is working perfectly - it's detecting that `"your-app-password"` is 17 characters instead of the required 16. Just replace it with your actual Gmail app password and you're done!
