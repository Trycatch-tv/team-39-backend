import { MikroOrmModuleAsyncOptions } from '@mikro-orm/nestjs';
import { ConfigService } from '@nestjs/config';
import { UserModel } from '../../src/api/user/infrastructure/model/user.model';

// const configService = new ConfigService();
export default async function (
  configService: ConfigService,
): Promise<MikroOrmModuleAsyncOptions | any> {
  return {
    dbName: 'role_app',
    type: 'mysql',
    port: 3306,
    host: 'localhost',
    user: 'root',
    password: 'admin',
    entities: [UserModel],
    autoLoadEntities: true,
    schemaGenerator: {
      disableForeignKeys: true, // wrap statements with `set foreign_key_checks = 0` or equivalent
      createForeignKeyConstraints: true, // whether to generate FK constraints
      ignoreSchema: [], // allows ignoring some schemas when diffing
    },
  };
}
