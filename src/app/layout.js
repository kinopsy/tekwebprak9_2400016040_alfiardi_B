'use client'; // Wajib karena menggunakan hook usePathname

import "./globals.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function RootLayout({ children }) {
  const pathname = usePathname();

  // Daftar menu navigasi
  const navItems = [
    { name: "Home", path: "/" },
    { name: "Blog", path: "/blog" },
    { name: "About", path: "/about" },
  ];

  return (
    <html lang="id">
      <body className="bg-gray-50 text-gray-900">
        <nav className="p-4 bg-white shadow-md flex gap-6 justify-center">
          {navItems.map((item) => {
            // TUGAS: Cek apakah path saat ini aktif
            const isActive = pathname === item.path;

            return (
              <Link 
                key={item.path}
                href={item.path} 
                className={`font-bold transition-colors ${
                  isActive 
                    ? "text-blue-600 border-b-2 border-blue-600" 
                    : "text-gray-500 hover:text-blue-400"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>
        <main className="container mx-auto p-4">{children}</main>
      </body>
    </html>
  );
}
