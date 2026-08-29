import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

import Service1 from "../assets/Service1.png";
import Service2 from "../assets/Service2.png";
import Service3 from "../assets/Service3.png";
import Service4 from "../assets/Service4.png";

// ============================================================
// Services Data
// ============================================================

const SERVICES = [
  {
    id: 1,
    image: Service1,
    titleKey: "services.service1",
  },
  {
    id: 2,
    image: Service2,
    titleKey: "services.service2",
  },
  {
    id: 3,
    image: Service3,
    titleKey: "services.service3",
  },
  {
    id: 4,
    image: Service4,
    titleKey: "services.service4",
  },
];

// ============================================================
// Services Component
// ============================================================

const Services = () => {
  const { t } = useTranslation();

  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  // ==========================================================
  // Reveal Animation
  // ==========================================================

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
        threshold: 0.12,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  // ==========================================================
  // Render
  // ==========================================================

  return (
    <section
      ref={sectionRef}
      className="
        relative
        isolate
        overflow-hidden
        bg-slate-50
        px-6
        py-20
        sm:px-8
        sm:py-24
        lg:px-12
        lg:py-28
      "
      aria-labelledby="services-title"
    >
      {/* ======================================================
          Animated Red Glow - Top Right
      ====================================================== */}

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
          motion-safe:animate-[servicesGlow_9s_ease-in-out_infinite_alternate]
          motion-reduce:animate-none
        "
      />

      {/* ======================================================
          Animated Red Glow - Bottom Left
      ====================================================== */}

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
          motion-safe:animate-[servicesGlowReverse_11s_ease-in-out_infinite_alternate]
          motion-reduce:animate-none
        "
      />

      {/* ======================================================
          Subtle Background Grid
      ====================================================== */}

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

      {/* ======================================================
          Main Container
      ====================================================== */}

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
              : "translate-y-10 opacity-0"
          }
        `}
      >
        {/* ====================================================
            Section Heading
        ==================================================== */}

        <div className="mb-10 text-center sm:mb-12">
          {/* Small Label */}

          <div
            className={`
              mb-4
              flex
              items-center
              justify-center
              gap-3
              transition-all
              duration-700
              ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0"
              }
            `}
          >
            <span className="h-px w-8 bg-red-500 sm:w-12" />

            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-red-500 sm:text-sm">
              {t("hero.title")}
            </span>

            <span className="h-px w-8 bg-red-500 sm:w-12" />
          </div>

          {/* Main Title */}

          <h2
            id="services-title"
            className={`
              text-3xl
              font-bold
              tracking-tight
              text-slate-900
              sm:text-4xl
              md:text-5xl
              transition-all
              duration-700
              delay-100
              ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-5 opacity-0"
              }
            `}
          >
            {t("services.title")}
          </h2>

          {/* Red Accent */}

          <div className="mx-auto mt-5 flex items-center justify-center gap-1.5">
            <span
              className={`
                h-1
                rounded-full
                bg-red-500
                transition-all
                duration-1000
                ${
                  isVisible ? "w-12" : "w-0"
                }
              `}
            />

            <span
              className={`
                h-1
                rounded-full
                bg-red-500/60
                transition-all
                duration-700
                delay-300
                ${
                  isVisible ? "w-3" : "w-0"
                }
              `}
            />

            <span
              className={`
                h-1
                rounded-full
                bg-red-500/30
                transition-all
                duration-500
                delay-500
                ${
                  isVisible ? "w-1.5" : "w-0"
                }
              `}
            />
          </div>
        </div>

        {/* ====================================================
            Services Grid
        ==================================================== */}

        <div
          className="
            grid
            grid-cols-1
            gap-6
            min-[425px]:grid-cols-2
            lg:grid-cols-4
          "
        >
          {SERVICES.map((service, index) => (
            <article
              key={service.id}
              className={`
                group
                relative
                overflow-hidden
                rounded-2xl
                border
                border-slate-200
                bg-white
                shadow-lg
                shadow-slate-900/5
                transition-all
                duration-700
                ease-out
                hover:-translate-y-2
                hover:border-red-200
                hover:shadow-xl
                hover:shadow-red-500/10

                ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-12 opacity-0"
                }
              `}
              style={{
                transitionDelay: `${250 + index * 120}ms`,
              }}
            >
              {/* =================================================
                  Image Container
              ================================================= */}

              <div
                className="
                  relative
                  overflow-hidden
                  bg-slate-100
                "
              >
                {/* Image */}

                <img
                  src={service.image}
                  alt={t(service.titleKey)}
                  loading="lazy"
                  className="
                    h-[200px]
                    w-full
                    object-cover
                    transition-transform
                    duration-700
                    ease-out
                    group-hover:scale-105
                    sm:h-[210px]
                    lg:h-[200px]
                  "
                />

                {/* Image Overlay */}

                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-black/20
                    via-transparent
                    to-transparent
                    opacity-60
                    transition-opacity
                    duration-500
                    group-hover:opacity-30
                  "
                />

                {/* Red Glow */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    -bottom-10
                    -right-10
                    h-24
                    w-24
                    rounded-full
                    bg-red-500/20
                    blur-2xl
                    opacity-0
                    transition-opacity
                    duration-500
                    group-hover:opacity-100
                  "
                />
              </div>

              {/* =================================================
                  Card Content
              ================================================= */}

              <div
                className="
                  relative
                  flex
                  min-h-[100px]
                  flex-col
                  justify-center
                  px-5
                  py-5
                  text-center
                "
              >
                {/* Red Accent */}

                <span
                  className="
                    absolute
                    left-1/2
                    top-0
                    h-1
                    w-10
                    -translate-x-1/2
                    rounded-b-full
                    bg-red-500
                    transition-all
                    duration-500
                    group-hover:w-20
                  "
                />

                {/* Service Title */}

                <p
                  className="
                    text-sm
                    font-bold
                    leading-6
                    tracking-wide
                    text-slate-800
                    transition-colors
                    duration-300
                    group-hover:text-red-500
                    sm:text-base
                    rtl:tracking-normal
                  "
                >
                  {t(service.titleKey)}
                </p>
              </div>

              {/* =================================================
                  Bottom Animated Border
              ================================================= */}

              <span
                className="
                  absolute
                  bottom-0
                  left-0
                  h-0.5
                  w-0
                  bg-red-500
                  transition-all
                  duration-500
                  group-hover:w-full
                "
              />
            </article>
          ))}
        </div>
      </div>

      {/* ======================================================
          Custom Animations
      ====================================================== */}

      <style>
        {`
          @keyframes servicesGlow {
            0% {
              transform: translate3d(0, 0, 0) scale(1);
              opacity: 0.45;
            }

            50% {
              transform: translate3d(-30px, 25px, 0) scale(1.12);
              opacity: 0.65;
            }

            100% {
              transform: translate3d(20px, -20px, 0) scale(0.95);
              opacity: 0.4;
            }
          }

          @keyframes servicesGlowReverse {
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
    </section>
  );
};

export default Services;
 