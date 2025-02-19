import { Palanquin } from "next/font/google";

const palanquin = Palanquin({
  subsets: ['latin'],
  weight: '400'
});

export default function Thesis() {
  return (
    <div className="min-h-screen bg-[#FBF7F0] flex items-center justify-center">
      <div className="text-center px-8 max-w-4xl">
        <p className={`${palanquin.className} text-[#CBB595] mb-4`}>
          We believe in builders
        </p>
        <p className={`${palanquin.className} text-[#CBB595]`}>
        MCV connects deeply technical students with the capital to build great things and the expertise to pursue great careers
        </p>
      </div>
    </div>
  );
}
