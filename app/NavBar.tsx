"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { AiFillBug } from "react-icons/ai";
import { Skeleton } from "@/app/components";

const links = [
  { label: "Dashboard", href: "/" },
  { label: "Issues", href: "/issues/list" },
];

const NavBar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const { status, data: session } = useSession();
  // console.log(session);
  // if (status === "loading") return <Skeleton width="3rem" />;

  const currentPath = usePathname();

  const handleMouseEnter = () => {
    setShowDropdown(true);
  };

  const handleMouseLeave = () => {
    setShowDropdown(false);
  };

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
          <div
            className=" relative "
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <Image
              src={session!.user!.image!}
              alt={session!.user!.name!}
              width={32} // Adjust width and height as needed
              height={32}
              className="w-8 h-8 rounded-full cursor-pointer"
              referrerPolicy="no-referrer"
            />
            {showDropdown && (
              <div className="absolute w-fit   transition-all duration-500 ease-in-out right-0 bg-white border rounded-lg shadow-lg  py-2 px-8 opacity-100 z-10">
                <p className="whitespace-nowrap">{session.user?.email}</p>
                {status === "authenticated" && (
                  <Link
                    className=" cursor-pointer font-bold text-base"
                    href="/api/auth/signout"
                  >
                    Logout
                  </Link>
                )}
              </div>
            )}
          </div>
        )}
        {status === "loading" && (
          <Skeleton width="3rem" height="1.5rem" /> // Adjust width and height as needed
        )}
        {status === "unauthenticated" && (
          <Link href="/api/auth/signin">Login</Link>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
