import "./globals.css";
import SiteHeader from "./SiteHeader";

export const metadata = {
  title: "Karlovka",
  description:
    "An independent journal about the history, culture, nature, and people of Karlova Ves.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <SiteHeader />
        {children}
      </body>
    </html>
  );
}
