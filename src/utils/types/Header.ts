export interface HeaderData {
  logo: string;
  links: NavLink[];
}

export interface NavLink {
  id: number;
  url: string;
  label: string;
}
