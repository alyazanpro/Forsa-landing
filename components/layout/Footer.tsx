import { Instagram, Twitter, Linkedin, Mail } from "lucide-react";
import Container from "@/components/ui/Container";

const footerColumns = [
  {
    title: "المنصة",
    links: ["الخدمات", "لماذا فرصة", "كيف تعمل", "قصص نجاح"],
  },
  {
    title: "الجهات",
    links: ["للشركات", "للجامعات", "للجهات الحكومية", "الشراكات"],
  },
  {
    title: "الدعم",
    links: ["الأسئلة الشائعة", "مركز المساعدة", "تواصل معنا", "سياسة الخصوصية"],
  },
];

export default function Footer() {
  return (
    <footer className="bg-fursa-navy text-white">
      <Container className="py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <a href="#" className="flex items-center gap-2 mb-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-fursa-gradient text-white font-bold text-lg">
                ف
              </div>
              <span className="text-xl font-bold">فرصة</span>
            </a>
            <p className="text-sm leading-relaxed text-white/60 max-w-xs">
              منصة عُمانية تربط الطلاب والخريجين والمواطنين بالجامعات والشركات والجهات
              الحكومية عبر التدريب، الوظائف، المنح، والتوجيه المهني بالذكاء الاصطناعي.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {[Instagram, Twitter, Linkedin, Mail].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="تواصل معنا عبر وسائل التواصل"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/8 hover:bg-white/15 transition-colors"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {footerColumns.map((col) => (
            <div key={col.title}>
              <h4 className="text-sm font-semibold text-white/90 mb-4">{col.title}</h4>
              <ul className="flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-white/60 hover:text-white transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col-reverse items-center justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row">
          <p className="text-xs text-white/45">
            © {new Date().getFullYear()} فرصة. جميع الحقوق محفوظة.
          </p>
          <p className="text-xs text-white/45">صُنع بفخر في سلطنة عُمان 🇴🇲</p>
        </div>
      </Container>
    </footer>
  );
}
