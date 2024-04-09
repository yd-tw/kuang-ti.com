"use client";
import React, { useState } from "react";
import GHIcon from "../../public/gh.svg";
import YTIcon from "../../public/yt.svg";
import FBIcon from "../../public/fb.svg";
import IGIcon from "../../public/ig.svg";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };
    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";

    // Form the request for sending data to the server.
    const options = {
      // The method is POST because we are sending data.
      method: "POST",
      // Tell the server we're sending JSON.
      headers: {
        "Content-Type": "application/json",
      },
      // Body of the request is the JSON data we created above.
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);
    const resData = await response.json();

    if (response.status === 200) {
      console.log("Message sent.");
      setEmailSubmitted(true);
    }
  };

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
      <div>
        {emailSubmitted ? (
          <p className="text-green-500 text-sm mt-2">
            郵件傳送成功
          </p>
        ) : (
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="text-white block mb-2 text-sm font-medium"
              >
                你的郵件 (功能測試中，郵件高機率傳送失敗。建議使用社群軟體傳送。)
              </label>
              <input
                name="email"
                type="email"
                id="email"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="yourmail@gmail.com"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="subject"
                className="text-white block text-sm mb-2 font-medium"
              >
                主旨
              </label>
              <input
                name="subject"
                type="text"
                id="subject"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="只是聊天也行..."
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="text-white block text-sm mb-2 font-medium"
              >
                內文
              </label>
              <textarea
                name="message"
                id="message"
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="說點什麼..."
              />
            </div>
            <button
              type="submit"
              className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
            >
              送出郵件
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default EmailSection;
