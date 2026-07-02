import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { howItWorks } from "@/lib/data";

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 sm:py-28 bg-fursa-mist/60">
      <Container className="flex flex-col gap-16">
        <Reveal>
          <SectionHeading
            eyebrow="كيف تعمل المنصة"
            title="أربع خطوات تفصلك عن فرصتك القادمة"
          />
        </Reveal>

        <div className="relative grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="pointer-events-none absolute top-8 hidden h-px w-full bg-fursa-line lg:block" />
          {howItWorks.map(({ number, title, description }, i) => (
            <Reveal key={number} delay={i * 110}>
              <div className="relative flex flex-col gap-4">
                <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-white border border-fursa-line shadow-soft font-latin text-xl font-bold text-fursa-blue">
                  {number}
                </div>
                <h3 className="text-[17px] font-semibold text-fursa-navy">{title}</h3>
                <p className="text-sm leading-relaxed text-fursa-muted">{description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
