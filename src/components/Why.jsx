import { useTranslation } from "react-i18next";
import {
  Leaf,
  Truck,
  BadgeCheck,
  PackageCheck,
  Handshake,
} from "lucide-react";

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

function Why() {
  const { t } = useTranslation();

  return (
    <section className="container py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
            <h1 className="tracking-widest scale-125  uppercase text-rose-500  font-bold text-lg  sm:text-3xl  text-center block max-w-max mx-auto">
              {t("why.title")}
            </h1>
        </div>

        {/* Why Choose Us Grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {WHY_ITEMS.map(({ key, icon: Icon }, index) => (
            <article
              key={key}
              className={`
                group relative overflow-hidden rounded-2xl
                border border-slate-200/80
                bg-white p-6
                shadow-sm
                transition-all duration-300
                hover:-translate-y-1
                hover:border-rose-200
                hover:shadow-xl hover:shadow-rose-100/40
                sm:p-7
                ${index === 4 ? "lg:col-start-2" : ""}
              `}
            >
              {/* Background Decoration */}
              <div
                className="
                  absolute -right-8 -top-8
                  h-24 w-24 rounded-full
                  bg-rose-50
                  transition-transform duration-500
                  group-hover:scale-150
                "
              />

              {/* Icon + Number */}
              <div className="relative mb-6 flex items-center justify-between">
                <div
                  className="
                    flex h-12 w-12 items-center justify-center
                    rounded-xl bg-rose-50
                    text-rose-500
                    transition-all duration-300
                    group-hover:bg-rose-500
                    group-hover:text-white
                  "
                >
                  <Icon className="h-6 w-6" strokeWidth={1.8} />
                </div>

                <span className="text-4xl font-bold text-slate-100 transition-colors duration-300 group-hover:text-rose-50">
                  0{index + 1}
                </span>
              </div>

              {/* Content */}
              <div className="relative">
                <h3 className="mb-3 text-xl font-bold leading-tight text-indigo-950">
                  {t(`why.${key}.title`)}
                </h3>

                <p className="text-sm leading-7 text-slate-600 sm:text-base">
                  {t(`why.${key}.description`)}
                </p>
              </div>

              {/* Bottom Accent */}
              <div
                className="
                  mt-6 h-0.5 w-10 rounded-full
                  bg-rose-500
                  transition-all duration-300
                  group-hover:w-20
                "
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Why;

