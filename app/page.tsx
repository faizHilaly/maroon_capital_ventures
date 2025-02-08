import { Palanquin } from "next/font/google";

const palanquin = Palanquin({
  subsets: ['latin'],
  weight: '400'
});

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FBF7F0] flex flex-col">
      <div className="flex-grow flex items-center justify-center translate-y-10">
        <div className="w-[600px] h-[80px] flex items-center justify-center">
          <h1 className="text-[#9C0000] text-[40px]">
            Maroon Capital Ventures
          </h1>
        </div>
      </div>
      <div className="flex flex-col items-center mb-20">
        <h2 className={`${palanquin.className} text-[#CBB595] mb-6`}>Partner Firms</h2>
        <div className="flex gap-10 justify-center">
          <a 
            href="https://greylock.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img 
              src="/greylock_logo.svg" 
              alt="Greylock Partners Logo" 
              className="h-7"
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
              className="h-7"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
