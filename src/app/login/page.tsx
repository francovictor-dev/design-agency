"use client";

import NavBar from "@/components/NavBar";
import { useState } from "react";

export default function Login() {
  const [tab, setTab] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <main>
      <NavBar onTab={() => undefined} />
      <section className="flex-1  h-screen pt-[80px] bg-green-200 overflow-hidden flex justify-center items-center">
        <div className="w-80 h-auto p-8 rounded-3xl bg-slate-50">
          <p className="font-sans font-semibold text-lg text-center mb-4">
            Login
          </p>
          <p className="font-sans mb-4">E-mail</p>
          <input
            type="email"
            value={email}
            placeholder="email@gmail.com"
            onChange={(e) => setEmail(e.target.value)}
            className="w-[100%] rounded-md p-4 mr-[32px] mb-4"
          />
          <p className="font-sans mb-4">password</p>
          <input
            type="password"
            value={password}
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
            className="w-[100%] rounded-md p-4 mr-[32px] mb-4"
          />
          <button className="btn-contained w-full">Enter</button>
        </div>
      </section>
    </main>
  );
}
