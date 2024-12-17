import { Palanquin } from "next/font/google";
import Link from "next/link";

const palanquin = Palanquin({
  subsets: ['latin'],
  weight: '400'
});

export default function Apply() {
  return (
    <div className="min-h-screen bg-[#FBF7F0] flex relative">
      <div className="w-1/2 flex items-center justify-center">
        <div className="text-center w-[500px]">
          <a 
            href="https://55w5873zbph.typeform.com/to/OL0FsKAz"
            className={`${palanquin.className} text-[#CBB595] hover:underline`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Investor
          </a>
        </div>
      </div>
      <div className="absolute left-1/2 top-1/2 -translate-y-1/2 h-[500px] w-[1px] bg-[#CBB595]"></div>
      <div className="w-1/2 flex items-center justify-center">
        <div className="text-center w-[500px]">
          <Link 
            href="/funds"
            className={`${palanquin.className} text-[#CBB595] hover:underline`}
          >
            Entrepreneur
          </Link>
        </div>
      </div>
    </div>
  );
}