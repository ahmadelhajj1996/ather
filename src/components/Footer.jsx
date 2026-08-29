import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t, i18n } = useTranslation();

  const isRTL = i18n.dir() === "rtl";

  return (
    <footer className=" bg-rose-600  py-6">
      <div className="text-center">
        <p
          dir={isRTL ? "rtl" : "ltr"}
          className="text-sm text-white  sm:text-base"
        >
          <span className=" text-white" >{t("footer.rights")}</span>
          <span className="mx-1 font-semibold text-white">
            {t("footer.companyName")}
          </span>
          <span dir="ltr" className=" text-white ps-2">© 2026</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
