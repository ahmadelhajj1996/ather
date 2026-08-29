import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { Leaf, Truck, BadgeCheck, PackageCheck, Handshake } from "lucide-react";

// ============================================================
// Constants
// ============================================================

const WHY_ITEMS = [
  {
    key: "first",
    icon: Leaf,
  },
  {
    key: "second",
    icon: Truck,
  },
  {
    key: "third",
    icon: BadgeCheck,
  },
  {
    key: "fourth",
    icon: PackageCheck,
  },
  {
    key: "fivth",
    icon: Handshake,
  },
];

// ============================================================
// Component
// ============================================================

function Why() {
  const { t } = useTranslation();

  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  // ============================================================
  // Reveal animation when section enters viewport
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
    <section
      ref={sectionRef}
      className="
        relative
        isolate
        overflow-hidden
        bg-white
        px-6
        py-20
        sm:px-8
        sm:py-24
        lg:px-12
        lg:py-28
      "
      aria-labelledby="why-title"
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
          bg-rose-500/10
          blur-3xl
          motion-safe:animate-[whyGlow_9s_ease-in-out_infinite_alternate]
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
          bg-rose-500/5
          blur-3xl
          motion-safe:animate-[whyGlowReverse_11s_ease-in-out_infinite_alternate]
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
          [background-image:linear-gradient(to_right,#f43f5e_1px,transparent_1px),linear-gradient(to_bottom,#f43f5e_1px,transparent_1px)]
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
          max-w-7xl
          transition-all
          duration-1000
          ease-out
          ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }
        `}
      >
        {/* ======================================================
            Section Heading
        ====================================================== */}

        <div className="mb-12 text-center sm:mb-16">
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
            <span className="h-px w-8 bg-rose-500 sm:w-12" />

            <span
              className="
                text-xs
                font-semibold
                uppercase
                tracking-[0.25em]
                text-rose-500
                sm:text-sm
              "
            >
              {t("hero.title")}
            </span>

            <span className="h-px w-8 bg-rose-500 sm:w-12" />
          </div>

          {/* Main Title */}

          <h2
            id="why-title"
            className={`
              text-3xl
              font-bold
              tracking-tight
              text-slate-900
              transition-all
              duration-700
              delay-100
              sm:text-4xl
              md:text-5xl
              ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-5 opacity-0"
              }
            `}
          >
            {t("why.title")}
          </h2>

          {/* Red Accent */}

          <div className="mx-auto mt-5 flex items-center justify-center gap-1.5">
            <span
              className={`
                h-1
                rounded-full
                bg-rose-500
                transition-all
                duration-1000
                ${isVisible ? "w-12" : "w-0"}
              `}
            />

            <span
              className={`
                h-1
                rounded-full
                bg-rose-500/60
                transition-all
                duration-700
                delay-300
                ${isVisible ? "w-3" : "w-0"}
              `}
            />

            <span
              className={`
                h-1
                rounded-full
                bg-rose-500/30
                transition-all
                duration-500
                delay-500
                ${isVisible ? "w-1.5" : "w-0"}
              `}
            />
          </div>
        </div>

        {/* ======================================================
            Why Choose Us Grid
        ====================================================== */}

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {WHY_ITEMS.map(({ key, icon: Icon }, index) => (
            <article
              key={key}
              className={`
                group
                relative
                overflow-hidden
                rounded-2xl
                border
                border-slate-200/80
                bg-white
                p-6
                shadow-sm
                transition-all
                duration-700
                hover:-translate-y-1
                hover:border-rose-200
                hover:shadow-xl
                hover:shadow-rose-100/40
                sm:p-7
                ${index === 4 ? "lg:col-start-2" : ""}
                ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }
              `}
              style={{
                transitionDelay: isVisible ? `${300 + index * 120}ms` : "0ms",
              }}
            >
              {/* ==================================================
                  Background Decoration
              ================================================== */}

              <div
                className="
                  pointer-events-none
                  absolute
                  -right-8
                  -top-8
                  h-24
                  w-24
                  rounded-full
                  bg-rose-50
                  transition-transform
                  duration-500
                  group-hover:scale-150
                "
              />

              {/* ==================================================
                  Icon + Number
              ================================================== */}

              <div className="relative mb-6 flex items-center justify-between">
                {/* Icon */}

                <div
                  className="
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-xl
                    bg-rose-50
                    text-rose-500
                    transition-all
                    duration-300
                    group-hover:bg-rose-500
                    group-hover:text-white
                  "
                >
                  <Icon className="h-6 w-6" strokeWidth={1.8} />
                </div>

                {/* Number */}

                <span
                  className="
                    text-4xl
                    font-bold
                    text-slate-100
                    transition-colors
                    duration-300
                    group-hover:text-rose-50
                  "
                >
                  0{index + 1}
                </span>
              </div>

              {/* ==================================================
                  Content
              ================================================== */}

              <div className="relative">
                <h3
                  className="
                    mb-3
                    text-xl
                    font-bold
                    leading-tight
                    text-indigo-950
                  "
                >
                  {t(`why.${key}.title`)}
                </h3>

                <p
                  className="
                    text-sm
                    leading-7
                    text-slate-600
                    sm:text-base
                  "
                >
                  {t(`why.${key}.description`)}
                </p>
              </div>

              {/* ==================================================
                  Bottom Accent
              ================================================== */}

              <div
                className="
                  mt-6
                  h-0.5
                  w-10
                  rounded-full
                  bg-rose-500
                  transition-all
                  duration-300
                  group-hover:w-20
                "
              />
            </article>
          ))}
        </div>
      </div>

      {/* ========================================================
          Custom Animations
      ======================================================== */}

      <style>
        {`
          @keyframes whyGlow {
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

          @keyframes whyGlowReverse {
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
}

export default Why;
