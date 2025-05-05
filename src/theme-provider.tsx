import {
  applyAppColor,
  applyVAColor,
  getAppColor,
} from "@tfdidesign/smartcars3-ui-sdk";
import { applyDocumentColor } from "@/lib/utils.ts";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const urlParams = new URLSearchParams(window.location.search);
  const darkmode = (urlParams.get("darkmode") || false) === "true";
  const forecolor = urlParams.get("forecolor") || "#FFFFFF";
  const backcolor = urlParams.get("backcolor") || "#C00000";

  document.body.classList.toggle("dark", darkmode);

  applyAppColor(document, darkmode);
  applyVAColor(document, forecolor, backcolor);

  applyDocumentColor("primary", backcolor);
  applyDocumentColor("primary-foreground", forecolor);
  applyDocumentColor("background", getAppColor(darkmode));

  return children;
}
