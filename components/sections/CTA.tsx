import { ArrowLeft, Building2 } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";

export default function CTA() {
  return (
    <section id="cta" className="py-24 sm:py-28">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-xl3 bg-fursa-navy px-8 py-16 sm:px-16 sm:py-20 text-center">
            <div className="absolute -end-16 -top-16 h-64 w-64 rounded-full bg-fursa-blue/20 blur-3xl" />
            <div className="absolute -start-16 -bottom-16 h-64 w-64 rounded-full bg-fursa-teal/20 blur-3xl" />

            <div className="relative flex flex-col items-center gap-6">
              <h2 className="max-w-xl text-3xl sm:text-4xl font-bold leading-[1.35] text-white">
                فرصتك القادمة لا تنتظر — ابدأ رحلتك مع فرصة اليوم
              </h2>
              <p className="max-w-md text-base text-white/65">
                انضم لآلاف الطلاب والخريجين، أو سجّل جهتك للوصول إلى أفضل المواهب في عُمان.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2 w-full sm:w-auto">
                <Button variant="dark" size="lg" href="#" icon={<ArrowLeft size={18} />} iconPosition="end">
                  أنشئ حسابك المجاني
                </Button>
                <Button
                  variant="secondary"
                  size="lg"
                  href="#"
                  icon={<Building2 size={18} />}
                  className="!bg-white/5 !text-white !border-white/15 hover:!bg-white/10"
                >
                  سجّل كجهة أو شركة
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
