import { IUser } from "./IGithub";

export interface IRepositories {
  repositories: IRepository[];
  title: string;
}

export interface IRepository {
  id: number;
  name: string;
  full_name: string;
  private: boolean;
  owner: IUser;
  html_url: string;
  description: string;
  created_at: Date;
  updated_at: Date;
  language: string;
}
