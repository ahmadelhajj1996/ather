import { useTranslation } from "react-i18next";

import Service1 from "../assets/Service1.png"
import Service2 from "../assets/Service2.png"
import Service3 from "../assets/Service3.png"
import Service4 from "../assets/Service4.png"

const Services = () => {
  const { t } = useTranslation();

  return (
    <section className=" container ">
      <div className="max-w-3xl lg:max-w-6xl mx-auto text-center flex flex-col gap-y-10  tracking-wider">

        <h1 className="tracking-widest scale-125  uppercase text-rose-500  font-bold text-lg  sm:text-3xl  text-center block max-w-max mx-auto">
          {t("services.title")}
        </h1>

        <div className=" grid grid-cols-1 min-[425px]:grid-cols-2  lg:grid-cols-4 gap-6 gap-y-8  justify-center">
          <div className=" flex flex-col gap-y-2 justify-center border-2 pb-4">
            <img src={Service1} loading="eager" className=" w-full max-h-[220px]" />
            <p className=" font-semibold">{t("services.service1")}</p>
          </div>

          <div className=" flex flex-col gap-y-2 justify-center border-2 pb-4">
            <img src={Service2} loading="eager" className=" w-full max-h-[220px]" />
            <p className=" font-semibold">{t("services.service2")}</p>
          </div>
          <div className=" flex flex-col gap-y-2 justify-center border-2 pb-4">
            <img src={Service3} loading="eager" className=" w-full max-h-[220px]" />
            <p className=" font-semibold">{t("services.service3")}</p>
          </div>
          <div className=" flex flex-col gap-y-2 justify-center border-2 pb-4">
            <img src={Service4} loading="eager" className=" w-full max-h-[220px]" />
            <p className=" font-semibold">{t("services.service4")}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
