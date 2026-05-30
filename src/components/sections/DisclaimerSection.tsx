import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const points = [
  "We only provide immigration advice and services within our authorised Level 1 scope.",
  "If your matter is complex or outside our authorisation, we will advise you accordingly and may suggest seeking advice from a suitably authorised adviser or legal representative.",
  "All immigration decisions are made by the Home Office. We cannot guarantee application outcomes.",
  "Professional fees are charged only after the agreed work has been completed.",
  "We do not hold client money. Home Office fees and other third-party charges must be paid directly to the relevant authority.",
];

export function DisclaimerSection() {
  return (
    <section className="border-y border-primary/10 bg-primary/5 py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Please read"
          title="Important Information"
          align="left"
        />
        <ul className="max-w-3xl space-y-4">
          {points.map((point) => (
            <li
              key={point}
              className="flex gap-3 text-sm leading-relaxed text-text-secondary sm:text-base"
            >
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
              {point}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
