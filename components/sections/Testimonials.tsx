import { Quote } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { testimonials } from "@/lib/data";

export default function Testimonials() {
  return (
    <section className="py-24 sm:py-28 bg-fursa-mist/60">
      <Container className="flex flex-col gap-14">
        <Reveal>
          <SectionHeading eyebrow="آراء مجتمعنا" title="ماذا يقول مستخدمو فرصة" />
        </Reveal>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map(({ name, role, quote }, i) => (
            <Reveal key={name} delay={i * 100}>
              <div className="flex h-full flex-col gap-5 rounded-xl2 bg-white p-7 shadow-soft border border-fursa-line/70">
                <Quote className="text-fursa-blue/25" size={28} />
                <p className="flex-1 text-[15px] leading-relaxed text-fursa-navy/80">"{quote}"</p>
                <div className="flex items-center gap-3 pt-2">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-fursa-gradient text-sm font-semibold text-white">
                    {name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-fursa-navy">{name}</p>
                    <p className="text-xs text-fursa-muted">{role}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
