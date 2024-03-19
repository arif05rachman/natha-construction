import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";

// Style
import "@/public/css/bootstrap.css";
import "@/public/css/bootstrap-responsive.css";
import "@/public/css/flexslider.css";
import "@/public/css/prettyPhoto.css";
import "@/public/css/camera.css";
import "@/public/css/jquery.bxslider.css";
import "@/public/css/style.css";
import "@/public/color/default.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Script from "next/script";

const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Natha Konstruksi",
  description: "Konstruksi Besi dan Baja",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={openSans.className}>
        <div id="wrapper">
          <Header />
          {children}
          <Footer />
        </div>
        <a href="#" className="scrollup">
          <i className="icon-angle-up icon-square icon-bglight icon-2x active"></i>
        </a>
        <Script src="js/jquery.js" />
        <Script src="js/jquery.easing.1.3.js" />
        <Script src="js/bootstrap.js" />

        <Script src="js/modernizr.custom.js" />
        <Script src="js/toucheffects.js" />
        <Script src="js/google-code-prettify/prettify.js" />
        <Script src="js/jquery.bxslider.min.js" />
        <Script src="js/camera/camera.js" />
        <Script src="js/camera/setting.js" />

        <Script src="js/jquery.prettyPhoto.js" />
        <Script src="js/portfolio/jquery.quicksand.js" />
        <Script src="js/portfolio/setting.js" />

        <Script src="js/jquery.flexslider.js" />
        <Script src="js/animate.js" />
        <Script src="js/inview.js" />

        <Script src="js/custom.js" />
      </body>
    </html>
  );
}
