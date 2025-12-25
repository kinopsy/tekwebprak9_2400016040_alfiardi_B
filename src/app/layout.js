'use client'; 
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import "./globals.css";

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const activeStyle = "text-blue-600 font-bold border-b-2 border-blue-600 pb-1";
  const inactiveStyle = "text-gray-500 hover:text-blue-400 pb-1";

  return (
    <html lang="en">
      <body>
        <nav className="flex gap-6 p-5 border-b mb-5">
          <Link href="/" className={pathname === '/' ? activeStyle : inactiveStyle}>
            Home
          </Link>
  
          <Link href="/blog" className={pathname === '/blog' ? activeStyle : inactiveStyle}>
            Blog
          </Link>
          
          <Link href="/about" className={pathname === '/about' ? activeStyle : inactiveStyle}>
            About
          </Link>
        </nav>
        
        <main className="px-5">
          {children}
        </main>
      </body>
    </html>
  );
}
