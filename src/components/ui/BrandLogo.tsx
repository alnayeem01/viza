import Image from "next/image";
import { brand } from "@/data/brand";

type BrandLogoProps = {
  size?: "sm" | "md" | "lg";
  className?: string;
  priority?: boolean;
};

const sizeMap = {
  sm: { px: 32, className: "h-8 w-8" },
  md: { px: 40, className: "h-9 w-9 sm:h-10 sm:w-10" },
  lg: { px: 48, className: "h-12 w-12" },
} as const;

export const BrandLogo = ({
  size = "md",
  className = "",
  priority = false,
}: BrandLogoProps) => {
  const { px, className: sizeClass } = sizeMap[size];

  return (
    <Image
      src={brand.logo}
      alt=""
      width={px}
      height={px}
      priority={priority}
      className={`rounded-md ${sizeClass} ${className}`}
    />
  );
};
