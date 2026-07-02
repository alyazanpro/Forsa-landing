import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { features } from "@/lib/data";

export default function Features() {
  return (
    <section className="py-24 sm:py-28">
      <Container className="flex flex-col gap-14">
        <Reveal>
          <SectionHeading
            eyebrow="مزايا المنصة"
            title="تقنية تقف خلفك في كل خطوة"
            description="من بناء ملفك المهني إلى التفاوض مع أول جهة عمل، فرصة توفر لك الأدوات الذكية اللازمة."
          />
        </Reveal>

        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-xl3 border border-fursa-line bg-fursa-line sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, description }, i) => (
            <Reveal key={title} delay={(i % 3) * 90}>
              <div className="h-full bg-white p-8 transition-colors hover:bg-fursa-mist/70">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-fursa-gradient text-white">
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
