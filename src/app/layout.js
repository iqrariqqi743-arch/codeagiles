import "./globals.css";

export const metadata = {
  title: "CodeAgiles | Software House & IT Training Center",
  description:
    "CodeAgiles provides software engineering, Laravel development, React and Next.js applications, ecommerce solutions, API integrations and practical IT training in PHP, OOP, Laravel, databases and full stack development.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: "0 50px" }}>{children}</body>
    </html>
  );
}
