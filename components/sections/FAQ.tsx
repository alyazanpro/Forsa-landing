"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { faqs } from "@/lib/data";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 sm:py-28">
      <Container className="flex flex-col gap-14">
        <Reveal>
          <SectionHeading eyebrow="الأسئلة الشائعة" title="كل ما تحتاج معرفته عن فرصة" />
        </Reveal>

        <div className="mx-auto flex w-full max-w-3xl flex-col gap-3">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <Reveal key={faq.question} delay={i * 60}>
                <div
                  className={`rounded-xl2 border transition-colors ${
                    isOpen ? "border-fursa-blue/25 bg-fursa-mist/60" : "border-fursa-line bg-white"
                  }`}
                >
                  <button
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-start"
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    aria-expanded={isOpen}
                  >
                    <span className="text-[15px] font-semibold text-fursa-navy">{faq.question}</span>
                    <Plus
                      size={20}
                      className={`shrink-0 text-fursa-blue transition-transform duration-300 ${
                        isOpen ? "rotate-45" : ""
                      }`}
                    />
                  </button>
                  <div
                    className={`grid transition-all duration-300 ease-out ${
                      isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-6 pb-5 text-sm leading-relaxed text-fursa-muted">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
