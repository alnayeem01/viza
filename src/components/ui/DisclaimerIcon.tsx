import type { DisclaimerThemeIcon } from "@/data/disclaimer";

type DisclaimerIconProps = {
  icon: DisclaimerThemeIcon;
  className?: string;
};

export const DisclaimerIcon = ({ icon, className = "h-5 w-5" }: DisclaimerIconProps) => {
  const props = {
    className,
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    strokeWidth: 1.75,
    "aria-hidden": true as const,
  };

  switch (icon) {
    case "scope":
      return (
        <svg {...props}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
          />
        </svg>
      );
    case "outcomes":
      return (
        <svg {...props}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 21h19.5M4.5 21V7.5a2.25 2.25 0 0 1 2.25-2.25h2.25m0 0V4.875A2.625 2.625 0 0 1 11.25 2.25h1.5a2.625 2.625 0 0 1 2.625 2.625V5.25m-6 0h6m-7.5 0H19.5a2.25 2.25 0 0 1 2.25 2.25V21m-4.5 0h4.5m-4.5-7.5h4.5"
          />
        </svg>
      );
    case "payments":
      return (
        <svg {...props}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z"
          />
        </svg>
      );
  }
};
