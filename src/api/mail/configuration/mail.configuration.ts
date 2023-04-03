import { MailerOptions, MailerOptionsFactory } from '@nestjs-modules/mailer';
import { ConfigService } from '@nestjs/config';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import * as path from 'path';

export class MailConfigService implements MailerOptionsFactory {
  constructor(private readonly _configService: ConfigService) {}
  createMailerOptions(): MailerOptions | Promise<MailerOptions> {
    return {
      transport: {
        host: this._configService.get('mail.host'),
        port: this._configService.get('mail.port'),
        ignoreTLS: this._configService.get('mail.ignoreTLS'),
        secure: this._configService.get('mail.secure'),
        requireTLS: this._configService.get('mail.requireTLS'),
        auth: {
          user: this._configService.get('mail.user'),
          pass: this._configService.get('mail.pass'),
        },
      },
      defaults: {
        from: `"${this._configService.get(
          'mail.defaultName',
        )}" <${this._configService.get('mail.defaultEmail')}>`,
      },
      template: {
        dir: path.join(
          this._configService.get('app.workingDirectory'),
          'src',
          'api',
          'mail',
          'templates',
        ),
        adapter: new HandlebarsAdapter(),
        options: {
          strict: false,
        },
      },
    } as MailerOptions;
  }
}
