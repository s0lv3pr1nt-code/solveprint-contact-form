# ⚡ Deploy in 3 Minutes - Resend Edition

## ✅ Your Configuration is Ready!

```
✅ Email Provider: Resend (better than Gmail/SMTP)
✅ API Key: re_anLEqDKg_LGEps67gUD4VcvgFsofPGjNu
✅ Receive at: info@solveprint.co.uk
✅ Auto-reply: Enabled
```

---

## 🚀 3-Step Deployment

### Step 1: Push to GitHub (1 minute)

```bash
cd solveprint-contact-form

git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/solveprint-contact-form.git
git push -u origin main
```

---

### Step 2: Deploy on Vercel (1 minute)

1. Go to **https://vercel.com**
2. Click **"Add New Project"**
3. Import **solveprint-contact-form**
4. Click **"Deploy"**

---

### Step 3: Add Environment Variables (1 minute)

In Vercel Dashboard → **Settings** → **Environment Variables**

Add these 3 variables:

| Variable | Value |
|----------|-------|
| `RESEND_API_KEY` | `re_anLEqDKg_LGEps67gUD4VcvgFsofPGjNu` |
| `FROM_EMAIL` | `onboarding@resend.dev` |
| `CONTACT_EMAIL` | `info@solveprint.co.uk` |

Then click **"Redeploy"** to apply changes.

---

## ✅ Done! Test Your Form

1. Visit your Vercel URL (e.g., `https://solveprint-contact-form.vercel.app`)
2. Fill out and submit the test form
3. Check **info@solveprint.co.uk** inbox (company notification)
4. Check test email inbox (auto-reply confirmation)

---

## 🌐 Embed on Your Website

```html
<iframe 
  src="https://your-vercel-url.vercel.app" 
  width="100%" 
  height="900" 
  frameborder="0"
  style="border: none; border-radius: 12px;"
></iframe>
```

Replace `your-vercel-url` with your actual Vercel deployment URL.

See **EMBED_CODES.html** for 8 different embedding options.

---

## 🎯 Why Resend?

**vs Gmail/SMTP:**
- ✅ No app passwords needed
- ✅ No 2FA configuration
- ✅ Better deliverability
- ✅ Simpler setup (just 1 API key)
- ✅ Professional infrastructure
- ✅ Free tier: 3,000 emails/month

**Your API key is already set up - just copy it to Vercel!**

---

## 📧 Email Flow

When someone submits the form:

1. **Company gets notified** → info@solveprint.co.uk
   - Full form details
   - Contact information
   - Timestamp

2. **Customer gets auto-reply** → Their email
   - Thank you message
   - Your contact details
   - Professional branding

---

## 🆘 Troubleshooting

**Email not received?**
- Check spam folder first
- Verify API key in Vercel: `re_anLEqDKg_LGEps67gUD4VcvgFsofPGjNu`
- Check Resend dashboard: https://resend.com/emails
- Check Vercel function logs

**Form not submitting?**
- Check browser console for errors
- Verify deployment is live
- Test API endpoint: `/api/contact`

**Need help?**
- Read **RESEND_SETUP.md** for detailed guide
- Check **QUICK_REFERENCE.txt** for commands
- Contact: info@solveprint.co.uk | 07743730963

---

## 📊 What You Get

✅ Professional contact form  
✅ Email notifications (company + customer)  
✅ Rate limiting (3/minute)  
✅ Mobile responsive  
✅ Security built-in  
✅ Ready to embed  

**Total setup time: 3 minutes**  
**No complex SMTP configuration needed!**

---

## 🎓 Optional: Use Your Own Domain

Currently using: `onboarding@resend.dev` (works immediately)

To use: `noreply@solveprint.co.uk` (more professional):

1. Go to https://resend.com/domains
2. Add domain: `solveprint.co.uk`
3. Add DNS records (provided by Resend)
4. Wait 5-10 minutes for verification
5. Change `FROM_EMAIL` to `noreply@solveprint.co.uk`

**For now, stick with `onboarding@resend.dev` - it works perfectly!**

---

## 🎉 You're Ready!

Your contact form is **production-ready** and will be live in 3 minutes.

**Next:** Deploy → Test → Embed

---

**Questions?**
- Email: info@solveprint.co.uk
- Phone: 07743730963
- Resend Docs: https://resend.com/docs
