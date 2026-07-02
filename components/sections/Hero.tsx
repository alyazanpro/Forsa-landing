import { ArrowLeft, PlayCircle, GraduationCap, Briefcase, Trophy, HeartHandshake, UserCircle2 } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import Reveal from "@/components/ui/Reveal";

const orbitNodes = [
  { icon: GraduationCap, label: "تدريب", pos: "top-0 start-1/2 -translate-x-1/2 -translate-y-1/2", color: "bg-fursa-blue" },
  { icon: Briefcase, label: "وظائف", pos: "top-1/2 end-0 translate-x-1/2 -translate-y-1/2", color: "bg-fursa-teal" },
  { icon: Trophy, label: "مسابقات", pos: "bottom-0 start-1/2 -translate-x-1/2 translate-y-1/2", color: "bg-fursa-green" },
  { icon: HeartHandshake, label: "تطوع", pos: "top-1/2 start-0 -translate-x-1/2 -translate-y-1/2", color: "bg-fursa-blue-light" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-36 pb-20 sm:pt-44 sm:pb-28 bg-fursa-radial">
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <Reveal className="flex flex-col items-start gap-6 text-start">
            <Badge tone="blue">✨ أول منظومة فرص متكاملة في عُمان</Badge>

            <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-bold leading-[1.25] text-fursa-navy">
              فرصتك القادمة
              <br />
              تبدأ من <span className="text-fursa-blue">هنا</span>
            </h1>

            <p className="max-w-lg text-lg leading-relaxed text-fursa-muted">
              منصة واحدة تجمع التدريب، الوظائف، المنح، المسابقات، والتطوّع — وتربطك
              بها عبر توجيه مهني ذكي يفهم مهاراتك الحقيقية، لا مجرد سيرتك الذاتية.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2 w-full sm:w-auto">
              <Button variant="primary" size="lg" href="#cta" icon={<ArrowLeft size={18} />} iconPosition="end">
                ابدأ رحلتك المهنية
              </Button>
              <Button variant="secondary" size="lg" href="#how-it-works" icon={<PlayCircle size={18} />}>
                شاهد كيف تعمل
              </Button>
            </div>

            <div className="flex items-center gap-3 pt-4 text-sm text-fursa-muted">
              <div className="flex -space-x-3 rtl:space-x-reverse">
                {["A", "S", "B", "M"].map((letter) => (
                  <div
                    key={letter}
                    className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-white bg-fursa-mist text-xs font-semibold text-fursa-navy"
                  >
                    {letter}
                  </div>
                ))}
              </div>
              <span>ينضم إليها طلاب وخريجون من مختلف التخصصات</span>
            </div>
          </Reveal>

          <Reveal delay={150} className="flex justify-center lg:justify-end">
            <div className="relative h-[300px] w-[300px] sm:h-[400px] sm:w-[400px]">
              <div className="absolute inset-0 rounded-full border border-fursa-blue/15" />
              <div className="absolute inset-[15%] rounded-full border border-fursa-teal/15" />

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex h-24 w-24 sm:h-28 sm:w-28 items-center justify-center rounded-full bg-fursa-gradient text-white shadow-glow animate-pulse-soft">
                  <UserCircle2 size={44} />
                </div>
              </div>

              <div className="absolute inset-0 animate-orbit motion-reduce:animate-none">
                {orbitNodes.map(({ icon: Icon, label, pos, color }) => (
                  <div key={label} className={`absolute ${pos}`}>
                    <div className="animate-counter-rotate motion-reduce:animate-none">
                      <div
                        className={`flex flex-col items-center gap-1.5 ${color} h-16 w-16 rounded-2xl text-white shadow-card items-center justify-center flex`}
                      >
                        <Icon size={24} />
                      </div>
                      <span className="mt-1.5 block text-center text-xs font-medium text-fursa-navy/70">
                        {label}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
