// pages/api/sendEmail.ts
'use server';
import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function handler(

) {
  const transporter = nodemailer.createTransport({
    host: 'smtp.titan.email',
    port: 465,
    secure: true,
    auth: {
      user: 'info@anygraphicstoday.com',
      pass: '1c51275382b874757f1defec56dbd19c',
    },
  });

  try {
    const info = await transporter.sendMail({
      from: 'info@anygraphicstoday.com',
      to: 'kiamhasan267@gmail.com',
      subject: 'Hello ✔',
      text: 'Hello world?',
      html: '<b>Hello world?</b>',
    });
    console.log('Message sent: %s', info.messageId);
  
  } catch (error) {
    console.error(error);
  }
}
