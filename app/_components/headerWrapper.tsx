"use client";

import { usePathname } from "next/navigation";
import Header from "./header";
import { ReactNode } from "react";

const HeaderWrapper = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname();
  const isLoginPage = pathname === "/";

  return (
    <>
      {!isLoginPage && <Header pathname={pathname} />}
      {children}
    </>
  );
};

export default HeaderWrapper;
