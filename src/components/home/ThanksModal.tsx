import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const ThanksModal = () => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black bg-opacity-50" />
      <div className="z-50 w-[90%] sm:w-[400px] rounded-md bg-white flex flex-col items-center justify-center gap-5 py-5 px-7 email-animation">
        <div className="w-full flex justify-end">
          <Link
            to={`/${currentLang}`}
            className="active-button cursor-pointer transition-all z-50"
            aria-label={t("common.close")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="size-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </Link>
        </div>
        <div className="flex flex-col items-center gap-5 -mt-10">
          <img src="/img/sampling-logo.png" className="w-[100px]" alt="logo" />
          <h1 className="title-bold uppercase text-lg text-center">
            {t("thanks.title")}
          </h1>
          <p className="text-sm text-center">{t("thanks.description")}</p>
          <a
            href="https://sampling-innovations.com/"
            target="_blank"
            className="active-button w-full bg-[#F04D79] rounded-md flex items-center shadow hover:shadow-md justify-center text-white font-semibold uppercase py-3 px-10 transition-shadow"
          >
            {t("thanks.cta")}
          </a>
        </div>
      </div>
    </div>
  );
};

export default ThanksModal;
