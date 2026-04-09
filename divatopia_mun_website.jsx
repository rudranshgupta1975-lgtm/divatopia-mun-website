
import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, Crown, Users, Instagram, Mail, Upload, ChevronRight } from "lucide-react";

// Animated sparkle component for diva theme
const Sparkle = ({ delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0 }}
    animate={{ opacity: [0,1,0], scale: [0,1.2,0] }}
    transition={{ duration: 2.5, delay, repeat: Infinity }}
    className="absolute text-pink-400"
  >
    ✨
  </motion.div>
);

export default function DivatopiaMunWebsite() {

  const [activePage, setActivePage] = useState("home");

  const departments = useMemo(
    () => ["Marketing", "Delegate Affairs", "Social Media", "Management"],
    []
  );

  const navItems = [
    { id: "home", label: "Home" },
    { id: "committees", label: "Committees" },
    { id: "secretariat", label: "Secretariat" },
    { id: "registration", label: "Registration" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-pink-50 via-white to-pink-100 text-zinc-800 overflow-hidden">

      <Sparkle delay={0}/>
      <Sparkle delay={1}/>
      <Sparkle delay={2}/>

      <motion.div
        animate={{ scale:[1,1.2,1], opacity:[0.4,0.6,0.4] }}
        transition={{ duration:6, repeat:Infinity }}
        className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-pink-300/30 rounded-full blur-3xl"
      />

      <header className="sticky top-0 z-50 border-b border-pink-200 bg-white/80 backdrop-blur">

        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

          <div className="flex items-center gap-3">
            <Crown className="text-pink-600"/>
            <h1 className="font-bold">DIVATOPIA MUN</h1>
          </div>

          <nav className="flex gap-6">
            {navItems.map((item)=>(
              <button
                key={item.id}
                onClick={()=>setActivePage(item.id)}
                className="hover:text-pink-600"
              >
                {item.label}
              </button>
            ))}
          </nav>

        </div>

      </header>

      <main>

        {activePage==="home" && (

          <section className="mx-auto max-w-6xl px-6 py-20">

            <motion.h1
              initial={{opacity:0,y:30}}
              animate={{opacity:1,y:0}}
              transition={{duration:0.8}}
              className="text-5xl font-black bg-gradient-to-r from-pink-500 via-fuchsia-500 to-rose-500 bg-clip-text text-transparent"
            >
              Divas • Debate • Dominate
            </motion.h1>

            <p className="mt-6 text-lg text-gray-600">
              Welcome to Divatopia MUN — the most glamorous online MUN experience.
            </p>

          </section>

        )}

        {activePage==="committees" && (

          <section className="mx-auto max-w-6xl px-6 py-20">

            <h2 className="text-4xl font-bold mb-8">Committees</h2>

            <div className="grid md:grid-cols-3 gap-6">

              <div className="p-6 rounded-xl bg-white shadow">
                <h3 className="text-xl font-bold text-pink-600">UNHRC</h3>
                <p className="mt-2 text-sm text-gray-600">
                  Debate global human rights issues.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-white shadow">
                <h3 className="text-xl font-bold text-pink-600">UNSC</h3>
                <p className="mt-2 text-sm text-gray-600">
                  Handle international security crises.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-white shadow">
                <h3 className="text-xl font-bold text-pink-600">Marvel vs DC</h3>
                <p className="mt-2 text-sm text-gray-600">
                  A cinematic chaos committee.
                </p>
              </div>

            </div>

          </section>

        )}

        {activePage==="secretariat" && (

          <section className="mx-auto max-w-6xl px-6 py-20">

            <h2 className="text-4xl font-bold mb-10">Secretariat Departments</h2>

            <div className="grid md:grid-cols-4 gap-6">

              {departments.map((dept)=>(
                <div key={dept} className="p-6 bg-white rounded-xl shadow">
                  <h3 className="text-xl font-bold text-pink-600">{dept}</h3>
                </div>
              ))}

            </div>

          </section>

        )}

        {activePage==="registration" && (

          <section className="mx-auto max-w-4xl px-6 py-20">

            <h2 className="text-3xl font-bold mb-8">
              Secretariat Application
            </h2>

            <iframe
              src="https://forms.gle/E5FAQrqVXXL9C8xH6"
              className="w-full h-[900px] border rounded-xl"
              title="Divatopia Form"
            />

          </section>

        )}

        {activePage==="contact" && (

          <section className="mx-auto max-w-4xl px-6 py-20">

            <h2 className="text-3xl font-bold mb-8">Contact</h2>

            <div className="grid md:grid-cols-2 gap-6">

              <div className="p-6 bg-pink-50 rounded-xl">
                <Instagram/>
                <p className="mt-2">@divatopiamun</p>
              </div>

              <div className="p-6 bg-pink-50 rounded-xl">
                <Mail/>
                <p className="mt-2">divatopiamun@gmail.com</p>
              </div>

            </div>

          </section>

        )}

      </main>

    </div>
  );
}
