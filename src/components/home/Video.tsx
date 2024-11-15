import { useState } from "react";
import PulseLoader from "react-spinners/PulseLoader";

const Video = () => {
  const [loading, setLoading] = useState(true);

  const handleLoadedData = () => {
    setLoading(false);
  };

  return (
    <>
      {loading && (
        <div className="w-full h-[400px] lg:w-[450px] mt-[80px] flex justify-center items-center">
          <PulseLoader color="#F04D79" speedMultiplier={0.5} />
        </div>
      )}
      <video
        src="/video/es.mp4"
        autoPlay
        loop
        playsInline
        controls
        muted
        className={`w-full sm:w-auto sm:h-[400px] md:h-[500px] lg:h-[600px] lg:rounded-tr-lg lg:rounded-br-lg mt-[80px] lg:mt-[100px] object-cover sm:object-contain transition-opacity duration-500 ${
          loading ? "hidden opacity-0" : "opacity-100"
        }`}
        onLoadedData={handleLoadedData}
      ></video>
    </>
  );
};

export default Video;
