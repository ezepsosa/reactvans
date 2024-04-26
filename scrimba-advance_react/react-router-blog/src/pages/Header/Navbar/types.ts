export type Props = {
  className?: string;
  tologo: string;
  textlogo: string;
  navbarlinks?: NavbarLinkTypeProps[];
};

export type NavbarLinkTypeProps = {
  to: string;
  text: string;
};
