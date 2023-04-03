import { MailerModule } from '@nestjs-modules/mailer';
import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { MailConfigService } from './configuration/mail.configuration';
import { MailService } from './service/mail.service';

@Module({
  imports: [
    MailerModule.forRootAsync({
      useFactory: (configService: ConfigService) =>
        new MailConfigService(configService).createMailerOptions(),
      inject: [ConfigService],
    }),
  ],
  providers: [MailService],
  exports: [MailService],
})
export class MailModule {}
