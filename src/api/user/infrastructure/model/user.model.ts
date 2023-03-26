import { UserEntity } from '../../domain/user.entity';

export const userData: UserEntity = {
  uuid: '1',
  name: 'Real user',
  email: 'albertsevilla1996@gmail.com',
  password: '$2b$10$.y6M4mtnRNe.KMmT3etkvuCnfzBQ38t5iHI.HyZg4nBwWO2j5DIvG',
};
let users: UserEntity[] = [userData];

export default class UserModel {
  static findById(id: string): Promise<UserEntity | null> {
    return new Promise<UserEntity | null>((resolve) => {
      const user = users.find((i) => i.uuid === id);
      delete user.password;
      if (user) resolve(user);
      resolve(null);
    });
  }

  static findOne(email: string): Promise<UserEntity> {
    return new Promise<UserEntity>((resolve) => {
      resolve(users.find((i) => i.email === email));
    });
  }

  static findAll(): Promise<UserEntity[]> {
    return new Promise<UserEntity[]>((resolve) => {
      resolve(
        users.map((user) => {
          delete user.password;
          return user;
        }),
      );
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
