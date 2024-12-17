import { Palanquin } from "next/font/google";

const palanquin = Palanquin({
  subsets: ['latin'],
  weight: '400'
});

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FBF7F0] flex flex-col">
      <div className="flex-grow flex items-center justify-center translate-y-10">
        <div className="w-[440px] h-[80px] border-[3px] border-[#9C0000] flex items-center justify-center">
          <h1 className="text-[#9C0000] text-4xl">
            Maroon Capital Ventures
          </h1>
        </div>
      </div>
      <div className="flex flex-col items-center mb-20">
        <h2 className={`${palanquin.className} text-[#CBB595] mb-8`}>Partner Firms</h2>
        <div className="flex gap-10 justify-center">
          <a 
            href="https://www.drivecapital.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img 
              src="/drive_logo.svg" 
              alt="Drive Capital Logo" 
              className="h-6"
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
              className="h-6"
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
              className="h-6"
            />
          </a>
          <a 
            href="https://www.accel-kkr.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img 
              src="/akkr_logo.png" 
              alt="Accel KKR Logo" 
              className="h-6"
            />
          </a>
          <a 
            href="https://www.accel-kkr.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img 
              src="/battery_logo.png" 
              alt="Battery Ventures Logo" 
              className="h-6"
            />
          </a>
          <a 
            href="https://neo.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img 
              src="/neo_logo.svg" 
              alt="Neo Logo" 
              className="h-5"
            />
          </a>
          <a 
            href="https://www.permanent-capital.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img 
              src="/permanent_capital_logo.png" 
              alt="Permanent Capital Logo" 
              className="h-6"
            />
          </a>
          <a 
            href="https://sapphireventures.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img 
              src="/sapphire_ventures_logo.png" 
              alt="Sapphire Ventures Logo" 
              className="h-6"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
