"use client";

import Menu from "./menu";

const Header = ({ pathname }: { pathname: string }) => {
  return <Menu pathname={pathname} />;
};

export default Header;
