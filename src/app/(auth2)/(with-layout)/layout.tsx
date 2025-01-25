"use client";
import Link from "next/link";

import { usePathname } from "next/navigation";
import "./style.css";

import { useState } from "react";
const navLinks = [
  { href: "/register", label: "Register" },
  { href: "/login", label: "Login" },
  { href: "/forgot-password", label: "Forgot Password" },
];

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathName = usePathname();

  const [input, setInput] = useState("");
  return (
    <div>
      <div>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
      {navLinks.map((link) => {
        const isActive = pathName.startsWith(link.href);
        return (
          <Link
            key={link.label}
            href={link.href}
            className={isActive ? "font-bold mr-4" : " text-blue-500 mr-4"}
          >
            {link.label}
          </Link>
        );
      })}
      {children}
    </div>
  );
}
