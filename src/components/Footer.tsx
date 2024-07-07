"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Footer({ onTab }: { onTab: (value: any) => void }) {
  const [tab, setTab] = useState("");

  function updateTab(tabName: string) {
    setTab(tabName);
  }

  useEffect(() => {
    onTab(tab);
  }, [onTab, tab]);

  return (
    <main className="w-full pb-[30px] px-[116px] max-md:px-[16px] pt-[76px] bg-green-600 flex flex-row max-md:flex-col-reverse  justify-between">
      <div className="flex-1 w-[50%] max-md:w-full">
        <Image
          src={"/Logo.png"}
          alt=""
          width={200}
          height={200}
          className="mb-8"
        />
        <div className="w-[60%] max-md:w-[100%]">
          <span className="pb-10 ">
            Some footer text about the Agency. Just a little description to help
            people understand you better
          </span>
        </div>
        <div className="flex flex-row justify-start mt-6 mb-32">
          <Link href={""}>
            <Image
              className="mr-6"
              src={"/FacebookIcon.png"}
              alt=""
              width={40}
              height={40}
            />
          </Link>

          <Link href={""}>
            <Image
              className="mr-6"
              src={"/TwitterIcon.png"}
              alt=""
              width={40}
              height={40}
            />
          </Link>
          <Link href={""}>
            <Image
              className="mr-6"
              src={"/LinkdinIcon.png"}
              alt=""
              width={40}
              height={40}
            />
          </Link>
          <Link href={""}>
            <Image src={"/InstagramIcon.png"} alt="" width={40} height={40} />
          </Link>
        </div>
        <span className="font-sans">Copyright Design Agency 2024</span>
      </div>
      <div className="flex-1 flex flex-col items-center max-md:items-start">
        <div className=" ">
          <p className="mb-6 font-bold text-lg">Quick Links</p>
          <Link href={"#home"} onClick={() => setTab("")}>
            <p className="mb-6">Home</p>
          </Link>
          <Link href={"#what-we-do"} onClick={() => setTab("what-we-do")}>
            <p className="mb-6">What we do</p>
          </Link>
          <Link href={"#our-portfolio"} onClick={() => setTab("our-portfolio")}>
            <p className="mb-6">Portfolio</p>
          </Link>
          <Link href={"#testimonials"} onClick={() => setTab("testimonials")}>
            <p className="mb-6">Testimonals</p>
          </Link>
        </div>
      </div>
      <div className="flex-1 flex flex-col items-end max-md:items-start max-md:mb-4">
        <div className="w-[55%] max-md:w-full">
          <p className="font-sans font-bold text-lg mb-4">Address</p>
          <p>Design Agency Head Office. Airport Road United Arab Emirate</p>
        </div>
      </div>
    </main>
  );
}
