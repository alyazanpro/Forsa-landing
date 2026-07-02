import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { services } from "@/lib/data";

export default function Services() {
  return (
    <section id="services" className="py-24 sm:py-28">
      <Container className="flex flex-col gap-14">
        <Reveal>
          <SectionHeading
            eyebrow="ماذا تجد في فرصة"
            title="كل ما تحتاجه لمسارك المهني، في مكان واحد"
            description="من أول فرصة تدريب إلى إطلاق مشروعك الخاص — صممنا فرصة لتغطي كل مرحلة من رحلتك."
          />
        </Reveal>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ icon: Icon, title, description }, i) => (
            <Reveal key={title} delay={(i % 4) * 80}>
              <div className="group h-full rounded-xl2 border border-fursa-line bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover hover:border-fursa-blue/20">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-fursa-blue/8 text-fursa-blue transition-colors group-hover:bg-fursa-blue group-hover:text-white">
                  <Icon size={22} />
                </div>
                <h3 className="mb-2 text-[17px] font-semibold text-fursa-navy">{title}</h3>
                <p className="text-sm leading-relaxed text-fursa-muted">{description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
