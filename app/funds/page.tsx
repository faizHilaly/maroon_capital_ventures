import { Palanquin } from "next/font/google";

const palanquin = Palanquin({
  subsets: ['latin'],
  weight: '400'
});

export default function Fund() {
  return (
    <div className="min-h-screen bg-[#FBF7F0] flex relative">
      <div className="w-1/2 flex items-center justify-center">
        <div className="text-center w-[490px]">
          <h2 className={`${palanquin.className} text-[#CBB595] mb-4`}>v0 Fund</h2>
          <p className={`${palanquin.className} text-[#CBB595] mb-8`}>
            investment fund to partner with technical teams going 0 {'->'} 1
          </p>
          <a 
            href="" 
            className={`${palanquin.className} text-[#CBB595] hover:underline`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Apply
          </a>
        </div>
      </div>
      <div className="absolute left-1/2 top-1/2 -translate-y-1/2 h-[500px] w-[1px] bg-[#CBB595]"></div>
      <div className="w-1/2 flex items-center justify-center">
        <div className="text-center w-[480px]">
          <h2 className={`${palanquin.className} text-[#CBB595] mb-4`}>Freestyle Fund</h2>
          <p className={`${palanquin.className} text-[#CBB595] mb-8`}>
            equity-free grants and credits so you can just build
          </p>
          <a 
            href="" 
            className={`${palanquin.className} text-[#CBB595] hover:underline`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Apply
          </a>
        </div>
      </div>
    </div>
  );
}