"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AiFillBug } from "react-icons/ai";

const links = [
  { label: "Dashboard", href: "/" },
  { label: "Issues", href: "/issues/list" },
];

const NavBar = () => {
  const currentPath = usePathname();

  return (
    <nav className=" flex border-b mb-5 px-5 h-14 items-center  space-x-6">
      <Link href="/">
        <AiFillBug />
      </Link>
      <ul className=" flex space-x-6">
        {links.map((item) => (
          <li key={item.href}>
            <Link
              className={`${
                item.href === currentPath ? "text-zinc-900" : "text-zinc-500"
              }  hover:text-zinc-800 transition-colors`}
              href={item.href}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
