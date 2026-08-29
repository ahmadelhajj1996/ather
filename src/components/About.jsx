import { useTranslation } from "react-i18next";

function About() {
  const { t } = useTranslation();

  return (
    <section className=" container ">
      <div className="max-w-3xl lg:max-w-6xl mx-auto text-center flex flex-col gap-y-8  tracking-wider">

          <h1 className="tracking-widest scale-125  uppercase text-rose-500  font-bold text-lg  sm:text-3xl  text-center block max-w-max mx-auto">
            {t("hero.title")}
          </h1>
        <div className=" text-start  flex flex-col gap-y-4 text-sm md:text-lg text-indigo-950  ">
          <p className="description">{t("about.description1")}</p>
          <p className="description"> {t("about.description2")}</p>
        </div>
      </div>
    </section>
  );
}

export default About;
