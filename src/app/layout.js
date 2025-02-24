import "./globals.css";
import { auth } from "../../auth";
import Navbar from "./_ui/Navbar";
import Footer from "./_components/Footer";

import { Roboto } from "next/font/google";

const roboto_font = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  style: "normal",
});

export const metadata = {
  title: "Rancamaya",
  description: "Hotel | Golf | Estate",
};

export default function RootLayout({ children }) {
  // const session = await auth();
  return (
    <html lang="en">
      <body className={roboto_font.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

