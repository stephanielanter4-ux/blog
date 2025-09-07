import "./globals.css";

export const metadata = {
  title: "Bought It • Loved It • Linked It",
  description: "Curated finds for recovery, beauty, style, and wellness—tested and loved.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
