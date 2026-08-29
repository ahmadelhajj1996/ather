import { useEffect, useState } from "react";
import { Phone } from "lucide-react";
import { useTranslation } from "react-i18next";
import Hero from "../assets/Hero1.jpg";

// ============================================================
// Slides
// ============================================================

const SLIDES = [
  {
    id: 1,
    titleKey: "hero.slides.refrigerated",
  },
  {
    id: 2,
    titleKey: "hero.slides.quality",
  },
  {
    id: 3,
    titleKey: "hero.slides.freshness",
  },
];

// ============================================================
// Contact Information
// ============================================================

const WHATSAPP_NUMBER = "971507305005";
const PHONE_NUMBER = "+971507305005";

// ============================================================
// WhatsApp Icon
// ============================================================

const WhatsAppIcon = ({ className = "h-6 w-6" }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <path
      fill="green"
      d="M20.52 3.48A11.85 11.85 0 0 0 12.07 0C5.53 0 .21 5.32.21 11.86c0 2.09.55 4.13 1.59 5.93L.11 24l6.36-1.67a11.83 11.83 0 0 0 5.6 1.42h.01c6.54 0 11.86-5.32 11.86-11.86 0-3.17-1.23-6.15-3.42-8.41ZM12.08 21.75h-.01a9.85 9.85 0 0 1-5.02-1.37l-.36-.21-3.77.99 1.01-3.67-.23-.38a9.84 9.84 0 0 1-1.51-5.25C2.19 6.42 6.62 2 12.08 2c2.64 0 5.12 1.03 6.98 2.9a9.83 9.83 0 0 1 2.89 6.99c0 5.45-4.43 9.86-9.87 9.86Zm5.42-7.39c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.76-1.67-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.1 3.2 5.08 4.49.71.31 1.27.5 1.71.64.72.23 1.37.2 1.89.12.58-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z"
    />
  </svg>
);

// ============================================================
// Hero Slider
// ============================================================

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const { t } = useTranslation();

  // ==========================================================
  // Next Slide
  // ==========================================================

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
  };

  // ==========================================================
  // Auto Play
  // ==========================================================

  useEffect(() => {
    const interval = setInterval(nextSlide, 6000);

    return () => clearInterval(interval);
  }, []);

  const current = SLIDES[currentSlide];

  return (
    <section
      className="
        relative
        isolate
        h-[300px]
        overflow-hidden
        bg-black
        sm:h-[360px]
        md:h-[420px]
        lg:h-[470px]
      "
      aria-label={t("hero.ariaLabel")}
    >
      {/* =====================================================
          Background Image
      ===================================================== */}

      <div className="absolute inset-0 -z-20 overflow-hidden">
        <img
          src={Hero}
          alt=""
          className="
            h-full
            w-full
            object-cover
            motion-safe:animate-[heroZoom_14s_ease-in-out_infinite_alternate]
            motion-reduce:transform-none
          "
        />
      </div>

      {/* =====================================================
          Main Dark Overlay
      ===================================================== */}

      <div
        className="
          absolute
          inset-0
          -z-10
          bg-black/55
        "
      />

      {/* =====================================================
          Animated Red Gradient
      ===================================================== */}

      <div
        className="
          absolute
          inset-0
          -z-10
          bg-gradient-to-br
          from-black/80
          via-red-950/30
          to-red-500/20
        "
      />

      {/* =====================================================
          Animated Red Glow - Top Right
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -right-24
          -top-32
          -z-10
          h-72
          w-72
          rounded-full
          bg-red-500/30
          blur-3xl
          motion-safe:animate-[heroGlow_8s_ease-in-out_infinite_alternate]
          motion-reduce:transform-none
        "
      />

      {/* =====================================================
          Animated Red Glow - Bottom Left
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -bottom-40
          -left-24
          -z-10
          h-80
          w-80
          rounded-full
          bg-red-500/20
          blur-3xl
          motion-safe:animate-[heroGlowReverse_10s_ease-in-out_infinite_alternate]
          motion-reduce:transform-none
        "
      />

      {/* =====================================================
          Moving Gradient Layer
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          -z-10
          bg-gradient-to-r
          from-black/70
          via-transparent
          to-red-500/20
          bg-[length:200%_200%]
          motion-safe:animate-[heroGradient_10s_ease_infinite]
          motion-reduce:animate-none
        "
      />

      {/* =====================================================
          Content
      ===================================================== */}

      <div className="relative z-10 flex h-full items-center">
        <div
          className="
            mx-auto
            w-full
            max-w-7xl
            px-6
            py-12
            sm:px-8
            md:px-10
            lg:px-12
          "
        >
          <div className="max-w-3xl text-white">

            {/* =================================================
                Company Name
            ================================================= */}

            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-8 bg-red-500 sm:w-10" />

              <p
                className="
                  text-sm
                  font-bold
                  uppercase
                  tracking-[0.2em]
                  text-white/90
                  sm:text-base
                  rtl:text-lg
                  rtl:tracking-normal
                "
              >
                {t("hero.title")}
              </p>
            </div>

            {/* =================================================
                Main Heading
            ================================================= */}

            <h1
              key={`title-${currentSlide}`}
              className="
                max-w-3xl
                animate-[heroTextIn_700ms_ease-out]
                text-2xl
                font-bold
                leading-[1.15]
                tracking-tight
                text-white
                sm:text-3xl
                md:text-4xl
                lg:text-5xl
                xl:text-6xl
                rtl:leading-relaxed
              "
            >
              {t(current.titleKey)}
            </h1>

            {/* =================================================
                Accent Line
            ================================================= */}

            <div className="mt-5 flex items-center gap-2">
              <span className="h-1 w-10 rounded-full bg-red-500" />
              <span className="h-1 w-2 rounded-full bg-red-500/60" />
              <span className="h-1 w-1 rounded-full bg-red-500/40" />
            </div>

            {/* =================================================
                Contact Actions
            ================================================= */}

            <div className="mt-7 flex items-center gap-3">

              {/* WhatsApp */}

              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t("hero.whatsapp")}
                title={t("hero.whatsapp")}
                className="
                  group
                  inline-flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/20
                  bg-white
                  text-green-500
                  shadow-xl
                  shadow-black/20
                  backdrop-blur-sm
                  transition-all
                  duration-300
                  hover:scale-110
                  hover:border-white/40
                  hover:bg-white
                  hover:shadow-2xl
                  focus:outline-none
                  focus:ring-2
                  focus:ring-green-400
                  focus:ring-offset-2
                  focus:ring-offset-black
                  sm:h-13
                  sm:w-13
                "
              >
                <WhatsAppIcon
                  className="
                    h-6
                    w-6
                    transition-transform
                    duration-300
                    group-hover:scale-110
                  "
                />
              </a>

              {/* Phone */}

              <a
                href={`tel:${PHONE_NUMBER}`}
                aria-label={t("hero.phone")}
                title={t("hero.phone")}
                className="
                  group
                  inline-flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/20
                  bg-white
                  text-green-500
                  shadow-xl
                  shadow-black/20
                  backdrop-blur-sm
                  transition-all
                  duration-300
                  hover:scale-110
                  hover:border-white/40
                  hover:bg-white
                  hover:shadow-2xl
                  focus:outline-none
                  focus:ring-2
                  focus:ring-green-400
                  focus:ring-offset-2
                  focus:ring-offset-black
                  sm:h-13
                  sm:w-13
                "
              >
                <Phone
                  className="
                    h-6
                    w-6
                    text-green-500
                    transition-transform
                    duration-300
                    group-hover:scale-110
                  "
                  color="green"
                  strokeWidth={2}
                  aria-hidden="true"
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================
          Slide Indicators
      ===================================================== */}

      <div
        className="
          absolute
          bottom-6
          left-1/2
          z-20
          flex
          -translate-x-1/2
          items-center
          gap-2
        "
        aria-label={t("hero.slideNavigation")}
      >
        {SLIDES.map((slide, index) => (
          <button
            key={slide.id}
            type="button"
            onClick={() => setCurrentSlide(index)}
            aria-label={t("hero.goToSlide", {
              number: index + 1,
            })}
            aria-current={index === currentSlide}
            className={`
              h-1.5
              rounded-full
              transition-all
              duration-500
              focus:outline-none
              focus:ring-2
              focus:ring-white
              focus:ring-offset-2
              focus:ring-offset-transparent

              ${
                index === currentSlide
                  ? "w-8 bg-red-500 shadow-lg shadow-red-500/40"
                  : "w-2 bg-white/50 hover:bg-white/80"
              }
            `}
          />
        ))}
      </div>

      {/* =====================================================
          Bottom Red Accent
      ===================================================== */}

      <div
        className="
          absolute
          bottom-0
          left-0
          h-0.5
          w-full
          bg-gradient-to-r
          from-transparent
          via-red-500
          to-transparent
          opacity-80
        "
      />

      {/* =====================================================
          Custom Animations
      ===================================================== */}

      <style>
        {`
          @keyframes heroZoom {
            0% {
              transform: scale(1);
            }

            100% {
              transform: scale(1.08);
            }
          }

          @keyframes heroGlow {
            0% {
              transform: translate3d(0, 0, 0) scale(1);
              opacity: 0.45;
            }

            50% {
              transform: translate3d(-35px, 25px, 0) scale(1.15);
              opacity: 0.65;
            }

            100% {
              transform: translate3d(25px, -20px, 0) scale(0.95);
              opacity: 0.4;
            }
          }

          @keyframes heroGlowReverse {
            0% {
              transform: translate3d(0, 0, 0) scale(1);
              opacity: 0.3;
            }

            50% {
              transform: translate3d(35px, -20px, 0) scale(1.2);
              opacity: 0.5;
            }

            100% {
              transform: translate3d(-20px, 25px, 0) scale(0.9);
              opacity: 0.25;
            }
          }

          @keyframes heroGradient {
            0% {
              background-position: 0% 50%;
            }

            50% {
              background-position: 100% 50%;
            }

            100% {
              background-position: 0% 50%;
            }
          }

          @keyframes heroTextIn {
            from {
              opacity: 0;
              transform: translateY(12px);
            }

            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @media (prefers-reduced-motion: reduce) {
            *,
            *::before,
            *::after {
              animation-duration: 0.01ms !important;
              animation-iteration-count: 1 !important;
              transition-duration: 0.01ms !important;
              scroll-behavior: auto !important;
            }
          }
        `}
      </style>
    </section>
  );
};

export default HeroSlider;

