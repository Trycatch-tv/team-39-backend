import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import configuration from '../config/configuration';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './api/user/user.module';
import { AuthModule } from './api/auth/auth.module';
import { DatabaseModule } from '../config/database/database.module';
import { MailModule } from './api/mail/mail.module';
import { MovieModule } from './api/movie/movie.module';
import { DirectorModule } from './api/director/director.module';
import { ReviewModule } from './api/review/review.module';
import { GenreModule } from './api/genre/genre.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `${process.cwd()}/config/env/${process.env.NODE_ENV}.env`,
      isGlobal: true,
      load: [configuration],
    }),
    UserModule,
    AuthModule,
    DatabaseModule,
    MailModule,
    MovieModule,
    DirectorModule,
    ReviewModule,
    GenreModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
