import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "策衡咨询 EquiStrat | 医疗AI产业合规增长引擎",
  description: "策衡咨询深耕医疗AI、创新器械与数字健康赛道，以专业内容、合规机制与产业资源，为品牌建立可持续的影响力与增长路径。",
  openGraph: { title: "策衡咨询 EquiStrat", description: "合规安全的医疗AI产业增长引擎", images: ["/og.png"] },
  twitter: { card: "summary_large_image", title: "策衡咨询 EquiStrat", description: "合规安全的医疗AI产业增长引擎", images: ["/og.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="zh-CN"><body>{children}</body></html>;
}
