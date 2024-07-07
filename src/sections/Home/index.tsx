"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function HomeLandingPage() {
  const handleDragStart = (event: any) => {
    event.preventDefault();
  };

  return (
    <div
      id="#home"
      className="flex-1  h-screen pt-[80px] bg-green-200 overflow-hidden"
    >
      <div className="h-full flex flex-col w-screen justify-between">
        <div className="w-full flex-1 flex justify-between max-sm:items-center">
          <div className="flex-[0.9] lg:pl-[100px] sm:px-[32px] max-sm:px-[16px] pb-[4%] flex flex-col justify-end max-sm:justify-center max-sm:items-center max-sm:flex-[1]">
            <span className="font-sans font-bold lg:text-6xl sm:text-5xl max-sm:text-5xl pb-[4%] max-sm:text-center">
              Increase Your Customers Loyalty and Satisfaction
            </span>
            <span className="font-sans font-medium lg:text-2xl sm:text-xl max-sm:text-xl pb-[6%] max-sm:text-center">
              We help businesses like yours earn more customers, standout from
              competitors, make more money
            </span>
            <button className="btn-contained lg:w-[30%] sm:w-[50%] max-sm:w-[60%] h-[80px] max-sm:h-[60px] font-medium text-2xl max-sm:text-lg">
              Get Started
            </button>
          </div>
          <div className="flex-[1.1] flex items-end max-sm:hidden">
            <Image
              src={"/Woman.png"}
              alt=""
              width={600}
              height={630}
              className="h-full relative w-auto object-cover max-xl:h-[40vw] "
            />

            <Image
              src={"/Buttons.png"}
              alt=""
              width={400}
              height={400}
              className="w-auto absolute top-[80px] max-xl:h-[40vw] "
            />
          </div>
        </div>
        <motion.div className="flex flex-row w-[200vw] overflow-hidden">
          <motion.div
            className="w-screen max-md:w-[100vw] h-[137px] max-md:h-[90px] mb-[38px] bg-slate-100 flex flex-row items-center justify-around"
            animate={{
              x: "-100%",
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop",
            }}
          >
            <Image
              src={"/LogoGoogle.png"}
              alt="Logo Google"
              width={120}
              height={120}
              className="max-md:mx-[32px]"
            />
            <Image
              src={"/LogoTrello.png"}
              alt="Logo Google"
              width={120}
              height={120}
              className="max-md:mx-[32px]"
            />
            <Image
              src={"/LogoMonday.png"}
              alt="Logo Google"
              width={120}
              height={120}
              className="max-md:mx-[32px]"
            />
            <Image
              src={"/NotionLogo.png"}
              alt="Logo Google"
              width={120}
              height={120}
              className="max-md:mx-[32px]"
            />
            <Image
              src={"/SlackLogo.png"}
              alt="Logo Google"
              width={120}
              height={120}
              className="max-md:mx-[32px]"
            />
          </motion.div>
          <motion.div
            className="w-screen max-md:w-[100vw] h-[137px] max-md:h-[90px] mb-[38px] bg-slate-100 flex flex-row items-center justify-around"
            animate={{
              x: "-100%",
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop",
            }}
          >
            <Image
              src={"/LogoGoogle.png"}
              alt="Logo Google"
              width={120}
              height={120}
              className="max-md:mx-[32px]"
            />
            <Image
              src={"/LogoTrello.png"}
              alt="Logo Google"
              width={120}
              height={120}
              className="max-md:mx-[32px]"
            />
            <Image
              src={"/LogoMonday.png"}
              alt="Logo Google"
              width={120}
              height={120}
              className="max-md:mx-[32px]"
            />
            <Image
              src={"/NotionLogo.png"}
              alt="Logo Google"
              width={120}
              height={120}
              className="max-md:mx-[32px]"
            />
            <Image
              src={"/SlackLogo.png"}
              alt="Logo Google"
              width={120}
              height={120}
              className="max-md:mx-[32px]"
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
