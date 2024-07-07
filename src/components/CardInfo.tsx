import { MotionProps, motion } from "framer-motion";
import { ReactNode } from "react";

interface CardInfoProps extends MotionProps {
  img: ReactNode;
  title: string;
  value: string;
  className?: string;
}

export default function CardInfo({
  img,
  title,
  value,
  className,
  ...rest
}: CardInfoProps) {
  return (
    <motion.div
      className={`flex flex-col p-[40px] max-md:p-[0px] max-md:py-[32px] min-w-60 max-md:min-w-0 max-md:w-44 items-center ${className}`}
      {...rest}
    >
      <div className="mb-[10px]">{img}</div>
      <p className="font-sans mb-4 font-medium text-base">{title}</p>
      <p className="font-sans text-4xl font-black text-green-500">{value}</p>
    </motion.div>
  );
}
