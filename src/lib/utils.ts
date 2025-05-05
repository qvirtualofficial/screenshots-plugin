import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function applyDocumentColor(variable: string, color: string) {
  const root = window.document.documentElement;
  const cssVariable = `--${variable}`;

  root.style.setProperty(cssVariable, hexToHsl(color));
}

export function hexToHsl(color: string) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(color);

  // Check if the input is valid
  if (!result || result.length !== 4) {
    return null;
  }

  // Parse the hex values to numbers
  let r: number = parseInt(result[1], 16);
  let g: number = parseInt(result[2], 16);
  let b: number = parseInt(result[3], 16);

  r /= 255;
  g /= 255;
  b /= 255;

  // Find max and min values for HSL calculation
  const max: number = Math.max(r, g, b);
  const min: number = Math.min(r, g, b);

  // Initialize HSL variables
  let h: number = 0;
  let s: number = 0;
  let l: number = (max + min) / 2;

  // Calculate saturation and hue
  if (max !== min) {
    const d: number = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

    // Calculate hue based on which RGB component is max
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
    }

    h /= 6;
  }

  // Convert values to the appropriate ranges and round
  s = Math.round(s * 100);
  l = Math.round(l * 100);
  h = Math.round(h * 360);

  // Return the HSL string
  return `hsl(${h} ${s}% ${l}%)`;
}
