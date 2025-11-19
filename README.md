# SolvePrint Contact Form

Production-ready contact form with email notifications, validation, rate limiting, and responsive design.

## ✨ Features

- ✅ Full form validation (client & server-side)
- ✅ Email notifications (to company & auto-reply to customer)
- ✅ Rate limiting (3 requests/minute per IP)
- ✅ 500 character limit with live counter
- ✅ Responsive design (mobile-friendly)
- ✅ CORS enabled for iframe embedding
- ✅ Professional email templates (HTML & plain text)
- ✅ Loading states & success/error messages
- ✅ Accessibility compliant
- ✅ TypeScript for type safety

---

## 🚀 Quick Deploy to Vercel

### Option 1: Deploy from GitHub (Recommended)

1. **Push to GitHub:**
   ```bash
   cd solveprint-contact-form
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/solveprint-contact-form.git
   git push -u origin main
   ```

2. **Deploy on Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your GitHub repository
   - Configure environment variables (see below)
   - Click "Deploy"

### Option 2: Deploy with Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
cd solveprint-contact-form
vercel

# Follow prompts and add environment variables when asked
```

---

## 🔧 Environment Variables

Configure these in Vercel Dashboard → Settings → Environment Variables:

### Gmail Setup (Recommended for Testing)

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
SMTP_FROM=your-email@gmail.com
CONTACT_EMAIL=info@solveprint.co.uk
```

**Gmail App Password Setup:**
1. Enable 2-Factor Authentication on your Google account
2. Go to: https://myaccount.google.com/apppasswords
3. Generate an App Password
4. Use this password (not your regular password) in `SMTP_PASS`

### Alternative SMTP Providers

<details>
<summary><strong>SendGrid</strong></summary>

```env
SMTP_HOST=smtp.sendgrid.net
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=apikey
SMTP_PASS=your-sendgrid-api-key
SMTP_FROM=verified-sender@yourdomain.com
CONTACT_EMAIL=info@solveprint.co.uk
```
</details>

<details>
<summary><strong>Mailgun</strong></summary>

```env
SMTP_HOST=smtp.mailgun.org
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=postmaster@your-domain.mailgun.org
SMTP_PASS=your-mailgun-password
SMTP_FROM=noreply@your-domain.mailgun.org
CONTACT_EMAIL=info@solveprint.co.uk
```
</details>

<details>
<summary><strong>AWS SES</strong></summary>

```env
SMTP_HOST=email-smtp.us-east-1.amazonaws.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-ses-smtp-username
SMTP_PASS=your-ses-smtp-password
SMTP_FROM=verified@yourdomain.com
CONTACT_EMAIL=info@solveprint.co.uk
```
</details>

---

## 💻 Local Development

```bash
# Install dependencies
npm install

# Create .env.local file
cp .env.example .env.local
# Edit .env.local with your SMTP credentials

# Run development server
npm run dev

# Open http://localhost:3000
```

---

## 🌐 Embedding in Your Website

### Option 1: Iframe (Full Page)

```html
<iframe 
  src="https://your-vercel-url.vercel.app" 
  width="100%" 
  height="900" 
  frameborder="0"
  style="border: none; border-radius: 12px; box-shadow: 0 4px 20px rgba(0,0,0,0.1);"
></iframe>
```

### Option 2: Iframe (Contained)

```html
<div style="max-width: 700px; margin: 0 auto; padding: 20px;">
  <iframe 
    src="https://your-vercel-url.vercel.app" 
    width="100%" 
    height="850" 
    frameborder="0"
    style="border: none; border-radius: 12px; box-shadow: 0 4px 20px rgba(0,0,0,0.1);"
  ></iframe>
</div>
```

### Option 3: Popup/Modal

```html
<button onclick="openContactForm()">Contact Us</button>

<div id="contactFormModal" style="display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.7); z-index: 9999; align-items: center; justify-content: center;">
  <div style="position: relative; width: 90%; max-width: 700px; max-height: 90vh; overflow: auto;">
    <button onclick="closeContactForm()" style="position: absolute; top: 10px; right: 10px; background: white; border: none; font-size: 24px; cursor: pointer; z-index: 10000; width: 40px; height: 40px; border-radius: 50%;">×</button>
    <iframe 
      src="https://your-vercel-url.vercel.app" 
      width="100%" 
      height="850" 
      frameborder="0"
      style="border: none; border-radius: 12px; background: white;"
    ></iframe>
  </div>
</div>

<script>
function openContactForm() {
  document.getElementById('contactFormModal').style.display = 'flex';
  document.body.style.overflow = 'hidden';
}
function closeContactForm() {
  document.getElementById('contactFormModal').style.display = 'none';
  document.body.style.overflow = 'auto';
}
</script>
```

---

## 📁 Project Structure

```
solveprint-contact-form/
├── app/
│   ├── api/
│   │   └── contact/
│   │       └── route.ts          # Form submission endpoint
│   ├── page.tsx                  # Main form component
│   ├── ContactForm.module.css    # Component styles
│   ├── layout.tsx                # Root layout
│   └── globals.css               # Global styles
├── public/                       # Static assets
├── .env.example                  # Environment variables template
├── .gitignore                    # Git ignore rules
├── next.config.js                # Next.js configuration
├── package.json                  # Dependencies
├── tsconfig.json                 # TypeScript configuration
├── vercel.json                   # Vercel configuration
└── README.md                     # Documentation
```

---

## 🔒 Security Features

- **Rate Limiting:** 3 requests/minute per IP
- **Input Validation:** Server & client-side
- **XSS Protection:** All inputs sanitized
- **CORS:** Configured for safe embedding
- **Email Security:** Uses environment variables
- **Character Limits:** Prevents spam/abuse

---

## 📧 Email Templates

### To Company
- Professional HTML template
- All form fields included
- Timestamp & IP address
- Clickable email/phone links

### To Customer (Auto-reply)
- Branded confirmation email
- Submission details
- Contact information
- Professional design

---

## 🎨 Customization

### Change Colors

Edit `app/ContactForm.module.css`:

```css
/* Primary gradient */
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);

/* Change to your brand colors */
background: linear-gradient(135deg, #YOUR_COLOR1 0%, #YOUR_COLOR2 100%);
```

### Change Form Fields

Edit `app/page.tsx` to add/remove fields in the form.

### Change Email Templates

Edit `app/api/contact/route.ts` in the `mailOptionsToCompany` and `mailOptionsToCustomer` sections.

---

## 🧪 Testing

### Test Locally
```bash
npm run dev
# Open http://localhost:3000
# Fill and submit form
# Check console for logs
```

### Test Email Sending
1. Configure SMTP in `.env.local`
2. Submit form
3. Check inbox (company email)
4. Check inbox (customer email for auto-reply)

---

## 🐛 Troubleshooting

### Emails not sending?
- ✅ Check SMTP credentials in Vercel environment variables
- ✅ For Gmail: Use App Password, not regular password
- ✅ Check Vercel function logs: Dashboard → Deployments → [Latest] → Functions
- ✅ Verify email addresses are correct

### Form not submitting?
- ✅ Check browser console for errors
- ✅ Verify API endpoint is accessible: `https://your-url.vercel.app/api/contact`
- ✅ Check Vercel deployment logs

### Rate limit issues?
- ✅ Default: 3 requests/minute per IP
- ✅ Change in `app/api/contact/route.ts`: `MAX_REQUESTS` and `RATE_LIMIT_WINDOW`

### CORS errors when embedding?
- ✅ Verify `next.config.js` has correct CORS headers
- ✅ Check iframe is using HTTPS URL

---

## 📊 Monitoring & Analytics

### View Submissions
- Check email inbox (configured in `CONTACT_EMAIL`)
- View Vercel function logs
- Optional: Add database logging (see Production Enhancements)

### Track Performance
- Vercel Dashboard → Analytics
- Monitor function execution times
- Check error rates

---

## 🚀 Production Enhancements

### Database Integration
Store submissions in a database:

```typescript
// Add to app/api/contact/route.ts
import { sql } from '@vercel/postgres';

await sql`
  INSERT INTO contacts (name, email, phone, message, created_at)
  VALUES (${name}, ${email}, ${phone}, ${message}, NOW())
`;
```

### Spam Protection
Add reCAPTCHA or Turnstile:

```bash
npm install react-google-recaptcha
```

### Notification Webhooks
Send to Slack/Discord when form is submitted.

### Admin Dashboard
Build a simple dashboard to view all submissions.

---

## 📝 License

MIT License - Use freely in commercial projects.

---

## 🆘 Support

- **Issues:** Open GitHub issue
- **Email:** info@solveprint.co.uk
- **Phone:** 07743730963

---

## 🎯 Deployment Checklist

- [ ] Push code to GitHub
- [ ] Create Vercel account
- [ ] Import GitHub repository
- [ ] Add environment variables
- [ ] Deploy
- [ ] Test form submission
- [ ] Verify emails are received
- [ ] Test on mobile devices
- [ ] Embed on website
- [ ] Monitor first submissions

---

**Your form is now live! 🎉**

Replace `https://your-vercel-url.vercel.app` with your actual Vercel deployment URL and embed anywhere.
