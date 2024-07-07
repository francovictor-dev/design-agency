"use client";

import { MotionProps, motion } from "framer-motion";
import IconChip from "./IconChip";

interface CardProps extends MotionProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  onClick: () => void;
}

export default function Card(props: CardProps) {
  const { description, icon, onClick, title, ...motionProps } = props;

  return (
    <motion.main
      className="h-[415px] w-[380px] max-lg:w-1/2 max-sm:w-screen px-7 max-lg:px-0 max-sm:px-[0px] py-12 bg-white rounded-[30px] flex flex-col justify-between max-sm:items-center"
      {...motionProps}
    >
      <IconChip svg={icon} />
      <p className="h5-text">{title}</p>
      <p className="title-text">{description}</p>
      <button
        onClick={() => onClick()}
        className="btn-contained w-[159px] h-[55px] bg-orange hover:bg-lime-950 focus:bg-lime-950"
      >
        Learn More
      </button>
    </motion.main>
  );
}
