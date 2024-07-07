"use client";

import { CardMessage } from "@/components";
import useWindowSize from "@/hooks/useWindowSize";
import { motion } from "framer-motion";
import { useMemo, useState } from "react";

export default function MessagesLandingPage() {
  const [email, setEmail] = useState("");
  const { width } = useWindowSize();

  const valueLeft = useMemo(() => {
    const screenAt425 = width <= 430;
    const screenAt768 = width <= 768;
    const screenAt1024 = width <= 1024;

    return screenAt1024
      ? -1200
      : screenAt768
      ? -1600
      : screenAt425
      ? -3000
      : -600;
  }, [width]);

  if (!width) return <></>;

  return (
    <div
      id="testimonials"
      className="overflow-hidden flex-1 pt-16 lg:px-[100px] md:px-[32px] max-sm:px-4 bg-white flex flex-col"
    >
      <motion.span
        className="flex-1 font-sans font-medium text-xl mb-10 text-green-600 "
        initial={{ x: -200 }}
        whileInView={{ x: 0 }}
        transition={{ ease: "easeOut", duration: 1 }}
        //viewport={{ once: true }}
      >
        TESTIMONIALS
      </motion.span>
      <motion.span
        className="w-[35%] max-sm:w-[100%] fonst-sans text-3xl font-semibold mb-12"
        initial={{ x: "-100%" }}
        whileInView={{ x: "0%" }}
        transition={{ ease: "easeOut", duration: 1 }}
        //viewport={{ once: true }}
      >
        See what our customer say about us
      </motion.span>

      <motion.div
        className="mb-60 w-full flex flex-row "
        drag={"x"}
        dragConstraints={{ left: valueLeft, right: 0 }}
      >
        <CardMessage
          person={{
            img: "/Woman.png",
            job: "Emily Stones",
            name: "Emily Stones",
          }}
          title="Thank You for your service. I am very pleased with the result. I have seen exponencial growth in my business and its all thanks to your amazing service"
        />
        <CardMessage
          person={{
            img: "/Woman.png",
            job: "Emily Stones",
            name: "Emily Stones",
          }}
          title="Thank You for your service. I am very pleased with the result. I have seen exponencial growth in my business and its all thanks to your amazing service"
        />
        <CardMessage
          person={{
            img: "/Woman.png",
            job: "Emily Stones",
            name: "Emily Stones",
          }}
          title="Thank You for your service. I am very pleased with the result. I have seen exponencial growth in my business and its all thanks to your amazing service"
        />
        <CardMessage
          person={{
            img: "/Woman.png",
            job: "Emily Stones",
            name: "Emily Stones",
          }}
          title="Thank You for your service. I am very pleased with the result. I have seen exponencial growth in my business and its all thanks to your amazing service"
        />
      </motion.div>

      <motion.span
        className="flex-1 font-sans font-medium text-xl mb-10 text-green-600 text-center"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeOut", duration: 1 }}
        //viewport={{ once: true }}
      >
        SUBSCRIBE
      </motion.span>

      <motion.span
        className="w-[100%] max-sm:w-[100%] fonst-sans text-3xl font-semibold mb-2 text-center"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeOut", duration: 1 }}
        //viewport={{ once: true }}
      >
        Subscribe to get the latest news about us
      </motion.span>

      <motion.span
        className="max-sm:w-[100%] fonst-sans text-base mb-10 text-stone-400 text-center"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeOut", duration: 1 }}
        //viewport={{ once: true }}
      >
        Please drop your email below to get daily update about what we do
      </motion.span>

      <div className="w-[100%] flex flex-row justify-center mb-52">
        <input
          type="text"
          placeholder="Enter Your Email Adress"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-[50%] rounded-md p-4 mr-[32px]"
        />

        <motion.button
          type="button"
          className="p-4 font-sans text-white rounded-xl"
          whileTap={{
            backgroundColor: "#ea820ccc",
          }}
          initial={{
            backgroundColor: "#ea580c",
          }}
          whileHover={{
            backgroundColor: "#e49e88",
          }}
          transition={{
            duration: 0.1,
            ease: "linear",
          }}
        >
          Subscribe
        </motion.button>
      </div>
    </div>
  );
}
