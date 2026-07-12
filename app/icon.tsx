import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0F2A4A",
          borderRadius: 6,
        }}
      >
        <div
          style={{
            display: "flex",
            gap: 2,
            height: 18,
            transform: "skewX(-12deg)",
          }}
        >
          <div style={{ width: 4, height: "100%", background: "#1B6FC9" }} />
          <div style={{ width: 4, height: "100%", background: "#E8632C" }} />
          <div style={{ width: 4, height: "100%", background: "#6BAA2C" }} />
        </div>
      </div>
    ),
    { ...size }
  );
}
