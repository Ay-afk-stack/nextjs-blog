import { Navbar } from "@/components/web/Navbar";
import React from "react";

const SharedLayour = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default SharedLayour;
