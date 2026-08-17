import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    // Mail to Harish
    await resend.emails.send({
      from: 'Portfolio <onboarding@resend.dev>',
      to: process.env.CONTACT_EMAIL!,
      subject: `New Portfolio Inquiry from ${name}`,
      html: `
        <div style="font-family:Inter,Arial,sans-serif;background:#0a0a0a;padding:40px;color:#fff;">
          <div style="max-width:700px;margin:auto;background:#111;border-radius:20px;padding:40px;border:1px solid #222;">
            <h1 style="color:#facc15;margin-bottom:20px;">
              New Contact Request
            </h1>

            <table style="width:100%;border-collapse:collapse;">
              <tr>
                <td style="padding:12px;font-weight:bold;color:#999;">Name</td>
                <td style="padding:12px;">${name}</td>
              </tr>

              <tr>
                <td style="padding:12px;font-weight:bold;color:#999;">Email</td>
                <td style="padding:12px;">${email}</td>
              </tr>

              <tr>
                <td style="padding:12px;font-weight:bold;color:#999;">Message</td>
                <td style="padding:12px;">${message}</td>
              </tr>
            </table>

            <div style="margin-top:30px;padding:20px;background:#1a1a1a;border-radius:12px;">
              <p style="margin:0;color:#aaa;">
                Sent from Harish Portfolio Contact Form
              </p>
            </div>
          </div>
        </div>
      `,
    });

    // Auto Reply
    await resend.emails.send({
      from: 'Harish C P <harishcp2710@gmail.com>',
      to: email,
      subject: 'Thank you for contacting Harish C P',
      html: `
        <div style="font-family:Inter,Arial,sans-serif;background:#f4f4f5;padding:40px;">
          <div style="max-width:700px;margin:auto;background:white;border-radius:20px;overflow:hidden;box-shadow:0 10px 40px rgba(0,0,0,.08);">

            <div style="background:#000;padding:40px;text-align:center;">
              <h1 style="color:#facc15;margin:0;">
                Thank You For Reaching Out
              </h1>
            </div>

            <div style="padding:40px;">
              <p style="font-size:16px;color:#333;">
                Hi <strong>${name}</strong>,
              </p>

              <p style="font-size:16px;color:#555;line-height:1.8;">
                Thank you for contacting me through my portfolio website.
                I have received your message and will review it shortly.
              </p>

              <p style="font-size:16px;color:#555;line-height:1.8;">
                Whether it's a full-stack development project, business application,
                SaaS platform, or Generative AI solution, I'll get back to you as soon as possible.
              </p>

              <div style="margin:30px 0;padding:20px;background:#fafafa;border-left:4px solid #facc15;">
                <strong>Your Message:</strong><br/><br/>
                ${message}
              </div>

              <p style="font-size:16px;color:#555;">
                Looking forward to connecting with you.
              </p>

              <br/>

              <p style="margin:0;color:#111;font-weight:bold;">
                Regards,
              </p>

              <p style="margin-top:5px;color:#111;">
                Harish C P<br/>
                Python Full Stack Developer<br/>
              </p>
            </div>
          </div>
        </div>
      `,
    });

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: 'Failed to send email',
      },
      {
        status: 500,
      }
    );
  }
}