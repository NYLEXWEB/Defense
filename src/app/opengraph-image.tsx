import { ImageResponse } from "next/og";
import { siteConfig } from "@/data/site";

export const alt = `${siteConfig.name} - Smart CCTV & Security Solutions Kollam`;
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #06221a 0%, #03130e 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "space-between",
          padding: "60px 80px",
          position: "relative",
          fontFamily: "sans-serif",
        }}
      >
        {/* Subtle Decorative Background Glow */}
        <div
          style={{
            position: "absolute",
            top: "-10%",
            right: "-10%",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(0, 198, 137, 0.25) 0%, transparent 70%)",
          }}
        />

        {/* Top Header: Badge & Established */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              background: "rgba(0, 198, 137, 0.15)",
              border: "1px solid rgba(0, 198, 137, 0.4)",
              borderRadius: "50px",
              padding: "10px 24px",
              color: "#00C689",
              fontSize: "18px",
              fontWeight: 700,
              letterSpacing: "0.05em",
            }}
          >
            DEFENSE SECURITY SYSTEMS • EST. 2016
          </div>

          <div
            style={{
              color: "#A0A5A3",
              fontSize: "18px",
              fontWeight: 600,
            }}
          >
            Thevally, Kollam, Kerala
          </div>
        </div>

        {/* Main Center Headline */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "12px",
            maxWidth: "950px",
          }}
        >
          <div
            style={{
              fontSize: "56px",
              fontWeight: 900,
              color: "#FFFFFF",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
            }}
          >
            Protecting What Matters Most.
          </div>
          <div
            style={{
              fontSize: "24px",
              color: "#D6D6D6",
              lineHeight: 1.4,
              marginTop: "8px",
            }}
          >
            CCTV Cameras • WiFi Smart Security • Remote Gates • Video Door Phones • 24/7 Monitoring
          </div>
        </div>

        {/* Bottom Footer Details */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            borderTop: "1px solid rgba(255, 255, 255, 0.15)",
            paddingTop: "30px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
              color: "#00C689",
              fontSize: "22px",
              fontWeight: 700,
            }}
          >
            <span>📞 +91 7025 552 265</span>
          </div>

          <div
            style={{
              color: "#838B88",
              fontSize: "18px",
              fontWeight: 600,
            }}
          >
            defensesecurityit.in
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
