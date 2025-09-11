import React from "react";
import { LifebuoyIcon } from "@heroicons/react/24/solid";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-between">
        <LifebuoyIcon className="h-8 w-8 text-green-500 animate-spin" />
        <p className="text-slate-600">All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
