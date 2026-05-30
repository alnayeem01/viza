export type Service = {
  id: string;
  title: string;
  description: string;
  fee: string;
  dependantsFee?: string;
};

export type Feature = {
  id: string;
  title: string;
  description: string;
  icon: "shield" | "lock" | "receipt" | "compass" | "message" | "user";
};

export type ProcessStep = {
  step: number;
  title: string;
  description: string;
};

export type NavLink = {
  label: string;
  href: string;
  sectionId: string;
};

export type VisaOption = {
  value: string;
  label: string;
};
