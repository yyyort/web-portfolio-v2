import nodemailer from 'nodemailer';
import SMTPConnection from 'nodemailer/lib/smtp-connection';
import { NextRequest, NextResponse } from 'next/server';
import { contactSchema, ContactSchema } from '@/lib/schema';

const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: process.env.EMAIL_HOST,
    port: 587,
    secure: false, // true for production
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
} as SMTPConnection.Options);

const sendContact = async (data: ContactSchema) => {
    const { name, email, message } = data;

    return await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_USER,
        subject: `New message from ${name} - ${email}`,
        text: message,
    })
};

export async function POST(req: NextRequest) {
    const body: unknown= await req.json();

    const data = contactSchema.safeParse(body);
    
    if (data.success) {
        try {
            await sendContact(data.data);
            return NextResponse.json({ message: 'Message sent' });
        } catch (error: unknown) {
            return NextResponse.error();
        }
    } else {
        return NextResponse.error();
    }
}