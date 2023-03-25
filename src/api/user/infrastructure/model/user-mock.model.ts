import { UserEntity } from '../../domain/user.entity';

export const userData: UserEntity = {
  uuid: '1',
  name: 'Mock user',
  email: 'albertsevilla1996@gmail.com',
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

  static findOne(): Promise<UserEntity> {
    return new Promise<UserEntity>((resolve) => {
      resolve(users[0]);
    });
  }

  static findAll(): Promise<UserEntity[]> {
    return new Promise<UserEntity[]>((resolve) => {
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
