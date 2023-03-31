/* eslint-disable @typescript-eslint/no-unused-vars */
import { UserEntity } from '../../domain/user.entity';

export const userData: UserEntity = {
  uuid: '1',
  first_name: 'firstname',
  last_name: 'lastname',
  email: 'albertsevilla1996@gmail.com',
  password: '$2b$10$.y6M4mtnRNe.KMmT3etkvuCnfzBQ38t5iHI.HyZg4nBwWO2j5DIvG',
};
let users: UserEntity[] = [userData];

export default class UserMockModel {
  static findById(id: string): Promise<UserEntity | null> {
    return new Promise<UserEntity | null>((resolve) => {
      const user = users.find((i) => i.uuid === id);
      if (user) resolve(user);
      resolve(null);
    });
  }

  static findOne(email: string): Promise<UserEntity> {
    return new Promise<UserEntity>((resolve) => {
      resolve(users.find((i) => i.email === email));
    });
  }

  static findAll(): Promise<UserEntity[] | any> {
    return new Promise<UserEntity[]>((resolve) => {
      // const result: UserEntity[] = users.map((i) => {
      //   const { password, ...user } = i;
      //   return user;
      // });
      resolve(users);
    });
  }

  static create(data: UserEntity): Promise<UserEntity> {
    return new Promise<UserEntity>((resolve) => {
      users.push(data);
      resolve(data);
    });
  }
  static update(id: string, data: UserEntity): Promise<UserEntity> {
    return new Promise<UserEntity>((resolve) => {
      const userUpdated: UserEntity = users.find((i) => {
        if (i.uuid === id) return { ...i, ...data };
      });
      resolve(userUpdated);
    });
  }
  static destroy(id: string): Promise<UserEntity | null> {
    return new Promise<UserEntity | null>((resolve) => {
      const user = users.find((i) => i.uuid === id);
      if (user) {
        users = users.filter((i) => i.uuid !== id);
        resolve(user);
      }
      resolve(null);
    });
  }
}
