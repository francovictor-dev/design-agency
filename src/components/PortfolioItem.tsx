"use client";

import { MotionProps, motion } from "framer-motion";
import IconChip from "./IconChip";
import Image from "next/image";

interface PortfolioProps extends MotionProps {
  title: string;
  description: string;
  src: string;
  className?: string;
}

export default function PortfolioItem(props: PortfolioProps) {
  const { description, title, src, className, ...motionProps } = props;

  return (
    <motion.main
      className={`w-[90%] flex flex-col max-sm:items-center mb-[100px] max-sm:w-full`}
      {...motionProps}
    >
      <Image
        src={`/${src}`}
        alt=""
        width={900}
        height={900}
        className={`${className} object-cover`}
      />
      <p className="font-sans w-full font-semibold text-3xl text- mb-6 mt-12">
        {title}
      </p>
      <p className="font-sans">{description}</p>
    </motion.main>
  );
}
