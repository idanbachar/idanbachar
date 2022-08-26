export interface IUser {
  login: string;
  id: number;
  avatar_url: string;
  html_url: string;
  repos_url: string;
  name: string;
  company: string | null;
  location: string;
  email: string | null;
  bio: string;
  followers: number;
  following: number;
  created_at: Date;
  updated_at: Date;
}
