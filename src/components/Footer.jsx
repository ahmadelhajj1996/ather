import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t, i18n } = useTranslation();

  const isRTL = i18n.dir() === "rtl";

  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  // ============================================================
  // Reveal animation when footer enters viewport
  // ============================================================

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(section);
        }
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px",
      },
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <footer
      ref={sectionRef}
      dir={isRTL ? "rtl" : "ltr"}
      className="
        relative
        isolate
        overflow-hidden
        border-t
        border-slate-200
        bg-white
        px-6
        py-8
        sm:px-8
        sm:py-10
        lg:px-12
      "
    >
      {/* ========================================================
          Background Red Glow
      ======================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -right-32
          -top-32
          -z-10
          h-72
          w-72
          rounded-full
          bg-red-500/10
          blur-3xl
          motion-safe:animate-[footerGlow_9s_ease-in-out_infinite_alternate]
          motion-reduce:animate-none
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -bottom-40
          -left-32
          -z-10
          h-80
          w-80
          rounded-full
          bg-red-500/5
          blur-3xl
          motion-safe:animate-[footerGlowReverse_11s_ease-in-out_infinite_alternate]
          motion-reduce:animate-none
        "
      />

      {/* ========================================================
          Decorative Grid
      ======================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          -z-10
          opacity-[0.025]
          [background-image:linear-gradient(to_right,#ef4444_1px,transparent_1px),linear-gradient(to_bottom,#ef4444_1px,transparent_1px)]
          [background-size:48px_48px]
        "
      />

      {/* ========================================================
          Main Container
      ======================================================== */}

      <div
        className={`
          mx-auto
          w-full
          max-w-6xl
          transition-all
          duration-1000
          ease-out
          ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-6 opacity-0"
          }
        `}
      >
        {/* ======================================================
            Top Decorative Line
        ====================================================== */}

        <div className="mb-6 flex items-center justify-center">
          <span className="h-px w-12 bg-red-500/20 sm:w-20" />

          <span
            className="
              mx-3
              h-2
              w-2
              rounded-full
              bg-red-500
            "
          />

          <span className="h-px w-12 bg-red-500/20 sm:w-20" />
        </div>

        {/* ======================================================
            Copyright
        ====================================================== */}

        <div className="text-center">
          <p
            dir={isRTL ? "rtl" : "ltr"}
            className="
              text-sm
              leading-7
              tracking-wide
              text-slate-500
              sm:text-base
            "
          >
            <span>{t("footer.rights")}</span>

            <span
              className="
                mx-1
                font-semibold
                text-slate-900
                transition-colors
                duration-300
                hover:text-red-500
              "
            >
              {t("footer.companyName")}
            </span>

            <span
              dir="ltr"
              className="ms-1 inline-block text-slate-500"
            >
              © 2026
            </span>
          </p>
        </div>

        {/* ======================================================
            Bottom Accent
        ====================================================== */}

        <div className="mt-5 flex items-center justify-center gap-2">
          <span
            className={`
              h-1
              rounded-full
              bg-red-500
              transition-all
              duration-1000
              delay-300
              ${isVisible ? "w-16" : "w-0"}
            `}
          />

          <span
            className="
              h-1
              w-2
              rounded-full
              bg-red-500/50
            "
          />

          <span
            className="
              h-1
              w-1
              rounded-full
              bg-red-500/30
            "
          />
        </div>
      </div>

      {/* ========================================================
          Custom Animations
      ======================================================== */}

      <style>
        {`
          @keyframes footerGlow {
            0% {
              transform: translate3d(0, 0, 0) scale(1);
              opacity: 0.5;
            }

            50% {
              transform: translate3d(-30px, 25px, 0) scale(1.12);
              opacity: 0.7;
            }

            100% {
              transform: translate3d(20px, -20px, 0) scale(0.95);
              opacity: 0.45;
            }
          }

          @keyframes footerGlowReverse {
            0% {
              transform: translate3d(0, 0, 0) scale(1);
              opacity: 0.3;
            }

            50% {
              transform: translate3d(30px, -20px, 0) scale(1.15);
              opacity: 0.5;
            }

            100% {
              transform: translate3d(-20px, 20px, 0) scale(0.9);
              opacity: 0.25;
            }
          }

          @media (prefers-reduced-motion: reduce) {
            *,
            *::before,
            *::after {
              animation-duration: 0.01ms !important;
              animation-iteration-count: 1 !important;
              transition-duration: 0.01ms !important;
            }
          }
        `}
      </style>
    </footer>
  );
};

export default Footer;
 