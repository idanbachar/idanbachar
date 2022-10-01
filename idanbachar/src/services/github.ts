import axios from "axios";
import store from "store2";
import { IUser } from "../interfaces/IGithub";
import { IRepository } from "../interfaces/IRepository";
import noImage from "../assets/images/noImage.png";

export const USERNAME = "idanbachar";
export interface IAllGithubData {
  userData: IUser | null;
  repositoriesData: IRepository[] | null;
}

export const GetAllData = async (): Promise<IAllGithubData | null> => {
  try {
    const allDataStorage: IAllGithubData = store.session.get("githubData");
    if (allDataStorage) return allDataStorage;

    const userData = await GetUser();
    const repositoriesData = await GetRepositories();
    const githubData = {
      userData,
      repositoriesData,
    };
    store.session.set("githubData", githubData);
    return githubData;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const GetUser = async (): Promise<IUser | null> => {
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

export const GetRepositories = async (): Promise<IRepository[] | null> => {
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

export const GetReadmeFile = async (
  repositoryName: string
): Promise<string> => {
  try {
    const response = await axios(
      `https://raw.githubusercontent.com/${USERNAME}/${repositoryName}/master/README.md`
    );
    return response.data;
  } catch (error) {
    console.log(error);
    return "";
  }
};

export const GetCoverImage = async (
  repositoryName: string
): Promise<string> => {
  const url = `https://raw.githubusercontent.com/${USERNAME}/${repositoryName}/master/images/cover/cover.png`;
  try {
    const response = await fetch(url);
    if (response.ok) {
      const blob = await response.blob();
      return URL.createObjectURL(blob);
    } else if (response.status === 404) {
      return noImage;
    }
    return noImage;
  } catch (error) {
    console.log(error);
    return noImage;
  }
};
