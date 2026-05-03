import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  const body = await req.json();

  const { name, email, phone, service, message } = body;

  await resend.emails.send({
    from: 'Enquiry <onboarding@resend.dev>',
    to: ['info@cpscompletepropertysolutions.co.uk'],
    subject: `New Enquiry - ${service}`,
    html: `
      <h2>New Job Enquiry</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Service:</strong> ${service}</p>
      <p><strong>Message:</strong> ${message}</p>
    `,
  });

  return new Response(JSON.stringify({ success: true }));
}