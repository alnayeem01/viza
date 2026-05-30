import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const visaTypes = [
  "Skilled Worker visas",
  "Student visas",
  "Spouse and family visas",
  "Visitor visas",
  "Naturalisation applications",
  "Dependants applications",
];

const values = [
  "Professional support",
  "Responsive communication",
  "Transparent fees",
  "Practical immigration guidance",
];

export function AboutSection() {
  return (
    <section id="about" className="scroll-mt-20 bg-background py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="About us"
          title="About Viza Ltd"
          description="Professional UK immigration advice and visa assistance for a range of straightforward immigration matters."
        />

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <h3 className="text-lg font-semibold text-primary">We assist with</h3>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2">
              {visaTypes.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 text-text-secondary"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-primary/10 bg-background-muted p-6 sm:p-8">
            <p className="text-text-secondary leading-relaxed">
              Our adviser has extensive professional experience in immigration
              compliance, sponsor licence matters, right to work requirements and
              professional advisory services.
            </p>
            <h3 className="mt-6 text-lg font-semibold text-primary">We aim to provide</h3>
            <ul className="mt-4 space-y-3">
              {values.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 rounded-lg bg-background px-4 py-3 text-sm font-medium text-text shadow-sm"
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-accent/15 text-accent">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
