import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

// Rate limiting - simple in-memory store
const rateLimitMap = new Map<string, { count: number; timestamp: number }>();
const RATE_LIMIT_WINDOW = 60000; // 1 minute
const MAX_REQUESTS = 3; // Max 3 requests per minute per IP

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const userLimit = rateLimitMap.get(ip);

  if (!userLimit || now - userLimit.timestamp > RATE_LIMIT_WINDOW) {
    rateLimitMap.set(ip, { count: 1, timestamp: now });
    return true;
  }

  if (userLimit.count >= MAX_REQUESTS) {
    return false;
  }

  userLimit.count++;
  return true;
}

export async function POST(request: NextRequest) {
  try {
    // Get IP for rate limiting
    const ip = request.headers.get('x-forwarded-for') || 
               request.headers.get('x-real-ip') || 
               'unknown';

    // Check rate limit
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      );
    }

    // Parse request body
    const body = await request.json();
    const { serviceType, name, email, phone, company, message } = body;

    // Validation
    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Message length validation
    if (message.length > 500) {
      return NextResponse.json(
        { error: 'Message too long' },
        { status: 400 }
      );
    }

    // Check environment variables
    if (!process.env.RESEND_API_KEY) {
      console.error('❌ RESEND_API_KEY not configured');
      return NextResponse.json(
        { error: 'Email service not configured' },
        { status: 500 }
      );
    }

    console.log('✅ Environment variables present');
    console.log('📧 Attempting to send emails...');

    // Initialize Resend client at runtime
    const resend = new Resend(process.env.RESEND_API_KEY);

    const fromEmail = process.env.FROM_EMAIL || 'onboarding@resend.dev';
    const contactEmail = process.env.CONTACT_EMAIL || 'info@solveprint.co.uk';

    console.log(`📤 From: ${fromEmail}`);
    console.log(`📥 To: ${contactEmail}`);

    // Email to company
    const companyEmailHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: #22a555; color: white; padding: 20px; border-radius: 8px 8px 0 0; }
          .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 8px 8px; }
          .field { margin-bottom: 15px; }
          .label { font-weight: bold; color: #22a555; }
          .value { margin-top: 5px; padding: 10px; background: white; border-radius: 4px; }
          .footer { margin-top: 20px; padding-top: 20px; border-top: 1px solid #ddd; font-size: 12px; color: #666; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h2 style="margin: 0;">New Contact Form Submission</h2>
          </div>
          <div class="content">
            ${serviceType ? `
            <div class="field">
              <div class="label">Service Type:</div>
              <div class="value">${serviceType}</div>
            </div>
            ` : ''}
            
            <div class="field">
              <div class="label">Name:</div>
              <div class="value">${name}</div>
            </div>
            
            <div class="field">
              <div class="label">Email:</div>
              <div class="value"><a href="mailto:${email}">${email}</a></div>
            </div>
            
            <div class="field">
              <div class="label">Phone:</div>
              <div class="value"><a href="tel:${phone}">${phone}</a></div>
            </div>
            
            ${company ? `
            <div class="field">
              <div class="label">Company:</div>
              <div class="value">${company}</div>
            </div>
            ` : ''}
            
            <div class="field">
              <div class="label">Message:</div>
              <div class="value">${message.replace(/\n/g, '<br>')}</div>
            </div>
            
            <div class="footer">
              <p>Submitted: ${new Date().toLocaleString('en-GB', { timeZone: 'Europe/London' })}</p>
              <p>IP Address: ${ip}</p>
            </div>
          </div>
        </div>
      </body>
      </html>
    `;

    // Auto-reply to customer
    const customerEmailHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: #22a555; color: white; padding: 30px; text-align: center; border-radius: 8px 8px 0 0; }
          .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 8px 8px; }
          .footer { margin-top: 20px; padding-top: 20px; border-top: 1px solid #ddd; text-align: center; font-size: 14px; color: #666; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1 style="margin: 0;">SolvePrint</h1>
            <p style="margin: 10px 0 0;">Thank you for contacting us!</p>
          </div>
          <div class="content">
            <p>Dear ${name},</p>
            
            <p>We've received your inquiry and our team will review it shortly. We typically respond within 24 hours during business days.</p>
            
            <p>Your submission details:</p>
            <ul>
              ${serviceType ? `<li><strong>Service:</strong> ${serviceType}</li>` : ''}
              <li><strong>Phone:</strong> ${phone}</li>
              ${company ? `<li><strong>Company:</strong> ${company}</li>` : ''}
            </ul>
            
            <p>If you need immediate assistance, please don't hesitate to call us:</p>
            <p style="font-size: 18px; color: #22a555;"><strong>07743 730963</strong></p>
            
            <div class="footer">
              <p><strong>SolvePrint</strong></p>
              <p>
                Email: <a href="mailto:info@solveprint.co.uk" style="color: #22a555;">info@solveprint.co.uk</a><br>
                Phone: <a href="tel:07743730963" style="color: #22a555;">07743 730963</a>
              </p>
            </div>
          </div>
        </div>
      </body>
      </html>
    `;

    // Send email to company
    try {
      console.log('📨 Sending company notification...');
      const companyResult = await resend.emails.send({
        from: fromEmail,
        to: contactEmail,
        subject: `New Contact Form Submission - ${serviceType || 'General Inquiry'}`,
        html: companyEmailHtml,
      });
      console.log('✅ Company email sent:', companyResult);
    } catch (companyError: any) {
      console.error('❌ Company email error:', companyError);
      console.error('Error details:', JSON.stringify(companyError, null, 2));
      // Don't return error yet, try customer email
    }

    // Send auto-reply to customer
    try {
      console.log('📨 Sending customer auto-reply...');
      const customerResult = await resend.emails.send({
        from: fromEmail,
        to: email,
        subject: 'Thank you for contacting SolvePrint',
        html: customerEmailHtml,
      });
      console.log('✅ Customer email sent:', customerResult);
    } catch (customerError: any) {
      console.error('❌ Customer email error:', customerError);
      console.error('Error details:', JSON.stringify(customerError, null, 2));
    }

    // Log submission
    console.log('📝 Form submission logged:', {
      timestamp: new Date().toISOString(),
      serviceType,
      name,
      email,
      phone,
      company,
      ip,
    });

    return NextResponse.json(
      { 
        success: true, 
        message: 'Form submitted successfully' 
      },
      { status: 200 }
    );

  } catch (error: any) {
    console.error('💥 Form submission error:', error);
    console.error('Error stack:', error.stack);
    return NextResponse.json(
      { error: 'Internal server error: ' + error.message },
      { status: 500 }
    );
  }
}

// Handle OPTIONS for CORS preflight
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}
