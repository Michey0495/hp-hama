import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "radial-gradient(ellipse at center, #1a1408 0%, #080808 70%)",
          fontFamily: "serif",
        }}
      >
        <div
          style={{
            fontSize: "160px",
            fontWeight: 700,
            color: "#F0EBE0",
            letterSpacing: "0.15em",
            textShadow: "0 0 80px rgba(201,168,76,0.5), 0 0 160px rgba(201,168,76,0.2)",
          }}
        >
          浜
        </div>
        <div
          style={{
            fontSize: "28px",
            color: "#C9A84C",
            letterSpacing: "0.4em",
            marginTop: "16px",
            opacity: 0.7,
          }}
        >
          備長炭が照らす、釧路の海の幸。
        </div>
      </div>
    ),
    { ...size }
  );
}
