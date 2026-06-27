import { readFileSync } from "fs";
import { join } from "path";
import { ImageResponse } from "next/og";
import { site } from "@/data/site";

export const alt = site.name;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Logo einmal beim Build/Request einlesen und als Data-URI einbetten.
// next/og laeuft auf der Node-Runtime, daher ist fs verfuegbar.
const logoSrc = `data:image/svg+xml;base64,${readFileSync(
  join(process.cwd(), "public", "ffas-logo-letters-only.svg"),
).toString("base64")}`;

// Dynamisch generiertes OG-Bild im FFAS-Look (Navy / Pink / Cream).
// Bewusst ohne Custom-Fonts, damit kein Font-Fetch noetig ist.
export default function OpengraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: 80,
        backgroundColor: "#020c45",
        color: "#faf6ee",
      }}
    >
      {/* Lockup: Monogramm + Eyebrow */}
      <div style={{ display: "flex", alignItems: "center", gap: 28 }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={logoSrc} width={120} height={120} alt="" />
        <div
          style={{
            display: "flex",
            fontSize: 26,
            letterSpacing: 10,
            color: "#ff66c4",
          }}
        >
          FRAUENFUSSBALL ALBIS SÜD
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column" }}>
        <div
          style={{
            display: "flex",
            fontSize: 240,
            fontWeight: 700,
            lineHeight: 1,
            letterSpacing: -8,
          }}
        >
          FFAS
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 40,
            marginTop: 20,
            color: "rgba(250, 246, 238, 0.82)",
          }}
        >
          Der Frauenfussball im Säuliamt. Fünf Vereine, eine Farbe.
        </div>
      </div>

      <div
        style={{
          display: "flex",
          height: 8,
          width: 200,
          backgroundColor: "#ff66c4",
        }}
      />
    </div>,
    { ...size },
  );
}
