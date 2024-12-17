'use client';
import Link from "next/link";
import { usePathname } from 'next/navigation';
import { Palanquin } from "next/font/google";
import "./globals.css";

const palanquin = Palanquin({
  subsets: ['latin'],
  weight: '400'
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const isNotHome = pathname !== '/';

  return (
    <html lang="en">
      <head>
        <title>Maroon Capital Ventures</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="font-['Palatino']">
        {children}
        <nav className={`${palanquin.className} fixed bottom-8 left-8 flex flex-row gap-8`}>
          <Link 
            href="/thesis" 
            className={pathname === '/thesis' ? 'text-[#A38550] hover:underline' : 'text-[#CBB595] hover:underline'}
          >
            Thesis
          </Link>
          <Link 
            href="/funds" 
            className={pathname === '/funds' ? 'text-[#A38550] hover:underline' : 'text-[#CBB595] hover:underline'}
          >
            Funds
          </Link>
          <Link 
            href="/apply" 
            className={pathname === '/apply' ? 'text-[#A38550] hover:underline' : 'text-[#CBB595] hover:underline'}
          >
            Apply
          </Link>
        </nav>
        {isNotHome && (
          <div className="fixed bottom-8 left-1/2 -translate-x-1/2 font-['Palatino'] mb-[-0.2em]">
            <Link href="/" className="text-[#9C0000] hover:underline text-[1.2em]">
              MCV
            </Link>
          </div>
        )}
        <div className={`${palanquin.className} fixed bottom-8 right-8`}>
          <a href="mailto:team@marooncapitalventures.com" className="text-[#CBB595] hover:underline">
            team@marooncapitalventures.com
          </a>
        </div>
      </body>
    </html>
  );
}
