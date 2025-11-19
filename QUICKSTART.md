# 🚀 Quick Start Guide - SolvePrint Contact Form

## ⚡ 5-Minute Setup

### 1️⃣ Push to GitHub (2 minutes)

```bash
cd solveprint-contact-form
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/solveprint-contact-form.git
git push -u origin main
```

### 2️⃣ Deploy on Vercel (2 minutes)

1. Go to [vercel.com](https://vercel.com)
2. Sign up/Login with GitHub
3. Click "Add New Project"
4. Import `solveprint-contact-form`
5. Click "Deploy"

### 3️⃣ Add Email Settings (1 minute)

In Vercel Dashboard → Settings → Environment Variables:

```
RESEND_API_KEY = re_anLEqDKg_LGEps67gUD4VcvgFsofPGjNu
FROM_EMAIL = onboarding@resend.dev
CONTACT_EMAIL = info@solveprint.co.uk
```

**Your API key is already configured above!**

---

## 📋 Embed Code

Replace `YOUR-URL` with your Vercel deployment URL:

```html
<iframe 
  src="https://YOUR-URL.vercel.app" 
  width="100%" 
  height="900" 
  frameborder="0"
  style="border: none; border-radius: 12px;"
></iframe>
```

---

## ✅ Testing Checklist

- [ ] Form loads correctly
- [ ] All fields validate properly
- [ ] Email sent to company (info@solveprint.co.uk)
- [ ] Auto-reply sent to customer
- [ ] Mobile responsive
- [ ] Rate limiting works (try 4 submissions quickly)

---

## 🆘 Common Issues

**Email not sending?**
→ Use Gmail App Password, not regular password

**Form not submitting?**
→ Check browser console for errors

**Rate limit?**
→ Wait 1 minute or adjust in `app/api/contact/route.ts`

---

## 📞 Support

- **Email:** info@solveprint.co.uk
- **Phone:** 07743730963

---

## 📚 Full Documentation

- `README.md` - Complete documentation
- `DEPLOYMENT.md` - Detailed deployment guide
- `EMBED_CODES.html` - 8 embed options
- `CHANGELOG.md` - Version history

---

**Your form will be live in 5 minutes! 🎉**
