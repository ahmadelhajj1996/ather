import { useTranslation } from "react-i18next";
import { Leaf } from "lucide-react";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section
      id="home"
      className="
        relative
        overflow-hidden
        bg-white
      "
    >

      <div
        className="
          pointer-events-none
          absolute
          -end-32
          -top-32
          h-96
          w-96
          rounded-full
          bg-rose-50
          blur-3xl
        "
      />

      <div className="container relative">
        <div
          className="
            grid
            items-center
            gap-12
            py-16
            sm:py-20
            lg:grid-cols-2
            lg:gap-16
            lg:py-24
          "
        >
          <div className="max-w-2xl">
            <div
              className="
                mb-6
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-rose-100
                bg-rose-50
                px-3.5
                py-2
                text-xs
                font-bold
                uppercase
                tracking-wider
                text-rose-500
              "
            >
              <Leaf className="h-4 w-4" strokeWidth={2} />

              {t("hero.badge")}
            </div>

            {/* Heading */}
            <h1
              className="
                max-w-3xl
                text-4xl
                font-extrabold
                leading-[1.1]
                tracking-tight
                text-indigo-950
                sm:text-5xl
                lg:text-6xl
                xl:text-7xl
                text-center
              "
            >
              {t("hero.titleStart")}{" "}
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
