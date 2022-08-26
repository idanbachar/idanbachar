import axios from "axios";
import store from "store2";
import { IUser } from "../interfaces/IGithub";

const USERNAME = "idanbachar";

export const getUser = async (): Promise<IUser | null> => {
  try {
    const userStorage: IUser = store.session.get("user");
    if (userStorage) return userStorage;
    const user: IUser = await (
      await axios(`https://api.github.com/users/${USERNAME}`)
    ).data;
    store.session.set("user", user);
    return user;
  } catch (error) {
    return null;
  }
};
