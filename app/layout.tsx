import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vitor Costa | Portfólio",
  description: "Analista de Suporte de TI em Guarulhos, SP. Projetos de dados, BI e desenvolvimento web.",
  icons: { icon: "/favicon.svg" },
  robots: { index: false, follow: false },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body>{children}</body></html>;
}
