import { Mitr, Averia_Gruesa_Libre } from "next/font/google";
import "./globals.css";
import SmoothScroll from "./components/SmoothScroll";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { App } from "antd";

const mitr = Mitr({
  variable: "--font-mitr",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
});

const averiaGruesaLibre = Averia_Gruesa_Libre({
  variable: "--font-averia",
  subsets: ["latin"],
  weight: "400",
});

export const metadata = {
  title: "Energize",
  description: "Platform analisis konsumsi energi berbasis AI",
  icons: {
    icon: "/logo-energize.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${mitr.variable} ${averiaGruesaLibre.variable}`}
    >
      <body>
        <SmoothScroll />
        <AntdRegistry>
          <App>{children}</App>
        </AntdRegistry>
      </body>
    </html>
  );
}
