import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import { stats } from "@/lib/data";

export default function Stats() {
  return (
    <section className="bg-fursa-navy py-20">
      <Container>
        <div className="grid grid-cols-2 gap-10 lg:grid-cols-4">
          {stats.map(({ value, suffix, label }, i) => (
            <Reveal key={label} delay={i * 90}>
              <div className="flex flex-col items-center text-center lg:items-start lg:text-start">
                <div className="font-latin text-4xl sm:text-5xl font-bold text-white">
                  {value}
                  <span className="text-fursa-blue-light">{suffix}</span>
                </div>
                <p className="mt-2 text-sm text-white/60">{label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
