# 📧 Email Setup Instructions

Your portfolio now has a fully functional email contact form! Follow these steps to set it up:

## 🔧 Setup Steps

### 1. Configure Your Gmail Account

1. **Enable 2-Step Verification** (if not already enabled):
   - Go to [Google Account Security](https://myaccount.google.com/security)
   - Enable 2-Step Verification

2. **Generate App Password**:
   - In Google Account Security, go to "App passwords"
   - Select "Mail" as the app
   - Copy the 16-character password generated

### 2. Update Environment Variables

Open the `.env.local` file in your project and update these values:

```env
EMAIL_USER=your-actual-gmail@gmail.com
EMAIL_PASS=your-16-character-app-password
EMAIL_RECEIVER=pawinachanthachon@gmail.com
```

**Replace:**
- `your-actual-gmail@gmail.com` → Your Gmail address
- `your-16-character-app-password` → The app password from step 1
- `pawinachanthachon@gmail.com` → Email where you want to receive messages

### 3. Restart the Development Server

After updating `.env.local`, restart your dev server:

```bash
npm run dev
```

## ✅ Testing

1. Go to your contact form at `http://localhost:3000/#contact`
2. Fill out and submit the form
3. Check your inbox (EMAIL_RECEIVER address) for the email

## 🔒 Security Notes

- Never commit `.env.local` to git (it's already in .gitignore)
- Use App Passwords, not your regular Gmail password
- The EMAIL_USER should be the same Gmail account that generated the app password

## 🚀 Production Deployment

When deploying to production (Vercel, Netlify, etc.), add these environment variables to your hosting platform's environment settings.

---

**Current Status:** ✅ Nodemailer installed and configured
**Next Step:** Update your `.env.local` file with your actual credentials
