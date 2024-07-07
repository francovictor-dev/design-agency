"use client";

import { Card } from "@/components";
import CardInfo from "@/components/CardInfo";
import { ActivityIcon, HearthIcon, WorkIcon } from "@/components/svg";
import useWindowSize from "@/hooks/useWindowSize";
import { motion } from "framer-motion";

export default function WhatWeDoLandingPage() {
  const { width } = useWindowSize();

  const mobile = width < 768;

  if (!width) return <></>;

  return (
    <div
      id="what-we-do"
      className="flex-1 pt-16 lg:px-[100px] md:px-[32px] max-sm:px-4 bg-white flex flex-col overflow-x-hidden"
    >
      <motion.span
        className="font-sans font-medium text-xl mb-10 text-green-600"
        initial={{ x: -200 }}
        whileInView={{ x: 0 }}
        transition={{ ease: "easeOut", duration: 1 }}
        //viewport={{ once: true }}
      >
        WHAT WE DO
      </motion.span>
      <motion.span
        className="w-[35%] max-sm:w-full fonst-sans text-3xl font-semibold"
        initial={{ x: "-100%" }}
        whileInView={{ x: "0%" }}
        transition={{ ease: "easeOut", duration: 1 }}
        //viewport={{ once: true }}
      >
        We provide the Perfect Solution to your business growth
      </motion.span>
      <div className="mt-16 mb-52 max-md:mb-16 flex flex-row justify-between flex-wrap">
        <Card
          title="Grow Your Business"
          description="We help identify the best ways to improve your business"
          icon={<ActivityIcon />}
          onClick={() => {}}
          initial={{
            y: 150,
          }}
          whileInView={{
            y: 0,
          }}
          transition={{
            type: "spring",
            duration: 1,
          }}
        />

        <Card
          title="Improve brand loyalty"
          description="We help identify the best ways to improve your business"
          icon={<HearthIcon />}
          onClick={() => {}}
          initial={{
            y: 150,
          }}
          whileInView={{
            y: 0,
          }}
          transition={{
            type: "spring",
            duration: 1,
            delay: 0.2,
          }}
        />
        <Card
          title="Improve Business Model"
          description="We help identify the best ways to improve your business"
          icon={<WorkIcon />}
          onClick={() => {}}
          initial={{
            y: 150,
          }}
          whileInView={{
            y: 0,
          }}
          transition={{
            type: "spring",
            duration: 1,
            delay: 0.4,
          }}
        />
      </div>
      <div className="flex flex-row justify-center mb-40 flex-wrap ">
        <CardInfo
          img={<HearthIcon />}
          title="Completed Projects"
          value={"100 +"}
          initial={
            mobile
              ? {
                  x: "-100%",
                }
              : {
                  y: 100,
                }
          }
          whileInView={
            mobile
              ? {
                  x: "0%",
                }
              : {
                  y: 0,
                }
          }
          transition={{
            type: "spring",
            duration: 1,
          }}
        />
        <div className="h-[230px] w-[1px] bg-slate-300 max-md:hidden" />
        <CardInfo
          img={<HearthIcon />}
          title="Customer Satisfaction"
          value={"20 %"}
          initial={
            mobile
              ? {
                  x: "100%",
                }
              : {
                  y: 100,
                }
          }
          whileInView={
            mobile
              ? {
                  x: "0%",
                }
              : {
                  y: 0,
                }
          }
          transition={{
            type: "spring",
            duration: 1,
            delay: !mobile ? 0.2 : 0,
          }}
        />
        <div className="h-[230px] w-[1px] bg-slate-300 max-md:hidden" />
        <CardInfo
          img={<HearthIcon />}
          title="Raised by Clients"
          value={"$10M"}
          initial={
            mobile
              ? {
                  x: "-100%",
                }
              : {
                  y: 100,
                }
          }
          whileInView={
            mobile
              ? {
                  x: "0%",
                }
              : {
                  y: 0,
                }
          }
          transition={{
            type: "spring",
            duration: 1,
            delay: !mobile ? 0.3 : 0,
          }}
        />
        <div className="h-[230px] w-[1px] bg-slate-300 max-md:hidden" />
        <CardInfo
          img={<HearthIcon />}
          title="Years in Business"
          value={"2 yrs"}
          initial={
            mobile
              ? {
                  x: "100%",
                }
              : {
                  y: 100,
                }
          }
          whileInView={
            mobile
              ? {
                  x: "0%",
                }
              : {
                  y: 0,
                }
          }
          transition={{
            type: "spring",
            duration: 1,
            delay: !mobile ? 0.4 : 0,
          }}
        />
      </div>
    </div>
  );
}
