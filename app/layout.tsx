import "./globals.css";
import InteractiveBackground from "./components/interactivebackground";
import TopBar from "./components/TopBar";
import BottomNav from "./components/BottomNav";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-transparent text-white">
        <InteractiveBackground />
        <TopBar />
        <div className="page-shell pb-24">{children}</div>
        <BottomNav />
        <footer/>
      </body>
    </html>
  );
}