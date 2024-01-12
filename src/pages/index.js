import Image from "next/image";
import { Inter } from "next/font/google";
import { MyWeather } from "@/components/MyWeather";
import { MyNightWeather } from "@/components/MyNightWeather";
import { useState } from "react";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [weatherData, setWeatherData] = useState([]);

  return (
    <div>
      <div className="flex w-[1260px] h-[1110px] bg-gray-600 items-center justify-center">
        <div className="flex gap-3 absolute bg-slate-50 p-10 rounded-full">
          <img src="/Group 4.png" />
          <img src="/Vector.png" />
        </div>

        <MyWeather setWeatherData={setWeatherData} weatherData={weatherData} />
        <MyNightWeather weatherData={weatherData}/>
      </div>
    </div>
  );
}
