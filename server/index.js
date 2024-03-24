import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
const app = express();

const PORT = 5000;

app.use(cors());

app.get('/', async(req, res) => {
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
          subject: 'dskfjjf',
          text: 'sdkfhsdf',
          html: `<p>dfjksdjf</p>`,
        });
        console.log('Message sent: %s', info.messageId);
        // res.status(200).json({ success: true, messageId: info.messageId });
      } catch (error) {
        console.error(error);
        // res.status(500).json({ success: false, error: 'Failed to send email' });
      }
});

app.listen(PORT, () => {
  console.log(`> Ready on port ${PORT}`);
});
