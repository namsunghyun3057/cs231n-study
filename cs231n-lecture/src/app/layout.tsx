import type { Metadata } from "next";
import './globals.css'; 
import 'katex/dist/katex.min.css';

export const metadata: Metadata = {
  title: "CS231n Study Blog",
  description: "Next.js와 MDX로 만든 스터디 블로그",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body style={{ maxWidth: '800px', margin: '0 auto', padding: '20px', fontFamily: 'sans-serif' }}>
        <header style={{ borderBottom: '1px solid #eee', marginBottom: '40px', paddingBottom: '20px' }}>
          <h1>
            <a href="/" style={{ textDecoration: 'none', color: '#333' }}>📚 CS231n Study</a>
          </h1>
        </header>
        {children}
      </body>
    </html>
  );
}