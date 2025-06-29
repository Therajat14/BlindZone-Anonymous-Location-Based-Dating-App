import { Settings } from "lucide-react";
import React from "react";

export const Discover = () => {
  const users = [
    {
      id: "1",
      displayName: "Anonymous_A4B2",
      age: 25,
      distance: 0.8,
      interests: ["Music", "Travel", "Coffee"],
      bio: "Love discovering new places and people. Always up for a good conversation! 🎵✈️☕",
      isOnline: true,
      image:
        "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      id: "2",
      displayName: "Anonymous_X9K7",
      age: 28,
      distance: 1.2,
      interests: ["Fitness", "Art", "Food"],
      bio: "Fitness enthusiast with a passion for art and great food. Let's explore the city! 🏋️‍♀️🎨🍕",
      isOnline: false,
      image:
        "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      id: "3",
      displayName: "Anonymous_M5N8",
      age: 23,
      distance: 2.5,
      interests: ["Books", "Movies", "Gaming"],
      bio: "Bookworm by day, movie buff by night. Always looking for my next adventure! 📚🎬🎮",
      isOnline: true,
      image:
        "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
  ];

  return (
    <div>
      <div className="relative min-h-screen">
        <div className="flex items-center justify-between p-6 pt-12">
          <div>
            <h1 className="text-3xl font-bold text-white"> Discover </h1>
            <p className="text-gray-400"> 3 people within 5km</p>
          </div>
          <button className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
            <Settings className="h-5 w-5 text-white" />
          </button>
        </div>
      </div>
    </div>
  );
};

//  <div className="flex items-center justify-between p-6 pt-12">
//         <div>
//           <h1 className="text-3xl font-bold text-white">Discover</h1>
//           <p className="text-gray-400">3 people within 5km</p>
//         </div>
//         <button className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
//           <Settings className="h-5 w-5 text-gray-300" />
//         </button>
//       </div>

// import React, { useState, useEffect } from "react";
// import { Heart, X, MapPin, Settings, RefreshCw } from "lucide-react";

// export const Discover = () => {
//   const [currentUserIndex, setCurrentUserIndex] = useState(0);
//   const [showMatch, setShowMatch] = useState(false);
//   const [locationEnabled, setLocationEnabled] = useState(false);

//   const users = [
//     {
//       id: "1",
//       displayName: "Anonymous_A4B2",
//       age: 25,
//       distance: 0.8,
//       interests: ["Music", "Travel", "Coffee"],
//       bio: "Love discovering new places and people. Always up for a good conversation! 🎵✈️☕",
//       isOnline: true,
//       image:
//         "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400",
//     },
//     {
//       id: "2",
//       displayName: "Anonymous_X9K7",
//       age: 28,
//       distance: 1.2,
//       interests: ["Fitness", "Art", "Food"],
//       bio: "Fitness enthusiast with a passion for art and great food. Let's explore the city! 🏋️‍♀️🎨🍕",
//       isOnline: false,
//       image:
//         "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400",
//     },
//     {
//       id: "3",
//       displayName: "Anonymous_M5N8",
//       age: 23,
//       distance: 2.5,
//       interests: ["Books", "Movies", "Gaming"],
//       bio: "Bookworm by day, movie buff by night. Always looking for my next adventure! 📚🎬🎮",
//       isOnline: true,
//       image:
//         "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400",
//     },
//   ];

//   useEffect(() => {
//     setTimeout(() => setLocationEnabled(true), 1000); // Simulate location permission
//   }, []);

//   const handleSwipe = (liked) => {
//     if (liked && Math.random() > 0.5) {
//       setShowMatch(true);
//       setTimeout(() => setShowMatch(false), 3000);
//     }

//     setCurrentUserIndex((prevIndex) => (prevIndex + 1) % users.length);
//   };

//   if (!locationEnabled) {
//     return (
//       <div className="flex min-h-screen items-center justify-center p-6">
//         <div className="max-w-sm text-center">
//           <MapPin className="mx-auto mb-4 h-12 w-12 text-primary-500" />
//           <h2 className="mb-2 text-2xl font-bold text-white">
//             Enable Location
//           </h2>
//           <p className="mb-6 text-gray-400">
//             We need your location to show you people nearby
//           </p>
//           <button
//             onClick={() => setLocationEnabled(true)}
//             className="gradient-button w-full rounded-2xl px-6 py-3 font-semibold text-white transition-all duration-200 hover:scale-105"
//           >
//             Enable Location
//           </button>
//         </div>
//       </div>
//     );
//   }

//   const user = users[currentUserIndex];

//   return (
//     <div className="relative min-h-screen">
//       <div className="flex items-center justify-between p-6 pt-12">
//         <div>
//           <h1 className="text-3xl font-bold text-white">Discover</h1>
//           <p className="text-gray-400">3 people within 5km</p>
//         </div>
//         <button className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
//           <Settings className="h-5 w-5 text-gray-300" />
//         </button>
//       </div>

//       <div className="px-6 pb-32">
//         <div className="card-hover relative h-[600px] w-full overflow-hidden rounded-3xl bg-gray-800">
//           <img
//             src={user.image}
//             alt={user.displayName}
//             className="h-full w-full object-cover"
//           />
//           <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
//           <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
//             <div className="mb-2 flex items-center gap-2">
//               <h2 className="text-2xl font-bold">{user.displayName}</h2>
//               <span className="text-primary-400 rounded-lg bg-primary-500/20 px-2 py-1 text-sm">
//                 {user.age}
//               </span>
//             </div>
//             <div className="mb-3 flex items-center gap-1">
//               <MapPin className="h-4 w-4 text-secondary-500" />
//               <span className="text-sm text-secondary-500">
//                 {user.distance}km away
//               </span>
//               {user.isOnline && (
//                 <div className="ml-2 h-2 w-2 rounded-full bg-green-500" />
//               )}
//             </div>
//             <p className="mb-4 leading-relaxed text-gray-200">{user.bio}</p>
//             <div className="flex flex-wrap gap-2">
//               {user.interests.map((interest, idx) => (
//                 <span
//                   key={idx}
//                   className="rounded-full bg-white/10 px-3 py-1 text-sm text-white backdrop-blur-sm"
//                 >
//                   {interest}
//                 </span>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="fixed bottom-24 left-0 right-0 flex items-center justify-center gap-6 px-8">
//         <button
//           onClick={() => handleSwipe(false)}
//           className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-red-500 bg-red-500/20 transition-all duration-200 hover:scale-110 hover:bg-red-500/30"
//         >
//           <X className="h-8 w-8 text-red-500" />
//         </button>
//         <button className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-yellow-500 bg-yellow-500/20 transition-all duration-200 hover:scale-110">
//           <RefreshCw className="h-6 w-6 text-yellow-500" />
//         </button>
//         <button
//           onClick={() => handleSwipe(true)}
//           className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-green-500 bg-green-500/20 transition-all duration-200 hover:scale-110 hover:bg-green-500/30"
//         >
//           <Heart className="h-8 w-8 text-green-500" fill="currentColor" />
//         </button>
//       </div>

//       {showMatch && (
//         <div className="fixed inset-0 z-50 flex animate-fade-in items-center justify-center bg-black/80">
//           <div className="mx-6 max-w-sm animate-slide-up rounded-3xl bg-gradient-to-br from-purple-500 to-pink-500 p-8 text-center">
//             <div className="mb-4 text-6xl">💖</div>
//             <h2 className="mb-2 text-2xl font-bold text-white">
//               It's a Match!
//             </h2>
//             <p className="mb-6 text-white/80">
//               You and {user.displayName} liked each other!
//             </p>
//             <button
//               onClick={() => setShowMatch(false)}
//               className="w-full rounded-2xl bg-white/20 px-6 py-3 font-semibold text-white backdrop-blur-sm"
//             >
//               Keep Swiping
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };
