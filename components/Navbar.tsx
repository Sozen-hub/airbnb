"use client";

import Link from "next/link";
import { useState } from "react";

const tabs = [
  { key: "all", label: "All", icon: "🌐", href: "/" },
  { key: "homes", label: "Homes", icon: "🏠", href: "/" },
  { key: "experiences", label: "Experiences", icon: "🎈", href: "/experiences" },
  { key: "services", label: "Services", icon: "🛎️", href: "/services" },
];

const AirbnbLogo = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 32 32" fill="currentColor" className={className}>
    <path d="M16 1c1.5 0 2.6.8 3.6 2.7l.2.4 5.7 12.4.2.5c.6 1.4.9 2.3.9 3.3 0 3.3-2.6 6-6 6a6 6 0 0 1-5-2.7l-.1-.1a10 10 0 0 1-.1.1l-.4.5A6 6 0 0 1 10 30c-3.3 0-6-2.6-6-6 0-.9.2-1.8.7-3l.3-.8 5.7-12.4.3-.5C12 1.8 13.1 1 14.6 1zm0 2c-.6 0-1.1.3-1.7 1.3l-.2.4-5.7 12.4-.2.6c-.3.9-.5 1.5-.5 2.1a4 4 0 0 0 4 4 4 4 0 0 0 3.5-2.1l.2-.4c.5-1 1-2.4 1-3.7 0-1.9-.7-3.8-1.9-6l-.2-.4a1 1 0 0 1 1.7-1c1.5 2.5 2.4 4.8 2.4 7.2 0 1.5-.4 2.9-1 4l.2.3A4 4 0 0 0 20 24a4 4 0 0 0 4-4c0-.6-.2-1.2-.5-2.1l-.2-.6-5.7-12.4-.2-.4C16.9 3.2 16.5 3 16 3z" />
  </svg>
);

const GlobeIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className={className}>
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" />
  </svg>
);

const MenuIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" className={className}>
    <path d="M3 6h18M3 12h18M3 18h18" />
  </svg>
);

const UserIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10zm0 2c-5 0-10 2.5-10 7v1h20v-1c0-4.5-5-7-10-7z" />
  </svg>
);

const SearchIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="round" className={className}>
    <circle cx="11" cy="11" r="7" />
    <path d="m21 21-4.3-4.3" />
  </svg>
);

const Navbar = () => {
  const [activeTab, setActiveTab] = useState("all");

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white">
      <div className="flex items-center justify-between gap-4 px-6 py-4 lg:px-10">
        <Link href="/" className="flex items-center gap-2 text-[#FF385C]">
          <AirbnbLogo className="h-8 w-8" />
          <span className="hidden text-2xl font-bold tracking-tight md:block">
            airbnb
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {tabs.map((tab) => (
            <Link
              key={tab.key}
              href={tab.href}
              onClick={() => setActiveTab(tab.key)}
              className={`flex items-center gap-2 border-b-2 py-5 text-sm font-medium transition-colors ${
                activeTab === tab.key
                  ? "border-gray-900 text-gray-900"
                  : "border-transparent text-gray-500 hover:text-gray-900"
              }`}
            >
              <span className="text-xl leading-none">{tab.icon}</span>
              {tab.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/sign-up"
            className="rounded-full px-4 py-3 text-sm font-semibold text-gray-700 hover:bg-gray-100"
          >
            Log in or sign up
          </Link>
          <button
            type="button"
            aria-label="Choose a language and region"
            className="rounded-full p-3 text-gray-700 hover:bg-gray-100"
          >
            <GlobeIcon className="h-5 w-5" />
          </button>
          <button
            type="button"
            aria-label="Open menu"
            className="flex items-center gap-3 rounded-full border border-gray-300 py-2 pl-3 pr-3 text-gray-700 hover:shadow-md"
          >
            <MenuIcon className="h-4 w-4" />
            <UserIcon className="h-6 w-6" />
          </button>
        </div>
      </div>

      <div className="hidden justify-center pb-6 md:flex">
        <div className="flex items-center divide-x divide-gray-200 rounded-full border border-gray-200 shadow-sm transition-shadow hover:shadow-md">
          <button className="rounded-l-full px-6 py-3 text-left hover:bg-gray-100">
            <div className="text-xs font-semibold text-gray-900">Where</div>
            <div className="text-sm text-gray-500">Search destinations</div>
          </button>
          <button className="px-6 py-3 text-left hover:bg-gray-100">
            <div className="text-xs font-semibold text-gray-900">When</div>
            <div className="text-sm text-gray-500">Add dates</div>
          </button>
          <button className="flex items-center gap-4 rounded-r-full py-2 pl-6 pr-2 text-left hover:bg-gray-100">
            <div>
              <div className="text-xs font-semibold text-gray-900">Who</div>
              <div className="text-sm text-gray-500">Add guests</div>
            </div>
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#FF385C] text-white">
              <SearchIcon className="h-4 w-4" />
            </span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
