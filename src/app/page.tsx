import Image from "next/image";
import {
  FaPhone,
  FaWhatsapp,
  FaEnvelope,
  FaMapMarkerAlt,
  FaCheckCircle,
  FaStar,
  FaUsers,
  FaTools,
  FaShieldAlt,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa";
import MobileMenu from "./components/MobileMenu";
import ThemeToggle from "./components/ThemeToggle";

export default function Home() {
  return (
    <main
      className="min-h-screen theme-transition"
      style={{ backgroundColor: "var(--background)" }}
    >
      {/* Skip to main content for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded-lg z-50"
      >
        Skip to main content
      </a>
      {/* Header */}
      <header
        className="backdrop-blur-md shadow-lg fixed w-full top-0 z-50 transition-all duration-300 theme-transition"
        style={{ backgroundColor: "var(--card)", opacity: 0.95 }}
        role="banner"
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center shadow-lg overflow-hidden">
                <Image
                  src="/logo.png"
                  alt="Natha Konstruksi Logo - Jasa Konstruksi Baja Ringan"
                  width={48}
                  height={48}
                  className="w-full h-full object-cover"
                  priority
                  quality={95}
                />
              </div>
              <div>
                <h1
                  className="text-xl md:text-2xl font-bold theme-transition"
                  style={{ color: "var(--foreground)" }}
                >
                  Natha Konstruksi
                </h1>
                <p
                  className="text-sm theme-transition hidden sm:block"
                  style={{ color: "var(--muted-foreground)" }}
                >
                  Solusi Konstruksi Terpercaya
                </p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav
              className="hidden lg:flex space-x-8"
              role="navigation"
              aria-label="Main navigation"
            >
              <a
                href="#beranda"
                className="theme-transition font-medium relative group"
                style={{ color: "var(--muted-foreground)" }}
              >
                Beranda
                <span
                  className="absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full"
                  style={{ backgroundColor: "var(--primary)" }}
                ></span>
              </a>
              <a
                href="#layanan"
                className="theme-transition font-medium relative group"
                style={{ color: "var(--muted-foreground)" }}
              >
                Layanan
                <span
                  className="absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full"
                  style={{ backgroundColor: "var(--primary)" }}
                ></span>
              </a>
              <a
                href="#galeri"
                className="theme-transition font-medium relative group"
                style={{ color: "var(--muted-foreground)" }}
              >
                Galeri
                <span
                  className="absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full"
                  style={{ backgroundColor: "var(--primary)" }}
                ></span>
              </a>
              <a
                href="#tentang"
                className="theme-transition font-medium relative group"
                style={{ color: "var(--muted-foreground)" }}
              >
                Tentang
                <span
                  className="absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full"
                  style={{ backgroundColor: "var(--primary)" }}
                ></span>
              </a>
              <a
                href="#testimoni"
                className="theme-transition font-medium relative group"
                style={{ color: "var(--muted-foreground)" }}
              >
                Testimoni
                <span
                  className="absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full"
                  style={{ backgroundColor: "var(--primary)" }}
                ></span>
              </a>
              <a
                href="#faq"
                className="theme-transition font-medium relative group"
                style={{ color: "var(--muted-foreground)" }}
              >
                FAQ
                <span
                  className="absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full"
                  style={{ backgroundColor: "var(--primary)" }}
                ></span>
              </a>
              <a
                href="#kontak"
                className="theme-transition font-medium relative group"
                style={{ color: "var(--muted-foreground)" }}
              >
                Kontak
                <span
                  className="absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full"
                  style={{ backgroundColor: "var(--primary)" }}
                ></span>
              </a>
            </nav>

            {/* Desktop Social Buttons & Theme Toggle */}
            <div className="hidden md:flex items-center space-x-3">
              <ThemeToggle />
              <a
                href="https://www.facebook.com/profile.php?id=61557044876692"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white p-3 rounded-xl hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <FaFacebook className="text-lg" />
              </a>
              <a
                href="https://www.instagram.com/kontruksikandangayam"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-3 rounded-xl hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <FaInstagram className="text-lg" />
              </a>
              <a
                href="https://wa.me/62882001425081"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white px-4 py-3 rounded-xl hover:bg-green-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center space-x-2"
              >
                <FaWhatsapp />
                <span className="hidden lg:inline">WhatsApp</span>
              </a>
            </div>

            {/* Mobile Menu Component */}
            <div className="lg:hidden flex items-center space-x-2">
              <ThemeToggle />
              <MobileMenu />
            </div>
          </div>
        </div>
      </header>

      {/* Breadcrumb Navigation */}
      <nav
        className="pt-20 pb-4 px-4"
        aria-label="Breadcrumb"
        style={{ backgroundColor: "var(--background)" }}
      >
        <div className="container mx-auto">
          <ol className="flex items-center space-x-2 text-sm">
            <li>
              <a
                href="#beranda"
                className="theme-transition hover:text-blue-600"
                style={{ color: "var(--muted-foreground)" }}
              >
                Beranda
              </a>
            </li>
            <li className="text-gray-400">/</li>
            <li
              className="theme-transition"
              style={{ color: "var(--foreground)" }}
            >
              Konstruksi Baja Ringan
            </li>
          </ol>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="beranda"
        className="relative pt-20 min-h-screen flex items-center justify-center overflow-hidden"
        aria-labelledby="hero-heading"
      >
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
            preload="metadata"
            poster="/images/hero-1.jpg"
          >
            <source src="/images/hero-video.mp4" type="video/mp4" />
            <source src="/images/hero-video.webm" type="video/webm" />
            {/* Fallback for browsers that don't support video */}
            <img
              src="/images/hero-1.jpg"
              alt="Natha Konstruksi Hero Image"
              className="w-full h-full object-cover"
            />
          </video>
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/60 dark:bg-black/70"></div>
        </div>

        <div
          id="main-content"
          className="container mx-auto px-4 py-20 relative z-10"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1
                id="hero-heading"
                className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
              >
                Konstruksi Baja Ringan
                <span className="text-blue-300 dark:text-blue-200 block">
                  Terpercaya & Berkualitas
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-200 dark:text-slate-100 mb-8 max-w-2xl mx-auto lg:mx-0">
                Spesialis konstruksi baja ringan untuk{" "}
                <a
                  href="#layanan"
                  className="text-blue-300 hover:text-blue-200 underline"
                >
                  atap rumah
                </a>
                ,{" "}
                <a
                  href="#layanan"
                  className="text-blue-300 hover:text-blue-200 underline"
                >
                  kandang ternak
                </a>
                , dan berbagai kebutuhan konstruksi lainnya. Kualitas terjamin
                dengan harga yang bersaing. Lihat{" "}
                <a
                  href="#galeri"
                  className="text-blue-300 hover:text-blue-200 underline"
                >
                  portfolio pekerjaan kami
                </a>
                .
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a
                  href="#kontak"
                  className="bg-blue-600 text-white px-8 py-4 rounded-xl hover:bg-blue-700 transition-all duration-300 text-center font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Konsultasi Gratis
                </a>
                <a
                  href="#layanan"
                  className="border-2 border-white text-white px-8 py-4 rounded-xl hover:bg-white hover:text-blue-600 transition-all duration-300 text-center font-semibold text-lg backdrop-blur-sm"
                >
                  Lihat Layanan
                </a>
              </div>

              {/* Social Media Buttons */}
              <div className="flex justify-center lg:justify-start space-x-4 mt-6">
                <a
                  href="https://www.tiktok.com/@kontruksikandang"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-black text-white px-4 py-2 rounded-xl hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center space-x-2"
                >
                  <span className="text-lg">🎵</span>
                  <span className="font-semibold text-sm">TikTok</span>
                </a>
                <a
                  href="https://www.instagram.com/kontruksikandangayam"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-xl hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center space-x-2"
                >
                  <FaInstagram className="text-lg" />
                  <span className="font-semibold text-sm">Instagram</span>
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/10 dark:bg-slate-900/30 backdrop-blur-md rounded-3xl p-8 border border-white/20 dark:border-slate-700/30">
                <h3 className="text-2xl font-bold text-white mb-6">
                  Mengapa Memilih Kami?
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <FaCheckCircle className="text-green-300 dark:text-green-200 text-xl" />
                    <span className="text-white text-lg">
                      Pengalaman 10+ tahun
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <FaCheckCircle className="text-green-300 dark:text-green-200 text-xl" />
                    <span className="text-white text-lg">Garansi 5 tahun</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <FaCheckCircle className="text-green-300 dark:text-green-200 text-xl" />
                    <span className="text-white text-lg">Harga bersaing</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <FaCheckCircle className="text-green-300 dark:text-green-200 text-xl" />
                    <span className="text-white text-lg">Pengerjaan cepat</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
          <div className="animate-bounce">
            <FaMapMarkerAlt className="text-white text-2xl" />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        id="layanan"
        className="py-20 theme-transition"
        style={{
          background:
            "linear-gradient(135deg, var(--muted) 0%, var(--secondary) 100%)",
        }}
        aria-labelledby="services-heading"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2
              id="services-heading"
              className="text-4xl md:text-5xl font-bold mb-4 theme-transition"
              style={{ color: "var(--foreground)" }}
            >
              Layanan Kami
            </h2>
            <p
              className="text-xl max-w-3xl mx-auto theme-transition"
              style={{ color: "var(--muted-foreground)" }}
            >
              Berbagai solusi konstruksi baja ringan untuk kebutuhan Anda
            </p>
          </div>

          <div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            role="list"
            aria-label="Daftar layanan konstruksi"
          >
            <article
              className="rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group theme-transition"
              style={{ backgroundColor: "var(--card)" }}
              role="listitem"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="/images/atap-rumah.jpg"
                  alt="Atap Rumah - Konstruksi baja ringan untuk atap rumah modern"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  quality={90}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center">
                    <FaTools className="text-white text-2xl" />
                  </div>
                </div>
              </div>
              <div className="p-8">
                <h3
                  className="text-2xl font-bold mb-4 theme-transition"
                  style={{ color: "var(--foreground)" }}
                >
                  Atap Rumah
                </h3>
                <p
                  className="mb-6 leading-relaxed theme-transition"
                  style={{ color: "var(--muted-foreground)" }}
                >
                  Konstruksi atap rumah dengan baja ringan yang kuat, tahan
                  lama, dan estetik. Cocok untuk rumah modern maupun
                  tradisional.
                </p>
                <ul
                  className="space-y-3 theme-transition"
                  style={{ color: "var(--muted-foreground)" }}
                >
                  <li className="flex items-center space-x-3">
                    <FaCheckCircle className="text-green-500 text-lg flex-shrink-0" />
                    <span>Anti karat & tahan lama</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <FaCheckCircle className="text-green-500 text-lg flex-shrink-0" />
                    <span>Pemasangan cepat</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <FaCheckCircle className="text-green-500 text-lg flex-shrink-0" />
                    <span>Harga ekonomis</span>
                  </li>
                </ul>
              </div>
            </article>

            <div
              className="rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group theme-transition"
              style={{ backgroundColor: "var(--card)" }}
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="/images/kandang-ayam.jpg"
                  alt="Kandang Ayam - Konstruksi kandang ternak dengan baja ringan"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  quality={85}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <div className="w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center">
                    <FaUsers className="text-white text-2xl" />
                  </div>
                </div>
              </div>
              <div className="p-8">
                <h3
                  className="text-2xl font-bold mb-4 theme-transition"
                  style={{ color: "var(--foreground)" }}
                >
                  Kandang Ternak
                </h3>
                <p
                  className="mb-6 leading-relaxed theme-transition"
                  style={{ color: "var(--muted-foreground)" }}
                >
                  Kandang ayam, sapi, kambing, dan ternak lainnya dengan
                  konstruksi baja ringan yang kokoh dan mudah dalam perawatan.
                </p>
                <ul
                  className="space-y-3 theme-transition"
                  style={{ color: "var(--muted-foreground)" }}
                >
                  <li className="flex items-center space-x-3">
                    <FaCheckCircle className="text-green-500 text-lg flex-shrink-0" />
                    <span>Ventilasi optimal</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <FaCheckCircle className="text-green-500 text-lg flex-shrink-0" />
                    <span>Mudah dibersihkan</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <FaCheckCircle className="text-green-500 text-lg flex-shrink-0" />
                    <span>Kapasitas besar</span>
                  </li>
                </ul>
              </div>
            </div>

            <article
              className="rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group theme-transition"
              style={{ backgroundColor: "var(--card)" }}
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="/images/gudang.jpg"
                  alt="Gudang & Workshop - Konstruksi bangunan komersial dengan baja ringan"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  quality={85}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <div className="w-16 h-16 bg-orange-600 rounded-2xl flex items-center justify-center">
                    <FaShieldAlt className="text-white text-2xl" />
                  </div>
                </div>
              </div>
              <div className="p-8">
                <h3
                  className="text-2xl font-bold mb-4 theme-transition"
                  style={{ color: "var(--foreground)" }}
                >
                  Gudang & Workshop
                </h3>
                <p
                  className="mb-6 leading-relaxed theme-transition"
                  style={{ color: "var(--muted-foreground)" }}
                >
                  Konstruksi gudang, workshop, dan bangunan komersial dengan
                  baja ringan yang efisien dan ekonomis.
                </p>
                <ul
                  className="space-y-3 theme-transition"
                  style={{ color: "var(--muted-foreground)" }}
                >
                  <li className="flex items-center space-x-3">
                    <FaCheckCircle className="text-green-500 text-lg flex-shrink-0" />
                    <span>Luas fleksibel</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <FaCheckCircle className="text-green-500 text-lg flex-shrink-0" />
                    <span>Konstruksi kuat</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <FaCheckCircle className="text-green-500 text-lg flex-shrink-0" />
                    <span>Biaya rendah</span>
                  </li>
                </ul>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section
        id="galeri"
        className="py-20 theme-transition"
        style={{
          background:
            "linear-gradient(135deg, var(--muted) 0%, var(--secondary) 100%)",
        }}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2
              className="text-4xl md:text-5xl font-bold mb-4 theme-transition"
              style={{ color: "var(--foreground)" }}
            >
              Galeri Pekerjaan
            </h2>
            <p
              className="text-xl max-w-3xl mx-auto theme-transition"
              style={{ color: "var(--muted-foreground)" }}
            >
              Portfolio hasil pekerjaan konstruksi baja ringan kami
            </p>

            {/* Social Media Buttons */}
            <div className="flex justify-center space-x-4 mt-8">
              <a
                href="https://www.tiktok.com/@kontruksikandang"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black text-white px-6 py-3 rounded-2xl hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center space-x-2"
              >
                <span className="text-2xl">🎵</span>
                <span className="font-semibold">TikTok</span>
              </a>
              <a
                href="https://www.instagram.com/kontruksikandangayam"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-2xl hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center space-x-2"
              >
                <FaInstagram className="text-xl" />
                <span className="font-semibold">Instagram</span>
              </a>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Atap Rumah */}
            <div
              className="rounded-3xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2 group theme-transition"
              style={{ backgroundColor: "var(--card)" }}
            >
              <div className="relative h-80 overflow-hidden">
                <Image
                  src="/images/atap-rumah.jpg"
                  alt="Atap Rumah Modern - Konstruksi baja ringan untuk atap rumah"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  quality={80}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div
                    className="backdrop-blur-sm rounded-2xl p-4 theme-transition"
                    style={{ backgroundColor: "rgba(var(--card-rgb), 0.9)" }}
                  >
                    <h3
                      className="text-xl font-bold mb-2 theme-transition"
                      style={{ color: "var(--foreground)" }}
                    >
                      Atap Rumah Modern
                    </h3>
                    <p
                      className="text-sm mb-3 theme-transition"
                      style={{ color: "var(--muted-foreground)" }}
                    >
                      Konstruksi atap rumah dengan baja ringan yang kuat dan
                      tahan lama.
                    </p>
                    <div className="flex items-center justify-between">
                      <span
                        className="text-sm theme-transition"
                        style={{ color: "var(--muted-foreground)" }}
                      >
                        Tasikmalaya
                      </span>
                      <span
                        className="text-sm font-semibold theme-transition"
                        style={{ color: "var(--primary)" }}
                      >
                        2024
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Kandang Ayam */}
            <div
              className="rounded-3xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2 group theme-transition"
              style={{ backgroundColor: "var(--card)" }}
            >
              <div className="relative h-80 overflow-hidden">
                <Image
                  src="/images/kandang-ayam.jpg"
                  alt="Kandang Ayam Petelur - Konstruksi kandang ternak dengan baja ringan"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  quality={80}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div
                    className="backdrop-blur-sm rounded-2xl p-4 theme-transition"
                    style={{ backgroundColor: "rgba(var(--card-rgb), 0.9)" }}
                  >
                    <h3
                      className="text-xl font-bold mb-2 theme-transition"
                      style={{ color: "var(--foreground)" }}
                    >
                      Kandang Ayam Petelur
                    </h3>
                    <p
                      className="text-sm mb-3 theme-transition"
                      style={{ color: "var(--muted-foreground)" }}
                    >
                      Kandang ayam dengan ventilasi optimal dan kapasitas besar.
                    </p>
                    <div className="flex items-center justify-between">
                      <span
                        className="text-sm theme-transition"
                        style={{ color: "var(--muted-foreground)" }}
                      >
                        Bogor
                      </span>
                      <span
                        className="text-sm font-semibold theme-transition"
                        style={{ color: "var(--primary)" }}
                      >
                        2024
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Gudang */}
            <div
              className="rounded-3xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2 group theme-transition"
              style={{ backgroundColor: "var(--card)" }}
            >
              <div className="relative h-80 overflow-hidden">
                <Image
                  src="/images/gudang.jpg"
                  alt="Gudang Komersial - Konstruksi bangunan komersial dengan baja ringan"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  quality={80}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div
                    className="backdrop-blur-sm rounded-2xl p-4 theme-transition"
                    style={{ backgroundColor: "rgba(var(--card-rgb), 0.9)" }}
                  >
                    <h3
                      className="text-xl font-bold mb-2 theme-transition"
                      style={{ color: "var(--foreground)" }}
                    >
                      Gudang Komersial
                    </h3>
                    <p
                      className="text-sm mb-3 theme-transition"
                      style={{ color: "var(--muted-foreground)" }}
                    >
                      Gudang dengan konstruksi baja ringan yang efisien dan
                      ekonomis.
                    </p>
                    <div className="flex items-center justify-between">
                      <span
                        className="text-sm theme-transition"
                        style={{ color: "var(--muted-foreground)" }}
                      >
                        Bekasi
                      </span>
                      <span
                        className="text-sm font-semibold theme-transition"
                        style={{ color: "var(--primary)" }}
                      >
                        2024
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Kandang Sapi */}
            <div
              className="rounded-3xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2 group theme-transition"
              style={{ backgroundColor: "var(--card)" }}
            >
              <div className="relative h-80 overflow-hidden">
                <Image
                  src="/images/kandang-sapi.jpg"
                  alt="Kandang Sapi Potong - Konstruksi kandang ternak dengan baja ringan"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  quality={80}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div
                    className="backdrop-blur-sm rounded-2xl p-4 theme-transition"
                    style={{ backgroundColor: "rgba(var(--card-rgb), 0.9)" }}
                  >
                    <h3
                      className="text-xl font-bold mb-2 theme-transition"
                      style={{ color: "var(--foreground)" }}
                    >
                      Kandang Sapi Potong
                    </h3>
                    <p
                      className="text-sm mb-3 theme-transition"
                      style={{ color: "var(--muted-foreground)" }}
                    >
                      Kandang sapi dengan konstruksi kuat dan mudah dalam
                      perawatan.
                    </p>
                    <div className="flex items-center justify-between">
                      <span
                        className="text-sm theme-transition"
                        style={{ color: "var(--muted-foreground)" }}
                      >
                        Cianjur
                      </span>
                      <span
                        className="text-sm font-semibold theme-transition"
                        style={{ color: "var(--primary)" }}
                      >
                        2023
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Workshop */}
            <div
              className="rounded-3xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2 group theme-transition"
              style={{ backgroundColor: "var(--card)" }}
            >
              <div className="relative h-80 overflow-hidden">
                <Image
                  src="/images/workshop.jpg"
                  alt="Workshop Industri - Konstruksi workshop dengan baja ringan"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  quality={80}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div
                    className="backdrop-blur-sm rounded-2xl p-4 theme-transition"
                    style={{ backgroundColor: "rgba(var(--card-rgb), 0.9)" }}
                  >
                    <h3
                      className="text-xl font-bold mb-2 theme-transition"
                      style={{ color: "var(--foreground)" }}
                    >
                      Workshop Industri
                    </h3>
                    <p
                      className="text-sm mb-3 theme-transition"
                      style={{ color: "var(--muted-foreground)" }}
                    >
                      Workshop dengan konstruksi baja ringan yang optimal untuk
                      kegiatan industri.
                    </p>
                    <div className="flex items-center justify-between">
                      <span
                        className="text-sm theme-transition"
                        style={{ color: "var(--muted-foreground)" }}
                      >
                        Tangerang
                      </span>
                      <span
                        className="text-sm font-semibold theme-transition"
                        style={{ color: "var(--primary)" }}
                      >
                        2023
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Atap Masjid */}
            <div
              className="rounded-3xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2 group theme-transition"
              style={{ backgroundColor: "var(--card)" }}
            >
              <div className="relative h-80 overflow-hidden">
                <Image
                  src="/images/atap-masjid.jpg"
                  alt="Atap Masjid Modern - Konstruksi atap masjid dengan baja ringan"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  quality={80}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div
                    className="backdrop-blur-sm rounded-2xl p-4 theme-transition"
                    style={{ backgroundColor: "rgba(var(--card-rgb), 0.9)" }}
                  >
                    <h3
                      className="text-xl font-bold mb-2 theme-transition"
                      style={{ color: "var(--foreground)" }}
                    >
                      Atap Masjid Modern
                    </h3>
                    <p
                      className="text-sm mb-3 theme-transition"
                      style={{ color: "var(--muted-foreground)" }}
                    >
                      Konstruksi atap masjid dengan baja ringan yang kokoh dan
                      estetik.
                    </p>
                    <div className="flex items-center justify-between">
                      <span
                        className="text-sm theme-transition"
                        style={{ color: "var(--muted-foreground)" }}
                      >
                        Depok
                      </span>
                      <span
                        className="text-sm font-semibold theme-transition"
                        style={{ color: "var(--primary)" }}
                      >
                        2023
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-16">
            <a
              href="https://www.instagram.com/kontruksikandangayam"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-10 py-5 rounded-2xl hover:from-purple-600 hover:to-pink-600 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <FaInstagram className="text-2xl" />
              <span>Lihat Lebih Banyak di Instagram</span>
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="tentang"
        className="py-20 theme-transition"
        style={{ backgroundColor: "var(--muted)" }}
      >
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2
                className="text-4xl font-bold mb-6 theme-transition"
                style={{ color: "var(--foreground)" }}
              >
                Tentang Natha Konstruksi
              </h2>
              <p
                className="text-lg mb-6 theme-transition"
                style={{ color: "var(--muted-foreground)" }}
              >
                Natha Konstruksi adalah perusahaan konstruksi yang telah
                berpengalaman lebih dari 10 tahun dalam bidang konstruksi baja
                ringan. Kami berkomitmen memberikan layanan terbaik dengan
                kualitas yang terjamin dan harga yang bersaing.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div
                    className="text-3xl font-bold mb-2 theme-transition"
                    style={{ color: "var(--primary)" }}
                  >
                    500+
                  </div>
                  <div
                    className="theme-transition"
                    style={{ color: "var(--muted-foreground)" }}
                  >
                    Proyek Selesai
                  </div>
                </div>
                <div className="text-center">
                  <div
                    className="text-3xl font-bold mb-2 theme-transition"
                    style={{ color: "var(--primary)" }}
                  >
                    10+
                  </div>
                  <div
                    className="theme-transition"
                    style={{ color: "var(--muted-foreground)" }}
                  >
                    Tahun Pengalaman
                  </div>
                </div>
                <div className="text-center">
                  <div
                    className="text-3xl font-bold mb-2 theme-transition"
                    style={{ color: "var(--primary)" }}
                  >
                    100%
                  </div>
                  <div
                    className="theme-transition"
                    style={{ color: "var(--muted-foreground)" }}
                  >
                    Kepuasan Klien
                  </div>
                </div>
                <div className="text-center">
                  <div
                    className="text-3xl font-bold mb-2 theme-transition"
                    style={{ color: "var(--primary)" }}
                  >
                    24/7
                  </div>
                  <div
                    className="theme-transition"
                    style={{ color: "var(--muted-foreground)" }}
                  >
                    Layanan Support
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-blue-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Keunggulan Kami</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <FaCheckCircle className="text-green-400 mt-1" />
                  <div>
                    <h4 className="font-semibold">Tim Ahli</h4>
                    <p className="text-blue-100">
                      Tim teknisi berpengalaman dan bersertifikat
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <FaCheckCircle className="text-green-400 mt-1" />
                  <div>
                    <h4 className="font-semibold">Material Berkualitas</h4>
                    <p className="text-blue-100">
                      Menggunakan material premium dengan garansi
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <FaCheckCircle className="text-green-400 mt-1" />
                  <div>
                    <h4 className="font-semibold">Pengerjaan Cepat</h4>
                    <p className="text-blue-100">
                      Waktu pengerjaan yang efisien tanpa mengorbankan kualitas
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <FaCheckCircle className="text-green-400 mt-1" />
                  <div>
                    <h4 className="font-semibold">Harga Transparan</h4>
                    <p className="text-blue-100">
                      Penawaran harga yang jelas tanpa biaya tersembunyi
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        id="testimoni"
        className="py-20 theme-transition"
        style={{
          background:
            "linear-gradient(135deg, var(--card) 0%, var(--muted) 100%)",
        }}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2
              className="text-4xl md:text-5xl font-bold mb-4 theme-transition"
              style={{ color: "var(--foreground)" }}
            >
              Testimoni Klien
            </h2>
            <p
              className="text-xl max-w-3xl mx-auto theme-transition"
              style={{ color: "var(--muted-foreground)" }}
            >
              Apa kata klien kami tentang layanan Natha Konstruksi
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div
              className="p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 theme-transition"
              style={{
                backgroundColor: "var(--card)",
                border: "1px solid var(--border)",
              }}
            >
              <div className="flex items-center mb-6">
                <div className="flex text-yellow-400 text-xl">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
              </div>
              <p
                className="mb-8 leading-relaxed text-lg theme-transition"
                style={{ color: "var(--muted-foreground)" }}
              >
                &ldquo;Sangat puas dengan hasil kerja Natha Konstruksi. Atap
                rumah saya jadi lebih kokoh dan tahan lama. Tim kerjanya
                profesional dan ramah.&rdquo;
              </p>
              <div className="flex items-center">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center text-white font-bold text-xl mr-4 shadow-lg">
                  A
                </div>
                <div>
                  <div
                    className="font-semibold text-lg theme-transition"
                    style={{ color: "var(--foreground)" }}
                  >
                    Ahmad Sulaiman
                  </div>
                  <div
                    className="theme-transition"
                    style={{ color: "var(--muted-foreground)" }}
                  >
                    Pemilik Rumah
                  </div>
                </div>
              </div>
            </div>

            <div
              className="p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 theme-transition"
              style={{
                backgroundColor: "var(--card)",
                border: "1px solid var(--border)",
              }}
            >
              <div className="flex items-center mb-6">
                <div className="flex text-yellow-400 text-xl">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
              </div>
              <p
                className="mb-8 leading-relaxed text-lg theme-transition"
                style={{ color: "var(--muted-foreground)" }}
              >
                &ldquo;Kandang ayam yang dibuat sangat bagus dan efisien.
                Ventilasinya optimal, ayam jadi lebih sehat. Harga juga sangat
                terjangkau.&rdquo;
              </p>
              <div className="flex items-center">
                <div className="w-14 h-14 bg-gradient-to-br from-green-600 to-green-700 rounded-2xl flex items-center justify-center text-white font-bold text-xl mr-4 shadow-lg">
                  S
                </div>
                <div>
                  <div
                    className="font-semibold text-lg theme-transition"
                    style={{ color: "var(--foreground)" }}
                  >
                    Siti Nurhaliza
                  </div>
                  <div
                    className="theme-transition"
                    style={{ color: "var(--muted-foreground)" }}
                  >
                    Peternak Ayam
                  </div>
                </div>
              </div>
            </div>

            <div
              className="p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 theme-transition md:col-span-2 lg:col-span-1"
              style={{
                backgroundColor: "var(--card)",
                border: "1px solid var(--border)",
              }}
            >
              <div className="flex items-center mb-6">
                <div className="flex text-yellow-400 text-xl">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
              </div>
              <p
                className="mb-8 leading-relaxed text-lg theme-transition"
                style={{ color: "var(--muted-foreground)" }}
              >
                &ldquo;Gudang workshop yang dibuat sangat memuaskan.
                Konstruksinya kuat, luasannya optimal, dan pengerjaannya cepat.
                Recommended!&rdquo;
              </p>
              <div className="flex items-center">
                <div className="w-14 h-14 bg-gradient-to-br from-orange-600 to-orange-700 rounded-2xl flex items-center justify-center text-white font-bold text-xl mr-4 shadow-lg">
                  B
                </div>
                <div>
                  <div
                    className="font-semibold text-lg theme-transition"
                    style={{ color: "var(--foreground)" }}
                  >
                    Budi Santoso
                  </div>
                  <div
                    className="theme-transition"
                    style={{ color: "var(--muted-foreground)" }}
                  >
                    Pemilik Workshop
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl p-8 md:p-12 text-white">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                Siap Memulai Proyek Konstruksi Anda?
              </h3>
              <p className="text-xl mb-8 text-blue-100">
                Dapatkan penawaran terbaik dan konsultasi gratis untuk proyek
                konstruksi baja ringan Anda
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://wa.me/62882001425081?text=Halo%20Natha%20Konstruksi%2C%20Saya%20ingin%20konsultasi%20untuk%20proyek%20konstruksi%20baja%20ringan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 text-white px-8 py-4 rounded-xl hover:bg-green-600 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center space-x-2"
                >
                  <FaWhatsapp className="text-2xl" />
                  <span>Konsultasi WhatsApp</span>
                </a>
                <a
                  href="#kontak"
                  className="border-2 border-white text-white px-8 py-4 rounded-xl hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold text-lg"
                >
                  Hubungi Kami
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section
        id="faq"
        className="py-20 theme-transition"
        style={{ backgroundColor: "var(--muted)" }}
        aria-labelledby="faq-heading"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2
              id="faq-heading"
              className="text-4xl md:text-5xl font-bold mb-4 theme-transition"
              style={{ color: "var(--foreground)" }}
            >
              Pertanyaan Umum
            </h2>
            <p
              className="text-xl max-w-3xl mx-auto theme-transition"
              style={{ color: "var(--muted-foreground)" }}
            >
              Jawaban untuk pertanyaan yang sering diajukan tentang layanan
              konstruksi baja ringan kami
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <details
              className="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              style={{ border: "1px solid var(--border)" }}
            >
              <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                <h3
                  className="text-xl font-semibold theme-transition"
                  style={{ color: "var(--foreground)" }}
                >
                  Berapa lama waktu pengerjaan atap rumah?
                </h3>
                <FaCheckCircle className="text-blue-600 text-xl group-open:rotate-180 transition-transform duration-300" />
              </summary>
              <div className="px-6 pb-6">
                <p
                  className="text-lg leading-relaxed theme-transition"
                  style={{ color: "var(--muted-foreground)" }}
                >
                  Waktu pengerjaan atap rumah dengan baja ringan biasanya
                  memakan waktu 3-7 hari tergantung luas dan kompleksitas
                  konstruksi. Untuk rumah standar 100m², pengerjaan dapat
                  selesai dalam 4-5 hari.
                </p>
              </div>
            </details>

            <details
              className="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              style={{ border: "1px solid var(--border)" }}
            >
              <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                <h3
                  className="text-xl font-semibold theme-transition"
                  style={{ color: "var(--foreground)" }}
                >
                  Berapa harga konstruksi baja ringan per meter?
                </h3>
                <FaCheckCircle className="text-blue-600 text-xl group-open:rotate-180 transition-transform duration-300" />
              </summary>
              <div className="px-6 pb-6">
                <p
                  className="text-lg leading-relaxed theme-transition"
                  style={{ color: "var(--muted-foreground)" }}
                >
                  Harga konstruksi baja ringan bervariasi antara Rp 150.000 - Rp
                  300.000 per meter persegi tergantung jenis material,
                  kompleksitas, dan lokasi. Kami memberikan penawaran gratis
                  setelah survey lokasi.
                </p>
              </div>
            </details>

            <details
              className="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              style={{ border: "1px solid var(--border)" }}
            >
              <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                <h3
                  className="text-xl font-semibold theme-transition"
                  style={{ color: "var(--foreground)" }}
                >
                  Apakah baja ringan tahan lama dan anti karat?
                </h3>
                <FaCheckCircle className="text-blue-600 text-xl group-open:rotate-180 transition-transform duration-300" />
              </summary>
              <div className="px-6 pb-6">
                <p
                  className="text-lg leading-relaxed theme-transition"
                  style={{ color: "var(--muted-foreground)" }}
                >
                  Ya, baja ringan yang kami gunakan memiliki lapisan anti karat
                  (galvanized) dan dapat bertahan hingga 20-30 tahun. Kami
                  memberikan garansi 5 tahun untuk memastikan kualitas
                  konstruksi.
                </p>
              </div>
            </details>

            <details
              className="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              style={{ border: "1px solid var(--border)" }}
            >
              <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                <h3
                  className="text-xl font-semibold theme-transition"
                  style={{ color: "var(--foreground)" }}
                >
                  Apakah Anda melayani area di luar Tasikmalaya?
                </h3>
                <FaCheckCircle className="text-blue-600 text-xl group-open:rotate-180 transition-transform duration-300" />
              </summary>
              <div className="px-6 pb-6">
                <p
                  className="text-lg leading-relaxed theme-transition"
                  style={{ color: "var(--muted-foreground)" }}
                >
                  Ya, kami melayani area Jawa Barat termasuk Bandung, Bogor,
                  Bekasi, dan Jakarta. Untuk area di luar Jawa Barat, kami dapat
                  memberikan konsultasi dan estimasi biaya transportasi.
                </p>
              </div>
            </details>

            <details
              className="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              style={{ border: "1px solid var(--border)" }}
            >
              <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                <h3
                  className="text-xl font-semibold theme-transition"
                  style={{ color: "var(--foreground)" }}
                >
                  Bagaimana proses pemesanan dan pengerjaan?
                </h3>
                <FaCheckCircle className="text-blue-600 text-xl group-open:rotate-180 transition-transform duration-300" />
              </summary>
              <div className="px-6 pb-6">
                <p
                  className="text-lg leading-relaxed theme-transition"
                  style={{ color: "var(--muted-foreground)" }}
                >
                  Proses dimulai dengan konsultasi dan survey lokasi gratis,
                  kemudian pembuatan proposal dan kontrak, persiapan material,
                  dan pengerjaan sesuai jadwal yang disepakati. Tim kami akan
                  mengawasi setiap tahap pengerjaan.
                </p>
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="kontak"
        className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 relative overflow-hidden"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Header Section */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-6">
              <FaMapMarkerAlt className="text-blue-300 text-xl" />
              <span className="text-blue-200 font-medium">Hubungi Kami</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Mari Diskusikan
              <span className="block text-blue-300">Proyek Anda</span>
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Dapatkan penawaran terbaik untuk proyek konstruksi Anda. Tim kami
              siap membantu mewujudkan impian konstruksi Anda dengan kualitas
              terjamin.
            </p>
          </div>

          {/* Contact Info & Map Section */}
          <div className="grid lg:grid-cols-2 gap-16 mb-20">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="text-center lg:text-left">
                <h3 className="text-3xl font-bold text-white mb-4">
                  Informasi Kontak
                </h3>
                <p className="text-blue-200 text-lg">
                  Hubungi kami melalui berbagai saluran komunikasi
                </p>
              </div>

              <div className="grid gap-6">
                {/* Phone */}
                <div className="group bg-white/5 backdrop-blur-sm rounded-3xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <FaPhone className="text-white text-2xl" />
                    </div>
                    <div className="flex-1">
                      <div className="text-white font-bold text-xl mb-1">
                        Telepon
                      </div>
                      <div className="text-blue-200 text-lg">
                        +62 882-0014-2508
                      </div>
                    </div>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="group bg-white/5 backdrop-blur-sm rounded-3xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <FaWhatsapp className="text-white text-2xl" />
                    </div>
                    <div className="flex-1">
                      <div className="text-white font-bold text-xl mb-1">
                        WhatsApp
                      </div>
                      <div className="text-blue-200 text-lg">
                        +62 882-0014-2508
                      </div>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="group bg-white/5 backdrop-blur-sm rounded-3xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <FaEnvelope className="text-white text-2xl" />
                    </div>
                    <div className="flex-1">
                      <div className="text-white font-bold text-xl mb-1">
                        Email
                      </div>
                      <a
                        href="mailto:kontruksiayam93@gmail.com"
                        className="text-blue-200 hover:text-white transition-colors text-lg"
                      >
                        kontruksiayam93@gmail.com
                      </a>
                    </div>
                  </div>
                </div>

                {/* Address */}
                <div className="group bg-white/5 backdrop-blur-sm rounded-3xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <FaMapMarkerAlt className="text-white text-2xl" />
                    </div>
                    <div className="flex-1">
                      <div className="text-white font-bold text-xl mb-1">
                        Alamat
                      </div>
                      <div className="text-blue-200 text-lg">
                        Jl. Raya Utama No. 123, Tasikmalaya
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media & Maps Button */}
              <div className="space-y-6">
                <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                  <a
                    href="https://www.facebook.com/profile.php?id=61557044876692"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 text-white p-4 rounded-2xl hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  >
                    <FaFacebook className="text-2xl" />
                  </a>
                  <a
                    href="https://www.instagram.com/kontruksikandangayam"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-4 rounded-2xl hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  >
                    <FaInstagram className="text-2xl" />
                  </a>
                  <a
                    href="https://www.tiktok.com/@kontruksikandang"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-black text-white p-4 rounded-2xl hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  >
                    <span className="text-2xl">🎵</span>
                  </a>
                  <a
                    href="https://wa.me/62882001425081?text=Halo%20Natha%20Konstruksi%2C%20Saya%20ingin%20mengenai%20layanan%20Anda"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-500 text-white px-6 py-4 rounded-2xl hover:bg-green-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center space-x-2"
                  >
                    <FaWhatsapp className="text-xl" />
                    <span className="font-semibold">WhatsApp</span>
                  </a>
                </div>

                <div className="text-center lg:text-left">
                  <a
                    href="https://www.google.com/maps?q=-7.166194444444444,108.17669444444444"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-3 bg-white text-blue-600 px-8 py-4 rounded-2xl hover:bg-gray-100 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  >
                    <FaMapMarkerAlt />
                    <span>Buka di Google Maps</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Map Section */}
            <div className="space-y-6">
              <div className="text-center lg:text-left">
                <h3 className="text-3xl font-bold text-white mb-4">
                  Lokasi Kami
                </h3>
                <p className="text-blue-200 text-lg">
                  Kunjungi workshop kami di Tasikmalaya
                </p>
              </div>

              <div className="bg-white rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
                <div className="p-4 bg-gradient-to-r from-blue-600 to-blue-700">
                  <div className="flex items-center space-x-2 text-white">
                    <FaMapMarkerAlt className="text-xl" />
                    <span className="font-semibold">
                      Natha Konstruksi - Tasikmalaya
                    </span>
                  </div>
                </div>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3160.1234567890123!2d108.17669444444444!3d-7.166194444444444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zN8KwMDknNTguMyJTIDEwOMKwMTAnMzYuMSJF!5e0!3m2!1sen!2sid!4v1234567890123"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Lokasi Natha Konstruksi"
                  className="w-full"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Kirim Pesan
              </h3>
              <p className="text-blue-200 text-lg">
                Beritahu kami tentang proyek konstruksi Anda
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl">
              <form className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <label className="block text-white font-bold mb-3 text-lg">
                      Nama Lengkap *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent text-white placeholder-blue-200 text-lg transition-all duration-300 backdrop-blur-sm"
                      placeholder="Masukkan nama lengkap"
                    />
                  </div>
                  <div>
                    <label className="block text-white font-bold mb-3 text-lg">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent text-white placeholder-blue-200 text-lg transition-all duration-300 backdrop-blur-sm"
                      placeholder="Masukkan email"
                    />
                  </div>
                  <div>
                    <label className="block text-white font-bold mb-3 text-lg">
                      Telepon *
                    </label>
                    <input
                      type="tel"
                      required
                      className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent text-white placeholder-blue-200 text-lg transition-all duration-300 backdrop-blur-sm"
                      placeholder="Masukkan nomor telepon"
                    />
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <label className="block text-white font-bold mb-3 text-lg">
                      Jenis Layanan
                    </label>
                    <select className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent text-white text-lg transition-all duration-300 backdrop-blur-sm">
                      <option value="" className="text-gray-800">
                        Pilih jenis layanan
                      </option>
                      <option value="atap-rumah" className="text-gray-800">
                        Atap Rumah
                      </option>
                      <option value="kandang-ternak" className="text-gray-800">
                        Kandang Ternak
                      </option>
                      <option value="gudang" className="text-gray-800">
                        Gudang & Workshop
                      </option>
                      <option value="komersial" className="text-gray-800">
                        Konstruksi Komersial
                      </option>
                      <option value="masjid" className="text-gray-800">
                        Atap Masjid
                      </option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-white font-bold mb-3 text-lg">
                      Pesan *
                    </label>
                    <textarea
                      rows={8}
                      required
                      className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent text-white placeholder-blue-200 text-lg transition-all duration-300 resize-none backdrop-blur-sm"
                      placeholder="Jelaskan detail kebutuhan konstruksi Anda..."
                    ></textarea>
                  </div>
                </div>

                <div className="md:col-span-2">
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-5 rounded-2xl hover:from-blue-600 hover:to-blue-700 transition-all duration-300 font-bold text-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  >
                    <span className="flex items-center justify-center space-x-3">
                      <FaEnvelope className="text-2xl" />
                      <span>Kirim Pesan Sekarang</span>
                    </span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center shadow-lg overflow-hidden">
                  <Image
                    src="/logo.png"
                    alt="Natha Konstruksi Logo - Jasa Konstruksi Baja Ringan"
                    width={48}
                    height={48}
                    className="w-full h-full object-cover"
                    priority
                    quality={95}
                  />
                </div>
                <div>
                  <h3 className="font-bold text-xl">Natha Konstruksi</h3>
                  <p className="text-sm text-gray-400">
                    Solusi Konstruksi Terpercaya
                  </p>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Spesialis konstruksi baja ringan dengan kualitas terjamin dan
                harga bersaing. Berpengalaman lebih dari 10 tahun dalam bidang
                konstruksi.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-6 text-lg">Layanan</h4>
              <ul className="space-y-3 text-gray-400">
                <li className="hover:text-white transition-colors cursor-pointer">
                  Atap Rumah
                </li>
                <li className="hover:text-white transition-colors cursor-pointer">
                  Kandang Ternak
                </li>
                <li className="hover:text-white transition-colors cursor-pointer">
                  Gudang & Workshop
                </li>
                <li className="hover:text-white transition-colors cursor-pointer">
                  Konstruksi Komersial
                </li>
                <li className="hover:text-white transition-colors cursor-pointer">
                  Atap Masjid
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-6 text-lg">Perusahaan</h4>
              <ul className="space-y-3 text-gray-400">
                <li className="hover:text-white transition-colors cursor-pointer">
                  Tentang Kami
                </li>
                <li className="hover:text-white transition-colors cursor-pointer">
                  Tim Ahli
                </li>
                <li className="hover:text-white transition-colors cursor-pointer">
                  Proyek
                </li>
                <li className="hover:text-white transition-colors cursor-pointer">
                  Testimoni
                </li>
                <li className="hover:text-white transition-colors cursor-pointer">
                  Galeri
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-6 text-lg">Kontak</h4>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-center space-x-2">
                  <FaPhone className="text-blue-400" />
                  <span>+62 882-0014-2508</span>
                </li>
                <li className="flex items-center space-x-2">
                  <FaEnvelope className="text-blue-400" />
                  <a
                    href="mailto:kontruksiayam93@gmail.com"
                    className="hover:text-white transition-colors"
                  >
                    kontruksiayam93@gmail.com
                  </a>
                </li>
                <li className="flex items-center space-x-2">
                  <FaFacebook className="text-blue-400" />
                  <a
                    href="https://www.facebook.com/profile.php?id=61557044876692"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    Facebook
                  </a>
                </li>
                <li className="flex items-center space-x-2">
                  <FaInstagram className="text-blue-400" />
                  <a
                    href="https://www.instagram.com/kontruksikandangayam"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    @kontruksikandangayam
                  </a>
                </li>
                <li className="flex items-center space-x-2">
                  <FaMapMarkerAlt className="text-blue-400" />
                  <span>Tasikmalaya</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Natha Konstruksi. All rights reserved.</p>
            <p className="mt-2 text-sm">Dibuat dengan ❤️ untuk Indonesia</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
