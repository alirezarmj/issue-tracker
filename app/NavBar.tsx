"use client";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AiFillBug } from "react-icons/ai";

const links = [
  { label: "Dashboard", href: "/" },
  { label: "Issues", href: "/issues/list" },
];

const NavBar = () => {
  const { status, data: session } = useSession();
  const currentPath = usePathname();

  return (
    <nav className=" flex border-b mb-5 px-5 h-14 items-center justify-between  space-x-6">
      <div className=" flex items-center space-x-2">
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
      </div>
      <div>
        {status === "authenticated" && (
          <Link href="/api/auth/signout">Logout</Link>
        )}
        {status === "unauthenticated" && (
          <Link href="/api/auth/signin">Login</Link>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
