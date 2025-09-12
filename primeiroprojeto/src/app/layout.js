import Header from "@/components/Header";
import "./globals.css";

export const metadata = {
  title: "Front-End - Victor Augusto Mauricio Pereira",
  description: "Portfolio showcasing my front-end development skills and projects.",
  charset: 'UTF-8',
  author: 'Victor Augusto Mauricio Pereira',
  keywords: 'Next.js, React, JavaScript, HTML, CSS',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        <Header></Header>
        {children}
      </body>
    </html>
  );
}
