import React, { useState, useEffect, useMemo, useCallback } from "react";
import { useTranslation } from "react-i18next";

// ============================================================
// Constants
// ============================================================

const COLORS = {
  primary: "#ef4444",
  gradients: {
    from: "#ffffff",
    via: "#fef2f2",
    to: "#fee2e2",
  },
};

const SHAPE_TYPES = {
  LINE: "line",
  CIRCLE: "circle",
  SQUARE: "square",
  TRIANGLE: "triangle",
  DIAMOND: "diamond",
};

// ============================================================
// Utility Functions
// ============================================================

class RandomUtils {
  static random(min, max) {
    return Math.random() * (max - min) + min;
  }

  static randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  static randomOpacity(min = 0.05, max = 0.3) {
    return this.random(min, max).toFixed(2);
  }

  static randomRotation() {
    return this.randomInt(-45, 45);
  }

  static randomSlantedRotation() {
    return this.randomInt(-60, 60);
  }

  static randomColor(baseColor = COLORS.primary) {
    const opacity = parseFloat(this.randomOpacity());

    return `${baseColor}${Math.floor(opacity * 255)
      .toString(16)
      .padStart(2, "0")}`;
  }

  static randomShapeType() {
    const shapes = Object.values(SHAPE_TYPES);

    return shapes[this.randomInt(0, shapes.length - 1)];
  }

  static randomPosition() {
    return {
      top: `${this.randomInt(0, 95)}%`,
      left: `${this.randomInt(0, 95)}%`,
    };
  }
}

// ============================================================
// Shape Generator
// ============================================================

const generateRandomShapes = (count, options = {}) => {
  const {
    minSize = 10,
    maxSize = 80,
    minOpacity = 0.05,
    maxOpacity = 0.3,
    color = COLORS.primary,
    types = Object.values(SHAPE_TYPES),
    slantedLinesRatio = 0.4,
  } = options;

  return Array.from({ length: count }).map((_, index) => {
    const isSlanted = Math.random() < slantedLinesRatio;

    const type = isSlanted
      ? SHAPE_TYPES.LINE
      : types[RandomUtils.randomInt(0, types.length - 1)];

    const size = RandomUtils.randomInt(minSize, maxSize);

    return {
      id: `shape-${index}-${Date.now()}-${Math.random()
        .toString(36)
        .substring(2, 11)}`,
      type,
      size,
      rotation: isSlanted
        ? RandomUtils.randomSlantedRotation()
        : RandomUtils.randomRotation(),
      opacity: parseFloat(
        RandomUtils.randomOpacity(minOpacity, maxOpacity)
      ),
      color: RandomUtils.randomColor(color),
      position: RandomUtils.randomPosition(),
      animated: Math.random() > 0.3,
      delay: RandomUtils.randomInt(0, 500),
      isSlanted,
    };
  });
};

// ============================================================
// Decorative Shape
// ============================================================

const DecorativeShape = React.memo(function DecorativeShape({
  type = SHAPE_TYPES.LINE,
  size = 40,
  rotation = 0,
  opacity = 0.1,
  color = COLORS.primary,
  position = {},
  animated = true,
  delay = 0,
  isSlanted = false,
}) {
  const baseClasses = `
    absolute
    pointer-events-none
    transition-all
    duration-700
    ${animated ? "group-hover:scale-110 group-hover:opacity-50" : ""}
    ${isSlanted ? "slanted-shape" : ""}
  `;

  const styles = {
    ...position,
    width: `${size}px`,
    height: type === SHAPE_TYPES.LINE ? "1px" : `${size}px`,
    opacity,
    transform: `rotate(${rotation}deg)`,
    transitionDelay: `${delay}ms`,
  };

  const getShapeContent = useMemo(() => {
    switch (type) {
      case SHAPE_TYPES.CIRCLE:
        return (
          <div
            className="w-full h-full rounded-full border"
            style={{ borderColor: color }}
          />
        );

      case SHAPE_TYPES.SQUARE:
        return (
          <div
            className="w-full h-full border"
            style={{ borderColor: color }}
          />
        );

      case SHAPE_TYPES.TRIANGLE:
        return (
          <div
            className="w-full h-full"
            style={{
              borderBottom: `${size}px solid ${color}`,
              borderLeft: `${size / 2}px solid transparent`,
              borderRight: `${size / 2}px solid transparent`,
              opacity,
            }}
          />
        );

      case SHAPE_TYPES.DIAMOND:
        return (
          <div
            className="w-full h-full border transform rotate-45"
            style={{ borderColor: color }}
          />
        );

      case SHAPE_TYPES.LINE:
      default:
        return (
          <div
            className="w-full h-full"
            style={{
              background: isSlanted
                ? `linear-gradient(${rotation}deg, transparent, ${color}, transparent)`
                : `linear-gradient(90deg, transparent, ${color}, transparent)`,
              opacity,
              width: isSlanted
                ? `${size * 1.5}px`
                : `${size}px`,
            }}
          />
        );
    }
  }, [type, size, color, opacity, rotation, isSlanted]);

  return (
    <div className={baseClasses} style={styles}>
      {getShapeContent}
    </div>
  );
});

// ============================================================
// Animated Gradient Background
// ============================================================

const AnimatedGradientBackground = React.memo(
  function AnimatedGradientBackground() {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 animate-gradient-shift" />
        <div className="absolute inset-0 animate-gradient-shift-reverse" />
      </div>
    );
  }
);

// ============================================================
// Map Component
// ============================================================

const Map = ({
  title = "",

  // Google Maps location
  mapSrc =
    "https://www.google.com/maps?q=25.1661401,55.3862869&output=embed",

  // Address
  address =
    "Fresh Fruits & Vegetables Market, Ras Al Khor Industrial Area 3, Dubai, United Arab Emirates",

  hours = {
    weekdays: "",
  },

  // Contact information
  contact = {
    email: "atheralshan775@gmail.com",

    // Multiple phone numbers
    phone: [
      "+971 50 730 5005",
      "+971 56 399 2189",
    ],
  },
}) => {
  const { t } = useTranslation();

  const [shapes, setShapes] = useState([]);
  const [mapShapes, setMapShapes] = useState([]);

  // ==========================================================
  // Generate Shapes
  // ==========================================================

  useEffect(() => {
    const sectionShapes = generateRandomShapes(
      RandomUtils.randomInt(8, 15),
      {
        minSize: 30,
        maxSize: 100,
        minOpacity: 0.04,
        maxOpacity: 0.18,
        slantedLinesRatio: 0.5,
        types: [
          SHAPE_TYPES.CIRCLE,
          SHAPE_TYPES.SQUARE,
          SHAPE_TYPES.DIAMOND,
          SHAPE_TYPES.LINE,
        ],
      }
    );

    const mapFrameShapes = generateRandomShapes(
      RandomUtils.randomInt(4, 8),
      {
        minSize: 15,
        maxSize: 40,
        minOpacity: 0.08,
        maxOpacity: 0.25,
        types: [
          SHAPE_TYPES.LINE,
          SHAPE_TYPES.CIRCLE,
        ],
        slantedLinesRatio: 0.7,
      }
    );

    setShapes(sectionShapes);
    setMapShapes(mapFrameShapes);
  }, []);

  // ==========================================================
  // Generate Diagonal Lines
  // ==========================================================

  const generateDiagonalLines = useCallback(() => {
    return Array.from({ length: 8 }).map((_, i) => {
      const rotation = RandomUtils.randomInt(-60, 60);

      return (
        <div
          key={`diag-${i}`}
          className="
            absolute
            w-px
            h-32
            bg-gradient-to-b
            from-transparent
            via-red-500/10
            to-transparent
          "
          style={{
            top: `${RandomUtils.randomInt(0, 100)}%`,
            left: `${RandomUtils.randomInt(0, 100)}%`,
            transform: `rotate(${rotation}deg)`,
            opacity: RandomUtils.random(0.05, 0.15),
          }}
        />
      );
    });
  }, []);

  // ==========================================================
  // Contact Decorations
  // ==========================================================

  const generateContactInfoDecorations = useCallback(() => {
    return ["address", "hours", "email", "phone"].map(
      (item, index) => (
        <React.Fragment
          key={`contact-decor-${item}`}
        >
          <div
            className="
              absolute
              left-0
              w-4
              h-0.5
              bg-gradient-to-r
              from-transparent
              to-red-500/30
              transform
              -rotate-45
            "
            style={{
              top: `${25 + index * 25}%`,
            }}
          />

          <div
            className="
              absolute
              right-0
              w-4
              h-0.5
              bg-gradient-to-l
              from-transparent
              to-red-500/30
              transform
              rotate-45
            "
            style={{
              top: `${25 + index * 25}%`,
            }}
          />
        </React.Fragment>
      )
    );
  }, []);

  // ==========================================================
  // Floating Lines
  // ==========================================================

  const floatingLines = useMemo(() => {
    return Array.from({ length: 12 }).map((_, i) => {
      const rotation = RandomUtils.randomInt(-75, 75);

      return (
        <div
          key={`floating-${i}`}
          className="
            absolute
            w-px
            h-24
            bg-gradient-to-b
            from-transparent
            via-red-500/10
            to-transparent
            animate-float
          "
          style={{
            top: `${RandomUtils.randomInt(0, 100)}%`,
            left: `${RandomUtils.randomInt(0, 100)}%`,
            transform: `rotate(${rotation}deg)`,
            opacity: RandomUtils.random(0.03, 0.1),
            animationDelay: `${i * 0.7}s`,
          }}
        />
      );
    });
  }, []);

  // ==========================================================
  // Render
  // ==========================================================

  return (
    <section
      className="
        relative
        container
        py-12
        sm:py-16
        overflow-hidden
      "
    >
      <AnimatedGradientBackground />

      {/* ======================================================
          Section Decorative Shapes
      ====================================================== */}

      {shapes.map((shape) => (
        <DecorativeShape
          key={shape.id}
          {...shape}
          animated={false}
        />
      ))}

      {/* ======================================================
          Floating Diagonal Lines
      ====================================================== */}

      <div className="absolute inset-0 pointer-events-none">
        {floatingLines}
      </div>

      {/* ======================================================
          Diagonal Cross
      ====================================================== */}

      <div
        className="
          absolute
          top-8
          right-8
          w-24
          h-24
          pointer-events-none
          opacity-20
        "
      >
        <div
          className="
            absolute
            top-0
            left-0
            w-full
            h-px
            bg-gradient-to-r
            from-transparent
            via-red-500
            to-transparent
            transform
            rotate-45
          "
        />

        <div
          className="
            absolute
            top-0
            left-0
            w-full
            h-px
            bg-gradient-to-r
            from-transparent
            via-red-500
            to-transparent
            transform
            -rotate-45
          "
        />
      </div>

      {/* ======================================================
          Title
      ====================================================== */}

      <h1
        className="
          tracking-widest
          uppercase
          text-rose-500
          font-bold
          text-lg
          sm:text-3xl
          text-center
          block
          max-w-max
          mx-auto
        "
      >
        {t("map.title")}
      </h1>

      {/* ======================================================
          Main Content
      ====================================================== */}

      <div
        className="
          relative
          mt-12
          lg:mt-20
          z-10
        "
      >
        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            gap-10
            lg:gap-16
            items-stretch
          "
        >
          {/* ==================================================
              MAP
          ================================================== */}

          <div
            className="
              relative
              rounded-lg
              overflow-hidden
              shadow-2xl
              w-full
              max-w-2xl
              mx-auto
              group
            "
          >
            {/* Map Decorative Circles */}

            <div
              className="
                absolute
                -top-4
                -left-4
                w-8
                h-8
                border
                border-red-500/10
                rounded-full
                animate-spin-slow
              "
            />

            <div
              className="
                absolute
                -bottom-4
                -right-4
                w-8
                h-8
                border
                border-red-500/10
                rounded-full
                animate-spin-slow-reverse
              "
            />

            {/* Decorative Corner Lines */}

            <div
              className="
                absolute
                top-2
                left-2
                w-6
                h-px
                bg-gradient-to-r
                from-red-500
                to-transparent
                transform
                rotate-45
                z-20
              "
            />

            <div
              className="
                absolute
                top-2
                right-2
                w-6
                h-px
                bg-gradient-to-l
                from-red-500
                to-transparent
                transform
                -rotate-45
                z-20
              "
            />

            <div
              className="
                absolute
                bottom-2
                left-2
                w-6
                h-px
                bg-gradient-to-r
                from-transparent
                to-red-500
                transform
                -rotate-45
                z-20
              "
            />

            <div
              className="
                absolute
                bottom-2
                right-2
                w-6
                h-px
                bg-gradient-to-l
                from-transparent
                to-red-500
                transform
                rotate-45
                z-20
              "
            />

            {/* Map Decorative Shapes */}

            {mapShapes.map((shape) => (
              <DecorativeShape
                key={shape.id}
                {...shape}
              />
            ))}

            {/* Diagonal Lines */}

            <div className="absolute inset-0 pointer-events-none z-20">
              {generateDiagonalLines()}
            </div>

            {/* Google Map */}

            <iframe
              src={mapSrc}
              width="100%"
              height="480"
              className="
                relative
                z-10
                w-full
                min-h-[350px]
                sm:min-h-[420px]
                lg:min-h-[480px]
                rounded-lg
                border
                border-red-500/20
                group-hover:border-red-500/40
                transition-all
                duration-500
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

          {/* ==================================================
              CONTACT INFORMATION
          ================================================== */}

          <div
            dir="auto"
            className="
              relative
              px-4
              sm:px-6
              lg:px-8
              py-8
              sm:py-10
              flex
              flex-col
              gap-y-4
              sm:gap-y-6
              rounded-2xl
              backdrop-blur-sm
              border
              border-red-500/10
              group
              hover:border-red-500/30
              transition-all
              duration-500
              min-w-0
            "
          >
            {/* Background Decorative Shapes */}

            <div className="absolute inset-0 pointer-events-none">
              {generateContactInfoDecorations()}
            </div>

            {/* Corner Decorations */}

            <div
              className="
                absolute
                -top-2
                -left-2
                w-12
                h-px
                bg-gradient-to-r
                from-red-500
                to-transparent
                transform
                rotate-45
              "
            />

            <div
              className="
                absolute
                -top-2
                -right-2
                w-12
                h-px
                bg-gradient-to-l
                from-red-500
                to-transparent
                transform
                -rotate-45
              "
            />

            <div
              className="
                absolute
                -bottom-2
                -left-2
                w-12
                h-px
                bg-gradient-to-r
                from-transparent
                to-red-500
                transform
                -rotate-45
              "
            />

            <div
              className="
                absolute
                -bottom-2
                -right-2
                w-12
                h-px
                bg-gradient-to-l
                from-transparent
                to-red-500
                transform
                rotate-45
              "
            />

            {/* ==================================================
                CONTACT ITEMS
            ================================================== */}

            {["address", "email", "phone"].map((item) => {
              return (
                <div
                  key={item}
                  className="
                    relative
                    flex
                    flex-col
                    sm:flex-row
                    sm:items-start
                    gap-2
                    sm:gap-3
                    py-3
                    px-2
                    sm:px-3
                    rounded-xl
                    hover:bg-gradient-to-r
                    from-transparent
                    via-red-500/5
                    to-transparent
                    transition-all
                    duration-300
                    min-w-0
                  "
                >
                  {/* Hover Side Accent */}

                  <div
                    className="
                      absolute
                      left-0
                      top-1/2
                      w-1
                      h-0
                      bg-gradient-to-b
                      from-red-500
                      via-red-500
                      to-transparent
                      -translate-y-1/2
                      group-hover/item:h-12
                      transition-all
                      duration-500
                    "
                  />

                  {/* Bullet + Label */}

                  <div
                    className="
                      flex
                      items-center
                      gap-3
                      flex-shrink-0
                    "
                  >
                    {/* Bullet */}

                    <div
                      className="
                        w-3
                        h-3
                        border
                        border-red-500/50
                        rounded-full
                        group-hover/item:border-red-500
                        group-hover/item:bg-red-500/10
                        transition-all
                        duration-300
                        flex-shrink-0
                      "
                    >
                      <div
                        className="
                          w-1
                          h-1
                          bg-red-500
                          rounded-full
                          mx-auto
                          mt-1
                        "
                      />
                    </div>

                    {/* Label */}

                    <p
                      className="
                        text-black
                        text-sm
                        md:text-base
                        font-medium
                        tracking-wider
                        capitalize
                        whitespace-nowrap
                      "
                    >
                      {t(`map.${item}`)}
                    </p>
                  </div>

                  {/* ==================================================
                      ADDRESS
                  ================================================== */}

                  {item === "address" && (
                    <span
                      dir="auto"
                      className="
                        text-black/80
                        text-sm
                        md:text-base
                        leading-7
                        tracking-wide
                        sm:ml-1
                        group-hover/item:text-black
                        transition-colors
                        duration-300
                        break-words
                        overflow-wrap-anywhere
                        min-w-0
                        max-w-full
                      "
                    >
                      {t("map.addressval")}
                    </span>
                  )}

                  {/* ==================================================
                      EMAIL
                  ================================================== */}

                  {item === "email" && (
                    <a
                      href={`mailto:${contact.email}`}
                      dir="ltr"
                      className="
                        text-black/80
                        text-sm
                        md:text-base
                        tracking-wider
                        sm:ml-1
                        hover:text-red-500
                        transition-colors
                        duration-300
                        break-all
                        text-left
                        max-w-full
                      "
                    >
                      {contact.email}
                    </a>
                  )}

                  {/* ==================================================
                      PHONE NUMBERS
                  ================================================== */}

                  {item === "phone" && (
                    <div
                      dir="ltr"
                      className="
                        flex
                        flex-col
                        gap-2
                        sm:ml-1
                      "
                    >
                      {contact.phone.map((phoneNumber) => (
                        <a
                          key={phoneNumber}
                          href={`tel:${phoneNumber.replace(/\s+/g, "")}`}
                          className="
                            text-black/80
                            text-sm
                            md:text-base
                            tracking-wider
                            hover:text-red-500
                            transition-colors
                            duration-300
                            text-left
                            whitespace-nowrap
                            w-fit
                          "
                        >
                          {phoneNumber}
                        </a>
                      ))}
                    </div>
                  )}

                  {/* Diagonal Accent */}

                  <div
                    className="
                      absolute
                      right-4
                      top-1/2
                      w-4
                      h-px
                      bg-gradient-to-l
                      from-transparent
                      to-red-500
                      transform
                      -translate-y-1/2
                      rotate-45
                      opacity-0
                      group-hover/item:opacity-100
                      transition-all
                      duration-300
                    "
                  />
                </div>
              );
            })}

            {/* ==================================================
                Bottom / Top Decorative Lines
            ================================================== */}

            <div
              className="
                absolute
                -bottom-4
                left-1/4
                w-1/2
                h-px
                bg-gradient-to-r
                from-transparent
                via-red-500/20
                to-transparent
              "
            />

            <div
              className="
                absolute
                -top-4
                right-1/4
                w-1/2
                h-px
                bg-gradient-to-r
                from-transparent
                via-red-500/20
                to-transparent
                transform
                rotate-3
              "
            />
          </div>
        </div>
      </div>

      {/* ========================================================
          Bottom Decorative Line
      ======================================================== */}

      <div
        className="
          relative
          mt-12
          mx-auto
          w-48
          h-px
          bg-gradient-to-r
          from-transparent
          via-red-500
          to-transparent
        "
      />
    </section>
  );
};

export default Map;
 