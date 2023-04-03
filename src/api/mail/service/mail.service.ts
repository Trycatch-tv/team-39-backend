import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { MailDto } from '../dto/mail.dto';

@Injectable()
export class MailService {
  constructor(private readonly _mailerService: MailerService) {}
  send(mailData: MailDto) {
    this._mailerService.sendMail({
      to: mailData.to,
      from: mailData.from,
      bcc: mailData.bcc,
      subject: mailData.subject,
      template: mailData.template,
      context: { ...mailData.data },
    });
  }
}
