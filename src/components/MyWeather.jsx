import Image from "next/image";
import { CiHome } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import axios from "axios";
import { useState } from "react";
import { CiSearch } from "react-icons/ci";

export const MyWeather = ({ setWeatherData, weatherData }) => {
  const [inputValue, setInputValue] = useState("");
  const currentDate = new Date().toDateString();
  const fetchWeather = async () => {
    const api_key = "7c91776fb1267161889e298c3e7ceb4b";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&units=Metric&appid=${api_key}`;
    const res = await axios(url);
    setWeatherData(res.data);
  };
  console.log(weatherData);
  const iconStyle = {
    position: "absolute",
    left: "245px",
    top: "210px",
    transform: "translateY(-50%)",

    fontSize: "26px",
  };
  return (
    <div className="flex flex-col w-[500px] h-[800px] bg-slate-50 rounded-3xl items-center justify-center">
      <label>
        <button onClick={fetchWeather}>
          <CiSearch style={iconStyle} />
        </button>{" "}
        <input
          placeholder="Search"
          onChange={(e) => setInputValue(e.target.value)}
          className="rounded-3xl w-[290px] h-[40px] px-[40px] mb-[40px]"
        />
      </label>

      <div className="flex w-[295px] h-[650px] bg-white rounded-3xl items-center justify-center">
        <div className="flex flex-col w-full h-[504px] p-8 gap-4 ">
          <p>{currentDate}</p>
          <h1 className="font-medium text-2xl">{weatherData.name}</h1>
          <Image src="/sun.png" alt="" width={220} height={220} />
          <h2 className="font-extra-bold text-8xl">
            {Math.floor(weatherData?.main?.temp_max || "")}°
          </h2>
          <h3 className="text-orange-500 font-medium text-xl font-sans">
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
