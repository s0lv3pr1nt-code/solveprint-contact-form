# Quick Deployment Guide

## Step 1: Prepare Repository

```bash
cd solveprint-contact-form

# Initialize git
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit - SolvePrint contact form"

# Create main branch
git branch -M main
```

## Step 2: Create GitHub Repository

1. Go to https://github.com/new
2. Repository name: `solveprint-contact-form`
3. Description: "Production contact form for SolvePrint website"
4. Set to **Public** or **Private**
5. **DO NOT** initialize with README, .gitignore, or license
6. Click "Create repository"

## Step 3: Push to GitHub

```bash
# Add GitHub remote (replace YOUR_USERNAME)
git remote add origin https://github.com/YOUR_USERNAME/solveprint-contact-form.git

# Push code
git push -u origin main
```

## Step 4: Deploy on Vercel

### Method A: Via Web Interface (Easiest)

1. Go to https://vercel.com/signup
2. Sign up with GitHub account
3. Click "Add New Project"
4. Select "Import Git Repository"
5. Find and import `solveprint-contact-form`
6. Click "Deploy"

### Method B: Via CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy
vercel

# Follow prompts:
# - Set up and deploy? Yes
# - Which scope? (Select your account)
# - Link to existing project? No
# - What's your project's name? solveprint-contact-form
# - In which directory is your code located? ./
# - Want to override settings? No

# Production deployment
vercel --prod
```

## Step 5: Configure Environment Variables

### In Vercel Dashboard:

1. Go to your project dashboard
2. Click "Settings"
3. Click "Environment Variables"
4. Add the following:

| Name | Value | Environment |
|------|-------|-------------|
| `SMTP_HOST` | `smtp.gmail.com` | Production, Preview, Development |
| `SMTP_PORT` | `587` | Production, Preview, Development |
| `SMTP_SECURE` | `false` | Production, Preview, Development |
| `SMTP_USER` | `your-email@gmail.com` | Production, Preview, Development |
| `SMTP_PASS` | `your-app-password` | Production, Preview, Development |
| `SMTP_FROM` | `your-email@gmail.com` | Production, Preview, Development |
| `CONTACT_EMAIL` | `info@solveprint.co.uk` | Production, Preview, Development |

**Note:** For Gmail, use an App Password (not your regular password).
Create one at: https://myaccount.google.com/apppasswords

5. Click "Save"
6. Redeploy: Deployments → Latest → "..." → Redeploy

## Step 6: Get Your Deployment URL

After successful deployment:
- Your URL will be: `https://solveprint-contact-form.vercel.app`
- Or custom domain if configured

## Step 7: Test Your Form

1. Visit your deployment URL
2. Fill out the form
3. Submit
4. Check email inbox for confirmation
5. Verify auto-reply was sent to customer

## Step 8: Embed in Website

Use one of these methods:

### Simple Iframe:
```html
<iframe 
  src="https://solveprint-contact-form.vercel.app" 
  width="100%" 
  height="900" 
  frameborder="0"
  style="border: none; border-radius: 12px;"
></iframe>
```

### Full Page Replacement:
```html
<div style="max-width: 700px; margin: 40px auto; padding: 20px;">
  <iframe 
    src="https://solveprint-contact-form.vercel.app" 
    width="100%" 
    height="850" 
    frameborder="0"
    style="border: none; border-radius: 12px; box-shadow: 0 4px 20px rgba(0,0,0,0.1);"
  ></iframe>
</div>
```

---

## Custom Domain Setup (Optional)

1. In Vercel Dashboard → Settings → Domains
2. Add your domain: `contact.solveprint.co.uk`
3. Follow DNS configuration instructions
4. Update embed code with new domain

---

## Troubleshooting

### "Failed to send email"
- Check SMTP credentials in environment variables
- For Gmail: Ensure 2FA is enabled and App Password is used
- Check Vercel function logs for detailed error

### Form not loading
- Check deployment status in Vercel
- Verify URL is correct
- Check browser console for errors

### Rate limit issues
- Default is 3 requests/minute
- Edit `app/api/contact/route.ts` to adjust

---

## Maintenance

### Update Code:
```bash
# Make changes
git add .
git commit -m "Description of changes"
git push

# Vercel will auto-deploy
```

### View Logs:
1. Vercel Dashboard → Project
2. Click "Functions"
3. View logs for debugging

### Monitor Submissions:
- Check email inbox (CONTACT_EMAIL)
- Review Vercel function logs
- Optional: Add database logging

---

## Security Notes

- Never commit `.env` or `.env.local` files
- Use environment variables for all secrets
- Regularly rotate SMTP passwords
- Monitor for unusual activity in logs

---

## Next Steps

- [ ] Test form on mobile devices
- [ ] Customize colors/branding
- [ ] Add to Google Analytics (optional)
- [ ] Set up custom domain (optional)
- [ ] Configure backup email service
- [ ] Add reCAPTCHA for extra security (optional)

---

**Deployment Complete! 🚀**

Your contact form is now live and ready to receive submissions.
