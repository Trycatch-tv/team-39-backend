import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Module({
  imports: [
    MikroOrmModule.forRootAsync({
      useFactory(configService: ConfigService) {
        return {
          dbName: configService.get('database.name'),
          type: 'mysql',
          port: configService.get('database.port'),
          host: configService.get('database.host'),
          entities: ['../../src/entities/index'],
          autoLoadEntities: true,
        };
      },
      inject: [ConfigService],
    }),
  ],
})
export class DatabaseModule {}
