import React from "react";
import { Outlet, useLocation, Link } from "react-router";
import { Heart, MessageCircle, User, Compass } from "lucide-react";

const Layout = () => {
  const location = useLocation();

  const tabs = [
    { path: "/discover", icon: Compass, label: "Discover" },
    { path: "/matches", icon: Heart, label: "Matches" },
    { path: "/chats", icon: MessageCircle, label: "Chats" },
    { path: "/profile", icon: User, label: "Profile" },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1 pb-20">
        <Outlet />
      </main>

      <nav className="fixed bottom-0 left-0 right-0 border-t border-white/10 bg-gray-900/95 px-6 py-2 backdrop-blur-lg">
        <div className="mx-auto flex max-w-md items-center justify-around">
          {tabs.map(({ path, icon: Icon, label }) => {
            const isActive = location.pathname === path;
            return (
              <Link
                key={path}
                to={path}
                className={`flex flex-col items-center rounded-lg px-3 py-2 transition-all duration-200 ${
                  isActive
                    ? "text-primary-500 bg-primary-500/10"
                    : "text-gray-400 hover:bg-white/5 hover:text-white"
                }`}
              >
                <Icon size={24} />
                <span className="mt-1 text-xs font-medium">{label}</span>
              </Link>
            );
          })}
        </div>
      </nav>
    </div>
  );
};

export default Layout;
