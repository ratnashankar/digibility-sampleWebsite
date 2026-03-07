import "./styles/globals.css";
import { Unbounded } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const unbounded = Unbounded({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

/* =========================================
   SEO & SOCIAL METADATA
========================================= */
export const metadata = {
  title: "Digibility – AI Marketing Automation",
  description:
    "Plan, create, schedule, and track your marketing with AI. Replace agencies and tool stacks with Digibility.",

  openGraph: {
    title: "Digibility – AI Marketing Automation",
    description: "Your always-on AI marketing team.",
    siteName: "Digibility",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Digibility – AI Marketing Automation",
    description: "Your always-on AI marketing team.",
  },
};

const GA4_ID = "G-XXXXXXX";
const META_PIXEL_ID = "1234567890";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const analyticsEnabled = false;

  return (
    <html lang="en">
      <body className={`${unbounded.variable} font-body antialiased bg-[#F3F5F9]`}>


        {/* ===== PAGE CONTENT ===== */}
        <main>{children}</main>


        {/* Analytics (disabled by default) */}
        {analyticsEnabled && (
          <>
            <script
              dangerouslySetInnerHTML={{
                __html: `console.log("GA4 enabled: ${GA4_ID}")`,
              }}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `console.log("Meta Pixel enabled: ${META_PIXEL_ID}")`,
              }}
            />
          </>
        )}
      </body>
    </html>
  );
}
