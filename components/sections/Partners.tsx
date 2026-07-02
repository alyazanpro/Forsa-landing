import { Landmark, Building2, GraduationCap, Briefcase, Globe2, ShieldCheck } from "lucide-react";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

const partners = [
  { icon: Landmark, name: "جهات حكومية" },
  { icon: GraduationCap, name: "جامعات وكليات" },
  { icon: Building2, name: "شركات القطاع الخاص" },
  { icon: Briefcase, name: "حاضنات أعمال" },
  { icon: Globe2, name: "منظمات دولية" },
  { icon: ShieldCheck, name: "جهات معتمدة" },
];

export default function Partners() {
  return (
    <section className="border-y border-fursa-line bg-fursa-mist/60 py-12">
      <Container>
        <Reveal>
          <p className="text-center text-sm font-medium text-fursa-muted mb-8">
            مبنية لتخدم منظومة متكاملة من الجهات الموثوقة
          </p>
        </Reveal>
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
          {partners.map(({ icon: Icon, name }, i) => (
            <Reveal key={name} delay={i * 60}>
              <div className="flex flex-col items-center gap-2 rounded-xl2 px-4 py-5 text-center transition-colors hover:bg-white">
                <Icon size={26} className="text-fursa-navy/40" />
                <span className="text-xs font-medium text-fursa-navy/50">{name}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
