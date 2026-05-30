/** Important Information — client copy; edit here only. */

export const disclaimerIntro = {
  eyebrow: "Please read",
  title: "Important Information",
} as const;

export type DisclaimerThemeIcon = "scope" | "outcomes" | "payments";

export type DisclaimerTheme = {
  id: string;
  title: string;
  icon: DisclaimerThemeIcon;
  points: readonly string[];
};

export const disclaimerThemes: DisclaimerTheme[] = [
  {
    id: "scope",
    title: "Our scope",
    icon: "scope",
    points: [
      "We only provide immigration advice and services within our authorised Level 1 scope.",
      "If your matter is complex or outside our authorisation, we will advise you accordingly and may suggest seeking advice from a suitably authorised adviser or legal representative.",
    ],
  },
  {
    id: "outcomes",
    title: "Decisions & outcomes",
    icon: "outcomes",
    points: [
      "All immigration decisions are made by the Home Office. We cannot guarantee application outcomes.",
    ],
  },
  {
    id: "payments",
    title: "Fees & payments",
    icon: "payments",
    points: [
      "Professional fees are charged only after the agreed work has been completed.",
      "We do not hold client money. Home Office fees and other third-party charges must be paid directly to the relevant authority.",
    ],
  },
];
