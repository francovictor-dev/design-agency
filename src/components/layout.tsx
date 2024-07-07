// app/layout.js
"use client";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function Layout({ children }: any) {
  const pathname = usePathname();

  return (
    <motion.div
      key={pathname}
      style={{ backgroundColor: "#22c55e" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2.3, type: "spring" }}
    >
      {children}
    </motion.div>
  );
}
