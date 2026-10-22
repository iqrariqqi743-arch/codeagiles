import "./globals.css";
export const metadata = {
  title: "CodeAgiles | Software Engineering & IT Training",
  description:
    "CodeAgiles builds modern web applications, eCommerce platforms and custom software, while helping aspiring developers learn practical engineering skills.",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
