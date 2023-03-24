import { INestApplication } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import { UserController } from '../src/api/user/infrastructure/controller/user.controller';
import { MysqlRepositoryService } from '../src/api/user/infrastructure/repository/mysql.repository.service';
import { MockRepository } from '../src/api/user/infrastructure/repository/user-mock.repository';
import * as request from 'supertest';
import { UserEntity } from '../src/api/user/domain/user.entity';

const userData: UserEntity[] = [
  {
    uuid: '1',
    name: 'Mock user',
    email: 'albertsevilla1996@gmail.com',
  },
];
const expectedResponse: any = {
  statusCode: 0,
};

describe('UserController', () => {
  let app: INestApplication;
  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [UserController],
      providers: [
        { provide: MysqlRepositoryService, useClass: MockRepository },
      ],
    }).compile();
    app = moduleRef.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  it('/ GET Users', async () => {
    expectedResponse.statusCode = 200;
    expectedResponse.data = userData;
    const res = await request(app.getHttpServer())
      .get('/api/v1/user')
      .expect(200);
    expect(res.body).toEqual(expectedResponse);
  });

  it('/ GET User', async () => {
    expectedResponse.statusCode = 200;
    expectedResponse.data = userData[0];
    const res = await request(app.getHttpServer())
      .get('/api/v1/user/1')
      .expect(200);
    expect(res.body).toEqual(expectedResponse);
  });
});
