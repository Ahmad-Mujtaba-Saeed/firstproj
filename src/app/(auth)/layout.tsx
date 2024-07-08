"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import './style.css';

const NavLinks = [
  { name: "Login", href: "/Login" },
  { name: "Register", href: "/Register" },
  { name: "Forgot_password", href: "/Forgot_password" },
];

export default function ProductLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathName = usePathname();
  return (
    <>
      {NavLinks.map((link) => {
        const isActive = pathName.startsWith(link.href);
        return (
          <Link href={link.href} key={link.name} className={isActive ? "font-bold mx-2": "text-blue-500 mx-1"}>
            {link.name}
          </Link>
        );
      })}
      {children}
    </>
  );
}
