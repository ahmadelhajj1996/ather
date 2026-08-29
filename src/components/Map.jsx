import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

function Map({
  mapSrc = "https://www.google.com/maps?q=25.1661401,55.3862869&output=embed",

  contact = {
    email: "atheralshan775@gmail.com",
    phone: ["+971 50 730 5005", "+971 56 399 2189"],
  },
}) {
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

  const contactItems = ["address", "email", "phone"];

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
      aria-labelledby="map-title"
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
          motion-safe:animate-[mapGlow_9s_ease-in-out_infinite_alternate]
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
          motion-safe:animate-[mapGlowReverse_11s_ease-in-out_infinite_alternate]
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
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
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
            id="map-title"
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
            {t("map.title")}
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
                ${isVisible ? "w-12" : "w-0"}
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
                ${isVisible ? "w-3" : "w-0"}
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
                ${isVisible ? "w-1.5" : "w-0"}
              `}
            />
          </div>
        </div>

        {/* ======================================================
            Main Content
        ====================================================== */}

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-10">
          {/* ====================================================
              MAP CARD
          ==================================================== */}

          <div
            className={`
              relative
              overflow-hidden
              rounded-3xl
              border
              border-slate-200/80
              bg-white/80
              shadow-xl
              shadow-slate-900/5
              backdrop-blur-sm
              transition-all
              duration-1000
              delay-200
              ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }
            `}
          >
            {/* Left Red Accent */}

            <div
              className={`
                absolute
                bottom-0
                left-0
                top-0
                z-20
                w-1
                origin-top
                bg-red-500
                transition-transform
                duration-1000
                ${isVisible ? "scale-y-100" : "scale-y-0"}
              `}
            />

            {/* Top Decorative Line */}

            <div
              className="
                absolute
                left-0
                right-0
                top-0
                z-20
                h-px
                bg-gradient-to-r
                from-transparent
                via-red-500/40
                to-transparent
              "
            />

            {/* Map Header */}

            <div className="px-6 pb-4 pt-6 sm:px-8 sm:pt-8">
              <div
                className={`
                  flex
                  items-center
                  gap-3
                  transition-all
                  duration-700
                  delay-300
                  ${
                    isVisible
                      ? "translate-x-0 opacity-100"
                      : "-translate-x-5 opacity-0"
                  }
                `}
              >
                <span className="h-2 w-2 rounded-full bg-red-500" />

                <span className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-900">
                  {t("map.location")}
                </span>
              </div>
            </div>

            {/* Google Map */}

            <div
              className={`
                px-4
                pb-4
                sm:px-6
                sm:pb-6
                transition-all
                duration-700
                delay-400
                ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-5 opacity-0"
                }
              `}
            >
              <div className="overflow-hidden rounded-2xl border border-slate-200">
                <iframe
                  src={mapSrc}
                  width="100%"
                  height="480"
                  className="
                    block
                    min-h-[350px]
                    w-full
                    sm:min-h-[420px]
                    lg:min-h-[480px]
                  "
                  style={{
                    border: 0,
                  }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Google Maps Location"
                />
              </div>
            </div>

            {/* Bottom Accent */}

            <div className="px-6 pb-6 sm:px-8">
              <div className="flex items-center gap-2">
                <span
                  className={`
                    h-1
                    rounded-full
                    bg-red-500
                    transition-all
                    duration-1000
                    delay-700
                    ${isVisible ? "w-16" : "w-0"}
                  `}
                />

                <span className="h-1 w-2 rounded-full bg-red-500/50" />

                <span className="h-1 w-1 rounded-full bg-red-500/30" />
              </div>
            </div>
          </div>

          {/* ====================================================
              CONTACT INFORMATION CARD
          ==================================================== */}

          <div
            dir="auto"
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
              delay-300
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
            {/* Left Red Accent */}

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
                delay-200
                ${isVisible ? "scale-y-100" : "scale-y-0"}
              `}
            />

            {/* Top Decorative Line */}

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

            {/* ==================================================
                Contact Heading
            ================================================== */}

            <div className="mb-8">
              <div
                className={`
                  mb-3
                  flex
                  items-center
                  gap-3
                  transition-all
                  duration-700
                  delay-300
                  ${
                    isVisible
                      ? "translate-x-0 opacity-100"
                      : "-translate-x-5 opacity-0"
                  }
                `}
              >
                <span className="h-px w-8 bg-red-500" />

                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-red-500">
                  {t("map.contact")}
                </span>
              </div>

              <h3
                className={`
                  text-2xl
                  font-bold
                  tracking-tight
                  text-slate-900
                  sm:text-3xl
                  transition-all
                  duration-700
                  delay-400
                  ${
                    isVisible
                      ? "translate-y-0 opacity-100"
                      : "translate-y-4 opacity-0"
                  }
                `}
              >
                {t("map.title")}
              </h3>
            </div>

            {/* ==================================================
                Contact Items
            ================================================== */}

            <div className="flex flex-col gap-2">
              {contactItems.map((item, index) => (
                <div
                  key={item}
                  className={`
                    group/item
                    relative
                    rounded-2xl
                    px-4
                    py-5
                    transition-all
                    duration-500
                    hover:bg-slate-50
                    ${
                      isVisible
                        ? "translate-x-0 opacity-100"
                        : "translate-x-[-20px] opacity-0"
                    }
                  `}
                  style={{
                    transitionDelay: isVisible
                      ? `${450 + index * 150}ms`
                      : "0ms",
                  }}
                >
                  {/* Hover Accent */}

                  <div
                    className="
                      absolute
                      bottom-4
                      left-0
                      top-4
                      w-0.5
                      origin-center
                      scale-y-0
                      rounded-full
                      bg-red-500
                      transition-transform
                      duration-500
                      group-hover/item:scale-y-100
                    "
                  />

                  <div
                    className="
                      flex
                      flex-col
                      gap-3
                      sm:flex-row
                      sm:items-start
                    "
                  >
                    {/* Label */}

                    <div className="flex min-w-[100px] items-center gap-3">
                      <span
                        className="
                          flex
                          h-8
                          w-8
                          shrink-0
                          items-center
                          justify-center
                          rounded-full
                          border
                          border-red-500/30
                          transition-all
                          duration-300
                          group-hover/item:border-red-500
                          group-hover/item:bg-red-500/5
                        "
                      >
                        <span
                          className="
                            h-1.5
                            w-1.5
                            rounded-full
                            bg-red-500
                          "
                        />
                      </span>

                      <span className="text-sm font-semibold tracking-wide text-slate-900">
                        {t(`map.${item}`)}
                      </span>
                    </div>

                    {/* ==================================================
                        Address
                    ================================================== */}

                    {item === "address" && (
                      <span
                        dir="auto"
                        className="
                          flex-1
                          break-words
                          text-sm
                          leading-7
                          tracking-wide
                          text-slate-600
                          transition-colors
                          duration-300
                          group-hover/item:text-slate-900
                          sm:pt-1
                          sm:text-base
                        "
                      >
                        {t("map.addressval")}
                      </span>
                    )}

                    {/* ==================================================
                        Email
                    ================================================== */}

                    {item === "email" && (
                      <a
                        href={`mailto:${contact.email}`}
                        dir="ltr"
                        className="
                          flex-1
                          break-all
                          text-left
                          text-sm
                          tracking-wide
                          text-slate-600
                          transition-colors
                          duration-300
                          hover:text-red-500
                          sm:pt-1
                          sm:text-base
                        "
                      >
                        {contact.email}
                      </a>
                    )}

                    {/* ==================================================
                        Phone Numbers
                    ================================================== */}

                    {item === "phone" && (
                      <div
                        dir="ltr"
                        className="
                          flex
                          flex-1
                          flex-col
                          gap-2
                          sm:pt-1
                        "
                      >
                        {contact.phone.map((phoneNumber) => (
                          <a
                            key={phoneNumber}
                            href={`tel:${phoneNumber.replace(/\s+/g, "")}`}
                            className="
                              w-fit
                              whitespace-nowrap
                              text-left
                              text-sm
                              tracking-wide
                              text-slate-600
                              transition-all
                              duration-300
                              hover:translate-x-1
                              hover:text-red-500
                              sm:text-base
                            "
                          >
                            {phoneNumber}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* ==================================================
                Bottom Accent
            ================================================== */}

            <div className="mt-8 flex items-center gap-2">
              <span
                className={`
                  h-1
                  rounded-full
                  bg-red-500
                  transition-all
                  duration-1000
                  delay-800
                  ${isVisible ? "w-16" : "w-0"}
                `}
              />

              <span className="h-1 w-2 rounded-full bg-red-500/50" />

              <span className="h-1 w-1 rounded-full bg-red-500/30" />
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================
          Custom Animations
      ======================================================== */}

      <style>
        {`
          @keyframes mapGlow {
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

          @keyframes mapGlowReverse {
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

export default Map;
