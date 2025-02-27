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
  const isAdvisorsPage = pathname === '/advisors';

  return (
    <html lang="en">
      <head>
        <title>Maroon Capital Ventures</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={`font-['Palatino'] bg-[#FBF7F0] ${isAdvisorsPage ? '' : 'overflow-hidden'}`}>
        <div className={`${isAdvisorsPage ? 'pb-50' : 'pb-34'}`}>
          {children}
        </div>
        
        <div className="fixed bottom-0 left-0 w-full pointer-events-none">
          {isAdvisorsPage && (
            <div className="h-10 w-full bg-gradient-to-b from-transparent via-[rgba(251,247,240,0.8)] to-[#FBF7F0]"></div>
          )}
          
          <div className={`${isAdvisorsPage ? 'bg-[#FBF7F0]' : 'bg-transparent'} h-24 w-full relative`}>
            <div className="h-24 flex items-center relative">
              <nav className={`${palanquin.className} absolute bottom-8 left-8 flex flex-row gap-8 pointer-events-auto`}>
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
                  href="/advisors" 
                  className={pathname === '/advisors' ? 'text-[#A38550] hover:underline' : 'text-[#CBB595] hover:underline'}
                >
                  Advisors
                </Link>
                <Link 
                  href="https://maroonhacks.com/" 
                  className={pathname === '/hacks' ? 'text-[#A38550] hover:underline' : 'text-[#CBB595] hover:underline'}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Maroon Hacks
                </Link>
              </nav>
              
              {isNotHome && (
                <div 
                  className="absolute bottom-8 left-1/2 font-['Palatino'] mb-[-0.2em] pointer-events-auto"
                  style={{ 
                    transform: `translateX(calc(-50% ${isAdvisorsPage ? '+ 7px' : ''}))` 
                  }}
                >
                  <Link href="/" className="text-[#9C0000] hover:underline text-[1.2em]">
                    MCV
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
