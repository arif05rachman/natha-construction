"use client";

import { useState, useEffect, useRef } from "react";
import {
  FaPhone,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa";

export default function MobileMenu() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const hamburgerRef = useRef<HTMLButtonElement>(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const scrollToSection = (sectionId: string) => {
    closeMobileMenu();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  // Handle click outside to close mobile menu
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isMobileMenuOpen &&
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node) &&
        hamburgerRef.current &&
        !hamburgerRef.current.contains(event.target as Node)
      ) {
        closeMobileMenu();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={toggleMobileMenu}
        className="lg:hidden p-2 sm:p-3 rounded-xl theme-transition focus:outline-none focus:ring-2 focus:ring-blue-500 z-50"
        style={{ color: "var(--muted-foreground)" }}
        aria-label="Toggle mobile menu"
        ref={hamburgerRef}
      >
        <svg
          className="w-5 h-5 sm:w-6 sm:h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {isMobileMenuOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={closeMobileMenu}
          ></div>

          {/* Menu Panel */}
          <div
            ref={mobileMenuRef}
            className="absolute top-0 right-0 w-[85vw] sm:w-80 h-screen shadow-2xl flex flex-col theme-transition"
            style={{ backgroundColor: "var(--card)" }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Menu Header - Fixed */}
            <div
              className="flex items-center justify-between p-4 sm:p-6 flex-shrink-0 theme-transition"
              style={{
                backgroundColor: "var(--card)",
                borderBottom: "1px solid var(--border)",
              }}
            >
              <div className="flex items-center space-x-2 sm:space-x-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg sm:rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-sm sm:text-lg">
                    N
                  </span>
                </div>
                <div>
                  <h3
                    className="font-bold text-sm sm:text-base theme-transition"
                    style={{ color: "var(--foreground)" }}
                  >
                    Natha Konstruksi
                  </h3>
                  <p
                    className="text-xs sm:text-sm theme-transition"
                    style={{ color: "var(--muted-foreground)" }}
                  >
                    Menu Navigasi
                  </p>
                </div>
              </div>
              <button
                onClick={closeMobileMenu}
                className="p-2 rounded-lg theme-transition"
                style={{ color: "var(--muted-foreground)" }}
                aria-label="Close menu"
              >
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto min-h-0">
              {/* Navigation Links */}
              <div className="p-4 sm:p-6">
                <nav className="space-y-2 sm:space-y-3">
                  <a
                    href="#beranda"
                    onClick={() => scrollToSection("beranda")}
                    className="flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 rounded-xl sm:rounded-2xl transition-all duration-300 group theme-transition"
                    style={{ backgroundColor: "var(--card)" }}
                  >
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg sm:rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <span className="text-white font-bold text-sm sm:text-lg">
                        🏠
                      </span>
                    </div>
                    <span
                      className="font-semibold text-sm sm:text-lg theme-transition"
                      style={{ color: "var(--foreground)" }}
                    >
                      Beranda
                    </span>
                  </a>

                  <a
                    href="#layanan"
                    onClick={() => scrollToSection("layanan")}
                    className="flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 rounded-xl sm:rounded-2xl transition-all duration-300 group theme-transition"
                    style={{ backgroundColor: "var(--card)" }}
                  >
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-lg sm:rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <span className="text-white font-bold text-sm sm:text-lg">
                        🔧
                      </span>
                    </div>
                    <span
                      className="font-semibold text-sm sm:text-lg theme-transition"
                      style={{ color: "var(--foreground)" }}
                    >
                      Layanan
                    </span>
                  </a>

                  <a
                    href="#galeri"
                    onClick={() => scrollToSection("galeri")}
                    className="flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 rounded-xl sm:rounded-2xl transition-all duration-300 group theme-transition"
                    style={{ backgroundColor: "var(--card)" }}
                  >
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg sm:rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <span className="text-white font-bold text-sm sm:text-lg">
                        📸
                      </span>
                    </div>
                    <span
                      className="font-semibold text-sm sm:text-lg theme-transition"
                      style={{ color: "var(--foreground)" }}
                    >
                      Galeri
                    </span>
                  </a>

                  <a
                    href="#tentang"
                    onClick={() => scrollToSection("tentang")}
                    className="flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 rounded-xl sm:rounded-2xl transition-all duration-300 group theme-transition"
                    style={{ backgroundColor: "var(--card)" }}
                  >
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg sm:rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <span className="text-white font-bold text-sm sm:text-lg">
                        ℹ️
                      </span>
                    </div>
                    <span
                      className="font-semibold text-sm sm:text-lg theme-transition"
                      style={{ color: "var(--foreground)" }}
                    >
                      Tentang
                    </span>
                  </a>

                  <a
                    href="#testimoni"
                    onClick={() => scrollToSection("testimoni")}
                    className="flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 rounded-xl sm:rounded-2xl transition-all duration-300 group theme-transition"
                    style={{ backgroundColor: "var(--card)" }}
                  >
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-lg sm:rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <span className="text-white font-bold text-sm sm:text-lg">
                        ⭐
                      </span>
                    </div>
                    <span
                      className="font-semibold text-sm sm:text-lg theme-transition"
                      style={{ color: "var(--foreground)" }}
                    >
                      Testimoni
                    </span>
                  </a>

                  <a
                    href="#kontak"
                    onClick={() => scrollToSection("kontak")}
                    className="flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 rounded-xl sm:rounded-2xl transition-all duration-300 group theme-transition"
                    style={{ backgroundColor: "var(--card)" }}
                  >
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-red-500 to-red-600 rounded-lg sm:rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <span className="text-white font-bold text-sm sm:text-lg">
                        📞
                      </span>
                    </div>
                    <span
                      className="font-semibold text-sm sm:text-lg theme-transition"
                      style={{ color: "var(--foreground)" }}
                    >
                      Kontak
                    </span>
                  </a>
                </nav>
              </div>

              {/* Social Media Section */}
              <div
                className="p-4 sm:p-6 theme-transition"
                style={{
                  backgroundColor: "var(--card)",
                  borderTop: "1px solid var(--border)",
                }}
              >
                <h4
                  className="font-bold text-sm sm:text-lg mb-3 sm:mb-4 theme-transition"
                  style={{ color: "var(--foreground)" }}
                >
                  Hubungi Kami
                </h4>
                <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-4 sm:mb-6">
                  <a
                    href="https://www.facebook.com/profile.php?id=61557044876692"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 text-white p-3 sm:p-4 rounded-xl sm:rounded-2xl hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center"
                  >
                    <FaFacebook className="text-lg sm:text-2xl" />
                  </a>
                  <a
                    href="https://www.instagram.com/kontruksikandangayam"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-3 sm:p-4 rounded-xl sm:rounded-2xl hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center"
                  >
                    <FaInstagram className="text-lg sm:text-2xl" />
                  </a>
                  <a
                    href="https://wa.me/62882001425081?text=Halo%20Natha%20Konstruksi%2C%20Saya%20ingin%20mengenai%20layanan%20Anda"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-500 text-white p-3 sm:p-4 rounded-xl sm:rounded-2xl hover:bg-green-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center"
                  >
                    <FaWhatsapp className="text-lg sm:text-2xl" />
                  </a>
                </div>

                {/* CTA Button */}
                <a
                  href="#layanan"
                  onClick={() => scrollToSection("layanan")}
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 sm:py-4 rounded-xl sm:rounded-2xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 font-bold text-sm sm:text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center space-x-2"
                >
                  <span>🔧</span>
                  <span>Lihat Layanan</span>
                </a>
              </div>

              {/* Contact Info */}
              <div
                className="p-4 sm:p-6 theme-transition"
                style={{
                  backgroundColor: "var(--muted)",
                  borderTop: "1px solid var(--border)",
                }}
              >
                <div className="space-y-2 sm:space-y-3">
                  <div className="flex items-center space-x-2 sm:space-x-3">
                    <FaPhone className="text-blue-600 text-sm sm:text-lg" />
                    <span
                      className="text-xs sm:text-sm theme-transition"
                      style={{ color: "var(--muted-foreground)" }}
                    >
                      +62 882-0014-2508
                    </span>
                  </div>
                  <div className="flex items-center space-x-2 sm:space-x-3">
                    <FaMapMarkerAlt className="text-red-600 text-sm sm:text-lg" />
                    <span
                      className="text-xs sm:text-sm theme-transition"
                      style={{ color: "var(--muted-foreground)" }}
                    >
                      Tasikmalaya
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
