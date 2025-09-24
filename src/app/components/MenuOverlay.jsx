import React from "react";
import NavLink from "./NavLink";

const MenuOverlay = ({ links, onClose }) => {
  return (
    <div className="absolute top-full left-0 right-0 bg-white dark:bg-[#121212] border-t border-gray-300 dark:border-[#33353F] shadow-lg transition-colors duration-300">
      <ul className="flex flex-col py-4 items-center space-y-2">
        {links.map((link, index) => (
          <li key={index} onClick={onClose}>
            <NavLink href={link.path} title={link.title} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuOverlay;
