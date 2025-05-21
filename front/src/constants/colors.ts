export const colors = {
  purple: {
    100: "#CCD6F6", // Lightest
    200: "#B999E6", // Added (between 100 and 300)
    300: "#9857D3",
    400: "#693B93",
    500: "#7127BA",
    600: "#2C1250",
    700: "#2B0B3A",
    800: "#1A0B2E",
    900: "#11071F", // Darkest
  },
  light: {
    500: "#FFFFFF",
  },
  overlay: {
    300: 'radial-gradient(circle at center, rgba(48, 16, 128, 0.6) 20%, rgba(140, 87, 190, 0.36) 80%)',
    500: 'radial-gradient(151.92% 127.02% at 15.32% 21.04%, rgba(105, 59, 147, 0.20) 0%, rgba(110, 191, 244, 0.04) 77.08%, rgba(70, 144, 212, 0.00) 100%)'
  },
  gradients: {
    500: ["#130428", "#251043", "#38126D", "#261045", "#190634"]
  }
} as const;
// Type definitions
type ColorType = keyof typeof colors;

// Fallback color
const FALLBACK_COLOR = "#7127BA"; 

const memoize = <T extends (...args: any[]) => any>(fn: T): T => {
  const cache = new Map<string, ReturnType<T>>();
  return ((...args: Parameters<T>) => {
    const key = args.join("-");
    if (cache.has(key)) return cache.get(key)!;
    const result = fn(...args);
    cache.set(key, result);
    return result;
  }) as T;
};

export const getColor = memoize((type: ColorType, shade?: number, opacity?: number | string): string => {
  const colorSet = colors[type];

  if (!colorSet || typeof colorSet !== "object") {
    console.warn(`Color type "${type}" not found, using fallback`);
    return FALLBACK_COLOR;
  }

  const isShadedColor = (obj: any): obj is Record<number, string> =>
    typeof obj === "object" && Object.keys(obj).every((key) => !isNaN(Number(key)));

  if (isShadedColor(colorSet)) {
    const shadeValue = colorSet[shade as keyof typeof colorSet] ?? colorSet[500] ?? FALLBACK_COLOR;

    if (opacity !== undefined) {
      const opacityValue = typeof opacity === "string" ? parseFloat(opacity) / 100 : opacity;
      return convertToRGBA(shadeValue, opacityValue);
    }

    return shadeValue;
  }

  console.warn(`Invalid shade "${shade}" for "${type}", using fallback`);
  return FALLBACK_COLOR;
});

const convertToRGBA = (hex: string, opacity: number = 1): string => {
  const hexCode = hex.replace("#", "");

  const r = parseInt(hexCode.substring(0, 2), 16);
  const g = parseInt(hexCode.substring(2, 4), 16);
  const b = parseInt(hexCode.substring(4, 6), 16);

  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
};


