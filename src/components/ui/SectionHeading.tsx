type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div className={`mb-10 max-w-2xl ${alignClass}`}>
      {eyebrow && (
        <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-accent">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-lg text-text-secondary">{description}</p>
      )}
    </div>
  );
}
