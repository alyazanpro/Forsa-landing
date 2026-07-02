import { ArrowLeft } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

const stories = [
  {
    tag: "من تدريب إلى وظيفة دائمة",
    name: "قصة خريج هندسة",
    outcome: "من متدرب إلى مبرمج بدوام كامل خلال 4 أشهر",
  },
  {
    tag: "من فكرة إلى مشروع",
    name: "قصة رائدة أعمال",
    outcome: "دعم ريادي حوّل فكرة جانبية إلى مشروع مسجّل",
  },
];

export default function SuccessStories() {
  return (
    <section className="py-24 sm:py-28">
      <Container className="flex flex-col gap-14">
        <Reveal>
          <SectionHeading
            eyebrow="قصص نجاح"
            title="فرص حقيقية غيّرت مسارات مهنية"
            description="نماذج توضيحية لنوع القصص التي نهدف لإبرازها من مجتمع فرصة — التفاصيل الكاملة قريبًا."
          />
        </Reveal>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {stories.map((story, i) => (
            <Reveal key={story.name} delay={i * 120}>
              <div className="group relative overflow-hidden rounded-xl3 bg-fursa-gradient p-8 sm:p-10 text-white min-h-[280px] flex flex-col justify-between">
                <div className="absolute -end-10 -top-10 h-40 w-40 rounded-full bg-white/10" />
                <div className="absolute -start-6 -bottom-10 h-32 w-32 rounded-full bg-white/10" />

                <span className="relative w-fit rounded-full bg-white/15 px-3.5 py-1.5 text-xs font-medium">
                  {story.tag}
                </span>

                <div className="relative flex flex-col gap-3">
                  <h3 className="text-2xl font-bold leading-snug">{story.outcome}</h3>
                  <span className="text-sm text-white/75">{story.name} — نموذج توضيحي</span>
                  <a
                    href="#"
                    className="mt-2 inline-flex w-fit items-center gap-2 text-sm font-semibold hover:gap-3 transition-all"
                  >
                    اقرأ القصة كاملة
                    <ArrowLeft size={16} />
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
