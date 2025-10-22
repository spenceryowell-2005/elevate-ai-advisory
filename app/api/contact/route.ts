
import { NextResponse } from 'next/server';

// Minimal email relay via a service like Resend or Mailgun recommended for production.
// Here we simply print to server logs as a stub to avoid requiring SMTP creds.
export async function POST(request: Request) {
  try {
    const data = await request.json();
    console.log("Contact request received:", data);
    // TODO: Integrate Resend/Mailgun/SES here. Example shape:
    // await sendEmail({ subject: "New Inquiry", text: JSON.stringify(data, null, 2) })
    return NextResponse.json({ ok: true });
  } catch (e) {
    return NextResponse.json({ ok: false, error: 'Invalid request' }, { status: 400 });
  }
}
