import { INestApplication, ValidationPipe } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import * as request from 'supertest';
import { MockRepository } from '../src/api/user/infrastructure/repository/user-mock.repository';
import { UserEntity } from '../src/api/user/domain/user.entity';
import { AuthRepositoryService } from '../src/api/auth/infrastructure/repository/auth.repository.service';
import { MysqlRepositoryService } from '../src/api/user/infrastructure/repository/mysql.repository.service';
import { AuthController } from '../src/api/auth/infrastructure/controller/auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { LocalStrategy } from '../src/api/auth/infrastructure/strategy/local.strategy';

const userData: UserEntity[] = [
  {
    uuid: '1',
    first_name: 'firstname',
    last_name: 'lastname',
    email: 'albertsevilla1996@gmail.com',
    password: 'password',
  },
];

describe('AuthController', () => {
  let app: INestApplication;
  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [
        JwtModule.register({
          secret: 'secret',
          signOptions: { expiresIn: '3600s' },
        }),
      ],
      controllers: [AuthController],
      providers: [
        AuthRepositoryService,
        { provide: MysqlRepositoryService, useClass: MockRepository },
        LocalStrategy,
      ],
    }).compile();
    app = moduleRef.createNestApplication();
    app.useGlobalPipes(new ValidationPipe());
    await app.init();
  });
  afterAll(() => {
    app.close();
  });
  it('/ POST Login', async () => {
    const res = await request(app.getHttpServer())
      .post('/api/v1/auth/login')
      .send(userData[0])
      .expect(200);
    expect(res.body.data).toHaveProperty('access_token');
  });

  it('/ POST register an user with invalid email', async () => {
    const newUser = {
      name: 'Cristian Gonzalez',
      email: 'test2',
      password: '1234',
    };
    const res = await request(app.getHttpServer())
      .post('/api/v1/auth/register')
      .send(newUser)
      .expect(400);
    expect(res.body.statusCode).toBe(400);
  });

  it('/ POST register an user with no password', async () => {
    const newUser = {
      name: 'Cristian Gonzalez',
      email: 'test2@gmail.com',
      password: '',
    };
    const res = await request(app.getHttpServer())
      .post('/api/v1/auth/register')
      .send(newUser);
    expect(res.body.statusCode).toBe(400);
  });

  it('/ POST register a valid user', async () => {
    const newUser = {
      first_name: 'Cristian',
      last_name: 'Gonzalez',
      email: 'test2@gmail.com',
      password: '1234',
    };
    const res = await request(app.getHttpServer())
      .post('/api/v1/auth/register')
      .send(newUser)
      .expect(201);
    expect(res.body.data.uuid).toBeDefined();
  });
});
