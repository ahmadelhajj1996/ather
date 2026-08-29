import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

function About() {
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
      }
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
      aria-labelledby="about-title"
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
          motion-safe:animate-[aboutGlow_9s_ease-in-out_infinite_alternate]
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
          motion-safe:animate-[aboutGlowReverse_11s_ease-in-out_infinite_alternate]
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
              : "translate-y-10 opacity-0"
          }
        `}
      >
        {/* ======================================================
            Section Heading
        ====================================================== */}

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
            id="about-title"
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
            {t("about.title")}
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

        {/* ======================================================
            Content Card
        ====================================================== */}

        <div
          className={`
            relative
            overflow-hidden
            rounded-3xl
            border
            border-slate-200/80
            bg-white/80
            p-6
            shadow-xl
            shadow-slate-900/5
            backdrop-blur-sm
            transition-all
            duration-1000
            delay-200
            sm:p-8
            md:p-10
            lg:p-12
            ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }
          `}
        >
          {/* ====================================================
              Left Red Accent
          ==================================================== */}

          <div
            className={`
              absolute
              bottom-0
              left-0
              top-0
              w-1
              origin-top
              bg-red-500
              transition-transform
              duration-1000
              ${
                isVisible
                  ? "scale-y-100"
                  : "scale-y-0"
              }
            `}
          />

          {/* ====================================================
              Top Decorative Line
          ==================================================== */}

          <div
            className="
              absolute
              left-0
              right-0
              top-0
              h-px
              bg-gradient-to-r
              from-transparent
              via-red-500/40
              to-transparent
            "
          />

          {/* ====================================================
              Text Content
          ==================================================== */}

          <div
            className="
              flex
              flex-col
              gap-y-5
              text-start
              text-sm
              leading-7
              tracking-wide
              text-slate-600
              sm:text-base
              sm:leading-8
              rtl:text-right
            "
          >
            {/* Paragraph 1 */}

            <p
              className={`
                transition-all
                duration-700
                delay-300
                ${
                  isVisible
                    ? "translate-x-0 opacity-100"
                    : "translate-x-[-20px] opacity-0"
                }
              `}
            >
              {t("about.description1")}
            </p>

            {/* Paragraph 2 */}

            <p
              className={`
                transition-all
                duration-700
                delay-500
                ${
                  isVisible
                    ? "translate-x-0 opacity-100"
                    : "translate-x-[-20px] opacity-0"
                }
              `}
            >
              {t("about.description2")}
            </p>
          </div>

          {/* ====================================================
              Bottom Accent
          ==================================================== */}

          <div
            className="
              mt-8
              flex
              items-center
              gap-2
            "
          >
            <span
              className={`
                h-1
                rounded-full
                bg-red-500
                transition-all
                duration-1000
                delay-700
                ${
                  isVisible
                    ? "w-16"
                    : "w-0"
                }
              `}
            />

            <span className="h-1 w-2 rounded-full bg-red-500/50" />

            <span className="h-1 w-1 rounded-full bg-red-500/30" />
          </div>
        </div>
      </div>

      {/* ========================================================
          Custom Animations
      ======================================================== */}

      <style>
        {`
          @keyframes aboutGlow {
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

          @keyframes aboutGlowReverse {
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

export default About;
 
