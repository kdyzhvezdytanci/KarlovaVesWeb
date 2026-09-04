import "./globals.css";

export const metadata = { title: "Karlovka", description: "An independent journal about design, culture, places, and considered living." };

export default function RootLayout({ children }) { return <html lang="en"><body>{children}</body></html>; }
