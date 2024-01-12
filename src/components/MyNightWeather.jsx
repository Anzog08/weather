import Image from "next/image";
import { CiHome } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { CiUser } from "react-icons/ci";

export const MyNightWeather = ({ weatherData }) => {
  const currentData = new Date().toDateString();
  return (
    <div className="flex w-[500px] h-[800px] bg-slate-900 rounded-3xl items-center  justify-center">
      <div className="flex w-[300px] h-[630px] bg-slate-800 rounded-3xl items-center justify-center">
        <div className="flex flex-col w-full h-[504px] p-8 gap-4 text-white">
          <p>{currentData}</p>
          <h1 className="font-medium text-2xl">{weatherData.name}</h1>
          <Image src="/icon.png" alt="" width={220} height={220} />
          <h2 className="font-extra-bold text-8xl">
            {Math.floor(weatherData?.main?.temp_min || "")}°
          </h2>
          <h3 className="text-blue-600 font-medium text-xl font-sans">
            {" "}
            {weatherData?.weather?.[0]?.main || ""}
          </h3>
          <div className="flex gap-10">
            <CiHome />
            <CiLocationOn />
            <CiHeart />
            <CiUser />
          </div>
        </div>
      </div>
    </div>
  );
};
