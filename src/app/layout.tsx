import Link from "next/link";
export const metadata = {
  title: "Next.js",
  description: "Generated by Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div>
          <Link href="/">Home</Link>
          <Link href="/blog">Blogs</Link>
        </div>
        {children}
      </body>
    </html>
  );
}
