import  nodemailer  from 'nodemailer';
import { MailAdapter, SendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "b9973497b997be",
    pass: "cabd6c654f9381"
  }
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({subject, body}: SendMailData) {
        await transport.sendMail({
      from: "Equipe Feedget <oi@feedget.com>",
    to: 'Lucas Thomaz <lucas.thomaz.silva@gmail.com>',
     subject,
     html: body, 
    });
  };
}