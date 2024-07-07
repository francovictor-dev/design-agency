"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function NavBar({ onTab }: { onTab: (set: any) => void }) {
  const [tab, setTab] = useState("");
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  function updateTab(tabName: string) {
    if (pathname === "/") {
      return setTab(tabName);
    }

    // router.push(`${process.env.NEXT_PUBLIC_HOST}`);
  }

  function customHref(href: string) {
    if (pathname === "/") {
      return href;
    }
    return `/${href}`;
  }

  useEffect(() => {
    onTab(setTab);
  }, [onTab]);

  return (
    <main className="flex z-50 fixed flex-row justify-between bg-green-200 items-center lg:px-[100px] sm:px-[32px] max-sm:px-[16px] w-screen h-[80px]">
      <motion.div
        className="fixed w-1/3 h-auto bg-slate-50 rounded-xl right-0 top-16 p-4 flex flex-col items-center gap-y-2"
        animate={isOpenMenu ? { x: 0, opacity: 1 } : { opacity: 0, x: 200 }}
      >
        <Link
          href={customHref("#home")}
          unselectable="off"
          onClick={() => updateTab("home")}
        >
          <p className="font-sans ">Home</p>
          {tab === "home" && <div className="w-[100%] h-[3px] bg-green-700" />}
        </Link>
        <Link
          href={customHref("#what-we-do")}
          unselectable="off"
          onClick={() => updateTab("what-we-do")}
        >
          <p className="font-sans ">What we do</p>
          {tab === "what-we-do" && (
            <div className="w-[100%] h-[3px] bg-green-700" />
          )}
        </Link>
        <Link
          href={customHref("#our-portfolio")}
          unselectable="off"
          onClick={() => updateTab("our-portfolio")}
        >
          <p className="font-sans">Portfolio</p>
          {tab === "our-portfolio" && (
            <div className="w-[100%] h-[3px] bg-green-700" />
          )}
        </Link>
        <Link
          href={customHref("#testimonials")}
          unselectable="off"
          onClick={() => updateTab("testimonials")}
        >
          <p className="font-sans ">Testimonials</p>
          {tab === "testimonials" && (
            <div className="w-[100%] h-[3px] bg-green-700" />
          )}
        </Link>
      </motion.div>

      <div className="xl:flex-1 lg:flex-[0.5] md:flex-[1] ">
        <Link
          href={customHref("#home")}
          unselectable="off"
          onClick={() => updateTab("")}
        >
          <Image
            className="flex-1"
            src={"/Logo.png"}
            width={156}
            height={156}
            alt={"Logo"}
          />
        </Link>
      </div>
      <div className="flex lg:flex-1 md:flex-[1.8] sm:flex-[0.9] flex-row items-center justify-between max-sm:hidden ">
        <Link
          href={customHref("#what-we-do")}
          unselectable="off"
          onClick={() => updateTab("what-we-do")}
        >
          <p className="font-sans font-semibold ">What we do</p>
          {tab === "what-we-do" && (
            <div className="w-[100%] h-[5px] bg-green-700" />
          )}
        </Link>
        <Link
          href={customHref("#our-portfolio")}
          unselectable="off"
          onClick={() => updateTab("our-portfolio")}
        >
          <p className="font-sans font-semibold">Portfolio</p>
          {tab === "our-portfolio" && (
            <div className="w-[100%] h-[5px] bg-green-700" />
          )}
        </Link>
        <Link
          href={customHref("#testimonials")}
          unselectable="off"
          onClick={() => updateTab("testimonials")}
        >
          <p className="font-sans font-semibold">Testimonials</p>
          {tab === "testimonials" && (
            <div className="w-[100%] h-[5px] bg-green-700" />
          )}
        </Link>
        <button className="btn-outlined" onClick={() => router.push("/login")}>
          Login
        </button>
        <button
          className="btn-contained"
          onClick={() => router.push("/register")}
        >
          Register
        </button>
      </div>
      <div className="hidden max-sm:flex justify-center items-center w-[60px] h-[60px] rounded-2xl">
        <motion.div
          className="p-2 rounded-full"
          onClick={() => setIsOpenMenu(!isOpenMenu)}
          whileTap={{ backgroundColor: "rgba(1,1,1,0.1)" }}
        >
          <Image src={"/MenuImage.png"} alt="" width={46} height={46} />
        </motion.div>
      </div>
    </main>
  );
}
