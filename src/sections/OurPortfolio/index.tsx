"use client";

import { Card, PortfolioItem } from "@/components";
import CardInfo from "@/components/CardInfo";
import { ActivityIcon, HearthIcon, WorkIcon } from "@/components/svg";
import useWindowSize from "@/hooks/useWindowSize";
import { motion } from "framer-motion";

export default function OurPortfolioLandingPage() {
  const { width } = useWindowSize();

  const mobile = width < 768;

  if (!width) return <></>;

  return (
    <div
      id="our-portfolio"
      className="overflow-hidden flex-1 pt-16 lg:px-[100px] md:px-[32px] max-sm:px-4 bg-white flex flex-col"
    >
      <motion.span
        className="flex-1 font-sans font-medium text-xl mb-10 text-green-600 "
        initial={{ x: -200 }}
        whileInView={{ x: 0 }}
        transition={{ ease: "easeOut", duration: 1 }}
        //viewport={{ once: true }}
      >
        OUR PORTFOLIO
      </motion.span>
      <motion.span
        className="w-[35%] max-sm:w-[100%] fonst-sans text-3xl font-semibold"
        initial={{ x: "-100%" }}
        whileInView={{ x: "0%" }}
        transition={{ ease: "easeOut", duration: 1 }}
        //viewport={{ once: true }}
      >
        We provide the Perfect Solution to your business growth
      </motion.span>
      <div className="w-full mt-32 mb-52 max-md:mb-16 flex flex-row justify-between max-sm:flex-col max-sm:mt-8 ">
        <motion.div
          className=" flex flex-col"
          initial={{ x: "-25%", opacity: 0 }}
          whileInView={{ x: "0%", opacity: 1 }}
          transition={{ ease: "easeOut", duration: 1 }}
        >
          <PortfolioItem
            title="Digital Marketing Agency Website"
            description="This is a website for a client who want to achieve their goals and meet their users needs while also increasing their reach. Accross all platforms. This is a website rebrand"
            src="Image1.png"
            className="h-[400px] w-[100%]"
          />
          <PortfolioItem
            title="Digital Marketing Agency Website"
            description="This is a website for a client who want to achieve their goals and meet their users needs while also increasing their reach. Accross all platforms. This is a website rebrand"
            src="Image2.png"
            className="h-[500px] w-[100%]"
          />
        </motion.div>
        <motion.div
          className="flex flex-col items-end"
          initial={{ x: "25%", opacity: 0 }}
          whileInView={{ x: "0%", opacity: 1 }}
          transition={{ ease: "easeOut", duration: 1 }}
        >
          <PortfolioItem
            title="Digital Marketing Agency Website"
            description="This is a website for a client who want to achieve their goals and meet their users needs while also increasing their reach. Accross all platforms. This is a website rebrand"
            src="Image3.png"
            className="h-[550px] w-[100%]"
          />

          <PortfolioItem
            title="Digital Marketing Agency Website"
            description="This is a website for a client who want to achieve their goals and meet their users needs while also increasing their reach. Accross all platforms. This is a website rebrand"
            src="Image4.png"
            className="h-[350px] w-[100%]"
          />
        </motion.div>
      </div>
    </div>
  );
}
