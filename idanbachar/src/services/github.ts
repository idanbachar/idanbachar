import axios from "axios";
import store from "store2";
import { IUser } from "../interfaces/IGithub";
import { IRepository } from "../interfaces/IRepository";

export const USERNAME = "idanbachar";
export interface IAllGithubData {
  userData: IUser | null;
  repositoriesData: IRepository[] | null;
}

export const getAllData = async (): Promise<IAllGithubData | null> => {
  try {
    const allDataStorage: IAllGithubData = store.session.get("allData");
    if (allDataStorage) return allDataStorage;

    const userData = await getUser();
    const repositoriesData = await getRepositories();
    const allData = {
      userData,
      repositoriesData,
    };
    store.session.set("allData", allData);
    return allData;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const getUser = async (): Promise<IUser | null> => {
  try {
    const user: IUser = await (
      await axios(`https://api.github.com/users/${USERNAME}`)
    ).data;
    return user;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const getRepositories = async (): Promise<IRepository[] | null> => {
  try {
    const repositories: IRepository[] = await (
      await axios(`https://api.github.com/users/${USERNAME}/repos`)
    ).data;
    return repositories;
  } catch (error) {
    console.log(error);
    return null;
  }
};
