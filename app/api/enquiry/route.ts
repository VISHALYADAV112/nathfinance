import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { z } from 'zod';

const schema = z.object({
  name: z.string().min(2).max(80),
  phone: z.string().min(10).max(18),
  service: z.string().min(2).max(80),
  city: z.string().min(2).max(80),
  language: z.string().max(20).optional(),
  time: z.string().max(30).optional(),
  message: z.string().max(700).optional(),
  website: z.string().optional()
});

const hits = new Map<string, { count: number; reset: number }>();

export async function POST(request: Request) {
  try {
    const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown';
    const now = Date.now();
    const current = hits.get(ip);
    if (current && current.reset > now && current.count >= 5) {
      return NextResponse.json({ message: 'Too many requests. Please try again later.' }, { status: 429 });
    }
    hits.set(ip, current && current.reset > now ? { ...current, count: current.count + 1 } : { count: 1, reset: now + 15 * 60 * 1000 });

    const parsed = schema.safeParse(await request.json());
    if (!parsed.success) return NextResponse.json({ message: 'Please check the entered details.' }, { status: 400 });
    if (parsed.data.website) return NextResponse.json({ message: 'Thank you. We will contact you shortly.' });

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) return NextResponse.json({ message: 'Form is in test mode. Please call or WhatsApp us.' }, { status: 503 });

    const resend = new Resend(apiKey);
    const d = parsed.data;
    await resend.emails.send({
      from: process.env.ENQUIRY_FROM_EMAIL || 'Nath Financial Solutions <onboarding@resend.dev>',
      to: process.env.ENQUIRY_TO_EMAIL || 'kirdakarsuyash04@gmail.com',
      subject: `New enquiry: ${d.service} — ${d.name}`,
      html: `<div style="font-family:Arial,sans-serif;line-height:1.6"><h2>New website enquiry</h2><p><b>Name:</b> ${escapeHtml(d.name)}</p><p><b>Phone:</b> ${escapeHtml(d.phone)}</p><p><b>Service:</b> ${escapeHtml(d.service)}</p><p><b>City:</b> ${escapeHtml(d.city)}</p><p><b>Language:</b> ${escapeHtml(d.language || '-')}</p><p><b>Preferred time:</b> ${escapeHtml(d.time || '-')}</p><p><b>Message:</b> ${escapeHtml(d.message || '-')}</p></div>`
    });
    return NextResponse.json({ message: 'Thank you. Our team will contact you shortly.' });
  } catch {
    return NextResponse.json({ message: 'We could not submit your enquiry. Please call or WhatsApp us.' }, { status: 500 });
  }
}

function escapeHtml(value: string) {
  return value.replace(/[&<>'"]/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[char] || char));
}
