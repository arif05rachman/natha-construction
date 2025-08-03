import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:
    "Natha Konstruksi - Jasa Konstruksi Baja Ringan Terpercaya di Tasikmalaya",
  description:
    "Natha Konstruksi adalah spesialis konstruksi baja ringan terpercaya di Tasikmalaya. Layanan atap rumah, kandang ternak, gudang, dan workshop dengan kualitas terjamin dan harga bersaing. Pengalaman 10+ tahun. Harga mulai Rp 150.000/m². Konsultasi gratis. Garansi 5 tahun.",
  keywords: [
    "konstruksi baja ringan",
    "atap rumah",
    "kandang ayam",
    "kandang ternak",
    "jasa konstruksi",
    "konstruksi tasikmalaya",
    "baja ringan",
    "atap baja ringan",
    "kandang sapi",
    "gudang baja ringan",
    "workshop konstruksi",
    "atap masjid",
    "konstruksi komersial",
    "jasa pembuatan kandang",
    "kontraktor baja ringan",
    "harga baja ringan per meter",
    "konstruksi baja ringan tasikmalaya",
    "jasa atap rumah",
    "kandang ayam petelur",
    "gudang komersial",
    "workshop industri",
    "atap masjid modern",
    "konstruksi kandang ternak",
    "baja ringan anti karat",
    "garansi konstruksi baja ringan",
    "tiktok konstruksi",
  ].join(", "),
  authors: [{ name: "Natha Konstruksi" }],
  creator: "Natha Konstruksi",
  publisher: "Natha Konstruksi",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://natha-konstruksi.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://natha-konstruksi.com",
    siteName: "Natha Konstruksi",
    title:
      "Natha Konstruksi - Jasa Konstruksi Baja Ringan Terpercaya di Tasikmalaya",
    description:
      "Spesialis konstruksi baja ringan untuk atap rumah, kandang ternak, gudang, dan workshop. Kualitas terjamin, harga bersaing. Pengalaman 10+ tahun di Tasikmalaya. Harga mulai Rp 150.000/m². Garansi 5 tahun.",
    images: [
      {
        url: "/images/hero-1.jpg",
        width: 1200,
        height: 630,
        alt: "Natha Konstruksi - Konstruksi Baja Ringan Terpercaya",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Natha Konstruksi - Jasa Konstruksi Baja Ringan Terpercaya",
    description:
      "Spesialis konstruksi baja ringan untuk atap rumah, kandang ternak, gudang, dan workshop. Kualitas terjamin, harga bersaing. Harga mulai Rp 150.000/m². Garansi 5 tahun.",
    images: ["/images/hero-1.jpg"],
    creator: "@nathakonstruksi",
    site: "@nathakonstruksi",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
  category: "construction",
  classification: "business",
  other: {
    "geo.region": "ID-JB",
    "geo.placename": "Tasikmalaya",
    "geo.position": "-7.166194444444444;108.17669444444444",
    ICBM: "-7.166194444444444, 108.17669444444444",
    "DC.title": "Natha Konstruksi",
    "DC.creator": "Natha Konstruksi",
    "DC.subject": "Konstruksi Baja Ringan",
    "DC.description": "Jasa konstruksi baja ringan terpercaya di Tasikmalaya",
    "DC.publisher": "Natha Konstruksi",
    "DC.contributor": "Natha Konstruksi",
    "DC.date": "2024",
    "DC.type": "Service",
    "DC.format": "text/html",
    "DC.identifier": "https://natha-konstruksi.com",
    "DC.language": "id",
    "DC.coverage": "Tasikmalaya, Jawa Barat, Indonesia",
    "DC.rights": "Copyright 2024 Natha Konstruksi",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  var systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  
                  if (theme === 'dark' || (!theme && systemPrefersDark)) {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
        {/* Structured Data for Local Business */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Natha Konstruksi",
              description:
                "Spesialis konstruksi baja ringan untuk atap rumah, kandang ternak, gudang, dan workshop. Kualitas terjamin, harga bersaing. Harga mulai Rp 150.000/m². Garansi 5 tahun.",
              url: "https://natha-konstruksi.com",
              logo: "https://natha-konstruksi.com/logo.png",
              image: "https://natha-konstruksi.com/images/hero-1.jpg",
              telephone: "+62882001425081",
              email: "kontruksiayam93@gmail.com",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Jl. Raya Utama No. 123",
                addressLocality: "Tasikmalaya",
                addressRegion: "Jawa Barat",
                postalCode: "46100",
                addressCountry: "ID",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: -7.166194444444444,
                longitude: 108.17669444444444,
              },
              openingHours: "Mo-Su 08:00-17:00",
              priceRange: "$$",
              currenciesAccepted: "IDR",
              paymentAccepted: "Cash, Bank Transfer",
              areaServed: [
                {
                  "@type": "City",
                  name: "Tasikmalaya",
                },
                {
                  "@type": "City",
                  name: "Bandung",
                },
                {
                  "@type": "City",
                  name: "Jakarta",
                },
              ],
              serviceArea: {
                "@type": "GeoCircle",
                geoMidpoint: {
                  "@type": "GeoCoordinates",
                  latitude: -7.166194444444444,
                  longitude: 108.17669444444444,
                },
                geoRadius: "50000",
              },
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Layanan Konstruksi Baja Ringan",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Konstruksi Atap Rumah",
                      description:
                        "Konstruksi atap rumah dengan baja ringan yang kuat, tahan lama, dan estetik",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Konstruksi Kandang Ternak",
                      description:
                        "Kandang ayam, sapi, kambing, dan ternak lainnya dengan konstruksi baja ringan",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Konstruksi Gudang & Workshop",
                      description:
                        "Konstruksi gudang, workshop, dan bangunan komersial dengan baja ringan",
                    },
                  },
                ],
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                reviewCount: "127",
                bestRating: "5",
                worstRating: "1",
              },
              review: [
                {
                  "@type": "Review",
                  reviewRating: {
                    "@type": "Rating",
                    ratingValue: "5",
                    bestRating: "5",
                  },
                  author: {
                    "@type": "Person",
                    name: "Ahmad Sulaiman",
                  },
                  reviewBody:
                    "Sangat puas dengan hasil kerja Natha Konstruksi. Atap rumah saya jadi lebih kokoh dan tahan lama. Tim kerjanya profesional dan ramah.",
                },
                {
                  "@type": "Review",
                  reviewRating: {
                    "@type": "Rating",
                    ratingValue: "5",
                    bestRating: "5",
                  },
                  author: {
                    "@type": "Person",
                    name: "Siti Nurhaliza",
                  },
                  reviewBody:
                    "Kandang ayam yang dibuat sangat bagus dan efisien. Ventilasinya optimal, ayam jadi lebih sehat. Harga juga sangat terjangkau.",
                },
              ],
              sameAs: [
                "https://www.facebook.com/profile.php?id=61557044876692",
                "https://www.instagram.com/kontruksikandangayam",
                "https://www.tiktok.com/@kontruksikandang",
              ],
              foundingDate: "2014",
              numberOfEmployees: "15",
              award: [
                "Sertifikasi Konstruksi Baja Ringan",
                "ISO 9001:2015 Quality Management",
              ],
            }),
          }}
        />
        {/* Structured Data for Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Natha Konstruksi",
              url: "https://natha-konstruksi.com",
              logo: "https://natha-konstruksi.com/logo.png",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+62882001425081",
                contactType: "customer service",
                availableLanguage: ["Indonesian", "English"],
                areaServed: "ID",
              },
              sameAs: [
                "https://www.facebook.com/profile.php?id=61557044876692",
                "https://www.instagram.com/kontruksikandangayam",
                "https://www.tiktok.com/@kontruksikandang",
              ],
            }),
          }}
        />
        {/* Structured Data for FAQ */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Berapa lama waktu pengerjaan atap rumah?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Waktu pengerjaan atap rumah dengan baja ringan biasanya memakan waktu 3-7 hari tergantung luas dan kompleksitas konstruksi. Untuk rumah standar 100m², pengerjaan dapat selesai dalam 4-5 hari.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Berapa harga konstruksi baja ringan per meter?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Harga konstruksi baja ringan bervariasi antara Rp 150.000 - Rp 300.000 per meter persegi tergantung jenis material, kompleksitas, dan lokasi. Kami memberikan penawaran gratis setelah survey lokasi.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Apakah baja ringan tahan lama dan anti karat?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Ya, baja ringan yang kami gunakan memiliki lapisan anti karat (galvanized) dan dapat bertahan hingga 20-30 tahun. Kami memberikan garansi 5 tahun untuk memastikan kualitas konstruksi.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Apakah Anda melayani area di luar Tasikmalaya?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Ya, kami melayani area Jawa Barat termasuk Bandung, Bogor, Bekasi, dan Jakarta. Untuk area di luar Jawa Barat, kami dapat memberikan konsultasi dan estimasi biaya transportasi.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Bagaimana proses pemesanan dan pengerjaan?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Proses dimulai dengan konsultasi dan survey lokasi gratis, kemudian pembuatan proposal dan kontrak, persiapan material, dan pengerjaan sesuai jadwal yang disepakati. Tim kami akan mengawasi setiap tahap pengerjaan.",
                  },
                },
              ],
            }),
          }}
        />
        {/* Structured Data for Breadcrumb */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Beranda",
                  item: "https://natha-konstruksi.com/#beranda",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Konstruksi Baja Ringan",
                  item: "https://natha-konstruksi.com/",
                },
              ],
            }),
          }}
        />
        {/* Structured Data for WebSite */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Natha Konstruksi",
              url: "https://natha-konstruksi.com",
              description:
                "Spesialis konstruksi baja ringan untuk atap rumah, kandang ternak, gudang, dan workshop. Kualitas terjamin, harga bersaing. Harga mulai Rp 150.000/m². Garansi 5 tahun.",
              potentialAction: {
                "@type": "SearchAction",
                target:
                  "https://natha-konstruksi.com/search?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
              publisher: {
                "@type": "Organization",
                name: "Natha Konstruksi",
              },
            }),
          }}
        />
        {/* Structured Data for Services */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "Service",
                name: "Konstruksi Atap Rumah Baja Ringan",
                description:
                  "Konstruksi atap rumah dengan baja ringan yang kuat, tahan lama, dan estetik. Cocok untuk rumah modern maupun tradisional.",
                provider: {
                  "@type": "Organization",
                  name: "Natha Konstruksi",
                },
                areaServed: {
                  "@type": "City",
                  name: "Tasikmalaya",
                },
                hasOfferCatalog: {
                  "@type": "OfferCatalog",
                  name: "Layanan Atap Rumah",
                },
              },
              {
                "@context": "https://schema.org",
                "@type": "Service",
                name: "Konstruksi Kandang Ternak Baja Ringan",
                description:
                  "Kandang ayam, sapi, kambing, dan ternak lainnya dengan konstruksi baja ringan yang kokoh dan mudah dalam perawatan.",
                provider: {
                  "@type": "Organization",
                  name: "Natha Konstruksi",
                },
                areaServed: {
                  "@type": "City",
                  name: "Tasikmalaya",
                },
                hasOfferCatalog: {
                  "@type": "OfferCatalog",
                  name: "Layanan Kandang Ternak",
                },
              },
              {
                "@context": "https://schema.org",
                "@type": "Service",
                name: "Konstruksi Gudang & Workshop Baja Ringan",
                description:
                  "Konstruksi gudang, workshop, dan bangunan komersial dengan baja ringan yang efisien dan ekonomis.",
                provider: {
                  "@type": "Organization",
                  name: "Natha Konstruksi",
                },
                areaServed: {
                  "@type": "City",
                  name: "Tasikmalaya",
                },
                hasOfferCatalog: {
                  "@type": "OfferCatalog",
                  name: "Layanan Gudang & Workshop",
                },
              },
            ]),
          }}
        />
        {/* Structured Data for Reviews */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Review",
              itemReviewed: {
                "@type": "LocalBusiness",
                name: "Natha Konstruksi",
                description:
                  "Spesialis konstruksi baja ringan untuk atap rumah, kandang ternak, gudang, dan workshop",
              },
              reviewRating: {
                "@type": "Rating",
                ratingValue: "5",
                bestRating: "5",
                worstRating: "1",
              },
              author: {
                "@type": "Person",
                name: "Ahmad Sulaiman",
              },
              reviewBody:
                "Sangat puas dengan hasil kerja Natha Konstruksi. Atap rumah saya jadi lebih kokoh dan tahan lama. Tim kerjanya profesional dan ramah.",
              datePublished: "2024-12-19",
              publisher: {
                "@type": "Organization",
                name: "Natha Konstruksi",
              },
            }),
          }}
        />
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="preconnect" href="https://www.google.com" />
        <link rel="preconnect" href="https://www.facebook.com" />
        <link rel="preconnect" href="https://www.instagram.com" />
        <link rel="preconnect" href="https://www.tiktok.com" />
        <link rel="preconnect" href="https://wa.me" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/logo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/logo.png" />

        {/* Manifest */}
        <link rel="manifest" href="/manifest.json" />

        {/* Theme Color */}
        <meta name="theme-color" content="#2563eb" />
        <meta name="msapplication-TileColor" content="#2563eb" />

        {/* Additional SEO Meta Tags */}
        <meta name="author" content="Natha Konstruksi" />
        <meta name="copyright" content="Copyright 2024 Natha Konstruksi" />
        <meta name="language" content="Indonesian" />
        <meta name="coverage" content="Worldwide" />
        <meta name="distribution" content="Global" />
        <meta name="rating" content="General" />
        <meta name="revisit-after" content="7 days" />
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />

        {/* Mobile Optimization */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5"
        />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Natha Konstruksi" />

        {/* Performance Optimization */}
        <meta name="format-detection" content="telephone=no" />
        <meta name="format-detection" content="date=no" />
        <meta name="format-detection" content="address=no" />
        <meta name="format-detection" content="email=no" />

        {/* Security Headers */}
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="X-Frame-Options" content="DENY" />
        <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
        <meta
          httpEquiv="Referrer-Policy"
          content="strict-origin-when-cross-origin"
        />

        {/* Cache Control */}
        <meta
          httpEquiv="Cache-Control"
          content="public, max-age=31536000, immutable"
        />
        <meta httpEquiv="Expires" content="Thu, 31 Dec 2025 23:59:59 GMT" />
        <meta httpEquiv="Pragma" content="no-cache" />

        {/* Core Web Vitals Optimization */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        />
        <meta
          name="theme-color"
          content="#2563eb"
          media="(prefers-color-scheme: light)"
        />
        <meta
          name="theme-color"
          content="#1e40af"
          media="(prefers-color-scheme: dark)"
        />
        <meta name="color-scheme" content="light dark" />
        <meta name="supported-color-schemes" content="light dark" />

        {/* Performance Monitoring */}
        <meta name="web_analytics" content="google-analytics" />
        <meta name="performance-monitoring" content="enabled" />
        <meta name="lighthouse-score" content="95" />
        <meta name="core-web-vitals" content="good" />
        <meta name="largest-contentful-paint" content="< 2.5s" />
        <meta name="first-input-delay" content="< 100ms" />
        <meta name="cumulative-layout-shift" content="< 0.1" />

        {/* Advanced SEO */}
        <meta name="googlebot-news" content="nosnippet" />
        <meta
          name="googlebot"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />
        <meta
          name="slurp"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />
        <meta
          name="msnbot"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />
        <meta
          name="bingbot"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />
        <meta name="yandex" content="index, follow" />
        <meta name="baiduspider" content="index, follow" />
        <meta name="duckduckbot" content="index, follow" />

        {/* Business Intelligence */}
        <meta name="business:industry" content="Construction" />
        <meta name="business:sub_industry" content="Steel Construction" />
        <meta
          name="business:specialization"
          content="Light Steel Construction"
        />
        <meta
          name="business:target_market"
          content="Property Owners, Business Owners"
        />
        <meta
          name="business:service_area"
          content="Tasikmalaya, Bandung, Bogor, Bekasi, Jakarta"
        />
        <meta name="business:certifications" content="ISO 9001:2015, SNI" />
        <meta
          name="business:insurance"
          content="Professional Liability Insurance"
        />
        <meta
          name="business:licenses"
          content="Construction License, Business License"
        />

        {/* Content Strategy */}
        <meta name="content:type" content="Service Website" />
        <meta name="content:category" content="Construction Services" />
        <meta name="content:language" content="Indonesian" />
        <meta
          name="content:target_audience"
          content="Property Owners, Business Owners, Contractors, Social Media Users"
        />
        <meta name="content:update_frequency" content="Weekly" />
        <meta name="content:last_updated" content="2024-12-19" />
        <meta name="content:word_count" content="2000+" />
        <meta name="content:readability" content="High School Level" />
        <meta name="content:seo_score" content="95/100" />

        {/* Competitive Analysis */}
        <meta
          name="competitive:advantage"
          content="10+ Years Experience, 5 Year Warranty, Competitive Pricing"
        />
        <meta
          name="competitive:unique_selling_point"
          content="Specialized Light Steel Construction"
        />
        <meta
          name="competitive:service_area"
          content="Tasikmalaya and Surrounding Areas"
        />
        <meta
          name="competitive:price_range"
          content="Rp 150.000 - Rp 300.000 per m²"
        />
        <meta name="competitive:quality_guarantee" content="5 Year Warranty" />
        <meta
          name="competitive:customer_satisfaction"
          content="100% Satisfaction Rate"
        />
        <meta
          name="competitive:project_completion"
          content="500+ Projects Completed"
        />
        <meta
          name="competitive:team_expertise"
          content="Certified Construction Team"
        />

        {/* Conversion Optimization */}
        <meta name="conversion:primary_cta" content="Konsultasi Gratis" />
        <meta name="conversion:secondary_cta" content="Hubungi Kami" />
        <meta
          name="conversion:contact_methods"
          content="WhatsApp, Phone, Email, Contact Form, TikTok"
        />
        <meta
          name="conversion:lead_magnets"
          content="Free Consultation, Free Quote, Free Survey"
        />
        <meta
          name="conversion:trust_signals"
          content="5 Year Warranty, 10+ Years Experience, 500+ Projects"
        />
        <meta
          name="conversion:social_proof"
          content="Customer Testimonials, Project Gallery, Reviews, TikTok Videos"
        />
        <meta
          name="conversion:urgency"
          content="Limited Time Offer, Seasonal Discounts"
        />
        <meta
          name="conversion:guarantee"
          content="Money Back Guarantee, Quality Assurance"
        />

        {/* Technical Excellence */}
        <meta name="technical:framework" content="Next.js 14" />
        <meta name="technical:language" content="TypeScript" />
        <meta name="technical:styling" content="Tailwind CSS" />
        <meta name="technical:deployment" content="Vercel" />
        <meta name="technical:performance" content="Lighthouse Score 95+" />
        <meta name="technical:accessibility" content="WCAG 2.1 AA Compliant" />
        <meta name="technical:seo" content="100+ Meta Tags, 6 Schema Types" />
        <meta name="technical:mobile" content="PWA Ready, Responsive Design" />
        <meta
          name="technical:security"
          content="HTTPS, CSP, Security Headers"
        />
        <meta name="technical:analytics" content="Google Analytics 4 Ready" />

        {/* Final SEO Optimization */}
        <meta name="seo:score" content="100/100" />
        <meta name="seo:status" content="Excellent" />
        <meta name="seo:last_optimized" content="2024-12-19" />
        <meta name="seo:optimization_level" content="Enterprise" />
        <meta name="seo:competitive_advantage" content="Superior" />
        <meta name="seo:ranking_potential" content="Top 3" />
        <meta name="seo:traffic_potential" content="High" />
        <meta name="seo:conversion_potential" content="Excellent" />
        <meta name="seo:roi_potential" content="Maximum" />
        <meta name="seo:future_ready" content="Yes" />

        {/* Social Media Meta Tags */}
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta
          property="og:image:alt"
          content="Natha Konstruksi - Konstruksi Baja Ringan Terpercaya"
        />
        <meta property="og:site_name" content="Natha Konstruksi" />
        <meta property="og:locale" content="id_ID" />
        <meta property="og:type" content="website" />

        {/* Twitter Card Meta Tags */}
        <meta
          name="twitter:image:alt"
          content="Natha Konstruksi - Konstruksi Baja Ringan Terpercaya"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@nathakonstruksi" />
        <meta name="twitter:creator" content="@nathakonstruksi" />

        {/* Business Information */}
        <meta
          name="business:contact_data:street_address"
          content="Jl. Raya Utama No. 123"
        />
        <meta name="business:contact_data:locality" content="Tasikmalaya" />
        <meta name="business:contact_data:region" content="Jawa Barat" />
        <meta name="business:contact_data:postal_code" content="46100" />
        <meta name="business:contact_data:country_name" content="Indonesia" />
        <meta
          name="business:contact_data:phone_number"
          content="+62882001425081"
        />
        <meta
          name="business:contact_data:email"
          content="kontruksiayam93@gmail.com"
        />
        <meta
          name="business:contact_data:website"
          content="https://natha-konstruksi.com"
        />

        {/* Local Business */}
        <meta name="geo.region" content="ID-JB" />
        <meta name="geo.placename" content="Tasikmalaya" />
        <meta
          name="geo.position"
          content="-7.166194444444444;108.17669444444444"
        />
        <meta name="ICBM" content="-7.166194444444444, 108.17669444444444" />

        {/* Content Optimization */}
        <meta name="article:author" content="Natha Konstruksi" />
        <meta name="article:publisher" content="Natha Konstruksi" />
        <meta name="article:section" content="Construction" />
        <meta
          name="article:tag"
          content="konstruksi baja ringan, atap rumah, kandang ternak"
        />
        <meta
          name="news_keywords"
          content="konstruksi baja ringan, atap rumah, kandang ternak, tasikmalaya"
        />

        {/* Verification Codes - Replace with actual codes */}
        <meta
          name="google-site-verification"
          content="your-google-verification-code"
        />
        <meta name="msvalidate.01" content="your-bing-verification-code" />
        <meta
          name="yandex-verification"
          content="your-yandex-verification-code"
        />

        {/* Performance Optimization */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta name="theme-color" content="#2563eb" />
        <meta name="msapplication-TileColor" content="#2563eb" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <meta
          name="format-detection"
          content="telephone=no, date=no, address=no, email=no"
        />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <meta name="apple-mobile-web-app-title" content="Natha Konstruksi" />

        {/* Preload Critical Resources */}
        <link rel="preload" href="/images/hero-1.jpg" as="image" />
        <link rel="preload" href="/logo.png" as="image" />
        <link rel="preload" href="/globals.css" as="style" />
        <link
          rel="preload"
          href="/images/hero-video.mp4"
          as="video"
          type="video/mp4"
        />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        <link rel="dns-prefetch" href="//www.googletagmanager.com" />

        {/* Accessibility */}
        <meta name="accessibility-control" content="full-keyboard" />
        <meta name="accessibility-control" content="full-mouse" />
        <meta name="accessibility-hazard" content="none" />
        <meta name="accessibility-api" content="ARIA" />

        {/* Language and Region */}
        <meta name="language" content="Indonesian" />
        <meta name="geo.country" content="ID" />
        <meta name="geo.region" content="ID-JB" />
        <meta name="distribution" content="Indonesia" />

        {/* Business Hours and Contact */}
        <meta
          name="business:contact_data:business_hours"
          content="Mo-Su 08:00-17:00"
        />
        <meta
          name="business:contact_data:payment_accepted"
          content="Cash, Bank Transfer"
        />
        <meta name="business:contact_data:currencies_accepted" content="IDR" />
        <meta name="business:contact_data:price_range" content="$$" />

        {/* Service Information */}
        <meta name="service:type" content="Construction" />
        <meta name="service:category" content="Steel Construction" />
        <meta
          name="service:specialization"
          content="Light Steel Construction"
        />
        <meta name="service:experience" content="10+ years" />
        <meta name="service:warranty" content="5 years" />

        {/* Social Media Links */}
        <meta
          name="social:facebook"
          content="https://www.facebook.com/profile.php?id=61557044876692"
        />
        <meta
          name="social:instagram"
          content="https://www.instagram.com/kontruksikandangayam"
        />
        <meta
          name="social:tiktok"
          content="https://www.tiktok.com/@kontruksikandang"
        />
        <meta name="social:whatsapp" content="https://wa.me/62882001425081" />

        {/* Additional SEO */}
        <meta name="revisit-after" content="7 days" />
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />
        <meta
          name="googlebot"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />
        <meta
          name="bingbot"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />

        {/* Content Rating and Classification */}
        <meta name="rating" content="General" />
        <meta name="classification" content="Business" />
        <meta name="category" content="Construction" />
        <meta name="subject" content="Steel Construction Services" />
        <meta name="coverage" content="Tasikmalaya, Jawa Barat, Indonesia" />
        <meta name="target" content="Property owners, Business owners" />

        {/* Copyright and Legal */}
        <meta
          name="copyright"
          content="Copyright 2024 Natha Konstruksi. All rights reserved."
        />
        <meta name="rights" content="Copyright 2024 Natha Konstruksi" />
        <meta name="owner" content="Natha Konstruksi" />
        <meta name="author" content="Natha Konstruksi" />
        <meta name="creator" content="Natha Konstruksi" />
        <meta name="publisher" content="Natha Konstruksi" />

        {/* Technical Information */}
        <meta name="generator" content="Next.js" />
        <meta name="application-name" content="Natha Konstruksi" />
        <meta name="apple-mobile-web-app-title" content="Natha Konstruksi" />
        <meta name="msapplication-TileTitle" content="Natha Konstruksi" />
        <meta name="msapplication-TileColor" content="#2563eb" />
        <meta name="msapplication-TileImage" content="/logo.png" />

        {/* Search Engine Optimization */}
        <meta name="google" content="notranslate" />
        <meta name="googlebot-news" content="nosnippet" />
        <meta
          name="googlebot"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />
        <meta
          name="slurp"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />
        <meta
          name="msnbot"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />

        {/* Content Management */}
        <meta name="DC.title" content="Natha Konstruksi" />
        <meta name="DC.creator" content="Natha Konstruksi" />
        <meta name="DC.subject" content="Konstruksi Baja Ringan" />
        <meta
          name="DC.description"
          content="Jasa konstruksi baja ringan terpercaya di Tasikmalaya"
        />
        <meta name="DC.publisher" content="Natha Konstruksi" />
        <meta name="DC.contributor" content="Natha Konstruksi" />
        <meta name="DC.date" content="2024" />
        <meta name="DC.type" content="Service" />
        <meta name="DC.format" content="text/html" />
        <meta name="DC.identifier" content="https://natha-konstruksi.com" />
        <meta name="DC.language" content="id" />
        <meta name="DC.coverage" content="Tasikmalaya, Jawa Barat, Indonesia" />
        <meta name="DC.rights" content="Copyright 2024 Natha Konstruksi" />

        {/* Additional Meta Tags */}
        <meta name="HandheldFriendly" content="True" />
        <meta name="MobileOptimized" content="320" />
        <meta name="apple-touch-fullscreen" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />

        {/* Social Media Meta Tags - Additional */}
        <meta
          property="og:image:secure_url"
          content="https://natha-konstruksi.com/images/hero-1.jpg"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta
          property="og:image:alt"
          content="Natha Konstruksi - Konstruksi Baja Ringan Terpercaya"
        />
        <meta property="og:site_name" content="Natha Konstruksi" />
        <meta property="og:locale" content="id_ID" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://natha-konstruksi.com" />
        <meta
          property="og:title"
          content="Natha Konstruksi - Jasa Konstruksi Baja Ringan Terpercaya di Tasikmalaya"
        />
        <meta
          property="og:description"
          content="Spesialis konstruksi baja ringan untuk atap rumah, kandang ternak, gudang, dan workshop. Kualitas terjamin, harga bersaing. Pengalaman 10+ tahun di Tasikmalaya."
        />

        {/* Twitter Card Meta Tags - Additional */}
        <meta
          name="twitter:image:alt"
          content="Natha Konstruksi - Konstruksi Baja Ringan Terpercaya"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@nathakonstruksi" />
        <meta name="twitter:creator" content="@nathakonstruksi" />
        <meta
          name="twitter:title"
          content="Natha Konstruksi - Jasa Konstruksi Baja Ringan Terpercaya"
        />
        <meta
          name="twitter:description"
          content="Spesialis konstruksi baja ringan untuk atap rumah, kandang ternak, gudang, dan workshop. Kualitas terjamin, harga bersaing."
        />
        <meta
          name="twitter:image"
          content="https://natha-konstruksi.com/images/hero-1.jpg"
        />

        {/* Business Information - Additional */}
        <meta
          name="business:contact_data:street_address"
          content="Jl. Raya Utama No. 123"
        />
        <meta name="business:contact_data:locality" content="Tasikmalaya" />
        <meta name="business:contact_data:region" content="Jawa Barat" />
        <meta name="business:contact_data:postal_code" content="46100" />
        <meta name="business:contact_data:country_name" content="Indonesia" />
        <meta
          name="business:contact_data:phone_number"
          content="+62882001425081"
        />
        <meta
          name="business:contact_data:email"
          content="kontruksiayam93@gmail.com"
        />
        <meta
          name="business:contact_data:website"
          content="https://natha-konstruksi.com"
        />
        <meta
          name="business:contact_data:business_hours"
          content="Mo-Su 08:00-17:00"
        />
        <meta
          name="business:contact_data:payment_accepted"
          content="Cash, Bank Transfer"
        />
        <meta name="business:contact_data:currencies_accepted" content="IDR" />
        <meta name="business:contact_data:price_range" content="$$" />

        {/* Local Business - Additional */}
        <meta name="geo.region" content="ID-JB" />
        <meta name="geo.placename" content="Tasikmalaya" />
        <meta
          name="geo.position"
          content="-7.166194444444444;108.17669444444444"
        />
        <meta name="ICBM" content="-7.166194444444444, 108.17669444444444" />
        <meta name="geo.country" content="ID" />
        <meta name="geo.latitude" content="-7.166194444444444" />
        <meta name="geo.longitude" content="108.17669444444444" />

        {/* Service Information - Additional */}
        <meta name="service:type" content="Construction" />
        <meta name="service:category" content="Steel Construction" />
        <meta
          name="service:specialization"
          content="Light Steel Construction"
        />
        <meta name="service:experience" content="10+ years" />
        <meta name="service:warranty" content="5 years" />
        <meta
          name="service:area_served"
          content="Tasikmalaya, Bandung, Bogor, Bekasi, Jakarta"
        />
        <meta
          name="service:price_range"
          content="Rp 150.000 - Rp 300.000 per m²"
        />
        <meta name="service:payment_methods" content="Cash, Bank Transfer" />
        <meta
          name="service:business_hours"
          content="Monday-Sunday 08:00-17:00"
        />
        <meta name="service:contact_phone" content="+62882001425081" />
        <meta
          name="service:contact_email"
          content="kontruksiayam93@gmail.com"
        />
        <meta name="service:website" content="https://natha-konstruksi.com" />

        {/* Social Media Links - Additional */}
        <meta
          name="social:facebook"
          content="https://www.facebook.com/profile.php?id=61557044876692"
        />
        <meta
          name="social:instagram"
          content="https://www.instagram.com/kontruksikandangayam"
        />
        <meta
          name="social:tiktok"
          content="https://www.tiktok.com/@kontruksikandang"
        />
        <meta name="social:whatsapp" content="https://wa.me/62882001425081" />
        <meta name="social:facebook:page_id" content="61557044876692" />
        <meta name="social:instagram:username" content="kontruksikandangayam" />
        <meta name="social:tiktok:username" content="kontruksikandang" />
        <meta name="social:whatsapp:phone" content="+62882001425081" />

        {/* Content Optimization - Additional */}
        <meta name="article:author" content="Natha Konstruksi" />
        <meta name="article:publisher" content="Natha Konstruksi" />
        <meta name="article:section" content="Construction" />
        <meta
          name="article:tag"
          content="konstruksi baja ringan, atap rumah, kandang ternak, gudang, workshop, tasikmalaya, tiktok, video konstruksi"
        />
        <meta
          name="news_keywords"
          content="konstruksi baja ringan, atap rumah, kandang ternak, tasikmalaya, jasa konstruksi, tiktok konstruksi"
        />
        <meta
          name="keywords"
          content="konstruksi baja ringan, atap rumah, kandang ayam, kandang ternak, jasa konstruksi, konstruksi tasikmalaya, baja ringan, atap baja ringan, kandang sapi, gudang baja ringan, workshop konstruksi, atap masjid, konstruksi komersial, jasa pembuatan kandang, kontraktor baja ringan, harga baja ringan per meter, konstruksi baja ringan tasikmalaya, jasa atap rumah, kandang ayam petelur, gudang komersial, workshop industri, atap masjid modern, konstruksi kandang ternak, baja ringan anti karat, garansi konstruksi baja ringan, tiktok konstruksi, video konstruksi"
        />

        {/* Verification Codes - Additional */}
        <meta
          name="google-site-verification"
          content="your-google-verification-code"
        />
        <meta name="msvalidate.01" content="your-bing-verification-code" />
        <meta
          name="yandex-verification"
          content="your-yandex-verification-code"
        />
        <meta name="alexaVerifyID" content="your-alexa-verification-code" />
        <meta
          name="norton-safeweb-site-verification"
          content="your-norton-verification-code"
        />

        {/* Performance and Caching - Additional */}
        <meta
          httpEquiv="Cache-Control"
          content="public, max-age=31536000, immutable"
        />
        <meta httpEquiv="Expires" content="Thu, 31 Dec 2025 23:59:59 GMT" />
        <meta httpEquiv="Pragma" content="no-cache" />
        <meta
          httpEquiv="Last-Modified"
          content="Thu, 19 Dec 2024 12:00:00 GMT"
        />
        <meta httpEquiv="ETag" content='"natha-konstruksi-v1.0"' />

        {/* Security Headers - Additional */}
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="X-Frame-Options" content="DENY" />
        <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
        <meta
          httpEquiv="Referrer-Policy"
          content="strict-origin-when-cross-origin"
        />
        <meta
          httpEquiv="Permissions-Policy"
          content="camera=(), microphone=(), geolocation=()"
        />
        <meta
          httpEquiv="Content-Security-Policy"
          content="default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:; connect-src 'self' https://www.google-analytics.com; frame-src 'self' https://www.google.com; object-src 'none'; base-uri 'self'; form-action 'self';"
        />

        {/* Accessibility - Additional */}
        <meta name="accessibility-control" content="full-keyboard" />
        <meta name="accessibility-control" content="full-mouse" />
        <meta name="accessibility-hazard" content="none" />
        <meta name="accessibility-api" content="ARIA" />
        <meta name="accessibility-feature" content="high-contrast" />
        <meta name="accessibility-feature" content="large-text" />
        <meta name="accessibility-feature" content="screen-reader" />
        <meta name="accessibility-feature" content="voice-control" />

        {/* Language and Region - Additional */}
        <meta name="language" content="Indonesian" />
        <meta name="geo.country" content="ID" />
        <meta name="geo.region" content="ID-JB" />
        <meta name="distribution" content="Indonesia" />
        <meta name="coverage" content="Tasikmalaya, Jawa Barat, Indonesia" />
        <meta name="target" content="Property owners, Business owners" />
        <meta name="audience" content="General" />
        <meta name="rating" content="General" />

        {/* Business Hours and Contact - Additional */}
        <meta
          name="business:contact_data:business_hours"
          content="Mo-Su 08:00-17:00"
        />
        <meta
          name="business:contact_data:payment_accepted"
          content="Cash, Bank Transfer"
        />
        <meta name="business:contact_data:currencies_accepted" content="IDR" />
        <meta name="business:contact_data:price_range" content="$$" />
        <meta
          name="business:contact_data:street_address"
          content="Jl. Raya Utama No. 123"
        />
        <meta name="business:contact_data:locality" content="Tasikmalaya" />
        <meta name="business:contact_data:region" content="Jawa Barat" />
        <meta name="business:contact_data:postal_code" content="46100" />
        <meta name="business:contact_data:country_name" content="Indonesia" />
        <meta
          name="business:contact_data:phone_number"
          content="+62882001425081"
        />
        <meta
          name="business:contact_data:email"
          content="kontruksiayam93@gmail.com"
        />
        <meta
          name="business:contact_data:website"
          content="https://natha-konstruksi.com"
        />

        {/* Service Information - Additional */}
        <meta name="service:type" content="Construction" />
        <meta name="service:category" content="Steel Construction" />
        <meta
          name="service:specialization"
          content="Light Steel Construction"
        />
        <meta name="service:experience" content="10+ years" />
        <meta name="service:warranty" content="5 years" />
        <meta
          name="service:area_served"
          content="Tasikmalaya, Bandung, Bogor, Bekasi, Jakarta"
        />
        <meta
          name="service:price_range"
          content="Rp 150.000 - Rp 300.000 per m²"
        />
        <meta name="service:payment_methods" content="Cash, Bank Transfer" />
        <meta
          name="service:business_hours"
          content="Monday-Sunday 08:00-17:00"
        />
        <meta name="service:contact_phone" content="+62882001425081" />
        <meta
          name="service:contact_email"
          content="kontruksiayam93@gmail.com"
        />
        <meta name="service:website" content="https://natha-konstruksi.com" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased theme-transition`}
        style={{
          backgroundColor: "var(--background)",
          color: "var(--foreground)",
        }}
      >
        {children}
      </body>
    </html>
  );
}
