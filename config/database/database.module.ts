import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import mikroOrmConfig from '../../mikro-orm.config';

@Module({
  imports: [
    // MikroOrmModule.forRootAsync({
    //   useFactory: async (configService: ConfigService) => {
    //     return mikroOrmConfig(configService);
    //   },
    //   inject: [ConfigService],
    // }),
    MikroOrmModule.forRootAsync({
      useFactory: async (configService: ConfigService) => {
        return {
          dbName: configService.get('database.name'),
          type: 'mysql',
          user: configService.get('database.username'),
          password: configService.get('database.password'),
          port: configService.get('database.port'),
          host: configService.get('database.host'),
          entities: ['../../src/entities/index'],
          autoLoadEntities: true,
          schemaGenerator: {
            disableForeignKeys: true, // wrap statements with `set foreign_key_checks = 0` or equivalent
            createForeignKeyConstraints: true, // whether to generate FK constraints
            ignoreSchema: [], // allows ignoring some schemas when diffing
          },
        };
      },
      inject: [ConfigService],
    }),
  ],
})
export class DatabaseModule {}
