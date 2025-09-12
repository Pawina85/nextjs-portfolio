import Link from "next/link";

const NavLink = ({ href, title }) => {
  return (
    <Link
      href={href}
      className="block py-3 pl-4 pr-4 text-gray-700 dark:text-[#ADB7BE] sm:text-xl rounded-lg md:p-3 hover:text-green-600 dark:hover:text-white hover:bg-green-50 dark:hover:bg-slate-800 font-medium transition-all duration-300"
    >
      {title}
    </Link>
  );
};

export default NavLink;
