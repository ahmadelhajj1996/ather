import { useState, useEffect, useCallback, useMemo } from "react";
import { useTranslation } from "react-i18next";

import { Phone, MessageCircle, X, ChevronUp } from "lucide-react";

const CombinedComponent = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const { i18n } = useTranslation();
  const lang = i18n.language.slice(0, 2);

  // Memoized contact options
  const contactOptions = useMemo(
    () => [
      {
        id: "phone",
        icon: () => <Phone color="#030712" size={28} />,
        label: "Call Us",
        color: "bg-red-500 hover:bg-red-600",
        action: () => window.open("tel:+971500000000"),
      },
      {
        id: "whatsapp",
        icon: () => <MessageCircle color="#030712" size={28} />,
        label: "WhatsApp",
        color: "bg-red-500 hover:bg-red-600",
        action: () => window.open("https://wa.me/971500000000"),
      },
    ],
    [],
  );

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  // Scroll event handler
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Contact click handler
  const handleContactClick = useCallback(
    (action) => {
      action();
      if (isMobile) {
        setIsContactOpen(false);
      }
    },
    [isMobile],
  );

  const handleScrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const toggleContactMenu = useCallback(() => {
    setIsContactOpen((prev) => !prev);
  }, []);

  const closeContactMenu = useCallback(() => {
    setIsContactOpen(false);
  }, []);

  const langPositionClass = isMobile ? "top-2 end-3" : "top-4 end-4";

  const lLangPositionClass = isMobile ? "top-2 left-3" : "top-4 left-4";

  const buttonPositionClass = isMobile ? "bottom-2 end-3" : "bottom-8 end-4";

  const backToTopPositionClass = isMobile
    ? "bottom-2 start-3"
    : "bottom-8 start-4";

  const contactMenuPositionClass = isMobile
    ? "bottom-20 end-3"
    : "bottom-24 end-4";

  const handleLangChange = (lang) => {
    i18n.changeLanguage(lang);
    // Immediately update direction
    document.dir = lang === "ar" ? "rtl" : "ltr";
  };

  return (
    <>
      {lang == "en" ? (
        <button
          onClick={() => handleLangChange("ar")}
          className={`
            fixed z-40 flex items-center justify-center
            transition-all bg-red-500 hover:bg-red-700 duration-300 ease-in-out
            shadow-lg hover:shadow-xl rounded-full w-12 h-12 text-white text-sm  font-semibold
            ${langPositionClass}
            focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2
          `}
          aria-label="Scroll to top"
        >
          {"AR"}
        </button>
      ) : (
        <button
          onClick={() => handleLangChange("en")}
          className={`
            fixed z-40 flex items-center justify-center
            transition-all bg-red-500 hover:bg-red-700 duration-300 ease-in-out
            shadow-lg hover:shadow-xl rounded-full w-12 h-12 text-white text-sm  font-semibold
            ${lLangPositionClass}
            focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2
          `}
          aria-label="Scroll to top"
        >
          {"EN"}
        </button>
      )}

      {/* {showBackToTop && (
        <button
          onClick={handleScrollToTop}
          className={`
            fixed z-40 flex items-center justify-center
            transition-all bg-red-500 hover:bg-red-700 duration-300 ease-in-out
            shadow-lg hover:shadow-xl rounded-full w-12 h-12
            ${backToTopPositionClass}
            focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2
          `}
          aria-label="Scroll to top"
        >
          <ChevronUp color="white" className="text-white w-6 h-6" />
        </button>
      )} */}
    </>
  );
};

export default CombinedComponent;
