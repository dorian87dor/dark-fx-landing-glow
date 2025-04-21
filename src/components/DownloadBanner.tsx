
import React from "react";
import { Smartphone, Computer, Globe, Apple } from "lucide-react";

const platforms = [
  {
    label: "iOS",
    icon: <Apple size={22} className="text-black" />,
    color: "bg-white text-black hover:bg-gray-100",
    href: "#"
  },
  {
    label: "Android",
    // Use Smartphone icon as a substitute for Android
    icon: <Smartphone size={22} className="text-white" />,
    color: "bg-android text-white hover:bg-android/90",
    href: "#"
  },
  {
    label: "Web",
    icon: <Globe size={22} className="text-white" />,
    color: "bg-web text-white hover:bg-web/90",
    href: "#"
  },
  {
    label: "Desktop",
    icon: <Computer size={22} className="text-black" />,
    color: "bg-desktop text-black hover:bg-gray-300",
    href: "#"
  }
];

const DownloadBanner = () => (
  <section className="py-16 md:py-24 bg-dark-300/90 border-t border-accent/10">
    <div className="container mx-auto px-6 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">
        Download Tradelocker on Any Platform
      </h2>
      <div className="flex flex-wrap justify-center gap-6 mt-8">
        {platforms.map(p => (
          <a
            key={p.label}
            href={p.href}
            className={`flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-lg shadow transition-all ${p.color}`}
          >
            {p.icon}
            {p.label}
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default DownloadBanner;

