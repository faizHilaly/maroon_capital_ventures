import { Palanquin } from "next/font/google";

const palanquin = Palanquin({
  subsets: ['latin'],
  weight: '400'
});

export default function Thesis() {
  return (
    <div className="min-h-screen bg-[#FBF7F0] flex items-center justify-center">
      <div className="text-center px-8 max-w-4xl">
        <p className={`${palanquin.className} text-[#CBB595]`}>
          We partner with builders at the earliest stages and work in the background to help them create exciting new things
        </p>
      </div>
    </div>
  );
}
