import { Palanquin } from "next/font/google";

const palanquin = Palanquin({
  subsets: ['latin'],
  weight: '400'
});

export default function Advisors() {
  // Placeholder profiles - you can replace with real data
  const profiles = [
    {
      name: "Corinne Marie Riley",
      title: "Partner, Greylock",
      bio: "Corinne joined Greylock in 2020, where she invests in early-stage companies building data and AI products at the infrastructure and application layers. She's partnered with founders at Resolve AI, Braintrust Data, Cresta, and more.",
      imageUrl: "/corinne_headshot.jpg",
      linkedin: "https://www.linkedin.com/in/corinne-marie-riley/"
    },
    {
      name: "Landon Campbell",
      title: "Chicago Seed GM, Drive Capital",
      bio: "Landon joined Drive Capital in 2022, where he runs the early-stage and seed programs in Chicago. He partners in technical founders building AI-native software and infrastructure across verticals.",
      imageUrl: "/landon_headshot.jpg",
      linkedin: "https://www.linkedin.com/in/landon20s/"
    },
    {
      name: "Leslie Crowe",
      title: "Partner, Bain Capital Ventures",
      bio: "Leslie joined BCV in 2020, where she runs the Platform Team (The Hive) and invests in early-stage companies. Previously, she ran teams at MuleSoft, Dropbox, and Navan. She's partnered with companies like Chainlink Labs, Modern Treasury, and more.",
      imageUrl: "/leslie_headshot.jpg",
      linkedin: "https://www.linkedin.com/in/leslie-kurkjian-crowe/"
    },
    {
      name: "Mike Gamson",
      title: "Founding Partner, Permanent Capital",
      bio: "Mike founded Permanent Capital in 2024, a Chicago-based firm partnering with early-stage companies as they go to market. Previously, Mike was CEO of Relativity (the largest software company in Chicago) and ran sales teams at Linkedin.",
      imageUrl: "/mike_headshot.jpg",
      linkedin: "https://www.linkedin.com/in/mikegamson/"
    }
  ];

  return (
    <div className="min-h-screen bg-[#FBF7F0] p-8 pb-32">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 gap-12 max-w-4xl mx-auto">
          {profiles.map((profile, index) => (
            <div key={index} className="flex bg-[#FBF7F0] rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 relative">
              <div className="w-1/4">
                <img 
                  src={profile.imageUrl} 
                  alt={`${profile.name} photo`} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-3/4 p-8">
                <div className="absolute top-4 right-4 flex space-x-3">
                  <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" 
                     className="text-[#CBB595] hover:text-[#A99375] transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                      <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
                    </svg>
                  </a>
                </div>
                <h2 className={`${palanquin.className} text-[#CBB595] text-2xl font-medium mb-2`}>
                  {profile.name}
                </h2>
                <h3 className={`${palanquin.className} text-[#CBB595] text-xl mb-4`}>
                  {profile.title}
                </h3>
                <p className={`${palanquin.className} text-[#CBB595] text-base`}>
                  {profile.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
