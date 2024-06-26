"use client";
import React from "react";
import Link from "next/link";
import { Icon } from '@iconify/react';

const socialLinks = [
  { name: "Github: yd-tw", href: "https://github.com/yd-tw", icon: "skill-icons:github-light" },
  { name: "Youtube: YD遊戲頻", href: "https://www.youtube.com/@playeryd", icon: "logos:youtube-icon" },
  { name: "Facebook: 楊光地", href: "https://www.facebook.com/profile.php?id=100022136377891", icon: "logos:facebook" },
  { name: "Instagram: guangdiy", href: "https://www.instagram.com/guangdiy/", icon: "skill-icons:instagram" },
  { name: "Treads: guangdiy", href: "https://www.threads.net/@guangdiy", icon: "bi:threads-fill" }
];

const SocialLink = () => {
  return (
    <section
      id="link"
      className="relative my-12 py-24 flex flex-col items-center"
    >
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12 drop-shadow-lg">
        社群連結
      </h2>
      <div className="socials z-10 flex flex-col gap-6">
        {socialLinks.map((link, index) => (
          <a key={index} href={link.href} target="_blank" rel="noopener noreferrer">
            <div className="flex flex-row gap-6 items-center p-4 bg-white rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:bg-gray-100">
              <span className="transition transform hover:scale-110 hover:rotate-3">
                <Icon icon={link.icon} width="50" height="50" className="hover:opacity-80" />
              </span>
              <span className="text-2xl font-semibold text-gray-800">
                {link.name}
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default SocialLink;