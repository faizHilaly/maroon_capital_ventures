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
      <div className="flex flex-col items-center mb-10 sm:mb-20 translate-y-5">
        <h2 className={`${palanquin.className} text-[#CBB595] mb-1 text-sm sm:text-base`}>Partner Firms</h2>
        <div className="flex items-center gap-6 sm:gap-8 justify-center">
          <a 
            href="https://baincapitalventures.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center"
          >
            <img 
              src="/bcv_logo.svg" 
              alt="Bain Capital Ventures Logo" 
              className="h-6 sm:h-8"
            />
          </a>
          <a 
            href="https://www.drivecapital.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img 
              src="/drive_logo.svg" 
              alt="Drive Capital Logo" 
              className="h-5 sm:h-7"
            />
          </a>
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
            href="https://www.permanent-capital.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center"
          >
            <img 
              src="/permanent_capital_logo.png" 
              alt="Permanent Capital Logo" 
              className="h-18 sm:h-24"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
