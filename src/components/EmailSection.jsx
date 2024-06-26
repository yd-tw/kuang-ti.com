"use client";
import React, { useState } from "react";
import GHIcon from "../../public/gh.svg";
import YTIcon from "../../public/yt.svg";
import FBIcon from "../../public/fb.svg";
import IGIcon from "../../public/ig.svg";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">
          聯絡我
        </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          {" "}
          很高興你能看到這裡，如果你還有想了解的地方或者想跟我聊
          天，都歡迎聯繫我。點按我的社群網站連結，或者你可以直
          接使用郵件功能(目前測試中不穩定)發送給我。
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="https://github.com/yd-tw">
            <Image src={GHIcon} alt="GH Icon" />
          </Link>
          <Link href="https://www.youtube.com/@codecat.">
            <Image src={YTIcon} alt="YT Icon" />
          </Link>
          <Link href="https://www.facebook.com/profile.php?id=100022136377891">
            <Image src={FBIcon} alt="FB Icon" />
          </Link>
          <Link href="https://www.instagram.com/guangdiy/">
            <Image src={IGIcon} alt="IG Icon" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default EmailSection;
