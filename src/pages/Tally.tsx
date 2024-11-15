import { Link } from "react-router-dom";
import "../assets/css/global.css";

const Tally = () => {
  const getFormId = () => {
    return "31JW2l";
  };

  return (
    <div className="global-animation">
      <div
        className={`bg-white py-4 px-5 flex items-center justify-center mt-3`}
      >
        <img src="/img/sampling-logo.png" className="w-[150px]" alt="logo" />
      </div>

      <div className="flex items-center">
        <Link to="/" className="active-button flex items-center gap-1 m-5 mt-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="black"
            className="size-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            />
          </svg>
          <p>Volver</p>
        </Link>
      </div>

      <div className="flex flex-col">
        <div id="form-container" className="mx-3 md:mx-[20%] form-animation">
          <iframe
            id="tally-iframe"
            src={`https://tally.so/embed/${getFormId()}?alignCenter=1&hideTitle=1&transparentBackground=1&dynamicHeight=1`}
            loading="lazy"
            width="100%"
            height="400"
            frameBorder={0}
            marginHeight={0}
            marginWidth={0}
            title="Formulario de valoración"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Tally;
