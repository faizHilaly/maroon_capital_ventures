import { Palanquin } from "next/font/google";

const palanquin = Palanquin({
  subsets: ['latin'],
  weight: '400'
});

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FBF7F0] flex flex-col">
      <div className="flex-grow flex items-center justify-center translate-y-10 sm:translate-y-10">
        <div className="w-[300px] sm:w-[600px] h-[60px] sm:h-[80px] flex items-center justify-center">
          <h1 className="text-[#9C0000] text-[28px] sm:text-[40px]">
            Maroon Capital Ventures
          </h1>
        </div>
      </div>
      <div className="flex flex-col items-center mb-10 sm:mb-20">
        <h2 className={`${palanquin.className} text-[#CBB595] mb-3 sm:mb-4 text-sm sm:text-base`}>Partner Firms</h2>
        <div className="flex gap-6 sm:gap-8 justify-center">
          <a 
            href="https://greylock.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img 
              src="/greylock_logo.svg" 
              alt="Greylock Partners Logo" 
              className="h-6 sm:h-8"
            />
          </a>
          <a 
            href="https://baincapitalventures.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img 
              src="/bcv_logo.svg" 
              alt="Bain Capital Ventures Logo" 
              className="h-6 sm:h-8"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
