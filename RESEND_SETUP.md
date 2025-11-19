# 🚀 Resend Setup Guide - Your Configuration

## ✅ Your Resend API Key (Already Configured)

```
API Key: re_anLEqDKg_LGEps67gUD4VcvgFsofPGjNu
Name: solveprint
Permissions: Full access
Created: Just now
```

---

## 🎯 Quick Setup (2 Minutes)

### Step 1: Add to Vercel

After deploying to Vercel, add these environment variables:

**Vercel Dashboard → Settings → Environment Variables**

| Name | Value |
|------|-------|
| `RESEND_API_KEY` | `re_anLEqDKg_LGEps67gUD4VcvgFsofPGjNu` |
| `FROM_EMAIL` | `onboarding@resend.dev` |
| `CONTACT_EMAIL` | `info@solveprint.co.uk` |

### Step 2: Deploy & Test

1. Deploy to Vercel
2. Submit test form
3. Check `info@solveprint.co.uk` inbox
4. Done! ✅

---

## 📧 Email Configuration

### Testing (Use This First)
```env
FROM_EMAIL=onboarding@resend.dev
```
- No domain verification needed
- Works immediately
- Perfect for testing

### Production (Optional - After Testing Works)
```env
FROM_EMAIL=noreply@solveprint.co.uk
```
- Requires domain verification in Resend
- More professional
- Better deliverability

---

## 🔧 Local Development

Create `.env.local` file:

```env
RESEND_API_KEY=re_anLEqDKg_LGEps67gUD4VcvgFsofPGjNu
FROM_EMAIL=onboarding@resend.dev
CONTACT_EMAIL=info@solveprint.co.uk
```

Then run:
```bash
npm install
npm run dev
```

Test at: http://localhost:3000

---

## ✨ Why Resend is Better Than SMTP

✅ **Simpler Setup**
- Just one API key (no SMTP config)
- No app passwords needed
- No server configuration

✅ **Better Reliability**
- Professional email infrastructure
- Built-in retry logic
- High deliverability rates

✅ **Developer Friendly**
- Modern API
- Great TypeScript support
- Easy to debug

✅ **Free Tier**
- 3,000 emails/month free
- 100 emails/day
- Perfect for contact forms

---

## 📊 What Happens When Form is Submitted

1. **User fills form** on your website
2. **Validation** (client + server side)
3. **Rate limit check** (3 requests/minute)
4. **Two emails sent via Resend:**
   - Email to `info@solveprint.co.uk` (company notification)
   - Auto-reply to customer (confirmation)

---

## 🔍 Verify Domain (Optional - For Production)

To use `noreply@solveprint.co.uk` instead of `onboarding@resend.dev`:

1. Go to: https://resend.com/domains
2. Click "Add Domain"
3. Enter: `solveprint.co.uk`
4. Add DNS records to your domain:
   - SPF record
   - DKIM record
5. Wait for verification (usually 5-10 minutes)
6. Update `FROM_EMAIL` to `noreply@solveprint.co.uk`

**For now, use `onboarding@resend.dev` - it works immediately!**

---

## 🧪 Testing Checklist

- [ ] Deploy to Vercel
- [ ] Add environment variables
- [ ] Submit test form
- [ ] Check `info@solveprint.co.uk` inbox (company email)
- [ ] Check test customer email inbox (auto-reply)
- [ ] Verify both emails have correct content
- [ ] Test rate limiting (4 quick submissions)
- [ ] Test on mobile device

---

## 📈 Monitor Email Delivery

View email logs in Resend Dashboard:
- https://resend.com/emails
- See all sent emails
- Check delivery status
- Debug issues

---

## 🆘 Troubleshooting

### Email not received?

1. **Check Spam Folder**
   - Resend emails may go to spam initially
   - Mark as "Not Spam" to improve future delivery

2. **Verify API Key**
   - Make sure it's: `re_anLEqDKg_LGEps67gUD4VcvgFsofPGjNu`
   - Check in Vercel environment variables

3. **Check Resend Dashboard**
   - Go to: https://resend.com/emails
   - See if emails were sent
   - Check error messages

4. **Check Vercel Logs**
   - Vercel Dashboard → Functions → Logs
   - Look for error messages

### Rate Limit Error?
- Wait 1 minute between submissions
- Default: 3 requests per minute per IP
- Adjust in `app/api/contact/route.ts` if needed

### Form Not Submitting?
- Check browser console for errors
- Verify API endpoint: `/api/contact`
- Check Vercel deployment status

---

## 🔑 Security Notes

✅ **API Key is Secret**
- Never commit to GitHub
- Only in environment variables
- Secure in Vercel

✅ **Rate Limiting Active**
- 3 requests/minute per IP
- Prevents spam abuse

✅ **Input Validation**
- Client-side validation
- Server-side validation
- XSS protection

---

## 📞 Support

**Resend Support:**
- Docs: https://resend.com/docs
- Support: support@resend.com

**SolvePrint Contact:**
- Email: info@solveprint.co.uk
- Phone: 07743730963

---

## 🎯 Next Steps

1. ✅ API Key already configured
2. 📤 Deploy to Vercel
3. ⚙️ Add environment variables
4. 🧪 Test form submission
5. 📧 Check email delivery
6. 🌐 Embed on website

---

## 💡 Pro Tips

- **Start with `onboarding@resend.dev`** - works immediately
- **Monitor first few submissions** in Resend dashboard
- **Verify domain later** for more professional emails
- **Check spam folder** during initial testing
- **Keep API key secure** - never share publicly

---

**Your Resend setup is ready! The form will send emails as soon as you deploy. 🚀**

Current Configuration:
```
✅ API Key: Configured
✅ From Email: onboarding@resend.dev (ready to use)
✅ To Email: info@solveprint.co.uk
✅ Auto-reply: Enabled
```

Deploy now and test!
