import { memo, CSSProperties } from "react";

// Define typography styles
const typographyStyles: Record<string, CSSProperties> = {
  h1: { fontSize: '50px', fontWeight: "bold", lineHeight: '61px', letterSpacing: '0.4px' },
  h2: { fontSize: '40px', fontWeight: "700", lineHeight: '50px', letterSpacing: '0.4px' },
  h3: { fontSize: '24px', fontWeight: "600", lineHeight: '32px', letterSpacing: '0.4px' },
  h4: { fontSize: '20px', fontWeight: "600", lineHeight: '26px', letterSpacing: '0.4px' },
  h5: { fontSize: '18px', fontWeight: "600", lineHeight: '24px', letterSpacing: '0.4px' },
  h6: { fontSize: '16px', fontWeight: "500", lineHeight: '22px', letterSpacing: '0.4px' },
  b1: { fontSize: '26px', fontWeight: "600", lineHeight: '32px', letterSpacing: '0.6px' },
  b2: { fontSize: '20px', fontWeight: "600", lineHeight: '30px', letterSpacing: '0.6px' },
  b3: { fontSize: '18px', fontWeight: "400", lineHeight: '26px', letterSpacing: '0.4px' },
  b4: { fontSize: '16px', fontWeight: "500", lineHeight: '22px', letterSpacing: '0.4px' },
  b5: { fontSize: '14px', fontWeight: "400", lineHeight: '20px', letterSpacing: '0.4px' },
  b6: { fontSize: '10px', fontWeight: "400", lineHeight: '14px', letterSpacing: '0.4px' },
  BigInt64Array: { fontSize: '14px', fontWeight: "400", lineHeight: '20px' },
  caption: { fontSize: '12px', fontWeight: "400", lineHeight: '16px', color: 'green' },
} as const;

const familyMapping: Record<string, string> = {
  p: "Preahvihear",
  jk: "Plus Jakarta Sans",
} as const


type FamilyVariant = keyof typeof familyMapping;
type TypographyVariant = keyof typeof typographyStyles;

interface TypographyProps {
  variant: TypographyVariant;
  color?: string;
  align?: "left" | "center" | "right";
  style?: CSSProperties;
  family?: FamilyVariant;
  children: React.ReactNode;
  className?: any;
}

const Typography = memo(({ variant, color, align, style, children, family, className }: TypographyProps) => {
  const textStyle: CSSProperties = {
    ...typographyStyles[variant],
    color: color || 'dark',
    textAlign: align || "left",
    fontFamily: family && familyMapping[family] || familyMapping["jk"],
  };

    return <span className={className}  style={{ ...textStyle, ...style }}>{children}</span>;
});

export default Typography;
