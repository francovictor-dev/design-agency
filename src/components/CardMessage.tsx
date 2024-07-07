import { motion } from "framer-motion";

import Image from "next/image";

interface MessageProps {
  title: string;
  person: {
    img: string;
    name: string;
    job: string;
  };
}

export default function CardMessage(props: MessageProps) {
  const { title, person } = props;

  return (
    <motion.div
      className="min-w-[470px] max-sm:min-w-full max-w-[470px] max-sm:max-w-[200px] max-h-[260px] flex flex-col p-[40px] bg-white shadow-lg rounded-[20px] mr-[16px]"
      whileHover={{ zoom: 1.05, x: -1.5, y: -10 }}
      transition={{
        ease: "easeInOut",
      }}
    >
      <span>{title}</span>
      <div className="w-full h-auto flex flex-row mt-[20px]">
        <Image
          src={person.img}
          alt=""
          width={600}
          height={600}
          className=" w-[60px] h-[60px] rounded-full object-cover mr-[10px]"
        />
        <div className="flex flex-col justify-between">
          <span className="font-sans text-lg font-semibold">{person.name}</span>
          <span className="font-sans text-lg">{person.job}</span>
        </div>
      </div>
    </motion.div>
  );
}
