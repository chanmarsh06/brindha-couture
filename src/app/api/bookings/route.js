import { google } from 'googleapis';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';


const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
    try {
        const body = await req.json();
        const { name, email, phone, service, date, time, notes } = body;

        // 🔐 Validate environment vars
        if (
            !process.env.GOOGLE_CLIENT_EMAIL ||
            !process.env.GOOGLE_PRIVATE_KEY ||
            !process.env.GOOGLE_SHEET_ID ||
            !process.env.RESEND_API_KEY
        ) {
            console.error('❌ Missing required environment variables');
            return NextResponse.json(
                { success: false, message: 'Server configuration error' },
                { status: 500 }
            );
        }

        // 1️⃣ Authenticate Google Sheets
        const auth = new google.auth.GoogleAuth({
            credentials: {
                client_email: process.env.GOOGLE_CLIENT_EMAIL,
                private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
            },
            scopes: ['https://www.googleapis.com/auth/spreadsheets'],
        });

        const sheets = google.sheets({ version: 'v4', auth });

        // 2️⃣ Append booking data
        const appendRes = await sheets.spreadsheets.values.append({
            spreadsheetId: process.env.GOOGLE_SHEET_ID,
            range: 'Sheet1!A:H',
            valueInputOption: 'USER_ENTERED',
            requestBody: {
                values: [
                    [name, email, phone, service, date, time, notes, new Date().toLocaleString()],
                ],
            },
        });

        // 3️⃣ Send email notification via Resend
        await resend.emails.send({
            from: 'Bookings <onboarding@resend.dev>',
            to: process.env.RESEND_TO_EMAIL || 'brindha.couture@example.com',
            subject: '🧵 New Booking Received - Brindha Couture',
            html: `
       <div style="font-family: 'Segoe UI', Arial, sans-serif; background-color: #f8f8f8; padding: 20px;">
  <div style="max-width: 600px; background: #ffffff; margin: auto; border-radius: 10px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
    
    <div style="background-color: #e91e63; color: white; text-align: center; padding: 15px 0;">
      <h2 style="margin: 0;">💫 Brindha Couture Booking Confirmation</h2>
    </div>

    <div style="padding: 25px;">
      <p style="font-size: 16px;">Hi <b>${name}</b>,</p>
      <p>We’ve received your booking details. Our team will contact you shortly to confirm the slot.</p>
      
      <h3 style="color: #e91e63; margin-top: 25px;">📋 Booking Summary</h3>
      <table style="width: 100%; border-collapse: collapse; margin-top: 10px;">
        <tr><td style="padding: 8px; font-weight: bold;">Name:</td><td>${name}</td></tr>
        <tr><td style="padding: 8px; font-weight: bold;">Email:</td><td>${email}</td></tr>
        <tr><td style="padding: 8px; font-weight: bold;">Phone:</td><td>${phone}</td></tr>
        <tr><td style="padding: 8px; font-weight: bold;">Service:</td><td>${service}</td></tr>
        <tr><td style="padding: 8px; font-weight: bold;">Date:</td><td>${date}</td></tr>
        <tr><td style="padding: 8px; font-weight: bold;">Time:</td><td>${time}</td></tr>
        <tr><td style="padding: 8px; font-weight: bold;">Notes:</td><td>${notes || 'N/A'}</td></tr>
      </table>

      <p style="margin-top: 25px; font-size: 14px; color: #555;">
        <i>Thank you for choosing Brindha Couture. We look forward to creating your perfect outfit!</i>
      </p>

      <div style="margin-top: 30px; text-align: center;">
        <a href="https://brindhacouture.netlify.app/" style="background-color: #e91e63; color: white; padding: 10px 20px; border-radius: 5px; text-decoration: none;">
          Visit Our Website
        </a>
      </div>
    </div>
  </div>
</div>

      `,
        });

        return NextResponse.json({
            success: true,
            message: 'Booking recorded and email sent successfully',
            response: appendRes.data,
        });
    } catch (error) {
        console.error('❌ Booking Error:', error);
        return NextResponse.json(
            {
                success: false,
                message: error.message || 'Internal Server Error',
            },
            { status: 500 }
        );
    }
}
