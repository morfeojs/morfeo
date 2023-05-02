type FooterLink = {
  label: string;
  href: string;
  newTab?: boolean;
};

export type FooterLinkBlock = {
  title: string;
  linkList: FooterLink[];
};
