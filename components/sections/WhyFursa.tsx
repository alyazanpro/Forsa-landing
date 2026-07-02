import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { whyFursa } from "@/lib/data";

export default function WhyFursa() {
  return (
    <section id="why-fursa" className="py-24 sm:py-28 bg-fursa-mist/60">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <Reveal>
            <SectionHeading
              align="start"
              eyebrow="لماذا فرصة"
              title="مش مجرد لوحة إعلانات وظائف"
              description="بنينا فرصة كمنظومة تفهم مهاراتك فعليًا، وتربطك بالجهة الصح من أول مرة — بدل التقديم العشوائي على عشرات الفرص."
            />
          </Reveal>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {whyFursa.map(({ icon: Icon, title, description }, i) => (
              <Reveal key={title} delay={i * 90}>
                <div className="h-full rounded-xl2 bg-white p-6 shadow-soft border border-fursa-line/70">
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-fursa-teal/10 text-fursa-teal">
                    <Icon size={20} />
                  </div>
                  <h3 className="mb-2 text-[16px] font-semibold text-fursa-navy">{title}</h3>
                  <p className="text-sm leading-relaxed text-fursa-muted">{description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
