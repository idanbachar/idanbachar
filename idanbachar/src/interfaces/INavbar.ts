export interface INavbar {
  items: IMenuItem[];
  title?: string;
  img_url?: string;
}

export interface IMenuItem {
  item: INavItem;
  subItems?: INavItem[];
}

export interface INavItem {
  text: string;
  link: string;
  img_url?: string;
}
