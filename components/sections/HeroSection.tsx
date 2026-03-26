"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { useBooking } from "@/components/ui/BookingContext";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: "easeOut" as const },
  }),
};

export default function HeroSection() {
  const t = useTranslations("Hero");
  const { openBooking } = useBooking();

  const bullets = [t("bullet1"), t("bullet2"), t("bullet3"), t("bullet4")];

  return (
    <section id="hero" className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/services/hero-home.jpg"
          alt="WEN'S Professional Cleaning"
          fill
          className="object-cover"
          priority
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-[#0F2347]/70" />
      </div>

      {/* Decorative circles */}
      <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-white/5 pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-[#C9A84C]/10 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center py-24">
        {/* Main title */}
        <motion.h1
          custom={0}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white font-heading leading-tight mb-4 tracking-wide"
        >
          {t("bgTitle")}
        </motion.h1>

        {/* Gold divider */}
        <motion.div
          custom={1}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="w-20 h-1 bg-[#C9A84C] mx-auto my-5"
        />

        {/* Subtitle */}
        <motion.p
          custom={2}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="text-xl md:text-2xl text-[#C9A84C] italic font-semibold mb-10"
        >
          {t("bgSubtitle")}
        </motion.p>

        {/* Bullets */}
        <motion.ul
          custom={3}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="flex flex-col sm:flex-row sm:flex-wrap justify-center gap-3 mb-10"
        >
          {bullets.map((bullet, i) => (
            <li
              key={i}
              className="flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-5 py-2.5 text-white font-semibold text-sm backdrop-blur-sm"
            >
              {bullet}
            </li>
          ))}
        </motion.ul>

        {/* CTA button */}
        <motion.div
          custom={4}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              openBooking();
            }}
            className="inline-block bg-[#C9A84C] hover:bg-[#b8943d] text-[#0F2347] rounded-lg px-10 py-4 font-bold uppercase tracking-wider transition-colors duration-200 shadow-[0_4px_24px_rgba(201,168,76,0.35)] text-base"
          >
            {t("cta")}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
